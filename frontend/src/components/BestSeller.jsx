import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

export default function BestSeller() {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products?.length) {
      const bestProduct = products.filter(item => item.bestSeller);
      setBestSeller(bestProduct.slice(0, 5));
    }
  }, [products]);

  return (
    <section className="bg-[#FFFDF8] py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-12">
          <Title text1="Best" text2="Sellers" />
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-gray-600">
            Our most loved products, hand-picked by customers for quality,
            comfort, and style.
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {bestSeller.map(item => (
            <ProductItem
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
