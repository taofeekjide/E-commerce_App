import { BadgeCheckIcon, Headset, RotateCwSquareIcon } from "lucide-react";
import React from "react";

export default function OurPolicy() {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <RotateCwSquareIcon className="w-12 m-auto mb-5" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer free exhange policy</p>
      </div>

      <div>
        <BadgeCheckIcon className="w-12 m-auto mb-5" />
        <p className="font-semibold">24hrs return policy</p>
        <p className="text-gray-400">
          We provide free return policy within 24hrs
        </p>
      </div>

      <div>
        <Headset className="w-12 m-auto mb-5" />
        <p className="font-semibold">Customer Support</p>
        <p className="text-gray-400">We offer 24/7 customer support</p>
      </div>
    </div>
  );
}
