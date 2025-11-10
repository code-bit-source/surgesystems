import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

export const golfCourseData = [
  {
    label: "Deluxe Ball washer",
    href: "https://www.paraide.com/products/tee-area/ball-washer/deluxe-ball-washer/",
    img: "https://www.paraide.com/webres/catalog/xl/203-01.jpg",
  },
  {
    label: "Master Ball washer",
    href: "https://www.paraide.com/products/tee-area/ball-washer/master-ball-washer/",
    img: "https://www.paraide.com/webres/catalog/xl/205-01.jpg",
  },
  {
    label: "Cast Aluminum Tee marker",
    href: "https://www.paraide.com/products/tee-area/markers/cast-aluminum-low-profile-tee-marker/cast-aluminum-low-profile-tee-marker/",
    img: "https://www.paraide.com/webres/catalog/xl/647-1.jpg",
  },
  {
    label: "Satellite tee marker",
    href: "https://www.paraide.com/products/tee-area/markers/satellite-tee-marker/",
    img: "https://www.paraide.com/webres/catalog/xl/650-4.jpg",
  },
  {
    label: "Spherical Plastic Tee marker",
    href: "https://www.paraide.com/products/tee-area/markers/spherical-plastic-tee-marker/",
    img: "https://www.paraide.com/webres/catalog/xl/640-1.jpg",
  },
  {
    label: "Banded Tee markers",
    href: "https://www.paraide.com/products/tee-area/markers/banded-tee-marker/",
    img: "https://www.paraide.com/webres/catalog/xl/banded-tee-markers-on-courseLarge(1).jpeg",
  },
  {
    label: "Solid Regulation Fiberglass flagsticks",
    href: "https://www.paraide.com/products/green-area/regulation-flagsticks/1-2-in-solid-regulation-flagsticks/",
    img: "https://www.paraide.com/webres/catalog/xl/730-079.jpg",
  },
  {
    label: "Tapered Fiberglass tournament flagsticks",
    href: "https://www.paraide.com/products/green-area/regulation-flagsticks/3-4-in-1-9-cm-tapered-fiberglass-tournament-flagsticks/",
    img: "https://www.paraide.com/webres/catalog/xl/taperedflagsticks.jpg",
  },
  {
    label: "Aluminum Fiberglass Tournament Flagsticks",
    href: "https://www.paraide.com/products/green-area/regulation-flagsticks/1-in-2-5-cm-aluminum-fiberglass-tournament-flagsticks/",
    img: "https://www.paraide.com/webres/catalog/xl/701-089.jpg",
  },
  {
    label: "Vinyl covered fiberglass flagsticks",
    href: "https://www.paraide.com/products/green-area/regulation-flagsticks/vinyl-covered-flagsticks-3-4-inch-tapered-7-5-foot-tall/",
    img: "https://www.paraide.com/webres/catalog/xl/701-089.jpg",
  },
  // {
  //   label: "Regulation plastic Cup",
  //   href: "https://www.paraide.com/products/green-area/regulation-flagsticks/vinyl-covered-flagsticks-3-4-inch-tapered-7-5-foot-tall/",
  //   img: "https://www.paraide.com/webres/catalog/xl/730-079-2new.jpg",
  // },
  {
    label: "Practice Green Plastic Cup",
    href: "https://www.paraide.com/products/practice-area/practice-green-markers-cups/practice-green-plastic-putting-cup/",
    img: "https://www.paraide.com/webres/catalog/xl/930.jpg",
  },
  {
    label: "Aluminum Cup",
    href: "https://www.paraide.com/products/green-area/putting-cups/regulation-aluminum-putting-cup/",
    img: "https://www.paraide.com/webres/catalog/xl/940.jpg",
  },
  // {
  //   label: "Custom Logo Flags",
  //   href: "https://www.paraide.com/products/green-area/putting-cups/regulation-aluminum-putting-cup/",
  //   img: "https://www.paraide.com/webres/catalog/xl/930.jpg",
  // },
  {
    label: "Embroidered Flags",
    href: "https://www.paraide.com/products/green-area/regulation-flags/embroidered-flags/",
    img: "https://www.paraide.com/webres/catalog/xl/EmbroideredFlags1.jpg",
  },
  {
    label: "Screen Printed Flags",
    href: "https://www.paraide.com/products/green-area/regulation-flags/screen-printed-tube-style-flags/",
    img: "https://www.paraide.com/webres/catalog/xl/ScreenedFlags1.jpg",
  },
  {
    label: "Solid Color Flags 200 Denier",
    href: "https://www.paraide.com/products/green-area/regulation-flags/solid-flags-200-denier/#:~:text=These%20flags%20made%20of%20a%20lightweight%20200%20denier,looks%20despite%20long%20exposure%20to%20wind%20and%20sunlight.",
    img: "https://www.paraide.com/webres/catalog/xl/8100_m.jpg",
  },
  {
    label: "Solid Color Flags 400 Denier",
    href: "https://www.paraide.com/products/green-area/regulation-flags/solid-flags-200-denier/#:~:text=These%20flags%20made%20of%20a%20lightweight%20200%20denier,looks%20despite%20long%20exposure%20to%20wind%20and%20sunlight.",
    img: "https://www.paraide.com/webres/catalog/xl/8100_m.jpg",
  },
  // {
  //   label: "Numbered Flags 200 Denier",
  //   href: "https://www.paraide.com/products/green-area/regulation-flags/numbered-flags/",
  //   img: "https://www.paraide.com/webres/catalog/xl/8302_m.jpg",
  // },
  // {
  //   label: "Sewn Checkered Flags",
  //   href: "https://www.paraide.com/products/green-area/regulation-flags/checkered-flags/",
  //   img: "https://www.paraide.com/webres/catalog/xl/8500_m.jpg",
  // },
  {
    label: "Jr.Flags Solid -400 Denier",
    href: "https://www.paraide.com/products/practice-area/practice-green-markers-cups/jr-flags/#:~:text=Par%20Aide%20offers%20Jr.%20Flags%20for%20your%20practice,styles.%20Whether%20is%20solid%20colored%2C%20checkered%2C%20or%20numbered.",
    img: "https://www.paraide.com/webres/catalog/xl/JrFlags.jpg",
  },
  {
    label: "Numbered 200 Denier",
    href: "https://www.paraide.com/products/green-area/regulation-flags/numbered-flags/",
    img: "https://www.paraide.com/webres/catalog/xl/8302_m.jpg",
  },
  {
    label: "Sewn Checkered",
    href: "https://www.paraide.com/products/green-area/regulation-flags/checkered-flags/",
    img: "https://www.paraide.com/webres/catalog/xl/8500_m.jpg",
  },
  {
    label: "Oversized Range Flags",
    href: "https://www.paraide.com/products/green-area/regulation-flags/oversize-range-flags-solid-color/",
    img: "https://www.paraide.com/webres/catalog/xl/8100.jpg",
  },
  {
    label: "Jr.Flagstick marker/ flag sets",
    href: "https://www.paraide.com/products/practice-area/practice-green-markers-cups/jr-flagstick-marker-flag-sets/",
    img: "https://www.paraide.com/webres/catalog/xl/9190-9_m.jpg",
  },
  {
    label: "Cupless jr. Flagstick marker/ flag sets",
    href: "https://www.paraide.com/products/practice-area/practice-green-markers-cups/cupless-jr-flagstick-marker-flag-sets/",
    img: "https://www.paraide.com/webres/catalog/xl/9190_m.jpg",
  },
  {
    label: "Tournament Jr. marker/ Flag sets",
    href: "https://www.paraide.com/products/practice-area/practice-green-markers-cups/tournament-jr-flagstick-marker-flag-sets/",
    img: "https://www.paraide.com/webres/catalog/xl/9110_m.jpg",
  },
  {
    label: "Rolling ball picker",
    href: "https://www.paraide.com/products/practice-area/range-markers/rolling-ball-picker/",
    img: "https://www.paraide.com/webres/catalog/xl/RollingBallPicker.jpg",
  },
  {
    label: "Practice range signs",
    href: "https://www.paraide.com/products/practice-area/range-markers/practice-range-signs/",
    img: "https://www.paraide.com/webres/catalog/xl/10200-01.jpg",
  },
  {
    label: "Sure putt practice Green system",
    href: "https://www.paraide.com/products/practice-area/practice-green-markers-cups/sure-putt-practice-green-system/",
    img: "https://www.paraide.com/webres/catalog/xl/sure_putt_cups.jpg",
  },
  {
    label: "Marking Paint",
    href: "https://www.paraide.com/products/course-markings/paint-applicators/marking-paint/",
    img: "https://www.paraide.com/webres/catalog/xl/12410.jpg",
  },
  {
    label: "Paint Applicator",
    href: "https://www.paraide.com/products/course-markings/paint-applicators/paint-applicator/",
    img: "https://www.paraide.com/webres/catalog/xl/paint_applicator.jpg",
  },
  {
    label: "Double Barrel Paint Gun",
    href: "https://www.paraide.com/products/course-markings/paint-applicators/double-barrel-paint-gun/",
    img: "https://www.paraide.com/webres/catalog/xl/Double%20Barrel_edited-1.jpg",
  },
  {
    label: "Hazard & OB Markers",
    href: "https://www.paraide.com/products/course-markings/marker-stakes/ob-markers-with-spike/",
    img: "https://www.paraide.com/webres/catalog/xl/11618.jpg",
  },
  {
    label: "HIO Xact",
    href: "https://www.paraide.com/products/green-area/green-area-tools/hio-xact-hole-cutter/",
    img: "https://www.paraide.com/webres/catalog/xl/hio_xact_straight_on_white_wdeepth_gauge.jpg",
  },
  {
    label: "Hole Cuttert",
    href: "https://www.paraide.com/products/green-area/green-area-tools/par-aide-hio-hole-cutter/#:~:text=Superintendents%20everywhere%20have%20been%20won%20over%20by%20it%27s,true%2C%20all%20while%20saving%20you%20time%20and%20effort.",
    img: "https://www.paraide.com/webres/catalog/xl/HiO_on_course_hero.JPG",
  },
  {
    label: "Bubble level 1028",
    href: "https://www.paraide.com/products/green-area/green-area-tools/hio-hole-cutter-bubble-level/",
    img: "https://www.paraide.com/webres/catalog/xl/HiO%20BUBBLE%20LEVEL.jpg",
  },
  {
    label: "Depth Gauge 1034",
    href: "https://www.paraide.com/products/green-area/green-area-tools/depth-gauge/",
    img: "https://www.paraide.com/webres/catalog/xl/1034.jpg",
  },
  {
    label: "Lever Action",
    href: "https://www.paraide.com/products/green-area/green-area-tools/lever-action-hole-cutter/",
    img: "https://www.paraide.com/webres/catalog/xl/1001-1.jpg",
  },
  {
    label: "Foot Extraction",
    href: "https://www.paraide.com/products/green-area/green-area-tools/foot-extraction-hole-cutter/",
    img: "https://www.paraide.com/webres/catalog/xl/1002-1.jpg",
  },
  {
    label: "Cup setter",
    href: "https://www.paraide.com/products/green-area/green-area-tools/cup-setter/",
    img: "https://www.paraide.com/webres/catalog/xl/1031.jpg",
  },
  {
    label: "Cup Puller",
    href: "https://www.paraide.com/products/green-area/green-area-tools/cup-puller/",
    img: "https://www.paraide.com/webres/catalog/xl/1032.jpg",
  },
  {
    label: "Cup hole trimming scissors 1036",
    href: "https://www.paraide.com/products/green-area/green-area-tools/cup-hole-trimming-scissors/",
    img: "https://www.paraide.com/webres/catalog/xl/scissors_800.jpg",
  },
  {
    label: "360 Hole Painter",
    href: "https://www.paraide.com/products/green-area/green-area-tools/360-hole-painter-/",
    img: "https://www.paraide.com/webres/catalog/xl/910.jpg",
  },
  {
    label: "Replacement Shields",
    href: "https://www.paraide.com/products/green-area/putting-cups/ever-white-cup-replacement-sleeves/",
    img: "https://www.paraide.com/webres/catalog/xl/ever_white_cup_sleeve.jpg",
  },
  {
    label: "Tri-Tool",
    href: "https://www.paraide.com/products/green-area/green-area-tools/tri-tool/",
    img: "https://www.paraide.com/webres/catalog/xl/TriToolstudioshotwhitebackground.JPG",
  },
  {
    label: "Accform ACE II-17 in",
    href: "https://www.paraide.com/products/bunkers/bunker-rakes/accuform-ace-ii-with-17-inch-head/",
    img: "https://www.paraide.com/webres/catalog/xl/990-1.jpg",
  },
  {
    label: "Accform ACE II-25 in",
    href: "https://www.paraide.com/products/bunkers/bunker-rakes/accuform-ace-ii-with-25-inch-head/#:~:text=The%20most%20trusted%20bunker%20rake%20for%20tournaments%20worldwide,unsightly%20furrows%20left%20by%20rakes%20with%20straight%20ends.",
    img: "https://www.paraide.com/webres/catalog/xl/995-2.jpg",
  },
  {
    label: "Accform Accucurv II-15 in",
    href: "https://www.paraide.com/products/bunkers/bunker-rakes/accuform-accucurv/",
    img: "https://www.paraide.com/webres/catalog/xl/997-125.jpg",
  },
  {
    label: "Accform Deep face Bunker rake",
    href: "https://www.paraide.com/products/bunkers/bunker-rakes/accuform-deep-face-bunker-rake/",
    img: "https://www.paraide.com/webres/catalog/xl/deep_face_bunker_rake_on_course.jpg",
  },
  {
    label: "Maintenaace rake",
    href: "https://www.paraide.com/products/bunkers/bunker-rakes/maintenance-rake/",
    img: "https://www.paraide.com/webres/catalog/xl/GroundskeeperII-page30.jpg",
  },
  {
    label: "Accuform Acculevel",
    href: "https://www.paraide.com/products/maintenance-tools/golf-course/accuform-acculevel/",
    img: "https://www.paraide.com/webres/catalog/xl/AccuLevel.jpg",
  },
  {
    label: "Accuform Accufix 1092",
    href: "https://www.paraide.com/products/green-area/green-area-tools/accuform-accufix/",
    img: "https://www.paraide.com/webres/catalog/xl/accufix_800.jpg",
  },
  {
    label: "E-Z Whipping Pole",
    href: "https://www.paraide.com/products/green-area/green-area-tools/e-z-whip-whipping-pole/",
    img: "https://www.paraide.com/webres/catalog/xl/whipping_pole_on_course(1).jpg",
  },
];


const Paraid = () => {
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
    <section ref={sectionRef} className="min-h-screen bg-black/70 relative  text-white">
<div className="fixed top-0 left-0 w-full h-full -z-10">
  <img
    src="https://images.unsplash.com/photo-1538628166020-9c7589dc6913?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
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
            Golf Accessories (Par Aide)
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

export default Paraid;
