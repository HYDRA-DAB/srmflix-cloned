import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MovieRow from "@/components/MovieRow";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import SuccessPage from "@/components/SuccessPage";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSignInClick = () => {
    setIsAuthModalOpen(true);
  };

  const handleAuthSuccess = (email: string) => {
    setUser({ email });
    setShowSuccess(true);
  };

  const handleContinue = () => {
    setShowSuccess(false);
  };

  // Show success page after authentication
  if (showSuccess && user) {
    return (
      <SuccessPage 
        userEmail={user.email} 
        onContinue={handleContinue}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar onSignInClick={handleSignInClick} />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Movie Rows */}
      <div className="space-y-8 pb-16">
        <MovieRow title="Trending Now" />
        <MovieRow title="Popular on Netflix" />
        <MovieRow title="Action Movies" />
        <MovieRow title="Sci-Fi & Fantasy" />
        <MovieRow title="Horror Movies" />
        <MovieRow title="Romantic Movies" />
      </div>
      
      {/* Footer */}
      <Footer />
      
      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default Index;