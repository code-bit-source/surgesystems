import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Footer from "../HomePage/components/Footer";
import Navbar from "../HomePage/components/Navbar";


gsap.registerPlugin(ScrollTrigger);

export const golfCourseData =[
            {
              label: "Maredo ST Series",
              children: [
                { label: "Maredo STrac 720-26 Traction Unit", href: "https://maredo-bv.com/products/strac-720/",img:"https://maredo-bv.com/wp-content/uploads/2023/10/2329-ST160-on-green-25-800x626.jpg.webp", }, 
                { label: "Maredo ST120 Flex SOD Cutter", href: "https://maredo-bv.com/products/st120-flex-sodcutter/",img:"https://maredo-bv.com/wp-content/uploads/2023/10/ST160-Sod-cutter-48-cm-Dweg-1-800x600.jpg.webp" },
                { label: "Maredo ST160 CleanCut-SandFiller", href: "https://maredo-bv.com/products/st160-cleancut-sandfiller/",img:"https://maredo-bv.com/wp-content/uploads/2023/10/2329-ST160-on-green-25-1200x939.jpg.webp" },
                { label: "Maredo ST170 FlexFraise-Mower", href: "https://maredo-bv.com/products/st170-flexfraze-mower/",img:"https://maredo-bv.com/wp-content/uploads/2023/10/2120-ST170-cleaning-artificial-turf-01-600x600.jpg.webp" },
                { label: "Maredo ST200 Flex Verticutter", href: "https://maredo-bv.com/products/st200-flex-verticutter/",img:"https://maredo-bv.com/wp-content/uploads/2021/06/2043-ST200-Flex-Verticutter-01-800x600.jpg.webp" },
                { label: "Maredo ST210 Vibe-Spike Aerator", href: "https://maredo-bv.com/products/st210-vibespike-aerator/",img:"https://maredo-bv.com/wp-content/uploads/2021/07/2043-STrac-700-66-min-800x600.jpg.webp" },
                { label: "Maredo ST230 High Speed Corer", href: "https://maredo-bv.com/products/st230-highspeed-corer/",img:"https://maredo-bv.com/wp-content/uploads/2023/10/GT210-Animation-picture-redone-1340-1200x669.jpg.webp" },
                { label: "Maredo ST418 VibeDisc-Seeder", href: "https://maredo-bv.com/products/st418-vibedisc-seeder/",img:"https://maredo-bv.com/wp-content/uploads/2023/10/20220525_124212-1200x900.jpg.webp" },
              ],
            },
            {
              label: "Maredo MT Series",
              children: [
                { label: "MT170 Flex-FrazeMower", href: "https://maredo-bv.com/products/mt170-flex-frazemower/",img:"/mt70.jpg" },
                { label: "MT200 Flex-Verticutter", href: "https://maredo-bv.com/products/mframe-319-mt200-verticut-heads/",img:"https://maredo-bv.com/wp-content/uploads/2023/10/1720-MT200-Making-curve-1200x675.jpg.webp" },
                { label: "MT210 VibeSpike-Aerator", href: "https://maredo-bv.com/products/mframe-319-mt210-vibe-spiker-heads/",img:"https://maredo-bv.com/wp-content/uploads/2023/10/1940-MT210-VibeSpike-Aerator-NL-Soccer-1200x900.jpg.webp" },
                { label: "MT418 VibeDisc-Seeder", href: "https://maredo-bv.com/products/mt418-vibedisc-seeder/",img:"https://maredo-bv.com/wp-content/uploads/2023/10/2318-MT418-on-fairway-12-1200x971.jpg.webp" },
                { label: "MT424 VibeDisc-Seeder", href: "https://maredo-bv.com/products/mt424-vibespike-seeder/",img:"https://maredo-bv.com/wp-content/uploads/2024/02/2241-MT418-on-Kubota-08-1200x900.jpg.webp" },
              ],
            },
            {
              label: "Maredo GT Series",
              children: [
                { label: "GT190 Fraze-Groomer", href: "https://maredo-bv.com/products/gt190-countro-poa-remover/",img:"https://maredo-bv.com/wp-content/uploads/2024/02/1705-GT180-on-Toro-Triflex-3400-1200x675.jpg.webp" },
                { label: "GT210 VibeSpiker-Aerator", href: "https://maredo-bv.com/products/gt210-vibe-spiker/",img:"https://maredo-bv.com/wp-content/uploads/2024/02/GT210-Animation-picture-redone-1340-kopie-1200x669.png.webp" },
                { label: "GT230 HiSpeed-Corer", href: "https://maredo-bv.com/products/gt230-core-dethatcher/",img:"https://maredo-bv.com/wp-content/uploads/2024/02/2017-03-23-GT230HiSpeed-Corer-on-GP400-07-1200x675.jpg.webp" },
                { label: "GT250 CountRo-Sweeper", href: "https://maredo-bv.com/products/gt250-countro-sweeper/",img:"https://maredo-bv.com/wp-content/uploads/2024/02/2017-02-03-GT250-on-Toro-Triflex-3400-18-1200x675.jpg.webp" },
                { label: "GT300 VibeShoe-Roller", href: "https://maredo-bv.com/products/gt300-vibe-smoother/",img:"https://maredo-bv.com/wp-content/uploads/2024/02/20190307_134112-1200x900.jpg.webp" },
                { label: "GT410 VibeSpike-SeederF", href: "https://maredo-bv.com/products/gt410-vibe-spike-overseeder-for-bent/",img:"https://maredo-bv.com/wp-content/uploads/2023/10/2017-06-GT410-on-Toro-with-clubhouse-1200x675.jpg.webp" },
                { label: "GT424 VibeSpike-SeederC", href: "https://maredo-bv.com/products/gt424-vibe-spike-overseeder-for-fescuerye/",img:"https://maredo-bv.com/wp-content/uploads/2023/10/20190806_1154530-400x300.jpg.webp" },
              ],
            },
          ];


const Maredo = () => {
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
    src="https://maredo-bv.com/wp-content/uploads/2023/10/2329-ST160-on-green-25-800x626.jpg.webp"
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
            Maredo Equipment
          </motion.h1>
          <p className="text-gray-300 mt-3">
            Explore all Maredo equipment categories below.
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

export default Maredo;
