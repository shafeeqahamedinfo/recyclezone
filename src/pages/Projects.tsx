import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter, X } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'E-commerce', 'Portfolio', 'Business', 'Mobile App', 'Web App'];

  const projects = [
    {
      id: 1,
      title: 'TechStore E-commerce Platform',
      category: 'E-commerce',
      description: 'Modern e-commerce platform with advanced features including inventory management, payment processing, and analytics dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      features: ['Payment Integration', 'Inventory Management', 'Admin Dashboard', 'Mobile Responsive'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Creative Agency Portfolio',
      category: 'Portfolio',
      description: 'Stunning portfolio website for a creative agency showcasing their work with smooth animations and interactive elements.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Sanity CMS'],
      features: ['Smooth Animations', 'CMS Integration', 'SEO Optimized', 'Fast Loading'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'HealthCare Management System',
      category: 'Business',
      description: 'Comprehensive healthcare management system for clinics and hospitals with patient records and appointment scheduling.',
      image: 'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Socket.io'],
      features: ['Patient Management', 'Appointment Scheduling', 'Real-time Updates', 'Secure Data'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'FitTracker Mobile App',
      category: 'Mobile App',
      description: 'Cross-platform fitness tracking app with workout plans, progress tracking, and social features.',
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      features: ['Workout Tracking', 'Progress Analytics', 'Social Features', 'Offline Mode'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Restaurant Management Dashboard',
      category: 'Business',
      description: 'Complete restaurant management solution with order tracking, inventory management, and staff scheduling.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js'],
      features: ['Order Management', 'Inventory Control', 'Staff Scheduling', 'Analytics'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Learning Management System',
      category: 'Web App',
      description: 'Educational platform with course management, student progress tracking, and interactive learning tools.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Django', 'PostgreSQL', 'Redis'],
      features: ['Course Management', 'Progress Tracking', 'Interactive Quizzes', 'Video Streaming'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 7,
      title: 'Real Estate Platform',
      category: 'Business',
      description: 'Property listing platform with advanced search, virtual tours, and agent management system.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Spring Boot', 'MongoDB', 'AWS S3'],
      features: ['Property Search', 'Virtual Tours', 'Agent Portal', 'Map Integration'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 8,
      title: 'Personal Finance Tracker',
      category: 'Web App',
      description: 'Personal finance management app with expense tracking, budget planning, and financial insights.',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      features: ['Expense Tracking', 'Budget Planning', 'Financial Reports', 'Goal Setting'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 9,
      title: 'Photographer Portfolio',
      category: 'Portfolio',
      description: 'Elegant portfolio website for a professional photographer with gallery management and client booking.',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Gatsby', 'GraphQL', 'Contentful', 'Netlify'],
      features: ['Image Gallery', 'Client Booking', 'Blog Integration', 'Contact Forms'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-gray-900 dark:text-white">Our </span>
              <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects that showcase our expertise in delivering 
              innovative solutions across various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4" />
                  <span>{category}</span>
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Key Features:</h4>
                    <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                      {project.features.slice(0, 2).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <a
                      href={project.liveUrl}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <Filter className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try selecting a different category to see more projects.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Project <span className="text-green-600 dark:text-green-400">Statistics</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Numbers that reflect our commitment to delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '100+', label: 'Projects Completed', color: 'from-green-500 to-emerald-600' },
              { number: '50+', label: 'Happy Clients', color: 'from-blue-500 to-cyan-600' },
              { number: '15+', label: 'Industries Served', color: 'from-purple-500 to-pink-600' },
              { number: '99%', label: 'Success Rate', color: 'from-orange-500 to-red-600' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl font-bold text-white">{stat.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-700 dark:to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Let's bring your vision to life with our expertise and innovative approach to technology.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-green-600 hover:bg-gray-100 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Start Your Project</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}