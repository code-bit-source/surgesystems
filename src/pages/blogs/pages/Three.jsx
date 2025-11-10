// ==========================
// File: pages/three.jsx
// Blog Detail Page – “Electric Lawnmowers Emerge in India”
// ==========================
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../HomePage/components/Navbar";
import Footer from "../../HomePage/components/Footer";

const Three = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* ===================== Header Section ===================== */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-snug">
          Electric Lawnmowers Emerge in India
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          by <span className="font-semibold text-green-700">Surge System</span> | Oct 11,
          2023 | Uncategorized | 0 comments
        </p>

        {/* Banner Image */}
        <div className="w-full mb-10">
          <img
            src="/blogs/three/a4.jpg"
            alt="Electric Lawnmowers"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Second Banner */}
        {/* <div className="relative mb-12">
          <img
            src="https://images.unsplash.com/photo-1525164286256-3de91c5d4a6c"
            alt="Switch to Electric"
            className="w-full rounded-lg shadow-md object-cover"
          />
          <h2 className="absolute bottom-4 left-4 text-white font-bold text-xl md:text-2xl bg-black bg-opacity-50 px-3 py-1 rounded">
            WHY THE SWITCH TO ELECTRIC?
          </h2>
        </div> */}

        {/* ===================== Blog Content ===================== */}
        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-center mt-10 mb-6 tracking-wide">
            ELECTRIC MOWERS ARE THE NEW BUZZ
          </h2>

          <p className="text-base leading-relaxed text-gray-700 mb-6">
            In a world that’s becoming increasingly environmentally conscious, the lawn
            care industry is no exception. TORO, a renowned leader in turf & lawn
            equipment, has unveiled a groundbreaking new line of electric and hybrid
            mowers that promise to revolutionize the way we maintain our lawns. In this
            blog post, we’ll introduce you to TORO’s latest models and delve into the
            myriad benefits of using these eco-friendly alternatives.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">
            Benefits of Using TORO’s Electric and Hybrid Mowers
          </h3>

          <ol className="list-decimal pl-6 mb-10 text-gray-700 leading-relaxed space-y-4">
            <li>
              <strong>Eco-Friendly Operation:</strong> Electric and hybrid mowers
              significantly reduce carbon emissions compared to their gas-powered
              counterparts. This means lower greenhouse gas emissions and a smaller carbon
              footprint. The TORO electric and hybrid mowers are the perfect choice for
              environmentally-conscious consumers.
            </li>
            <li>
              <strong>Quiet Operation:</strong> Traditional gas mowers are notorious for
              their noisy operation. TORO’s electric mowers, however, offer a
              whisper-quiet experience, reducing noise pollution in your neighborhood and
              allowing you to mow your lawn at any time without disturbing the peace.
            </li>
            <li>
              <strong>Efficiency and Performance:</strong> The TORO electric and hybrid
              mowers are engineered for top-tier performance. The Greensmaster® eFlex™
              3360, for instance, boasts a cutting width of 7 inches, ensuring efficient
              and precise mowing on large turf areas. The TimeMaster® e-Grip offers a
              30-inch mowing deck, making it ideal for residential users who want to get
              the job done quickly. The Recycler® e-Cycler™ 21480 provides the perfect
              combination of power and ease of use.
            </li>
            <li>
              <strong>Cost Savings:</strong> Electric mowers are not only environmentally
              friendly but also economical. You’ll save money on fuel costs, oil changes,
              and spark plug replacements. Plus, with fewer moving parts, maintenance is
              simplified and less expensive.
            </li>
            <li>
              <strong>Low Maintenance:</strong> Electric mowers require minimal
              maintenance compared to gas-powered models. There’s no need for engine oil
              changes, air filters, or spark plug replacements. This not only saves you
              money but also time.
            </li>
            <li>
              <strong>Versatility:</strong> TORO’s electric and hybrid models are designed
              for flexibility, eliminating the hassle of pull cords and choke adjustments.
              Furthermore, they are battery-operated machines, so you won’t be exposed to
              harmful exhaust while mowing.
            </li>
            <li>
              <strong>Reduced Vibration:</strong> Electric mowers have less vibration than
              gas mowers, resulting in a more comfortable and less fatiguing mowing
              experience.
            </li>
            <li>
              <strong>Longevity:</strong> Electric motors are renowned for their
              durability. TORO’s electric and hybrid mowers are built to last, reducing
              the need for frequent replacements and contributing to a sustainable
              lifestyle.
            </li>
            <li>
              <strong>Government Incentives:</strong> Many regions offer incentives,
              rebates, or tax credits for the purchase of electric lawn equipment. By
              choosing TORO’s electric mowers, you can take advantage of these benefits
              and further reduce ownership costs.
            </li>
          </ol>

          {/* Product Section */}
          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            <div>
              <img
                src="/blogs/three/a1.jpg"
                alt="Super Recycler"
                className="rounded-lg shadow-md mb-4"
              />
              <p className="text-gray-700 text-sm leading-relaxed">
                Super Recycler delivers samurai sword sharpness, commercial grade features
                and best-in-class under-deck airflow with Vortex Technology achieving that
                rich, green lawn that all your neighbors envy. This machine does everything
                gas can, minus the gas can. Plus, high-beam LED headlights. Even darkness
                can’t slow it down.
              </p>
            </div>

            <div>
              <img
                src="/blogs/three/a2.jpeg"
                alt="Toro 60V Max Stripe"
                className="rounded-lg shadow-md mb-4"
              />
              <p className="text-gray-700 text-sm leading-relaxed">
               The Toro 60V Max* Stripe™ Mower is specifically designed from the ground up to deliver pro-level striping, effortless battery power, and maximum runtime. Easily create those great striping patterns typically found on golf courses and sports fields. Striping allows you to keep all the grass at the same height so all the blades get enough sun. Stripe mower is also 25% lighter than other battery mowers, making it easy to use and maneuver. Control your speed with an adjustable knob and turbo button, giving you power on demand.
              </p>
            </div>
          </div>

          <div className="mb-10">
            <img
              src="/blogs/three/a3.jpg"
              alt="Toro Stripe"
              className="rounded-lg shadow-md mb-4 mx-auto"
            />
            <p className="text-gray-700 text-sm leading-relaxed">
             TORO Stripe is up to 25% lighter than other battery-powered mowers**. Easier to maneuver, mow, and create the perfectly striped lawn. Surgically cut and recut grass into fine clippings and nutrient-rich mulching. Less work (and more lawn compliments) for you. Plus, cut up to 2/3rds of an acre on a full charge!
            </p>
          </div>

          <p className="text-base mb-10 leading-relaxed">
            TORO’s new line of electric grass-cutting machines in India, including the
            Greensmaster® eFlex™ 3360, TimeMaster® e-Grip, and Recycler® e-Cycler™ 21480,
            embodies the future of lawn care. These models provide outstanding performance,
            reduce environmental impact, and offer numerous benefits for homeowners and
            professionals alike. By investing in TORO’s electric and hybrid mowers, you’re
            not only making a wise choice for your lawn but also contributing to a greener,
            more sustainable future. So, why wait? Upgrade your lawn care routine and join
            the Indian electric revolution today!
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

export default Three;
