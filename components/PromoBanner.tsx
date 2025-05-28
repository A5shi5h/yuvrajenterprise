"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import nextFont from "next/font/local";

const meriva = nextFont({
  src: "../public/fonts/meriva.ttf",
})

const PromoBanner = () => {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image Section with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/images/tools.jpg"
            alt="Tools Offer"
            width={700}
            height={450}
            className="rounded-lg shadow-lg shadow-black w-full h-auto"
          />
        </motion.div>

        {/* Right Text Section with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 ${meriva.className}`}>
            We also deal in tools
          </h2>
          <motion.p
            className="text-gray-600 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Drill, Hammer, Cutter, Screwdrivers, Abrasives, Pliers, etc.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

export default PromoBanner;
