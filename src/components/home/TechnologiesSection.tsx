import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import ReactLogo from "@/assets/tech-logos/react.svg";
import NextjsLogo from "@/assets/tech-logos/Nextjs.svg";
import NodejsLogo from "@/assets/tech-logos/Nodejs.svg";
import WordPressLogo from "@/assets/tech-logos/WordPress.svg";
import MySqlLogo from "@/assets/tech-logos/mysql.svg";
import AndroidLogo from "@/assets/tech-logos/android.svg";
import GoogleAdsLogo from "@/assets/tech-logos/google-ads.svg";
import SeoToolsLogo from "@/assets/tech-logos/seo-tools.svg";
import SocialMediaLogo from "@/assets/tech-logos/social-media.svg";
import AdobeSuiteLogo from "@/assets/tech-logos/adobe.svg";
import GoogleAnalyticsLogo from "@/assets/tech-logos/google-analytics.svg";

const TechnologiesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState("All");

  const technologies = [
    { 
      name: "React", 
      category: "Frontend", 
      color: "#61DAFB",
      description: "JavaScript library for modern user interfaces",
      logo: ReactLogo
    },
    { 
      name: "Next.js", 
      category: "Framework", 
      color: "#000000",
      description: "Full-stack React framework",
      logo: NextjsLogo
    },
    { 
      name: "Node.js", 
      category: "Backend", 
      color: "#339933",
      description: "JavaScript runtime for servers",
      logo: NodejsLogo
    },
    { 
      name: "WordPress", 
      category: "CMS", 
      color: "#21759B",
      description: "Popular content management system",
      logo: WordPressLogo
    },
    { 
      name: "MySQL", 
      category: "Database", 
      color: "#4479A1",
      description: "Relational database system",
      logo: MySqlLogo
    },
    { 
      name: "Android", 
      category: "Mobile", 
      color: "#3DDC84",
      description: "Native mobile development",
      logo: AndroidLogo
    },
    { 
      name: "Google Ads", 
      category: "Marketing", 
      color: "#4285F4",
      description: "Advertising platform",
      logo: GoogleAdsLogo
    },
    { 
      name: "SEO Tools", 
      category: "Analytics", 
      color: "#FF6B35",
      description: "Search optimization tools",
      logo: SeoToolsLogo
    },
    { 
      name: "Social Media", 
      category: "Marketing", 
      color: "#E4405F",
      description: "Social media marketing",
      logo: SocialMediaLogo
    },
    { 
      name: "Adobe Suite", 
      category: "Design", 
      color: "#FF0000",
      description: "Creative design tools",
      logo: AdobeSuiteLogo
    },
    { 
      name: "Google Analytics", 
      category: "Analytics", 
      color: "#FFC107",
      description: "User behavior analysis",
      logo: GoogleAnalyticsLogo
    },
  ];

  const categories = ["All", ...new Set(technologies.map(tech => tech.category))];
  const filteredTechs = activeCategory === "All" 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  return (
    <section 
      ref={ref}
      className="relative py-20 md:py-28 overflow-hidden bg-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <span className="text-sm font-medium text-blue-600 tracking-wide">
              TECHNOLOGY STACK
            </span>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technologies We <span className="text-blue-600">Work With</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leveraging cutting-edge tools and platforms to deliver exceptional digital solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
        >
          {filteredTechs.map((tech) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative bg-white border border-gray-200 rounded-xl p-5 md:p-6 hover:border-blue-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-50/0 group-hover:from-blue-50/30 group-hover:via-blue-50/20 group-hover:to-blue-50/30 transition-all duration-500" />
                
                {/* Logo */}
                <div className="relative mb-4">
                  <div 
                    className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-lg flex items-center justify-center p-3 transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${tech.color}10`,
                      border: `1px solid ${tech.color}20`
                    }}
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img 
                        src={tech.logo} 
                        alt={`${tech.name} logo`}
                        className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <div 
                        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                        style={{ backgroundColor: tech.color }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Name */}
                <h3 
                  className="font-semibold text-gray-900 text-center mb-2 transition-colors duration-300 group-hover:text-blue-700"
                  style={{ color: tech.color }}
                >
                  {tech.name}
                </h3>
                
                {/* Description */}
                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  {tech.description}
                </p>
                
                {/* Bottom indicator */}
                <div className="mt-4 pt-4 border-t border-gray-100 group-hover:border-blue-100 transition-colors duration-300">
                  <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500 ease-out mx-auto" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 md:mt-20 pt-12 border-t border-gray-200"
        >
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Interested in how we can apply these technologies to your project?
          </p>
          <button className="group px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-xl hover:shadow-xl transition-all duration-500 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Start a Conversation
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;