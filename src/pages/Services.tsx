import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
  ArrowRight,
} from "lucide-react";
import techBackground from "@/assets/backgrounds/tech-network.jpg";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      shortDesc: "Professional static and dynamic websites",
      description: "Best website design company in Kolkata - Custom websites tailored to your business needs. From simple landing pages to complex web applications, we deliver responsive, SEO-optimized solutions.",
      features: ["Responsive Web Design", "SEO Optimized Structure", "Fast Loading Speed", "Custom Development Features"],
      path: "/services/website-development",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      shortDesc: "Strategic digital marketing campaigns",
      description: "Best digital marketing agency in West Bengal - Comprehensive strategies to maximize online presence, engage audiences, and drive business growth across all digital channels.",
      features: ["Digital Strategy Planning", "Campaign Management", "Performance Analytics", "ROI Tracking & Reporting"],
      path: "/services/digital-marketing",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Search,
      title: "SEO Services",
      shortDesc: "Boost your Google rankings",
      description: "Best SEO company in Kolkata - Advanced SEO strategies to improve search engine rankings, drive organic traffic, and increase visibility for your business in West Bengal.",
      features: ["Keyword Research & Analysis", "On-Page SEO Optimization", "Link Building Strategy", "Technical SEO Audit"],
      path: "/services/seo",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FileText,
      title: "Content Creation",
      shortDesc: "Compelling content that converts",
      description: "Engaging, high-quality content that tells your brand story, connects with your audience, and drives meaningful engagement and conversions.",
      features: ["Copywriting", "Blog Posts", "Visual Content", "Content Strategy"],
      path: "/services/content-creation",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: MapPin,
      title: "Google Business Profile",
      shortDesc: "Local visibility optimization",
      description: "Complete setup, optimization, and management of your Google Business Profile for maximum local visibility and customer engagement.",
      features: ["Profile Setup", "360° Tour", "Review Management", "Local SEO"],
      path: "/services/google-business",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Target,
      title: "Keyword Promotion",
      shortDesc: "Strategic keyword optimization",
      description: "Advanced keyword research and promotion strategies to improve your search rankings and drive targeted traffic to your website.",
      features: ["Keyword Research", "Competition Analysis", "Rank Tracking", "Optimization"],
      path: "/services/keyword-promotion",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Star,
      title: "Ratings & Reviews",
      shortDesc: "Build customer trust",
      description: "Professional rating and review management to build customer trust, enhance credibility, and improve your online reputation.",
      features: ["Review Monitoring", "Response Management", "Reputation Building", "Rating Improvement"],
      path: "/services/ratings-reviews",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: ImageIcon,
      title: "Image & Video Editing",
      shortDesc: "Professional graphic design & editing",
      description: "Best graphic design company in Kolkata - Expert image and video editing services to create stunning visual content that captures attention and enhances brand identity.",
      features: ["Professional Photo Editing", "Video Production & Editing", "Graphics Design Services", "Brand Visual Identity"],
      path: "/services/media-editing",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      shortDesc: "Engage across social platforms",
      description: "Top social media marketing company in Kolkata - Strategic social media management to engage audiences, build community, and drive business growth across all platforms in West Bengal.",
      features: ["Social Content Planning", "Community Management", "Paid Social Campaigns", "Social Media Analytics"],
      path: "/services/social-media",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: ImageIcon,
      title: "Festival Banner Design",
      shortDesc: "Festive-ready all year",
      description: "Professionally designed banners for every Indian festival throughout the year. Keep your business active and engaging.",
      features: ["Custom Designs", "Brand Integration", "All Platforms", "Free Modifications"],
      path: "/services/festival-banners",
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
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
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/90"></div>
          </div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl float"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl float" style={{ animationDelay: "2s" }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Our <span className="gradient-text bg-gradient-accent">Digital Services</span>
            </h1>
            <h2 className="text-xl text-white/90 leading-relaxed">
              Comprehensive digital marketing solutions in Kolkata & West Bengal - Website development, SEO, social media marketing, and Google My Business services
            </h2>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.path}
                className="group relative overflow-hidden hover-lift border-2 hover:border-accent transition-all duration-300"
              >
                <div className="p-8 space-y-6">
                  {/* Icon & Title */}
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors mb-1">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{service.shortDesc}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button asChild variant="hero" className="w-full group/btn">
                    <Link to={service.path}>
                      Learn More
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-white/90">
              Let's discuss how our services can help your business grow
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="glass" size="xl">
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
