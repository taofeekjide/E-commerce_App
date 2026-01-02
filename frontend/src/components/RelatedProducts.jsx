import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

export default function RelatedProducts({ category, subCategory }) {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products?.length) {
      const filtered = products.filter(
        (item) =>
          item.category === category &&
          item.subCategory === subCategory
      );

      setRelated(filtered.slice(0, 5));
    }
  }, [products, category, subCategory]);

  if (!related.length) return null;

  return (
    <section className="mt-24 border-t border-black/10 pt-16 bg-[#FFF6EC]">
      {/* Heading */}
      <div className="text-center mb-12">
        <Title text1={"Related"} text2={"Products"} />
        <p className="text-sm text-black/60 mt-2">
          You may also like these similar items
        </p>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {related.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl border border-black/10 p-3 hover:shadow-lg transition"
          >
            <ProductItem
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
