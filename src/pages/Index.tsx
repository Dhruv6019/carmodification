import { Hero3D } from "@/components/Hero3D";
import { FeatureCards } from "@/components/FeatureCards";
import { LivePreviewTeaser } from "@/components/LivePreviewTeaser";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero3D />
      <AnimatedSection animation="fadeInUp">
        <FeatureCards />
      </AnimatedSection>
      <AnimatedSection animation="slideInLeft" delay={100}>
        <LivePreviewTeaser />
      </AnimatedSection>
      <AnimatedSection animation="scaleIn" delay={200}>
        <TestimonialsCarousel />
      </AnimatedSection>
      <AnimatedSection animation="fadeInUp" delay={300}>
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default Index;
