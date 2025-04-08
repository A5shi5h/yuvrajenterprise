"use client";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="relative mx-4 md:mx-16 overflow-hidden bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 py-6 shadow-md">
      {/* Fade Effects on Edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-slate-700 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-slate-700 to-transparent z-10" />

      {/* Animated Marquee Content */}
      <motion.div
        className="whitespace-nowrap flex gap-12 text-4xl font-semibold font-serif text-white px-8 max-sm:text-xl max-sm:gap-8"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <span className="text-yellow-300 drop-shadow-lg">
          🏗️ Yuvraj Enterprise – Quality Hardware, Paints, Tiles, Electricals & More!
        </span>
        <span className="text-green-300 drop-shadow-lg">
          🏠 Visit us at Pakyong Bazaar, Sikkim | Best Prices Guaranteed
        </span>
        <span className="text-blue-300 drop-shadow-lg">
          💡 One-stop solution for all your construction needs!
        </span>
      </motion.div>
    </div>
  );
};

export default Marquee;
