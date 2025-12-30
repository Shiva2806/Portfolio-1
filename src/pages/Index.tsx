import { HeroSection } from "@/components/HeroSection";
import { WorkSection } from "@/components/WorkSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="w-full bg-[#050508] text-white overflow-x-hidden selection:bg-cyan-400/20 selection:text-cyan-200">
      <HeroSection />
      <WorkSection />
      <ServicesSection />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default Index;
