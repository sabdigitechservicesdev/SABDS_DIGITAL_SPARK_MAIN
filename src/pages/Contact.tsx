import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageCircle, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  MessageSquare,
  Sparkles,
  ChevronRight,
  Globe,
  Zap,
  Users
} from "lucide-react";
import { FaGoogle, FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";
import techBackground from "@/assets/backgrounds/tech-network.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const phoneNumber = "6295008944";

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    }
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
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.5,
        ease: "backOut"
      } 
    }
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const rotateAnimation = {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  };

  // Social Links Data
  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/profile.php?id=61583917328891", 
      label: "Facebook", 
     
      delay: 0.1
    },
    { 
      icon: Twitter, 
      href: "https://x.com/SAB_Digitech", 
      label: "Twitter/X", 
      
      delay: 0.2
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/sabds25?igsh=MXgzd21nZnA4dm92NA==", 
      label: "Instagram", 
      
      delay: 0.3
    },
    { 
      icon: FaGoogle, 
      href: "https://share.google/K4VfY86diUCMY45en", 
      label: "Google", 
      
      delay: 0.4
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/company/sab-digitech-services/", 
      label: "LinkedIn", 
      
      delay: 0.5
    },
    { 
      icon: Youtube, 
      href: "#", 
      label: "YouTube", 
      
      delay: 0.6
    },
    { 
      icon: FaWhatsapp, 
      href: `https://wa.me/91${phoneNumber}`, 
      label: "WhatsApp", 
      
      delay: 0.7
    },
  ];

  // Contact Cards Data
  const contactCards = [
    {
      icon: Phone,
      title: "Phone",
      content: (
        <a href="tel:6295008944" className="text-white/90 hover:text-white transition-colors duration-300 text-lg font-medium group">
          6295008944
          <ChevronRight className="inline-block ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 translate-x-[-5px] group-hover:translate-x-0 transition-all duration-300" />
        </a>
      ),
      delay: 0.1
    },
    {
      icon: Mail,
      title: "Email",
      content: (
        <a
          href="mailto:sabdigitechservices@gmail.com"
          className="text-white/90 hover:text-white transition-colors duration-300 break-all font-medium group"
        >
          sabdigitechservices@gmail.com
          <ChevronRight className="inline-block ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 translate-x-[-5px] group-hover:translate-x-0 transition-all duration-300" />
        </a>
      ),
      delay: 0.2
    },
    {
      icon: MapPin,
      title: "Location",
      content: (
        <p className="text-white/90 font-medium group">
          Arupara Road, G.I.P. Colony,<br />Jagacha, Howrah, 711112<br />West Bengal, India
          <ChevronRight className="inline-block ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 translate-x-[-5px] group-hover:translate-x-0 transition-all duration-300" />
        </p>
      ),
      delay: 0.3
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              backgroundImage: `url(${techBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
          
          <motion.div 
            className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
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
                delay: 0.5
              }
            }}
          />

          {/* Animated particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.sin(i) * 50, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{
                left: `${10 + i * 10}%`,
                top: `${30 + i * 5}%`,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center space-y-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="relative inline-block">
              <Sparkles className="absolute -top-4 -left-4 h-8 w-8 text-accent animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Get in <span className="gradient-text bg-gradient-accent relative">
                  Touch
                  <motion.div 
                    className="absolute -bottom-2 left-0 w-full h-1 bg-accent"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
              </h1>
              <Sparkles className="absolute -top-4 -right-4 h-8 w-8 text-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
            >
              Contact the best digital marketing company in Howrah & Kolkata - 
              Ready to transform your digital presence
            </motion.h2>

            {/* Social Links Section */}
            <motion.div 
              className="pt-12"
              variants={fadeInUp}
            >
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-white mx-auto mb-8 rounded-full" />
              
              <h3 className="text-white/80 mb-6 text-lg font-medium">
                Connect with us
              </h3>
              
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: social.delay,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div 
                        className="w-14 h-14 rounded-2xl backdrop-blur-sm bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300"
                        style={{ border: `2px solid ${social.color}20` }}
                      >
                        <Icon 
                          className="h-6 w-6 text-white" 
                          style={{ color: social.color }}
                        />
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gray-900/90 backdrop-blur-sm text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap">
                        {social.label}
                        <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900/90"></div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div 
                  key={card.title}
                  variants={scaleIn}
                  custom={index}
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="p-8 text-center bg-gradient-to-br from-primary/90 to-accent/90 text-white border-0 shadow-2xl hover:shadow-3d transition-all duration-300 cursor-pointer group">
                      <motion.div 
                        className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm"
                        animate={pulseAnimation}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="h-10 w-10 text-white" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                      <div className="text-white/80 group-hover:text-white transition-colors duration-300">
                        {card.content}
                      </div>
                      
                      <motion.div 
                        className="mt-6 h-1 bg-white/20 rounded-full overflow-hidden"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                      >
                        <div className="h-full bg-white w-full origin-left" />
                      </motion.div>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form Section */}
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-8 md:p-12 shadow-3d border-0 relative overflow-hidden">
                {/* Background decorative elements */}
                <motion.div 
                  className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"
                  animate={rotateAnimation}
                />
                
                <motion.div 
                  className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl"
                  animate={{
                    y: [0, -20, 0],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />

                <div className="relative z-10">
                  <motion.div 
                    className="text-center mb-10"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.h2 
                      className="text-4xl font-bold mb-4"
                      variants={fadeInUp}
                    >
                      Send us a <span className="gradient-text bg-gradient-accent">Message</span>
                    </motion.h2>
                    <motion.p 
                      className="text-lg text-muted-foreground max-w-2xl mx-auto"
                      variants={fadeInUp}
                    >
                      Fill out the form below and our experts will get back to you within 24 hours
                    </motion.p>
                  </motion.div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-2 gap-8"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {[
                        { id: "name", label: "Name *", placeholder: "Your name" },
                        { id: "email", label: "Email *", placeholder: "your@email.com", type: "email" },
                        { id: "phone", label: "Phone", placeholder: "Your phone number", type: "tel" },
                        { id: "subject", label: "Subject *", placeholder: "How can we help?" }
                      ].map((field, index) => (
                        <motion.div 
                          key={field.id}
                          className="space-y-3"
                          variants={fadeInUp}
                          custom={index}
                        >
                          <label htmlFor={field.id} className="text-sm font-medium flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                            {field.label}
                          </label>
                          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Input
                              id={field.id}
                              name={field.id}
                              type={field.type || "text"}
                              value={formData[field.id as keyof typeof formData]}
                              onChange={handleChange}
                              required={field.label.includes('*')}
                              placeholder={field.placeholder}
                              className="h-14 border-2 border-gray-200 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                            />
                          </motion.div>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div 
                      className="space-y-3"
                      variants={fadeInUp}
                    >
                      <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                        Message *
                      </label>
                      <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us about your project, goals, and timeline..."
                          className="min-h-[180px] border-2 border-gray-200 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none"
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        variant="cta" 
                        size="lg" 
                        className="w-full h-14 text-lg rounded-xl group"
                      >
                        <span className="flex items-center justify-center gap-3">
                          Send Message
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <Send className="h-5 w-5" />
                          </motion.div>
                        </span>
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <motion.a
          href={`https://wa.me/91${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-16 h-16 bg-[#25D366] text-white rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group-hover:shadow-3d transition-all duration-300">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <MessageCircle className="w-7 h-7 relative z-10" />
            
            {/* Pulsing effect */}
            <motion.div
              className="absolute inset-0 border-2 border-[#25D366] rounded-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 px-4 py-3 bg-gray-900/95 backdrop-blur-sm text-white text-sm font-medium rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap top-1/2 transform -translate-y-1/2">
            Chat on WhatsApp
            <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-900/95"></div>
          </div>
        </motion.a>

        {/* Call Button */}
        <motion.a
          href={`tel:+91${phoneNumber}`}
          className="group relative"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.7, type: "spring" }}
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent text-white rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group-hover:shadow-3d transition-all duration-300">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <Phone className="w-7 h-7 relative z-10" />
            
            {/* Pulsing effect */}
            <motion.div
              className="absolute inset-0 border-2 border-primary rounded-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 px-4 py-3 bg-gray-900/95 backdrop-blur-sm text-white text-sm font-medium rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap top-1/2 transform -translate-y-1/2">
            Call Now
            <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-900/95"></div>
          </div>
        </motion.a>

        {/* Email Button */}
        <motion.a
          href="mailto:sabdigitechservices@gmail.com"
          className="group relative"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.9, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group-hover:shadow-3d transition-all duration-300">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <Mail className="w-7 h-7 relative z-10" />
            
            {/* Pulsing effect */}
            <motion.div
              className="absolute inset-0 border-2 border-blue-500 rounded-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 px-4 py-3 bg-gray-900/95 backdrop-blur-sm text-white text-sm font-medium rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap top-1/2 transform -translate-y-1/2">
            Email Us
            <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-900/95"></div>
          </div>
        </motion.a>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;