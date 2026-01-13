import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Sparkles, ChevronRight, Clock, Users, Target, Award, Star, Calendar, Phone, Mail, MessageSquare, Zap, TrendingUp, Shield, Globe, Smartphone, BarChart, Rocket, Crown, Code } from "lucide-react";
import techBackground from "@/assets/backgrounds/tech-network.jpg";

// Import service images
import webDevImg from "../assets/services/website-development.jpg";
import digitalMarketingImg from "../assets/services/digital-marketing.jpg";
import seoImg from "../assets/services/seo.jpg";
import contentImg from "../assets/services/content-creation.jpg";
import googleBusinessImg from "../assets/services/google-business.jpg";
import keywordImg from "../assets/services/keyword-promotion.jpg";
import reviewImg from "../assets/services/ratings-reviews.jpg";
import mediaImg from "../assets/services/media-editing.jpg";
import socialImg from "../assets/services/social-media.jpg";
import festivalImg from "../assets/services/media-editing.jpg";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  const serviceImages: Record<string, string> = {
    "website-development": webDevImg,
    "digital-marketing": digitalMarketingImg,
    "seo": seoImg,
    "content-creation": contentImg,
    "google-business": googleBusinessImg,
    "keyword-promotion": keywordImg,
    "ratings-reviews": reviewImg,
    "media-editing": mediaImg,
    "social-media": socialImg,
    "festival-banners": festivalImg,
  };

  const serviceIcons: Record<string, any> = {
    "website-development": Globe,
    "digital-marketing": TrendingUp,
    "seo": Target,
    "content-creation": MessageSquare,
    "google-business": Smartphone,
    "keyword-promotion": BarChart,
    "ratings-reviews": Star,
    "media-editing": Sparkles,
    "social-media": Users,
    "festival-banners": Calendar,
  };

  const services: Record<string, any> = {
    "website-development": {
      title: "Website Development Services",
      tagline: "Professional Website Design Company - Websites That Drive Results",
      description: "Best website development company in Kolkata - Transform your online presence with custom-built, responsive websites tailored to your business needs.",
      features: [
        "Responsive Design for All Devices",
        "SEO-Optimized Structure",
        "Fast Loading Speed",
        "Custom Features & Functionality",
        "Secure & Scalable Architecture",
        "Content Management System",
        "E-Commerce Integration",
        "Third-Party API Integration",
      ],
      benefits: [
        "Increase online visibility and reach",
        "Improve user engagement and conversions",
        "Build credibility and trust",
        "24/7 accessibility for customers",
        "Scalable growth platform",
        "Professional brand image",
      ],
      process: [
        { step: "Discovery", description: "Understanding your business goals and requirements", icon: Users },
        { step: "Design", description: "Creating wireframes and visual designs", icon: Sparkles },
        { step: "Development", description: "Building your website with latest technologies", icon: Code },
        { step: "Testing", description: "Rigorous quality assurance and testing", icon: Shield },
        { step: "Launch", description: "Deploying your website and monitoring performance", icon: Rocket },
        { step: "Support", description: "Ongoing maintenance and updates", icon: Phone },
      ],
      pricing: "Starting from ₹8,000 for static websites",
      packages: [
        {
          name: "Basic Website",
          price: "₹8,000 - ₹25,000",
          features: ["Up to 5 pages", "Responsive design", "Basic SEO", "Contact form", "1 month support"],
          recommended: false,
        },
        {
          name: "Business Website",
          price: "₹25,000 - ₹75,000",
          features: ["Up to 15 pages", "Advanced design", "Complete SEO", "CMS integration", "3 months support", "Analytics setup"],
          recommended: true,
        },
        {
          name: "E-Commerce",
          price: "₹50,000 - ₹150,000",
          features: ["Unlimited products", "Payment gateway", "Inventory management", "Customer accounts", "6 months support", "Marketing tools"],
          recommended: false,
        },
      ],
    },
    "digital-marketing": {
      title: "Digital Marketing Services",
      tagline: "Best Digital Marketing Agency - Strategic Campaigns for Maximum Impact",
      description: "Leading digital marketing company in Kolkata & West Bengal - Comprehensive strategies designed to maximize your online presence and drive growth.",
      features: [
        "Strategic Campaign Planning",
        "Multi-Channel Marketing",
        "Content Marketing",
        "Email Marketing Campaigns",
        "Conversion Rate Optimization",
        "Marketing Automation",
        "Analytics & Reporting",
        "Competitor Analysis",
      ],
      benefits: [
        "Reach wider audience effectively",
        "Generate quality leads consistently",
        "Build strong brand presence",
        "Measurable ROI tracking",
        "Cost-effective marketing",
        "Data-driven decision making",
      ],
      process: [
        { step: "Audit", description: "Analyzing current digital presence", icon: BarChart },
        { step: "Strategy", description: "Developing comprehensive marketing plan", icon: Target },
        { step: "Execution", description: "Implementing campaigns across channels", icon: Rocket },
        { step: "Optimization", description: "Continuous improvement based on data", icon: TrendingUp },
        { step: "Reporting", description: "Regular performance updates", icon: MessageSquare },
        { step: "Scaling", description: "Expanding successful campaigns", icon: Zap },
      ],
      pricing: "Starting from ₹15,000/month",
      packages: [
        {
          name: "Starter",
          price: "₹15,000/month",
          features: ["2 channels", "Basic analytics", "Monthly reports", "Email support"],
          recommended: false,
        },
        {
          name: "Professional",
          price: "₹35,000/month",
          features: ["4 channels", "Advanced analytics", "Weekly reports", "Dedicated manager", "A/B testing"],
          recommended: true,
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: ["All channels", "Custom strategy", "Daily reports", "Priority support", "Advanced automation"],
          recommended: false,
        },
      ],
    },
    // ... (keep other services with similar structure adding 'recommended' field)
  };

  const service = services[serviceId || "website-development"];
  const ServiceIcon = serviceIcons[serviceId || "website-development"];

  if (!service) {
    return <div>Service not found</div>;
  }

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
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

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

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
              backgroundImage: `url(${serviceImages[serviceId || "website-development"]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
          
          <motion.div 
            className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
            animate={floatingAnimation}
          />
          
          <motion.div 
            className="absolute bottom-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              y: [0, 15, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }
            }}
          />

          {/* Animated particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent rounded-full"
              style={{
                top: `${20 + i * 12}%`,
                left: `${10 + i * 15}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center space-y-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="relative inline-block">
              <Sparkles className="absolute -top-4 -left-4 h-8 w-8 text-accent animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <motion.div 
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-accent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>
            
            <motion.p 
              variants={fadeInUp}
              className="text-2xl text-white/90 leading-relaxed font-medium"
            >
              {service.tagline}
            </motion.p>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto"
            >
              {service.description}
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
            >
              <Button asChild variant="glass" size="xl" className="group">
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="bg-transparent text-white border-white/30 hover:bg-white/10">
                <Link to="/pricing" className="flex items-center gap-2">
                  View Pricing
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="pt-12"
            >
              <motion.div 
                className="w-32 h-1 bg-gradient-to-r from-accent via-white to-accent mx-auto rounded-full"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="py-16 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "98%", label: "Client Satisfaction", icon: Star },
              { value: "24/7", label: "Support Available", icon: Clock },
              { value: "50+", label: "Projects Completed", icon: Target },
              { value: "100%", label: "SEO Success Rate", icon: TrendingUp },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="text-center group"
                >
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
                <ServiceIcon className="h-5 w-5 text-accent" />
                <span className="text-accent font-medium">Key Features</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">
                What Makes Our <span className="gradient-text">Service</span> Stand Out
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine cutting-edge technology with proven strategies to deliver exceptional results
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
            >
              {service.features.map((feature: string, index: number) => (
                <motion.div key={index} variants={scaleIn}>
                  <Card
                    className="p-6 hover-lift border-2 hover:border-accent transition-all text-center group cursor-pointer relative overflow-hidden"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                    
                    <motion.div 
                      className="relative z-10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Check className="h-8 w-8 text-accent mx-auto mb-4" />
                    </motion.div>
                    
                    <p className="font-medium relative z-10 group-hover:text-accent transition-colors">
                      {feature}
                    </p>
                    
                    <motion.div 
                      className="absolute -right-2 -top-2 w-4 h-4 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={false}
                    />
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h2 className="text-4xl font-bold mb-8">
                  Why Choose <span className="gradient-text">This Service</span>
                </h2>
                <div className="space-y-6">
                  {service.benefits.map((benefit: string, index: number) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-xl bg-card hover:bg-card/80 transition-all cursor-pointer group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors"
                        whileHover={{ rotate: 5 }}
                      >
                        <ArrowRight className="h-5 w-5 text-accent" />
                      </motion.div>
                      <p className="text-lg group-hover:text-accent transition-colors">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div variants={fadeInRight} className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-primary shadow-3d overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute inset-8 rounded-2xl glass flex flex-col items-center justify-center p-8 text-center">
                    <Award className="h-20 w-20 text-white mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">Certified Excellence</h3>
                    <p className="text-white/80">
                      Our team consists of certified professionals with extensive industry experience
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A systematic approach to ensure quality and efficiency at every stage
              </p>
            </motion.div>

            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 transform -translate-y-1/2 hidden lg:block" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.process.map((step: any, index: number) => {
                  const StepIcon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      className="relative"
                    >
                      <Card
                        className="p-8 hover-lift border-2 hover:border-accent transition-all relative bg-gradient-to-b from-card to-card/80 group cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div 
                          className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-secondary flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-accent/30 z-20 group-hover:scale-110 transition-transform"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          {index + 1}
                        </motion.div>
                        
                        <div className="pt-8">
                          <motion.div 
                            className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors"
                            whileHover={{ scale: 1.1 }}
                          >
                            <StepIcon className="h-6 w-6 text-accent" />
                          </motion.div>
                          
                          <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                            {step.step}
                          </h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                        
                        <motion.div 
                          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={false}
                        >
                          <ChevronRight className="h-5 w-5 text-accent" />
                        </motion.div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
                <Crown className="h-5 w-5 text-accent" />
                <span className="text-accent font-medium">Pricing Plans</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Choose Your <span className="gradient-text">Plan</span>
              </h2>
              <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
                {service.pricing}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.packages.map((pkg: any, index: number) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="relative"
                  onMouseEnter={() => setSelectedPackage(index)}
                  onMouseLeave={() => setSelectedPackage(null)}
                >
                  <Card
                    className={`p-8 hover-lift transition-all relative overflow-hidden h-full ${
                      pkg.recommended 
                        ? 'border-2 border-accent shadow-2xl shadow-accent/20' 
                        : 'border-2 hover:border-accent'
                    }`}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {pkg.recommended && (
                      <motion.div 
                        className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-6 py-1 bg-gradient-accent text-white text-sm font-bold rounded-full"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: [0.8, 1, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Most Popular
                      </motion.div>
                    )}
                    
                    <AnimatePresence>
                      {selectedPackage === index && (
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </AnimatePresence>
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <div className="text-3xl font-bold text-primary mb-6">{pkg.price}</div>
                      
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature: string, fIndex: number) => (
                          <motion.li 
                            key={fIndex} 
                            className="flex items-start space-x-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: fIndex * 0.1 }}
                          >
                            <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      <Button 
                        asChild 
                        variant={pkg.recommended ? "hero" : "outline"} 
                        size="lg" 
                        className="w-full group"
                      >
                        <Link to="/contact" className="flex items-center justify-center gap-2">
                          Get Started
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
            animate={floatingAnimation}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
            animate={{
              y: [0, 15, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }
            }}
          />
          
          {/* Animated stars */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${20 + i * 10}%`,
                left: `${5 + i * 12}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 1.5 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Ready to Transform Your Business?
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/90"
            >
              Contact us today for a free consultation and custom quote
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild 
                variant="glass" 
                size="xl" 
                className="group bg-white text-primary hover:bg-white/90"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Schedule Consultation
                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="xl" 
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Us
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="pt-12"
            >
              <div className="text-white/60 text-sm">
                ⚡ Typically respond within 2 hours
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;