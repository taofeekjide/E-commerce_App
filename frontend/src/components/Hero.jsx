import React from "react";
import HeroImage from "../assets/Renny Fashions HomePage Banner.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-[#FFFDF8]">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse sm:flex-row items-center gap-10">

        {/* Left Content */}
        <div className="w-full sm:w-1/2 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
            <span className="w-10 h-[2px] bg-purple-600"></span>
            <p className="text-sm md:text-base font-medium tracking-wide text-gray-700">
              Our Best Sellers
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Discover the
            <span className="text-purple-600"> Latest Arrivals</span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-md mx-auto sm:mx-0">
            Elevate your style with premium fashion pieces crafted for comfort,
            elegance, and confidence.
          </p>

          <div className="mt-8 flex justify-center sm:justify-start">
            <Link to={'/collection'}>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-purple-700 transition">
              Shop Now
            </button></Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full sm:w-1/2">
          <img
            src={HeroImage}
            alt="Hero Banner"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
