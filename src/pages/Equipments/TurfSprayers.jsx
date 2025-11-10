import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Footer from "../HomePage/components/Footer";
import Navbar from "../HomePage/components/Navbar";

gsap.registerPlugin(ScrollTrigger);

export const golfCourseData = [
  {
    label: "Turf Sprayers Equipments",
    children: [
      {
        label: "Rogers Sprayers Windmill Greenspak",
        href: "https://www.rogerssprayers.com/windfoil-greensap-6-nozzles-hose-fed-walker",
        img: "https://www.rogerssprayers.com/image/cache/catalog/WG6/WG6-1-750x300.jpg",
      },
      {
        label: "Toro Sand Pro Spray Master Lean-to",
        href: "https://www.toro.com/en/product/34230",
        img: "https://cdn.thetorocompany.com/api/assetstorage/623_9921c0ac-960b-4f90-99ff-96205d9743d3/Large",
      },
      {
        label: "Toro Multi Pro 5800",
        href: "https://www.toro.com/en/product/41394",
        img: "https://cdn.thetorocompany.com/api/assetstorage/623_e8b22cb5-5bd3-4a8f-9597-51221c942d9c/Large",
      },
      {
        label: "Toro Multi Pro 1750",
        href: "https://www.toro.com/en/product/41188",
        img: "https://cdn.thetorocompany.com/api/assetstorage/623_5aa1700a-dc9f-4636-bddb-a9a5c36bc618/Large",
      },
      {
        label: "Toro Multi Pro WM Turf Sprayer",
        href: "https://www.toro.com/en/product/41240",
        img: "https://cdn.thetorocompany.com/api/assetstorage/623_0c18e59b-7cda-41fe-8a77-2cbdec3dfde0/Large",
      },
    ],
  },
];

const TurfSprayers = () => {
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
    src="/turf.jpg"
    alt=""
    className="object-cover w-full h-full"
  />
</div>
      {/* <Navbar /> */}
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
            Turf Sprayers Equipment
          </motion.h1>
          <p className="text-gray-300 mt-3">
            Explore all Turf Sprayer equipment categories below.
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

export default TurfSprayers;
