import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.jpg";
import { ChevronLeft, Menu, Search, ShoppingCart, User } from "lucide-react";
import { ShopContext } from "../context/ShopContext";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  const { setShowSearch } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={"/"}>
        <img src={logo} alt="Logo" className="w-12" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? "text-purple-600" : "text-gray-700"
            }`
          }
        >
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-purple-600 hidden group-[.active]:block" />
        </NavLink>

        <NavLink
          to="/collection"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? "text-purple-600" : "text-gray-700"
            }`
          }
        >
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-purple-600 hidden group-[.active]:block" />
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? "text-purple-600" : "text-gray-700"
            }`
          }
        >
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-purple-600 hidden group-[.active]:block" />
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? "text-purple-600" : "text-gray-700"
            }`
          }
        >
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-purple-600 hidden group-[.active]:block" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <Search
          onClick={() => setShowSearch(true)}
          className="w-5 cursor-pointer"
        />
        <div className="group relative">
          <User className="w-5 cursor-pointer" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to={"/cart"} className="relative">
          <ShoppingCart className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            4
          </p>
        </Link>
        <Menu
          onClick={() => setVisible(true)}
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* Sidebar menu for smaller screen */}

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <ChevronLeft className="h-4" />
            <p>Back</p>
          </div>
          <NavLink
            to="/"
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-6 pl-6 border ${
                isActive ? "text-purple-600 font-semibold" : "text-gray-600"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/collection"
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-6 pl-6 border ${
                isActive ? "text-purple-600 font-semibold" : "text-gray-600"
              }`
            }
          >
            Collection
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-6 pl-6 border ${
                isActive ? "text-purple-600 font-semibold" : "text-gray-600"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-6 pl-6 border ${
                isActive ? "text-purple-600 font-semibold" : "text-gray-600"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}
