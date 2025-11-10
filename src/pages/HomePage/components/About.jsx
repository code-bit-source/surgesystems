import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const followerRef = useRef(null);
  const valuesWrapperRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });

  // Scroll-triggered animation for main text & image
  useEffect(() => {
    const section = sectionRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      imageRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
    tl.fromTo(
      textRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.5"
    );
  }, []);

  // Scroll-triggered animation for value cards (same feel as above)
  useEffect(() => {
    const cards = valuesWrapperRef.current?.querySelectorAll(".value-card");
    if (!cards || cards.length === 0) return;

    gsap.fromTo(
      cards,
      { y: 40, opacity: 0, scale: 0.98 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: valuesWrapperRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  // Mouse-follow effect
  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    mouse.current = {
      x: e.clientX - rect.left - 25,
      y: e.clientY - rect.top - 25,
    };
  };

  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    const pos = { x: 0, y: 0 };
    const qSet = gsap.quickSetter(follower, "css");

    let rafId = null;
    const tick = () => {
      pos.x += (mouse.current.x - pos.x) * 0.15;
      pos.y += (mouse.current.y - pos.y) * 0.15;
      qSet({
        transform: `translate(${pos.x}px, ${pos.y}px) scale(${hovered ? 1 : 0})`,
        opacity: hovered ? 1 : 0,
      });
      rafId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [hovered]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full px-6 py-24 bg-white z-0 text-black overflow-hidden"
    >
      {/* Mouse-following div */}
      <div
        ref={followerRef}
        className="absolute w-22 h-22 bg-black md:flex hidden  rounded-full items-center justify-center text-white shadow-lg pointer-events-none z-50 origin-center"
        aria-hidden
      >
        <h1 className="text-sm  font-semibold">About</h1>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        {/* Image Section - Left */}
        <div
          ref={imageRef}
          className="md:w-1/2 overflow-hidden rounded-2xl shadow-xl bg-gray-50"
        >
          <img
            src="about/2.jpg"
            alt="About Us"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Section - Right */}
        <div ref={textRef} className="md:w-1/2 space-y-6">
          <h2 className="text-5xl font-[font1] md:text-8xl font-extrabold tracking-tight">
            About Us
          </h2>
          <p className="text-gray-700 font-[font5] text-lg md:text-xl leading-relaxed">
            We are a passionate team dedicated to providing innovative solutions
            in irrigation, agriculture, and technology. Our mission is to enhance
            efficiency and sustainability for our clients with cutting-edge products.
          </p>
          <a href="/about-us" className="bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-all">
            Learn More
          </a>
        </div>
      </div>

      {/* Values Section - polished, professional cards */}
      <div
  ref={valuesWrapperRef}
  className="max-w-7xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 relative z-10"
  aria-label="Core values"
>
  {[
    {
      title: "Mission",
      desc: "Consistently pursue a high level of professionalism.",
      bottomTitle: "What we focus on",
      bottomText: "Professionalism • Quality",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      bg: "from-slate-900 to-black",
    },
    {
      title: "Vision",
      desc: "Attain & Maintain Leadership in the Industry.",
      bottomTitle: "Where we aim",
      bottomText: "Leadership • Growth",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      bg: "from-black to-gray-800",
    },
    {
      title: "Commitment",
      desc: "Competence in the service we render and the products we supply.",
      bottomTitle: "How we deliver",
      bottomText: "Competence • Reliability",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      ),
      bg: "from-black to-gray-800",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="value-card group bg-white border border-transparent rounded-2xl p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(17,24,39,0.06)] hover:shadow-[0_20px_50px_rgba(17,24,39,0.12)] hover:-translate-y-1 transition-all duration-300"
    >
      {/* Top Section */}
      <div className="flex items-center gap-5">
        <div
          className={`flex-none w-16 h-16 rounded-full bg-gradient-to-br ${item.bg} text-white grid place-items-center shadow-md shrink-0`}
        >
          {item.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-900 leading-tight">{item.title}</h3>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
        <div className="text-xs text-slate-400 uppercase tracking-wide">{item.bottomTitle}</div>
        <div className="text-xs text-slate-500 text-right">{item.bottomText}</div>
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default AboutSection;
