import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Footer from "../HomePage/components/Footer";

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
  const [showAllMap, setShowAllMap] = useState({});

  const toggleShowAll = (index) => {
    setShowAllMap((prev) => ({ ...prev, [index]: !prev[index] }));
  };

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
   <section ref={sectionRef} className="min-h-screen bg-black/70 text-white">

<div className="fixed top-0 left-0 w-full h-full -z-10">
  <img
    src="https://images.unsplash.com/photo-1622819219246-b27f75fffbba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1112"
    alt=""
    className="object-cover w-full h-full"
  />
</div>
      {/* Back Button */}
      <div className="p-5">
        <a
          href="/"
          className="px-5 py-1 bg-white text-black text-center rounded-2xl mx-3"
        >
          Back
        </a>
      </div>

      {/* Heading Section */}
      <div className="px-10 py-20 md:px-20">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold uppercase tracking-wide"
          >
            Golf Cart Equipment
          </motion.h1>
          <p className="text-gray-400 mt-3 text-lg">
            Explore all Golf Cart equipment categories below.
          </p>
        </div>

        {/* Content Grid */}
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

      <Footer />
    </section>
  );
};

export default GolfCarts;
