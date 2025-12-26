import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Globe,
  TrendingUp,
  Search,
  FileText,
  MapPin,
  Target,
  Star,
  Image as ImageIcon,
  Share2,
} from "lucide-react";
import websiteDevImg from "@/assets/services/website-development.jpg";
import digitalMarketingImg from "@/assets/services/digital-marketing.jpg";
import seoImg from "@/assets/services/seo.jpg";
import contentImg from "@/assets/services/content-creation.jpg";
import googleBusinessImg from "@/assets/services/google-business.jpg";
import keywordImg from "@/assets/services/keyword-promotion.jpg";
import ratingsImg from "@/assets/services/ratings-reviews.jpg";
import mediaEditingImg from "@/assets/services/media-editing.jpg";
import socialMediaImg from "@/assets/services/social-media.jpg";

const ServicesPreview = () => {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Best website design company in Kolkata - Custom static and dynamic websites tailored to your business needs",
      path: "/services/website-development",
      color: "from-blue-500 to-cyan-500",
      image: websiteDevImg,
      accent: "#3B82F6"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Best digital marketing agency in West Bengal - Strategic campaigns to maximize your online presence and business growth",
      path: "/services/digital-marketing",
      color: "from-purple-500 to-pink-500",
      image: digitalMarketingImg,
      accent: "#8B5CF6"
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Best SEO company in Kolkata - Boost your Google rankings and drive organic traffic with expert optimization",
      path: "/services/seo",
      color: "from-green-500 to-emerald-500",
      image: seoImg,
      accent: "#10B981"
    },
    {
      icon: FileText,
      title: "Content Creation",
      description: "Professional content writing services in Kolkata - Compelling narratives that resonate with your audience",
      path: "/services/content-creation",
      color: "from-orange-500 to-red-500",
      image: contentImg,
      accent: "#F97316"
    },
    {
      icon: MapPin,
      title: "Google Business Profile",
      description: "Complete setup and promotion for maximum local visibility",
      path: "/services/google-business",
      color: "from-cyan-500 to-blue-500",
      image: googleBusinessImg,
      accent: "#06B6D4"
    },
    {
      icon: Target,
      title: "Keyword Promotion",
      description: "Strategic keyword optimization to improve search rankings",
      path: "/services/keyword-promotion",
      color: "from-indigo-500 to-purple-500",
      image: keywordImg,
      accent: "#6366F1"
    },
    {
      icon: Star,
      title: "Ratings & Reviews",
      description: "Professional rating management to build customer trust",
      path: "/services/ratings-reviews",
      color: "from-yellow-500 to-orange-500",
      image: ratingsImg,
      accent: "#F59E0B"
    },
    {
      icon: ImageIcon,
      title: "Media Editing",
      description: "Best graphic design company in Kolkata - Professional image and video editing for stunning brand visuals",
      path: "/services/media-editing",
      color: "from-pink-500 to-rose-500",
      image: mediaEditingImg,
      accent: "#EC4899"
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Top social media marketing company in West Bengal - Engage and grow your audience across all platforms",
      path: "/services/social-media",
      color: "from-blue-500 to-indigo-500",
      image: socialMediaImg,
      accent: "#4F46E5"
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-background font-montserrat ">
      {/* Minimal background effects */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px]" />
      
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/5 via-transparent to-transparent blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 space-y-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digital Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Best digital marketing company in Kolkata offering website development, SEO services, graphic design, and social media marketing solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const { ref: serviceRef, isVisible: serviceVisible } = useScrollAnimation();
            
            return (
              <div
                key={service.path}
                ref={serviceRef}
                className={`relative h-80 overflow-hidden rounded-2xl transition-all duration-1000 group cursor-pointer ${
                  serviceVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Link to={service.path} className="block h-full">
                  {/* Default State: Only Image */}
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                    />
                    
                    {/* Default State: Dark Overlay (70% opacity) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-700" />
                    
                    {/* Default State: Minimal Title */}
                    <div className="absolute bottom-6 left-6 right-6 transition-all duration-500 group-hover:opacity-0">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color} backdrop-blur-sm`}>
                          <service.icon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white line-clamp-1">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Hover State: Full Dark Background with Reveal Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out overflow-hidden">
                    {/* Very Dark Overlay - 95% opacity */}
                    <div className="absolute inset-0 bg-black/95 transition-opacity duration-700" />
                    
                    {/* Original Image with very low opacity */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-10 transition-all duration-1000 group-hover:scale-105"
                    />
                    
                    {/* Gradient Accent Glow */}
                    <div 
                      className="absolute inset-0 opacity-30 transition-opacity duration-700"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${service.accent}20 0%, transparent 70%)`,
                        filter: 'blur(40px)',
                      }}
                    />
                    
                    {/* Animated border glow */}
                    <div 
                      className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: `linear-gradient(45deg, transparent, ${service.accent}60, transparent)`,
                        animation: 'borderFlow 3s linear infinite',
                      }}
                    />
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    {/* Content Container */}
                    <div className="relative h-full p-8 flex flex-col justify-end transform translate-y-10 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                      {/* Icon with enhanced glow */}
                      <div className="mb-6">
                        <div 
                          className={`inline-flex p-4 rounded-xl backdrop-blur-lg shadow-2xl mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500`}
                          style={{
                            background: `linear-gradient(135deg, ${service.accent}40, ${service.accent}20)`,
                            border: `1px solid ${service.accent}30`,
                          }}
                        >
                          <service.icon className="h-8 w-8 text-white" />
                          {/* Icon glow effect */}
                          <div 
                            className="absolute inset-0 rounded-xl blur-md opacity-50"
                            style={{
                              background: `radial-gradient(circle at center, ${service.accent}80, transparent 70%)`,
                            }}
                          />
                        </div>
                      </div>
                      
                      {/* Title with enhanced visibility */}
                      <h3 className="text-2xl font-bold text-white mb-3 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        {service.title}
                        <div 
                          className="h-[2px] w-0 group-hover:w-full transition-all duration-500 delay-200 mt-2"
                          style={{
                            background: `linear-gradient(90deg, ${service.accent}, white)`,
                          }}
                        />
                      </h3>
                      
                      {/* Description with better contrast */}
                      <p className="text-white/85 text-sm leading-relaxed transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 delay-150 line-clamp-3">
                        {service.description}
                      </p>
                      
                      {/* CTA Button - More visible on dark background */}
                      <div className="mt-6 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 delay-200 opacity-0 group-hover:opacity-100">
                        <div 
                          className="inline-flex items-center gap-2 text-sm font-medium text-white px-5 py-1 rounded-lg backdrop-blur-sm border hover:scale-105 transition-all duration-300"
                          style={{
                            background: `linear-gradient(135deg, ${service.accent}30, ${service.accent}10)`,
                            borderColor: `${service.accent}40`,
                          }}
                        >
                          Explore Service
                          <div className="w-4 h-4 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating particles - visible on dark background */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute rounded-full"
                          style={{
                            width: `${1 + Math.random() * 5}px`,
                            height: `${1 + Math.random() * 2}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            background: `radial-gradient(circle, ${service.accent}80, transparent)`,
                            animation: `particleFloatDark 4s ease-in-out infinite ${i * 0.5}s`,
                            opacity: 0.8,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="group relative overflow-hidden border-2 border-primary/30 hover:border-primary bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 text-foreground hover:text-primary px-8 py-6 rounded-xl"
          >
            <Link to="/services">
              <span className="relative z-10 flex items-center gap-3 text-lg font-semibold">
                View All Services
                <div className="w-5 h-5 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Custom animations for dark background */}
      <style>{`
        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        
        @keyframes particleFloatDark {
          0%, 100% { 
            transform: translateY(0) translateX(0) scale(1); 
            opacity: 0.3; 
          }
          25% { 
            transform: translateY(-15px) translateX(-5px) scale(1.3); 
            opacity: 0.8; 
          }
          50% { 
            transform: translateY(-30px) translateX(5px) scale(1.5); 
            opacity: 1; 
          }
          75% { 
            transform: translateY(-15px) translateX(-5px) scale(1.3); 
            opacity: 0.8; 
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .bg-grid-white\/5 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
        
        /* Smooth transitions for better performance */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Enhanced hover effects */
        .group:hover img {
          filter: brightness(0.2) blur(2px);
        }
      `}</style>
    </section>
  );
};

export default ServicesPreview;