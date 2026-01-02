import { BadgeCheckIcon, Headset, RotateCwSquareIcon } from "lucide-react";
import React from "react";

export default function OurPolicy() {
  return (
    <section className="bg-[#FFFDF8] py-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-10">
        
        {/* Policy Card */}
        <div className="flex flex-col items-center text-center p-8 border rounded-xl hover:shadow-md transition">
          <RotateCwSquareIcon className="w-12 h-12 text-purple-600 mb-5" />
          <p className="font-semibold text-black mb-2">
            Easy Exchange Policy
          </p>
          <p className="text-gray-500 text-sm">
            We offer a hassle-free exchange process for all orders.
          </p>
        </div>

        {/* Policy Card */}
        <div className="flex flex-col items-center text-center p-8 border rounded-xl hover:shadow-md transition">
          <BadgeCheckIcon className="w-12 h-12 text-purple-600 mb-5" />
          <p className="font-semibold text-black mb-2">
            24-Hour Return Policy
          </p>
          <p className="text-gray-500 text-sm">
            Free returns within 24 hours of receiving your item.
          </p>
        </div>

        {/* Policy Card */}
        <div className="flex flex-col items-center text-center p-8 border rounded-xl hover:shadow-md transition">
          <Headset className="w-12 h-12 text-purple-600 mb-5" />
          <p className="font-semibold text-black mb-2">
            Customer Support
          </p>
          <p className="text-gray-500 text-sm">
            24/7 support to assist you anytime you need help.
          </p>
        </div>

      </div>
    </section>
  );
}
