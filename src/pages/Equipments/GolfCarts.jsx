import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Footer from "../HomePage/components/Footer";
import Navbar from "../HomePage/components/Navbar"; // 👈 Navbar import

gsap.registerPlugin(ScrollTrigger);

export const golfCourseData = [
  {
    label: "Tonino Lamborghini",
    href: "https://tlgolfcarts.com/",
    img: "https://tlgolfcarts.com/wp-content/uploads/2025/07/tonino-lamborghini-shuttle-cart-001-1536x1027.webp",
  },
];

const GolfCarts = () => {
  const sectionRef = useRef(null);
  const boxRefs = useRef([]);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.context(() => {
      gsap.fromTo(
        boxRefs.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-black  text-white">
      {/* 🌟 Navbar */}
      <Navbar />

      {/* 🌄 Banner Section */}
      <div className="relative h-[70vh] md:h-[700px] flex items-center justify-center overflow-hidden">
        <img
          src="/lambo.png"
          alt="Golf Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-wider mb-4">
            Golf Cart 
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Explore premium golf cart solutions and innovations.
          </p>
        </motion.div>
      </div>

      {/* 🏌️‍♂️ Equipment Section */}
      <div className="px-6 md:px-20 py-20 bg-black/70 backdrop-blur-md">
        {golfCourseData.map((category, i) => {
          boxRefs.current[i] = boxRefs.current[i] || React.createRef();

          return (
            <div key={i} className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 border-l-4 border-white pl-4">
                {category.label}
              </h2>

              <div
                ref={(el) => (boxRefs.current[i] = el)}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <div className="group bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-square bg-gray-800 flex items-center justify-center">
                    <img
                      src={category.img}
                      alt={category.label}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-semibold text-gray-100 mb-4 text-lg">
                      {category.label}
                    </h3>
                    <a
                      href={category.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border border-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
                    >
                      Visit Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 🌍 Footer */}
      <Footer />
    </section>
  );
};

export default GolfCarts;
