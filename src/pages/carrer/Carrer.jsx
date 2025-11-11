// ==========================
// File: CareerPage.jsx
// Premium Modern Career Page (with Resume Upload + Smooth Animations)
// ==========================
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../HomePage/components/Navbar";
import Footer from "../HomePage/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const CareerPage = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    // Parallax Banner
    gsap.to(bannerRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const subject = encodeURIComponent("Career Form Submission");
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`
    );

    window.location.href = `mailto:yourmail@example.com?subject=${subject}&body=${body}`;
    form.reset();
  };

  return (
    <div className="bg-black text-white font-sans">
      <Navbar />

      {/* ===== Banner ===== */}
      <div className="relative w-full h-[700px] md:h-[500px] overflow-hidden">
        <img
           
          src="https://plus.unsplash.com/premium_photo-1661486987044-b1a69b9bbaed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
          alt="Career Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/60  ">
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-7xl font-[font1] font-bold text-white mb-4"
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="max-w-2xl text-gray-300 text-[20px]"
          >
            We’re looking for passionate and skilled people to grow with us.
          </motion.p>
        </div>
      </div>

      {/* ===== Small Intro Line ===== */}
      <div className="text-center my-12 px-6">
        <p className="text-lg md:text-xl text-gray-300 bg-transparent">
          {/* Fill in your details below and upload your resume to apply. */}
        </p>
      </div>

      {/* ===== Application Form (Modern UI) ===== */}
      <div className="flex justify-center px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-2xl bg-gradient-to-b from-gray-900 to-black p-10 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.1)] border border-gray-700"
        >
          <h2 className="text-4xl font-[font5] font-bold text-center mb-10 uppercase">
            Apply Now
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-white focus:outline-none text-white placeholder-gray-400"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-white focus:outline-none text-white placeholder-gray-400"
                placeholder="you@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-white focus:outline-none text-white placeholder-gray-400"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-white focus:outline-none text-white placeholder-gray-400"
                placeholder="Write a short message about yourself"
              ></textarea>
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-sm font-semibold mb-2">Upload Resume (PDF/DOC)</label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                className="block w-full text-sm text-gray-300 border border-gray-700 rounded-lg cursor-pointer bg-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:bg-gray-200"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-white text-black py-3 px-6 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-all duration-300"
              >
                Submit Application
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default CareerPage;
