// src/components/Testimonial.jsx
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { title: "Irrigation Projects Executed", value: "50+" },
  { title: "Years of Experience", value: "30+" },
  { title: "Equipment Supplied", value: "1500+" },
  { title: "Market Coverage", value: "75%" },
];

const testimonialsData = [
  {
    name: "Rahul Sharma",
    role: "CEO, TechCorp",
    message:
      "Amazing service! The team was professional and delivered beyond expectations.",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Anjali Verma",
    role: "Designer, Creatives Inc.",
    message: "I love working with them. Highly recommended!",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Sahil Gupta",
    role: "Developer, WebWorks",
    message: "Their solution helped our business grow exponentially.",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const statsRef = useRef([]);
  const testiRef = useRef([]);
   const valuesWrapperRef = useRef(null);

  const nextTestimonial = () => {
    setCurrent((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const scrollToCurrent = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: current * sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToCurrent();
  }, [current]);

  useEffect(() => {
    // GSAP animation for stats
    statsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 text-gray-900">
      {/* Stats Section */}
      <h2 className="text-5xl sm:text-6xl font-[font1] font-bold text-center mb-10">
        Our Statistics
      </h2>

      {/* Stats in One Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-20">
        {statsData.map((stat, index) => (
          <div
            key={index}
            ref={(el) => (statsRef.current[index] = el)}
            className="bg-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all transform hover:scale-105"
          >
            <h2 className="text-4xl font-bold text-gray-900">{stat.value}</h2>
            <p className="mt-2 text-lg text-gray-700">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Testimonials Section (optional uncomment) */}
      {/* <h2 className="text-6xl font-[font1] font-bold text-center mb-8">
        Testimonials
      </h2> */}


      <div
        ref={valuesWrapperRef}
        className="max-w-7xl mb-20 mx-auto mt-30 grid grid-cols-1 md:grid-cols-3 gap-6 z-10 relative"
        aria-label="Core values"
      >
        
        
      </div>
    </div>
  );
};

export default Testimonial;
