/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiLinkedin, FiInstagram, FiGithub, FiTwitter, FiDribbble, FiMail, FiPhone, FiMapPin, FiHeart } from 'react-icons/fi';

function Footer() {
   const [email, setEmail] = useState('');
  
  const socialLinks = [
    { 
      icon: <FiLinkedin className="w-4 h-4" />, 
      name: "LinkedIn",
      url: "https://linkedin.com/in/dheeraj-patel-a42901344",
      color: "from-blue-500 to-blue-700",
      hover: "hover:from-blue-600 hover:to-blue-800"
    },
    { 
      icon: <FiInstagram className="w-4 h-4" />, 
      name: "Instagram",
      url: "https://instagram.com/dheerajpatel5747",
      color: "from-pink-500 to-purple-700",
      hover: "hover:from-pink-600 hover:to-purple-800"
    },
    { 
      icon: <FiGithub className="w-4 h-4" />, 
      name: "GitHub",
      url: "https://github.com/dheerajpatel3448w",
      color: "from-gray-700 to-gray-900",
      hover: "hover:from-gray-800 hover:to-black"
    },
    { 
      icon: <FiTwitter className="w-4 h-4" />, 
      name: "Twitter",
      url: "https://x.com/PatelDheer9751",
      color: "from-sky-500 to-blue-500",
      hover: "hover:from-sky-600 hover:to-blue-600"
    }
  ];

  const contactInfo = [
    { icon: <FiMail className="w-3.5 h-3.5" />, text: "pateldheeraj8345@gmail.com" },
    { icon: <FiPhone className="w-3.5 h-3.5" />, text: "+91 6260976750"},
    { icon: <FiMapPin className="w-3.5 h-3.5" />, text: "Pithampur, Mp , India" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <motion.footer 
      className="w-full bg-gradient-to-br from-gray-900 to-black text-gray-300 border-t border-gray-800 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-1">
            <div className="flex items-center">
              <motion.div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 w-8 h-8 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-white font-bold text-lg">D</span>
              </motion.div>
              <span className="ml-3 text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
             DevDheeraj
              </span>
            </div>
            
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              Creating beautiful digital experiences with passion and precision. 
              Let's build something amazing together.
            </p>
            
            <div className="mt-6">
              <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-3">
                Follow Me
              </h3>
              <div className="flex space-x-3">
                {socialLinks.slice(0, 4).map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      w-9 h-9 rounded-lg flex items-center justify-center
                      bg-gradient-to-br ${link.color} text-white
                      transform transition-all duration-300
                      hover:scale-110 hover:shadow-lg ${link.hover}
                    `}
                    aria-label={`Link to ${link.url}`}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 5
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          
         
          <div>
            <motion.h3 
              className="text-md font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Contact Info
            </motion.h3>
            
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="mt-0.5 mr-3 text-purple-500">
                    {info.icon}
                  </div>
                  <span className="text-sm text-gray-400 hover:text-white transition-colors">
                    {info.text}
                  </span>
                </motion.li>
              ))}
            </ul>
            
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-3">
                Working Hours
              </h3>
              <p className="text-sm text-gray-400">
                Monday - Friday: 9AM - 6PM
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Saturday & Sunday: Closed
              </p>
            </motion.div>
          </div>
          

          <div>
            <motion.h3 
              className="text-md font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Newsletter
            </motion.h3>
            
            <motion.p 
              className="text-sm text-gray-400 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              Subscribe to get updates on my latest projects and articles.
            </motion.p>
            
            <motion.form 
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-grow text-sm bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <motion.button 
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-r-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join
                </motion.button>
              </div>
            </motion.form>
            
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <a href="/Dheeraj_Patel_Resume_Updated (3) (3).pdf" download="Dheeraj_Patel_Resume_Updated (3) (3).pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
                </a>
              </button>
            </motion.div>
          </div>
        </div>
        

        <motion.div 
          className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()}  Portfolio. All rights reserved.
          </p>
          <div className="flex items-center mt-2 md:mt-0">
            <p className="text-gray-600 text-xs flex items-center">
              Made with <FiHeart className="text-pink-500 mx-1" /> in India
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer
