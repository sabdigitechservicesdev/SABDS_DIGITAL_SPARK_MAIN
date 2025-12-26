import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Users,
  TrendingUp,
  BookOpen,
  Heart,
  Zap,
  BarChart,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

const WhyChooseUs = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const pillars = [
    {
      icon: Users,
      title: "Customer Savvy",
      description: "As the best digital marketing company in Kolkata, we understand customer needs and build effective, user-centric campaigns.",
    },
    {
      icon: TrendingUp,
      title: "Growth & Revenue",
      description: "We understand that the ultimate goal is to drive tangible business growth, user engagement, and increased revenue.",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "We constantly adapt to marketing shifts, ensuring access to the latest and most effective digital innovations.",
    },
    {
      icon: Heart,
      title: "Passionate Team",
      description: "Our creative, techno-savvy individuals genuinely love marketing, launching campaigns with unwavering dedication.",
    },
    {
      icon: Zap,
      title: "Digital Expertise",
      description: "Expert website designers and SEO specialists in West Bengal providing constant monitoring and implementation for your brand success.",
    },
    {
      icon: BarChart,
      title: "Data-Driven Insights",
      description: "Measurement and analytics are fundamental, ensuring every campaign is optimized for maximum impact and ROI.",
    },
  ];

  const services = [
    {
      id: "01",
      title: "Brand Identity",
      description: "We create strong, consistent brand identities that resonate with your audience and build long-term trust.",
      points: [
        "Logo & Visual Identity",
        "Brand Guidelines",
        "Brand Strategy",
        "Voice & Tone Development"
      ]
    },
    {
      id: "02",
      title: "UX / UI Design",
      description: "User-focused interface design that improves usability, engagement, and conversion rates.",
      points: [
        "User Research & Testing",
        "Wireframing & Prototyping",
        "Responsive Design",
        "Design Systems"
      ]
    },
    {
      id: "03",
      title: "App Development",
      description: "Scalable web and mobile application development tailored to your business goals.",
      points: [
        "Custom Web Applications",
        "Mobile App Development",
        "API Integration",
        "Performance Optimization"
      ]
    },
    {
      id: "04",
      title: "Digital Marketing",
      description: "Data-driven marketing strategies designed to generate traffic, leads, and revenue growth.",
      points: [
        "SEO & SEM Strategies",
        "Social Media Marketing",
        "Content Marketing",
        "Analytics & Reporting"
      ]
    },
  ];

  const strengths = [
    {
      title: "Digital Expertise",
      description: "Constant monitoring, analysis, and implementation to establish your business as a leading brand.",
    },
    {
      title: "Data-Driven Insights",
      description: "Every marketing campaign is optimized for maximum impact and ROI through analytics.",
    },
    {
      title: "Emphasis on Storytelling",
      description: "We craft compelling narratives that resonate deeply with consumers and drive engagement.",
    },
    {
      title: "Design Orientation",
      description: "Thoughtful design increases campaign effectiveness and enhances content consumption.",
    },
  ];

  return (
    <section className="relative  overflow-hidden font-montserrat pb-10">
      {/* Background Gradient Elements */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50/80" /> */}
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-r from-blue-100/40 to-cyan-100/30 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-r from-indigo-100/30 to-purple-100/20 rounded-full blur-3xl animate-float-slow delay-1000" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(90deg, transparent 98%, #3b82f6 100%),
                           linear-gradient(0deg, transparent 98%, #3b82f6 100%)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-5 transition-all duration-500 hover:shadow-sm">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse-slow" />
            <span className="text-sm font-medium text-blue-700 tracking-wide">
              WHY CHOOSE US
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
            Our Approach & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Core Strengths</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-extrabold">
            Leading digital marketing agency in Kolkata with proven expertise in creating impactful digital solutions
          </p>
        </div>

        {/* Main Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden backdrop-blur-sm bg-white/95">
          <div className="p-6 md:p-10 lg:p-12">
            {/* Pillars Section */}
            <div className="mb-16 md:mb-20">
              <div className="mb-10 md:mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Our Core Principles
                </h3>
                <p className="text-gray-600 md:text-lg">
                  The foundation that drives our success as Kolkata&apos;s leading digital agency
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {pillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  
                  return (
                    <Card
                      key={index}
                      className="group relative p-6 md:p-7 border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:shadow-lg overflow-hidden"
                    >
                      {/* Hover gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-50/0 group-hover:from-blue-50/20 group-hover:via-cyan-50/10 group-hover:to-blue-50/20 transition-all duration-500" />
                      
                      {/* Animated border */}
                      <div className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-blue-100 transition-all duration-500" />
                      
                      <div className="relative">
                        <div className="flex items-start gap-5 mb-5">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center group-hover:from-blue-100 group-hover:to-cyan-100 transition-all duration-500 shadow-sm">
                              <Icon className="h-6 w-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-500" />
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-sm font-medium text-gray-500">
                                0{index + 1}
                              </span>
                              <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
                            </div>
                            <h4 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-500">
                              {pillar.title}
                            </h4>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed transition-colors duration-500 group-hover:text-gray-700">
                          {pillar.description}
                        </p>
                        
                        {/* Animated indicator */}
                        <div className="mt-6 pt-5 border-t border-gray-100 group-hover:border-blue-100 transition-colors duration-500">
                          <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-700 ease-out" />
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Services Section */}
            <div className="mb-16 md:mb-20">
              <div className="mb-10 md:mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Our Digital Services
                </h3>
                <p className="text-gray-600 md:text-lg">
                  Comprehensive solutions tailored to drive your business growth
                </p>
              </div>
              
              <div className="space-y-4 md:space-y-5">
                {services.map((service, index) => {
                  const isActive = activeService === index;
                  
                  return (
                    <div
                      key={service.id}
                      className="group relative border border-gray-200 rounded-xl md:rounded-2xl hover:border-blue-300 transition-all duration-500 overflow-hidden hover:shadow-lg"
                      onMouseEnter={() => setActiveService(index)}
                      onMouseLeave={() => setActiveService(null)}
                    >
                      {/* Hover gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-blue-50/0 to-cyan-50/0 group-hover:from-blue-50/10 group-hover:to-cyan-50/5 transition-all duration-500 ${isActive ? 'from-blue-50/10 to-cyan-50/5' : ''}`} />
                      
                      <div className="relative p-6 md:p-8 cursor-pointer">
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                          <div className="flex items-start gap-6">
                            <div className="flex-shrink-0">
                              <span className="text-3xl md:text-4xl font-bold text-gray-300 group-hover:text-blue-300 transition-colors duration-500">
                                {service.id}
                              </span>
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                <div>
                                  <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-500">
                                    {service.title}
                                  </h4>
                                  <p className="text-gray-600 text-sm md:text-base mb-5 group-hover:text-gray-700 transition-colors duration-500">
                                    {service.description}
                                  </p>
                                </div>
                                
                                <ChevronRight 
                                  className={`h-5 w-5 text-gray-400 transition-all duration-500 flex-shrink-0 ${isActive ? 'rotate-90 text-blue-500' : 'group-hover:text-blue-400'}`}
                                />
                              </div>
                              
                              {/* Expandable Points */}
                              <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                <div className="pt-5 border-t border-gray-100 group-hover:border-blue-100 transition-colors duration-500">
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.points.map((point, i) => (
                                      <div key={i} className="flex items-center gap-3 text-gray-700 text-sm md:text-base">
                                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-500 flex-shrink-0" />
                                        <span>{point}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Animated progress bar */}
                      <div className="px-6 md:px-8 pb-4 md:pb-6">
                        <div className={`h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-700 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-1/2'}`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Strengths Section */}
            <div className="mb-10">
              <div className="mb-10 md:mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  What Sets Us Apart
                </h3>
                <p className="text-gray-600 md:text-lg">
                  Key strengths that make us the preferred choice in Kolkata
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                {strengths.map((strength, index) => (
                  <div
                    key={index}
                    className="group relative p-6 md:p-7 border border-gray-200 rounded-xl md:rounded-2xl hover:border-blue-300 transition-all duration-500 hover:shadow-lg overflow-hidden"
                  >
                    {/* Hover background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-cyan-50/0 group-hover:from-blue-50/10 group-hover:to-cyan-50/5 transition-all duration-500" />
                    
                    <div className="relative">
                      <div className="flex items-start gap-5">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center group-hover:from-blue-100 group-hover:to-cyan-100 transition-all duration-500">
                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform duration-500" />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-500">
                            {strength.title}
                          </h4>
                          <p className="text-gray-600 text-sm md:text-base group-hover:text-gray-700 transition-colors duration-500">
                            {strength.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Animated indicator */}
                      <div className="mt-6 pt-5 border-t border-gray-100 group-hover:border-blue-100 transition-colors duration-500">
                        <div className="w-6 h-0.5 md:h-1 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-700 ease-out" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 md:mt-20 pt-12 md:pt-14 border-t border-gray-200 text-center">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-5">
                Ready to Elevate Your Digital Presence?
              </h4>
              <p className="text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto text-base md:text-lg">
                Partner with Kolkata&apos;s leading digital marketing agency and achieve your business goals
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                <button className="group relative px-8 py-3.5 md:px-10 md:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:shadow-xl transition-all duration-500 overflow-hidden shadow-md hover:shadow-blue-500/30">
                  <span className="relative z-10">
                    Start Your Project
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
                
                <button className="px-8 py-3.5 md:px-10 md:py-4 rounded-xl bg-white border border-gray-300 text-gray-700 font-medium hover:border-blue-400 hover:text-blue-600 hover:shadow-md transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 0.3;
          }
          50% { 
            transform: translate(30px, -20px) scale(1.05); 
            opacity: 0.4;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { 
            opacity: 1; 
          }
          50% { 
            opacity: 0.7; 
          }
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        /* Smooth transitions */
        .transition-all {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Responsive optimizations */
        @media (max-width: 640px) {
          .backdrop-blur-sm {
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;