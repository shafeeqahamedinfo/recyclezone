import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Lightbulb,
  Shield,
  Zap,
  Globe,
  Code,
  Headphones,
  Palette
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Our clients trust us to deliver consistent, high-quality results on time, every time.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do, and it shows in every project we undertake and every client we serve.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring their vision becomes reality.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      expertise: 'Full-Stack Development, Business Strategy',
      description: 'Visionary leader with 10+ years of experience in technology and business development.',
      icon: Code
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Developer',
      expertise: 'React, Node.js, Cloud Architecture',
      description: 'Expert developer specializing in modern web technologies and scalable solutions.',
      icon: Globe
    },
    {
      name: 'Michael Rodriguez',
      role: 'UI/UX Designer',
      expertise: 'User Experience, Visual Design, Branding',
      description: 'Creative designer focused on creating intuitive and beautiful user experiences.',
      icon: Palette
    },
    {
      name: 'Emily Davis',
      role: 'Support Manager',
      expertise: 'Technical Support, Client Relations',
      description: 'Dedicated support specialist ensuring our clients receive exceptional service.',
      icon: Headphones
    }
  ];

  const milestones = [
    { year: '2020', event: 'RecycleZone Founded', description: 'Started with a vision to transform businesses through technology' },
    { year: '2021', event: 'First 25 Clients', description: 'Reached our first major milestone of serving 25 satisfied clients' },
    { year: '2022', event: '50+ Projects Completed', description: 'Successfully delivered over 50 diverse projects across industries' },
    { year: '2023', event: 'Team Expansion', description: 'Grew our team to include specialists in various technology domains' },
    { year: '2024', event: '100+ Happy Clients', description: 'Celebrating over 100 successful client partnerships and counting' }
  ];

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
              <span className="text-gray-900 dark:text-white">About </span>
              <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                RecycleZone
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're a passionate team of technology enthusiasts dedicated to transforming businesses 
              through innovative IT solutions and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Our <span className="text-green-600 dark:text-green-400">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  RecycleZone was born from a simple yet powerful idea: to help businesses harness 
                  the full potential of technology while maintaining a sustainable and efficient approach 
                  to digital transformation.
                </p>
                <p>
                  Founded in 2020, we started as a small team of passionate developers and designers 
                  who believed that great technology should be accessible to businesses of all sizes. 
                  Our name reflects our commitment to sustainable practices and our belief in giving 
                  new life to outdated systems and processes.
                </p>
                <p>
                  Today, we've grown into a comprehensive IT solutions provider, but our core mission 
                  remains the same: to deliver innovative, reliable, and sustainable technology solutions 
                  that drive real business results.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-500 to-blue-600 p-8 rounded-2xl text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100+</div>
                    <div className="text-green-100">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-green-100">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">4+</div>
                    <div className="text-green-100">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-green-100">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To empower businesses of all sizes with innovative, sustainable, and reliable IT solutions 
                that drive growth, enhance efficiency, and create lasting value. We're committed to being 
                more than just a service provider – we're your technology partner for success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To be the leading catalyst for digital transformation, helping businesses worldwide 
                embrace technology in ways that are sustainable, efficient, and impactful. We envision 
                a future where every business, regardless of size, has access to world-class IT solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="text-green-600 dark:text-green-400">Values</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients and partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet Our <span className="text-green-600 dark:text-green-400">Team</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The talented individuals who make RecycleZone's success possible through their expertise and dedication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <member.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <div className="text-green-600 dark:text-green-400 font-medium mb-2">
                  {member.role}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {member.expertise}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="text-green-600 dark:text-green-400">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Key milestones that have shaped RecycleZone's growth and success over the years.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-green-500 to-blue-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}