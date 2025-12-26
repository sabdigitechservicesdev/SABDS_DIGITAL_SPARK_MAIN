import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import techBackground from "@/assets/backgrounds/tech-network.jpg";

const Pricing = () => {
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
    },
  ];

  const services = [
    { name: "Website Development (Static)", price: "₹8,000 - ₹25,000", unit: "one-time" },
    { name: "Website Development (Dynamic)", price: "₹25,000 - ₹75,000", unit: "one-time" },
    { name: "E-Commerce Website", price: "₹50,000 - ₹150,000", unit: "one-time" },
    { name: "SEO Services", price: "₹10,000 - ₹30,000", unit: "per month" },
    { name: "Social Media Marketing", price: "₹8,000 - ₹25,000", unit: "per month" },
    { name: "Content Creation", price: "₹500 - ₹2,000", unit: "per piece" },
    { name: "Google Business Setup", price: "₹5,000 - ₹15,000", unit: "one-time" },
    { name: "Review Management", price: "₹5,000 - ₹12,000", unit: "per month" },
    { name: "Image/Video Editing", price: "₹500 - ₹3,000", unit: "per piece" },
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
              Simple, Transparent <span className="gradient-text bg-gradient-accent">Pricing</span>
            </h1>
            <h2 className="text-xl text-white/90 leading-relaxed">
              Affordable digital marketing packages in Kolkata - Choose the perfect plan for your business growth
            </h2>
          </div>
        </div>
      </section>

      {/* Package Plans */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`relative overflow-hidden hover-lift transition-all ${
                  pkg.popular
                    ? "border-2 border-accent shadow-3d scale-105"
                    : "border-2 hover:border-accent"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-cta text-white px-4 py-1 text-sm font-semibold rounded-bl-lg flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-white" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-muted-foreground text-sm">{pkg.description}</p>
                  </div>

                  <div className="flex items-baseline space-x-1">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-muted-foreground">{pkg.period}</span>
                  </div>

                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant={pkg.popular ? "cta" : "hero"}
                    size="lg"
                    className="w-full"
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Packages */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Special <span className="gradient-text">Long-Term Packages</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Best value combo packages from the leading digital marketing company in Kolkata - GMB promotion and website design services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            <Card className="relative overflow-hidden hover-lift border-2 hover:border-accent transition-all p-8">
              <div className="absolute top-0 right-0 bg-gradient-cta text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                Save ₹3,000
              </div>
              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Combo 1 - 3 Years</h3>
                  <p className="text-muted-foreground">GMB Promotion + Static Website</p>
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold text-primary">₹18,000</span>
                  <span className="text-muted-foreground line-through">₹21,000</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complete GMB setup & 3-year management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Professional static website</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Free domain & hosting for 1 year</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Weekly GMB updates & festival posts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Review & rating management</span>
                  </li>
                </ul>
                <Button asChild variant="cta" size="lg" className="w-full">
                  <Link to="/contact">Get This Deal</Link>
                </Button>
              </div>
            </Card>

            <Card className="relative overflow-hidden hover-lift border-2 border-accent shadow-3d scale-105 transition-all p-8">
              <div className="absolute top-0 right-0 bg-gradient-accent text-white px-4 py-1 text-sm font-semibold rounded-bl-lg flex items-center space-x-1">
                <Star className="h-4 w-4 fill-white" />
                <span>Save ₹7,000</span>
              </div>
              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Combo 2 - 5 Years</h3>
                  <p className="text-muted-foreground">GMB Promotion + Static Website</p>
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold text-primary">₹25,000</span>
                  <span className="text-muted-foreground line-through">₹32,000</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complete GMB setup & 5-year management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Professional static website</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Free domain & hosting for 1 year</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Weekly GMB updates & festival posts (5 years)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Priority support & long-term growth</span>
                  </li>
                </ul>
                <Button asChild variant="cta" size="lg" className="w-full">
                  <Link to="/contact">Get Best Value</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Individual <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Need specific services? We've got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <Card
                key={service.name}
                className="p-6 hover-lift border-2 hover:border-accent transition-all"
              >
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">{service.name}</h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <span className="text-sm text-muted-foreground">/{service.unit}</span>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </div>
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
              Not Sure Which Plan is Right?
            </h2>
            <p className="text-xl text-white/90">
              Contact us for a personalized consultation and custom quote
            </p>
            <Button asChild variant="glass" size="xl">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <FloatingContact />
      <Footer />
    </div>
  );
};

export default Pricing;
