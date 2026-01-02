import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { ShopContext } from "../context/ShopContext";

export default function PlaceOrder() {
  const [method, setMethod] = useState("Paystack");
  const { navigate } = useContext(ShopContext);

  return (
    <div className="bg-[#FFF8F0] min-h-screen py-10 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT — Delivery Info */}
        <div className="bg-white p-6 rounded-lg shadow">
          <Title text1="Delivery" text2="Information" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <input className="input" placeholder="First name" />
            <input className="input" placeholder="Last name" />
          </div>

          <input
            className="input mt-4"
            placeholder="Email Address"
            type="email"
          />
          <input className="input mt-4" placeholder="Street" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <input className="input" placeholder="City" />
            <input className="input" placeholder="State" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <input className="input" placeholder="Postal Code" />
            <input className="input" placeholder="Country" />
          </div>

          <input className="input mt-4" placeholder="Phone Number" />
        </div>

        {/* RIGHT — Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow flex flex-col gap-6">
          <CartTotal />

          <div>
            <Title text1="Payment" text2="Method" />
            <div
              onClick={() => setMethod("Paystack")}
              className={`flex items-center gap-3 mt-4 p-4 border rounded cursor-pointer ${
                method === "Paystack"
                  ? "border-purple-600 bg-purple-50"
                  : "border-gray-300"
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full border ${
                  method === "Paystack" ? "bg-purple-600" : ""
                }`}
              ></span>
              <p className="text-black font-medium">Pay with Paystack</p>
            </div>
          </div>

          <button
            onClick={() => navigate("/orders")}
            className="mt-auto bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
