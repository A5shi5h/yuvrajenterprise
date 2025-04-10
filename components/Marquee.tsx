"use client";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="relative mx-4 md:mx-16 overflow-hidden py-4 bg-white rounded-md ">
      {/* Fade Effects on Edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Animated Marquee Content */}
      <motion.div
        className="whitespace-nowrap flex gap-12 text-2xl font-semibold font-serif text-gray-800 px-8 max-sm:text-lg max-sm:gap-8"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <span className="text-green-700 drop-shadow-sm">
          Yuvraj Enterprise – Quality Hardware, Paints, Tiles, Electricals & More!
        </span>
        <span className="text-blue-700 drop-shadow-sm">
          Visit us at Pakyong Bazaar, Sikkim | Best Prices Guaranteed
        </span>
        <span className="text-yellow-600 drop-shadow-sm">
          One-stop solution for all your construction needs!
        </span>
      </motion.div>
    </div>
  );
};

export default Marquee;
