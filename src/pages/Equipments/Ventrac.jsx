import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Footer from "../HomePage/components/Footer";
import Navbar from "../HomePage/components/Navbar";


gsap.registerPlugin(ScrollTrigger);

export const golfCourseData = [
            {
              label: "Tractors",
              children: [
                { label: "Tractor 4520Y - Diesel Engine", href: "#lubi" , img:"" },
                { label: "Tractor 4520N - Petrol Engine", href: "#crompton", img:""  },
              ],
            },
            {
              label: "Attachments",
              children: [
                // { label: "Tractor 4520Y", href: "#abb" , img:""  },
                // { label: "Tractor 4520N", href: "#siemens", img:""  },
                { label: "Reel Mower MR770", href: "https://www.ventrac.com/products/attachments/mr770", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/MR770.png"  },
                { label: "Contour Mower MJ840", href: "https://www.ventrac.com/products/attachments/mj840", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/MJ840.png"  },
                { label: "Grass Collection Systems RV602", href: "https://www.ventrac.com/products/attachments/rv602", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/RV602.png"  },
                { label: "Turbine Blower ET202", href: "https://www.ventrac.com/products/attachments/et202", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/ET202.png"  },
                { label: "Finish Mower", href: "https://www.ventrac.com/products/attachments/msmtmu", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/msmu.png"  },
                { label: "Wide Area Mower MK960r", href: "https://www.ventrac.com/products/attachments/mk960", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/MK960.png"  },
                { label: "Flail Mower", href: "https://www.ventrac.com/products/attachments/mwmy", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/MWMY.png"  },
                { label: "Aera-Vator EA600", href: "https://www.ventrac.com/products/attachments/ea600", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/EA600.png"  },
                { label: "Tough Cut Mower", href: "https://www.ventrac.com/products/attachments/hq682", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/HQ682.png"  },
                { label: "Aerator EB480", href: "https://www.ventrac.com/products/attachments/eb480", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/EB480.png"  },
                { label: "Power Blower KA160", href: "https://www.ventrac.com/products/attachments/ka160", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/KA160.png"  },
                { label: "Leaf Plow EF300", href: "https://www.ventrac.com/products/attachments/ef300", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/EF300.png"  },
                { label: "Trencher KY400", href: "https://www.ventrac.com/products/attachments/ky400", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/KY400.png"  },
                { label: "Edger ED202", href: "https://www.ventrac.com/products/attachments/ed202", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/ED202.png"  },
                { label: "SOD CUTTER EC240", href: "https://www.ventrac.com/products/attachments/ec240", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/EC240.png"  },
                { label: "Trailer Mower HH150", href: "https://www.ventrac.com/products/accessories/hh150", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/HH150.png"  },
                { label: "Boom Mower MA900", href: "https://www.ventrac.com/products/attachments/ma900", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/MA900.png"  },
                { label: "Soil Cultivator DC520", href: "https://www.ventrac.com/products/attachments/dc520", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/DC520.png"  },
                { label: "Power Rake KG540", href: "#siemens", img:""  },
                { label: "Landscape Rake KR502", href: "https://www.ventrac.com/products/attachments/kr502", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/KR502.png"  },
                { label: "Primary Material Bucket KM660", href: "#siemens", img:""  },
                { label: "Primary Seeder EG520", href: "https://www.ventrac.com/products/attachments/eg520", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/EG520.png"  },
                { label: "Loader KM500", href: "https://www.ventrac.com/products/attachments/km500", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/KM500.png"  },
                { label: "Rock Bucket W/ Grapple", href: "https://www.ventrac.com/products/attachments/he200", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/HE200.png"  },
                { label: "Log Grapple KM300", href: "#siemens", img:""  },
                { label: "Stump Grinder KC220", href: "https://www.ventrac.com/products/attachments/kc220", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/KC220.png"  },
                { label: "V-Blade KV552", href: "https://www.ventrac.com/products/attachments/kv552", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/KV552.png"  },
                { label: "Snow Blowers", href: "https://www.ventrac.com/products/attachments/kx", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/KX.png"  },
                { label: "Narrow Broom KJ520", href: "https://www.ventrac.com/products/attachments/kj520", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/KJ520.png"  },
                { label: "Box Plow SP720", href: "https://www.ventrac.com/products/attachments/sp720", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/SP720.png"  },
                { label: "Winter Cab KW452", href: "https://www.ventrac.com/products/accessories/kw452", img:"https://cdn.venturepro.com/images/ventrac/products/primary/500/KW452.png"  },
              ],
            },
          ];


const Ventrac = () => {
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
    src="https://plus.unsplash.com/premium_photo-1679758306824-ed864d718f87?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
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
            Ventrac Equipment
          </motion.h1>
          <p className="text-gray-300 mt-3">
            Explore all Ventrac equipment categories below.
          </p>
        </div>

        {golfCourseData.map((category, i) => {
          const showAll = showAllMap[i] || false;
          const items = showAll ? category.children : category.children.slice(0, 8);

          boxRefs.current = [];

          return (
            <div key={i} className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 border-l-4  border-white pl-4">
                {category.label}
              </h2>

              <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map((item, index) => (
                  <div
                    key={index}
                    ref={(el) => (boxRefs.current[index] = el)}
                    className="group bg-gray-900  rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
                  >
                    <div className="aspect-square bg-gray-800 flex items-center justify-center">
                      <img
                        src={item.img}
                        alt={item.label}
                        className="object-cover w-full h-full bg-white group-hover:scale-105 transition-transform duration-300"
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

export default Ventrac;
