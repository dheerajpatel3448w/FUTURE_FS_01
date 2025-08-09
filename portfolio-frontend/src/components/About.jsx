/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaRocket, FaLaptopCode, FaServer, FaRobot } from 'react-icons/fa';

function About() {
   // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const card = {
    hidden: { scale: 0.8, opacity: 0 },
    show: { scale: 1, opacity: 1 }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="text-lg font-semibold text-indigo-600 bg-indigo-100 px-4 py-1.5 rounded-full inline-block mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            My Journey
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            About <span className="text-indigo-600">Me</span>
          </motion.h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Illustration */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 transform rotate-1">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl overflow-hidden p-8">
                <div className="flex justify-center">
                  <div className="bg-white border-2 border-dashed rounded-xl w-64 h-64 flex items-center justify-center">
                   <img src="https://cdni.iconscout.com/illustration/premium/thumb/developer-4268348-3560991.png" alt="" />
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-indigo-600 text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <FaCode className="text-xl mr-2" />
                  <span className="font-bold">5,000+</span>
                </div>
                <div className="text-xs">Lines of Code</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-purple-600 text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <FaServer className="text-xl mr-2" />
                  <span className="font-bold">12+</span>
                </div>
                <div className="text-xs">Projects</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 z-0"></div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-800 mb-6 flex items-center"
              variants={item}
            >
              <FaRocket className="text-indigo-600 mr-3" />
              My Journey in Tech
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed"
              variants={item}
            >
              I'm <span className="font-semibold text-indigo-700">Dheeraj Patel</span>, a passionate Full Stack Web Developer and 2nd-year IT student at Indore Institute of Science and Technology (IIST). My coding journey began with curiosity — experimenting with C and C++ — which later evolved into building complete web applications using the MERN stack. Over time, I've honed my skills through hands-on projects, exploring both frontend and backend development.
            </motion.p>
            
            <motion.h3 
              className="text-2xl font-bold text-gray-800 mb-6 mt-10 flex items-center"
              variants={item}
            >
              <FaBrain className="text-purple-600 mr-3" />
              Philosophy & Approach
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed"
              variants={item}
            >
              I believe that software should be <span className="font-semibold">clean, scalable, and impactful</span>. My approach to development involves understanding the problem deeply, designing a smooth user experience, and writing maintainable code. I'm also passionate about integrating AI into my projects to make them smarter and more useful.
            </motion.p>
            
            <motion.h3 
              className="text-2xl font-bold text-gray-800 mb-6 mt-10 flex items-center"
              variants={item}
            >
              <FaRocket className="text-indigo-600 mr-3" />
              Vision & Future
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 mb-8 leading-relaxed"
              variants={item}
            >
              In the next few years, I aim to become an <span className="font-semibold text-indigo-700">AI Full Stack Developer</span> capable of building complex applications that combine powerful backend logic with intelligent AI-driven features. I'm always open to collaboration, learning, and contributing to meaningful tech solutions.
            </motion.p>
            
            <motion.div 
              className="mt-10"
              variants={container}
            >
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <FaLaptopCode className="w-6 h-6" />, text: "Frontend Development" },
                  { icon: <FaServer className="w-6 h-6" />, text: "Backend Development" },
                  { icon: <FaRobot className="w-6 h-6" />, text: "AI Integration" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={card}
                    transition={{ type: "spring", stiffness: 300, delay: index * 0.2 }}
                    className="flex items-center bg-white px-5 py-3 rounded-xl shadow-md border border-gray-200"
                  >
                    <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600 mr-3">
                      {item.icon}
                    </div>
                    <span className="font-medium text-gray-800">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About
