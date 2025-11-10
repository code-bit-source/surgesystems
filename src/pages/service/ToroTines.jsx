import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../HomePage/components/Navbar";
import Footer from "../HomePage/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const ToroTines = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section.querySelectorAll(".fade-up"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="bg-black text-white min-h-screen font-sans">
      <Navbar />

      {/* ===== Banner Section ===== */}
      <div className="relative w-full h-[700px] overflow-hidden">
        <img
          src="torotines.jpg"
          alt="Toro Tines Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-7xl font-[font1] font-bold text-white"
          >
            Toro Tines Selection Guide
          </motion.h1>
        </div>
      </div>

      {/* ===== Content Section ===== */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 space-y-10 text-center">
        {/* Intro Text */}
        <motion.div className="fade-up space-y-4">
          <h2 className="text-3xl md:text-4xl font-[font1] font-bold text-white">
            Toro Tines Chart | Surge Systems
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            The Toro Tines Selection Guide helps you choose the correct tine for
            aeration and turf management based on your machine and soil needs.
            It should be the same as the existing Toro website chart — only the
            latest version has been updated.
          </p>
        </motion.div>

        {/* Info Box */}
        <motion.div className="fade-up bg-gray-900 rounded-2xl p-8 md:p-10 shadow-lg space-y-6">
          <p className="text-gray-300 text-base leading-relaxed">
            The updated <span className="text-white font-semibold">Tine Selection Guide 2025</span> is now available.
            This PDF contains the complete Toro tines chart with model compatibility and
            specifications.
          </p>

          <div className="pt-4">
            <a
              href="https://cdn2.toro.com/en/-/media/Files/Toro/Page/Parts/2025-Titan-Tines-Catalog_040725.ashx" // 👉 Replace this with the actual Drive link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
            >
              View / Download Tine Selection Guide 2025
            </a>
          </div>

          {/* <p className="text-sm text-gray-400 italic pt-2">
            File Name: <span className="text-white">2025-Titan-Tines-Catalog_040725.ashx</span>
          </p> */}
        </motion.div>

        {/* Closing Section */}
        <motion.div className="fade-up space-y-4">
          <p className="text-gray-300 leading-relaxed text-lg">
            Stay updated with the latest Toro tine technology and selection charts to
            ensure precision, performance, and long-lasting results for your turf
            equipment.
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ToroTines;
