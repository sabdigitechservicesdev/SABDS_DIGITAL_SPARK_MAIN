import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo2.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const services = [
    { name: "Website Development", path: "/services/website-development" },
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "SEO Services", path: "/services/seo" },
    { name: "Content Creation", path: "/services/content-creation" },
    { name: "Google Business Profile", path: "/services/google-business" },
    { name: "Keyword Promotion", path: "/services/keyword-promotion" },
    { name: "Ratings & Reviews", path: "/services/ratings-reviews" },
    { name: "Image & Video Editing", path: "/services/media-editing" },
    { name: "Social Media Marketing", path: "/services/social-media" },
  ];

  const linkClass = (path: string) =>
    `font-medium transition-colors ${
      location.pathname === path
        ? "text-blue-600"
        : "text-slate-700 hover:text-blue-600"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
<div
  className={`
    pointer-events-auto
    mx-auto mt-4
    max-w-7xl
    px-2
    transition-all duration-300
    ${isScrolled
      ? "bg-blue-50 backdrop-blur-md shadow-lg rounded-full"
      : "bg-transparent"}
  `}
>

        <div className="container mx-auto px-6">
          <div className="h-20 flex items-center">

            {/* DESKTOP NAV */}
            <div className="hidden lg:grid grid-cols-3 items-center w-full">

              {/* LEFT MENU */}
              <div className="flex items-center space-x-8">
                <Link to="/" className={linkClass("/")}>Home</Link>
                <Link to="/about" className={linkClass("/about")}>About</Link>

                {/* SERVICES DROPDOWN */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button className="flex items-center space-x-1 font-medium text-slate-700 hover:text-blue-600">
                    <span>Services</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  {isServicesOpen && (
                    <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border overflow-hidden">
                      <Link
                        to="/services"
                        className="block px-4 py-3 font-semibold hover:bg-blue-50"
                      >
                        All Services
                      </Link>
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-4 py-2 text-sm hover:bg-blue-50"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/testimonials"
                  className={linkClass("/testimonials")}
                >
                  Testimonials
                </Link>
              </div>

              {/* CENTER LOGO */}
              <div className="flex justify-center">
                <Link to="/">
                  <img
                    src={logo}
                    alt="SAB DigiTech Services"
                    className="h-10 w-auto"
                  />
                </Link>
              </div>

              {/* RIGHT MENU */}
              <div className="flex items-center justify-end space-x-8">
                <Link to="/pricing" className={linkClass("/pricing")}>
                  Pricing
                </Link>
                <Link to="/portfolio" className={linkClass("/portfolio")}>
                  Portfolio
                </Link>

                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-full"
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>

            {/* MOBILE HEADER */}
            <div className="lg:hidden flex justify-between items-center w-full">
              <Link to="/">
                <img src={logo} alt="logo" className="h-10" />
              </Link>

              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white rounded-2xl shadow-lg mt-4 py-4 space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Testimonials", path: "/testimonials" },
                { name: "Pricing", path: "/pricing" },
                { name: "Portfolio", path: "/portfolio" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-2 hover:bg-blue-50 rounded"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/contact"
                className="block mx-4 mt-2 text-center bg-blue-600 text-white py-2 rounded-full"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
