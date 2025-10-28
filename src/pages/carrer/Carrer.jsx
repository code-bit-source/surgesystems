// CareerPage.jsx
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../HomePage/components/Navbar';
import Footer from '../HomePage/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const CareerPage = () => {
  const detailsRef = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    // Animate Qualifications Div text
    gsap.from(detailsRef.current.querySelectorAll('.animate-text'), {
      scrollTrigger: {
        trigger: detailsRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });

    // Parallax effect on banner image
    gsap.to(bannerRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const subject = encodeURIComponent("Career Form Submission");
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`
    );
    window.location.href = `mailto:yourmail@example.com?subject=${subject}&body=${body}`;
    form.reset();
  };

  return (
    <div className="bg-black text-white font-sans">
      <Navbar />

      {/* Banner with parallax image */}
      <div className="relative w-full h-96 md:h-[500px] overflow-hidden">
        <img
          ref={bannerRef}
          src="front.jpg" // <-- public folder me image rakho
          alt="Career Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/50 bg-opacity-50">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-7xl font-[font1] font-bold text-white mb-4"
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-2xl text-gray-300"
          >
            Explore opportunities with us and be part of a dynamic and innovative team. Submit your application below.
          </motion.p>
        </div>
      </div>

      {/* Job Details + Form Side by Side */}
      <div className="md:max-w-[90vw] max-w-5xl mx-auto p-6 md:p-12 flex flex-col lg:flex-row gap-8 px-4 mt-12">
        {/* Left: Qualifications Div */}
        <div
          ref={detailsRef}
          className="lg:flex-1 w-full bg-black text-white p-8 rounded-xl space-y-6 shadow-lg"
        >
          <h2 className="animate-text text-3xl font-bold mb-3 border-b-2 border-gray-500 inline-block pb-1">
            Qualifications
          </h2>
          <p className="animate-text">Relevant degree or certification</p>

          <h2 className="animate-text text-3xl font-bold mb-3 border-b-2 border-gray-500 inline-block pb-1">
            Experience
          </h2>
          <p className="animate-text">Minimum 2 years in relevant field</p>

          <h2 className="animate-text text-3xl font-bold mb-3 border-b-2 border-gray-500 inline-block pb-1">
            Description
          </h2>
          <p className="animate-text leading-relaxed">
            Take care of all machine-specific functions such as configuring the equipment, loading and operating the machines.
            Optimize machine capacity & capability and consumption of consumables. Ensure machines work at full capacity,
            oversee maintenance, and perform timely quality checks. Be a self-starter, willing to undergo training if needed to
            understand new equipment operations. Willing to travel in India.
          </p>

          <h2 className="animate-text text-3xl font-bold mb-3 border-b-2 border-gray-500 inline-block pb-1">
            Skills
          </h2>
          <p className="animate-text">Technical expertise and communication</p>
        </div>

        {/* Right: Form Div */}
        <div className="lg:flex-1 w-full bg-gray-900 p-8 rounded-xl shadow-2xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl font-[font5] uppercase font-bold text-center mb-8"
          >
            Apply Now
          </motion.h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-700 rounded px-4 py-3 bg-black text-white focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-700 rounded px-4 py-3 bg-black text-white focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full border border-gray-700 rounded px-4 py-3 bg-black text-white focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full border border-gray-700 rounded px-4 py-3 bg-black text-white focus:outline-none focus:ring-2 focus:ring-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black py-3 px-6 rounded-lg hover:bg-gray-200 transition-all font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CareerPage;
