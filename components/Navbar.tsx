"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-white">Yuvraj Enterprise</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-yellow-500">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-yellow-500">
            About Us
          </Link>

          {/* Dropdown for Category */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-white hover:text-yellow-500 flex items-center"
            >
              Category ▼
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md overflow-hidden">
                <Link
                  href="/category/tiles"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Tiles
                </Link>
                <Link
                  href="/category/electrical-items"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Electrical Items
                </Link>
                <Link
                  href="/category/contact-us"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="text-white hover:text-yellow-500">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isDropdownOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <Link href="/" className="block px-6 py-2 hover:bg-gray-700">
            Home
          </Link>
          <Link href="/about" className="block px-6 py-2 hover:bg-gray-700">
            About Us
          </Link>

          {/* Mobile Category Dropdown */}
          <button className="block w-full text-left px-6 py-2 hover:bg-gray-700">
            Category
          </button>
          <div className="bg-gray-700">
            <Link
              href="/category/tiles"
              className="block px-8 py-2 hover:bg-gray-600"
            >
              Tiles
            </Link>
            <Link
              href="/category/electrical-items"
              className="block px-8 py-2 hover:bg-gray-600"
            >
              Electrical Items
            </Link>
          </div>

          <Link href="/contact" className="block px-6 py-2 hover:bg-gray-700">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
