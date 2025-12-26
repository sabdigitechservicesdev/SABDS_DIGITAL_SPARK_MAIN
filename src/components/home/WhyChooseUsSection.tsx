import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Code2,
  Users,
  Settings,
  LucideIcon,
  Target,
  BarChart3,
  Rocket,
  Shield,
} from "lucide-react";

import img1 from "../../assets/team1.jpg";
import img2 from "../../assets/team2.jpg";
import img4 from "../../assets/team4.jpg";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  gradient: string;
  bgColor: string;
};

const features: Feature[] = [
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    desc: "Data-driven digital marketing strategies that accelerate your business growth with measurable ROI",
    color: "text-blue-600",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Code2,
    title: "Tech Solutions",
    desc: "Modern, scalable digital solutions with cutting-edge technology for future-proof businesses",
    color: "text-purple-600",
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Users,
    title: "Expert Consultancy",
    desc: "Personalized digital strategy consulting tailored for your unique business challenges",
    color: "text-green-600",
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
 
  {
    icon: Target,
    title: "Precision Targeting",
    desc: "Laser-focused audience targeting for maximum conversion and engagement rates",
    color: "text-cyan-600",
    gradient: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50",
  },


];

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-200/20 to-cyan-200/20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-purple-200/20 to-pink-200/20 blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Animated Dots */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="absolute w-1 h-1 rounded-full bg-blue-400"
            style={{
              left: `${10 + (i * 7)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm font-semibold text-blue-600 tracking-wide">
              WHY CHOOSE US
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Why Choose The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Best Digital Marketing Agency
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Leading digital marketing agency in Kolkata & West Bengal with proven expertise in website development, SEO, and social media marketing
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT - IMAGE COLLAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Container */}
            <div className="relative grid grid-cols-2 gap-3 md:gap-4">
              {/* Image 1 - Top Left */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 aspect-square"
              >
                <img
                  src={img1}
                  alt="Team collaboration"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Image 2 - Top Right */}
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 aspect-square mt-8 md:mt-12"
              >
                <img
                  src={img4}
                  alt="Meeting discussion"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Image 3 - Full Width Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 col-span-2 aspect-video"
              >
                <img
                  src={img2}
                  alt="Office workspace"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
            </div>

            {/* Floating Stats Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 md:right-4 top-8 bg-white rounded-2xl p-4 md:p-6 shadow-2xl border border-gray-100 z-10"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-xs md:text-sm font-medium text-gray-600">Happy Clients</div>
              </div>
            </motion.div>

            {/* Floating Decorative Element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -left-4 -top-4 w-20 h-20 border-2 border-blue-200/50 rounded-full hidden md:block"
            />
          </motion.div>

          {/* RIGHT - CONTENT & FEATURES */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
              >
                Your Trusted Digital Partner in{" "}
                <span className="text-blue-600">Kolkata & West Bengal</span>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-600 mb-6"
              >
                We combine strategic thinking with technical excellence to deliver digital solutions that drive real business results.
              </motion.p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((item, index) => {
                const Icon = item.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative"
                  >
                    {/* Card Container */}
                    <div className={`relative rounded-2xl p-5 md:p-6 backdrop-blur-sm border border-gray-200/50 hover:border-gray-300 transition-all duration-500 overflow-hidden ${item.bgColor} hover:shadow-xl`}>
                      {/* Hover Gradient Overlay */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      />
                      
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      
                      {/* Content */}
                      <div className="relative">
                        {/* Icon with Gradient */}
                        <div className="mb-4">
                          <div className={`inline-flex p-3 rounded-xl ${item.bgColor} group-hover:bg-white transition-colors duration-500`}>
                            <div className="relative">
                              <Icon className={`w-6 h-6 ${item.color} group-hover:text-gray-900 transition-colors duration-500`} />
                              <div 
                                className={`absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br ${item.gradient}`}
                              />
                            </div>
                          </div>
                        </div>
                        
                        {/* Title & Description */}
                        <h4 className={`text-lg font-semibold mb-2 ${item.color} group-hover:text-gray-900 transition-colors duration-500`}>
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-500">
                          {item.desc}
                        </p>
                      </div>
                      
                      {/* Bottom Indicator */}
                      <div 
                        className={`absolute bottom-0 left-0 right-0 h-1 rounded-full ${item.bgColor} group-hover:bg-gradient-to-r ${item.gradient} transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left`}
                      />
                    </div>
                    
                    {/* Glow Effect */}
                    <div 
                      className={`absolute -inset-2 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br ${item.gradient} -z-10`}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 md:mt-12"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold overflow-hidden hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Start Your Project
                    <div className="w-4 h-4 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>
                
                <a
                  href="/about"
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white border-2 border-gray-300 text-gray-700 font-semibold hover:border-blue-400 hover:text-blue-600 transition-all duration-500 w-full sm:w-auto"
                >
                  <span className="flex items-center gap-3">
                    Learn More About Us
                    <div className="w-4 h-4 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    </div>
                  </span>
                </a>
              </div>
              
              <p className="text-center text-gray-500 text-sm mt-6">
                Join 500+ successful businesses who trust us with their digital growth
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Call to Action for Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="fixed bottom-6 right-6 z-50 md:hidden"
      >
        <a
          href="/contact"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-2xl shadow-blue-500/50"
        >
          <span className="text-lg">💬</span>
        </a>
      </motion.div>

      {/* Custom CSS for Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        /* Smooth scrolling behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom selection color */
        ::selection {
          background-color: rgba(59, 130, 246, 0.2);
          color: #1e40af;
        }
        
        /* Mobile optimizations */
        @media (max-width: 640px) {
          .aspect-square {
            aspect-ratio: 1;
          }
          
          .aspect-video {
            aspect-ratio: 16/9;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUsSection;