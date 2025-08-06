import { VideoHero } from "@/components/VideoHero";
import { FeatureCards } from "@/components/FeatureCards";
import { LivePreviewTeaser } from "@/components/LivePreviewTeaser";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <VideoHero />
      <FeatureCards />
      <LivePreviewTeaser />
      <TestimonialsCarousel />
      <Footer />
    </div>
  );
};

export default Index;
