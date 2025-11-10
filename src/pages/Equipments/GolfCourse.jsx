import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Footer from "../HomePage/components/Footer";
import Navbar from "../HomePage/components/Navbar";


gsap.registerPlugin(ScrollTrigger);

export const golfCourseData = [
  {
    label: "Greens Mowers",
    children: [
      { label: "Toro Greensmaster 1021", href: "https://www.toro.com/en/product/04830", img: "https://cdn.thetorocompany.com/api/assetstorage/623_759ccbc3-5feb-4fa4-87b6-39119c3aca94/Large" },
      { label: "Toro Greensmaster 1021 Flex", href: "https://www.toro.com/en/product/04860", img: "https://cdn.thetorocompany.com/api/assetstorage/623_993ddd6e-e52a-44fb-be6d-26e8abd7d673/Large" },
      { label: "Toro Greensmaster 3250-D", href: "https://www.toro.com/en/product/04384", img: "https://cdn.thetorocompany.com/api/assetstorage/623_d52c5746-48f9-4af0-be8b-9a8868ccb778/Large" },
      { label: "Toro Greensmaster 3150-Q", href: "https://www.toro.com/en/product/04358", img: "https://cdn.thetorocompany.com/api/assetstorage/623_03942b82-498f-405d-b698-296b20caf515/Large" },
      { label: "Toro Greensmaster® TriFlex™ 3420", href: "https://www.toro.com/en/product/04540", img: "https://cdn.thetorocompany.com/api/assetstorage/623_bf06d341-465a-4951-8006-97494ed62158/Large" },
    ],
  },
  {
    label: "Fairway Mowers",
    children: [
      { label: "Toro Reelmaster 3575-D", href: "https://www.toro.com/en/product/03821", img: "https://cdn.thetorocompany.com/api/assetstorage/623_18723f43-0723-410d-8fdc-bfb73c9fb446/Large" },
      { label: "Toro Reelmaster 5510-D", href: "https://www.toro.com/en-gb/product/03964", img: "https://cdn.thetorocompany.com/api/assetstorage/623_7cc22a40-4735-435e-8951-bf90d06169df/Large" },
      { label: "Toro Reelmaster 5610-D", href: "https://www.toro.com/en/product/03956", img: "https://cdn.thetorocompany.com/api/assetstorage/623_712d41cf-f0f7-4d3c-8b67-df29e66dc98e/Large" },
      { label: "Toro Reelmaster 5010-H", href: "https://www.toro.com/en/product/03950", img: "https://cdn.thetorocompany.com/api/assetstorage/623_ea0dbd04-ba7a-4226-bd03-4e9a143a794c/Large" },
    ],
  },
  {
    label: "Rough Mowers",
    children: [
      { label: "Toro Groundmaster 3500-D", href: "https://www.toro.com/en/product/30807", img: "https://cdn.thetorocompany.com/api/assetstorage/623_d70d1796-e57b-491c-ae53-a8b1b91d378c/Large" },
      { label: "Toro Groundmaster 3505-D", href: "https://www.toro.com/en/product/30849", img: "https://cdn.thetorocompany.com/api/assetstorage/623_f4e0736d-a2e4-4b2a-b861-e7496b1d406c/Large" },
      { label: "Toro Groundmaster 4300-D", href: "https://www.toro.com/en/product/30879", img: "https://cdn.thetorocompany.com/api/assetstorage/623_298476d1-5b55-43e8-9888-57b73ce6dcdd/Large" },
      { label: "Toro Groundmaster 4500-D", href: "https://www.toro.com/en/product/30885", img: "https://cdn.thetorocompany.com/api/assetstorage/623_af0340fc-d2dc-4a88-b73b-fbb800d55656/Large" },
      { label: "Toro Groundmaster 4700-D", href: "https://www.toro.com/en/product/30887", img: "https://cdn.thetorocompany.com/api/assetstorage/623_277e531f-5d5f-4a81-88e3-5268d3c99c99/Large" },
      { label: "Toro Groundmaster 1200", href: "https://www.toro.com/en/product/Groundsmaster-1200-Series", img: "https://cdn.thetorocompany.com/api/assetstorage/623_4ec2e398-52cc-4be9-abc2-050de4d509a6/Large" },
      { label: "Toro Proline H800", href: "https://www.toro.com/en/product/31051", img: "https://cdn.thetorocompany.com/api/assetstorage/623_2767f2e2-5812-4c8a-a503-67893fa87a5e/Large" },
      { label: "Toro Grounmaster 3200/3300 Series", href: "https://www.toro.com/en/product/31900A", img: "https://cdn.thetorocompany.com/api/assetstorage/623_9a1c5d78-f40a-4548-b9f5-2ad94867bf7a/Large" },
    ],
  },
  {
    label: "Tee Mowers",
    children: [
      { label: "Toro Greensmaster 1026", href: "https://www.toro.com/en/product/04840", img: "https://cdn.thetorocompany.com/api/assetstorage/623_8e7f8f0f-2d17-47c6-96b4-5e0a56029dd7/Large" },
    ],
  },
  {
    label: "Trim /Apron Mowers",
    children: [
      { label: "Toro Reelmaster 3100-D", href: "https://www.toro.com/en/product/03170", img: "https://cdn.thetorocompany.com/api/assetstorage/623_24aed493-f435-45f3-aef7-308a5c44a483/Large" },
      { label: "Toro Reelmaster 3100-D with Sidewinder", href: "https://www.toro.com/en/product/03171", img: "https://cdn.thetorocompany.com/api/assetstorage/623_33692fc2-0d1e-431b-aa8f-b08b62f223c8/Large" },
      { label: "Toro ProStripe 560", href: "https://www.toro.com/en/product/02657", img: "https://cdn.thetorocompany.com/api/assetstorage/623_4f4aff75-c0ca-4824-ba0c-eb69f971925d/Large"  },
    ],
  },
  {
    label: "Greens Aerators",
    children: [
      { label: "Toro ProCore 648s", href: "https://www.toro.com/en/product/09960", img: "https://cdn.thetorocompany.com/api/assetstorage/623_cd074801-4d55-4dc0-90be-83d002d36d57/Large" },
    ],
  },
  {
    label: "Fairway Aerators",
    children: [
      { label: "Toro ProCore 864", href: "https://www.toro.com/en/product/09715", img: "https://cdn.thetorocompany.com/api/assetstorage/623_8c758c45-96b0-426e-9e09-db927d6b6606/Large" },
      { label: "Toro ProCore 1298", href: "https://www.toro.com/en/product/09716", img: "https://cdn.thetorocompany.com/api/assetstorage/623_ef63cf2f-8928-4fde-ab6a-0bfcc79fd5c7/Large" , },
    ],
  },
  {
    label: "Greens Top Dressers",
    children: [
      { label: "Ecolawn Applicator ECO 250S (Spin Type)", href: "https://ecolawnapplicator.com/eco-250s/", img: "https://ecolawnapplicator.com/wp-content/uploads/2023/09/ECO250S.jpg" },
      { label: "Turfco F15B (Drop Type)", href: "https://www.turfco.com/store/c25/topdressers/p118526/mete-r-matic-topdresser/", img: "https://www.turfco.com/images/thumbnail.aspx?img=/webres/catalog/xl/Mete-R-Matic_Topdresser_NoRefl-800x600.jpg" },
      { label: "Dakota 310", href: "https://dakotapeat.com/equipment/turf-tenders/310-turf-tender/", img: "https://cdn.shortpixel.ai/spai/w_500+q_glossy+ret_img+to_webp/https://dakotapeat.com/wp-content/uploads/2020/04/310-300.jpg" },
    ],
  },
  {
    label: "Fairway Top Dressers",
    children: [
      { label: "Toro ProPass 200", href: "https://www.toro.com/en/product/ProPass-200-Series-Top-Dresser", img: "https://cdn.thetorocompany.com/api/assetstorage/623_399d5dc7-a7df-41b5-901c-06760470524b/Large" },
      { label: "Turfco WideSpin 1550 Broadcast Topdresser", href: "https://www.turfco.com/store/c12/spinner-topdressers/p13/widespin-1550-broadcast-topdresser/", img: "https://www.turfco.com/images/thumbnail.aspx?img=/webres/catalog/xl/Widespin-1550-white_rgb_800x600.jpg" },
    ],
  },
  {
    label: "Bunker Rakes",
    children: [
      { label: "Toro Sand Pro 2040Z", href: "https://www.toro.com/en/product/08706", img: "https://cdn.thetorocompany.com/api/assetstorage/623_8c60d184-a52a-4dfd-b3bd-cefbb9218a94/Large" },
      { label: "Toro Sand Pro 3040", href: "https://www.toro.com/en/product/08743", img: "https://cdn.thetorocompany.com/api/assetstorage/623_7d25e662-e28d-4d10-b637-b0552246f8ab/Large" },
      { label: "Toro Sand Pro 5040", href: "https://www.toro.com/en/product/08745", img: "https://cdn.thetorocompany.com/api/assetstorage/623_c0110fef-5357-4a89-8b18-fa6753590283/Large" },
    ],
  },
  {
    label: "Golf Utility Vehicles",
    children: [
      { label: "Toro Workman® MDX - Petrol", href: "https://www.toro.com/en/product/07235", img: "https://cdn.thetorocompany.com/api/assetstorage/623_539f1007-c7a8-42f9-bb6b-be4520306e4b/Large" },
      { label: "Toro Workman® HDX - Petrol", href: "https://www.toro.com/en/product/Workman-HDX-Series", img: "https://cdn.thetorocompany.com/api/assetstorage/623_7b3647af-1f71-4444-9d85-13e55860bb41/Large" },
      { label: "Toro Workman® HDX - Diesel", href: "https://www.toro.com/en/product/07387", img: "https://cdn.thetorocompany.com/api/assetstorage/623_7b3647af-1f71-4444-9d85-13e55860bb41/Large" },
      { label: "Toro Workman® GTX", href: "https://www.toro.com/en/product/Workman-GTX-Series", img: "https://cdn.thetorocompany.com/api/assetstorage/623_ef901dd7-c3bd-4af1-9d17-7d8d70fcfba4/Large" },
    ],
  },
  {
    label: "Dethatcher / Verti-Cutters",
    children: [
      { label: "Graden GS-04 Greens Dethatcher (Walk Behind)", href: "https://gradenturfmachinery.com.au/", img: "https://gradenturfmachinery.com.au/images/csi.png" },
      { label: "Graden Fairway Dethatcher (Tow Type)", href: "#", img: "https://via.placeholder.com/400x400.png?text=Fairway+Dethatcher" },
      { label: "1st Product VC-60 Verti-Cutter - Fairway", href: "https://1stproducts.com/blog/product_models/vc-60-verti-cutter/", img: "https://1stproducts.com/wp-content/uploads/2019/01/DSC00925-1024x682.jpg" },
      { label: "1st Product VC-40 Verti-Cutter - Fairway", href: "https://1stproducts.com/blog/product_models/vc-40-verti-cutter/", img: "https://1stproducts.com/wp-content/uploads/2020/06/verticutter_0004_DSC00090-1024x683.jpg" },
    ],
  },
  {
    label: "Debris Collection & Blowing",
    children: [
      { label: "Toro Pro Force® Debris Blower", href: "https://www.toro.com/en/product/44554", img: "https://cdn.thetorocompany.com/api/assetstorage/623_2816c599-6e8f-4f5e-be4a-c91012767c46/Large" },
      { label: "Harper Industries ProSweep", href: "https://www.harperturfequipment.com/products/", img: "https://www.harperturfequipment.com/static/turf/img/turf-product-header-img-hawk.23abbd4f7216.jpg" },
      { label: "Harper Industries Versa-Vac", href: "https://www.harperturfequipment.com/products/", img: "https://www.harperturfequipment.com/static/turf/img/product-drawer/harper-hawk-780x520.afcdc441447d.jpg" },
      { label: "Harper Industries Rake-o-Vac", href: "https://www.harperturfequipment.com/products/", img: "https://www.harperturfequipment.com/static/turf/img/product-drawer/pro-sweep-780x520.6014f068ddff.jpg" },
      { label: "Imants - RotoSweep & Rhea Scarifier", href: "https://campeyturfcare.com/portfolio-items/rotosweep-rhea-scarifier/", img: "https://campeyturfcare.com/wp-content/uploads/2024/11/Imants-Rotosweep-2-1-1024x686.jpg" },
      { label: "WideSpin 1550 Broadcast Topdresser", href: "https://www.turfco.com/store/c12/spinner-topdressers/p13/widespin-1550-broadcast-topdresser/", img: "https://www.turfco.com/images/thumbnail.aspx?img=/webres/catalog/xl/Turfco_Widespin_1550_loading_rgb_800x600.jpg" },
    ],
  },
];


const GolfCourse = () => {
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
    src="https://images.unsplash.com/photo-1664212249973-be78ca5261bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    alt=""
    className="object-cover w-full h-full"
  />
</div>
      {/* <Navbar /> */}
      <div className="p-5">

        <a href="/" className="px-5 py-1 bg-white text-black text-center rounded-2xl  mx-3"> back </a>
      </div>
      <div className="px-10 py-10 md:px-20">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold  uppercase"
          >
            Golf Course
          </motion.h1>
          <p className="text-gray-300 mt-3">
            Explore all golf equipment categories below.
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

export default GolfCourse;
