"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MapPin, Mail } from "lucide-react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import Image from "next/image";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showHeading = pathname === "/" && !scrolled;

  return (
    <nav className={`sticky top-0 z-50 bg-white border-b border-slate-300 transition-all duration-500 ease-in-out ${scrolled ? 'shadow-md' : 'shadow-none'}`}>
      {showHeading && (
        <div className={`text-center transition-all duration-500 ease-in-out max-sm:hidden ${scrolled ? 'p-1 text-sm' : 'p-2'}`}>
        <h1 className={`font-bold transition-all duration-500 ${scrolled ? 'text-xl' : 'text-2xl'}`}>YUV RAJ ENTERPRISE</h1>
        <h2 className={`font-semibold transition-all duration-500 ${scrolled ? 'text-base' : 'text-lg'} pt-1`}>
          HARDWARE RETAIL STORE
        </h2>
        <p className={`font-thin transition-all duration-500 ${scrolled ? 'text-sm' : 'text-lg'} pt-1`}>
          Deals in Tiles, Electrical Goods, Sanitary Products and Construction Materials
        </p>
      </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-green-700 font-bold text-xl sm:text-2xl">
          <Link href="/">
            <Image 
               src="/images/logo.jpeg"
               alt="logo"
               height={70}
               width={70}
               objectFit="cover"
               className="rounded-full max-sm:h-14 max-sm:w-14"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-800">
          <Link href="/" className="hover:text-green-600 transition">Home</Link>
          <Link href="/about" className="hover:text-green-600 transition">About</Link>

          {/* Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setCategoryOpen(true)}
            onMouseLeave={() => setCategoryOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-green-600 transition">
              Category <ChevronDown className="w-4 h-4" />
            </button>
            <div
              className={`absolute top-8 left-0 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
                categoryOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
              }`}
            >
              <Link href="/category/tiles" className="block px-6 py-2 hover:bg-green-50 text-sm">Tiles</Link>
              <Link href="/category/electrical-items" className="block px-6 py-2 hover:bg-green-50 text-sm">Electrical Items</Link>
              <Link href="/category/interior-paint" className="block px-6 py-2 hover:bg-green-50 text-sm">Interior Paints</Link>
              <Link href="/category/construction-goods" className="block px-6 py-2 hover:bg-green-50 text-sm">Construction Goods</Link>
            </div>
          </div>

          <Link href="/contact" className="hover:text-green-600 transition">Contact</Link>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4 text-gray-700">
          <BsWhatsapp className="w-5 h-5 cursor-pointer" />
          <BsInstagram className="w-5 h-5 cursor-pointer" />
          <BsFacebook className="w-5 h-5 cursor-pointer" />
          <Link href="/about"><MapPin className="w-5 h-5 cursor-pointer" /></Link>
          <Mail className="w-5 h-5 cursor-pointer" />
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

          {/* Mobile Dropdown */}
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
