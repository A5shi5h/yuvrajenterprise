"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const Tiles = () => {
    
    const tiles = [
        {
          id: 1,
          name: "Ceramic Tiles",
          imageSrc: "/images/ceramic tiles.jpg",
          imageAlt: "Ceramic tiles",
          description: "Durable and easy to maintain, ideal for floors and walls.",
        },
        {
          id: 2,
          name: "Porcelain Tiles",
          imageSrc: "/images/porcelain tiles.jpg",
          imageAlt: "Porcelain tiles",
          description: "Dense and water-resistant, suitable for indoor and outdoor use.",
        },
        {
          id: 3,
          name: "Mosaic Tiles",
          imageSrc: "/images/mosiac tiles.jpg",
          imageAlt: "Mosaic tiles",
          description: "Small tiles that create intricate patterns and designs.",
        },
        {
          id: 4,
          name: "Glass Tiles",
          imageSrc: "/images/glass tiles.jpg",
          imageAlt: "Glass tiles",
          description: "Reflective and colorful, perfect for backsplashes and accents.",
        },
      ];
      
      
  return (
    <>
      <div className="bg-gray-100 py-12 mt-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tiles Collection Section */}
        <motion.h2
          className="text-3xl font-extrabold text-gray-900 text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Tile Collections
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiles.map((tile) => (
            <motion.div
              key={tile.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-full h-56">
                <Image
                  src={tile.imageSrc}
                  alt={tile.imageAlt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{tile.name}</h3>
                <p className="text-gray-600 mt-2">{tile.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tiles Information Section */}
        <motion.div
          className="bg-white p-8 mt-12 shadow-lg rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose Our Tiles?
          </h3>
          <p className="text-gray-700">
            Tiles are an essential part of home and commercial space aesthetics, offering durability, easy maintenance, and a variety of styles. At Yuvraj Enterprise, we provide high-quality ceramic, porcelain, mosaic, and glass tiles that suit every taste and requirement.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">
            Which Tiles are Best for Different Spaces?
          </h3>
          <p className="text-gray-700">
            - Ceramic Tiles: Perfect for walls and indoor floors due to their affordability and variety.<br />
            - Porcelain Tiles: Highly durable and ideal for high-traffic areas such as hallways and outdoor spaces.<br />
            - Mosaic Tiles: Great for adding artistic patterns to backsplashes and bathrooms.<br />
            - Glass Tiles: Reflective and stylish, ideal for modern interiors and accent walls.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">
            Benefits of Choosing High-Quality Tiles
          </h3>
          <p className="text-gray-700">
            - Durability: Our tiles are resistant to scratches, stains, and moisture.<br />
            - Low Maintenance: Easy to clean and maintain, making them a long-lasting investment.<br />
            - Stylish Designs: Available in a variety of colors, textures, and finishes to match your space.<br />
            - Eco-Friendly Options: We offer sustainable tile solutions that contribute to a greener environment.
          </p>
        </motion.div>
      </div>
    </div>

    {/* === Brand Marquee Starts === */}
          <div className="bg-white py-6">
            <div className="max-w-screen-xl mx-auto px-4">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Our Trusted Tile Brands</h3>
              </div>

              <div className="relative overflow-hidden rounded-md">
                <motion.div
                  className="flex gap-12 px-8 items-center whitespace-nowrap"
                  initial={{ x: "-85%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  {[
                    "kajaria.png",
                    "somany.png",
                    "orientbell.png",
                    "johnson.png",
                    "nitco.png",
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

export default Tiles;
