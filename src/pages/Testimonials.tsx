import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import techBackground from "@/assets/backgrounds/tech-network.jpg";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Solutions Pvt Ltd",
      role: "CEO",
      location: "Kolkata",
      rating: 5,
      text: "SAB DigiTech Services transformed our online presence completely. Their SEO strategies increased our organic traffic by 300% in just 6 months. Highly professional team!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Priya Sharma",
      company: "Fashion Boutique - Saree Emporium",
      role: "Owner",
      location: "South Kolkata",
      rating: 5,
      text: "Amazing work on our website and social media marketing. Our sales have doubled since we started working with them. The team is creative, responsive, and truly understands our brand.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Amit Patel",
      company: "Kolkata Real Estate Group",
      role: "Marketing Director",
      location: "Salt Lake",
      rating: 5,
      text: "The Google Business Profile optimization they did for us resulted in a significant increase in local inquiries. Their attention to detail and customer service is outstanding.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Sneha Gupta",
      company: "City Wellness Center",
      role: "Founder",
      location: "Park Street",
      rating: 5,
      text: "Professional content creation and digital marketing services. They helped us reach our target audience effectively. Very happy with the results and the ROI we're seeing.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Vikram Singh",
      company: "Oh! Calcutta Restaurant Chain",
      role: "Owner",
      location: "Central Kolkata",
      rating: 5,
      text: "Their social media marketing campaigns are top-notch. We've seen tremendous growth in engagement and foot traffic. The team is knowledgeable and always available to help.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Meera Reddy",
      company: "Future Minds Institute",
      role: "Director",
      location: "New Town",
      rating: 5,
      text: "Excellent web development and SEO services. Our website ranks on the first page for all our target keywords. The entire process was smooth and professional.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Arjun Mehta",
      company: "Bengal Crafts E-commerce",
      role: "Founder",
      location: "Howrah",
      rating: 5,
      text: "The digital marketing strategies implemented by SAB DigiTech have been game-changing for our business. Revenue has increased by 250% and we continue to grow.",
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Kavita Joshi",
      company: "MediCare Healthcare Clinic",
      role: "Manager",
      location: "Bhowanipore",
      rating: 5,
      text: "Their ratings and reviews management service helped us build a strong online reputation. We now have a 4.9-star rating on Google with hundreds of positive reviews.",
      avatar: "https://images.unsplash.com/photo-1551836026-d5c2c5af91f9?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Rohit Verma",
      company: "Bengal Manufacturing Co.",
      role: "Marketing Head",
      location: "Belgharia",
      rating: 5,
      text: "Comprehensive digital solutions that actually work. From website development to content creation, every service exceeded our expectations. Truly a reliable partner.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
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
    },
  ];

  // Auto play testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const stats = [
    { value: "500+", label: "Happy Clients in Bengal" },
    { value: "1000+", label: "Successful Projects" },
    { value: "4.9/5", label: "Average Client Rating" },
    { value: "98%", label: "Client Satisfaction Rate" },
    { value: "50+", label: "Local Business Partners" },
    { value: "300%", label: "Average Growth Delivered" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      {/* Hero Section with Enhanced Animation */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${techBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-blue-600/90"></div>
          </div>
          
          {/* Animated Background Elements */}
          <motion.div 
            className="absolute top-20 right-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          />
          
          {/* Floating Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-300/50 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 mb-6"
              >
                <Quote className="h-8 w-8 text-white" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Testimonials</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                Success Stories from Kolkata & West Bengal's Leading Businesses
              </h2>
            </div>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 pt-8"
            >
              <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-white/90 text-sm">🏆 Best Digital Agency 2024</span>
              </div>
              <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-white/90 text-sm">⭐ 4.9/5 Google Rating</span>
              </div>
              <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-white/90 text-sm">📍 Serving Kolkata Since 2018</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Enhanced Stats Section with Animation */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                  {stat.label}
                </div>
                <motion.div 
                  className="h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mt-3 mx-auto"
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="text-blue-600">Success Stories</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hear from our satisfied clients across Kolkata and West Bengal
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Featured Testimonial Card */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Avatar and Rating */}
                    <div className="flex-shrink-0 text-center">
                      <div className="relative">
                        <img 
                          src={testimonials[activeIndex].avatar} 
                          alt={testimonials[activeIndex].name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                        {testimonials[activeIndex].isBengali && (
                          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs px-3 py-1 rounded-full">
                            বাংলা
                          </div>
                        )}
                      </div>
                      <div className="flex justify-center mt-4">
                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="text-xs text-blue-600 font-semibold mt-2">
                        {testimonials[activeIndex].location}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <Quote className="h-8 w-8 text-blue-200 mb-4" />
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        "{testimonials[activeIndex].text}"
                      </p>
                      
                      <div className="border-t border-blue-100 pt-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-bold text-xl text-gray-900">
                              {testimonials[activeIndex].name}
                            </div>
                            <div className="text-gray-600">
                              {testimonials[activeIndex].role} • {testimonials[activeIndex].company}
                            </div>
                          </div>
                          {testimonials[activeIndex].isBengali && (
                            <div className="hidden md:block">
                              <div className="text-sm text-gray-500">Kolkata Local Business</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl border border-gray-200 hover:bg-blue-50 transition-all"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-700" />
                </button>
                
                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.slice(0, 8).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveIndex(index);
                        setIsAutoPlaying(false);
                        setTimeout(() => setIsAutoPlaying(true), 10000);
                      }}
                      className={`w-3 h-3 rounded-full transition-all ${
                        activeIndex === index 
                          ? 'bg-blue-600 w-8' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl border border-gray-200 hover:bg-blue-50 transition-all"
                >
                  <ChevronRight className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              More <span className="text-blue-600">Happy Clients</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real feedback from businesses we've helped grow in Kolkata & West Bengal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover-lift border border-gray-200 hover:border-blue-300 transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  {/* Header with Avatar */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                      />
                      {testimonial.isBengali && (
                        <div className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs px-2 py-0.5 rounded-full">
                          বাংলা
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-blue-600">{testimonial.company}</div>
                      <div className="text-xs text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-6 w-6 text-blue-100" />
                    <p className="text-gray-700 text-sm leading-relaxed pl-4">
                      "{testimonial.text}"
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-xs text-gray-500">
                        {testimonial.isBengali ? 'Local Business' : 'Verified Client'}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bengali Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              কলকাতার স্থানীয় ব্যবসায়ীদের <span className="text-yellow-300">প্রতিক্রিয়া</span>
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              আমাদের স্থানীয় ব্যবসায়ীদের সাথে কাজ করার অভিজ্ঞতা
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials
              .filter(t => t.isBengali)
              .map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="h-full p-6 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                        />
                        <div className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full">
                          বাংলা
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-white/80">{testimonial.company}</div>
                        <div className="text-xs text-white/60">{testimonial.location}</div>
                      </div>
                    </div>

                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                      ))}
                    </div>

                    <p className="text-white/90 text-sm leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>

                    <div className="border-t border-white/20 pt-4">
                      <div className="text-sm text-white/70">{testimonial.role}</div>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Be the next satisfied client from Kolkata sharing their success story
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300">
                Start Your Digital Journey
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;