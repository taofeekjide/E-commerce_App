import React from "react";
import logo from "../assets/Logo.jpg";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Contact Us</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>X</li>
            <li>+234-90-615-754-32</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-center text-gray-600 mt-5">
          © 2026 Recharge Sync. All rights reserved.
        </p>
      </div>
    </div>
  );
}
