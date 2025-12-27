// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";
// import { ArrowRight, TrendingUp, Users, Award, Sparkles, Star, ChevronDown, Zap, Target, Globe } from "lucide-react";
// import websiteDev from "@/assets/services/website-development.jpg";
// import digitalMarketing from "@/assets/services/digital-marketing.jpg";
// import seoService from "@/assets/services/seo.jpg";
// import socialMedia from "@/assets/services/social-media.jpg";

// const Hero = () => {
//   const [counts, setCounts] = useState({
//     clients: 0,
//     projects: 0,
//     rating: 0,
//   });

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const sectionRef = useRef<HTMLElement>(null);
//   const statsRef = useRef<HTMLDivElement>(null);
  
//   const backgroundImages = [websiteDev, digitalMarketing, seoService, socialMedia];

//   // Predefined positions for floating icons to prevent jitter
//   const floatingIconPositions = [
//     { top: '15%', left: '10%', delay: 0, duration: 20 },
//     { top: '25%', left: '85%', delay: 2, duration: 25 },
//     { top: '65%', left: '15%', delay: 4, duration: 22 },
//     { top: '75%', left: '80%', delay: 6, duration: 18 },
//     { top: '35%', left: '25%', delay: 1, duration: 24 },
//     { top: '45%', left: '75%', delay: 3, duration: 21 },
//   ];

//   const floatingIcons = [Globe, Target, Zap, Star, Sparkles, Award];

//   // Parallax effect on mouse move
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (!sectionRef.current) return;
      
//       const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
//       const x = (e.clientX - left) / width - 0.5;
//       const y = (e.clientY - top) / height - 0.5;
      
//       setMousePosition({ x, y });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Scroll progress
//   useEffect(() => {
//     const handleScroll = () => {
//       const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
//       const currentScroll = window.scrollY;
//       setScrollProgress((currentScroll / totalScroll) * 100);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Image slider with crossfade
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => 
//         (prevIndex + 1) % backgroundImages.length
//       );
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   // Counting animation
//   useEffect(() => {
//     const duration = 2000;
//     const steps = 60;
//     const clientsTarget = 500;
//     const projectsTarget = 1000;
//     const ratingTarget = 4.9;

//     const increment = duration / steps;
//     let currentStep = 0;

//     const easeOutQuad = (t: number) => t * (2 - t);

//     const timer = setInterval(() => {
//       currentStep++;
//       const progress = easeOutQuad(currentStep / steps);

//       setCounts({
//         clients: Math.floor(clientsTarget * progress),
//         projects: Math.floor(projectsTarget * progress),
//         rating: Number((ratingTarget * progress).toFixed(1)),
//       });

//       if (currentStep >= steps) {
//         clearInterval(timer);
//         setCounts({
//           clients: clientsTarget,
//           projects: projectsTarget,
//           rating: ratingTarget,
//         });
//       }
//     }, increment);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative min-h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 "
//     >
//       {/* Animated Gradient Background */}
//       <div className="absolute inset-0">
//         {/* Animated grid pattern */}
//         <div className="absolute inset-0 opacity-30">
//           <div 
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `
//                 linear-gradient(90deg, transparent 95%, rgba(59, 130, 246, 0.1) 100%),
//                 linear-gradient(0deg, transparent 95%, rgba(59, 130, 246, 0.1) 100%)
//               `,
//               backgroundSize: '50px 50px',
//               animation: 'gridMove 20s linear infinite',
//             }}
//           ></div>
//         </div>

//         {/* Smooth floating geometric shapes */}
//         <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-xl animate-float-smooth-1"></div>
//         <div className="absolute top-40 right-20 w-24 h-24 rounded-lg bg-gradient-to-r from-purple-400/15 to-pink-400/15 blur-xl animate-float-smooth-2"></div>
//         <div className="absolute bottom-40 left-32 w-20 h-20 rounded-full bg-gradient-to-r from-green-400/10 to-teal-400/10 blur-xl animate-float-smooth-3"></div>
//         <div className="absolute bottom-20 right-32 w-28 h-28 rounded-lg bg-gradient-to-r from-orange-400/10 to-yellow-400/10 blur-xl animate-float-smooth-4"></div>

//         {/* Animated waves */}
//         <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden opacity-20">
//           <svg 
//             className="absolute bottom-0 w-full h-full animate-wave-smooth"
//             xmlns="http://www.w3.org/2000/svg" 
//             viewBox="0 0 1440 320"
//           >
//             <path 
//               fill="#3b82f6" 
//               fillOpacity="0.3" 
//               d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//             ></path>
//           </svg>
//         </div>

