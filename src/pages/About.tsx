import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Award, Users } from "lucide-react";
import techBackground from "@/assets/backgrounds/tech-network.jpg";

const About = () => {
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();

  const team = [
    { role: "Web Designers", count: "15+", description: "Best website designers in Kolkata" },
    { role: "Developers", count: "20+", description: "Expert web developers in West Bengal" },
    { role: "Content Writers", count: "10+", description: "Professional content writers & copywriters" },
    { role: "SEO Experts", count: "8+", description: "Top SEO specialists in Kolkata" },
  ];

  return (
    <div className="min-h-screen font-montserrat font-semibold">
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
              About <span className="gradient-text bg-gradient-accent">SAB DigiTech Services</span>
            </h1>
            <h2 className="text-xl text-white/90 leading-relaxed">
              Best Digital Marketing Company in Kolkata & West Bengal - Your trusted digital transformation partner driving business growth
            </h2>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full">
                <Target className="h-5 w-5 text-accent" />
                <span className="text-accent font-medium">Our Mission</span>
              </div>
              <h2 className="text-4xl font-bold">
                Leading Digital Marketing Company in Kolkata & West Bengal
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As the best digital marketing company in Kolkata, we provide quality website development, SEO services, graphic design, and social media marketing solutions for businesses across West Bengal. Our mission is to empower companies with innovative digital strategies and expert execution.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At SAB DigiTech Services, the top website design company in Kolkata, we partner with you to generate more business through strategic web solutions, SEO optimization, and comprehensive digital marketing services. We are your one-stop digital marketing agency for complete online success.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-primary shadow-3d"></div>
              <div className="absolute inset-8 rounded-2xl glass flex items-center justify-center">
                <Lightbulb className="h-32 w-32 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A capable team of experts always delivering unique solutions matching latest trends
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {[
              { title: "Website Development", description: "Custom static and dynamic websites tailored to your business needs" },
              { title: "Internet Marketing", description: "Strategic campaigns to maximize your online presence" },
              { title: "SEO Services", description: "Boost your search rankings and drive organic traffic" },
              { title: "Content Creation", description: "Compelling narratives that resonate with your audience" },
            ].map((item, index) => (
              <Card key={item.title} className="p-6 hover-lift border-2 hover:border-accent transition-all">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Expert <span className="gradient-text">Digital Marketing Team</span> in Kolkata
            </h2>
            <p className="text-lg text-muted-foreground">
              Best website designers, SEO experts, graphic designers, and content writers in West Bengal dedicated to your business success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={member.role}
                className="p-8 text-center hover-lift border-2 hover:border-accent transition-all bg-gradient-primary text-white"
              >
                <Users className="h-12 w-12 mx-auto mb-4 text-accent" />
                <div className="text-4xl font-bold mb-2">{member.count}</div>
                <h3 className="text-xl font-semibold mb-2">{member.role}</h3>
                <p className="text-white/80 text-sm">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                What We Do - <span className="gradient-text">Digital Marketing Excellence</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Best digital marketing company in Kolkata delivering website design, SEO, and social media marketing services
              </p>
            </div>

            <Card className="p-12 shadow-3d hover-lift">
              <p className="text-lg text-center text-muted-foreground leading-relaxed">
                As the best digital marketing company in Kolkata and West Bengal, we specialize in website development, SEO services, graphic design, and social media marketing. We provide innovative ideas that give our clients the creative edge needed to establish their brands in the marketplace. Through expert web design, SEO optimization, and digital marketing strategies, we successfully establish your business as a leading brand in your industry.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default About;
