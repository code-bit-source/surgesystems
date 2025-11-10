// ==========================
// File: pages/ten.jsx
// Blog Detail Page – “Sprinkler System Fundamentals”
// ==========================
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../HomePage/components/Navbar";
import Footer from "../../HomePage/components/Footer";
import { FaPlay, FaPause } from "react-icons/fa";

const Ten = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* ===================== Header Section ===================== */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-snug">
          Sprinkler System Fundamentals
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          by <span className="font-semibold text-green-700">Surge System</span> | Apr 13,
          2023 | Uncategorized | 0 comments
        </p>

        {/* Banner Image */}
        <div className="w-full mb-10">
          <img
            src="/blogs/a1.webp"
            alt="Sprinkler System Field"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Second Banner */}
        {/* <div className="relative mb-12">
          <img
            src="https://images.unsplash.com/photo-1604079626720-dbdcdd2e4581"
            alt="Installing a Sprinkler System"
            className="w-full rounded-lg shadow-md object-cover"
          />
          <h2 className="absolute bottom-4 left-4 text-white font-bold text-xl md:text-2xl bg-black bg-opacity-50 px-3 py-1 rounded">
            Installing a Sprinkler System?
          </h2>
        </div> */}

        {/* ===================== Blog Content ===================== */}
        <h2 className="text-2xl font-bold text-center mt-8 mb-6 tracking-wide text-green-700">
          YOU NEED TO KNOW THESE 3 THINGS
        </h2>

        <div className="prose max-w-none">
          <p className="text-base leading-relaxed text-gray-700 mb-6">
            If you are planning on installing a sprinkler system, there are a few key
            things you need to know. You may be asking: How do I maintain my lawn? Why is
            my lawn always withering and browning despite the work the gardener puts in?
            Whether you are looking to water your lawn, shrubs, or vegetable garden, these
            tips will help you make the right choices for your specific needs.
          </p>

          <p className="text-base leading-relaxed text-gray-700 mb-6">
            To illustrate the importance of proper installation, consider the case of a
            farmhouse in Noida. The owners had installed GI pipes around their property,
            which corroded over time and led to the collapse of their water system within
            five years. After consulting with our professionals, they installed a pop-up
            sprinkler system with automation, which allowed them to maintain their property
            efficiently and reduce labor, energy, and water costs. Their lawn has been
            thriving for two years now, thanks to the planned installation by our team.
          </p>

          <ol className="list-decimal pl-6 mb-8 text-gray-700 leading-relaxed space-y-4">
            <li>
              It is important to understand the concept of overlap. This refers to the degree to which the water from each sprinkler overlaps with the adjacent sprinkler. It is crucial to ensure proper overlap to avoid overwatering or underwatering certain areas of your lawn or garden.
            </li>
            <li>
             You need to consider your water source. If you are using a borewell, it is recommended to install an underground or overhead water tank to ensure a steady and reliable supply of water. Additionally, you will need to choose the right pump for your specific water source.
            </li>
            <li>
              There are two types of irrigation systems: fully automatic and semi-automatic. Fully automatic systems are the better choice, as they offer the benefit of night watering, which reduces water evaporation and allows for better absorption into the ground. Pop-up sprinklers are a great choice for their efficiency, visual appeal, and the fact that they save on labor and electricity costs.
            </li>
          </ol>
        </div>

        {/* ===================== Video Section (HTML5) ===================== */}
        <div className="grid md:grid-cols-2 gap-8 items-center my-12">
          {/* Video Player */}
          <div className="relative w-full rounded-xl overflow-hidden shadow-md">
            <video
              ref={videoRef}
              src="/blogs/ten/a2.mp4" 
              className="w-full rounded-xl"
              controls={false}
              playsInline
              loop
              preload="metadata"
              volume="1"
            ></video>

            {/* Play / Pause Overlay */}
            <button
              onClick={handleTogglePlay}
              className="absolute inset-0 flex items-center justify-center   transition rounded-xl"
            >
              {isPlaying ? (
                <FaPause className="text-white text-4xl" />
              ) : (
                <FaPlay className="text-white text-4xl" />
              )}
            </button>
          </div>

          {/* Side Content */}
          <div>
            <p className="text-base leading-relaxed text-gray-700 mb-6">
              When it comes to the type of lawn you have, there are different types of
              sprinkler systems to consider. For lawns with just grass, pop-up sprinklers
              work best. For lawns with grass and shrubs, a combination of pop-up and flood
              bubblers is efficient. For vegetable gardens, drip irrigation is ideal.
            </p>

            <p className="text-base leading-relaxed text-gray-700 mb-6">
              It is also important to consider the type of pipes and valves you use. PVC, HDPE, and ASTM pipes are commonly used, and there are different types of valves and controllers to choose from as well. Choosing the wrong combination can result in a ruined lawn, so it is important to do your research and consult with a professional if needed.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              If you have any further questions or concerns about installing a sprinkler system, don’t hesitate to reach out.
            </p>
          </div>
        </div>

        {/* ===================== Bottom Cards Section ===================== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 border-t pt-10">
          {[
            {
              title: "GOLF / TURF EQUIPMENT",
              desc: "We are the distributor of TORO Co. USA, a global leader of the latest sports, turf and landscape maintenance equipment.",
              btn: "OPEN CATALOGUE",
              link: "/equipments/1",
            },
            {
              title: "LANDSCAPE IRRIGATION",
              desc: "Design, Supply, and Installation of irrigation systems for Golf Courses, Sports Fields, Farm Houses, Hotels, Gardens, & Parks.",
              btn: "OUR SERVICES",
              link: "/irrigation",
            },
            {
              title: "GOLF ACCESSORIES",
              desc: "Tournament-grade accessories to give any golf course the prestigious ambience of Scottish highland greens.",
              btn: "OPEN CATALOGUE",
              link: "/GolfAccesories/2",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="text-center border rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              <h4 className="text-lg font-semibold text-green-700 mb-3">
                {card.title}
              </h4>
              <p className="text-gray-600 mb-5">{card.desc}</p>

              <Link to={card.link}>
                <button className="px-5 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition">
                  {card.btn}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Ten;
