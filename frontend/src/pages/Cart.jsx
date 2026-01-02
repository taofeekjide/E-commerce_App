import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { Trash2 } from "lucide-react";
import CartTotal from "../components/CartTotal";

export default function Cart() {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
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
  }, [cartItems]);

  return (
    <div className="border-t pt-16">
      {/* Title */}
      <div className="text-2xl mb-6">
        <Title text1={"Your"} text2={"Cart"} />
      </div>

      {/* Cart Items */}
      <div className="space-y-4">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={index}
              className="bg-[#FFF6EC] border border-black/10 rounded-xl p-4 grid grid-cols-[4fr_1fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              {/* Product */}
              <div className="flex items-start gap-5">
                <img
                  className="w-16 sm:w-20 rounded-lg border border-black/10"
                  src={productData.image[0]}
                  alt=""
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium text-black">
                    {productData.name}
                  </p>

                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <p className="font-medium">
                      {currency}
                      {productData.price}
                    </p>

                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">
                      {item.size}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                className="border border-black/20 rounded-md text-center py-1 w-14 sm:w-20 focus:outline-none focus:border-purple-600"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />

              {/* Remove */}
              <Trash2
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-5 cursor-pointer text-black/60 hover:text-purple-600 transition"
              />
            </div>
          );
        })}
      </div>

      {/* Cart Total */}
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[460px]">
          <CartTotal />

          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white text-sm mt-8 px-10 py-4 rounded-md hover:bg-purple-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
