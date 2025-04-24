"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PromoBanner = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between bg-white py-10 px-4 md:px-20">
      
      {/* Left Image Section with Animation */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/images/tools.jpg"
          alt="Tools Offer"
          width={700}
          height={450}
          className="rounded-lg shadow-lg shadow-black"
        />
      </motion.div>

      {/* Right Text Section with Animation */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center text-left md:pl-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          We also deal in tools
        </h2>
        <motion.p
          className="text-gray-600 mt-2 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Drill, Hammer, Cutter, Screwdrivers, Abrasives, Pliers, etc.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default PromoBanner;
