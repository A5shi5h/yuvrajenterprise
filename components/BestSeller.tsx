"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const bestSellers = [
  {
    title: "ELECTRICAL GOODS",
    img: "/images/electrical goods.jpg",
    link: "/category/wood-stainer",
  },
  {
    title: "INTERIOR PAINTS",
    img: "/images/interior paint.jpg",
    link: "/category/interior-paints",
  },
  {
    title: "TILES",
    img: "/images/tiles.jpg",
    link: "/category/trugrip-adhesive",
  },
];

const BestSellers = () => {
  return (
    <motion.div 
      className="flex justify-center items-center w-full py-10 px-5"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Yellow Section */}
        <motion.div 
          className="bg-yellow-500 p-10 flex flex-col justify-center items-center w-full md:w-1/4"
          initial={{ x: -50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-black">BEST SELLERS</h2>
          <p className="text-black mt-2 text-sm">Top selling Products</p>
        </motion.div>

        {/* Right Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-3/4">
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
                  className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 opacity-100"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <h3 className="text-white text-lg md:text-xl font-bold">{product.title}</h3>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BestSellers;
