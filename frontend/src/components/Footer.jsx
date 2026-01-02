import React from "react";
import logo from "../assets/Logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#FFFDF8] mt-40 px-6 sm:px-16">
      {/* Top section */}
      <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 py-16 text-sm">

        {/* Brand */}
        <div>
          <img src={logo} className="mb-5 w-32" alt="Logo" />
          <p className="text-gray-600 leading-relaxed max-w-md">
            Discover quality fashion pieces curated for style, comfort, and
            confidence. Shop smart. Dress better.
          </p>
        </div>

        {/* Company */}
        <div>
          <p className="text-lg font-semibold mb-5 text-black">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-purple-600 cursor-pointer">Home</li>
            <li className="hover:text-purple-600 cursor-pointer">About</li>
            <li className="hover:text-purple-600 cursor-pointer">Delivery</li>
            <li className="hover:text-purple-600 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-lg font-semibold mb-5 text-black">Contact Us</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-purple-600 cursor-pointer">Facebook</li>
            <li className="hover:text-purple-600 cursor-pointer">Instagram</li>
            <li className="hover:text-purple-600 cursor-pointer">X</li>
            <li className="font-medium text-black">+234 906 157 5432</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 py-6">
        <p className="text-center text-gray-500 text-xs sm:text-sm">
          © {new Date().getFullYear()} Renny Fashions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
