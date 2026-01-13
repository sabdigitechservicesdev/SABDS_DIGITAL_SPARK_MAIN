import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Sparkles, ChevronRight, Target, Shield, Clock, Zap, TrendingUp, Award, BadgeCheck, Users, Globe, Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import techBackground from "@/assets/backgrounds/tech-network.jpg";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("monthly");
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const packages = [
    {
      name: "Starter",
      price: "₹15,000",
      period: "/month",
      description: "Perfect for small businesses in Kolkata getting started with digital marketing",
      features: [
        "Professional Website Development",
        "SEO Setup & Optimization",
        "Google Business Profile Setup",
        "Social Media Management (2 Platforms)",
        "Monthly Analytics Report",
        "Email Support",
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
      icon: Target,
    },
    {
      name: "Professional",
      price: "₹35,000",
      period: "/month",
      description: "Best digital marketing package for growing businesses in West Bengal",
      features: [
        "Advanced Website Development & Design",
        "Complete SEO Management & Ranking",
        "Google Business Profile Optimization",
        "Social Media Marketing (4 Platforms)",
        "Professional Content Creation (8 Posts/Month)",
        "Strategic Keyword Promotion",
        "Reputation & Review Management",
        "Weekly Performance Analytics",
        "Priority Customer Support",
      ],
      popular: true,
      color: "from-purple-500 to-pink-500",
      icon: TrendingUp,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale operations",
      features: [
        "Custom Web Application",
        "Advanced Digital Marketing",
        "Complete SEO Strategy",
        "Multi-Platform Social Media",
        "Unlimited Content Creation",
        "Advanced Analytics & Reporting",
        "Dedicated Account Manager",
        "24/7 Premium Support",
        "Custom Solutions",
      ],
      popular: false,
      color: "from-orange-500 to-yellow-500",
      icon: Globe,
    },
  ];

  const services = [
    { name: "Website Development (Static)", price: "₹8,000 - ₹25,000", unit: "one-time", icon: Globe },
    { name: "Website Development (Dynamic)", price: "₹25,000 - ₹75,000", unit: "one-time", icon: Zap },
    { name: "E-Commerce Website", price: "₹50,000 - ₹150,000", unit: "one-time", icon: ShoppingCart },
    { name: "SEO Services", price: "₹10,000 - ₹30,000", unit: "per month", icon: Target },
    { name: "Social Media Marketing", price: "₹8,000 - ₹25,000", unit: "per month", icon: Users },
    { name: "Content Creation", price: "₹500 - ₹2,000", unit: "per piece", icon: PenTool },
    { name: "Google Business Setup", price: "₹5,000 - ₹15,000", unit: "one-time", icon: BadgeCheck },
    { name: "Review Management", price: "₹5,000 - ₹12,000", unit: "per month", icon: Star },
    { name: "Image/Video Editing", price: "₹500 - ₹3,000", unit: "per piece", icon: Sparkles },
  ];

  const comboPackages = [
    {
      name: "Combo 1 - 3 Years",
      description: "GMB Promotion + Static Website",
      price: "₹18,000",
      originalPrice: "₹21,000",
      savings: "₹3,000",
      features: [
        "Complete GMB setup & 3-year management",
        "Professional static website",
        "Free domain & hosting for 1 year",
        "Weekly GMB updates & festival posts",
        "Review & rating management",
      ],
      color: "from-blue-600 to-cyan-500",
      popular: false,
    },
    {
      name: "Combo 2 - 5 Years",
      description: "GMB Promotion + Static Website",
      price: "₹25,000",
      originalPrice: "₹32,000",
      savings: "₹7,000",
      features: [
        "Complete GMB setup & 5-year management",
        "Professional static website",
        "Free domain & hosting for 1 year",
        "Weekly GMB updates & festival posts (5 years)",
        "Priority support & long-term growth",
      ],
      color: "from-purple-600 to-pink-500",
      popular: true,
    },
  ];

  const benefits = [
    { icon: Shield, text: "100% Satisfaction Guarantee" },
    { icon: Clock, text: "24/7 Support Available" },
    { icon: Award, text: "Certified Professionals" },
    { icon: Zap, text: "Fast Turnaround Time" },
  ];

  const plans = [
    { label: "Monthly", value: "monthly" },
    { label: "Quarterly (Save 10%)", value: "quarterly" },
    { label: "Yearly (Save 20%)", value: "yearly" },
  ];

  return (
    <div className="min-h-screen font-montserrat overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
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
          
          <motion.div 
            className="absolute top-20 right-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"
            animate={floatingAnimation}
          />
          
          <motion.div 
            className="absolute bottom-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
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
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-300/50 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.div variants={fadeInUp} className="relative inline-block">
              <Tag className="absolute -top-4 -left-4 h-8 w-8 text-cyan-300" />
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Pricing</span>
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
              className="text-xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto"
            >
              Affordable digital marketing packages in Kolkata - Choose the perfect plan for your business growth
            </motion.h2>

            {/* Benefits Bar */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-6 pt-8"
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                  >
                    <Icon className="h-4 w-4 text-cyan-300" />
                    <span className="text-white/90 text-sm">{benefit.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto"
          >
            <Card className="p-2 bg-white/80 backdrop-blur-sm border-2 border-blue-100">
              <div className="flex rounded-lg bg-blue-50 p-1">
                {plans.map((plan) => (
                  <button
                    key={plan.value}
                    onClick={() => setActiveTab(plan.value)}
                    className={`flex-1 py-3 px-4 rounded-md text-sm font-semibold transition-all ${
                      activeTab === plan.value
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {plan.label}
                  </button>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Package Plans */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full mb-4">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <span className="text-blue-600 font-medium">Growth Packages</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Choose Your <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Growth Plan</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Flexible plans designed to scale with your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
              {/* Animated Background Element */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-orange-500/5 rounded-3xl blur-3xl"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {packages.map((pkg, index) => {
                const Icon = pkg.icon;
                return (
                  <motion.div
                    key={pkg.name}
                    variants={scaleIn}
                    className="relative"
                    onMouseEnter={() => setSelectedPackage(index)}
                    onMouseLeave={() => setSelectedPackage(null)}
                  >
                    <Card
                      className={`relative overflow-hidden h-full transition-all duration-300 border-2 hover:shadow-2xl ${
                        pkg.popular
                          ? `border-transparent bg-gradient-to-br ${pkg.color} text-white shadow-2xl scale-105`
                          : 'border-gray-200 hover:border-blue-300 bg-white'
                      }`}
                      whileHover={{ y: -10 }}
                    >
                      <AnimatePresence>
                        {selectedPackage === index && (
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                      </AnimatePresence>

                      {pkg.popular && (
                        <motion.div 
                          className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-1 text-sm font-semibold rounded-bl-lg flex items-center space-x-2"
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <Star className="h-4 w-4 fill-white" />
                          <span>Most Popular</span>
                        </motion.div>
                      )}

                      <div className="p-8 space-y-8 relative z-10">
                        {/* Package Header */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className={`text-2xl font-bold ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                                {pkg.name}
                              </h3>
                              <p className={`text-sm ${pkg.popular ? 'text-white/80' : 'text-gray-600'} mt-1`}>
                                {pkg.description}
                              </p>
                            </div>
                            <motion.div 
                              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                                pkg.popular ? 'bg-white/20' : 'bg-blue-50'
                              }`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Icon className={`h-6 w-6 ${pkg.popular ? 'text-white' : 'text-blue-600'}`} />
                            </motion.div>
                          </div>

                          {/* Price */}
                          <div className="space-y-2">
                            <div className="flex items-baseline space-x-2">
                              <span className={`text-4xl font-bold ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                                {pkg.price}
                              </span>
                              <span className={`${pkg.popular ? 'text-white/70' : 'text-gray-600'}`}>
                                {pkg.period}
                              </span>
                            </div>
                            {activeTab === "quarterly" && (
                              <div className="text-sm text-green-600 font-medium">
                                Save 10% with quarterly billing
                              </div>
                            )}
                            {activeTab === "yearly" && (
                              <div className="text-sm text-green-600 font-medium">
                                Save 20% with yearly billing
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-4">
                          {pkg.features.map((feature, idx) => (
                            <motion.li
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + idx * 0.05 }}
                              className="flex items-start space-x-3"
                            >
                              <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                                pkg.popular ? 'text-cyan-300' : 'text-blue-500'
                              }`} />
                              <span className={`text-sm ${pkg.popular ? 'text-white/90' : 'text-gray-700'}`}>
                                {feature}
                              </span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* CTA Button */}
                        <Button
                          asChild
                          variant={pkg.popular ? "hero" : "outline"}
                          size="lg"
                          className={`w-full group ${
                            pkg.popular ? 'bg-white text-blue-600 hover:bg-white/90' : ''
                          }`}
                        >
                          <Link to="/contact" className="flex items-center justify-center gap-2">
                            Get Started
                            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Meter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Maximum Value</h3>
                  <p className="text-gray-600">Professional package gives 3x more features at 2.3x price</p>
                </div>
                <div className="flex-1 max-w-md">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Starter</span>
                      <span>Value Index: 65</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: "65%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3 mt-6">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Professional</span>
                      <span>Value Index: 92</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: "92%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Combo Packages */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-blue-100 mb-4">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span className="text-blue-600 font-medium">Long-Term Value</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Special <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Long-Term Packages</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Best value combo packages from the leading digital marketing company in Kolkata
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {comboPackages.map((combo, index) => (
                <motion.div
                  key={combo.name}
                  variants={scaleIn}
                  className="relative"
                >
                  <Card 
                    className={`relative overflow-hidden h-full border-2 transition-all hover:shadow-2xl ${
                      combo.popular 
                        ? `border-transparent bg-gradient-to-br ${combo.color} text-white` 
                        : 'border-blue-200 bg-white'
                    }`}
                    whileHover={{ y: -5 }}
                  >
                    {combo.popular && (
                      <motion.div 
                        className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-1 text-sm font-semibold rounded-bl-lg flex items-center space-x-2"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Star className="h-4 w-4 fill-white" />
                        <span>Best Value</span>
                      </motion.div>
                    )}

                    <div className="p-8 space-y-8 relative z-10">
                      {/* Savings Badge */}
                      <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${
                        combo.popular ? 'bg-white/20' : 'bg-blue-50'
                      }`}>
                        <span className={`font-bold ${combo.popular ? 'text-yellow-300' : 'text-blue-600'}`}>
                          Save {combo.savings}
                        </span>
                      </div>

                      {/* Package Info */}
                      <div className="space-y-4">
                        <h3 className={`text-2xl font-bold ${combo.popular ? 'text-white' : 'text-gray-900'}`}>
                          {combo.name}
                        </h3>
                        <p className={combo.popular ? 'text-white/80' : 'text-gray-600'}>
                          {combo.description}
                        </p>
                      </div>

                      {/* Pricing */}
                      <div className="space-y-2">
                        <div className="flex items-baseline space-x-4">
                          <span className={`text-4xl font-bold ${combo.popular ? 'text-white' : 'text-gray-900'}`}>
                            {combo.price}
                          </span>
                          <span className={`line-through ${combo.popular ? 'text-white/60' : 'text-gray-500'}`}>
                            {combo.originalPrice}
                          </span>
                        </div>
                        <div className={`text-sm ${combo.popular ? 'text-cyan-300' : 'text-green-600'} font-medium`}>
                          {index === 0 ? '14% OFF' : '22% OFF'} • Long-term savings
                        </div>
                      </div>

                      {/* Features */}
                      <ul className="space-y-4">
                        {combo.features.map((feature, idx) => (
                          <li key={feature} className="flex items-start space-x-3">
                            <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                              combo.popular ? 'text-cyan-300' : 'text-blue-500'
                            }`} />
                            <span className={combo.popular ? 'text-white/90' : 'text-gray-700'}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Button
                        asChild
                        variant={combo.popular ? "hero" : "outline"}
                        size="lg"
                        className={`w-full group ${
                          combo.popular ? 'bg-white text-blue-600 hover:bg-white/90' : ''
                        }`}
                      >
                        <Link to="/contact" className="flex items-center justify-center gap-2">
                          {combo.popular ? 'Get Best Value' : 'Get This Deal'}
                          <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Individual Services */}
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
                <Tag className="h-5 w-5 text-blue-600" />
                <span className="text-blue-600 font-medium">À La Carte Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Individual <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Need specific services? We've got you covered
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.name}
                    variants={scaleIn}
                    className="group"
                  >
                    <Card className="h-full p-6 hover-lift border-2 border-gray-100 hover:border-blue-300 transition-all duration-300 bg-white/90 backdrop-blur-sm">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                <Icon className="h-5 w-5 text-blue-600" />
                              </div>
                              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                                {service.name}
                              </h3>
                            </div>
                            <div className="flex items-baseline space-x-2 pl-13">
                              <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                              <span className="text-sm text-gray-500">/{service.unit}</span>
                            </div>
                          </div>
                        </div>
                        
                        <Button 
                          asChild 
                          variant="outline" 
                          size="sm" 
                          className="w-full group/btn"
                        >
                          <Link to="/contact" className="flex items-center justify-center gap-2">
                            Learn More
                            <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card className="p-12 bg-gradient-to-r from-white to-blue-50 border-2 border-blue-100 shadow-xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-6"
              >
                <Sparkles className="h-16 w-16 text-blue-500" />
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Questions About Pricing?
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                We understand choosing the right plan can be tricky. Let us help you find the perfect solution for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  asChild 
                  variant="hero" 
                  size="xl"
                  className="group"
                >
                  <Link to="/contact" className="flex items-center gap-3">
                    <span>Schedule Free Consultation</span>
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline" 
                  size="xl"
                >
                  <Link to="/faq">View FAQ</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Start Growing</span>?
            </h2>
            
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join hundreds of successful businesses in Kolkata who trust us with their digital growth
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild 
                variant="hero" 
                size="xl"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-2xl hover:shadow-cyan-500/30"
              >
                <Link to="/contact">Get Started Today</Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/testimonials">See Client Results</Link>
              </Button>
            </div>
            
            <motion.div 
              className="mt-12 pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-white/60 text-sm">
                ⚡ All plans come with a 30-day money-back guarantee
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FloatingContact />
      <Footer />
    </div>
  );
};

// Add missing icon components
const ShoppingCart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const PenTool = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

export default Pricing;