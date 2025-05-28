"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Inter } from "next/font/google";
import nextFont from "next/font/local";

const meriva = nextFont({
  src: "../public/fonts/meriva.ttf",
})


const inter = Inter({ subsets: ["latin"] });

const services = [
  { title: "Project planning", icon: "📊", description: "Strategic blueprints for successful builds." },
  { title: "Project management", icon: "📈", description: "Efficient execution with expert coordination." },
  { title: "General contracting", icon: "🏗️", description: "Comprehensive solutions from start to finish." },
  { title: "Interior design", icon: "🛋️", description: "Stylish and functional interior spaces." },
  { title: "Exterior design", icon: "🏠", description: "Elevate curb appeal and structural beauty." },
  { title: "Space planning", icon: "📐", description: "Optimal layouts for your unique needs." },
];

export default function ServicesSection() {
  return (
    <div className="bg-[#f8f8f8] py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 ${meriva.className}`}>A comprehensive set of services</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We offer a wide array of construction-related services designed to meet the diverse needs of our clients with precision and care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 group hover:shadow-lg transition-all border hover:border-black"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <div className="flex items-center justify-between">
                <h3 className={`text-xl sm:text-3xl font-bold text-gray-800 mt-2 ${inter.className}`}>{service.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-black transition-all" />
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-10 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
        </motion.div>
      </div>
    </div>
  );
}
