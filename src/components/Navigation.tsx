import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-gradient-glass backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
            <span className="text-foreground font-bold text-sm">LC</span>
          </div>
          <span className="text-foreground font-bold text-xl">LUXURY CARS</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-luxury-red transition-colors">Home</a>
          <a href="#" className="text-foreground hover:text-luxury-red transition-colors">Models</a>
          <a href="#" className="text-foreground hover:text-luxury-red transition-colors">Inventory</a>
          <a href="#" className="text-foreground hover:text-luxury-red transition-colors">Contact Us</a>
        </div>

        {/* Search and Menu */}
        <div className="flex items-center space-x-4">
          <Button variant="glass" size="icon">
            <Search className="w-4 h-4" />
          </Button>
          <Button variant="glass" size="icon" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};