//         {/* Main gradient orbs with smooth parallax */}
//         <div 
//           className="absolute top-1/4 -right-20 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl transition-all duration-1000 ease-out animate-pulse-slow"
//           style={{
//             transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
//           }}
//         />
//         <div 
//           className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl transition-all duration-1000 ease-out animate-pulse-medium"
//           style={{
//             transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
//           }}
//         />
        
//         {/* Smooth floating particles */}
//         {[...Array(15)].map((_, i) => {
//           const size = 2 + Math.random() * 3;
//           const duration = 15 + Math.random() * 10;
//           const delay = i * 0.5;
          
//           return (
//             <div
//               key={i}
//               className="absolute rounded-full animate-particle-smooth"
//               style={{
//                 width: `${size}px`,
//                 height: `${size}px`,
//                 background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(6, 182, 212, 0.4))',
//                 left: `${10 + (i * 6)}%`,
//                 top: `${20 + Math.sin(i) * 60}%`,
//                 animationDuration: `${duration}s`,
//                 animationDelay: `${delay}s`,
//                 opacity: 0.2 + Math.random() * 0.3,
//               }}
//             />
//           );
//         })}
//       </div>

//       {/* Enhanced Image Slider with Animated Effects */}
//       <div className="absolute inset-0">
//         {backgroundImages.map((img, index) => (
//           <div key={index} className="absolute inset-0">
//             {/* Blue glow effect */}
//             <div
//               className="absolute inset-0 transition-all duration-3000 ease-out"
//               style={{
//                 opacity: currentImageIndex === index ? 0.25 : 0,
//                 transform: `scale(${currentImageIndex === index ? 1.1 : 1}) translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
//                 background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
//                 filter: 'blur(60px)',
//                 transition: 'all 3000ms cubic-bezier(0.4, 0, 0.2, 1)',
//               }}
//             />
            
//             {/* Image with animated border */}
//             <div
//               className="absolute inset-0 transition-all duration-3000 ease-out"
//               style={{
//                 opacity: currentImageIndex === index ? 0.2 : 0,
//                 transform: `scale(${currentImageIndex === index ? 1.05 : 1})`,
//                 backgroundImage: `url(${img})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 filter: 'brightness(0.9) saturate(1.1)',
//                 borderRadius: '2rem',
//                 margin: '2rem',
//                 boxShadow: currentImageIndex === index 
//                   ? '0 0 100px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.2), 0 0 20px rgba(59, 130, 246, 0.1)' 
//                   : 'none',
//                 transition: 'all 3000ms cubic-bezier(0.4, 0, 0.2, 1)',
//               }}
//             />
            
//             {/* Animated border */}
//             <div
//               className="absolute inset-0 transition-all duration-3000 ease-out"
//               style={{
//                 opacity: currentImageIndex === index ? 0.6 : 0,
//                 margin: '2rem',
//                 borderRadius: '2rem',
//                 background: 'conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.8), transparent)',
//                 filter: 'blur(10px)',
//                 animation: 'rotateBorder 4s linear infinite',
//               }}
//             />
//           </div>
//         ))}
        
//         {/* Animated gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-cyan-400/5 animate-gradient-flow"></div>
//         <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/70 to-white/80"></div>
//       </div>

//       {/* Smooth Floating Icons */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {floatingIconPositions.map((pos, index) => {
//           const Icon = floatingIcons[index % floatingIcons.length];
//           return (
//             <div
//               key={index}
//               className="absolute p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 animate-float-icon-smooth pointer-events-auto hover:scale-125 hover:bg-white/20 transition-all duration-300 cursor-pointer"
//               style={{
//                 top: pos.top,
//                 left: pos.left,
//                 animationDelay: `${pos.delay}s`,
//                 animationDuration: `${pos.duration}s`,
//                 transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
//               }}
//               title={Icon.displayName || `Icon ${index + 1}`}
//             >
//               <Icon className="h-6 w-6 text-blue-500 hover:text-blue-600 transition-colors" />
//             </div>
//           );
//         })}
//       </div>

