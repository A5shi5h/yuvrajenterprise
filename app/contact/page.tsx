"use client";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    alert("Message sent!");
  };

  return (
    <>
     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <motion.div
        className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Your Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              name="message"
              rows={8}
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
        </form>
        <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 text-white px-6 py-2 rounded transition mt-4"
            >
              Send
            </motion.button>
      </motion.div>
    </div>
    <Footer />
    </>
  );
};

export default ContactUs;
