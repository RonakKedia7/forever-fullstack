import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const formatPrice = (amount) => {
  return amount.toFixed(2);
};

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {formatPrice(subtotal)}
          </p>
        </div>
        <hr className="text-gray-300" />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {formatPrice(delivery_fee)}
          </p>
        </div>
        <hr className="text-gray-300" />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency} {formatPrice(total)}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
