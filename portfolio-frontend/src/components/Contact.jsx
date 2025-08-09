import React, { useState } from 'react';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Contact() {
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsSubmitting(true);

const d = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, formData);
    if (d.status !== 201) {
      alert('Failed to send message. Please try again later.');
      }
      else{
        alert('Message sent successfully!');
      }


    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };
  
  const contactMethods = [
    {
      icon: <FiMail className="w-6 h-6 text-indigo-600" />,
      title: 'Email',
      value: 'pateldheeraj8345@gmail.com',
      link: 'mailto:pateldheeraj8345@gmail.com',
      color: 'bg-indigo-100'
    },
    {
      icon: <FiPhone className="w-6 h-6 text-green-600" />,
      title: 'Phone',
      value: '+91 6260976750',
      link: 'tel:+916260976750',
      color: 'bg-green-100'
    },
    {
      icon: <FiMapPin className="w-6 h-6 text-red-600" />,
      title: 'Location',
      value: 'Indore, India',
      color: 'bg-red-100'
    }
  ];
  
  const socialLinks = [
    {
      icon: <FaLinkedinIn className="w-5 h-5" />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/dheeraj-patel-a42901344',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      label: 'GitHub',
      url: 'https://github.com/dheerajpatel3448w',
      color: 'bg-gray-800 hover:bg-gray-900'
    }
  ];
  
  return (
    <motion.section 
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid md:grid-cols-2">
        {/* Left Column - Contact Information */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 md:p-12 text-white">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-2">Let's Connect</h2>
            <p className="text-indigo-100 mb-8">
              Have a project in mind or just want to say hi? I'd love to hear from you!
            </p>
          </motion.div>
          
          <div className="space-y-6 mb-10">
            {contactMethods.map((method, index) => (
              <motion.div 
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className={`${method.color} p-3 rounded-lg mr-4`}>
                  {method.icon}
                </div>
                <div>
                  <h3 className="font-medium text-indigo-100">{method.title}</h3>
                  {method.link ? (
                    <a 
                      href={method.link} 
                      className="text-white font-medium hover:underline"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium">{method.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="font-medium text-indigo-100 mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className={`${social.color} w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform duration-300 transform hover:scale-110`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Right Column - Contact Form */}
        <div className="p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send me a message</h3>
            
            {submitSuccess ? (
              <motion.div 
                className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition duration-300"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition duration-300"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition duration-300 resize-none"
                  placeholder="Hello, I would like to talk about..."
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition duration-300 ${
                  isSubmitting 
                    ? 'bg-indigo-400 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact
