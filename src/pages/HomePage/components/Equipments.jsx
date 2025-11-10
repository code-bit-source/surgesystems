import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { div } from "motion/react-client";
import Navbar from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

const Equipments = () => {
  const sectionRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    const boxes = boxesRef.current;
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

    const items = [
    { id: 1, name: "Golf Course", image: "https://plus.unsplash.com/premium_photo-1670002537821-6a4fa25596f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169", path: "/equipments/1" },
    { id: 2, name: "Cricket Ground", image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1605", path: "/equipments/2" },
    { id: 3, name: "Football Ground", image: "https://plus.unsplash.com/premium_photo-1684713510655-e6e31536168d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170", path: "/equipments/3" },
    { id: 4, name: "Lawn Mowers", image: "https://plus.unsplash.com/premium_photo-1682098326871-95eac6cf4f25?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170", path: "/equipments/4" },
    { id: 5, name: "Golf Carts", image: "https://tlgolfcarts.com/wp-content/uploads/2025/07/tonino-lamborghini-shuttle-cart-001-1536x1027.webp", path: "/equipments/5" },
    { id: 6, name: "Ventrac Equipment", image: "ventrac.jpg", path: "/equipments/6" },
    { id: 7, name: "MAREDO EQUIPMENT", image: "Maredo.png", path: "/equipments/7" },
    { id: 8, name: "SPECIALTY EQUIPMENT", image: "/speciality.jpg", path: "/equipments/8" },
    { id: 9, name: "MATERIAL HANDLER", image: "/subequipments/Material.jpg ", path: "/equipments/9" },
    { id: 10, name: "GRINDING EQUIPMENT", image: "/subequipments/reelGrinder/bedknife.png", path: "/equipments/10" },
    { id: 11, name: "TURF SPRAYERS", image: "/turf.jpg", path: "/equipments/11" },
    { id: 12, name: "TURF RENOVATION EQUIPMENT", image: "turfReno.webp", path: "/equipments/12" },
    { id: 12, name: "Manual Fertilizer spreader & Seeder", image: " /subequipments/manualFertilizer/Main.jpg", path: "/equipments/13" },
    { id: 12, name: "Water Cleaning EQUIPMENT", image: "/waterclean.jpg", path: "/equipments/14" },
    { id: 12, name: "Training EQUIPMENT", image: "/traning.jpg", path: "/equipments/15" },
    { id: 12, name: "Water Removal EQUIPMENT", image: "supersoper.jpg", path: "/equipments/16" },
    { id: 12, name: "Tools", image: "https://campeyturfcare.com/wp-content/uploads/2017/10/Penetrometer_1-1024x686.jpg", path: "/equipments/17" },
    { id: 12, name: "Digital Solutions", image: "/subequipments/digital.jpeg", path: "/equipments/18" },
  ];

  return (
    <div>

    <Navbar />
    <section ref={sectionRef} className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-[font1] font-bold text-center mb-14 text-gray-800"
        >
          Equipment
        </motion.h2>

        {/* Grid Layout */}
     {/* Flex Layout (Centered last row fix) */}
<div
  ref={sectionRef}
  className="
    flex flex-wrap justify-center items-center 
    gap-6 md:gap-8 mx-auto w-full
  "
>
  {items.map((item, index) => (
    <Link
      key={`${item.id}-${index}`}
      to={item.path}
      ref={(el) => (boxesRef.current[index] = el)}
      className="
        group relative 
        w-[90%] sm:w-[45%] md:w-[30%] xl:w-[22%] 
        aspect-square md:aspect-[4/3]
        overflow-hidden rounded-2xl 
        bg-gray-100 shadow-md hover:shadow-2xl
        transition-all duration-500 ease-out
      "
    >
      {/* Background Image */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image})` }}
      ></motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>

      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-2xl md:text-3xl font-[font5] uppercase font-semibold tracking-wide text-center drop-shadow-md">
          {item.name}
        </p>
      </div>
    </Link>
  ))}
</div>


      </div>

    </section>
          <Footer />
    </div>
  );
};

export default Equipments;
