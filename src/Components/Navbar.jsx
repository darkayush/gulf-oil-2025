import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoArrowUpRight } from "react-icons/go";
import { HiMenu, HiX } from "react-icons/hi";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Utility function for creating URL-friendly slugs
  const slugify = (text) =>
    text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');

  // Menu data structure
  const menuSections = [
    {
      id: 'corporate-overview',
      title: 'Corporate Overview',
      type: 'internal',
      items: [
        { name: 'Gulf Oil India at a Glance' },
        { name: 'Hinduja Group' },
        { name: 'Gulf Oil International' },
        { name: 'Board of Directors' },
        { name: 'From the Chairman\'s Desk' },
        { name: 'Strategic Insights from the MD & CEO' },
        { name: 'Senior Management Team' },
        { name: 'Our Robust Business Model' },
        { name: 'Gulf Oil Lubricants India Limited' },
        { name: 'CFO\'s Review of Financial Performance' },
        { name: 'Leadership Team' },
        { name: 'Manufacturing and R&D Prowess' },
        { name: 'Marketing Initiatives' },
        { name: 'Strategic Partnerships' },
        { name: 'Intellectual Strength - Digital' },
        { name: 'Integrated e-Mobility Solutions' },
        { name: 'Our People' },
        { name: 'Sustainability' },
        { name: 'Communities' },
        { name: 'Awards' },
      ]
    },
    {
      id: 'statutory-reports',
      title: 'Statutory Reports',
      type: 'pdf',
      items: [
        { name: 'Management Discussion and Analysis', href: '/PDFs/Management_Discussion_and_Analysis.pdf' },
        { name: 'Board\'s Report', href: '/PDFs/Boards_Report.pdf' },
        { name: 'Business Responsibility and Sustainability Report', href: '/PDFs/Business_Responsibility.pdf' },
        { name: 'Corporate Governance Report', href: '/PDFs/Corporate_Governance_Report.pdf' },
      ]
    },
    {
      id: 'financial-statements',
      title: 'Financial Statements',
      type: 'pdf',
      items: [
        { name: 'Standalone', href: '/PDFs/Standalone.pdf' },
        { name: 'Consolidated', href: '/PDFs/Consolidated.pdf' },
      ]
    },
    {
      id: 'notice',
      title: 'Notice',
      type: 'pdf',
      items: [
        { name: 'Notice of the 16th Annual General Meeting', href: '/PDFs/Notice_AGM.pdf' }
      ]
    }
  ];

  // Animation variants
  const overlayVariants = {
    closed: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      transition: {
        duration: 0.8,
        ease: [0.87, 0, 0.13, 1]
      }
    },
    open: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      transition: {
        duration: 0.8,
        ease: [0.87, 0, 0.13, 1]
      }
    }
  };

  const contentVariants = {
    closed: {
      opacity: 0,
      scale: 1.1,
      x: -50,
      y: -50,
      rotate: -10,
      transition: {
        duration: 0.8,
        ease: [0.87, 0, 0.13, 1]
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.87, 0, 0.13, 1],
        delay: 0.1
      }
    }
  };

  const sectionVariants = {
    closed: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.4
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  const containerVariants = {
    closed: {},
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  // Event handlers
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setExpandedSections({});
    }
  };

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setExpandedSections({});
  };

  return (
    <div 
      style={{ 
        fontFamily: '"TWK Lausanne", "Inter", sans-serif',
        overflowX: 'hidden'
      }}
    >
      {/* Navigation Bar */}
      <motion.nav
        className={`fixed w-full top-0 left-0 z-50 transition-colors duration-500 ${
          isOpen
            ? "bg-[#10347e] text-white"
            : scrolled
            ? "bg-white text-black shadow-lg"
            : "bg-transparent text-white"
        }`}
        initial={false}
        animate={{
          backgroundColor: isOpen 
            ? "#10347e" 
            : scrolled 
            ? "#ffffff" 
            : "transparent"
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex justify-between items-center px-6 lg:px-12 py-4 max-w-screen-2xl mx-auto">
          {/* Logo */}
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a href="/" className="block">
              <img 
                src="./gulf-logo.svg" 
                className="h-15 w-auto" 
                alt="Gulf Oil Logo" 
              />
            </a>
          </motion.div>

          {/* Menu Toggle Button */}
          <motion.button
            className={`menu-toggle relative p-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              scrolled && !isOpen 
                ? 'bg-[#f36f21] text-white focus:ring-[#f36f21]' 
                : 'bg-[#10347e] text-white focus:ring-[#10347e]'
            }`}
            onClick={handleMenuToggle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <HiX className="text-xl" />
                  <span className="font-medium text-sm">Close</span>
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <HiMenu className="text-xl" />
                  <span className="font-medium text-sm">Menu</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="menu-overlay bg-[#10347e] text-white fixed top-0 left-0 w-full h-full z-40"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div
              className="menu-content w-full h-full flex flex-col justify-start pt-24 pb-8 px-6 lg:px-12 overflow-auto"
              variants={contentVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="max-w-screen-2xl mx-auto w-full">
                {/* Menu Sections Grid */}
                <motion.div
                  className="menu-main grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12"
                  variants={containerVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  {menuSections.map((section) => (
                    <motion.div
                      key={section.id}
                      className="menu-section"
                      variants={sectionVariants}
                    >
                      {/* Section Header */}
                      <motion.button
                        className="section-header w-full cursor-pointer flex items-center justify-between pb-3 border-b border-white/20 group"
                        onClick={() => toggleSection(section.id)}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        aria-expanded={expandedSections[section.id]}
                      >
                        <span className="section-title text-lg lg:text-xl font-bold tracking-wide text-left group-hover:text-[#f36f21] transition-colors duration-200">
                          {section.title}
                        </span>
                        <motion.span
                          className="section-arrow text-xl"
                          animate={{
                            rotate: expandedSections[section.id] ? 180 : 0
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          ↓
                        </motion.span>
                      </motion.button>

                      {/* Section Items */}
                      <AnimatePresence>
                        {expandedSections[section.id] && (
                          <motion.div
                            className="section-items mt-4 space-y-1"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <motion.div
                              variants={containerVariants}
                              initial="closed"
                              animate="open"
                              exit="closed"
                            >
                              {section.items.map((item, index) => (
                                <motion.div
                                  key={`${section.id}-${index}`}
                                  variants={itemVariants}
                                  className="section-item"
                                >
                                  {section.type === 'internal' ? (
                                    <a
                                      href={`/${slugify(item.name)}`}
                                      className="flex justify-between items-center py-2 px-2 rounded hover:bg-white/10 hover:text-[#f36f21] transition-all duration-200 group"
                                      onClick={handleLinkClick}
                                    >
                                      <span className="item-name text-sm lg:text-base">
                                        {item.name}
                                      </span>
                                      <GoArrowUpRight className="text-lg opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
                                    </a>
                                  ) : (
                                    <a
                                      href={item.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex justify-between items-center py-2 px-2 rounded hover:bg-white/10 hover:text-[#f36f21] transition-all duration-200 group"
                                    >
                                      <span className="item-name text-sm lg:text-base">
                                        {item.name}
                                      </span>
                                      <GoArrowUpRight className="text-lg opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
                                    </a>
                                  )}
                                </motion.div>
                              ))}
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Footer Section */}
                <motion.div
                  className="menu-footer mt-16 pt-8 border-t border-white/20"
                  variants={sectionVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                    <div className="contact-info">
                      <h3 className="text-lg font-semibold mb-2 text-[#f36f21]">
                        Get in Touch
                      </h3>
                      <p className="text-white/80 text-sm">
                        Contact us for more information about our services
                      </p>
                    </div>
                    
                    <div className="social-links flex gap-6">
                      {['LinkedIn', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                        <motion.a
                          key={social}
                          href="#"
                          className="text-white/60 hover:text-[#f36f21] text-sm font-medium transition-colors duration-200"
                          whileHover={{ y: -2 }}
                        >
                          {social}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMenu;