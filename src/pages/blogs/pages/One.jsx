// ==========================
// File: pages/one.jsx
// Blog Detail Page – “History of Golf in India”
// ==========================
import React from "react";
import Navbar from "../../HomePage/components/Navbar";
import Footer from "../../HomePage/components/Footer";
import { Link } from "react-router-dom";
// import Navbar from "../HomePage/components/Navbar";
// import Footer from "../HomePage/components/Footer";

const One = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      {/* ===================== Header Section ===================== */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          History of Golf in India
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          by <span className="font-semibold text-green-700">Surge Systems</span>{" "}
          | Nov 5, 2024 | Uncategorized | 0 Comments
        </p>

        {/* Banner Image */}
        <div className="w-full mb-10">
          <img
            src="/blogs/one/a1.jpg"
            alt="Golf in India"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* ===================== Article Section ===================== */}
        <div className="prose max-w-none">
          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-center mt-10 mb-4 tracking-wide">
            SWINGING THROUGH TIME
          </h2>
          <p className="text-base leading-relaxed text-gray-700 mb-6">
            Golf, often hailed as the “gentleman’s game,” found its roots in India during the colonial era when British officers introduced the sport to the subcontinent. The history of golf in India is a fascinating journey that weaves through time, reflecting not only the evolution of the game but also the socio-cultural shifts within the nation. The Royal Calcutta Golf Club, established in 1829, stands as a testament to India’s early tryst with golf, making it the oldest golf club outside the United Kingdom. Over the years, other iconic courses like the Delhi Golf Club and the Bombay Presidency Golf Club have become integral chapters in this story, hosting prestigious tournaments and witnessing the rise of Indian golfing legends.
          </p>

          <img
            src="/blogs/one/a2.jpg"
            alt="Golf Course"
            className="rounded-lg shadow-md mb-10 mx-auto"
          />

          {/* Section 2 */}
          <h3 className="text-xl font-semibold mb-3">Beginnings</h3>
          <p className="text-base leading-relaxed mb-6">
           As the nation gained independence in 1947, the sport continued to flourish, marking an era of Indian golfers making their mark on the international stage. The emergence of players like Jeev Milkha Singh and Arjun Atwal paved the way for a new generation of golf enthusiasts. Today, India boasts a vibrant golfing community, with world-class courses scattered across the country.
          </p>

          <img
            src="/blogs/one/a3.jpg"
            alt="Golf Field"
            className="rounded-lg shadow-md mb-10 mx-auto"
          />

          {/* Section 3 */}
          <h3 className="text-xl font-semibold mb-3">Modern Day Courses</h3>
          <p className="text-base leading-relaxed mb-6">
           Courses like the DLF Golf and Country Club in Gurugram and the Karnataka Golf Association in Bangalore have become pivotal in nurturing and showcasing the talent of young golfers. The state of Indian golf today is a testament to the enduring legacy of its history—a fusion of tradition and modernity.
          </p>

          <img
            src="/blogs/one/a4.jpg"
            alt="Modern Golf Course"
            className="rounded-lg shadow-md mb-10 mx-auto"
          />

          {/* Section 4 */}
          <h3 className="text-xl font-semibold mb-3">
            Present and Future of Indian Golfing
          </h3>
          <p className="text-base leading-relaxed mb-6">
            The golfing landscape in India has evolved significantly, mirroring the economic and
            cultural transformations of the nation. With the professionalization of equipment and
            the increased accessibility of the sport, India has become a breeding ground for
            professional talent. The Indian Open has gained international recognition, attracting
            top-tier players and sponsors alike.
          </p>

          <img
            src="/blogs/one/a5.jpg"
            alt="Golf Sunset"
            className="rounded-lg shadow-md mb-10 mx-auto"
          />

          {/* Section 5 */}
          <h3 className="text-xl font-semibold mb-3">What can we work towards?</h3>
          <p className="text-base leading-relaxed mb-10">
            AsAs the country embraces golf as more than just a sport but a lifestyle, the narrative of Indian golf continues to unfold, weaving the past and present into a promising future on the green. The journey from the Royal Calcutta Golf Club to the contemporary gems scattered across the nation symbolizes the enduring spirit of the game, resonating with the evolving identity of India itself.



          </p>
        </div>

        {/* ===================== Bottom Cards Section ===================== */}
       

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 border-t pt-10">
  {[
    {
      title: "GOLF / TURF EQUIPMENT",
      desc: "Explore our advanced golf maintenance solutions.",
      btn: "OPEN CATALOGUE",
      link: "//equipments/1", // 👈 Add your route here
    },
    {
      title: "LANDSCAPE IRRIGATION",
      desc: "Complete landscape irrigation systems & design.",
      btn: "OUR SERVICES",
      link: "/irrigation", // 👈 Add your route here
    },
    {
      title: "GOLF ACCESSORIES",
      desc: "Top-quality accessories for professionals & beginners.",
      btn: "OPEN CATALOGUE",
      link: "/GolfAccesories/2", // 👈 Add your route here
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

      {/* 👇 Wrapped button inside Link */}
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

export default One;
