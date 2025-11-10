import React from "react";
import { Link } from "react-router-dom"; // React Router navigation

const EquipSub = () => {
  const cards = [
    {
      title: "EQUIPMENT",
      video: "GolfCourse.mp4",
      link: "/Equipments",
    },
    {
      title: "IRRIGATION SOLUTIONS",
      video: "irrigation.mp4",
      link: "/irrigation",
    },
    {
      title: "GOLF CARTS",
      video: "golfcart.mp4",
      link: "/equipments/5",
    },
  ];

  return (
    <div className="bg-white text-white w-screen py-10">
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-7xl font-bold mb-10 text-black font-[font1]">
        Categories
      </h2>

      {/* 3-Card Row */}
      <div className="flex w-screen flex-col md:flex-row justify-center items-center gap-5 px-6">
        {cards.map((card, index) => (
          <Link
            key={index}
            to={card.link}
            className="relative w-full sm:w-[80%] md:w-[35%] 
                       aspect-square md:aspect-[4/4] h-[400px] 
                       rounded-2xl overflow-hidden shadow-xl group transition-all duration-300 hover:scale-[1.03]"
          >
            {/* Background Video */}
            <video
              src={card.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            ></video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>

            {/* Center Text (Perfectly Centered) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-snug tracking-wider text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                {card.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EquipSub;
