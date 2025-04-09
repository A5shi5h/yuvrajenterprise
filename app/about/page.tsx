"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <>
     <div className="w-full mt-10 p-4">
      {/* Hero Section with About & Google Maps */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left: About Us Text */}
        <motion.div
              className="w-full md:w-1/2 space-y-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 text-center md:text-left">
                About Us
              </h1>

              <p className="text-gray-700 text-base sm:text-lg text-justify leading-relaxed">
                Located in Pakyong Bazaar, Sikkim, Yuvraj Enterprise is a trusted name in the hardware industry, catering to the needs of homeowners, contractors, and builders.
                We specialize in providing high-quality construction materials, tiles, paints, electrical goods, sanitary products, and other essential hardware supplies.
              </p>

              <p className="text-gray-700 text-base sm:text-lg text-justify leading-relaxed">
                With a commitment to quality, affordability, and customer satisfaction, Yuvraj Enterprise ensures that every product meets industry standards, offering durable and cost-effective solutions for construction and home improvement projects.
              </p>

              <p className="text-gray-700 text-base sm:text-lg text-justify leading-relaxed">
                Visit us today and experience the difference in quality and service!
              </p>

              <p className="text-gray-700 text-base sm:text-lg text-justify leading-relaxed">
                Whether you&apos;re a homeowner, contractor, or builder, we provide the best products to meet your construction and renovation needs.
              </p>
            </motion.div>


        {/* Right: Google Maps Embed */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <iframe title="google maps"
            className="w-full h-[300px] rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2859475344695!2d88.60162681450514!3d27.248934082976084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a04e6fbd5b09%3A0xf5a5b59c5d8e2d68!2sPakyong%20Bazaar%2C%20Sikkim!5e0!3m2!1sen!2sin!4v1646283916767!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>

      {/* Keep the rest of the page unchanged */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">What We Deal In</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              { title: "Tiles & Flooring", img: "/images/tiles-flooring.jpg" },
              { title: "Paints & Coatings", img: "/images/paints.jpg" },
              { title: "Electrical Goods", img: "/images/electrical.jpg" },
              { title: "Sanitary Products", img: "/images/sanitary.jpg" },
              { title: "Construction Materials", img: "/images/construction.jpg" },
              { title: "Hardware & Tools", img: "/images/tools.jpg" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={200}
                  height={150}
                  className="rounded-md h-36"
                />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our Mission & Vision</h2>
        <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-xl">
          At Yuvraj Enterprise, we aim to provide high-quality materials and excellent customer service to support construction and home improvement projects. Our vision is to become Sikkim’s most reliable and customer-friendly hardware supplier.
        </p>
      </section>

      <section className="bg-slate-200 text-black py-12 md:mx-24 shadow-lg shadow-slate-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
          <p className="mt-2 max-w-2xl mx-auto text-xl">
            We believe in quality, affordability, and exceptional customer service. Whether you<span>&apos;</span>re building a home or upgrading a workspace, we<span>&apos;</span><span/>re here to help with expert advice and top-quality materials.
          </p>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default AboutUs;
