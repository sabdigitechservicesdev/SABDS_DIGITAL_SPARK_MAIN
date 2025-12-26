import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-gradient"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-8">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-white text-sm font-medium">Ready to Transform?</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Partner with the Best Digital Marketing Company in Kolkata
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10">
            Join 500+ West Bengal businesses that trust our website design, SEO, and digital marketing expertise
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
