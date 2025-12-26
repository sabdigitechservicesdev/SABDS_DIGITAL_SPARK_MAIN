import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import techBackground from "@/assets/backgrounds/tech-network.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Solutions Pvt Ltd",
      role: "CEO",
      rating: 5,
      text: "SAB DigiTech Services transformed our online presence completely. Their SEO strategies increased our organic traffic by 300% in just 6 months. Highly professional team!",
    },
    {
      name: "Priya Sharma",
      company: "Fashion Boutique",
      role: "Owner",
      rating: 5,
      text: "Amazing work on our website and social media marketing. Our sales have doubled since we started working with them. The team is creative, responsive, and truly understands our brand.",
    },
    {
      name: "Amit Patel",
      company: "Real Estate Group",
      role: "Marketing Director",
      rating: 5,
      text: "The Google Business Profile optimization they did for us resulted in a significant increase in local inquiries. Their attention to detail and customer service is outstanding.",
    },
    {
      name: "Sneha Gupta",
      company: "Wellness Center",
      role: "Founder",
      rating: 5,
      text: "Professional content creation and digital marketing services. They helped us reach our target audience effectively. Very happy with the results and the ROI we're seeing.",
    },
    {
      name: "Vikram Singh",
      company: "Restaurant Chain",
      role: "Owner",
      rating: 5,
      text: "Their social media marketing campaigns are top-notch. We've seen tremendous growth in engagement and foot traffic. The team is knowledgeable and always available to help.",
    },
    {
      name: "Meera Reddy",
      company: "Educational Institute",
      role: "Director",
      rating: 5,
      text: "Excellent web development and SEO services. Our website ranks on the first page for all our target keywords. The entire process was smooth and professional.",
    },
    {
      name: "Arjun Mehta",
      company: "E-commerce Store",
      role: "Founder",
      rating: 5,
      text: "The digital marketing strategies implemented by SAB DigiTech have been game-changing for our business. Revenue has increased by 250% and we continue to grow.",
    },
    {
      name: "Kavita Joshi",
      company: "Healthcare Clinic",
      role: "Manager",
      rating: 5,
      text: "Their ratings and reviews management service helped us build a strong online reputation. We now have a 4.9-star rating on Google with hundreds of positive reviews.",
    },
    {
      name: "Rohit Verma",
      company: "Manufacturing Company",
      role: "Marketing Head",
      rating: 5,
      text: "Comprehensive digital solutions that actually work. From website development to content creation, every service exceeded our expectations. Truly a reliable partner.",
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
              Client <span className="gradient-text bg-gradient-accent">Testimonials</span>
            </h1>
            <h2 className="text-xl text-white/90 leading-relaxed">
              What our clients say about the best digital marketing company in Kolkata - Real success stories from businesses across West Bengal
            </h2>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground text-sm">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 hover-lift border-2 hover:border-accent transition-all relative"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/20" />
                
                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary">{testimonial.company}</div>
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

export default Testimonials;
