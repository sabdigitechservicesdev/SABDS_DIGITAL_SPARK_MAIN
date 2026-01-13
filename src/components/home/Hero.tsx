import { useEffect, useRef, useState } from "react";
import heroVideo from "@/assets/hero-video.mp4";
import heroVideoSmall from "@/assets/hero-small2.mp4";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoSource, setVideoSource] = useState<string>("");

  // Detect mobile screen and set video source immediately
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setVideoSource(mobile ? heroVideoSmall : heroVideo);
    };

    checkMobile();
    
    const handleResize = () => {
      checkMobile();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  // Reset and reload video when source changes
  useEffect(() => {
    if (videoRef.current && videoSource && isVideoLoaded) {
      videoRef.current.pause();
      videoRef.current.src = videoSource;
      videoRef.current.load();
      videoRef.current.play().catch(console.error);
    }
  }, [videoSource, isVideoLoaded]);

  // Ensure video plays continuously
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVideoLoaded) return;

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
    }, 2000);

    return () => clearInterval(checkPlayback);
  }, [isVideoLoaded]);

  // Handle video loaded
  const handleLoadedData = () => {
    setIsVideoLoaded(true);
  };

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
    <div className="relative w-full bg-white" style={{ height: '100vh' }}>
      {/* Video Container - Full screen */}
      <div className="absolute inset-0 bg-white">
        {/* Video Element - Only render when we know the source */}
        {videoSource && (
          <video
            ref={videoRef}
            key={videoSource}
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            onLoadedData={handleLoadedData}
            onEnded={handleVideoEnd}
            onError={handleVideoError}
            className="absolute inset-0 w-full h-full transition-opacity duration-300"
            style={{
              opacity: isVideoLoaded ? 1 : 0,
              objectFit: isMobile === true ? 'cover' : 'cover',
              objectPosition: 'center',
              backgroundColor: 'white'
            }}
          >
            <source 
              src={videoSource} 
              type="video/mp4" 
            />
            Your browser does not support HTML5 video.
          </video>
        )}

        {/* Loading state */}
        {(!isVideoLoaded || isMobile === null) && (
          <div className="absolute inset-0 bg-white flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
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

      <style jsx global>{`
        /* Full screen hero section only - don't affect body/root */
        .hero-section {
          height: 100vh;
          min-height: 100vh;
          width: 100%;
          position: relative;
        }

        /* Mobile full screen */
        @media (max-width: 768px) {
          .hero-section {
            height: 100vh;
            height: 100dvh;
            min-height: 100dvh;
          }
          
          video {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            background-color: white !important;
          }
        }

        /* Desktop full screen */
        @media (min-width: 769px) {
          .hero-section {
            height: 100vh;
            min-height: 100vh;
          }
          
          video {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
          }
        }

        /* iOS specific full screen */
        @supports (-webkit-touch-callout: none) {
          .hero-section {
            height: -webkit-fill-available;
            min-height: -webkit-fill-available;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;