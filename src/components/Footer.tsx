import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const services = [
    { name: "Website Development", path: "/services/website-development" },
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "SEO Services", path: "/services/seo" },
    { name: "Social Media Marketing", path: "/services/social-media" },
    { name: "Content Creation", path: "/services/content-creation" },
  ];

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "All Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="SAB DigiTech Services" className="h-16 w-auto" />
            <p className="text-white/80 text-sm leading-relaxed">
              Your premier digital partner for innovative web solutions and strategic digital marketing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <a href="tel:6295008944" className="text-white/80 hover:text-accent transition-colors text-sm">
                  6295008944
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:sabdigitechservices@gmail.com"
                  className="text-white/80 hover:text-accent transition-colors text-sm break-all"
                >
                  sabdigitechservices@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  Arupara Road, G.I.P. Colony, Jagacha, Howrah, 711112, West Bengal
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} SAB DigiTech Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
