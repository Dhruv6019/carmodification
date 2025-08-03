import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, Star } from "lucide-react";

export const ModelsShowcase = () => {
  const models = [
    {
      name: "Lancer GT",
      category: "Sports Coupe",
      price: "$89,999",
      specs: ["0-60 in 3.2s", "580 HP", "Top Speed 205 mph"],
      features: ["Carbon Fiber Body", "Adaptive Suspension", "Racing Interior"]
    },
    {
      name: "Phantom Elite",
      category: "Luxury Sedan",
      price: "$125,999",
      specs: ["0-60 in 4.1s", "450 HP", "Top Speed 180 mph"],
      features: ["Massage Seats", "360° Camera", "Premium Audio"]
    },
    {
      name: "Elite Roadster",
      category: "Convertible",
      price: "$199,999",
      specs: ["0-60 in 2.8s", "720 HP", "Top Speed 220 mph"],
      features: ["Retractable Roof", "Track Mode", "Custom Paint"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-luxury-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-foreground mb-4">
            OUR <span className="text-luxury-red">COLLECTION</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our exclusive range of luxury vehicles, each crafted to deliver 
            an unparalleled driving experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <Card key={index} className="bg-gradient-surface border-luxury-red/20 overflow-hidden group hover:shadow-luxury transition-all duration-500 hover:scale-105">
              <div className="p-6 space-y-6">
                {/* Model Header */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-luxury-red text-sm font-semibold">{model.category}</span>
                    <Star className="w-4 h-4 text-luxury-red" />
                  </div>
                  <h3 className="text-2xl font-black text-foreground">{model.name}</h3>
                  <p className="text-3xl font-bold text-luxury-red">{model.price}</p>
                </div>

                {/* Specs */}
                <div className="space-y-3">
                  <h4 className="text-foreground font-semibold flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-luxury-red" />
                    Performance
                  </h4>
                  <div className="space-y-1">
                    {model.specs.map((spec, idx) => (
                      <div key={idx} className="text-muted-foreground text-sm">
                        • {spec}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-foreground font-semibold flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-luxury-red" />
                    Features
                  </h4>
                  <div className="space-y-1">
                    {model.features.map((feature, idx) => (
                      <div key={idx} className="text-muted-foreground text-sm">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button variant="glass" className="w-full group-hover:variant-luxury transition-all duration-300">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};