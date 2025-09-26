import { useState } from "react";
import { Button } from "./ui/button";

interface NavbarProps {
  onSignInClick: () => void;
}

const Navbar = ({ onSignInClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background to-transparent px-4 md:px-16 py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-netflix-red text-2xl md:text-3xl font-bold">
          NETFLIX
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
            Home
          </a>
          <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
            TV Shows
          </a>
          <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
            Movies
          </a>
          <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
            New & Popular
          </a>
          <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
            My List
          </a>
        </div>

        {/* Sign In Button */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="secondary" 
            size="sm"
            onClick={onSignInClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Sign In
          </Button>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border">
          <div className="flex flex-col space-y-4 p-4">
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              TV Shows
            </a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              Movies
            </a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              New & Popular
            </a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              My List
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;