"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BsFacebook, BsInstagram} from "react-icons/bs";
import nextFont from "next/font/local";

const meriva = nextFont({
  src: "../../public/fonts/meriva.ttf",
})

const AboutUs = () => {
  return (
    <>
     <div className="w-full p-4">
      {/* Hero Section with About & Google Maps */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left: About Us Text */}
        <motion.div
              className="w-full md:w-1/2 space-y-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className={`${meriva.className} text-4xl md:text-5xl font-bold text-gray-900 mb-4`}>
                ABOUT US
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed">
                Located in Pakyong Bazaar, Sikkim, Yuvraj Enterprise is a trusted name in the hardware industry, catering to the needs of homeowners, contractors, and builders.
                We specialize in providing high-quality construction materials, tiles, paints, electrical goods, sanitary products, and other essential hardware supplies.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                With a commitment to quality, affordability, and customer satisfaction, Yuvraj Enterprise ensures that every product meets industry standards, offering durable and cost-effective solutions for construction and home improvement projects.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Visit us today and experience the difference in quality and service!
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
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
         <div className="w-full h-64 sm:h-96 md:h-[450px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d886.8149428431961!2d88.60225674550252!3d27.24238105235569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1syuvraj%20enterprises!5e0!3m2!1sen!2sin!4v1744183759633!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0">
            </iframe>
        </div>
        </motion.div>
      </div>

      {/* Keep the rest of the page unchanged */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className={`${meriva.className} text-4xl md:text-5xl font-bold text-gray-900 mb-4`}>What We Deal In</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              { title: "Tiles & Flooring", img: "/images/tiles-flooring.jpg" , description: "tiles" },
              { title: "Paints & Coatings", img: "/images/paints.jpg" , description: "interior-paint" },
              { title: "Electrical Goods", img: "/images/electrical.jpg" , description: "electrical-items"},
              { title: "Sanitary Products", img: "/images/sanitary.jpg" , description: "tiles" },
              { title: "Construction Materials", img: "/images/construction.jpg" , description: "construction-goods"},
              { title: "Hardware & Tools", img: "/images/tools.jpg" , description: "electrical-items"}
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
                <h3 className="text-gray-600 text-lg leading-relaxed pt-2">{item.title}</h3>
                <Link href={"category/"+item.description}><ArrowRight /></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Section */}
          <section className="bg-white py-16 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <Image
                  src="/images/owner.jpg"  // Make sure to place your owner's image in public/images
                  alt="Owner"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover shadow-lg"
                />
              </motion.div>

              {/* Right: Text */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h2 className={`${meriva.className} text-4xl md:text-5xl font-bold text-gray-900 mb-4`}>
                  ABOUT THE OWNER
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Yuvraj Enterprise was founded with the goal of supplying quality materials to the people of Sikkim and beyond. With a strong background in retail and a commitment to reliability, our journey has always been customer-first.
                  <br /><br />
                  Our owner has spent years building relationships in the hardware industry to ensure our customers get access to top-quality products at fair prices. At Yuvraj Enterprise, we don’t just sell goods—we support your building dreams with integrity and passion.
                </p>

                {/* Optional Social Icons */}
                <div className="flex space-x-4 mt-6 text-gray-700">
                  <Link href="#"><BsFacebook className="w-6 h-6 hover:text-blue-600" /></Link>
                  <Link href="#"><BsInstagram className="w-6 h-6 hover:text-pink-600" /></Link>
                </div>
              </motion.div>

            </div>
          </section>
    </div>
    <Footer />
    </>
  );
};

export default AboutUs;
