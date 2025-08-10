import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Smartphone, 
  Headphones, 
  Users, 
  Palette, 
  Award,
  ArrowRight,
  CheckCircle,
  Globe,
  Database,
  Shield,
  Zap,
  Settings,
  Monitor,
  Search,
  TrendingUp
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom websites built with modern technologies, responsive design, and optimized performance.',
      features: [
        'Responsive Web Design',
        'E-commerce Solutions',
        'Content Management Systems',
        'Progressive Web Apps',
        'SEO Optimization',
        'Performance Optimization'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'WordPress', 'Shopify'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: [
        'iOS & Android Apps',
        'Cross-platform Development',
        'UI/UX Design',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
    },
    {
      icon: Headphones,
      title: 'Tech Support & Maintenance',
      description: '24/7 technical support and maintenance services to keep your systems running smoothly.',
      features: [
        '24/7 Technical Support',
        'System Monitoring',
        'Regular Updates',
        'Security Patches',
        'Performance Optimization',
        'Backup Solutions'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help your business leverage technology for maximum growth.',
      features: [
        'Technology Strategy',
        'Digital Transformation',
        'System Architecture',
        'Process Optimization',
        'Technology Audits',
        'Training & Support'
      ],
      technologies: ['Cloud Solutions', 'DevOps', 'Agile', 'Microservices', 'API Design'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience and drive engagement.',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing',
        'Design Systems',
        'Accessibility Design'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20'
    },
    {
      icon: Award,
      title: 'Branding Solutions',
      description: 'Complete branding packages that establish your unique identity in the market.',
      features: [
        'Logo Design',
        'Brand Identity',
        'Marketing Materials',
        'Brand Guidelines',
        'Website Branding',
        'Social Media Assets'
      ],
      technologies: ['Adobe Creative Suite', 'Canva Pro', 'Brand Strategy', 'Market Research'],
      color: 'from-teal-500 to-green-500',
      bgColor: 'from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20'
    }
  ];

  const additionalServices = [
    { icon: Database, title: 'Database Design', description: 'Scalable database solutions' },
    { icon: Shield, title: 'Security Audits', description: 'Comprehensive security assessments' },
    { icon: Search, title: 'SEO Services', description: 'Search engine optimization' },
    { icon: TrendingUp, title: 'Analytics Setup', description: 'Data tracking and insights' },
    { icon: Globe, title: 'Domain & Hosting', description: 'Web hosting and domain services' },
    { icon: Settings, title: 'API Development', description: 'Custom API solutions' }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business needs, goals, and challenges through detailed consultation.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Our team creates a comprehensive project plan with timelines, milestones, and deliverables.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'We build your solution using best practices, modern technologies, and agile methodologies.'
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Rigorous testing ensures your solution is bug-free, secure, and performs optimally.'
    },
    {
      step: '05',
      title: 'Launch',
      description: 'We deploy your solution and provide training to ensure a smooth transition.'
    },
    {
      step: '06',
      title: 'Support',
      description: 'Ongoing maintenance and support to keep your solution running at peak performance.'
    }
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
              <span className="text-gray-900 dark:text-white">Our </span>
              <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions designed to transform your business and drive sustainable growth 
              in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${service.bgColor} p-8 md:p-12`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        What's Included:
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Technologies:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative">
                      <div className={`w-full h-80 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center`}>
                        <service.icon className="h-32 w-32 text-white/20" />
                        <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
                        <div className="absolute inset-4 border-2 border-white/20 rounded-xl"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
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
              Additional <span className="text-green-600 dark:text-green-400">Services</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Complementary services to enhance your digital presence and business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
              Our <span className="text-green-600 dark:text-green-400">Process</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg h-full">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                )}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-green-600 hover:bg-gray-100 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Request Quote</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold rounded-full transition-all duration-300"
              >
                <span>View Portfolio</span>
                <Monitor className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}