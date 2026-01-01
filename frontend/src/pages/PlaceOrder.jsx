import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { ShopContext } from "../context/ShopContext";

export default function PlaceOrder() {

  const [method, setMethod] = useState('Paystack');

  const {navigate} = useContext(ShopContext)

  return (
    <div className="">
      <div>
        <div>
          <Title text1={"Delivery"} text2={"Information"} />
        </div>
        <div className="">
          <input placeholder="First name" type="text" />
          <input placeholder="Last name" type="text" />
        </div>
        <input placeholder="Email Address" type="email" />
        <input placeholder="Street" type="text" />
        <div className="">
          <input placeholder="City" type="text" />
          <input placeholder="State" type="text" />
        </div>
        <div className="">
          <input placeholder="Postal Code" type="number" />
          <input placeholder="Country" type="text" />
        </div>
        <input placeholder="Phone Number" type="number" />
      </div>

      <div>
        <div>
          <CartTotal />
        </div>
        <div>
          <Title text1={"Payment"} text2={"Method"} />
        </div>
        <div>
          <div onClick={() => setMethod('Paystack')} >
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'Paystack' ? 'bg-green-400' : ''} `}></p>
            <p>Pay with Paystack</p>
          </div>
        </div>
        <div>
          <button onClick={() => navigate('/orders')} >Place Order</button>
        </div>
      </div>
    </div>
  );
}