//       {/* Content with Enhanced Parallax */}
//       <div 
//         className="container mx-auto px-4 relative z-10 pt-20"
//         style={{
//           transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px) rotateX(${mousePosition.y * 1}deg) rotateY(${mousePosition.x * 1}deg)`,
//           transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//           perspective: '1000px',
//         }}
//       >
//         <div className="max-w-5xl mx-auto text-center space-y-8 pt-20">
//           {/* Main Heading with Animated Effects */}
//           <div className="space-y-4 relative">
//             {/* Animated badge */}
           
            
//             {/* Animated heading with gradient text */}
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up">
//               <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
//                 Best Digital Marketing
//               </span>
//               <br />
//               <span className="relative">
//                 <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent animate-gradient-smooth bg-[length:200%_auto]">
//                   Company in Kolkata & West Bengal
//                 </span>
//                 <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full animate-width-pulse-slow"></span>
//               </span>
//             </h1>
//           </div>

//           {/* Animated Subheading */}
//           <p 
//             className="text-lg md:text-xl text-slate-700 leading-relaxed animate-fade-in-up px-4 md:px-20 relative group"
//             style={{ animationDelay: "0.2s" }}
//           >
//             <span className="relative">
//               Leading digital marketing agency offering expert 
//               <span className="relative mx-2">
//                 <span className="relative z-10 font-semibold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
//                   website development
//                 </span>
//                 <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-200/50 to-cyan-200/50 -rotate-1 animate-underline-expand"></span>
//               </span>
//               ,
//             </span>
//             <br className="hidden sm:block" />
//             <span className="relative">
//               <span className="relative z-10 font-semibold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
//                 SEO services
//               </span>
//               <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-200/50 to-cyan-200/50 -rotate-1 animate-underline-expand" style={{animationDelay: '0.3s'}}></span>
//             </span>
//             , 
//             <span className="relative">
//               <span className="relative z-10 font-semibold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
//                 social media marketing
//               </span>
//               <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-200/50 to-cyan-200/50 -rotate-1 animate-underline-expand" style={{animationDelay: '0.5s'}}></span>
//             </span>
//             , and Google My Business optimization in Kolkata
//           </p>

//           {/* Enhanced CTA Buttons with Animation */}
//           <div 
//             className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" 
//             style={{ animationDelay: "0.4s" }}
//           >
//             <Button 
//               asChild 
//               size="xl" 
//               className="group relative overflow-hidden hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0 hover:scale-105"
//             >
//               <Link to="/contact">
//                 <span className="relative z-10 flex items-center gap-2">
//                   Get Started Today
//                   <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
//                 </span>
//                 {/* Ripple effect */}
//                 <div className="absolute inset-0 overflow-hidden">
//                   <div className="absolute -inset-20 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                 </div>
//                 {/* Glow effect */}
//                 <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
//               </Link>
//             </Button>
//             <Button 
//               asChild 
//               variant="outline" 
//               size="xl"
//               className="group relative overflow-hidden border-2 border-blue-300 hover:border-blue-500 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-500 text-blue-700 hover:text-blue-800 hover:scale-105"
//             >
//               <Link to="/services">
//                 <span className="relative z-10 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
//                   Explore Services
//                   <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//               </Link>
//             </Button>
//           </div>

//           {/* Enhanced Animated Stats Cards */}
//           <div 
//             ref={statsRef}
//             className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 px-4"
//           >
//             {[
//               { 
//                 icon: Users, 
//                 value: counts.clients, 
//                 label: "Happy Clients",
//                 suffix: "+",
//                 color: "from-blue-500 to-cyan-500",
//                 delay: "0s"
//               },
//               { 
//                 icon: TrendingUp, 
//                 value: counts.projects, 
//                 label: "Projects Completed",
//                 suffix: "+",
//                 color: "from-purple-500 to-pink-500",
//                 delay: "0.1s"
//               },
//               { 
//                 icon: Award, 
//                 value: counts.rating, 
//                 label: "Client Satisfaction",
//                 suffix: "/5",
//                 color: "from-green-500 to-teal-500",
//                 delay: "0.2s"
//               }
//             ].map((stat, index) => (
//               <div
//                 key={index}
//                 className="relative group animate-fade-in-up"
//                 style={{ animationDelay: stat.delay }}
//               >
//                 {/* Hover glow effect */}
//                 <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
//                 {/* Glass card */}
//                 <div className="relative bg-gradient-to-br from-white/90 via-white/80 to-white/90 backdrop-blur-xl border border-white/40 rounded-3xl p-8 hover:border-white/60 hover:shadow-2xl hover:shadow-blue-200/20 hover:-translate-y-3 transition-all duration-700 overflow-hidden">
//                   {/* Animated background gradient */}
//                   <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                  
//                   {/* Shimmer effect */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
//                   <div className="relative">
//                     {/* Animated icon */}
//                     <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-white to-slate-50 shadow-lg mb-6 group-hover:scale-110 transition-all duration-500 border border-white/50 hover:rotate-12`}>
//                       <div className="relative">
//                         <stat.icon className="h-10 w-10 text-blue-600 relative z-10" />
//                         <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-sm"></div>
//                       </div>
//                     </div>
                    
