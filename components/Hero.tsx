"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import nextFont from "next/font/local";

const meriva = nextFont({ src: "../public/fonts/meriva.ttf" });
const sansation = nextFont({ src: "../public/fonts/Sansation-Light.ttf" });

const images = ["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg"];

const Hero = ({ isLoaded }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative px-4 overflow-hidden mt-28 bg-white">

      {/* Dual curtain loader */}
      {!isLoaded && (
        <>
          <motion.div
            initial={{ height: "50%" }}
            animate={{ height: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="fixed top-0 left-0 w-full bg-black z-[9999] origin-top"
          />
          <motion.div
            initial={{ height: "50%" }}
            animate={{ height: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="fixed bottom-0 left-0 w-full bg-black z-[9999] origin-bottom"
          />
        </>
      )}

      {/* Header Content after Slider */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.h1
          className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 ${meriva.className}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          YUV RAJ ENTERPRISE
        </motion.h1>

        <motion.h2
          className={`text-xl sm:text-3xl font-bold text-gray-800 mt-2 ${meriva.className}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          HARDWARE RETAIL STORE
        </motion.h2>

        <motion.p
          className={`${sansation.className} text-md sm:text-xl font-light text-gray-700 mt-2`}
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          Deals in Tiles, Electrical Goods, Sanitary Products and Construction Materials
        </motion.p>
      </motion.div>

      {/* Image Slider */}
      <div className={`${!isLoaded ? "invisible" : "visible"} transition-opacity duration-700`}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative w-[95%] md:w-[90%] lg:w-[85%] h-[450px] sm:h-[500px] mx-auto rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src={images[currentIndex]}
            alt="Hero Image"
            fill
            className="object-cover rounded-lg"
            loading="lazy"
          />
          <button
            title="prev-slide"
            onClick={() =>
              setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
            }
            className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 transition"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            title="next-slide"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
            className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 transition"
          >
            <FaArrowRight size={20} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                title="dot"
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition ${
                  currentIndex === index ? "bg-white" : "bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
