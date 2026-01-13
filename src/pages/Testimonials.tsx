import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, Award, TrendingUp, Target, Users, Globe, Heart, Shield, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import techBackground from "@/assets/backgrounds/tech-network.jpg";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Solutions Pvt Ltd",
      role: "CEO",
      location: "Kolkata",
      rating: 5,
      text: "SAB DigiTech Services transformed our online presence completely. Their SEO strategies increased our organic traffic by 300% in just 6 months. Highly professional team!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      industry: "Technology",
      duration: "6 months",
      result: "300% traffic growth",
    },
    {
      name: "Priya Sharma",
      company: "Fashion Boutique - Saree Emporium",
      role: "Owner",
      location: "South Kolkata",
      rating: 5,
      text: "Amazing work on our website and social media marketing. Our sales have doubled since we started working with them. The team is creative, responsive, and truly understands our brand.",
      avatar: "https://media.istockphoto.com/id/1387060932/photo/portrait-of-woman-on-white-background-stock-photo.jpg?s=2048x2048&w=is&k=20&c=QL1EvAGaerRPdQ6DJR17dtl-QKeIn4slNVyi6sOoV0A=",
      industry: "Fashion",
      duration: "8 months",
      result: "100% sales increase",
    },
    {
      name: "Amit Patel",
      company: "Kolkata Real Estate Group",
      role: "Marketing Director",
      location: "Salt Lake",
      rating: 5,
      text: "The Google Business Profile optimization they did for us resulted in a significant increase in local inquiries. Their attention to detail and customer service is outstanding.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      industry: "Real Estate",
      duration: "4 months",
      result: "250% inquiry boost",
    },
    {
      name: "Sneha Gupta",
      company: "City Wellness Center",
      role: "Founder",
      location: "Park Street",
      rating: 5,
      text: "Professional content creation and digital marketing services. They helped us reach our target audience effectively. Very happy with the results and the ROI we're seeing.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      industry: "Healthcare",
      duration: "10 months",
      result: "3x ROI achieved",
    },
    {
      name: "Vikram Singh",
      company: "Oh! Calcutta Restaurant Chain",
      role: "Owner",
      location: "Central Kolkata",
      rating: 5,
      text: "Their social media marketing campaigns are top-notch. We've seen tremendous growth in engagement and foot traffic. The team is knowledgeable and always available to help.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      industry: "Restaurant",
      duration: "12 months",
      result: "400% engagement growth",
    },
    {
      name: "Meera Reddy",
      company: "Future Minds Institute",
      role: "Director",
      location: "New Town",
      rating: 5,
      text: "Excellent web development and SEO services. Our website ranks on the first page for all our target keywords. The entire process was smooth and professional.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      industry: "Education",
      duration: "7 months",
      result: "Page 1 rankings",
    },
    {
      name: "Arjun Mehta",
      company: "Bengal Crafts E-commerce",
      role: "Founder",
      location: "Howrah",
      rating: 5,
      text: "The digital marketing strategies implemented by SAB DigiTech have been game-changing for our business. Revenue has increased by 250% and we continue to grow.",
      avatar: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      industry: "E-commerce",
      duration: "9 months",
      result: "250% revenue growth",
    },
    {
      name: "Raj Joshi",
      company: "MediCare Healthcare Clinic",
      role: "Manager",
      location: "Bhowanipore",
      rating: 5,
      text: "Their ratings and reviews management service helped us build a strong online reputation. We now have a 4.9-star rating on Google with hundreds of positive reviews.",
      avatar: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1085&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      industry: "Healthcare",
      duration: "5 months",
      result: "4.9★ Google rating",
    },
    {
      name: "Rohit Verma",
      company: "Bengal Manufacturing Co.",
      role: "Marketing Head",
      location: "Belgharia",
      rating: 5,
      text: "Comprehensive digital solutions that actually work. From website development to content creation, every service exceeded our expectations. Truly a reliable partner.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      industry: "Manufacturing",
      duration: "11 months",
      result: "Complete digital transformation",
    },
    {
      name: "Soumya Das",
      company: "Kolkata Food Delivery",
      role: "CEO",
      location: "Garia",
      rating: 5,
      text: "Onek din dhore amader online presence kom chhilo. SAB DigiTech er team ta amader puro digital presence transform kore diyeche. Ekhon amader business 300% bereche!",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face",
      isBengali: true,
      industry: "Food Delivery",
      duration: "8 months",
      result: "300% business growth",
    },
    {
      name: "Ananya Chatterjee",
      company: "Boutique Jewelry Store",
      role: "Proprietor",
      location: "Rashbehari Avenue",
      rating: 5,
      text: "Eta amader jonno ekta game-changer chhilo. Tader social media strategy ar content creation service dekhe amader sales double hoye geche. Khub bhalo team!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      isBengali: true,
      industry: "Jewelry",
      duration: "6 months",
      result: "Sales doubled",
    },
    {
      name: "Debashis Roy",
      company: "Local Tourism Agency",
      role: "Owner",
      location: "Esplanade",
      rating: 5,
      text: "SAB DigiTech er SEO service ta khub effective. Amader website ekhon first page e ache sob target keyword er jonno. Ekhon amader inquiry 400% bereche!",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      isBengali: true,
      industry: "Tourism",
      duration: "7 months",
      result: "400% inquiry increase",
    },
    {
      name: "Moumita Ghosh",
      company: "Fitness Studio - Kolkata",
      role: "Founder",
      location: "Lake Town",
      rating: 5,
      text: "Tader digital marketing service dekhe amader membership 150% bereche. Google Business Profile optimization ta besh bhalo kaj koreche. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      isBengali: true,
      industry: "Fitness",
      duration: "5 months",
      result: "150% membership growth",
    },
    {
      name: "Sagnik Banerjee",
      company: "Tech Startup - Kolkata",
      role: "Co-Founder",
      location: "Sector V",
      rating: 5,
      text: "Website development theke digital marketing, sob kaj e professionalism dekhte paoa jay. Tader team always available and supportive. Best digital agency in Kolkata!",
      avatar: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=400&h=400&fit=crop&crop=face",
      isBengali: true,
      industry: "Tech Startup",
      duration: "10 months",
      result: "Complete digital success",
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Auto play testimonials
  useEffect(() => {
    if (!isAutoPlaying || isHovering) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovering, testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const stats = [
    { value: "500+", label: "Happy Clients in Bengal", icon: Users },
    { value: "1000+", label: "Successful Projects", icon: Target },
    { value: "4.9/5", label: "Average Client Rating", icon: Star },
    { value: "98%", label: "Client Satisfaction Rate", icon: Heart },
    { value: "50+", label: "Local Business Partners", icon: Globe },
    { value: "300%", label: "Average Growth Delivered", icon: TrendingUp },
  ];

  const industryStats = [
    { industry: "Technology", count: 120, color: "from-blue-500 to-cyan-500" },
    { industry: "Retail", count: 85, color: "from-purple-500 to-pink-500" },
    { industry: "Healthcare", count: 65, color: "from-green-500 to-emerald-500" },
    { industry: "Education", count: 45, color: "from-orange-500 to-yellow-500" },
    { industry: "Restaurants", count: 95, color: "from-red-500 to-orange-500" },
    { industry: "Real Estate", count: 70, color: "from-indigo-500 to-blue-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-montserrat">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              backgroundImage: `url(${techBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-blue-600/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
          
          {/* Animated Background Elements */}
          <motion.div 
            className="absolute top-20 right-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"
            animate={floatingAnimation}
          />
          
          <motion.div 
            className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"
            animate={{
              y: [0, 20, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }
            }}
          />
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-300/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0, 1, 0],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl mx-auto text-center space-y-8"
          >
            <motion.div variants={fadeInUp} className="relative inline-block">
              <Sparkles className="absolute -top-4 -left-4 h-8 w-8 text-cyan-300 animate-pulse" />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Testimonials</span>
              </h1>
              <motion.div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto"
            >
              Success Stories from Kolkata & West Bengal's Leading Businesses
            </motion.h2>

            {/* Trust Badges */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 pt-8"
            >
              {[
                { text: "🏆 Best Digital Agency 2024", delay: 0.1 },
                { text: "⭐ 4.9/5 Google Rating", delay: 0.2 },
                { text: "📍 Serving Kolkata Since 2018", delay: 0.3 },
                { text: "💯 100% Client Satisfaction", delay: 0.4 },
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: badge.delay }}
                  className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all cursor-pointer group"
                >
                  <span className="text-white/90 text-sm group-hover:text-white transition-colors">
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-gradient-to-b from-cyan-300 to-blue-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Impact</span> in Numbers
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Transforming businesses across Kolkata and West Bengal with measurable results
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="text-center group cursor-pointer"
                  >
                    <motion.div 
                      className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20"
                      whileHover={{ rotate: 5 }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors font-medium">
                      {stat.label}
                    </div>
                    <motion.div 
                      className="h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mt-4 mx-auto"
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
                <Award className="h-5 w-5 text-blue-600" />
                <span className="text-blue-600 font-medium">Featured Stories</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Success <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Spotlight</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Hear from our most successful partnerships
              </p>
            </motion.div>

            <div 
              className="max-w-5xl mx-auto"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Featured Testimonial Card */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 100, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -100, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Card className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-blue-100 overflow-hidden">
                      {/* Animated background elements */}
                      <motion.div 
                        className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full -translate-y-32 translate-x-32"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                      
                      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 relative z-10">
                        {/* Avatar and Info */}
                        <div className="flex-shrink-0 text-center lg:text-left">
                          <motion.div 
                            className="relative"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                              <img 
                                src={testimonials[activeIndex].avatar} 
                                alt={testimonials[activeIndex].name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {testimonials[activeIndex].isBengali && (
                              <motion.div 
                                className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg"
                                whileHover={{ scale: 1.1 }}
                              >
                                বাংলা
                              </motion.div>
                            )}
                          </motion.div>
                          
                          <div className="mt-6 space-y-3">
                            <div className="flex justify-center lg:justify-start">
                              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            
                            <div className="space-y-1">
                              <div className="text-lg font-bold text-gray-900">
                                {testimonials[activeIndex].name}
                              </div>
                              <div className="text-sm text-blue-600 font-medium">
                                {testimonials[activeIndex].role}
                              </div>
                              <div className="text-xs text-gray-500">
                                {testimonials[activeIndex].company}
                              </div>
                            </div>
                            
                            {/* Result Badge */}
                            <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-green-50 rounded-full">
                              <TrendingUp className="h-4 w-4 text-green-600" />
                              <span className="text-sm font-medium text-green-700">
                                {testimonials[activeIndex].result}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="relative">
                            <Quote className="absolute -top-4 -left-2 h-10 w-10 text-blue-100" />
                            <p className="text-gray-700 text-lg leading-relaxed pl-6 mb-8">
                              "{testimonials[activeIndex].text}"
                            </p>
                          </div>
                          
                          {/* Additional Info */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-blue-100">
                            <div className="space-y-2">
                              <div className="text-sm text-gray-500">Industry</div>
                              <div className="font-medium text-gray-900">
                                {testimonials[activeIndex].industry}
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm text-gray-500">Duration</div>
                              <div className="font-medium text-gray-900">
                                {testimonials[activeIndex].duration}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="flex justify-between items-center mt-8 px-4">
                  <motion.button
                    onClick={prevTestimonial}
                    className="group p-4 rounded-2xl bg-white shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-blue-300 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                  </motion.button>
                  
                  {/* Dots Indicator */}
                  <div className="flex gap-3">
                    {testimonials.slice(0, 6).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveIndex(index);
                          setIsAutoPlaying(false);
                          setTimeout(() => setIsAutoPlaying(true), 15000);
                        }}
                        className="relative group"
                      >
                        <motion.div
                          className={`w-3 h-3 rounded-full transition-all ${
                            activeIndex === index 
                              ? 'bg-gradient-to-r from-blue-600 to-cyan-500' 
                              : 'bg-gray-300 group-hover:bg-gray-400'
                          }`}
                          animate={activeIndex === index ? {
                            scale: [1, 1.2, 1],
                          } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        {activeIndex === index && (
                          <motion.div 
                            className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            {testimonials[index].name}
                          </motion.div>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  <motion.button
                    onClick={nextTestimonial}
                    className="group p-4 rounded-2xl bg-white shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-blue-300 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Distribution */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Serving <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">All Industries</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We help businesses across all sectors in Kolkata achieve digital success
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                {industryStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="relative group cursor-pointer"
                  >
                    <Card className="p-6 bg-white hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold text-gray-900">{stat.industry}</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                          {stat.count}
                        </span>
                      </div>
                      <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div 
                          className={`absolute inset-0 rounded-full bg-gradient-to-r ${stat.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(stat.count / 120) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            ref={containerRef}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                More <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Happy Clients</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Real feedback from businesses we've helped grow in Kolkata & West Bengal
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="group"
                >
                  <Card className="h-full p-6 hover-lift border-2 border-gray-100 hover:border-blue-300 transition-all duration-300 bg-white/90 backdrop-blur-sm overflow-hidden">
                    {/* Animated Background */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                    
                    {/* Header with Avatar */}
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <div className="relative">
                        <motion.div 
                          className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg"
                          whileHover={{ scale: 1.1 }}
                        >
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        {testimonial.isBengali && (
                          <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                            বাংলা
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-blue-600">{testimonial.company}</div>
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                          <span>{testimonial.location}</span>
                          <span>•</span>
                          <span>{testimonial.industry}</span>
                        </div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex space-x-1 mb-4 relative z-10">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <div className="relative mb-6">
                      <Quote className="absolute -top-2 -left-2 h-6 w-6 text-blue-100 group-hover:text-blue-200 transition-colors" />
                      <p className="text-gray-700 text-sm leading-relaxed pl-6 group-hover:text-gray-800 transition-colors line-clamp-4">
                        "{testimonial.text}"
                      </p>
                    </div>

                    {/* Footer with Results */}
                    <div className="pt-4 border-t border-gray-100 relative z-10">
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-medium text-gray-900">
                          {testimonial.result}
                        </div>
                        <div className="text-xs text-gray-500">
                          {testimonial.duration}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bengali Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <span className="text-white font-medium">স্থানীয় ব্যবসায়ীদের অভিজ্ঞতা</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                কলকাতার ব্যবসায়ীদের <span className="text-yellow-300">প্রতিক্রিয়া</span>
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                বাংলার ব্যবসায়ীদের সাথে আমাদের কাজের সাফল্যের গল্প
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials
                .filter(t => t.isBengali)
                .map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="group"
                  >
                    <Card className="h-full p-6 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15">
                      {/* Avatar and Info */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <motion.div 
                            className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/30"
                            whileHover={{ scale: 1.1 }}
                          >
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                          <div className="absolute -bottom-1 -right-1 bg-yellow-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                            বাংলা
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-white">{testimonial.name}</div>
                          <div className="text-sm text-white/80">{testimonial.company}</div>
                          <div className="text-xs text-white/60">{testimonial.location}</div>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-white/90 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors line-clamp-4">
                        "{testimonial.text}"
                      </p>

                      {/* Results */}
                      <div className="pt-4 border-t border-white/20">
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-medium text-white">
                            {testimonial.result}
                          </div>
                          <div className="text-xs text-white/70">
                            {testimonial.duration}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="relative">
              <Sparkles className="absolute -top-6 -left-6 h-12 w-12 text-cyan-300/50" />
              <Sparkles className="absolute -top-6 -right-6 h-12 w-12 text-blue-300/50" />
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Join Our <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Success Stories</span>?
              </h2>
            </motion.div>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
            >
              Be the next satisfied client from Kolkata sharing their success story
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.button 
                className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Digital Journey</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Case Studies
              </motion.button>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <div className="flex flex-wrap justify-center gap-8 text-white/60 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>24/7 Support Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span>Results-Driven Approach</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;