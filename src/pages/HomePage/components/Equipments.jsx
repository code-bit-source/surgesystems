import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Equipments = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    const boxes = boxesRef.current;

    // ✅ GSAP entry animation
    gsap.fromTo(
      boxes,
      { opacity: 0, y: 80, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  // ✅ Mouse wheel horizontal scroll
  useEffect(() => {
    const slider = containerRef.current;
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        slider.scrollLeft += e.deltaY * 1.2;
      }
    };
    slider.addEventListener("wheel", handleWheel, { passive: false });
    return () => slider.removeEventListener("wheel", handleWheel);
  }, []);

  // ✅ Hand drag scroll
  useEffect(() => {
    const slider = containerRef.current;
    let isDown = false;
    let startX, scrollLeft;

    const startDrag = (e) => {
      isDown = true;
      slider.classList.add("cursor-grabbing");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const stopDrag = () => {
      isDown = false;
      slider.classList.remove("cursor-grabbing");
    };

    const moveDrag = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", startDrag);
    slider.addEventListener("mouseleave", stopDrag);
    slider.addEventListener("mouseup", stopDrag);
    slider.addEventListener("mousemove", moveDrag);

    return () => {
      slider.removeEventListener("mousedown", startDrag);
      slider.removeEventListener("mouseleave", stopDrag);
      slider.removeEventListener("mouseup", stopDrag);
      slider.removeEventListener("mousemove", moveDrag);
    };
  }, []);

  const scroll = (direction) => {
    const slider = containerRef.current;
    const scrollAmount = 400;
    slider.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const items = [
    { id: 1, name: "Golf Course", image: "https://plus.unsplash.com/premium_photo-1670002537821-6a4fa25596f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169", path: "/equipments/1" },
    { id: 2, name: "Cricket Ground", image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1605", path: "/equipments/2" },
    { id: 3, name: "Football Ground", image: "https://plus.unsplash.com/premium_photo-1684713510655-e6e31536168d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170", path: "/equipments/3" },
    { id: 4, name: "Lawn Mowers", image: "https://plus.unsplash.com/premium_photo-1682098326871-95eac6cf4f25?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170", path: "/equipments/4" },
    { id: 5, name: "Golf Carts", image: "https://images.unsplash.com/photo-1599601438065-af12a89792e3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1030", path: "/equipments/5" },
    { id: 6, name: "Ventrac Equipment", image: "ventrac.jpg", path: "/equipments/6" },
    { id: 7, name: "MAREDO EQUIPMENT", image: "Maredo.png", path: "/equipments/7" },
    { id: 8, name: "SPECIALTY EQUIPMENT", image: "https://images.unsplash.com/photo-1657200142765-7230b71edd79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1631", path: "/equipments/8" },
    { id: 9, name: "MATERIAL HANDLER", image: "https://picsum.photos/500/300?random=9", path: "/equipments/9" },
    { id: 10, name: "GRINDING EQUIPMENT", image: "https://images.unsplash.com/photo-1561077097-718181ad9e6e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169", path: "/equipments/10" },
    { id: 11, name: "TURF SPRAYERS", image: "https://images.unsplash.com/photo-1592987313433-b1df1c9cbd90?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1167", path: "/equipments/11" },
    { id: 12, name: "TURF RENOVATION EQUIPMENT", image: "https://images.unsplash.com/photo-1620388186454-a4a3204a65a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1176", path: "/equipments/12" },
    { id: 12, name: "Manual Fertilizer spreader & Seeder", image: "https://plus.unsplash.com/premium_photo-1661898576447-3c1d23fb1f3f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2110", path: "/equipments/13" },
    { id: 12, name: "Water Cleaning EQUIPMENT", image: "https://plus.unsplash.com/premium_photo-1661962514374-442d58a10c91?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1146", path: "/equipments/14" },
    { id: 12, name: "Training EQUIPMENT", image: "https://images.unsplash.com/photo-1505413461823-c5628c330608?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170", path: "/equipments/15" },
    { id: 12, name: "Water Removal EQUIPMENT", image: "https://images.unsplash.com/photo-1592807645729-041e697261c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170", path: "/equipments/16" },
    { id: 12, name: "Tools", image: "https://plus.unsplash.com/premium_photo-1679758416197-a828abb2d2d3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171", path: "/equipments/17" },
    { id: 12, name: "Digital Solutions", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172", path: "/equipments/18" },
  ];

  return (
    <section ref={sectionRef} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-[font1] font-bold text-center mb-14 text-gray-800"
        >
          Equipment
        </motion.h2>

        {/* Navigation Buttons (side aligned) */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg hover:bg-gray-100 text-gray-700 rounded-full p-3 transition"
        >
          <ChevronLeft size={30} />
        </button>

        <motion.div
          ref={containerRef}
          className="
            flex gap-8 overflow-x-auto scroll-smooth select-none 
            cursor-grab pb-6 
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
          "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {items.map((item, index) => (
  <a
    key={`${item.id}-${index}`}
    href={item.path}
    className="flex-shrink-0 min-w-[320px] md:min-w-[450px] h-[220px] md:h-[400px]"
  >
    <motion.div
      ref={(el) => (boxesRef.current[index] = el)}
      whileHover={{
        scale: 1.08,
        rotate: 0.5,
        boxShadow: "0px 12px 25px rgba(0,0,0,0.25)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="
        w-full h-full rounded-2xl relative overflow-hidden
        bg-gray-200 shadow-md hover:shadow-2xl
        transition-all duration-500 ease-out
        flex items-center justify-center
      "
      style={{
        backgroundImage: `url(${item.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="text-white text-2xl md:text-3xl uppercase font-[font5] font-semibold tracking-wide drop-shadow-md text-center">
        {item.name}
      </p>
    </motion.div>
  </a>
))}

        </motion.div>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg hover:bg-gray-100 text-gray-700 rounded-full p-3 transition"
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </section>
  );
};

export default Equipments;
