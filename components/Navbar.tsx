"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import Image from "next/image";
import nextFont from "next/font/local";

const sansation = nextFont({ src: "../public/fonts/Sansation-Light.ttf" });

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/95 shadow-sm z-[9999]">
        <nav className="w-full h-[92px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/images/logo.jpeg"
                  alt="logo"
                  height={60}
                  width={60}
                  className="rounded-full transition-all duration-300 shadow-md shadow-black/20"
                  priority
                />
              </Link>

              {/* Desktop Menu */}
              <div className={`${sansation.className} hidden lg:flex items-center space-x-8 font-extrabold`}>
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/about" className="nav-link">About</Link>
                <div
                  className="relative group"
                  onMouseEnter={() => setCategoryOpen(true)}
                  onMouseLeave={() => setCategoryOpen(false)}
                >
                  <button 
                    title="category-button"
                    className="nav-link flex items-center gap-1"
                  >
                    Category <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div
                    className={`absolute top-full left-0 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-200 ${
                      categoryOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
                    }`}
                  >
                    <div className="py-2">
                      <Link href="/category/tiles" className="dropdown-link">Tiles</Link>
                      <Link href="/category/electrical-items" className="dropdown-link">Electrical Items</Link>
                      <Link href="/category/interior-paint" className="dropdown-link">Interior Paints</Link>
                      <Link href="/category/construction-goods" className="dropdown-link">Construction Goods</Link>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="nav-link">Contact</Link>
              </div>

              {/* Social Icons - Desktop */}
              <div className="hidden lg:flex items-center space-x-4">
                <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="social-icon hover:text-green-600">
                  <BsWhatsapp className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-icon hover:text-pink-600">
                  <BsInstagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-icon hover:text-blue-600">
                  <BsFacebook className="w-5 h-5" />
                </a>
                <Link href="/about" className="social-icon hover:text-red-600">
                  <MapPin className="w-5 h-5" />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                title="Toggle Menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-6 rounded-md hover:bg-gray-100 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-[5rem]" aria-hidden="true" />

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998] transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 w-[70%] h-screen bg-white shadow-xl transform transition-all duration-500 ease-in-out lg:hidden z-[9999] ${
          mobileMenuOpen 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-full opacity-0'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex justify-end p-4">
            <button
              title="Close Menu"
              onClick={() => setMobileMenuOpen(false)}
              className="p-6 rounded-md hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className={`flex-1 px-4 pb-6 space-y-2 overflow-y-auto ${sansation.className}`}>
            {/* Mobile Menu Links */}
            <div className="space-y-1">
              <Link 
                href="/" 
                className="block py-3 text-base font-medium text-gray-800 hover:text-gray-900 border-b border-gray-200 transition-colors" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block py-3 text-base font-medium text-gray-800 hover:text-gray-900 border-b border-gray-200 transition-colors" 
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              
              <div className="border-b border-gray-200">
                <button
                  onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                  className="w-full py-3 flex justify-between items-center text-base font-medium text-gray-800 hover:text-gray-900"
                >
                  Category
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileCategoryOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileCategoryOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <Link 
                    href="/category/tiles" 
                    className="block py-2 pl-4 text-base text-gray-700 hover:text-gray-900 transition-colors" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Tiles
                  </Link>
                  <Link 
                    href="/category/electrical-items" 
                    className="block py-2 pl-4 text-base text-gray-700 hover:text-gray-900 transition-colors" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Electrical Items
                  </Link>
                  <Link 
                    href="/category/interior-paint" 
                    className="block py-2 pl-4 text-base text-gray-700 hover:text-gray-900 transition-colors" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Interior Paints
                  </Link>
                  <Link 
                    href="/category/construction-goods" 
                    className="block py-2 pl-4 text-base text-gray-700 hover:text-gray-900 transition-colors" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Construction Goods
                  </Link>
                </div>
              </div>
              
              <Link 
                href="/contact" 
                className="block py-3 text-base font-medium text-gray-800 hover:text-gray-900 border-b border-gray-200 transition-colors" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>

            {/* Social Icons - Mobile */}
            <div className="flex items-center p-4 mt-6">
              <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-gray-100 hover:text-green-600 transition-all duration-200">
                <BsWhatsapp className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-gray-100 hover:text-pink-600 transition-all duration-200">
                <BsInstagram className="w-6 h-6" />
              </a>
              <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-gray-100 hover:text-blue-600 transition-all duration-200">
                <BsFacebook className="w-6 h-6" />
              </a>
              <Link href="/about" className="p-3 rounded-full hover:bg-gray-100 hover:text-red-600 transition-all duration-200">
                <MapPin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
