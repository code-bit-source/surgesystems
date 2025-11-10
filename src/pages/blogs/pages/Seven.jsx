// ==========================
// File: pages/seven.jsx
// Blog Detail Page – “Earth Day 2023 – How can you contribute”
// ==========================
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../HomePage/components/Navbar";
import Footer from "../../HomePage/components/Footer";
import { FaPlay, FaPause } from "react-icons/fa";

const Seven = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoToggle = () => {
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
          Earth Day 2023 – How Can You Contribute?
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          by <span className="font-semibold text-green-700">Surge System</span> | Apr 22,
          2023 | Uncategorized | 0 comments
        </p>

        {/* Banner Image */}
        <div className="w-full mb-10">
          <img
            src="/blogs/seven/a1.webp"
            alt="Earth and Tree"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* ===================== Blog Content ===================== */}
        <h2 className="text-2xl font-bold text-center mt-8 mb-6 tracking-wide text-green-700">
          PLEDGES WE MADE ON EARTH DAY
        </h2>

        <div className="prose max-w-none">
          <p className="text-base leading-relaxed text-gray-700 mb-6">
            Earth Day is an annual event celebrated globally on April 22 to raise
            awareness about environmental issues and encourage people to take action to
            protect our planet. Climate change is one of the most pressing environmental
            challenges we face today, and it is caused by a variety of factors.
          </p>

          <p className="text-base leading-relaxed text-gray-700 mb-6">
            One major cause of climate change is the burning of fossil fuels such as coal,
            oil, and natural gas. When these fuels are burned, they release greenhouse
            gases such as carbon dioxide and methane into the atmosphere, trapping heat and
            causing the planet to warm up. Deforestation and agriculture are also
            significant contributors to climate change, as they release carbon dioxide into
            the atmosphere and reduce the number of trees that can absorb carbon.
          </p>

          <p className="text-base leading-relaxed text-gray-700 mb-6">
            Industrial processes and transportation also contribute to climate change by
            releasing pollutants and greenhouse gases into the atmosphere. Finally, human
            activities such as waste disposal and landfill operations release methane and
            other greenhouse gases into the atmosphere.
          </p>

          <p className="text-base leading-relaxed text-gray-700 mb-6">
           Despite these challenges, people around the world are coming together to make a difference and save the Earth. Individuals and communities are taking action to reduce their carbon footprint by conserving energy, driving less, and eating a plant-based diet. The Government is leading the transition to renewable energy; like installing 122 GW of Solar power by the start of this year. Even abroad Indians are leading projects to develop hydro-electricity dams in Asia and Africa. The Nyaborongo Dam in Rwanda, financed by India, is fueling the ambition of the central African country to become the new hub for that region of Africa
          </p>

          <p className="text-base leading-relaxed text-gray-700 mb-8">
            Innovative technologies are also being developed to combat climate change. From electric cars to wind turbines to energy-efficient buildings, these new technologies are helping to reduce greenhouse gas emissions and slow the pace of climate change.
          </p>
        </div>

        {/* ===================== Video + Text Section ===================== */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          {/* 🎥 Video Container */}
          <div className="relative group">
            <video
              ref={videoRef}
              src="/blogs/seven/a2.mp4"
              className="w-full rounded-lg shadow-md"
              controls={false}
              loop
              playsInline
              preload="metadata"
              volume="1"
            />
            {/* Play/Pause Button */}
            <button
              onClick={handleVideoToggle}
              className="absolute inset-0 flex items-center justify-center bg-opacity-30 hover:bg-opacity-50 transition rounded-lg"
            >
              {isPlaying ? (
                <FaPause className="text-white text-4xl" />
              ) : (
                <FaPlay className="text-white text-4xl" />
              )}
            </button>
          </div>

          {/* 📄 Text Section */}
          <div>
            <p className="text-base leading-relaxed text-gray-700 mb-6">
              In India, this technology is the catalyst to a progressive change in India's
              clean-up. Planned use of machinery culminated in the biggest beach clean-up
              the world has ever seen in Mumbai. In the aftermath, rare turtles were seen
              climbing up the beach — a positive sign from nature.
            </p>

            <p className="text-base leading-relaxed text-gray-700 mb-6">
              Even Surge Systems recently made several changes to our goals. We committed
              to meeting several UN climate goals by minimizing our wastage in the office,
              and most importantly introducing the{" "}
              <strong>WasteShark</strong> — a robot surface vessel that glides through any
              water body picking up plastics, algae, biomass, and other trash from the
              surface.
            </p>

            <p className="text-base leading-relaxed text-gray-700 mb-6">
              As seen in Dubai, the US, and the River Thames of London, this device gobbles
              up trash and infectious algae, working nonstop to clean rivers and lakes.
            </p>

            <p className="text-base leading-relaxed text-gray-700 mb-6">
              This Earth Day, let us all commit to doing our part to protect our planet. By
              making small changes in our daily lives and supporting efforts to reduce
              greenhouse gas emissions, we can make a difference and help to create a
              sustainable future for generations to come.
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Together, we can save the Earth and ensure a healthy, vibrant planet for all.
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

export default Seven;
