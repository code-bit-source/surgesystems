import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Footer from "../HomePage/components/Footer";
import Navbar from "../HomePage/components/Navbar";

gsap.registerPlugin(ScrollTrigger);

export const golfCourseData = [
  {
    label: "Material Handlers",
    children: [
      {
        label: "Toro MH-400 Series Broadcast Style Top Dresser (not found)",
        href: "https://www.toro.com/en/product/44539",
        img: "https://images.unsplash.com/photo-1597007619562-8b8a9d6d87d3?auto=format&fit=crop&w=800&q=60",
      },
      {
        label: "Toro Top Dresser 2500 (not found) ",
        href: "https://www.toro.com/en/product/44547",
        img: "https://images.unsplash.com/photo-1576237808240-fb5e9f3cd2ac?auto=format&fit=crop&w=800&q=60",
      },
      {
        label: "Dakota 440 Turf Tender (not found) ",
        href: "https://dakotapeat.com/equipment-database/440-turf-tender/",
        img: "https://images.unsplash.com/photo-1616627988231-75c07a9bfa89?auto=format&fit=crop&w=800&q=60",
      },
      {
        label: "Dakota 420 Turf Tender",
        href: "https://dakotapeat.com/equipment-database/420-turf-tender/",
        img: "https://images.unsplash.com/photo-1581092160562-40aa08e788c7?auto=format&fit=crop&w=800&q=60",
      },
      {
        label: "Dakota 412 Turf Tender",
        href: "https://dakotapeat.com/equipment-database/412-turf-tender/",
        img: "https://images.unsplash.com/photo-1616627594928-027a5ed1a70f?auto=format&fit=crop&w=800&q=60",
      },
      {
        label: "Dakota 414 Turf Tender",
        href: "https://dakotapeat.com/equipment-database/414-turf-tender/",
        img: "https://images.unsplash.com/photo-1622396480838-07d4345e03b9?auto=format&fit=crop&w=800&q=60",
      },
      {
        label: "Dakota 410 Turf Tender",
        href: "https://dakotapeat.com/equipment-database/410-turf-tender/",
        img: "https://images.unsplash.com/photo-1615953513399-ff0b60e15b6c?auto=format&fit=crop&w=800&q=60",
      },
    ],
  },
];

const MaterialHandler = () => {
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
    src="https://images.unsplash.com/photo-1742070122920-3480a94cfbbb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
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
            Material Handler Equipment
          </motion.h1>
          <p className="text-gray-300 mt-3">
            Explore all Material Handling equipment categories below.
          </p>
        </div>

        {golfCourseData.map((category, i) => {
          const showAll = showAllMap[i] || false;
          const items = showAll
            ? category.children
            : category.children.slice(0, 8);

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
            </div>
          );
        })}
      </div>
      <Footer />
    </section>
  );
};

export default MaterialHandler;
