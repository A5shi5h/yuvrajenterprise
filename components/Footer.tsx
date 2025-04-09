"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 text-white py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 grid md:grid-cols-4 gap-8"
      >
        {/* About the Shop */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-semibold text-lg">ABOUT THE SHOP</h3>
          <p className="text-sm mt-2 font-light">
            <strong>Yuvraj Enterprise </strong> is a trusted hardware store located in Pakyong Bazaar, Sikkim, offering a wide range of high-quality products for construction and home improvement. Specializing in tiles, paints, electrical goods, sanitary products, and construction materials, Yuvraj Enterprise is committed to providing top-notch supplies to meet the needs of homeowners, contractors, and builders.
          </p>
        </motion.div>

        {/* Popular Collections */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-semibold text-lg">POPULAR COLLECTIONS</h3>
          <ul className="text-sm mt-2 space-y-1">
            {["Interior Paints", "Cements", "Sanitary Goods", "Tiles"].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Information Links */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-semibold text-lg">INFORMATION</h3>
          <ul className="text-sm mt-2 space-y-1">
            {["About Us", "Contact Us", "Terms of Service"].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={"/images/img1.jpg"}
            alt="image"
            height={400}
            width={400}
            className="object-cover rounded-lg shadow-lg transition-transform hover:scale-105"
          />
        </motion.div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto mt-10 px-6 flex flex-col md:flex-row justify-between items-center border-t border-white pt-6"
      >
        <p className="text-sm">&copy; 2025 Yuvraj Enterprise</p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          {[Facebook, Instagram, Youtube, Linkedin].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              <Icon className="w-6 h-6" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
