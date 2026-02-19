import { HeroSection } from "@/components/HeroSection";
import { WorkSection } from "@/components/WorkSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";

const Index = () => (
  <PageLayout>
    <HeroSection />
    <WorkSection />
    <ServicesSection />
    <AboutSection />
    <Footer />
  </PageLayout>
);

export default Index;
