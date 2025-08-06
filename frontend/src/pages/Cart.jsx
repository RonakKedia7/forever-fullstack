import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-12 border-gray-300">
      <div className="text-2xl mb-3 border-b border-gray-300">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.map(({ _id, size, quantity }, index) => {
          const productData = products.find((prod) => prod._id === _id);
          return (
            <div
              key={index}
              className="py-4 border-b text-gray-700 flex justify-between sm:grid sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-5 border-gray-300"
            >
              <div className="flex items-start gap-6">
                <img
                  src={productData.image[0]}
                  alt={productData.name}
                  className="w-11 sm:w-20"
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-3 sm:gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="text-xs sm:text-sm px-2 sm:px-3 sm:py-1 border border-gray-300 bg-slate-50">
                      {size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(_id, size, Number(e.target.value))
                }
                type="number"
                min={1}
                defaultValue={quantity}
                className="border border-gray-300 text-center sm:text-start max-w-12 sm:max-w-20 px-1 sm:px-2 py-1"
              />
              <img
                onClick={() => updateQuantity(_id, size, 0)}
                src={assets.bin_icon}
                alt="bin icon"
                className="w-3.5 mr-4 sm:w-5 cursor-pointer"
              />
            </div>
          );
        })}
      </div>

      {cartData.length > 0 && (
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className="w-full text-end">
              <button
                onClick={() => navigate("/place-order")}
                className="bg-black text-white text-sm my-8 px-8 py-3 cursor-pointer"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
