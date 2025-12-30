import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import techBackground from "@/assets/backgrounds/tech-network.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Fashion Store",
      category: "Website Development",
      description: "Complete e-commerce solution with payment integration and inventory management",
      tags: ["React", "Node.js", "Payment Gateway", "SEO"],
      metrics: ["300% Traffic Increase", "250% Sales Growth", "4.8★ Rating"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop&crop=center"
    },
    {
      title: "Real Estate Platform",
      category: "Digital Marketing",
      description: "Comprehensive digital marketing campaign including SEO, social media, and PPC",
      tags: ["SEO", "Google Ads", "Social Media", "Content"],
      metrics: ["500+ Leads/Month", "Top 3 Rankings", "200% ROI"],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=400&fit=crop&crop=center"
    },
    {
      title: "Healthcare Clinic Website",
      category: "Website Development",
      description: "Professional healthcare website with appointment booking and patient portal",
      tags: ["WordPress", "Booking System", "Mobile App", "SEO"],
      metrics: ["5000+ Monthly Visitors", "400+ Appointments", "4.9★ Rating"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=400&fit=crop&crop=center"
    },
    {
      title: "Restaurant Chain Marketing",
      category: "Social Media Marketing",
      description: "Social media strategy and management for a multi-location restaurant chain",
      tags: ["Instagram", "Facebook", "Content Creation", "Influencer"],
      metrics: ["50K+ Followers", "500% Engagement", "40% More Footfall"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop&crop=center"
    },
    {
      title: "Manufacturing Company SEO",
      category: "SEO Services",
      description: "Complete SEO overhaul resulting in first-page rankings for competitive keywords",
      tags: ["Technical SEO", "Link Building", "Content", "Local SEO"],
      metrics: ["First Page Rankings", "800% Organic Traffic", "300+ Keywords"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop&crop=center"
    },
    {
      title: "Educational Institute Portal",
      category: "Website Development",
      description: "Learning management system with student portal and online course delivery",
      tags: ["LMS", "Custom Development", "Mobile Responsive", "SEO"],
      metrics: ["10K+ Students", "100+ Courses", "99% Uptime"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop&crop=center"
    },
    {
      title: "Wellness Center Branding",
      category: "Digital Marketing",
      description: "Complete brand identity and digital presence for a wellness center",
      tags: ["Branding", "Social Media", "Google Ads", "Content"],
      metrics: ["400% Brand Awareness", "250 New Clients", "4.9★ Reviews"],
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=400&fit=crop&crop=center"
    },
    {
      title: "Tech Startup Website",
      category: "Website Development",
      description: "Modern, scalable web application for a SaaS tech startup",
      tags: ["React", "API Integration", "Cloud", "Analytics"],
      metrics: ["100K+ Users", "50% Conversion", "$2M Funding"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&crop=center"
    },
    {
      title: "Boutique Hotel Marketing",
      category: "Google Business Profile",
      description: "Local SEO and Google Business optimization for boutique hotels",
      tags: ["Google My Business", "Local SEO", "Reviews", "Photos"],
      metrics: ["Top 3 Local Rankings", "300+ Reviews", "150% Bookings"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=400&fit=crop&crop=center"
    },
  ];

  const categories = ["All", "Website Development", "Digital Marketing", "SEO Services", "Social Media Marketing", "Google Business Profile"];

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
              Our <span className="gradient-text bg-gradient-accent">Portfolio</span>
            </h1>
            <h2 className="text-xl text-white/90 leading-relaxed">
              Successful digital marketing projects in Kolkata & West Bengal - Showcasing our expertise in website development, SEO, and social media marketing
            </h2>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-40 backdrop-blur-lg bg-background/95">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="px-4 py-2 cursor-pointer hover:bg-accent hover:border-accent transition-all text-sm"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover-lift border-2 hover:border-accent transition-all"
              >
                {/* Project Image with category-specific image */}
                <div className="h-48 bg-gradient-primary relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                  
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="border-t border-border pt-4 space-y-2">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        <span className="text-muted-foreground">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;