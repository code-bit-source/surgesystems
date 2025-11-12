import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../HomePage/components/Navbar";

const Irrigation = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [activeSubTab, setActiveSubTab] = useState(null);

const offerings = [
    {
      title: "Toro Irrigation System Solutions",
      subtabs: [
        {
          label: "Landscape Irrigation for Homes, Residential, Commercials",
          content: [
            { name: "Irrigation Timers and Controllers", link: "https://www.toro.com/en/professional-contractor/irrigation-controllers" },
            { name: "Irrigation Rotors", link: "https://www.toro.com/en/professional-contractor/irrigation-rotors" },
            { name: "Irrigation Sprinklers", link: "https://www.toro.com/en/professional-contractor/irrigation-sprays" },
            { name: "Funny-Pipe", link: "https://www.toro.com/en/product/I-P-S-Flexible-PVC-Tubing" },
            { name: "Drip Irrigation", link: "https://www.toro.com/en/professional-contractor/irrigation-landscape-drip" },
            { name: "Irrigation Sprinklers Valves", link: "https://www.toro.com/en/agriculture/irrigation-valves" },
            { name: "Irrigation Sensors For Home SYstems", link: "https://www.toro.com/en/professional-contractor/irrigation-sensors-remotes" },
          ],
        },
        {
          label: "Landscape Irrigation for Residential and Commercials",
          content: [
            { name: "Irrigation Rotors and Sprinklers", link: "https://www.toro.com/en/professional-contractor/irrigation-rotors" },
            { name: "Irrigation Spray Heads for Professional Systems", link: "https://www.toro.com/en/professional-contractor/irrigation-sprays" },
            { name: "Commercial Drip Irrigation for Landscaping", link: "https://www.toro.com/en/professional-contractor/irrigation-landscape-drip" },
            { name: "Commercial Irrigation Valves", link: "https://www.toro.com/en/professional-contractor/irrigation-valves" },
            { name: "Irrigation Controllers", link: "https://www.toro.com/en/professional-contractor/irrigation-controllers" },
            { name: "Irrigation Rain Sensors and Remotes for Professional Systems", link: "https://www.toro.com/en/professional-contractor/irrigation-sensors-remotes" },
            { name: "Irrigation Central Control Systems", link: "https://www.toro.com/en/professional-contractor/irrigation-central-control" },
          ],
        },
        {
          label: "Sports Fields Irrigation System",
          content: [
            { name: "Field Irrigation Rotors and Sprinklers", link: "https://www.toro.com/en/sports-fields-municipalities/irrigation-rotors" },
            { name: "Irrigation Sprays for Sports and Municipalities", link: "https://www.toro.com/en/sports-fields-municipalities/irrigation-sprays" },
            { name: "Drip Irrigation", link: "https://www.toro.com/en/sports-fields-municipalities/irrigation-drip" },
            { name: "Irrigation Sprinkler Valves", link: "https://www.toro.com/en/sports-fields-municipalities/valves" },
            { name: "Irrigation Controllers for Sports", link: "https://www.toro.com/en/sports-fields-municipalities/irrigation-controllers" },
            { name: "Irrigation Sensors and Remotes for Sports Fields ", link: "https://www.toro.com/en/sports-fields-municipalities/irrigation-sensors-remotes" },
          ],
        },
        {
          label: "Golf Course Irrigation System",
          content: [
            { name: "Golf Course Irrigation Heads/Sprinklers", link: "https://www.toro.com/en/golf/irrigation_heads" },
            { name: "Golf Irrigation Sprinkler Valves", link: "https://www.toro.com/en/golf/irrigation-valves" },
            { name: "Remote Irrigation Field Controllers", link: "https://www.toro.com/en/golf/irrigation-field-controllers" },
            { name: "Central Control Systems", link: "https://www.toro.com/en/golf/golf-course-irrigation-control-systems" },
          ],
        },
      ],
    },
    {
      title: "Perrot (Germany) Irrigation Systems",
      subtabs: [
        {
          label: "Sports",
          content: [
            { name: "Pop-up Sprinklers", link: "https://www.perrot.de/en/main-menu/sports/pop-up-sprinklers" },
            { name: "Mobile Irrigation", link: "https://www.perrot.de/en/main-menu/sports/mobile-irrigation" },
            { name: "Irrigation Systems for Sports Fields", link: "https://www.perrot.de/en/main-menu/sports/control-systems" },
          ],
        },
        {
          label: "Industries",
          content: [
            { name: "Dust Suppression", link: "https://www.perrot.de/en/main-menu/industry/dust-suppression" },
          ],
        },
        {
          label: "Agriculture",
          content: [
            { name: "Sprinklers", link: "https://www.perrot.de/en/main-menu/agriculture/sprinklers/impact-sprinklers" },
            { name: "Couplings", link: "https://www.perrot.de/en/main-menu/agriculture/couplings/steel-size-50-216" },
            { name: "Flat Couplings", link: "https://www.perrot.de/en/main-menu/agriculture/flat-couplings" },
            { name: "Tripods", link: "https://www.perrot.de/en/main-menu/agriculture/tripods" },
          ],
        },
      ],
    },
    {
      title: "MCI Flowtronex Pump Station",
      subtabs: [
        {
          label: "Pump Station",
          content: [
            { name: "Golf Course Irrigation Pump Station", link: "https://mciflowtronex.com/products/golf-irrigation-pump-station/" },
            { name: "Landscape Irrigation Pump Station", link: "https://mciflowtronex.com/products/landscape-irrigation-pump-station/" },
            { name: "Agriculture Pump station ", link: "https://mciflowtronex.com/products/agriculture-pump-station/" },
            { name: "Municipal Pump Station", link: "https://mciflowtronex.com/products/golf-irrigation-pump-station/" },
            { name: "Irrigation Pump Control", link: "https://mciflowtronex.com/products/irrigation-pump-controls/" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black/50 text-white  pb-12">
<div className="fixed top-0 left-0 w-full h-full -z-10">
  <img
    src="irrigation.jpg"
    alt=""
    className="object-cover w-full h-full"
  />
  <div className="absolute inset-0 bg-black/40"></div>
</div>


        <Navbar />
      {/* 🔹 Banner Image */}
      {/* <div className="w-full mb-10">
        <img
          src="front.jpg"
          alt="Irrigation Banner"
          className="w-full h-64 object-cover rounded-2xl shadow-xl"
        />
      </div> */}

      {/* 🔹 Heading Section */}
      <div className="text-center px-6 py-12 mb-12">
        <h1 className="text-8xl font-bold text-white font-[font1]">IRRIGATION SOLUTIONS</h1>
        <p className="text-white font-semibold mt-2">
          Smarter Water Management for Greener Grounds
        </p>
        <p className="max-w-3xl mx-auto text-gray-400 mt-4">
          Healthy turf and landscapes begin with the right irrigation. Our
          advanced irrigation systems deliver precise water distribution,
          reduce wastage, and keep cricket grounds, stadiums, parks, and lawns
          lush throughout the year.
        </p>
      </div>

      {/* 🔹 Offerings Section */}
      <h2 className="text-2xl px-6 font-semibold mb-6 text-white">
        OUR IRRIGATION OFFERINGS
      </h2>

      <div className="flex flex-col px-6 gap-6">
        {offerings.map((offering, index) => (
          <motion.div
            key={index}
            className="border border-gray-700 rounded-3xl shadow-xl p-6 bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={() =>
                setActiveTab(activeTab === index ? null : index)
              }
              className="w-full text-left text-lg font-semibold text-white flex justify-between items-center"
            >
              {offering.title}
              <span className="text-white">{activeTab === index ? "▲" : "▼"}</span>
            </button>

            {/* Subtabs */}
            <AnimatePresence>
              {offering.subtabs && activeTab === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-5"
                >
                  <div className="flex flex-wrap gap-3">
                    {offering.subtabs.map((sub, subIndex) => (
                      <button
                        key={subIndex}
                        onClick={() =>
                          setActiveSubTab(
                            activeSubTab === `${index}-${subIndex}`
                              ? null
                              : `${index}-${subIndex}`
                          )
                        }
                        className={`px-5 py-2 rounded-xl font-medium transition border border-gray-700 ${
                          activeSubTab === `${index}-${subIndex}`
                            ? "bg-white text-black"
                            : "bg-gray-800 text-white hover:bg-gray-700"
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>

                  {/* Subtab content */}
                  {offering.subtabs.map((sub, subIndex) =>
                    activeSubTab === `${index}-${subIndex}` ? (
                      <motion.div
                        key={subIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4 }}
                        className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
                      >
                        {sub.content.map((item, i) => (
                          <a
                            key={i}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-5 border border-gray-700 rounded-2xl shadow-md bg-gray-800 hover:bg-gray-700 text-center transition-all duration-300"
                          >
                            <p className="font-medium text-white hover:text-gray-300">
                              {item.name}
                            </p>
                          </a>
                        ))}
                      </motion.div>
                    ) : null
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

        {/* 🔹 Supreme (no subtabs) */}
        <motion.div
          className="border border-gray-700 rounded-3xl shadow-xl p-6 bg-gray-900 hover:bg-gray-800 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <a
            href="https://www.supreme-systems.net/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg font-semibold text-white  hover:underline"
          >
            Supreme (Italy) Fittings
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Irrigation;
