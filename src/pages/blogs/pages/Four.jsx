// ==========================
// File: pages/four.jsx
// Blog Detail Page – “Aeration: The Breath of Life for Pristine Greens”
// ==========================
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../HomePage/components/Navbar";
import Footer from "../../HomePage/components/Footer";

const Four = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* ===================== Header Section ===================== */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-snug">
          Aeration: The Breath of Life for Pristine Greens
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          by <span className="font-semibold text-green-700">Surge System</span> | Sep 15,
          2023 | Uncategorized | 0 comments
        </p>

        {/* Banner Image */}
        <div className="w-full mb-10">
          <img
            src="/blogs/four/a1.webp"
            alt="Aeration Greens"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* ===================== Blog Content ===================== */}
        <h2 className="text-2xl font-bold text-center mt-8 mb-6 tracking-wide text-green-700">
          THE GREENS LOOK NICE. WHY AERATE?
        </h2>

        <div className="prose max-w-none">
          <p className="text-base leading-relaxed text-gray-700 mb-6">
            When you step onto a golf course, your focus is likely on the fairways and the
            putting green. After all, that’s where you spend the majority of your time,
            right? But what about the unsung hero beneath your feet—the turfgrass on the
            greens? It’s this very surface that can make or break your golf game, and its
            health is maintained through a practice called aeration.
          </p>

          <p className="text-base leading-relaxed text-gray-700 mb-8">
            The article “Why Golf Courses Aerate to Keep Their Greens in Peak Condition” on
            Golf.com unveils the intricate dance between golf courses and aeration, helping
            us understand why it’s a vital aspect of golf course maintenance.
          </p>

          {/* Section 1 */}
          <h3 className="text-xl font-semibold mb-3">1. The Art of Aeration</h3>
          <p className="text-base leading-relaxed mb-6">
            Picture your golf ball rolling smoothly toward the hole. The green’s surface
            must be impeccable for this to happen. However, maintaining such perfection is
            no easy feat. Greens undergo significant stress from constant foot traffic,
            changing weather conditions, and regular maintenance routines. This stress
            compacts the soil beneath the grass, leading to a host of issues like poor
            drainage and reduced air circulation.
          </p>

          <p className="text-base leading-relaxed mb-6">
            This is where aeration steps in. Aeration is the process of perforating the
            green’s surface with small holes to alleviate soil compaction. This seemingly
            aggressive act is actually a breath of fresh air for the grass beneath.
          </p>

          {/* Section 2 */}
          <h3 className="text-xl font-semibold mb-3">
            2. Oxygen, Water, and Nutrients
          </h3>
          <p className="text-base leading-relaxed mb-6">
            Every living thing needs oxygen, water, and nutrients to thrive, and turfgrass
            is no exception. Aeration provides a direct channel for these essential
            elements to penetrate the soil and reach the grass roots. Without aeration, the
            grass becomes starved of oxygen, and its roots struggle to absorb water and
            nutrients efficiently.
          </p>

          <p className="text-base leading-relaxed mb-6">
            Think of aeration as the greens’ version of deep breathing exercises. By
            allowing oxygen to reach the roots, the grass becomes more resilient, grows
            deeper, and develops a stronger root system. This translates to healthier, more
            vibrant greens that can withstand the rigors of golfing.
          </p>

          {/* Section 3 */}
          <h3 className="text-xl font-semibold mb-3">3. Thwarting Thatch</h3>
          <p className="text-base leading-relaxed mb-6">
            Thatch—a dense layer of dead grass, roots, and other organic matter—can
            accumulate on the greens over time. While a little thatch isn’t necessarily
            harmful, excessive thatch can become a breeding ground for pests and diseases,
            not to mention impede water infiltration. Aeration helps break down thatch,
            preventing it from choking the grass and hampering its growth.
          </p>

          {/* Section 4 */}
          <h3 className="text-xl font-semibold mb-3">4. Timing Is Everything</h3>
          <p className="text-base leading-relaxed mb-6">
            Aeration isn’t a one-size-fits-all operation. Golf course superintendents
            carefully plan when to aerate based on factors such as grass type, climate, and
            golf traffic. Typically, spring and fall are the prime aeration seasons,
            allowing the greens to recover before the peak summer and winter months.
          </p>

          {/* Section 5 */}
          <h3 className="text-xl font-semibold mb-3">5. Golfers’ Role</h3>
          <p className="text-base leading-relaxed mb-6">
            While a recently aerated green may not provide the smoothest putting surface,
            it’s a sign that the course is committed to its long-term health. Understanding
            and respecting the aeration process can help us be better stewards of the golf
            course. It’s a small sacrifice for the greater good of preserving these
            breathtaking green landscapes that make our game so enjoyable.
          </p>

          {/* Conclusion */}
          <h3 className="text-xl font-semibold mb-3">In Conclusion</h3>
          <p className="text-base leading-relaxed mb-6">
            The next time you step onto a golf course, take a moment to appreciate the
            meticulous care that goes into maintaining its greens. Aeration might seem like
            a disruptive process, but it’s the lifeblood of golf course health. It ensures
            that those putting surfaces remain pristine, consistent, and challenging for
            all of us golf enthusiasts.
          </p>

          <p className="text-base leading-relaxed mb-10">
            So, remember, the next time your putt veers slightly off-course due to a
            recently aerated green, it’s a small price to pay for the lush, healthy greens
            that make the game of golf an enduring passion for so many. Aeration is the
            silent hero that keeps our greens in peak condition, and it deserves our
            appreciation and understanding.
          </p>
        </div>

        {/* Bottom Image */}
        <div className="w-full mb-12">
          <img
            src="/blogs/four/a2.webp"
            alt="Aeration Machine"
            className="w-full rounded-lg shadow-md object-cover"
          />
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

export default Four;
