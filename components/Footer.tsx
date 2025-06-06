"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import nextFont from "next/font/local";

const sansation = nextFont({
  src: "../public/fonts/Sansation-Light.ttf",
});

const meriva = nextFont({
  src: "../public/fonts/meriva.ttf",
});

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
          <h3 className={`${meriva.className} font-semibold text-lg sm:text-center pb-6`}>ABOUT THE SHOP</h3>
          <p className={`${sansation.className} text-white text-lg leading-relaxed`}>
            <strong>Yuvraj Enterprise</strong> is a trusted hardware store located in Pakyong Bazaar, Sikkim, offering a wide range of high-quality products for construction and home improvement. Specializing in tiles, paints, electrical goods, sanitary products, and construction materials, Yuvraj Enterprise is committed to providing top-notch supplies to meet the needs of homeowners, contractors, and builders.
          </p>
        </motion.div>

        {/* Popular Collections */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className={`${meriva.className} font-semibold text-lg sm:text-center mb-6`}>POPULAR COLLECTIONS</h3>
          <ul className="text-sm mt-2 space-y-1">
            {["Interior Paints", "Cements", "Sanitary Goods", "Tiles"].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`${sansation.className} text-white text-lg leading-relaxed sm:text-center`}
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
          <h3 className={`${meriva.className} font-semibold text-lg sm:text-center mb-6`}>INFORMATION</h3>
          <ul className="text-sm mt-2 space-y-1">
            {["About Us", "Contact Us", "Terms of Service"].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`${sansation.className} text-white text-lg leading-relaxed sm:text-center`}
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
        className="container mx-auto mt-10 px-6 pt-6"
      >
        <p className={`${sansation.className} text-md text-center`}>&copy; 2025 Yuvraj Enterprise</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
