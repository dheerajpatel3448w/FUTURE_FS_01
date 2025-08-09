/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react';
import { FiHome, FiUser, FiFolder, FiFileText, FiMail, FiBook } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Navbar() {
 const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  
  const navItems = [
    { id: '', name: 'Home', icon: <FiHome /> },
    { id: 'about', name: 'About', icon: <FiUser /> },
    { id: 'projects', name: 'Projects', icon: <FiFolder /> },

    { id: 'contact', name: 'Contact', icon: <FiMail /> },
    { id: 'blog', name: 'Blog', icon: <FiBook /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
     
      setScrolled(window.scrollY > 50);
   
      const sections = navItems.map(item => document.getElementById(item.id));
      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`    w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/90 fixed top-0 transition-all duration-500  backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
   
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              DevDheeraj
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex space-x-1 bg-white/20 backdrop-blur-sm rounded-full p-1.5 border border-white/30 shadow-lg"
            >
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => {scrollToSection(item.id)
                    navigate(`/${item.id}`);
                  }}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </motion.button>
              ))}
            </motion.div>
          </div>


          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              background: 'linear-gradient(to right, #6366f1, #8b5cf6)'
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a   href="https://mail.google.com/mail/?view=cm&fs=1&to=pateldheeraj8345@gmail.com&su=Hiring Inquiry&body=Hi Dheeraj,"
  target="_blank"
  rel="noopener noreferrer">
            Hire Me
            </a>
          </motion.button>

       
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none text-gray-700"
            >
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-xl shadow-xl rounded-b-2xl overflow-hidden"
        >
          <div className="px-2 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.id * 0.1 }}
                
                className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => {
                  setIsOpen(false)
                  navigate(`/${item.id}`);
                }}>
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.name}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="w-full mt-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-3 rounded-lg font-medium shadow-md"
            >
              <a   href="https://mail.google.com/mail/?view=cm&fs=1&to=pateldheeraj8345@gmail.com&su=Hiring Inquiry&body=Hi Dheeraj,"
  target="_blank"
  rel="noopener noreferrer">

              Hire Me
              </a>
            </motion.button>
          </div>
        </motion.div>
      )}
    </nav>
  );

}

export default Navbar
