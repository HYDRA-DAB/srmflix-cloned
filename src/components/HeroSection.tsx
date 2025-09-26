import { Button } from "./ui/button";
import { Play, Info } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 px-4 md:px-16 max-w-2xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          Shadow Strike
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          When darkness falls, only one operative can strike back. Join the ultimate action thriller 
          that will keep you on the edge of your seat from start to finish.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            <Play className="w-5 h-5 mr-2" fill="currentColor" />
            Play
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-muted/70 hover:bg-muted/50 text-foreground font-semibold backdrop-blur-sm"
          >
            <Info className="w-5 h-5 mr-2" />
            More Info
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;