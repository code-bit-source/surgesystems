import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Footer from "../HomePage/components/Footer";
import Navbar from "../HomePage/components/Navbar";

gsap.registerPlugin(ScrollTrigger);

export const golfCourseData = [
  {
    label: "Toro Power Clear Snow Blower",
    href: "https://www.toro.com/en/product/38752?srstid=AfmBOor3x3g95HJY2AVCZ9PhiT4B4guMynS9EZwjnHPpT9Ith5d7m",
    img:"https://cdn.thetorocompany.com/api/assetstorage/623_f326d47e-7b7f-4d20-91de-21d5cb8fbb52/Large"
  },
  {
    label: "Toro Hover Pro Slope Mower ",
    href: "https://www.toro.com/en-GB/product/02617", img:"https://cdn.thetorocompany.com/api/assetstorage/623_cce7b573-137c-43f4-afc2-ff7859b1b13c/Large "
  },
  {
    label: "Toro ProStripe 560 (Striping Mower)",
    href: "https://www.toro.com/en/product/02657",img:"https://cdn.thetorocompany.com/api/assetstorage/623_4f4aff75-c0ca-4824-ba0c-eb69f971925d/Large"
  },
  {
    label: "Toro Greens Roller GreensPro 1260",
    href: "https://www.toro.com/en/product/44913",img:"https://cdn.thetorocompany.com/api/assetstorage/623_0f25e0c2-e2e6-4188-b88e-40a35ec47709/Large"
  },
  {
    label: "Stand-On Z Spray Nexxt Laanth Steer",
    href: "https://www.toro.com/en/product/34240",img:"https://cdn.thetorocompany.com/api/assetstorage/623_19106141-9509-4e2d-b260-508eda3d5bbf/Large"
  },
  {
    label: "Air2G2 Air Injection Machine",
    href: "https://www.air2g2.com/",img:"https://static.wixstatic.com/media/52a53a_2c04ad1fc4f74d9aa463128e6562a402f000.jpg/v1/fill/w_937,h_500,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/52a53a_2c04ad1fc4f74d9aa463128e6562a402f000.jpg"
  },
  {
    label: "Nordic Plow Core Solutions and Turf Plows",
    href: "https://www.nordicplow.com/",img:"/nordic.jpg"
  },
  {
    label: "Turfco T5000 Slicer Seeder",
    href: "https://www.turfco.com/store/c4/sprayers-spreaders/p136027/t5000-spreadersprayer-applicator/",img:"https://www.turfco.com/images/thumbnail.aspx?img=/webres/catalog/xl/T5000.jpg"
  },
  {
    label: "Turfco Mechanical Edger",
    href: "https://www.turfco.com/store/c13/edgers-sodcutters/p118524/edge-r-rite-ii-bed-edger/",img:"https://www.turfco.com/images/thumbnail.aspx?img=/webres/catalog/xl/Edge_R_Rite_2_NoRefl.jpg"
  },
];

const Speciality = () => {
  const sectionRef = useRef(null);
  const boxRefs = useRef([]);
  const [showAll, setShowAll] = useState(false);

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

  // Slice logic (same as before, just fixed)
  const items = showAll ? golfCourseData : golfCourseData.slice(0, 8);

  return (
    <section ref={sectionRef} className="min-h-screen bg-black/70 text-white">

<div className="fixed top-0 left-0 w-full h-full -z-10">
  <img
    src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
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
            Speciality Equipment
          </motion.h1>
          <p className="text-gray-300 mt-3">
            Explore all Speciality equipment categories below.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 border-l-4 border-white pl-4">
            Speciality Equipment
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
                    src={item.img }
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

          {/* View More / View Less Button */}
          {golfCourseData.length > 8 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                {showAll ? "View Less" : "View More"}
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Speciality;
