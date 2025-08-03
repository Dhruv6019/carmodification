import { Button } from "@/components/ui/button";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import luxuryCarHero from "@/assets/luxury-car-hero.jpg";

export const Hero3D = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const modPackages = [
    { name: "TURBO", type: "PERFORMANCE", price: "FROM $5,999" },
    { name: "CARBON", type: "AESTHETIC", price: "FROM $3,499" },
    { name: "TRACK", type: "RACING", price: "FROM $12,999" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % modPackages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + modPackages.length) % modPackages.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-black">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,0,0,0.1),transparent_50%)]"></div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-20">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-8xl lg:text-9xl font-black text-foreground leading-none tracking-tight">
              {modPackages[currentSlide].name}
            </h1>
            <div className="flex items-center space-x-4 text-luxury-red text-xl">
              <span>{modPackages[currentSlide].type}</span>
              <span>•</span>
              <span>{modPackages[currentSlide].price}</span>
            </div>
          </div>
          
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
            Transform your vehicle with our professional modification services. 
            From performance upgrades to aesthetic enhancements, we create automotive masterpieces.
          </p>
          
          <div className="flex items-center space-x-4">
            <Button variant="luxury" size="xl" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              View Projects
            </Button>
            <Button variant="glass" size="xl">
              Get Quote
            </Button>
          </div>
        </div>

        {/* Right Content - Car Showcase */}
        <div className="relative">
          <div className="relative group">
            {/* 3D Car Container */}
            <div 
              className="relative w-full h-96 lg:h-[500px] transform-gpu transition-all duration-700 hover:scale-105 hover:rotate-1 bg-cover bg-center bg-no-repeat drop-shadow-2xl filter brightness-110 contrast-110"
              style={{ backgroundImage: `url(${luxuryCarHero})` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-luxury-red/30 via-transparent to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-glass backdrop-blur-xl rounded-full border border-white/10 flex items-center justify-center opacity-80 animate-pulse">
              <span className="text-luxury-red font-bold">3D</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
        <Button 
          variant="glass" 
          size="icon"
          onClick={prevSlide}
          className="hover:scale-110 transition-transform"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        
        <div className="flex space-x-2">
          {modPackages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-luxury-red shadow-glow' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
        
        <Button 
          variant="glass" 
          size="icon"
          onClick={nextSlide}
          className="hover:scale-110 transition-transform"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Floating Website URL */}
      <div className="absolute bottom-8 right-8 text-muted-foreground text-sm">
        www.carmods.com
      </div>
    </section>
  );
};