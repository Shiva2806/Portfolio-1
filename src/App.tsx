import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation"; // Reverted to your existing component
import Lenis from "lenis"; 
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // --- SETUP HEAVY SMOOTH SCROLL (Essential for the "Video" feel) ---
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          
          {/* --- GLOBAL CINEMATIC GRAIN OVERLAY --- */}
          <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.04] mix-blend-overlay">
            <svg className="w-full h-full">
              <filter id="noiseFilter">
                <feTurbulence 
                  type="fractalNoise" 
                  baseFrequency="0.8" 
                  numOctaves="3" 
                  stitchTiles="stitch" 
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
          </div>

          <Toaster />
          <Sonner />
          
          <BrowserRouter>
            
            {/* Using your existing Lovable Navigation */}
            <Navigation />
            
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;