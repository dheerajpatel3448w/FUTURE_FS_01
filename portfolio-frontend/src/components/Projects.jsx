/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaServer, FaLaptopCode } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Interview - AI",
      description: "AI assistant that asks domain-specific interview questions, evaluates answers using NLP, and analyzes facial emotions in real-time.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "MediaPipe", "Gemini AI API", "Deepgram API"],
      liveDemo: "https://interview-aifrontend.vercel.app/",
      githubFrontend: "https://github.com/dheerajpatel3448w/interviewAifrontend",
      githubBackend: "https://github.com/dheerajpatel3448w/interviewbackend",
      image: "https://tse4.mm.bing.net/th/id/OIP.0UapDh5SSjYPbboUQDnfyQHaE8?pid=Api&P=0&h=180"
    },
    {
      id: 2,
      title: "Uber Clone",
      description: "Ride-booking web app with real-time mapping, trip simulation, and responsive UI.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Maps API","socket.io"],
      liveDemo: null,
      githubFrontend: "https://github.com/dheerajpatel3448w/uber-frontend",
      githubBackend: "https://github.com/dheerajpatel3448w/uber-backend",
      image: "https://tse2.mm.bing.net/th/id/OIP.Nn_TPZTSkbrwUflwnXHezQHaDP?pid=Api&P=0&h=180"
    }
  ];

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

  const techColors = {
    "React.js": "bg-blue-100 text-blue-800 border-blue-300",
    "Node.js": "bg-green-100 text-green-800 border-green-300",
    "Express.js": "bg-yellow-100 text-yellow-800 border-yellow-300",
    "MongoDB": "bg-emerald-100 text-emerald-800 border-emerald-300",
    "MediaPipe": "bg-purple-100 text-purple-800 border-purple-300",
    "Gemini AI API": "bg-indigo-100 text-indigo-800 border-indigo-300",
    "Deepgram API": "bg-pink-100 text-pink-800 border-pink-300",
    "Google Maps API": "bg-red-100 text-red-800 border-red-300",
    "socket.io": "bg-gray-100 text-gray-800 border-gray-300"
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
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
            My Work
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Featured <span className="text-indigo-600">Projects</span>
          </motion.h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={item}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-60 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 mb-3"
                  whileHover={{ color: "#4f46e5" }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className={`text-xs font-medium px-3 py-1.5 rounded-full border ${techColors[tech] || 'bg-gray-100 text-gray-800 border-gray-300'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project Links */}
                <div className="flex flex-wrap gap-3">
                  {project.liveDemo && (
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-indigo-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-indigo-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
                    </motion.a>
                  )}
                  
                  <motion.a
                    href={project.githubFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-800 text-white px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-900 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLaptopCode className="mr-2" />
                    Frontend Code
                  </motion.a>
                  
                  <motion.a
                    href={project.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-700 text-white px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaServer className="mr-2" />
                    Backend Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View More Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/dheerajpatel3448w"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-medium text-lg hover:bg-indigo-50 transition-colors"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#4f46e5",
              color: "#fff"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="mr-3 text-xl" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects
