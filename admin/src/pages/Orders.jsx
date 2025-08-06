import { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl, currency } from "./../App";
import { toast } from "react-toastify";
import {
  Package,
  User,
  MapPin,
  Phone,
  Calendar,
  CreditCard,
  DollarSign,
} from "lucide-react";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const statusStyles = {
    "Order Placed": "bg-blue-100 text-blue-800 border-blue-200",
    Packing: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Shipped: "bg-purple-100 text-purple-800 border-purple-200",
    "Out for Delivery": "bg-orange-100 text-orange-800 border-orange-200",
    Delivered: "bg-green-100 text-green-800 border-green-200",
  };

  const getStatusStyle = (status) => {
    return statusStyles[status] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  function formatDate(createdAt) {
    const date = new Date(createdAt);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  }

  const fetchAllOrders = async () => {
    if (!token) return null;
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        // Sort orders by creation date (most recent first)
        const sortedOrders = response.data.orders.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setOrders(sortedOrders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const statusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/status`,
        { orderId, status: e.target.value },
        { headers: { token } }
      );

      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Order Management
          </h1>
          <p className="text-gray-600">Manage and track all customer orders</p>
          <div className="mt-4 bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Total Orders
              </span>
              <span className="text-2xl font-bold text-pink-400">
                {orders.length}
              </span>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div
              key={order._id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              {/* Order Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-gray-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Order #{index + 1}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusStyle(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(order.createdAt)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span className="font-semibold text-gray-900">
                        {currency}
                        {order.amount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Items Section */}
                  <div className="lg:col-span-2">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Package className="w-4 h-4" />
                      Order Items ({order.items.length})
                    </h4>
                    <div className="space-y-3">
                      {order.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg"
                        >
                          {/* Product Image */}
                          <div className="flex-shrink-0">
                            <img
                              src={
                                item.image && item.image[0]
                                  ? item.image[0]
                                  : "/placeholder-image.jpg"
                              }
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-md border border-gray-200"
                              onError={(e) => {
                                e.target.src = "/placeholder-image.jpg";
                              }}
                            />
                          </div>

                          {/* Product Details */}
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 truncate">
                              {item.name}
                            </p>
                            <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                              <span>
                                Size:{" "}
                                <span className="font-medium">{item.size}</span>
                              </span>
                              <span>
                                Qty:{" "}
                                <span className="font-medium">
                                  {item.quantity}
                                </span>
                              </span>
                              {item.price && (
                                <span>
                                  Price:{" "}
                                  <span className="font-medium">
                                    {currency}
                                    {item.price}
                                  </span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Customer & Payment Info */}
                  <div className="space-y-6">
                    {/* Customer Info */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Customer Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p className="font-medium text-gray-900">
                          {order.address.firstName} {order.address.lastName}
                        </p>
                        <div className="flex items-start gap-2 text-gray-600">
                          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <div>
                            <p>{order.address.street}</p>
                            <p>
                              {order.address.city}, {order.address.state}
                            </p>
                            <p>
                              {order.address.country}, {order.address.zipcode}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="w-4 h-4" />
                          <p>{order.address.phone}</p>
                        </div>
                      </div>
                    </div>

                    {/* Payment Info */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <CreditCard className="w-4 h-4" />
                        Payment Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Method:</span>
                          <span className="font-medium">
                            {order.paymentMethod}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Status:</span>
                          <span
                            className={`font-medium ${
                              order.payment ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {order.payment ? "Paid" : "Pending"}
                          </span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-gray-200">
                          <span className="text-gray-600">Total:</span>
                          <span className="font-bold text-gray-900">
                            {currency}
                            {order.amount}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Update */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <label className="text-sm font-medium text-gray-700">
                      Update Order Status:
                    </label>
                    <select
                      onChange={(e) => statusHandler(e, order._id)}
                      value={order.status}
                      className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-sm min-w-48"
                    >
                      <option value="Order Placed">Order Placed</option>
                      <option value="Packing">Packing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Out for Delivery">Out for Delivery</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {orders.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No orders found
            </h3>
            <p className="text-gray-600">
              Orders will appear here once customers start placing them.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
