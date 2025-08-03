import { Navigation } from "@/components/Navigation";
import { Hero3D } from "@/components/Hero3D";
import { ModelsShowcase } from "@/components/ModelsShowcase";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-luxury-black overflow-x-hidden">
      <Navigation />
      <Hero3D />
      <ModelsShowcase />
      <ContactSection />
    </div>
  );
};

export default Index;
