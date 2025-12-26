import { Phone, MessageCircle } from "lucide-react";

const FloatingContact = () => {
  const phoneNumber = "6295008944";
  
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/91${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 pulse-glow"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 px-3 py-2 bg-[#25D366] text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
      
      {/* Call Button */}
      <a
        href={`tel:+91${phoneNumber}`}
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary to-accent text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 pulse-glow"
        style={{ animationDelay: "1s" }}
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-3 px-3 py-2 bg-primary text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default FloatingContact;
