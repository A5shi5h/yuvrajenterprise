"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import Image from "next/image";

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
              height={50}
              width={50}
              objectFit="cover"
              className="rounded-full max-sm:h-14 max-sm:w-14 shadow-md shadow-black"
              loading="lazy"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-9 font-thin text-gray-800 text-md">
          <Link href="/" className="transition hover:bg-[#A3B2B5] p-2 rounded-lg">Home</Link>
          <Link href="/about" className="hover:bg-[#A3B2B5] p-2 rounded-lg transition">About</Link>
          <div
            className="relative group"
            onMouseEnter={() => setCategoryOpen(true)}
            onMouseLeave={() => setCategoryOpen(false)}
          >
            <button className="flex items-center gap-1 hover:bg-[#A3B2B5] p-2 rounded-lg transition">
              Category <ChevronDown className="w-4 h-4" />
            </button>
            <div
              className={`absolute top-8 left-0 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
                categoryOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
              }`}
            >
              <Link href="/category/tiles" className="block px-6 py-2 hover:bg-[#A3B2B5] text-sm">Tiles</Link>
              <Link href="/category/electrical-items" className="block px-6 py-2 hover:bg-[#A3B2B5] text-sm">Electrical Items</Link>
              <Link href="/category/interior-paint" className="block px-6 py-2 hover:bg-[#A3B2B5] text-sm">Interior Paints</Link>
              <Link href="/category/construction-goods" className="block px-6 py-2 hover:bg-[#A3B2B5] text-sm">Construction Goods</Link>
            </div>
          </div>
          <Link href="/contact" className="hover:bg-[#A3B2B5] p-2 rounded-lg transition">Contact</Link>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4 text-gray-700">
          <BsWhatsapp className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform hover:text-green-600" />
          <BsInstagram className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform hover:text-pink-600"/>
          <BsFacebook className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform hover:text-blue-600" />
          <Link href="/about"><MapPin className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform hover:text-red-600" /></Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 font-medium text-gray-800">
          <Link href="/" className="block py-2 border-b hover:text-green-600">Home</Link>
          <Link href="/about" className="block py-2 border-b hover:text-green-600">About</Link>
          <div>
            <button
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
      )}
    </nav>
  );
};

export default Navbar;
