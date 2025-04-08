"use client";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white py-4">
      {/* Fade Effects on Edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-white to-transparent  z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Animated Marquee Content */}
      <motion.div
        className="whitespace-nowrap flex gap-8 text-xl font-medium text-gray-800"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <span>🏗️ Yuvraj Enterprise – Quality Hardware, Paints, Tiles, Electricals, and More!</span>
        <span>🏠 Visit us at Pakyong Bazaar, Sikkim | Best Prices Guaranteed</span>
        <span>💡 One-stop solution for all your construction needs!</span>
      </motion.div>
    </div>
  );
};

export default Marquee;
