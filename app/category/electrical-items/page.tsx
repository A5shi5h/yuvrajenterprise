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

const electricalItems = [
  {
    id: 1,
    name: "LED Bulbs",
    imageSrc: "/images/led bulb.jpg",
    imageAlt: "LED Bulbs",
    description: "Energy-efficient LED bulbs with long lifespan and bright illumination.",
  },
  {
    id: 2,
    name: "Wiring & Cables",
    imageSrc: "/images/wires.jpg",
    imageAlt: "Wiring & Cables",
    description: "Durable and safe electrical wiring for homes and commercial spaces.",
  },
  {
    id: 3,
    name: "Switches & Sockets",
    imageSrc: "/images/switches.jpg",
    imageAlt: "Switches & Sockets",
    description: "High-quality switches and sockets ensuring reliability and safety.",
  },
  {
    id: 4,
    name: "Ceiling Fans",
    imageSrc: "/images/ceiling fan.jpg",
    imageAlt: "Ceiling Fans",
    description: "Stylish and efficient ceiling fans with powerful air circulation.",
  },
];

const ElectricalItems = () => {
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
          OUR ELECTRICAL PRODUCTS
        </motion.h2>

        {/* Grid Display of Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {electricalItems.map((item) => (
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
            Why Choose Our Electrical Products?
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Yuvraj Enterprise, we provide top-quality electrical items for homes, offices, and industries. Our products are sourced from trusted brands, ensuring safety, efficiency, and durability.
          </p>

          <h3 className={`text-xl sm:text-3xl font-semibold text-gray-800 mt-6 ${inter.className}`}>
            Types of Electrical Products We Offer:
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            - LED Bulbs & Lighting: Energy-saving and long-lasting illumination.<br />
            - Electrical Wiring & Cables: High-quality insulated wires for secure connections.<br />
            - Switches & Sockets: Reliable electrical components for homes and businesses.<br />
            - Fans & Ventilation: Efficient cooling solutions for all environments.<br />
          </p>

          <h3 className={`text-xl sm:text-3xl font-semibold text-gray-800 mt-6 ${inter.className}`}>
            Benefits of Choosing the Right Electrical Goods
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            - Energy Efficiency: Reduce electricity bills with our energy-saving products.<br />
            - Safety Assurance: All products comply with industry safety standards.<br />
            - Durability & Reliability: Long-lasting materials for better performance.<br />
            - Modern Designs: Stylish electrical fittings to enhance interior aesthetics.<br />
          </p>
        </motion.div>
      </div>
    </div>

    {/* === Brand Marquee Starts === */}
    <div className="bg-white py-6">
            <div className="max-w-screen-xl mx-auto px-4">
              <div className="text-center mb-4">
              <h3 className={`text-xl sm:text-3xl font-semibold text-gray-800 mt-6 ${meriva.className}`}>Our Trusted Electrical Brands</h3>
              </div>

              <div className="relative overflow-hidden rounded-md">
                <motion.div
                  className="flex gap-12 px-8 items-center whitespace-nowrap"
                  initial={{ x: "-85%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  {[
                    "havells.png",
                    "anchor.png",
                    "legrand.png",
                    "syska.png",
                    "polycab.png",
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

export default ElectricalItems;
