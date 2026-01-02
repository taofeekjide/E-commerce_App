import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

export default function CartTotal() {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full bg-[#FFF6EC] border border-black/10 rounded-2xl p-6">
      {/* Title */}
      <div className="text-2xl mb-4">
        <Title text1={"Cart"} text2={"Total"} />
      </div>

      {/* Breakdown */}
      <div className="flex flex-col gap-3 text-sm text-black/80">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p className="font-medium">
            {currency} {getCartAmount()}.00
          </p>
        </div>

        <hr className="border-black/10" />

        <div className="flex justify-between">
          <p>Delivery Fee</p>
          <p className="font-medium">
            {currency} {delivery_fee}.00
          </p>
        </div>

        <hr className="border-black/10" />

        <div className="flex justify-between text-base font-semibold text-black">
          <p>Total</p>
          <p className="text-purple-700">
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
            .00
          </p>
        </div>
      </div>
    </div>
  );
}
