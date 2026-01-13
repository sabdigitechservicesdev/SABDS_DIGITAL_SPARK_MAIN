import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Award, Users, Sparkles, TrendingUp, Code, PenTool } from "lucide-react";
import techBackground from "@/assets/backgrounds/tech-network.jpg";

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
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
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const team = [
    { 
      role: "Web Designers", 
      count: "15+", 
      description: "Best website designers in Kolkata",
      icon: PenTool
    },
    { 
      role: "Developers", 
      count: "20+", 
      description: "Expert web developers in West Bengal",
      icon: Code
    },
    { 
      role: "Content Writers", 
      count: "10+", 
      description: "Professional content writers & copywriters",
      icon: PenTool
    },
    { 
      role: "SEO Experts", 
      count: "8+", 
      description: "Top SEO specialists in Kolkata",
      icon: TrendingUp
    },
  ];

  const expertise = [
    { 
      title: "Website Development", 
      description: "Custom static and dynamic websites tailored to your business needs",
      icon: Code
    },
    { 
      title: "Internet Marketing", 
      description: "Strategic campaigns to maximize your online presence",
      icon: TrendingUp
    },
    { 
      title: "SEO Services", 
      description: "Boost your search rankings and drive organic traffic",
      icon: TrendingUp
    },
    { 
      title: "Content Creation", 
      description: "Compelling narratives that resonate with your audience",
      icon: PenTool
    },
  ];

  return (
    <div className="min-h-screen font-montserrat font-semibold overflow-hidden">
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
              y: [0, 10, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center space-y-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="relative inline-block">
              <Sparkles className="absolute -top-4 -left-4 h-8 w-8 text-accent" />
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                About <span className="gradient-text bg-gradient-accent relative">
                  SAB DigiTech
                  <motion.div 
                    className="absolute -bottom-2 left-0 w-full h-1 bg-accent"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
              </h1>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
            >
              Best Digital Marketing Company in Howrah, Kolkata & West Bengal - 
              Your trusted digital transformation partner driving business growth
            </motion.h2>
            
            <motion.div 
              variants={fadeInUp}
              className="pt-8"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-white mx-auto rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <motion.div 
                className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Target className="h-5 w-5 text-accent" />
                <span className="text-accent font-medium">Our Mission</span>
              </motion.div>
              
              <motion.h2 
                className="text-4xl font-bold"
                variants={fadeInUp}
              >
                Leading Digital Marketing Company in Howrah, Kolkata & West Bengal
              </motion.h2>
              
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                variants={fadeInUp}
              >
                Based in Howrah, we are the best digital marketing company serving Kolkata and West Bengal. 
                We provide quality website development, SEO services, graphic design, and social media 
                marketing solutions.
              </motion.p>
              
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                variants={fadeInUp}
              >
                At SAB DigiTech Services, the top website design company in Kolkata, we partner with you 
                to generate more business through strategic web solutions, SEO optimization, and 
                comprehensive digital marketing services.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <motion.div 
                className="aspect-square rounded-2xl bg-gradient-primary shadow-3d"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              
              <motion.div 
                className="absolute inset-8 rounded-2xl glass flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Lightbulb className="h-32 w-32 text-white" />
                <motion.div 
                  className="absolute inset-0 rounded-2xl border-2 border-accent/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A capable team of experts always delivering unique solutions matching latest trends
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={scaleIn}>
                  <Card 
                    className="p-6 hover-lift border-2 hover:border-accent transition-all group cursor-pointer"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <Icon className="h-6 w-6 text-accent" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Expert <span className="gradient-text">Digital Marketing Team</span> in Kolkata
            </h2>
            <p className="text-lg text-muted-foreground">
              Best website designers, SEO experts, graphic designers, and content writers in West Bengal
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {team.map((member, index) => {
              const Icon = member.icon;
              return (
                <motion.div key={member.role} variants={scaleIn}>
                  <Card
                    className="p-8 text-center hover-lift border-2 hover:border-accent transition-all bg-gradient-primary text-white relative overflow-hidden group cursor-pointer"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <motion.div 
                      className="relative z-10"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="h-12 w-12 mx-auto mb-4 text-accent" />
                    </motion.div>
                    
                    <motion.div 
                      className="text-4xl font-bold mb-2 relative z-10"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {member.count}
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold mb-2 relative z-10">{member.role}</h3>
                    <p className="text-white/80 text-sm relative z-10">{member.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="text-center mb-16 space-y-4"
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                What We Do - <span className="gradient-text">Digital Marketing Excellence</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Best digital marketing company in Kolkata delivering website design, SEO, and social media marketing
              </p>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card 
                className="p-12 shadow-3d hover-lift relative overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
                
                <p className="text-lg text-center text-muted-foreground leading-relaxed relative z-10">
                  As the best digital marketing company in Kolkata and West Bengal, we specialize in 
                  website development, SEO services, graphic design, and social media marketing. 
                  We provide innovative ideas that give our clients the creative edge needed to establish 
                  their brands in the marketplace.
                </p>
                
                <motion.div 
                  className="mt-8 flex justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center space-x-4">
                    {[1, 2, 3].map((dot) => (
                      <motion.div
                        key={dot}
                        className="w-2 h-2 bg-accent rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: dot * 0.2
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Award className="h-16 w-16 text-accent mx-auto" />
            </motion.div>
            
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with the leading digital marketing agency in Kolkata and take your business to new heights
            </p>
            
            <motion.button
              className="px-8 py-3 bg-accent text-white rounded-full font-semibold hover:bg-accent/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
          </Card>
        </div>
      </motion.section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default About;