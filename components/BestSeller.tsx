"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const bestSellers = [
  {
    title: "CONSTRUCTION",
    img: "/images/construction.jpg",
    link: "/category/construction",
  },
  {
    title: "ELECTRICAL GOODS",
    img: "/images/electrical goods.jpg",
    link: "/category/electrical-goods",
  },
  {
    title: "INTERIOR PAINTS",
    img: "/images/interior paint.jpg",
    link: "/category/interior-paints",
  },
  {
    title: "TILES",
    img: "/images/tiles.jpg",
    link: "/category/tiles",
  },
];

const BestSellers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="mt-10">
        <motion.h1
          ref={ref}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 text-center"
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Best Sellers
        </motion.h1>
      </div>
      <motion.div
        className="flex justify-center items-center w-full py-10 px-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl w-full bg-white rounded-lg overflow-hidden">
          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            {bestSellers.map((product, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Link href={product.link} className="block">
                  <div className="w-full h-60 md:h-80 lg:h-96 relative">
                    <Image
                      src={product.img}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                  <motion.div
                    className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 opacity-100 rounded-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <h3 className="text-white text-lg md:text-xl font-bold">
                      {product.title}
                    </h3>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BestSellers;
