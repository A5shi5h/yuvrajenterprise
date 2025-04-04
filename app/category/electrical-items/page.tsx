"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

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
      <div className="bg-gray-100 py-12 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title with Animation */}
        <motion.h2
          className="text-3xl font-extrabold text-gray-900 text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Electrical Products
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
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose Our Electrical Products?
          </h3>
          <p className="text-gray-700">
            At Yuvraj Enterprise, we provide top-quality electrical items for homes, offices, and industries. Our products are sourced from trusted brands, ensuring safety, efficiency, and durability.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">
            Types of Electrical Products We Offer:
          </h3>
          <p className="text-gray-700">
            - LED Bulbs & Lighting: Energy-saving and long-lasting illumination.<br />
            - Electrical Wiring & Cables: High-quality insulated wires for secure connections.<br />
            - Switches & Sockets: Reliable electrical components for homes and businesses.<br />
            - Fans & Ventilation: Efficient cooling solutions for all environments.<br />
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">
            Benefits of Choosing the Right Electrical Goods
          </h3>
          <p className="text-gray-700">
            - Energy Efficiency: Reduce electricity bills with our energy-saving products.<br />
            - Safety Assurance: All products comply with industry safety standards.<br />
            - Durability & Reliability: Long-lasting materials for better performance.<br />
            - Modern Designs: Stylish electrical fittings to enhance interior aesthetics.<br />
          </p>
        </motion.div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ElectricalItems;
