import React from "react";
import Title from "../components/Title";
import logo from "../assets/Logo.jpg";
import Newsletter from "../components/Newsletter";

export default function Contact() {
  return (
    <div className="border-t pt-14">
      {/* Title */}
      <div className="text-center mb-16">
        <Title text1={"Contact"} text2={"Us"} />
        <p className="text-sm text-gray-500 mt-3">
          We'd love to hear from you
        </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row items-center gap-14 max-w-6xl mx-auto px-4">
        {/* Image */}
        <div className="flex-1">
          <img
            src={logo}
            alt="Contact"
            className="w-full max-w-md mx-auto rounded-2xl border border-black/10 bg-[#FFF6EC] p-6"
          />
        </div>

        {/* Info */}
        <div className="flex-1 bg-[#FFF6EC] rounded-2xl p-8 border border-black/10">
          <h3 className="text-xl font-semibold text-black mb-4">
            Our Store
          </h3>

          <p className="text-gray-600 mb-2">
            Ikeja, Lagos
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Tel: <span className="text-black font-medium">+234-906-157-5432</span>
            <br />
            Email:{" "}
            <span className="text-black font-medium">
              admin@rechargesync.com.ng
            </span>
          </p>

          <p className="text-sm text-gray-500 mb-6">
            Learn more about our brand, values, and commitment to quality.
          </p>

          <button className="bg-black text-white px-8 py-3 rounded-md text-sm hover:bg-purple-700 transition">
            Explore
          </button>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-32">
        <Newsletter />
      </div>
    </div>
  );
}
