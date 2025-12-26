import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Lightbulb, Users, Rocket, Target } from "lucide-react";

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const steps = [
    {
      icon: Lightbulb,
      title: "Discovery & Strategy",
      description: "Expert digital marketing strategy for Kolkata businesses - Analyze goals and create tailored SEO and website plans",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Work closely with our experts to refine your vision",
      color: "from-accent to-accent-glow"
    },
    {
      icon: Rocket,
      title: "Implementation",
      description: "Launch your optimized digital presence with cutting-edge technology",
      color: "from-secondary to-accent"
    },
    {
      icon: Target,
      title: "Results & Growth",
      description: "Track measurable results and scale your success",
      color: "from-cta to-primary"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Proven Digital Marketing Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Best digital marketing company in Kolkata - From strategy to success in website development, SEO, and social media
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const { ref: stepRef, isVisible: stepVisible } = useScrollAnimation();
            const Icon = step.icon;
            
            return (
              <div
                key={index}
                ref={stepRef}
                className={`relative transition-all duration-1000 ${
                  stepVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="glass p-8 rounded-2xl hover-lift hover-glow h-full">
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-primary/10 mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
