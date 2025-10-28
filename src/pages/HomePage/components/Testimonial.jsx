// src/components/Testimonial.jsx
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { title: "Projects", value: "350+" },
  { title: "Years of Work", value: "10+" },
  { title: "Client Satisfaction", value: "98%" },
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

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const scrollToCurrent = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: current * sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  React.useEffect(() => {
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
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // GSAP animation for testimonial
    testiRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-900">
      {/* Stats Section */}
      <h2 className="text-7xl font-[font1] font-bold text-center mb-8">Our Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-center">
        {statsData.map((stat, index) => (
          <div
            key={index}
            ref={(el) => (statsRef.current[index] = el)}
            className="bg-gray-100 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow transform hover:scale-105"
          >
            <h2 className="text-4xl font-bold">{stat.value}</h2>
            <p className="mt-2 text-lg">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Testimonial Section */}
    {/* <h2 className="text-7xl font-[font1] font-bold text-center mb-8">Testimonials</h2> */}
      <div className="relative">
        {/* <div
          ref={sliderRef}
          className="flex overflow-x-hidden scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {testimonialsData.map((testi, index) => (
            <div
              key={index}
              ref={(el) => (testiRef.current[index] = el)}
              className="flex-none w-full bg-gray-100 rounded-xl p-8 shadow-md flex flex-col items-center text-center mx-2 scroll-mx-0"
              style={{ scrollSnapAlign: "start", transition: "transform 0.5s ease" }}
            >
              <img
                src={testi.image}
                alt={testi.name}
                className="w-24 h-24 rounded-full mb-4 border-4 border-gray-800"
              />
              <p className="text-gray-900 italic mb-4">"{testi.message}"</p>
              <h3 className="font-semibold text-lg">{testi.name}</h3>
              <p className="text-gray-600 text-sm">{testi.role}</p>
            </div>
          ))}
        </div> */}

        {/* Navigation Buttons */}
        {/* <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow hover:bg-gray-700 transition"
        >
          &#8592;
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow hover:bg-gray-700 transition"
        >
          &#8594;
        </button> */}
      </div>
    </div>
  );
};

export default Testimonial;
