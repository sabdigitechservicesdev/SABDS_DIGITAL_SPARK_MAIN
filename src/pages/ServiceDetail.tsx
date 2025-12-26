import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import techBackground from "@/assets/backgrounds/tech-network.jpg";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const services: Record<string, any> = {
    "website-development": {
      title: "Website Development Services in Kolkata",
      tagline: "Professional Website Design Company - Websites That Drive Results",
      description: "Best website development company in Kolkata - Transform your online presence with custom-built, responsive websites tailored to your business needs. From simple landing pages to complex web applications, we deliver SEO-optimized solutions combining stunning design with powerful functionality.",
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
        { step: "Discovery", description: "Understanding your business goals and requirements" },
        { step: "Design", description: "Creating wireframes and visual designs" },
        { step: "Development", description: "Building your website with latest technologies" },
        { step: "Testing", description: "Rigorous quality assurance and testing" },
        { step: "Launch", description: "Deploying your website and monitoring performance" },
        { step: "Support", description: "Ongoing maintenance and updates" },
      ],
      pricing: "Starting from ₹8,000 for static websites",
      packages: [
        {
          name: "Basic Website",
          price: "₹8,000 - ₹25,000",
          features: ["Up to 5 pages", "Responsive design", "Basic SEO", "Contact form", "1 month support"],
        },
        {
          name: "Business Website",
          price: "₹25,000 - ₹75,000",
          features: ["Up to 15 pages", "Advanced design", "Complete SEO", "CMS integration", "3 months support", "Analytics setup"],
        },
        {
          name: "E-Commerce",
          price: "₹50,000 - ₹150,000",
          features: ["Unlimited products", "Payment gateway", "Inventory management", "Customer accounts", "6 months support", "Marketing tools"],
        },
      ],
    },
    "digital-marketing": {
      title: "Digital Marketing Services in Kolkata",
      tagline: "Best Digital Marketing Agency - Strategic Campaigns for Maximum Impact",
      description: "Leading digital marketing company in Kolkata & West Bengal - Comprehensive digital marketing strategies designed to maximize your online presence, engage your target audience, and drive sustainable business growth across all digital channels.",
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
        { step: "Audit", description: "Analyzing current digital presence" },
        { step: "Strategy", description: "Developing comprehensive marketing plan" },
        { step: "Execution", description: "Implementing campaigns across channels" },
        { step: "Optimization", description: "Continuous improvement based on data" },
        { step: "Reporting", description: "Regular performance updates" },
        { step: "Scaling", description: "Expanding successful campaigns" },
      ],
      pricing: "Starting from ₹15,000/month",
      packages: [
        {
          name: "Starter",
          price: "₹15,000/month",
          features: ["2 channels", "Basic analytics", "Monthly reports", "Email support"],
        },
        {
          name: "Professional",
          price: "₹35,000/month",
          features: ["4 channels", "Advanced analytics", "Weekly reports", "Dedicated manager", "A/B testing"],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: ["All channels", "Custom strategy", "Daily reports", "Priority support", "Advanced automation"],
        },
      ],
    },
    "seo": {
      title: "SEO Services",
      tagline: "Dominate Search Rankings",
      description: "Advanced SEO strategies that improve your search engine rankings, drive organic traffic, and increase visibility for your target keywords. Get found by customers actively searching for your services.",
      features: [
        "Comprehensive Keyword Research",
        "On-Page Optimization",
        "Technical SEO Audit",
        "Link Building Strategy",
        "Local SEO Optimization",
        "Content Optimization",
        "Mobile SEO",
        "Competitor Analysis",
      ],
      benefits: [
        "Higher search engine rankings",
        "Increased organic traffic",
        "Better user experience",
        "Long-term sustainable results",
        "Higher conversion rates",
        "Improved brand credibility",
      ],
      process: [
        { step: "Audit", description: "Complete SEO analysis of your website" },
        { step: "Research", description: "Keyword and competitor research" },
        { step: "Strategy", description: "Custom SEO roadmap creation" },
        { step: "Implementation", description: "On-page and technical optimization" },
        { step: "Link Building", description: "Quality backlink acquisition" },
        { step: "Monitoring", description: "Tracking rankings and traffic" },
      ],
      pricing: "Starting from ₹10,000/month",
      packages: [
        {
          name: "Basic SEO",
          price: "₹10,000/month",
          features: ["20 keywords", "On-page SEO", "Monthly reports", "Basic link building"],
        },
        {
          name: "Advanced SEO",
          price: "₹25,000/month",
          features: ["50 keywords", "Complete SEO", "Weekly reports", "Advanced link building", "Content creation"],
        },
        {
          name: "Enterprise SEO",
          price: "₹50,000+/month",
          features: ["Unlimited keywords", "Full SEO suite", "Daily monitoring", "Premium links", "Dedicated team"],
        },
      ],
    },
    "content-creation": {
      title: "Content Creation Services in Kolkata",
      tagline: "Professional Content Writing - Content That Converts",
      description: "Best content writing services in Kolkata - Expert content creation that tells your brand story, engages your audience, and drives meaningful conversions through compelling narratives and professional copywriting.",
      features: [
        "Professional Blog Posts & Articles",
        "Social Media Content Creation",
        "SEO Website Copywriting",
        "Email Newsletter Writing",
        "Product Description Writing",
        "Video Script Development",
        "Infographic Content Design",
        "Strategic Content Planning",
      ],
      benefits: [
        "Engage and retain audience",
        "Establish thought leadership",
        "Improve SEO rankings",
        "Build brand authority",
        "Drive conversions",
        "Increase social shares",
      ],
      process: [
        { step: "Brief", description: "Understanding content requirements" },
        { step: "Research", description: "Topic and audience research" },
        { step: "Creation", description: "Writing and designing content" },
        { step: "Review", description: "Client feedback and revisions" },
        { step: "Optimization", description: "SEO and platform optimization" },
        { step: "Publishing", description: "Content distribution and promotion" },
      ],
      pricing: "Starting from ₹500 per piece",
      packages: [
        {
          name: "Basic Package",
          price: "₹8,000/month",
          features: ["4 blog posts", "8 social posts", "Basic editing", "SEO optimization"],
        },
        {
          name: "Professional",
          price: "₹20,000/month",
          features: ["12 blog posts", "20 social posts", "Email newsletters", "Graphics included", "Strategy"],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: ["Unlimited content", "All formats", "Dedicated writer", "Priority turnaround", "Full strategy"],
        },
      ],
    },
    "google-business": {
      title: "Google My Business Optimization in Kolkata",
      tagline: "Local SEO Expert - Maximize Local Visibility",
      description: "Best Google My Business services in Kolkata - Complete setup, optimization, and management of your Google Business Profile for maximum local visibility, customer engagement, and local SEO success in West Bengal.",
      features: [
        "Complete Profile Setup",
        "360° Virtual Business Tour",
        "Professional Photo Shoots",
        "Review Management",
        "Regular Posts & Updates",
        "Q&A Management",
        "Performance Analytics",
        "Local SEO Integration",
      ],
      benefits: [
        "Appear in local search results",
        "Attract more local customers",
        "Build trust with reviews",
        "Showcase your business visually",
        "Track customer interactions",
        "Improve local rankings",
      ],
      process: [
        { step: "Verification", description: "Business verification with Google" },
        { step: "Optimization", description: "Complete profile optimization" },
        { step: "Photography", description: "Professional photos and virtual tour" },
        { step: "Content", description: "Regular posts and updates" },
        { step: "Reviews", description: "Review monitoring and management" },
        { step: "Analytics", description: "Performance tracking and reporting" },
      ],
      pricing: "Starting from ₹5,000 one-time setup",
      packages: [
        {
          name: "Setup Only",
          price: "₹5,000",
          features: ["Profile creation", "Basic optimization", "Initial photos", "1-month support"],
        },
        {
          name: "Complete Package",
          price: "₹15,000 + ₹5,000/month",
          features: ["Full setup", "Virtual tour", "Professional photos", "Monthly management", "Review responses"],
        },
        {
          name: "Premium",
          price: "Custom",
          features: ["Multiple locations", "Advanced analytics", "Priority support", "Advanced features", "Dedicated manager"],
        },
      ],
    },
    "keyword-promotion": {
      title: "Keyword Promotion Services in Kolkata",
      tagline: "SEO Keyword Expert - Target the Right Audience",
      description: "Professional keyword promotion and SEO optimization in Kolkata - Strategic keyword research and promotion to improve your search rankings for terms that matter most to your business and drive targeted traffic that converts.",
      features: [
        "In-Depth Keyword Research",
        "Competitor Keyword Analysis",
        "Long-tail Keyword Targeting",
        "Keyword Difficulty Assessment",
        "Search Intent Analysis",
        "Rank Tracking & Monitoring",
        "Monthly Performance Reports",
        "Ongoing Optimization",
      ],
      benefits: [
        "Target high-intent searches",
        "Improve conversion rates",
        "Reduce PPC costs",
        "Outrank competitors",
        "Increase qualified traffic",
        "Better ROI on marketing",
      ],
      process: [
        { step: "Discovery", description: "Understanding your business and goals" },
        { step: "Research", description: "Comprehensive keyword analysis" },
        { step: "Selection", description: "Choosing optimal keywords" },
        { step: "Optimization", description: "Implementing keywords strategically" },
        { step: "Monitoring", description: "Tracking rankings and performance" },
        { step: "Refinement", description: "Ongoing strategy improvements" },
      ],
      pricing: "Starting from ₹8,000/month",
      packages: [
        {
          name: "Basic",
          price: "₹8,000/month",
          features: ["20 keywords", "Monthly tracking", "Basic optimization", "Monthly reports"],
        },
        {
          name: "Professional",
          price: "₹18,000/month",
          features: ["50 keywords", "Weekly tracking", "Advanced optimization", "Bi-weekly reports", "Content suggestions"],
        },
        {
          name: "Enterprise",
          price: "₹35,000+/month",
          features: ["100+ keywords", "Daily tracking", "Complete optimization", "Weekly reports", "Dedicated strategist"],
        },
      ],
    },
    "ratings-reviews": {
      title: "Online Reputation Management in Kolkata",
      tagline: "Review Management Expert - Build Customer Trust",
      description: "Professional ratings and reviews management service in Kolkata - Build customer trust, enhance online credibility, and improve your business reputation through expert review monitoring and response management.",
      features: [
        "Professional Review Monitoring",
        "Expert Response Management",
        "Review Generation Campaigns",
        "Online Reputation Analysis",
        "Multi-Platform Review Management",
        "Customer Sentiment Analysis",
        "Reputation Crisis Management",
        "Detailed Monthly Reports",
      ],
      benefits: [
        "Improve online reputation",
        "Build customer trust",
        "Increase conversions",
        "Better search rankings",
        "Handle negative feedback",
        "Showcase social proof",
      ],
      process: [
        { step: "Audit", description: "Current reputation analysis" },
        { step: "Setup", description: "Monitoring system implementation" },
        { step: "Generation", description: "Review request campaigns" },
        { step: "Management", description: "Professional response handling" },
        { step: "Resolution", description: "Issue resolution strategies" },
        { step: "Growth", description: "Continuous reputation building" },
      ],
      pricing: "Starting from ₹5,000/month",
      packages: [
        {
          name: "Basic",
          price: "₹5,000/month",
          features: ["1-2 platforms", "Response management", "Monthly reports", "Email support"],
        },
        {
          name: "Professional",
          price: "₹12,000/month",
          features: ["All platforms", "Review generation", "Crisis management", "Weekly reports", "Priority support"],
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: ["Multiple locations", "Advanced analytics", "Dedicated manager", "24/7 monitoring", "Custom strategy"],
        },
      ],
    },
    "media-editing": {
      title: "Graphic Design & Video Editing in Kolkata",
      tagline: "Best Graphic Design Company - Professional Visual Content",
      description: "Top graphic design company in Kolkata - Expert image and video editing services, professional graphic design, and stunning visual content creation that captures attention and enhances your brand identity across West Bengal.",
      features: [
        "Professional Photo Editing & Retouching",
        "Expert Video Editing & Production",
        "Color Correction & Grading",
        "Motion Graphics Design",
        "Thumbnail Design Services",
        "Social Media Graphics Design",
        "Product Photography Editing",
        "Brand Visual Asset Creation",
      ],
      benefits: [
        "Professional brand image",
        "Higher engagement rates",
        "Stand out from competition",
        "Consistent visual identity",
        "Increased conversions",
        "Better social reach",
      ],
      process: [
        { step: "Briefing", description: "Understanding requirements" },
        { step: "Raw Material", description: "Receiving images/footage" },
        { step: "Editing", description: "Professional editing work" },
        { step: "Review", description: "Client feedback round" },
        { step: "Revisions", description: "Making adjustments" },
        { step: "Delivery", description: "Final files in required formats" },
      ],
      pricing: "Starting from ₹500 per image",
      packages: [
        {
          name: "Basic Editing",
          price: "₹500-₹1,000/piece",
          features: ["Basic editing", "Color correction", "Standard resolution", "2-day delivery"],
        },
        {
          name: "Professional",
          price: "₹1,500-₹3,000/piece",
          features: ["Advanced editing", "Retouching", "High resolution", "1-day delivery", "Revisions"],
        },
        {
          name: "Video Production",
          price: "₹5,000+/video",
          features: ["Complete editing", "Motion graphics", "Music & effects", "Multiple formats", "Priority service"],
        },
      ],
    },
    "social-media": {
      title: "Social Media Marketing",
      tagline: "Engage & Grow Your Audience",
      description: "Strategic social media marketing to engage your audience, build community, and drive growth across all major social platforms. From content creation to community management and paid campaigns.",
      features: [
        "Content Strategy & Planning",
        "Post Creation & Scheduling",
        "Community Management",
        "Social Media Advertising",
        "Influencer Collaborations",
        "Analytics & Reporting",
        "Engagement Optimization",
        "Trend Monitoring",
      ],
      benefits: [
        "Build engaged community",
        "Increase brand awareness",
        "Drive website traffic",
        "Generate quality leads",
        "Improve customer loyalty",
        "Boost sales conversions",
      ],
      process: [
        { step: "Audit", description: "Current social media analysis" },
        { step: "Strategy", description: "Custom social media plan" },
        { step: "Content", description: "Creating engaging posts" },
        { step: "Scheduling", description: "Optimal posting times" },
        { step: "Engagement", description: "Community interaction" },
        { step: "Analysis", description: "Performance tracking" },
      ],
      pricing: "Starting from ₹8,000/month",
      packages: [
        {
          name: "Starter",
          price: "₹8,000/month",
          features: ["2 platforms", "12 posts/month", "Basic graphics", "Monthly reports"],
        },
        {
          name: "Professional",
          price: "₹20,000/month",
          features: ["4 platforms", "30 posts/month", "Professional graphics", "Community management", "Weekly reports"],
        },
        {
          name: "Enterprise",
          price: "₹40,000+/month",
          features: ["All platforms", "Unlimited posts", "Video content", "Paid campaigns", "Dedicated team", "Daily reports"],
        },
      ],
    },
    "festival-banners": {
      title: "Festival Banner Design & Promotion",
      tagline: "Festive-Ready All Year Long",
      description: "Professionally designed banners for every Indian festival throughout the year. Keep your business active, festive, and engaging with custom-designed festival banners tailored to your brand.",
      features: [
        "Custom Festival Banners",
        "Brand Color Integration",
        "Logo & Contact Details",
        "High-Quality Format",
        "Social Media Ready",
        "GMB Compatible",
        "WhatsApp Ready",
        "Free Text Modifications",
      ],
      benefits: [
        "Stay festive-ready year-round",
        "Build brand consistency",
        "Boost customer engagement",
        "Save design time",
        "Professional appearance",
        "Increase social visibility",
      ],
      process: [
        { step: "Briefing", description: "Understanding your brand requirements" },
        { step: "Design", description: "Creating festival-specific banners" },
        { step: "Review", description: "Client feedback and modifications" },
        { step: "Delivery", description: "High-quality files for all platforms" },
        { step: "Schedule", description: "Timely delivery before each festival" },
        { step: "Updates", description: "Text modifications as needed" },
      ],
      pricing: "Starting from ₹3,000 for 3 months",
      packages: [
        {
          name: "3 Months",
          price: "₹3,000",
          features: ["Banners for all festivals", "Brand customization", "2 revisions per banner", "Social media formats"],
        },
        {
          name: "6 Months",
          price: "₹5,500",
          features: ["All festivals coverage", "Unlimited text changes", "All platform formats", "Priority delivery"],
        },
        {
          name: "1 Year",
          price: "₹10,000",
          features: ["Complete year coverage", "Unlimited modifications", "Premium designs", "Early delivery", "Dedicated support"],
        },
      ],
    },
  };

  const service = services[serviceId || "website-development"];

  if (!service) {
    return <div>Service not found</div>;
  }

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
              {service.title}
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed font-medium">
              {service.tagline}
            </p>
            <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild variant="glass" size="xl">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Key <span className="gradient-text">Features</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.features.map((feature: string, index: number) => (
                <Card
                  key={index}
                  className="p-6 hover-lift border-2 hover:border-accent transition-all text-center"
                >
                  <Check className="h-8 w-8 text-accent mx-auto mb-3" />
                  <p className="font-medium">{feature}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Why Choose This <span className="gradient-text">Service</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.benefits.map((benefit: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-card"
                >
                  <ArrowRight className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our <span className="gradient-text">Process</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((step: any, index: number) => (
                <Card
                  key={index}
                  className="p-6 hover-lift border-2 hover:border-accent transition-all relative"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center text-white font-bold text-xl shadow-accent">
                    {index + 1}
                  </div>
                  <div className="pt-4">
                    <h3 className="text-xl font-bold mb-2">{step.step}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Pricing <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              {service.pricing}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.packages.map((pkg: any, index: number) => (
                <Card
                  key={index}
                  className="p-8 hover-lift border-2 hover:border-accent transition-all"
                >
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-6">{pkg.price}</div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature: string, fIndex: number) => (
                      <li key={fIndex} className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="hero" size="lg" className="w-full">
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </Card>
              ))}
            </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90">
              Contact us today for a free consultation and custom quote
            </p>
            <Button asChild variant="glass" size="xl">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
