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

const interiorPaints = [
  {
    id: 1,
    name: "Luxury Emulsion Paint",
    imageSrc: "/images/luxury emulsion.jpg",
    imageAlt: "Luxury Emulsion Paint",
    description: "Smooth and rich finish, perfect for modern interiors with high durability.",
  },
  {
    id: 2,
    name: "Matte Finish Paint",
    imageSrc: "/images/matte finish.jpg",
    imageAlt: "Matte Finish Paint",
    description: "Gives a sophisticated, non-reflective look with superior stain resistance.",
  },
  {
    id: 3,
    name: "Washable Interior Paint",
    imageSrc: "/images/washable paint.jpg",
    imageAlt: "Washable Interior Paint",
    description: "Easy to clean, ideal for homes with kids and high-traffic areas.",
  },
  {
    id: 4,
    name: "Anti-Fungal Paint",
    imageSrc: "/images/anti fungal.jpg",
    imageAlt: "Anti-Fungal Paint",
    description: "Protects walls from moisture and fungal growth, ensuring long-lasting beauty.",
  },
];

const InteriorPaints = () => {
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
          OUR INTERIOR PAINTS COLLECTION
        </motion.h2>

        {/* Grid Display of Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interiorPaints.map((paint) => (
            <motion.div
              key={paint.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-full h-56">
                <Image
                  src={paint.imageSrc}
                  alt={paint.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
              <h3 className={`text-xl sm:text-3xl font-semibold text-gray-800 mt-6 ${inter.className}`}>{paint.name}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{paint.description}</p>
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
            Why Choose Our Interior Paints?
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Yuvraj Enterprise, we offer high-quality interior paints that enhance your home’s aesthetic and durability. Our paints are designed to provide vibrant colors, long-lasting protection, and smooth finishes, ensuring your walls look beautiful for years.
          </p>

          <h3 className={`text-xl sm:text-3xl font-semibold text-gray-800 mt-6 ${inter.className}`}>
            Types of Interior Paints We Offer:
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            - Luxury Emulsion: Rich and smooth finish with high durability.<br />
            - Matte Finish: Elegant non-glossy look with easy maintenance.<br />
            - Washable Paint: Ideal for families, allowing easy cleaning of stains.<br />
            - Anti-Fungal Paint: Protects walls from moisture and fungal damage.<br />
          </p>

          <h3 className={`text-xl sm:text-3xl font-semibold text-gray-800 mt-6 ${inter.className}`}>
            Benefits of Choosing High-Quality Paints
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            - Superior Aesthetic Appeal: Enhances the beauty of your interiors.<br />
            - Durability & Longevity: Resists fading, stains, and wear over time.<br />
            - Eco-Friendly & Low VOC: Safe for indoor air quality and environment.<br />
            - Easy Maintenance: Stain-resistant and washable surfaces for convenience.<br />
          </p>
        </motion.div>
      </div>
    </div>
    
    {/* === Paint Brands Marquee === */}
          <div className="bg-white py-6">
            <div className="max-w-screen-xl mx-auto px-4">
              <div className="text-center mb-4">
                <h3 className={`text-xl sm:text-3xl font-semibold text-gray-800 mt-6 ${meriva.className}`}>Our Trusted Paints Brands</h3>
              </div>

              <div className="relative overflow-hidden rounded-md">
                <motion.div
                  className="flex gap-12 px-8 items-center whitespace-nowrap"
                  initial={{ x: "-85%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  {[
                    "asianpaints.png",
                    "berger.png",
                    "nerolac.png",
                    "dulux.png",
                    "indigo.png",
                  ].map((logo, index) => (
                    <div key={index} className="w-32 h-16 relative flex-shrink-0">
                      <Image
                        src={`/images/logos/${logo}`}
                        alt={`${logo.split(".")[0]} logo`}
                        layout="fill"
                        objectFit="contain"
                        loading="lazy"
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

export default InteriorPaints;
