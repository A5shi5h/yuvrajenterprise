"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import nextFont from "next/font/local";

const meriva = nextFont({
  src: "../public/fonts/meriva.ttf",
})

const sansation = nextFont({
  src: "../public/fonts/Sansation-Light.ttf",
});

const bestSellers = [
  {
    title: "CONSTRUCTION",
    subtitle: "Bricks, Cement, Sand, etc.",
    number: "01",
    link: "/category/construction-goods",
    img: "/images/construction.jpg",
  },
  {
    title: "ELECTRICAL GOODS",
    subtitle: "Switches, Wires, Lights, etc.",
    number: "02",
    link: "/category/electrical-items",
    img: "/images/electrical goods.jpg",
  },
  {
    title: "INTERIOR PAINTS",
    subtitle: "Textures, Waterproof, etc.",
    number: "03",
    link: "/category/interior-paint",
    img: "/images/interior paint.jpg",
  },
  {
    title: "TILES",
    subtitle: "Flooring, Wall, Bathroom, etc.",
    number: "04",
    link: "/category/tiles",
    img: "/images/tiles.jpg",
  },
];

const BestSellers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="text-black py-20 px-4 md:px-10" ref={ref}>
      <motion.h2
        className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-10 ${meriva.className}`}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Our Best Sellers
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-[300px] sm:auto-rows-[300px]">
        {bestSellers.map((item, index) => (
          <motion.div
            key={index}
            className={`
              relative rounded-2xl overflow-hidden border border-neutral-800
              hover:border-white transition duration-300 p-6 flex flex-col justify-between 
              ${index === 2 ? "lg:row-span-2" : ""}
              ${index === 3 ? "sm:col-span-2" : ""}
            `}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            {/* Background Image */}
            <Image
              src={item.img}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10 hover:bg-black/40">

              {/* Content */}
              <div className="relative z-20 h-full flex flex-col justify-between p-6">
                <span className="text-sm text-neutral-300 mb-2">{item.number}</span>
                <div>
                  <h3 className={`${sansation.className} text-3xl font-normal text-white`}>{item.title}</h3>
                  <p className={`${sansation.className} text-neutral-300 text-sm`}>{item.subtitle}</p>
                </div>
                <Link
                  href={item.link}
                  className="mt-4 text-white underline underline-offset-4 hover:text-gray-300 transition"
                >
                  Explore →
                </Link>
              </div>
          </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
