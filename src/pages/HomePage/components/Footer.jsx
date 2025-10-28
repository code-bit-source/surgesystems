import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-red-400" /> info@surgesystems.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-400" /> +91-011-41431497
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-400" /> 377, Patparganj
              Industrial Area, Delhi-110092
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Service Support</li>
            <li>Toro Parts & Operation Manuals</li>
            <li>Toro Performance Parts Catalogue</li>
            <li>Toro Time Chart</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-3">
            {[
              {
                icon: <FaFacebookF />,
                href: "https://www.facebook.com/",
                bg: "bg-[#1877F2]", // Facebook Blue
                hover: "hover:bg-[#0d5dcf]",
              },
              {
                icon: <FaInstagram />,
                href: "https://www.instagram.com/?hl=en",
                bg: "bg-gradient-to-tr from-pink-500 to-yellow-500",
                hover: "hover:from-pink-600 hover:to-yellow-600",
              },
              {
                icon: <FaLinkedinIn />,
                href: "https://www.linkedin.com/company/80191282/admin/dashboard/",
                bg: "bg-[#0A66C2]", // LinkedIn Blue
                hover: "hover:bg-[#004182]",
              },
              {
                icon: <FaWhatsapp />,
                href: "https://wa.me/918448781515",
                bg: "bg-[#25D366]", // WhatsApp Green
                hover: "hover:bg-[#1DA851]",
              },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`h-10 w-10 flex items-center justify-center rounded-full text-white transition-all duration-300 ${s.bg} ${s.hover}`}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-xs text-center text-gray-500">
        © 2015 Surge Systems | Designed & Developed by <span className="text-white font-semibold">Amrit Kumar</span>
      </div>
    </footer>
  );
};

export default Footer;
