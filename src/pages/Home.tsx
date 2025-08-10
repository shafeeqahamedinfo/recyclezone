import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Code, 
  Headphones, 
  Users, 
  CheckCircle,
  Zap,
  Shield,
  Award
} from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Code,
      title: 'Website & App Development',
      description: 'Custom web and mobile applications built with cutting-edge technologies.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Headphones,
      title: 'Tech Support & Maintenance',
      description: '24/7 technical support and maintenance services for your digital assets.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help your business leverage technology effectively.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'RecycleZone transformed our digital presence completely. Their team delivered beyond our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Digital Solutions Ltd.',
      content: 'Outstanding service and support. They helped us scale our business with their innovative solutions.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Creative Agency',
      content: 'Professional, reliable, and incredibly talented. RecycleZone is our go-to tech partner.',
      rating: 5
    }
  ];

  const stats = [
   /* { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' },
    { number: '99%', label: 'Client Satisfaction' }*/
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Transform
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">Your Digital Future</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Innovative IT solutions that drive growth, enhance efficiency, and transform businesses in the digital age.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-green-500 dark:hover:border-green-400 hover:text-green-600 dark:hover:text-green-400 font-semibold rounded-full transition-all duration-300"
              >
                View Our Work
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Company */}
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
                About <span className="text-green-600 dark:text-green-400">RecycleZone</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We are a passionate team of technology enthusiasts dedicated to helping businesses 
                thrive in the digital landscape. With years of experience and a commitment to innovation, 
                we deliver solutions that not only meet your current needs but also prepare you for future growth.
              </p>
              <div className="space-y-4">
                {[
                  'Cutting-edge technology solutions',
                  'Expert team of developers and consultants',
                  'Proven track record of successful projects',
                  '24/7 support and maintenance services'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold transition-colors duration-200"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl text-white">
                  <Zap className="h-8 w-8 mb-3" />
                  <h3 className="font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-sm opacity-90">Quick turnaround times without compromising quality</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-6 rounded-2xl text-white">
                  <Shield className="h-8 w-8 mb-3" />
                  <h3 className="font-semibold mb-2">Secure Solutions</h3>
                  <p className="text-sm opacity-90">Enterprise-grade security in all our implementations</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-2xl text-white">
                  <Award className="h-8 w-8 mb-3" />
                  <h3 className="font-semibold mb-2">Quality Assured</h3>
                  <p className="text-sm opacity-90">Rigorous testing and quality control processes</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-2xl text-white">
                  <Users className="h-8 w-8 mb-3" />
                  <h3 className="font-semibold mb-2">Expert Team</h3>
                  <p className="text-sm opacity-90">Skilled professionals with years of experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
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
              Our <span className="text-green-600 dark:text-green-400">Services</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center space-x-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold transition-colors duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
{/*
       Testimonials 
     {/* <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our <span className="text-green-600 dark:text-green-400">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-green-600 dark:text-green-400 text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}

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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Let's discuss how our innovative IT solutions can help your business grow and succeed in the digital world.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-green-600 hover:bg-gray-100 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Get In Touch</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}