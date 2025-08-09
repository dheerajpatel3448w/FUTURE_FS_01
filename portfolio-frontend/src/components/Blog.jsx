/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';

function Blog() {
  const [expandedBlog, setExpandedBlog] = useState(null);
  
  const blogs = [
    {
      id: 1,
      title: "How I Built My AI-Powered Interview Bot",
      date: "July 2025",
      description: "A deep dive into developing an AI-powered interview assistant that evaluates answers, detects facial expressions, and generates performance reports.",
      description2:"I developed an AI-powered interview assistant designed to simulate real interview scenarios and provide detailed feedback to candidates. Built using React.js, Node.js, and MongoDB, the system integrates Gemini AI API to generate 20 domain-specific questions based on the user’s chosen topic. It uses WebSocket connections for real-time question delivery and response handling. The application also includes MediaPipe-based facial emotion detection to assess confidence and engagement, while Deepgram API handles speech-to-text conversion for capturing spoken answers and text-to-speech for delivering questions. After the interview, all responses are analyzed by Gemini AI to generate a detailed performance report highlighting mistakes, strengths, and areas of improvement. During development, I tackled challenges such as optimizing WebSocket latency, synchronizing audio and visual analysis, and ensuring smooth UI transitions. This project not only enhanced my skills in full stack development but also gave me hands-on experience with AI integrations, real-time communication, and advanced multimedia processing. In the future, I plan to expand it with multi-language support, more advanced emotion analytics, and an interviewer personality customization feature.",
      tags: ["AI", "NLP", "React.js", "Full Stack", "Gemini AI"],
      image: "ai-interview-bot"
    },
    {
      id: 2,
      title: "Lessons Learned from Building an Uber Clone",
      date: "June 2025",
      description: "My journey of creating a ride-booking web app inspired by Uber, complete with real-time location tracking and route estimation.",
      description2 : "I wanted to challenge myself by building a real-world web application that replicates the core features of a popular service. Uber has always fascinated me with its seamless ride-booking experience, so I decided to recreate its basic functionality using the MERN Stack (MongoDB, Express, React.js, Node.js) and Google Maps API. I implemented features like location search and autocomplete using Google Places API, fare calculation with Google Directions API, and a complete ride booking flow where users can select pickup and drop-off points, view estimated fares, and confirm rides. The application also displays real-time routes on an interactive Google Map and is fully responsive for mobile and desktop. During development, I faced challenges like securing API keys, handling geolocation permission issues, and making the map UI responsive across devices. I learned the importance of structuring backend routes for scalability, managing React state efficiently, and dealing with third-party API limitations. In the future, I plan to enhance the app by adding real-time driver tracking, integrating payment gateways, and creating a driver-side interface. Overall, this project strengthened my skills in MERN stack development and working with real-time location-based services.",
      tags: ["MERN Stack", "Google Maps API", "React.js", "Node.js", "MongoDB"],
      image: "uber-clone"
    },
    {
      id: 3,
      title: "Why Every Developer Should Have a Portfolio Website",
      date: "August 2025",
      description: "Your portfolio is your digital resume — here's why it matters and how to make it stand out to recruiters.",
      description2: "I created my personal portfolio website as a centralized platform to showcase my skills, projects, and achievements in a professional and visually appealing way. Built using React.js and Tailwind CSS, the portfolio features a clean hero section with a brief introduction, a projects section with detailed case studies, a blog section for sharing learnings, a testimonials section, and a contact form for direct communication. The site is fully responsive, ensuring an optimized experience across mobile, tablet, and desktop devices. I also implemented SEO best practices by optimizing meta tags, URLs, and performance for faster loading times. For deployment, I used GitHub for version control and Vercel for hosting, making it easy to update and maintain. This project strengthened my frontend development skills, improved my understanding of UI/UX design principles, and taught me how to present my work in a way that appeals to recruiters and potential clients. In the future, I plan to add a dynamic blog management system, integrate analytics to track visitor engagement, and introduce a dark mode feature for enhanced user experience.",
      tags: ["Portfolio", "Career", "React.js", "Web Development"],
      image: "portfolio-website"
    },
    {
      id: 4,
      title: "HealthPulse AI — Coming Soon",
      date: "September 2025",
      description: "AI-powered health report analyzer & lifestyle recommender. Upload medical reports and get personalized diet, exercise, and lifestyle suggestions.",
      tags: ["AI Health", "Medical Tech", "Machine Learning", "Wellness"],
      image: "health-ai"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const getGradient = (id) => {
    const gradients = [
      "from-indigo-500 to-purple-600",
      "from-teal-500 to-cyan-600",
      "from-amber-500 to-orange-500",
      "from-pink-500 to-rose-500"
    ];
    return gradients[id % gradients.length];
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Blog
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Sharing my learnings and project stories
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col h-full"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className={`h-48 bg-gradient-to-r ${getGradient(blog.id)} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <FiCalendar className="mx-auto mb-2 text-2xl" />
                    <span className="font-medium">{blog.date}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  {blog.tags.slice(0, 2).map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="bg-white bg-opacity-20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full mr-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-5 flex-grow">{blog.description}</p>
                
                <motion.button
                  className="flex items-center text-indigo-600 font-medium group mt-auto"
                  whileHover={{ x: 5 }}
                  onClick={() => setExpandedBlog(blog)}
                >
                  Read More
                  <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Blog Detail Modal */}
      {expandedBlog && (
        <div className="fixed inset-0 bg-amber-100 bg-opacity-70 flex items-center justify-center p-4 z-50">
          <motion.div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className={`h-64 bg-gradient-to-r ${getGradient(expandedBlog.id)}`}></div>
            
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{expandedBlog.title}</h2>
                  <div className="flex items-center text-gray-600 mb-6">
                    <FiCalendar className="mr-2" />
                    <span>{expandedBlog.date}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setExpandedBlog(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  &times;
                </button>
              </div>
              
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                {expandedBlog.description2}
              </p>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {expandedBlog.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <button 
                  onClick={() => setExpandedBlog(null)}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Blog
