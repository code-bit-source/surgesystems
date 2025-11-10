import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

export const golfCourseData = [
  {
    label: "Numbered Practice Green Pennant set",
    href:"https://www.standardgolf.com/product/numbered-practice-green-pennant-sets/",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/10/numberedpracticegreensets-600x890.png",
  },
  {
    label: "Classic Ball Washer",
    href:"https://www.standardgolf.com/product/classic-ball-washer-four-ball/",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/10/01350-GreenClassicBallWasher.jpg",
  },
  {
    label: "Tour Smooth II",
    href:"https://www.standardgolf.com/product/tour-smooth-ii/",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/08/prd_3847_l_sg_toursmoothii_rake-1-600x400.png",
  },
  {
    label: "Aluminum Cup",
    href:"https://www.standardgolf.com/product/aluminum-cup/",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/08/prd_72_l_18303-1.jpg",
  },
  {
    label: "Aluminum Practice Green Cup",
    href:"https://www.standardgolf.com/product/aluminum-practice-green-cup/",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/10/aluminum-practice-green-cup-400x400.png",
  },
  {
    label: "ST2000 Smart-Fit Cup",
    href:"https://www.standardgolf.com/product/st2000-smart-fit-cups/",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/08/prd_3189_l_hybrid-1-600x762.png",
  },
  {
    label: "Plastic Cup Green cup",
    href:"https://www.standardgolf.com/product/plastic-practice-green-cup/",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/08/prd_2042_l_practice_green_cup-1-600x674.jpg",
  },
  {
    label: "Cup Setter",
    href:" https://www.standardgolf.com/product/cup-setter/",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/08/prd_89_l_30100-1.jpg",
  },
  {
    label: "Plain Flag",
    href:"https://www.standardgolf.com/equipment/flags/plain-flags/#:~:text=Browse%20our%20variety%20of%20plain%20golf%20course%20flags.,at%20Standard%20Golf%20bring%20to%20work%20each%20day..",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/10/PLAIN_FLAGS_-_DUPONT_SOLARMAX_NYLON_-_200_DENIER_prd_1332_l_22190t.jpg",
  },
  {
    label: "Plain Practice Green Flag",
    href:"https://www.standardgolf.com/product/plain-practice-green-flags/",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/10/plain-practice-green-flags-black-400x400.png",
  },
  {
    label: "Royaline Flagstick",
    href:"https://www.standardgolf.com/product/royaline-flagsticks/",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/10/FLAGSTICKS_Royaline_New_Transparent2024.png",
  },
  {
    label: "Tournament Flagstick",
    href:" https://www.standardgolf.com/product/tournament-flagsticks/",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/10/FLAGSTICKS_Tournament_Flagsticks-1-600x616.png",
  },
  {
    label: "Magnum Hole cutter",
    href:"https://www.standardgolf.com/product/magnum-hole-cutter/",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/08/prd_169_l_28960-1.jpg",
  },
  {
    label: "Pro II Hole Cutter",
    href:" https://www.standardgolf.com/product/pro-ii-hole-cutter/",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/08/prd_172_l_28700-1.jpg",
  },
  {
    label: "COCO Drag Mat",
    href:"https://www.standardgolf.com/product/coco-fiber-drag-mat/",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/10/STD-Golf-Product-Images-11-2-600x600.png",
  },
  {
    label: "ST2000 Smart-Fit Cup",
    href:" https://www.standardgolf.com/product/st2000-smart-fit-cups/",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/08/prd_3189_l_hybrid-1-600x762.png",
  },
  {
    label: "DU Whipper",
    href:"https://www.standardgolf.com/product/du-whipper-2/",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/10/STD-Golf-Product-Images-13-1-600x600.png",
  },
  {
    label: "Greenskeeper Ball Mark Repair Tool",
    href:"https://www.standardgolf.com/product/greenskeeper-ball-mark-repair-tool/",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/10/STD-Golf-Product-Images-14-1-600x600.png",
  },
  {
    label: "Practice Green Rod",
    href:" https://www.standardgolf.com/product/practice-green-rods/",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/08/prd_343_l_20182-1.png",
  },
  {
    label: "3- Gang Unit",
    href:"https://www.standardgolf.com/product/3-gang-unit-magnum-harvester-ball-picker/",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/10/STD-Golf-Product-Images-600x600.png",
  },
  {
    label: "Dulex range Ball Crate",
    href:"https://www.standardgolf.com/product/deluxe-range-ball-crate/",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/08/prd_3269_l_ballbox_dropout_71-1-600x400.gif",
  },
  {
    label: "Dulex Scrusher & Scrusher",
    href:"https://www.standardgolf.com/product/deluxe-scrusher-scrusher/",
    img: "https://www.standardgolf.com/wp-content/uploads/2021/01/SPIKE-CLEANER_Scrusher2-scaled-1-600x400.jpg",
  },
  {
    label: "Plain Dimple-T marker",
    href:" https://www.standardgolf.com/product/plain-dimple-t-marker/",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/08/prd_2370_l_05250-1.jpg",
  },
  {
    label: "Classic T-Marker",
    href:"https://www.standardgolf.com/product/classic-t-marker/",
    img: "https://www.standardgolf.com/wp-content/uploads/2024/08/prd_691_l_05600-1.jpg",
  },
];


const StandardGolf = () => {
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
    src="https://images.unsplash.com/photo-1551345650-96adc652c669?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
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

      <div className="px-10 py-20 md:px-20">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold uppercase"
          >
            Golf Accessories (Standard Golf)
          </motion.h1>
          <p className="text-gray-300 mt-3">
            Explore all Golf Accessories below.
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {golfCourseData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (boxRefs.current[index] = el)}
              className="group bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-square bg-white flex items-center justify-center">
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

export default StandardGolf;
