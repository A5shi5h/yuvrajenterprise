"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const images = ["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="pt-[50px] max-sm:pt-4 px-4">
      {/* Header Text Above Slider */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h1
              className={`text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 ${inter.className}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              YUV RAJ ENTERPRISE
            </motion.h1>

            <motion.h2
              className={`text-xl sm:text-3xl text-gray-800 mt-2 ${inter.className}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              HARDWARE RETAIL STORE
            </motion.h2>

            <motion.p
              className="text-md sm:text-lg text-gray-700 mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Deals in Tiles, Electrical Goods, Sanitary Products and Construction Materials
            </motion.p>
          </motion.div>


      {/* Slider */}
      <div className="relative flex justify-center items-center">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-[95%] md:w-[90%] lg:w-[85%] h-[450px] sm:h-[500px] mx-auto rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src={images[currentIndex]}
            alt="Hero Image"
            fill
            className="object-cover rounded-lg"
          />

          {/* Navigation Buttons */}
          <button
            title="prev-slide"
            onClick={prevSlide}
            className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 transition"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            title="next-slide"
            onClick={nextSlide}
            className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 transition"
          >
            <FaArrowRight size={20} />
          </button>
        </motion.div>

        {/* Dots Navigation */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              title="dot-navigation"
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition ${
                currentIndex === index ? "bg-white" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
