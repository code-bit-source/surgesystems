import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Footer from "../HomePage/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export const manualFertilizerData = [
  {
    label: "Spyker Spreader ERGO-PRO SERIES",
    href: "https://www.spyker.com/product-category/spreaders/ergo-pro-series-2/",
    img: "/subequipments/manualFertilizer/1.jpg",
  },
  {
    label: "Spyker Spreader PRO SERIES SPREADERS",
    href: "https://www.spyker.com/product-category/spreaders/pro-series-2/",
    img: "/subequipments/manualFertilizer/2.jpg",
  },
  {
    label: "Gandy Drop Spreader with Push Handle",
    href: "https://drive.google.com/file/d/13onou_x9CzCJx3aZGuF56Uds0H-pZVtz/view", // website not accessible
    img: "/subequipments/manualFertilizer/3.png",
  },
];

const ManualFertilizer = () => {
  const sectionRef = useRef(null);
  const boxRefs = useRef([]);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.context(() => {
      gsap.fromTo(
        boxRefs.current,
        { opacity: 0, y: 80 },
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
    src="https://plus.unsplash.com/premium_photo-1661898576447-3c1d23fb1f3f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2110"
    alt=""
    className="object-cover w-full h-full"
  />
</div>


      <div className="p-5">
        <a
          href="/"
          className="px-5 py-1 bg-white text-black text-center rounded-2xl mx-3"
        >
          back
        </a>
      </div>

      <div className="px-10 py-20 md:px-20">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold uppercase"
          >
            Manual Fertilizer Equipment
          </motion.h1>
          <p className="text-gray-300 mt-3">
            Explore all Manual Fertilizer equipment categories below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {manualFertilizerData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (boxRefs.current[index] = el)}
              className="group bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-square bg-gray-800 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.label}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-100 mb-3">
                  {item.label}
                </h3>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
                >
                  Visit Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ManualFertilizer;
