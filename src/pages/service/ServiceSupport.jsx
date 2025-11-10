import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../HomePage/components/Navbar";
import Footer from "../HomePage/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const ServiceSupport = () => {
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
    <div ref={sectionRef} className="bg-black text-white font-sans min-h-screen">
      <Navbar />

      {/* ===== Banner ===== yha lagega banner img */}
      <div className="relative w-full h-[700px] z-10 overflow-hidden">
        <img
          src="Service.jpg"
          alt="Service Support Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-7xl font-[font1] font-bold text-white"
          >
            Service Support
          </motion.h1>
        </div>
      </div>

      {/* ===== Content Section ===== */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 space-y-12">
        {/* Intro Section */}
        <motion.div className="fade-up text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-[font1] text-white">
            Dedicated to Your Equipment’s Peak Performance
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            At <span className="text-white font-semibold">Surge Systems</span>, we believe that delivering
            world-class equipment is only the first step — ensuring it performs optimally
            throughout its life cycle is our true commitment.
          </p>
        </motion.div>

        {/* Service Overview */}
        <motion.div className="fade-up bg-gray-900 rounded-2xl p-8 md:p-10 shadow-lg space-y-6">
          <p className="text-gray-300 text-base leading-relaxed">
            Our Service Division provides reliable, timely, and professional support across
            all products we offer — from <span className="text-white font-semibold">Turf Equipment</span> and{" "}
            <span className="text-white font-semibold">Irrigation Systems</span> to{" "}
            <span className="text-white font-semibold">Golf Carts</span> and{" "}
            <span className="text-white font-semibold">Sports Field Solutions</span>.
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white border-b border-gray-600 pb-2">
              We Offer:
            </h3>
            <ul className="space-y-3 text-gray-300 list-disc list-inside">
              <li>
                <span className="text-white font-semibold">Preventive Maintenance & Repairs –</span>{" "}
                Regular inspection and maintenance to ensure maximum uptime and performance.
              </li>
              <li>
                <span className="text-white font-semibold">Installation & Commissioning –</span>{" "}
                End-to-end assistance for smooth setup and system integration.
              </li>
              <li>
                <span className="text-white font-semibold">Operator Training & On-Site Support –</span>{" "}
                Hands-on training sessions for operators and maintenance staff to ensure safe and efficient use.
              </li>
              <li>
                <span className="text-white font-semibold">Genuine Spare Parts Supply –</span>{" "}
                Authentic components for enhanced reliability and longevity.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* AMC Section */}
        <motion.div className="fade-up bg-gray-900 rounded-2xl p-8 md:p-10 shadow-lg space-y-6">
          <h3 className="text-2xl font-bold text-white border-b border-gray-600 pb-2">
            Annual Maintenance Contract (AMC)
          </h3>
          <p className="text-gray-300 leading-relaxed">
            To suit every customer’s operational needs and budgets, we provide customized
            AMC plans that keep your equipment performing like new.
          </p>
          <ul className="space-y-3 text-gray-300 list-disc list-inside">
            <li>Scheduled maintenance visits</li>
            <li>Priority service and response time</li>
            <li>Spare parts coverage (as per plan)</li>
            <li>Remote and on-site technical support</li>
          </ul>
        </motion.div>

        {/* Closing Section */}
        <motion.div className="fade-up text-center space-y-4">
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
            Whether you manage a golf course, sports facility, or landscape project,
            <span className="text-white font-semibold"> Surge Systems </span> ensures that your
            equipment and systems are always performing at their best — backed by service you can trust.
          </p>
          <p className="text-gray-400 text-sm">
            To know more, write to us at{" "}
            <a
              href="mailto:customer.support@surgesystems.com"
              className="text-white underline hover:text-gray-300"
            >
              customer.support@surgesystems.com
            </a>
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceSupport;
