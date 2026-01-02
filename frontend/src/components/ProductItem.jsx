import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

export default function ProductItem({ id, name, image, price }) {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="group block bg-[#FFFDF8] rounded-xl overflow-hidden border border-gray-200 hover:border-purple-400 transition"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-[220px] object-cover transform group-hover:scale-110 transition duration-500"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-sm font-medium text-gray-800 truncate">
          {name}
        </p>

        <p className="mt-1 text-sm font-semibold text-purple-700">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
}
