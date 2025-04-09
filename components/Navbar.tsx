"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 shadow-lg z-50 p-2">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 py-4 flex justify-between items-center text-lg font-semibold">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-white text-xl font-bold">Yuvraj Enterprise</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-slate-400">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-slate-400">
            About Us
          </Link>

          {/* Dropdown for Category */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-white hover:text-slate-400 flex items-center"
            >
              Category ▼
            </button>

            <div
              className={`absolute left-0 mt-2 bg-white shadow-md rounded-md overflow-hidden min-w-[180px] transform transition-all duration-300 ease-in-out ${
                isDropdownOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <Link
                href="/category/tiles"
                className="block px-8 py-2 text-gray-800 hover:text-slate-500"
              >
                Tiles
              </Link>
              <Link
                href="/category/electrical-items"
                className="block px-8 py-2 text-gray-800 hover:text-slate-500"
              >
                Electrical Items
              </Link>
              <Link
                href="/category/interior-paint"
                className="block px-8 py-2 text-gray-800 hover:text-slate-500"
              >
                Interior Paints
              </Link>
              <Link
                href="/category/construction-goods"
                className="block px-8 py-2 text-gray-800 hover:text-slate-500"
              >
                Construction Goods
              </Link>
            </div>
          </div>

          <Link href="/contact" className="text-white hover:text-slate-500">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>☰</button>
        </div>
      </div>

      {/* Optional: Animate dropdown for mobile too if needed */}
    </nav>
  );
};

export default Navbar;
