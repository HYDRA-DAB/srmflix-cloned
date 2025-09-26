import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";

interface SuccessPageProps {
  userEmail: string;
  onContinue: () => void;
}

const SuccessPage = ({ userEmail, onContinue }: SuccessPageProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle className="w-16 h-16 text-primary" />
        </div>
        
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome, SRM Student! 🎉
          </h1>
          
          <p className="text-muted-foreground">
            You have successfully signed in with{" "}
            <span className="text-primary font-semibold">{userEmail}</span>
          </p>
          
          <p className="text-sm text-muted-foreground">
            You now have access to all SRM exclusive content on Netflix.
          </p>
        </div>
        
        <div className="pt-4">
          <Button 
            onClick={onContinue}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
          >
            Continue to Netflix
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;