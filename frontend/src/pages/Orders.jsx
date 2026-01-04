import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

export default function Orders() {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-14">
      {/* Page Title */}
      <div className="text-2xl mb-12">
        <Title text1={"My"} text2={"Orders"} />
      </div>

      {/* Orders List */}
      <div className="max-w-5xl mx-auto space-y-8">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="bg-[#FFF6EC] border border-black/10 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            {/* Left */}
            <div className="flex gap-6 items-start">
              <img
                src={item.image[0]}
                alt=""
                className="w-24 h-28 object-cover rounded-lg border"
              />

              <div className="space-y-2">
                <p className="font-medium text-black">{item.name}</p>

                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: Large</p>
                </div>

                <p className="text-xs text-gray-500">
                  Date: <span>25th August, 2025</span>
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col items-start md:items-end gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                <p className="text-sm text-gray-700">Ready to ship</p>
              </div>

              <button className="px-6 py-2 border border-black text-sm rounded-md hover:bg-black hover:text-white transition">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
