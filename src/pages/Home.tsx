import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import TechnologiesSection from "@/components/home/TechnologiesSection";
import CTASection from "@/components/home/CTASection";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";

const Home = () => {
  return (
    <div className="">
      <Navigation />
      <Hero />
      <AboutSection />
      <ServicesPreview />
      <WhyChooseUsSection />
      <WhyChooseUs />
      <ProcessSection />
      <TechnologiesSection />
      <CTASection />
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Home;
