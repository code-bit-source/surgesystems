import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../HomePage/components/Navbar";
import Footer from "../HomePage/components/Footer";

const Blog = () => {
  const blogs = [
    {
      title: "HISTORY OF GOLF IN INDIA",
      image: "/blogs/1.jpg",
      link: "/blog/history-of-golf-in-india",
    },
    {
      title: "WHAT IS THE BEST LAWNMOWER I SHOULD USE FOR MY FAIRWAYS?",
      image: "/blogs/2.jpg",
      link: "/blog/best-lawnmower-for-fairways",
    },
    {
      title: "ELECTRIC LAWNMOWERS ARRIVES IN INDIA",
      image: "/blogs/3.jpg",
      link: "/blog/electric-lawnmowers-india",
    },
    {
      title: "AERATION: THE BREATH OF LIFE FOR PRISTINE GREENS",
      image: "/blogs/4.webp",
      link: "/blog/aeration-for-greens",
    },
    {
      title: "MUST-HAVE GOLF ACCESSORIES FOR A WORLD-CLASS GOLF COURSE",
      image: "/blogs/5.webp",
      link: "/blog/must-have-golf-accessories",
    },
    {
      title: "THATCH: WHAT IS IT AND WHY MUST I RID MY LAWN?",
      image: "/blogs/6.png",
      link: "/blog/what-is-thatch",
    },
    {
      title: "EARTH DAY 2022, HOW CAN YOU CONTRIBUTE?",
      image: "/blogs/7.webp",
      link: "/blog/earth-day-2022",
    },
    {
      title: "LAWN EQUIPMENT – DAILY MAINTENANCE CHECKLIST",
      image: "/blogs/8.jpg",
      link: "/blog/lawn-equipment-checklist",
    },
    {
      title: "LAWNMOWER FUNDAMENTALS",
      image: "/blogs/9.jpg",
      link: "/blog/lawnmower-fundamentals",
    },
    {
      title: "SPRINKLER SYSTEM FUNDAMENTALS",
      image: "/blogs/10.webp",
      link: "/blog/sprinkler-system-fundamentals",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* ===== Navbar ===== */}
      <Navbar />

      {/* ===== Banner Section ===== */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src="https://plus.unsplash.com/premium_photo-1680374185017-1b3d2ccc1e0c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
          alt="Blog Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-[font1] font-bold text-white uppercase">
           Surge Golf & Lawn
          </h1>
        </div>
      </div>

      {/* ===== Blog Cards Section ===== */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Link
              to={blog.link}
              key={index}
              className="group bg-white/5 hover:bg-white/10 rounded-xl overflow-hidden shadow-lg transition-all duration-300 border border-gray-800"
            >
              <div className="w-full h-52 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-base md:text-lg font-semibold text-white leading-snug group-hover:text-gray-300 transition-colors duration-300">
                  {blog.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
};

export default Blog;
