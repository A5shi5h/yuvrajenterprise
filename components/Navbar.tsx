"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import Image from "next/image";
import nextFont from "next/font/local";

const sansation = nextFont({
  src: "../public/fonts/Sansation-Light.ttf",
});

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 bg-white transition-all duration-500 ease-in-out ${scrolled ? 'shadow-md' : 'shadow-none'}`}>
      <div className="max-w-7xl mx-auto px-2 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-green-700 font-bold text-xl sm:text-2xl">
          <Link href="/">
            <Image 
              src="/images/logo.jpeg"
              alt="logo"
              height={70}
              width={70}
              objectFit="cover"
              className="rounded-full max-sm:h-14 max-sm:w-14 shadow-md shadow-black"
              loading="lazy"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className={`${sansation.className} hidden md:flex items-center space-x-9 font-normal text-lg`}>
          <Link href="/" className="transition hover:bg-[#A3B2B5] p-2 rounded-lg">Home</Link>
          <Link href="/about" className="hover:bg-[#A3B2B5] p-2 rounded-lg transition">About</Link>
          <div
            className="relative group"
            onMouseEnter={() => setCategoryOpen(true)}
            onMouseLeave={() => setCategoryOpen(false)}
          >
            <button title="button" 
              className="flex items-center gap-1 hover:bg-[#A3B2B5] p-2 rounded-lg transition">
              Category <ChevronDown className="w-4 h-4" />
            </button>
            <div
              className={`absolute top-8 left-0 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
                categoryOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
              }`}
            >
              <Link href="/category/tiles" className="block px-6 py-2 hover:bg-[#A3B2B5] text-md">Tiles</Link>
              <Link href="/category/electrical-items" className="block px-6 py-2 hover:bg-[#A3B2B5] text-md">Electrical Items</Link>
              <Link href="/category/interior-paint" className="block px-6 py-2 hover:bg-[#A3B2B5] text-md">Interior Paints</Link>
              <Link href="/category/construction-goods" className="block px-6 py-2 hover:bg-[#A3B2B5] text-md">Construction Goods</Link>
            </div>
          </div>
          <Link href="/contact" className="hover:bg-[#A3B2B5] p-2 rounded-lg transition">Contact</Link>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4 text-gray-700">
          <BsWhatsapp className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform hover:text-green-600" />
          <BsInstagram className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform hover:text-pink-600"/>
          <BsFacebook className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform hover:text-blue-600" />
          <Link href="/about"><MapPin className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform hover:text-red-600" /></Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button title="button" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button title="button" 
            onClick={() => setMobileMenuOpen(false)}>
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="px-4 pb-4 space-y-2 font-normal text-sm text-gray-800">
          <Link href="/" className="block py-2 border-b hover:text-green-600">Home</Link>
          <Link href="/about" className="block py-2 border-b hover:text-green-600">About</Link>
          <div>
            <button title="button"
              onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
              className="w-full text-left py-2 flex justify-between items-center hover:text-green-600"
            >
              Category <ChevronDown className={`w-4 h-4 transform transition-transform ${mobileCategoryOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileCategoryOpen && (
              <div className="ml-4 mt-1 space-y-1">
                <Link href="/category/tiles" className="block py-1 hover:text-green-600">Tiles</Link>
                <Link href="/category/electrical-items" className="block py-1 hover:text-green-600">Electrical Items</Link>
                <Link href="/category/interior-paint" className="block py-1 hover:text-green-600">Interior Paints</Link>
                <Link href="/category/construction-goods" className="block py-1 hover:text-green-600">Construction Goods</Link>
              </div>
            )}
          </div>
          <Link href="/contact" className="block py-2 border-t hover:text-green-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
