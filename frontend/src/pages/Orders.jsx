import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./../context/ShopContext";
import Title from "../components/Title";
import { toast } from "react-toastify";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, currency, delivery_fee } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);

  const statusStyles = {
    "Order Placed": "bg-blue-500",
    Packing: "bg-yellow-500",
    Shipped: "bg-purple-500",
    "Out for Delivery": "bg-orange-500",
    Delivered: "bg-green-500",
  };

  const statusColor = (status) => {
    return statusStyles[status] || "bg-gray-500";
  };

  function formatDate(createdAt) {
    const date = new Date(createdAt);

    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" }); // "Jul"
    const year = date.getFullYear();

    return `${day} ${month}, ${year}`;
  }

  const loadOrderData = async () => {
    try {
      if (!token) return null;

      const response = await axios.post(
        `${backendUrl}/api/order/userorders`,
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        // Keep the order structure instead of flattening
        setOrderData(response.data.orders.reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const calculateOrderTotal = (items) => {
    return (
      items.reduce((total, item) => total + item.price * item.quantity, 0) +
      delivery_fee
    );
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t border-gray-300 pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div className="space-y-8">
        {orderData.map((order, orderIndex) => (
          <div
            key={orderIndex}
            className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm"
          >
            {/* Order Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 pb-4 border-b border-gray-100">
              <div className="mb-4 sm:mb-0">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Order #{orderIndex + 1}
                  </h3>
                  <div className="flex items-center gap-2">
                    <p
                      className={`min-w-2 h-2 rounded-full ${statusColor(
                        order.status
                      )}`}
                    ></p>
                    <p className="text-sm font-medium text-gray-700">
                      {order.status}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-gray-600">
                  <p>
                    Date:{" "}
                    <span className="font-medium">
                      {formatDate(order.createdAt)}
                    </span>
                  </p>
                  <p>
                    Payment:{" "}
                    <span className="font-medium">{order.paymentMethod}</span>
                  </p>
                  <p>
                    Total:{" "}
                    <span className="font-medium text-gray-800">
                      {currency}
                      {calculateOrderTotal(order.items)}
                    </span>
                  </p>
                </div>
              </div>
              <button
                onClick={loadOrderData}
                className="border border-gray-300 px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors"
              >
                Track Order
              </button>
            </div>

            {/* Order Items */}
            <div className="space-y-4">
              {order.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <img
                    className="w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-md"
                    src={item.image[0]}
                    alt={item.name}
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 mb-2">
                      {item.name}
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <p className="font-semibold text-gray-800">
                        {currency}
                        {item.price}
                      </p>
                      <p>Qty: {item.quantity}</p>
                      <p>Size: {item.size}</p>
                      <p className="font-medium text-gray-700">
                        Subtotal: {currency}
                        {item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