//                     {/* Counter with animation */}
//                     <div className="relative">
//                       <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent mb-2">
//                         <span className="counter-animate">{stat.value}</span>
//                         <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent animate-pulse-slow`}>{stat.suffix}</span>
//                       </div>
//                       <div className="text-slate-700 font-medium tracking-wide">{stat.label}</div>
//                     </div>
                    
//                     {/* Animated progress bar */}
//                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full overflow-hidden">
//                       <div 
//                         className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-progress-bar-smooth"
//                         style={{ animationDelay: `${index * 0.2}s` }}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Smooth Animated Scroll Indicator */}
//       <div 
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-smooth cursor-pointer group"
//         onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
//       >
//         {/* Scroll progress circle */}
//         <div className="absolute -inset-4">
//           <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
//             <path
//               d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//               fill="none"
//               stroke="rgba(59, 130, 246, 0.1)"
//               strokeWidth="2"
//             />
//             <path
//               d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//               fill="none"
//               stroke="url(#scrollGradient)"
//               strokeWidth="2"
//               strokeDasharray={`${scrollProgress}, 100`}
//               className="transition-all duration-300 ease-out"
//             />
//             <defs>
//               <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                 <stop offset="0%" stopColor="#3b82f6" />
//                 <stop offset="100%" stopColor="#06b6d4" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>
        
//         <div className="relative w-8 h-14 border-2 border-blue-300/50 rounded-full flex justify-center group-hover:border-blue-500 transition-all duration-300 backdrop-blur-sm bg-white/30 group-hover:bg-white/50">
//           <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full mt-3 group-hover:from-blue-600 group-hover:to-cyan-600 animate-scroll-wheel-smooth transition-all duration-300"></div>
//         </div>
//         <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-blue-600/80 text-sm group-hover:text-blue-700 transition-colors duration-300 font-medium animate-pulse-slow">
//           Scroll to explore
//         </div>
//       </div>

//       {/* Enhanced CSS Animations for Smooth Movement */}
//       <style>{`
//         @keyframes float-smooth-1 {
//           0%, 100% { 
//             transform: translate(0, 0) scale(1); 
//           }
//           25% { 
//             transform: translate(15px, -20px) scale(1.05); 
//           }
//           50% { 
//             transform: translate(30px, 0) scale(1); 
//           }
//           75% { 
//             transform: translate(15px, 20px) scale(0.95); 
//           }
//         }
        
//         @keyframes float-smooth-2 {
//           0%, 100% { 
//             transform: translate(0, 0) rotate(0deg); 
//           }
//           33% { 
//             transform: translate(-20px, -15px) rotate(120deg); 
//           }
//           66% { 
//             transform: translate(20px, 15px) rotate(240deg); 
//           }
//         }
        
//         @keyframes float-smooth-3 {
//           0%, 100% { 
//             transform: translate(0, 0) scale(1); 
//           }
//           50% { 
//             transform: translate(-25px, -25px) scale(1.1); 
//           }
//         }
        
//         @keyframes float-smooth-4 {
//           0%, 100% { 
//             transform: translate(0, 0) rotate(0deg); 
//           }
//           25% { 
//             transform: translate(20px, -10px) rotate(90deg); 
//           }
//           50% { 
//             transform: translate(0, 20px) rotate(180deg); 
//           }
//           75% { 
//             transform: translate(-20px, -10px) rotate(270deg); 
//           }
//         }
        
//         @keyframes float-icon-smooth {
//           0% { 
//             transform: translate(0, 0) rotate(0deg) scale(1); 
//           }
//           25% { 
//             transform: translate(10px, -15px) rotate(90deg) scale(1.05); 
//           }
//           50% { 
//             transform: translate(20px, 0) rotate(180deg) scale(1); 
//           }
//           75% { 
//             transform: translate(10px, 15px) rotate(270deg) scale(0.95); 
//           }
//           100% { 
//             transform: translate(0, 0) rotate(360deg) scale(1); 
//           }
//         }
        
