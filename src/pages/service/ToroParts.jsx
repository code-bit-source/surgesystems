import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../HomePage/components/Navbar";
import Footer from "../HomePage/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const ToroParts = () => {
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
          src="banner01.jpeg"
          alt="Toro Parts Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-7xl font-[font1] font-bold text-white"
          >
            Toro Parts Manuals & Resources
          </motion.h1>
        </div>
      </div>

      {/* ===== Content Section ===== */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-10">
        {/* Introduction */}
        <motion.div className="fade-up text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-[font1] font-bold">
            Genuine Toro Parts. Genuine Performance.
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto text-lg">
            For easy access to detailed parts information, Toro Parts Manuals are available on
            the official Toro website.
          </p>
        </motion.div>

        {/* Info Box */}
        <motion.div className="fade-up bg-gray-900 rounded-2xl p-8 md:p-10 shadow-lg space-y-6">
          <p className="text-gray-300 text-base leading-relaxed">
            Visit{" "}
            <a
              href="https://www.toro.com/en/parts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold underline hover:text-gray-300"
            >
              www.toro.com/en/parts
            </a>{" "}
            and simply enter the model number or keyword of your equipment to view and download:
          </p>

          <ul className="space-y-3 text-gray-300 list-disc list-inside">
            <li>
              <span className="text-white font-semibold">Parts Manuals</span>
            </li>
            <li>
              <span className="text-white font-semibold">Assembly Drawings</span>
            </li>
            <li>
              <span className="text-white font-semibold">Technical Diagrams</span>
            </li>
            <li>
              <span className="text-white font-semibold">Component Details</span>
            </li>
          </ul>
        </motion.div>

        {/* Purpose Section */}
        <motion.div className="fade-up text-center space-y-4">
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            This resource helps you identify the right parts and ensure accurate maintenance or
            repairs for your Toro equipment — keeping it performing at its best.
          </p>
        </motion.div>

        {/* Visit Toro Link Section */}
        <motion.div
          className="fade-up text-center pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a
            href="https://www.toro.com/en/parts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
          >
            Visit Toro Parts Website
          </a>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ToroParts;
