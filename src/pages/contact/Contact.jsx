import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../HomePage/components/Footer";
import Navbar from "../HomePage/components/Navbar";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  useEffect(() => {
    const section = sectionRef.current;

    // Form animation
    gsap.fromTo(
      section.querySelector(".contact-form"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section.querySelector(".contact-form"),
          start: "top 85%",
        },
      }
    );

    // Contact details animation
    gsap.fromTo(
      section.querySelector(".contact-details"),
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section.querySelector(".contact-details"),
          start: "top 85%",
        },
      }
    );

    // Map animation
    gsap.fromTo(
      section.querySelector(".map-container"),
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section.querySelector(".map-container"),
          start: "top 90%",
        },
      }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, category, message } = formData;
    const subject = `Contact Form Submission - ${category}`;
    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ACategory: ${category}%0AMessage: ${message}`;
    window.location.href = `mailto:ssipl@surgesystems.com?subject=${subject}&body=${body}`;
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Banner */}
      <div className="relative w-full h-96">
        <img
          src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
          alt="Banner"
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      {/* Form & Details */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16">
        {/* Contact Details */}
        <div className="contact-details space-y-6 flex flex-col justify-center">
          <h2 className="text-8xl font-[font1] tracking-wide font-bold text-white">
            Get in Touch
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We’d love to hear from you! Whether you have a question, feedback,
            or want to collaborate, our team is ready to assist you. Fill out
            the form and we’ll get back to you as soon as possible.
          </p>
          <ul className="space-y-4 text-gray-300">
            <li>📍 Address: 377, Patparganj Industrial Area, Delhi-110092</li>
            <li>📞 Phone: +91 8448481515</li>
            <li>✉️ Email: ssipl@surgesystems.com</li>
          </ul>
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="contact-form space-y-6 bg-gray-900 p-8 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Equipment">Equipment</option>
            <option value="Irrigation">Irrigation</option>
            <option value="Golf">Golf</option>
            <option value="Service">Service</option>
          </select>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 px-6 py-3 rounded-lg font-semibold"
          >
            Submit
          </motion.button>
        </motion.form>
      </div>

      {/* Google Map */}
      <motion.div className="map-container max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-lg mb-16">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.689505963802!2d77.30021757457163!3d28.637934675669846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb7ad1d7e3a3%3A0xf5b8f1dbf6a48bb8!2s377%2C%20Patparganj%20Industrial%20Area%2C%20Delhi%2C%20110092!5e0!3m2!1sen!2sin!4v1697292930234!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl border-none w-full"
        ></iframe>
      </motion.div>

      <Footer />
    </div>
  );
};

export default ContactUs;
