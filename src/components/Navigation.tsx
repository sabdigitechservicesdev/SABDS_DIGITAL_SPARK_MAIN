import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import logo from "@/assets/logo2.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  
  // Ref for services dropdown
  const servicesRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Check if we're on home page
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Only add scroll listener on home page
    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
    } else {
      // For other pages, always show background
      setIsScrolled(true);
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  // Reset scroll state when page changes
  useEffect(() => {
    if (isHomePage) {
      // On home page, check initial scroll position
      setIsScrolled(window.scrollY > 20);
    } else {
      // On other pages, always show background
      setIsScrolled(true);
    }
    
    // Close all menus on route change
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  // Close services dropdown when clicking outside (desktop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node) &&
        isServicesOpen
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesOpen]);

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      // Re-enable body scroll when mobile menu is closed
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  // Determine background class based on page and scroll
  const getBackgroundClass = () => {
    if (!isHomePage) {
      // On other pages, always show background
      return "bg-blue-50 backdrop-blur-md shadow-lg rounded-full";
    }
    
    // On home page, show background only when scrolled
    return isScrolled 
      ? "bg-blue-50 backdrop-blur-md shadow-lg rounded-full" 
      : "bg-transparent";
  };

  // Mobile Menu Component to render with Portal
  const MobileMenuPortal = () => {
    if (typeof window === 'undefined') return null;
    
    return createPortal(
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-[99999]"
            ref={mobileMenuRef}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/30"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl overflow-hidden"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <Link 
                  to="/" 
                  className="flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <img 
                    src={logo} 
                    alt="logo" 
                    className="h-7"
                  />
                </Link>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="h-5 w-5 text-gray-700" />
                </button>
              </div>

              {/* Scrollable Menu Content */}
              <div className="h-[calc(100vh-64px)] overflow-y-auto">
                <div className="p-4 space-y-1">
                  {/* Main Menu Items */}
                  {[
                    { name: "Home", path: "/" },
                    { name: "About", path: "/about" },
                    { name: "Testimonials", path: "/testimonials" },
                    { name: "Pricing", path: "/pricing" },
                    { name: "Portfolio", path: "/portfolio" },
                  ].map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`
                        block px-4 py-3 rounded-lg font-medium transition-all duration-200
                        ${location.pathname === item.path
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-800 hover:bg-gray-50 hover:text-blue-600"
                        }
                      `}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Mobile Services Section */}
                  <div className="mt-4">
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className={`
                        w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all duration-200
                        ${isMobileServicesOpen
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-800 hover:bg-gray-50 hover:text-blue-600"
                        }
                      `}
                    >
                      <span>Services</span>
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-6 py-2 space-y-1">
                            <Link
                              to="/services"
                              className={`
                                block py-2 px-3 rounded-lg text-sm font-medium transition-colors
                                ${location.pathname === "/services"
                                  ? "bg-blue-50 text-blue-600"
                                  : "text-gray-700 hover:bg-gray-50"
                                }
                              `}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsMobileServicesOpen(false);
                              }}
                            >
                              View All Services
                            </Link>
                            {services.map((service) => (
                              <Link
                                key={service.path}
                                to={service.path}
                                className={`
                                  block py-2 px-3 rounded-lg text-sm transition-colors
                                  ${location.pathname === service.path
                                    ? "bg-blue-50 text-blue-600 font-medium"
                                    : "text-gray-600 hover:bg-gray-50"
                                  }
                                `}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileServicesOpen(false);
                                }}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Clean CTA Section */}
                <div className="p-4 mt-4 border-t">
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link to="/contact">Get Started Now</Link>
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-3">
                    Free consultation • No commitment
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    );
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div
          className={`
            pointer-events-auto
            mx-auto mt-4
            max-w-7xl
            px-2
            transition-all duration-300
            ${getBackgroundClass()}
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
                    ref={servicesRef}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => {
                      setTimeout(() => {
                        if (!servicesRef.current?.matches(':hover')) {
                          setIsServicesOpen(false);
                        }
                      }, 100);
                    }}
                  >
                    <button className="flex items-center space-x-1 font-medium text-slate-700 hover:text-blue-600">
                      <span>Services</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border overflow-hidden z-50"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          <Link
                            to="/services"
                            className="flex items-center justify-between px-4 py-3 font-semibold hover:bg-blue-50 text-blue-600 border-b"
                          >
                            <span>All Services</span>
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                          <div className="max-h-64 overflow-y-auto py-1">
                            {services.map((service) => (
                              <Link
                                key={service.path}
                                to={service.path}
                                className="block px-4 py-2.5 text-sm hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>

              {/* MOBILE HEADER */}
              <div className="lg:hidden flex justify-between items-center w-full">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <img 
                    src={logo} 
                    alt="logo" 
                    className="h-8 transition-all duration-300"
                  />
                </Link>

                <div className="flex items-center gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-full text-sm h-9 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Start</Link>
                  </Button>
                  
                  <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2.5 rounded-xl hover:bg-gray-100 transition-colors active:bg-gray-200"
                    aria-label="Toggle menu"
                  >
                    {isMobileMenuOpen ? (
                      <X className="h-5 w-5 text-gray-700" />
                    ) : (
                      <Menu className="h-5 w-5 text-gray-700" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Render Mobile Menu as Portal directly in body */}
      <MobileMenuPortal />
    </>
  );
};

export default Navigation;