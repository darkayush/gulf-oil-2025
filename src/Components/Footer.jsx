import React from 'react';
import { motion } from 'framer-motion';
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      className="bg-[#10347e] text-white py-8"
      style={{ fontFamily: '"TWK Lausanne", "Inter", sans-serif' }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Company Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a href="/" className="bg-white p-3 rounded-lg">
              <img 
                src="./gulf-logo.svg" 
                alt="Gulf Oil Logo" 
                className="h-8 w-auto"
              />
            </a>
          </motion.div>

          {/* Copyright Statement */}
          <div className="text-center">
            <p className="text-white/80 text-sm lg:text-base">
              © {new Date().getFullYear()} Gulf Oil Lubricants India Limited. All Rights Reserved.
            </p>
          </div>

          {/* Developer Credit */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="https://kalolwala.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#f36f21] transition-colors duration-200"
            >
              <img
                src="./ka-logo.png"
                alt="K&A Developer Logo"
                className="w-20 h-auto object-contain"
              />
              <GoArrowUpRight className="text-lg opacity-60 hover:opacity-100 transition-opacity duration-200" />
            </a>
          </motion.div>

        </div>
        
        {/* Back to Top Button */}
        <motion.div 
          className="flex justify-center mt-8 pt-6 border-t border-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            onClick={scrollToTop}
            className="text-white/60 hover:text-[#f36f21] text-sm transition-colors duration-200"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Back to Top ↑
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;