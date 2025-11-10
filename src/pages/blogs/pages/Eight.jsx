// ==========================
// File: pages/eight.jsx
// Blog Detail Page – “Lawn Equipment – Daily Maintenance Checklist”
// ==========================
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../HomePage/components/Navbar";
import Footer from "../../HomePage/components/Footer";

const Eight = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* ===================== Header Section ===================== */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-snug">
          Lawn Equipment – Daily Maintenance Checklist
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          by <span className="font-semibold text-green-700">Surge System</span> | Apr 18,
          2023 | Uncategorized | 0 comments
        </p>

        {/* Banner Image */}
<div className="flex justify-center mb-10">
  <img
    src="/blogs/a1.jpg"
    alt="Lawn Equipment"
    className="w-[400px] rounded-lg shadow-lg object-cover"
  />
</div>

            

      

        {/* ===================== Blog Content ===================== */}
        <h2 className="text-2xl font-bold text-center mt-8 mb-6 tracking-wide text-green-700">
          YOU NEED THIS 16 POINT CHECKLIST
        </h2>

        <p className="text-base leading-relaxed text-gray-700 mb-8">
          As a turf equipment owner or operator, it is important to have a daily
          maintenance checklist to ensure your machine is in top shape every time you use
          it. By doing so, you will not only extend the life of your equipment but also
          ensure the safety of the operator and those around them. Here are some essential
          items that should be on your daily maintenance checklist for turf equipment.
        </p>

        <h3 className="text-xl font-semibold mb-4">
          Daily Maintenance Check List – Turf Equipment
        </h3>

        <ul className="list-decimal pl-6 mb-10 text-gray-700 leading-relaxed space-y-3">
          <li>
            Maintain proper <strong>Tire pressure</strong> in all wheels. Low tire pressure
            can lead to uneven cuts and damage the turf.
          </li>
          <li>
            Check <strong>Hydraulic Hose pipes</strong> for cracks/leaks. Replace damaged
            hoses to prevent major machine failure.
          </li>
          <li>
            Always maintain a stock of <strong>Essential genuine spare parts</strong> to
            save time and avoid delays during breakdowns.
          </li>
          <li>
            Check condition of <strong>Belts</strong> and ensure they are properly tight.
            Loose or damaged belts can lead to slippage and uneven cutting.
          </li>
          <li>
            Allow the <strong>Engine</strong> to cool down before washing to prevent cracks
            in the engine block.
          </li>
          <li>
            Always park the machine in a <strong>Shaded area</strong> to prevent UV damage
            to paint and plastic.
          </li>
          <li>
            Refill the <strong>Fuel Tank</strong> after daily use. This reduces condensation
            and helps maintain fuel quality.
          </li>
          <li>
            Ensure proper <strong>Greasing</strong> in all fittings to prevent premature
            wear.
          </li>
          <li>
            Carry out scheduled <strong>Replacement of filters</strong>, engine oil, and
            spark plugs on time.
          </li>
          <li>
            <strong>Proper Washing</strong> after each use to prevent buildup of dirt,
            grass, and oil.
          </li>
          <li>
            Always maintain the <strong>Sharpness</strong> of the reel and bedknife for a
            clean and even cut.
          </li>
          <li>
            Ensure all <strong>Safety switches</strong> are functioning properly before
            operation.
          </li>
          <li>
            Check <strong>Coolant level</strong> daily in the morning to prevent
            overheating.
          </li>
          <li>
            Clean the <strong>Air filter</strong> daily for efficient air intake and better
            performance.
          </li>
          <li>
            Ensure proper <strong>Reel-to-bedknife contact</strong> — improper contact can
            cause uneven cuts and turf damage.
          </li>
          <li>
            Check for correct <strong>Engine Oil Level</strong>. Too little or too much oil
            can cause serious damage.
          </li>
        </ul>

        {/* ===================== YouTube Video Section ===================== */}
        <div className="my-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Embedded Video */}
            <div className="w-full md:w-2/3">
              <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                {/* 👇 Replace link below with your actual YouTube embed link */}
             <iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/Zoff6_kbNhc"   // ✅ Correct Embed Link
  title="Engine Maintenance Tips"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

              </div>
            </div>

            {/* Side Text */}
            <div className="w-full md:w-1/3">
              <p className="text-gray-700 leading-relaxed">
                Simply by following these tips, you will see a massive difference in the
                performance of your machine.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                If you have any further questions or problems with your equipment, contact
                the Surge Crew for assistance.
              </p>
            </div>
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

export default Eight;
