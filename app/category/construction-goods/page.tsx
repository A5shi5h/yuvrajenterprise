"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import nextFont from "next/font/local";

const meriva = nextFont({
  src: "../../../public/fonts/meriva.ttf",
})

const inter = Inter({ subsets: ["latin"] });


const constructionGoods = [
  {
    id: 1,
    name: "Cement",
    imageSrc: "/images/cement.jpg",
    imageAlt: "High-quality cement",
    description: "Premium-grade cement for strong and durable constructions.",
  },
  {
    id: 2,
    name: "Steel Rods",
    imageSrc: "/images/steel rods.jpg",
    imageAlt: "Steel rods",
    description: "High-tensile steel rods for reinforced structural support.",
  },
  {
    id: 3,
    name: "Bricks & Blocks",
    imageSrc: "/images/bricks.jpg",
    imageAlt: "Bricks & concrete blocks",
    description: "Solid bricks and concrete blocks for sturdy wall construction.",
  },
  {
    id: 4,
    name: "Construction Chemicals",
    imageSrc: "/images/construction chemicals.jpg",
    imageAlt: "Construction chemicals",
    description: "Advanced chemicals for waterproofing, curing, and surface strengthening.",
  },
];

const ConstructionGoods = () => {
  return (
   <>
     <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title with Animation */}
        <motion.h2
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 text-center mb-10 ${meriva.className}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          OUR CONSTRUCTION GOODS COLLECTION
        </motion.h2>

        {/* Grid Display of Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {constructionGoods.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-full h-56">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
              <h3 className={`text-xl sm:text-3xl font-semibold text-gray-800 mt-6 ${inter.className}`}>{item.name}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Information Section */}
        <motion.div
          className="bg-white p-8 mt-12 shadow-lg rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3 className={`text-xl sm:text-3xl font-semibold text-gray-800 mt-2 ${inter.className}`}>
            Why Choose Our Construction Materials?
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Yuvraj Enterprise, we provide high-quality construction materials that ensure 
            strength, durability, and reliability. Our products are trusted by builders, engineers, 
            and contractors for residential and commercial projects.
          </p>

          <h3 className={`text-xl sm:text-3xl font-semibold text-gray-800 mt-6 ${inter.className}`}>
            Types of Construction Goods We Offer:
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            - Cement: Premium-grade cement for high-strength concrete structures.<br />
            - Steel Rods: Strong reinforcement bars for structural integrity.<br />
            - Bricks & Blocks: High-quality bricks and concrete blocks for solid walls.<br />
            - Construction Chemicals: Waterproofing solutions, adhesives, and curing compounds.<br />
          </p>

          <h3 className={`text-xl sm:text-3xl font-semibold text-gray-800 mt-6 ${inter.className}`}>
            Benefits of Choosing High-Quality Materials
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            - Durability & Strength: Ensures long-lasting buildings and structures.<br />
            - Reliable Performance: Meets industry standards for safety and quality.<br />
            - Cost-Effective Solutions: Reduces maintenance and repair costs over time.<br />
            - Eco-Friendly Options: Sustainable materials for green building solutions.<br />
          </p>
        </motion.div>
      </div>
    </div>

    {/* === Construction Brands Marquee === */}
        <div className="bg-white py-6">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-4">
            <h3 className={`text-xl sm:text-3xl font-semibold text-gray-800 mt-6 ${meriva.className}`}>Top Construction Brands We Offer</h3>
            </div>

            <div className="relative overflow-hidden rounded-md">
              <motion.div
                className="flex gap-12 px-8 items-center whitespace-nowrap"
                initial={{ x: "-85%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                {[
                  "ultratech.png",
                  "acc.png",
                  "ambuja.png",
                  "jkcement.png",
                  "shreecement.png",
                ].map((logo, index) => (
                  <div key={index} className="w-32 h-16 relative flex-shrink-0">
                    <Image
                      src={`/images/logos/${logo}`}
                      alt={`${logo.split(".")[0]} logo`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
    <Footer />
   </>
  );
};

export default ConstructionGoods;
