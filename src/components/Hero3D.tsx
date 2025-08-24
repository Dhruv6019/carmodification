import { Button } from "@/components/ui/button";
import { Star, ArrowLeft, ArrowRight, Gauge, Wrench, Zap } from "lucide-react";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import luxuryCarHero from "@/assets/luxury-car-hero.jpg";

export const Hero3D = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const modPackages = [
    { 
      name: "BMW M4", 
      model: "PERFORMANCE", 
      price: "FROM $8,999",
      rating: 4.8,
      description: "Premium car modifications available now. Experience our professional automotive expertise with enhanced performance, racing lines and breathability.",
      specs: [
        "800+ HORSE POWER",
        "TWIN TURBO V6 ENGINE", 
        "CARBON FIBER BODY KIT"
      ]
    },
    { 
      name: "PORSCHE", 
      model: "AESTHETIC", 
      price: "FROM $6,499",
      rating: 4.9,
      description: "Transform your ride with our luxury modification packages. Custom paint jobs, interior upgrades and premium aesthetic enhancements.",
      specs: [
        "CUSTOM PAINT JOBS",
        "LUXURY INTERIOR TRIM",
        "PREMIUM SOUND SYSTEM"
      ]
    },
    { 
      name: "FERRARI", 
      model: "RACING", 
      price: "FROM $15,999", 
      rating: 5.0,
      description: "Professional racing modifications for the ultimate driving experience. Track-ready performance upgrades and aerodynamic enhancements.",
      specs: [
        "RACING SUSPENSION",
        "AERODYNAMIC PACKAGE",
        "LIGHTWEIGHT MATERIALS"
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % modPackages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + modPackages.length) % modPackages.length);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Dark mesh background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.1),transparent_50%)] opacity-60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(239,68,68,0.08),transparent_50%)]"></div>
      
      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center min-h-screen pt-20">
        
        {/* Left Content */}
        <div className="space-y-8">
          {/* Model Name */}
          <div className="space-y-4">
            <h1 className="text-7xl lg:text-8xl font-black text-white leading-none tracking-tight uppercase">
              {modPackages[currentSlide].name}
            </h1>
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-300 uppercase tracking-wide">
              {modPackages[currentSlide].model}
            </h2>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <span className="text-4xl font-bold text-white">{modPackages[currentSlide].rating}</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${i < Math.floor(modPackages[currentSlide].rating) ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} 
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
            {modPackages[currentSlide].description}
          </p>

          {/* Price */}
          <div className="text-white text-xl font-semibold">
            {modPackages[currentSlide].price}
          </div>

          {/* Explore Button */}
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-12 py-6 text-lg font-semibold tracking-wide transition-all duration-300"
          >
            EXPLORE
          </Button>
        </div>

        {/* Right Content - Car & Specs */}
        <div className="relative space-y-8">
          {/* Specs Section */}
          <div className="absolute top-0 right-0 z-20 space-y-4">
            <h3 className="text-white text-lg font-bold tracking-wide">SPECS</h3>
            <div className="space-y-3">
              {modPackages[currentSlide].specs.map((spec, index) => (
                <div key={index} className="flex items-center space-x-3 text-slate-300">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <span className="text-sm font-medium">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Car Image */}
          <div className="relative group">
            <div 
              className="w-full h-96 lg:h-[500px] bg-cover bg-center bg-no-repeat transition-all duration-700 group-hover:scale-105 filter brightness-110 contrast-110"
              style={{ backgroundImage: `url(${luxuryCarHero})` }}
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-8 left-8 flex items-center space-x-8">
        {/* Slide Controls */}
        <div className="flex items-center space-x-6">
          <button 
            onClick={prevSlide}
            className="text-white hover:text-blue-400 transition-colors p-2"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          {/* Car Thumbnails */}
          <div className="flex space-x-4">
            {modPackages.map((pkg, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-16 h-10 bg-cover bg-center rounded transition-all duration-300 border-2 ${
                  index === currentSlide 
                    ? 'border-white shadow-lg scale-110' 
                    : 'border-slate-600 hover:border-slate-400 opacity-60 hover:opacity-80'
                }`}
                style={{ backgroundImage: `url(${luxuryCarHero})` }}
              />
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className="text-white hover:text-blue-400 transition-colors p-2"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Bottom Right - Social & Brand */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-6 text-slate-400">
        <div className="flex space-x-4">
          <button className="hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </button>
          <button className="hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
            </svg>
          </button>
        </div>
        <div className="text-sm">
          CARMODS
        </div>
      </div>
    </section>
  );
};