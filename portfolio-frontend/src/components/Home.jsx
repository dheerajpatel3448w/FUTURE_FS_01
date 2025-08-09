/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiJavascript, SiNextdotjs, SiGit } from 'react-icons/si';

function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const skillItem = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center py-16 px-4 sm:px-6 lg:px-8  justify-center ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-cente   pl-10">
     
        <motion.div 
          className="text-center lg:text-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="mb-6">
            <span className="text-lg font-semibold text-indigo-600 bg-indigo-100 px-4 py-1.5 rounded-full">
              Hi, I'm
            </span>
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
          >
            <span className="text-gray-900">Dheeraj</span>{" "}
            <span className="text-indigo-600">Patel</span>
          </motion.h1>
          
          <motion.h2 
            variants={item}
            className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0"
          >
            A passionate <span className="font-semibold text-indigo-600">Full Stack Web Developer</span> | 
            MERN Stack Enthusiast
          </motion.h2>
          
          <motion.p 
            variants={item}
            className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto lg:mx-0"
          >
           I’m a passionate Full Stack Web Developer and a 2nd-year IT student at Indore Institute of Science and Technology (IIST).
I love building responsive and dynamic web applications using modern technologies like React.js, Node.js, and MongoDB.
Always eager to explore new tech, contribute to real-world projects, and grow as a developer through continuous learning and collaboration.
          </motion.p>
          
 
          <motion.div 
            variants={container}
            className="mb-12"
          >
            <motion.h3 
              variants={item}
              className="text-lg font-semibold text-gray-700 mb-4"
            >
              My Technical Toolkit:
            </motion.h3>
            
            <motion.div 
              variants={container}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {[
                { icon: <SiReact className="w-6 h-6 text-blue-500" />, name: "React.js" },
                { icon: <SiNodedotjs className="w-6 h-6 text-green-600" />, name: "Node.js" },
                { icon: <SiExpress className="w-6 h-6 text-gray-800" />, name: "Express.js" },
                { icon: <SiMongodb className="w-6 h-6 text-green-500" />, name: "MongoDB" },
                { icon: <SiJavascript className="w-6 h-6 text-yellow-500" />, name: "JavaScript" },
                { icon: <SiNextdotjs className="w-6 h-6 text-black" />, name: "Next.js" },
                { icon: <SiGit className="w-6 h-6 text-orange-600" />, name: "Git & GitHub" },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={skillItem}
                  transition={{ type: "spring", stiffness: 300, delay: index * 0.05 }}
                  className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200"
                >
                  {skill.icon}
                  <span className="ml-2 text-gray-700 font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
         
          <motion.div 
            variants={container}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              variants={item}
              href="/Dheeraj_Patel_Resume_Updated (3) (3).pdf"
              download="Dheeraj_Patel_Resume_Updated (3) (3).pdf"
                target="_blank"
               rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </motion.a>
            
            <motion.a
              variants={item}
              href="/projects"
              className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-lg font-medium shadow-sm hover:bg-indigo-50 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              View Projects
            </motion.a>
            
            <motion.a
              variants={item}
              href="/contact"
              className="bg-white text-gray-700 border-2 border-gray-300 px-8 py-3 rounded-lg font-medium shadow-sm hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </motion.a>
          </motion.div>
          
 
          <motion.div 
            variants={container}
            className="mt-10 flex justify-center lg:justify-start space-x-5"
          >
            <motion.a 
              variants={item}
              href="https://github.com/dheerajpatel3448w" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
              whileHover={{ y: -5 }}
            >
              <FaGithub className="text-xl" />
            </motion.a>
            <motion.a 
              variants={item}
              href="https://linkedin.com/in/dheeraj-patel-a42901344" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              whileHover={{ y: -5 }}
            >
              <FaLinkedinIn className="text-xl" />
            </motion.a>
          
          </motion.div>
        </motion.div>
   
        <motion.div 
          className="hidden lg:flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-20 -left-12 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-12 left-20 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
           
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform rotate-3">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-64 h-64 rounded-full flex items-center justify-center overflow-hidden">
                <div className="bg-white border-2 border-dashed rounded-xl w-48 h-48 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold"><img src="https://png.pngtree.com/png-clipart/20231109/original/pngtree-programmer-it-developer-png-image_13520483.png" alt="" /></span>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200 -rotate-1">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <div className="text-sm font-medium text-gray-700">Currently working at</div>
                </div>
                <div className="text-lg font-bold text-indigo-700">Future Interns</div>
                <div className="text-gray-600">Full Stack Developer Intern</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 px-4 py-2 rounded-lg shadow-lg transform rotate-6">
                <div className="text-sm font-bold text-gray-900">Building amazing web apps!</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-100 opacity-20"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Home

