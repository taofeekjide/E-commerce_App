import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.jpg";
import { ChevronLeft, Menu, Search, ShoppingCart, User } from "lucide-react";
import { ShopContext } from "../context/ShopContext";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <header className="sticky top-0 z-50 bg-[#FFFDF8] border-b">
      <div className="flex items-center justify-between px-4 sm:px-10 py-4 font-medium">
        
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-14 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-8 text-sm">
          {["/", "/collection", "/about", "/contact"].map((path, i) => {
            const labels = ["Home", "Collection", "About", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `relative pb-1 transition ${
                    isActive
                      ? "text-purple-600"
                      : "text-gray-700 hover:text-purple-600"
                  }`
                }
              >
                {labels[i]}
                <span
                  className={`absolute left-1/2 -bottom-1 h-[2px] w-0 bg-purple-600 transition-all duration-300 ${
                    location.pathname === path ? "w-1/2 left-1/4" : ""
                  }`}
                />
              </NavLink>
            );
          })}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <Search
            onClick={() => setShowSearch(true)}
            className="w-5 cursor-pointer text-gray-700 hover:text-purple-600 transition"
          />

          {/* User dropdown */}
          <div className="relative group">
            <Link to={'/login'}>
            <User className="w-5 cursor-pointer text-gray-700 hover:text-purple-600 transition" /></Link>
            
            <div className="absolute right-0 pt-3 hidden group-hover:block">
              <div className="bg-white border rounded-lg shadow-md w-40 text-sm">
                <p className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                  My Profile
                </p>
                <p className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                  Orders
                </p>
                <p className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-red-500">
                  Logout
                </p>
              </div>
            </div>
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-5 text-gray-700 hover:text-purple-600 transition" />
            <span className="absolute -right-2 -bottom-2 w-4 h-4 bg-purple-600 text-white text-[10px] flex items-center justify-center rounded-full">
              {getCartCount()}
            </span>
          </Link>

          {/* Mobile menu */}
          <Menu
            onClick={() => setVisible(true)}
            className="w-6 cursor-pointer sm:hidden text-gray-700"
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-3 px-6 py-5 border-b cursor-pointer"
          >
            <ChevronLeft className="w-5" />
            <span className="text-sm">Back</span>
          </div>

          {["/", "/collection", "/about", "/contact"].map((path, i) => {
            const labels = ["Home", "Collection", "About", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={() => setVisible(false)}
                className={({ isActive }) =>
                  `px-6 py-5 border-b text-sm transition ${
                    isActive
                      ? "text-purple-600 font-semibold bg-purple-50"
                      : "text-gray-700"
                  }`
                }
              >
                {labels[i]}
              </NavLink>
            );
          })}
        </div>
      </div>
    </header>
  );
}