//         @keyframes particle-smooth {
//           0% { 
//             transform: translateY(0) translateX(0) scale(1); 
//             opacity: 0.2; 
//           }
//           25% { 
//             transform: translateY(-50px) translateX(25px) scale(1.2); 
//             opacity: 0.4; 
//           }
//           50% { 
//             transform: translateY(-100px) translateX(50px) scale(1.5); 
//             opacity: 0.6; 
//           }
//           75% { 
//             transform: translateY(-50px) translateX(25px) scale(1.2); 
//             opacity: 0.4; 
//           }
//           100% { 
//             transform: translateY(0) translateX(0) scale(1); 
//             opacity: 0.2; 
//           }
//         }
        
//         @keyframes scroll-wheel-smooth {
//           0% { transform: translateY(0); opacity: 1; }
//           25% { transform: translateY(3px); opacity: 0.8; }
//           50% { transform: translateY(6px); opacity: 0.6; }
//           75% { transform: translateY(3px); opacity: 0.8; }
//           100% { transform: translateY(0); opacity: 1; }
//         }
        
//         @keyframes gradient-smooth {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
        
//         @keyframes text-shimmer {
//           0% { background-position: -100% center; }
//           100% { background-position: 200% center; }
//         }
        
//         @keyframes gradient-flow {
//           0% { background-position: 0% 0%; }
//           50% { background-position: 100% 100%; }
//           100% { background-position: 0% 0%; }
//         }
        
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.3; transform: scale(1); }
//           50% { opacity: 0.5; transform: scale(1.02); }
//         }
        
//         @keyframes pulse-medium {
//           0%, 100% { opacity: 0.2; transform: scale(1); }
//           50% { opacity: 0.4; transform: scale(1.03); }
//         }
        
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
        
//         @keyframes wave-smooth {
//           0% { transform: translateX(0) translateY(0); }
//           25% { transform: translateX(-25px) translateY(5px); }
//           50% { transform: translateX(-50px) translateY(10px); }
//           75% { transform: translateX(-25px) translateY(5px); }
//           100% { transform: translateX(0) translateY(0); }
//         }
        
//         @keyframes ping-slow {
//           0% { transform: scale(1); opacity: 0.5; }
//           100% { transform: scale(2.5); opacity: 0; }
//         }
        
//         @keyframes rotateBorder {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
        
//         @keyframes width-pulse-slow {
//           0%, 100% { width: 0; opacity: 0; }
//           25% { width: 100px; opacity: 0.5; }
//           50% { width: 200px; opacity: 1; }
//           75% { width: 100px; opacity: 0.5; }
//         }
        
//         @keyframes underline-expand {
//           0% { width: 0; }
//           100% { width: 100%; }
//         }
        
//         @keyframes progress-bar-smooth {
//           0% { width: 0%; }
//           100% { width: 100%; }
//         }
        
//         @keyframes bounce-smooth {
//           0%, 100% { transform: translate(-50%, 0); }
//           50% { transform: translate(-50%, -8px); }
//         }
        
//         @keyframes gridMove {
//           0% { background-position: 0 0; }
//           100% { background-position: 50px 50px; }
//         }
        
//         .animate-float-smooth-1 {
//           animation: float-smooth-1 15s ease-in-out infinite;
//         }
        
//         .animate-float-smooth-2 {
//           animation: float-smooth-2 20s ease-in-out infinite;
//         }
        
//         .animate-float-smooth-3 {
//           animation: float-smooth-3 18s ease-in-out infinite;
//         }
        
//         .animate-float-smooth-4 {
//           animation: float-smooth-4 22s ease-in-out infinite;
//         }
        
//         .animate-float-icon-smooth {
//           animation: float-icon-smooth var(--duration, 20s) ease-in-out infinite;
//           will-change: transform;
//           transform-style: preserve-3d;
//         }
        
//         .animate-particle-smooth {
//           animation: particle-smooth var(--duration) ease-in-out infinite;
//         }
        
//         .animate-scroll-wheel-smooth {
//           animation: scroll-wheel-smooth 2s ease-in-out infinite;
//         }
        
//         .animate-gradient-smooth {
//           animation: gradient-smooth 4s ease infinite;
//         }
        
//         .animate-text-shimmer {
//           animation: text-shimmer 3s linear infinite;
//         }
        
//         .animate-gradient-flow {
//           animation: gradient-flow 15s ease infinite;
//           background-size: 200% 200%;
//         }
        
//         .animate-pulse-slow {
//           animation: pulse-slow 3s ease-in-out infinite;
//         }
        
