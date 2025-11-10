import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Footer from "../HomePage/components/Footer";
import Navbar from "../HomePage/components/Navbar";
import { img } from "motion/react-client";


gsap.registerPlugin(ScrollTrigger);

export const golfCourseData = [
            {
              label: "Spectrum Technologies",
              children: [
                { label: "TDR 350 Moisture Meter", href: "https://www.specmeters.com/FieldScout-TDR350-Soil-Moisture-Meter" , img:"https://www.specmeters.com/site/Item%20Images/6435_1.png" },
              ],
            },
            {
              label: "USGA",
              children: [
                { label: "Stimpmeter", href: "https://gsshop.usga.org/product/usga-stimpmeter" ,img:"https://cdn11.bigcommerce.com/s-qv3ypccgzt/images/stencil/750w/products/160/463/product_Stimpmeter_high__63055__59586.1759135952.jpg?compression=lossy" },
              ],
            },
            {
              label: "Campey Imants",
              children: [
                { label: "Penetrometer", href: "https://campeyturfcare.com/portfolio-items/penetrometer/",img:"https://campeyturfcare.com/wp-content/uploads/2017/10/Penetrometer_1-1024x686.jpg" },
              ],
            },
            {
              label: "Toro",
              children: [
                { label: "Turf Evaluator", href: "https://www.toro.com/product/04399?srsltid=AfmBOoq8oaw_iwjQaYAfZfQQCVDf2Eq-aSPNKYYaaqd6qPv5zItFrQCH",img:"https://cdn.thetorocompany.com/api/assetstorage/623_0a4ecc3f-4be6-4369-a950-d15595be833e/Large" },
              ],
            },
            {
              label: "Foley",
              children: [
                { label: "Height of Cut Gauge", href: "Not available",img:"" },
              ],
            },
            {
              label: "Foley",
              children: [
                { label: "Digital Height of Cut Gauge", href: "Not available",img:"" },
              ],
            },
            {
              label: "Pogo",
              children: [
                { label: "Soil Moisture Meter", href: "Not available",img:"" },
              ],
            },
          ];


const Tools = () => {
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
    src="https://campeyturfcare.com/wp-content/uploads/2017/10/Penetrometer_1-1024x686.jpg"
    alt=""
    className="object-cover w-full h-full"
  />
</div>
      {/* <Navbar /> */}
        <div className="p-5">

        <a href="/" className="px-5 py-1 bg-white text-black text-center rounded-2xl  mx-3"> back </a>
      </div>


      <div className="px-10 py-20 md:px-20">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold  uppercase"
          >
            Tools
          </motion.h1>
          <p className="text-gray-300 mt-3">
            Explore all Tools categories below.
          </p>
        </div>

        {golfCourseData.map((category, i) => {
          const showAll = showAllMap[i] || false;
          const items = showAll ? category.children : category.children.slice(0, 8);

          boxRefs.current = [];

          return (
            <div key={i} className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 border-l-4 border-white pl-4">
                {category.label}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map((item, index) => (
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

              {category.children.length > 8 && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => toggleShowAll(i)}
                    className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {showAll ? "View Less" : "View More"}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Footer />
    </section>
  );
};

export default Tools;
