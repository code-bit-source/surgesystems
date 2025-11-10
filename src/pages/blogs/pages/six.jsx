// ==========================
// File: pages/six.jsx
// Blog Detail Page – “Thatch: What is it and why has it ruined my lawn?”
// ==========================
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../HomePage/components/Navbar";
import Footer from "../../HomePage/components/Footer";

const Six = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* ===================== Header Section ===================== */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-snug">
          Thatch: What is it and why has it ruined my lawn?
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          by <span className="font-semibold text-green-700">Surge System</span> | Apr 29,
          2023 | Uncategorized | 0 comments
        </p>

        {/* Banner Image */}
        <div className="w-full mb-10">
          <img
            src="/blogs/six/a1.png"
            alt="Healthy vs Unhealthy Grass"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* ===================== Blog Content ===================== */}
        <h2 className="text-2xl font-bold text-center mt-8 mb-6 tracking-wide text-green-700">
          WHY DOES THATCH EVEN MATTER?
        </h2>

        <div className="prose max-w-none">
          <p className="text-base leading-relaxed text-gray-700 mb-6">
            Thatch is a layer of dead grass and organic matter that accumulates on the
            surface of your lawn over time. While a small amount of thatch can be
            beneficial, excessive buildup can lead to a number of problems.
          </p>

          <p className="text-base leading-relaxed text-gray-700 mb-6">
            Firstly, thatch prevents water, air, and nutrients from penetrating the soil,
            which can lead to stunted growth, yellowing grass, and even bald patches.
            Secondly, thatch creates a perfect breeding ground for pests and diseases,
            which can quickly spread to other parts of your lawn.
          </p>

          <p className="text-base leading-relaxed text-gray-700 mb-8">
            Thankfully, there are solutions available to combat thatch buildup. One option
            is to manually remove it with a rake, but this can be time-consuming and
            labor-intensive, especially for larger lawns and sports fields/golf courses.
            Another solution is to use a dethatching machine, which uses blades or tines to
            pull up the thatch.
          </p>

          <p className="text-base leading-relaxed text-gray-700 mb-8">
            However, the best solution for removing excessive thatch is to use a top
            cutter, such as the <strong>KORO® FIELDTOPMAKER®</strong>. Topcutters work by
            removing the thatch layer without damaging the healthy grass shoots underneath.
            This not only improves the appearance of your lawn but also promotes healthier
            growth and reduces the risk of pests and diseases.
          </p>
        </div>

        {/* Middle Image */}
        <div className="w-full mb-10">
          <img
            src="/blogs/six/a2.jpg"
            alt="Koro Fieldtopmaker Machine"
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>

        {/* ===================== Detailed Description ===================== */}
        <div className="prose max-w-none">
          <p className="text-base leading-relaxed mb-6">
            The <strong>KORO® FIELDTOPMAKER®</strong> is a topcutter that has been making
            waves in the world of sports turf maintenance. This innovative machine has been
            a game-changer in producing healthier turf through greatly improved surface
            hygiene. With remastered 1.2m, 1.6m, 2.0m, and 2.5m models, it has become even
            more user-friendly for golf courses, especially when it comes to renovation and
            reinvigoration.
          </p>

          <p className="text-base leading-relaxed mb-6">
            One of the key features of the new <strong>KORO® FIELDTOPMAKER®</strong> range
            is the weight and balance analysis that has been carried out. This has resulted
            in a lighter, steadier machine that is more comfortable to use. Solid locking
            pins offer greater consistency, and the overall performance is improved due to
            the redesigned patented <strong>UNIVERSE® rotor</strong> and angled cross
            conveyor.
          </p>

          <p className="text-base leading-relaxed mb-6">
            The new angled cross conveyor ensures material is moved evenly with perfect
            belt tracking, while the weight of the machine has been reduced using a
            removable 100kg weight. This new design means a smaller tractor can be used to
            run the <strong>KORO® FIELDTOPMAKER®</strong>, making it easier to lift and
            operate.
          </p>

          <p className="text-base leading-relaxed mb-6">
            Maintenance has also been enhanced to ensure working reliability. The modular
            setup allows the machine to run without belts, and the strong state of the air
            driveline is maintenance-free. At the same time, the patented{" "}
            <strong>UNIVERSE® rotor</strong> ensures improved clean-up and greater surface
            hygiene.
          </p>

          <p className="text-base leading-relaxed mb-10">
            Topcutters are essential for maintaining healthy, even surfaces on golf
            courses. The <strong>KORO® FIELDTOPMAKER®</strong> range offers several
            advantages over other topcutters on the market. The improved weight balance,
            solid locking pins, and re-engineered rotor all contribute to a superior user
            experience. Golf course managers can be assured that their turf will remain
            healthy and pristine for years to come.
          </p>
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

export default Six;
