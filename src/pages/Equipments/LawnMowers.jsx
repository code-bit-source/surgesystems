import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Footer from "../HomePage/components/Footer";
import Navbar from "../HomePage/components/Navbar";


gsap.registerPlugin(ScrollTrigger);

export const golfCourseData = [
            {
              label: "Walk Behind Mowers",
              children: [
                { label: "Toro 21 in. (53 cm) Recycler® Self-Propel Petrol Lawn Mower", href: "https://www.toro.com/en/product/21321" , img:"https://cdn.thetorocompany.com/api/assetstorage/623_b54c274b-53e1-4722-be2c-17b473afb30d/Large" },
                { label: "Toro 22 in. (56cm) Recycler® Self-Propel Petrol Lawn Mower", href: "https://www.toro.com/en/product/21442", img:"https://cdn.thetorocompany.com/api/assetstorage/623_dff3c4ad-7f06-43f9-8e6f-12a707d8ada3/Large" },
                { label: "Toro 22 in. (56cm) Recycler® w/Personal Pace® Petrol Lawn Mower", href: "https://www.toro.com/en/product/21462", img:"https://cdn.thetorocompany.com/api/assetstorage/623_681397be-f3eb-495f-bbeb-634b8443e209/Large" },
                { label: "Toro 21 in. (53 cm) Super Recycler® Electric Start w/Personal Pace® Petrol Lawn Mower", href: "https://www.toro.com/en/product/21564", img:"https://cdn.thetorocompany.com/api/assetstorage/623_15d23296-168a-4d72-aa34-3daacf2775a2/Large" },
              ],
            },
            {
              label: "Zero Turn Ride-on Mowers",
              children: [
                { label: "42 in. (107 cm) TimeCutter® Zero Turn Mower", href: "https://www.toro.com/en/product/77401", img:"https://cdn.thetorocompany.com/api/assetstorage/623_1f2bb2ec-087d-4493-b85e-d157631f4b22/Large" },
                { label: "Z-Master 2000 Series", href: "https://www.toro.com/en/product/Z-Master-2000-Gas-Zero-Turn-Riding-Lawn-Mower?srsltid=AfmBOoo3yddZ59VOFGgXeopjfVvrLBRAUhcJ2tacIHEGDiqMHb90kFd6", img:"https://cdn.thetorocompany.com/api/assetstorage/623_ad5f4469-684b-4cb1-ac16-3bbf74271bc8/Large" },
                { label: "Z-Master 4000 Series", href: "https://www.toro.com/en/product/Z-Master-4000-Pro-Zero-Turn-Riding-Mower?srsltid=AfmBOoqfspdqcoR_ZV6OkWTLEIMmU-ZhO7C54gTnTJBpFDsr1lAu12C4", img:"https://cdn.thetorocompany.com/api/assetstorage/623_12e6efcf-9009-4909-9cfd-b9166e7d61a3/Large" },
                { label: "Z-Master 6000 Series", href: "https://www.toro.com/en/product/Z-Master-6000-Series?srsltid=AfmBOoqhRFDf_sFBzFHme5WjAQrlsxJpUGyRY5SspFZbzF2dO5dQe70A", img:"https://cdn.thetorocompany.com/api/assetstorage/623_f37e55bd-c219-43ca-940c-b45dffa205c8/Large" },
              ],
            },
            {
              label: "Stand-on Walk Behind Mowers",
              children: [
                { label: "Toro GrandStand Mower", href: "https://www.toro.com/en/product/74534" ,img:"https://cdn.thetorocompany.com/api/assetstorage/623_d84c3de3-1dd4-40ca-b1fa-42a62534d38f/Large" },
              ],
            },
          ];


const LawnMowers = () => {
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
    src="https://images.unsplash.com/photo-1501520158826-76df880863a3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
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
            Lawn Mowers
          </motion.h1>
          <p className="text-gray-300 mt-3">
            Explore all Lawn Mowers equipment categories below.
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

export default LawnMowers;
