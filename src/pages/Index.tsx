import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MovieRow from "@/components/MovieRow";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import SuccessPage from "@/components/SuccessPage";
import { supabase } from "@/integrations/supabase/client";
import { Session, User } from "@supabase/supabase-js";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (event === 'SIGNED_IN' && session?.user) {
          setShowSuccess(true);
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignInClick = () => {
    setIsAuthModalOpen(true);
  };

  const handleAuthSuccess = (email: string) => {
    // Session will be handled by onAuthStateChange
  };

  const handleContinue = () => {
    setShowSuccess(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setShowSuccess(false);
  };

  // Show success page after authentication
  if (showSuccess && user) {
    return (
      <SuccessPage 
        userEmail={user.email || ""} 
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