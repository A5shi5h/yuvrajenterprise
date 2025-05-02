"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Marquee = () => {
  return (
    <div className="relative mx-4 md:mx-16 overflow-hidden py-8 bg-white rounded-md">

      {/* Icon Row (inspired by uploaded image) */}
      <div className="flex justify-center items-center space-x-6 mb-6">
    
        {/* Insert your logo here */}
        <Image
          src="/images/logo.jpeg"
          alt="Yuvraj Logo"
          width={150}
          height={150}
          className="object-cover rounded-full shadow-lg shadow-black z-11 mb-10"
        />
      </div>

      {/* Fading Edges */}
      <div className="pointer-events-none absolute left-0 top-[7rem] h-[.1rem] w-1/2 bg-gradient-to-r from-white to-slate-600 z-10" />
      <div className="pointer-events-none absolute right-0 top-[7rem] h-[.1rem] w-1/2 bg-gradient-to-l from-white to-slate-600 z-10" />

      {/* Marquee Text */}
      <motion.div
        className="whitespace-nowrap flex gap-12 text-gray-600 text-lg leading-relaxed px-8 max-sm:text-lg max-sm:gap-8"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <span className="text-green-700">Yuvraj Enterprise –</span>
        <span>Quality Hardware, Paints, Tiles, Electricals & More!</span>
        <span>Visit us at Pakyong Bazaar, Sikkim | Best Prices Guaranteed</span>
        <span>One-stop solution for all your construction needs!</span>
      </motion.div>
    </div>
  );
};

export default Marquee;