//         .animate-pulse-medium {
//           animation: pulse-medium 4s ease-in-out infinite;
//         }
        
//         .animate-spin-slow {
//           animation: spin-slow 15s linear infinite;
//         }
        
//         .animate-wave-smooth {
//           animation: wave-smooth 10s ease-in-out infinite;
//         }
        
//         .animate-ping-slow {
//           animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
//         }
        
//         .animate-width-pulse-slow {
//           animation: width-pulse-slow 5s ease-in-out infinite;
//         }
        
//         .animate-underline-expand {
//           animation: underline-expand 1s ease-out forwards;
//           animation-play-state: paused;
//         }
        
//         .group:hover .animate-underline-expand {
//           animation-play-state: running;
//         }
        
//         .animate-progress-bar-smooth {
//           animation: progress-bar-smooth 2s ease-out forwards;
//           animation-play-state: paused;
//         }
        
//         .group:hover .animate-progress-bar-smooth {
//           animation-play-state: running;
//         }
        
//         .animate-bounce-smooth {
//           animation: bounce-smooth 2s infinite;
//         }
        
//         .counter-animate {
//           display: inline-block;
//           transition: all 0.3s ease;
//         }
        
//         /* Smooth transitions for all animated elements */
//         .floating-element {
//           will-change: transform, opacity;
//           backface-visibility: hidden;
//           transform-style: preserve-3d;
//         }
        
//         /* Prevent jitter on high refresh rate displays */
//         @media (prefers-reduced-motion: no-preference) {
//           .floating-element {
//             animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;



import { useEffect, useRef, useState } from "react";
import heroVideo from "@/assets/hero-video.mp4";
import heroVideoSmall from "@/assets/hero-small.mp4";
import heroVideoPoster from "@/assets/hero-video.mp4";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('orientationchange', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('orientationchange', checkMobile);
    };
  }, []);

  // Video seamless loop handler
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      if (videoRef.current.currentTime >= 5.99) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(console.error);
      }
    }
  };

  // Ensure video plays continuously
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.play().catch(e => {
        console.log("Autoplay prevented");
      });
    };

    playVideo();

    const checkPlayback = setInterval(() => {
      if (video.paused) {
        playVideo();
      }
    }, 1000);

    return () => clearInterval(checkPlayback);
  }, []);

  // Handle video end
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(console.error);
    }
  };

  // Handle video errors
  const handleVideoError = (e: any) => {
    console.error("Video error:", e);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play().catch(console.error);
      }
    }, 1000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      {/* Video Container */}
      <div className="absolute inset-0 bg-white">
        {/* Video Element */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          poster={heroVideoPoster}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnd}
          onError={handleVideoError}
          className="absolute inset-0 w-full h-full"
          style={{
            filter: 'brightness(1.1) contrast(1.05)',
            objectFit: isMobile ? 'contain' : 'cover',
            objectPosition: 'center'
          }}
        >
          <source src={isMobile ? heroVideoSmall : heroVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>

      {/* Click to play fallback */}
      <div 
        className="absolute inset-0 cursor-pointer"
        onClick={() => {
          if (videoRef.current?.paused) {
            videoRef.current.play().catch(console.error);
          }
        }}
        onTouchStart={() => {
          if (videoRef.current?.paused) {
            videoRef.current.play().catch(console.error);
          }
        }}
      />

      <style>{`
        /* Mobile responsive */
        @media (max-width: 790px) {
          /* Square video container - centered with white background */
          .h-screen {
          
            height: 120vh;
            height: 120dvh;
          }
          
          video {
            background-color: white;
          }
          
          /* Fix for mobile square video */
          @media (orientation: portrait) {
            video {
              width: 100%;
              height: auto;
            }
          }
          
          @media (orientation: landscape) {
            video {
              width: auto;
              height: 100%;
            }
          }
        }

        /* Desktop - Fix zoom issue */
        @media (min-width: 769px) {
          video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
            /* Prevent excessive zoom */
            transform: none !important;
            min-width: 100%;
            min-height: 100%;
          }
        }

        /* iOS specific */
        @supports (-webkit-touch-callout: none) {
          .h-screen {
            height: -webkit-fill-available;
          }
        }

        /* Full screen container */
        .h-screen {
          height: 100vh;
          height: 100dvh;
        }

        /* Ensure white background everywhere */
        body {
          background-color: white;
        }
      `}</style>
    </div>
  );
};

export default Hero;