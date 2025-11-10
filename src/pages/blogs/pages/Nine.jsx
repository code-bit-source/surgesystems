// ==========================
// File: pages/nine.jsx
// Blog Detail Page – “Lawnmower Fundamentals”
// ==========================
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../HomePage/components/Navbar";
import Footer from "../../HomePage/components/Footer";
import { FaPlay, FaPause } from "react-icons/fa";

const Nine = () => {
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
          Lawnmower Fundamentals – Buying a Lawnmower is Exciting
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          by <span className="font-semibold text-green-700">Surge System</span> | Apr 14,
          2023 | Uncategorized | 0 comments
        </p>

        {/* Banner Image */}
        <div className="flex justify-center mb-10">
          <img
            src="/blogs/nine/a1.jpg"
            alt="Lawnmower Operation"
            className="w-[500px] rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* ===================== Blog Content ===================== */}
        <h2 className="text-2xl font-bold text-center mt-8 mb-6 tracking-wide text-green-700">
          BUT IT REQUIRES DAILY CARE
        </h2>

        <div className="prose max-w-none">
          <p className="text-base leading-relaxed text-gray-700 mb-6">
            As a technical engineer, I’ve seen my fair share of lawnmower breakdowns that
            could have easily been prevented with proper maintenance. That’s why I want to
            share some tips on how to maintain your lawnmower so you can avoid costly
            repairs and keep your machine running smoothly.
          </p>

          <p className="text-base leading-relaxed text-gray-700 mb-6">
           We’ve witnessed everything that can go wrong with a lawnmower, from clogged carburetors to dull cutting blades. We even saw a punctured air filter – sabotaged purposefully to avoid changing the air filter. Understanding the inner workings of a diesel machine goes a long way in keeping your mower in tip-top condition. The second best solution is to read this blog to understand what tasks can keep your equipment running well over its expiry date.
          </p>

          <p className="text-base leading-relaxed text-gray-700 mb-6">
            If you plan to store your mower away for a long time, ensure that the fuel tank
            and carburetor are empty by running the machine till it burns all the petrol or
            draining it. Otherwise, the petrol will sediment into a gum-like substance. Old
            petrol will go bad in as little as 2–4 weeks.
          </p>

          <p className="text-base leading-relaxed text-gray-700 mb-6">
            First and foremost, if your lawnmower isn’t starting, check the fuel. Many
            machines are sidelined simply because people try to start them without fuel.
            It’s also important to use clean fuel and avoid using dusty cans that can
            introduce impurities into the tank.
          </p>

          <p className="text-base leading-relaxed text-gray-700 mb-6">
            The air filter is another crucial component that can affect the performance of
            your lawnmower. A clogged air filter can cause the engine to overheat and
            potentially cause permanent damage. Make sure to clean or replace the air
            filter as recommended in the manual.
          </p>

          <p className="text-base leading-relaxed text-gray-700 mb-6">
            Regular oil changes and filter replacements are also important to keep your lawnmower running smoothly. It’s recommended to follow the manufacturer’s instructions for when to change the oil and filter.
          </p>

          <p className="text-base leading-relaxed text-gray-700 mb-10">
            Other maintenance tasks include checking tire pressure on ride-on mowers and
            greasing the bearings as specified in the manual. Replace worn-out belts,
            bearings, and filters with genuine parts as recommended by the manufacturer.
          </p>
        </div>

        {/* ===================== Video Section ===================== */}
        <div className="grid md:grid-cols-2 gap-8 items-center my-12">
          {/* Custom HTML5 Video Player */}
          <div className="relative w-full rounded-xl overflow-hidden shadow-md">
            <video
              ref={videoRef}
              src="/blogs/nine/a2.mp4" // 👈 Replace with your actual path
              className="w-full rounded-xl"
              controls={false}
              playsInline
              loop
              preload="metadata"
              volume="1"
            ></video>

            {/* Play / Pause Overlay Button */}
            <button
              onClick={handleTogglePlay}
              className="absolute inset-0 flex items-center justify-center  bg-opacity-30 hover:bg-opacity-50 transition rounded-xl"
            >
              {isPlaying ? (
                <FaPause className="text-white text-4xl" />
              ) : (
                <FaPlay className="text-white text-4xl" />
              )}
            </button>
          </div>

          {/* Side Text */}
          <div>
            <p className="text-base leading-relaxed text-gray-700 mb-6">
             When using your lawnmower, remember to adopt a 1/3rd policy while cutting the grass to avoid overworking the machine (Don’t go lower than 1/3rd length of the grass at a time). Make sure the bed knife and reel are properly sharpened and adjusted before cutting and wash and clean the machine after each use. Blunt blades or improperly adjusted settings can ruin your turf by exposing the lawn to disease.
            </p>

            {/* <p className="text-base leading-relaxed text-gray-700 mb-6">
              Make sure the bed knife and reel are properly sharpened and adjusted before
              cutting. Wash and clean the machine after every use to avoid grass buildup or
              disease spread.
            </p> */}

            <p className="text-base leading-relaxed text-gray-700 mb-6">
              It’s also important to address issues as soon as they arise. Neglecting
              maintenance or improperly storing the machine can drastically reduce its
              lifespan.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              If you have further questions about purchasing or maintaining a lawnmower,
              don’t hesitate to reach out to the Surge Systems Team!
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

export default Nine;
