import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Footer from "../HomePage/components/Footer";
import Navbar from "../HomePage/components/Navbar";

gsap.registerPlugin(ScrollTrigger);

export const turfRenovationData = [
  {
    label: "Dakota – TB 220 Turf Brush",
    href: "https://campeyturfcare.com/portfolio-items/tb-220-brush/",
    img: "https://campeyturfcare.com/wp-content/uploads/2017/10/IMG_20211029_142104543-scaled-1-1024x768.jpg",
  },
  {
    label: "Campey™ – UniRake",
    href: "https://campeyturfcare.com/portfolio-items/unirake/",
    img: "https://campeyturfcare.com/wp-content/uploads/2017/10/Congleton-2024-UniRake39-ext-1024x686.jpg",
  },
  {
    label: "Koro Field Top Maker",
    href: "https://campeyturfcare.com/koro-field-topmaker/",
    img: "https://campeyturfcare.com/wp-content/uploads/2015/02/FIELD-TOPMAKER-1200a-1024x686.jpg",
  },
  {
    label: "KORO® Recycling Dresser",
    href: "https://campeyturfcare.com/portfolio-items/recycling-dresser/",
    img: "https://campeyturfcare.com/wp-content/uploads/2024/12/RecyclingDresser1600.png",
  },
  {
    label: "Campey™ – LineMarker",
    href: "https://campeyturfcare.com/portfolio-items/campey-linemarker/",
    img: "https://campeyturfcare.com/wp-content/uploads/2015/11/LineMarker_1-1024x686.jpg",
  },
  {
    label: "KORO® FTM®",
    href: "https://campeyturfcare.com/portfolio-items/koro-ftm-2/",
    img: "https://campeyturfcare.com/wp-content/uploads/2017/10/KORO-FTM-Campey-Turf-Care-05-400x268.jpg",
  },
];

const TurfRenovation = () => {
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
    src="/turfReno.webp"
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
            Turf Renovation Equipment
          </motion.h1>
          <p className="text-gray-300 mt-3">
            Explore all Turf Renovation equipment categories below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {turfRenovationData.map((item, index) => (
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

export default TurfRenovation;
