import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden px-4">
      <div className="text-center relative z-10 max-w-md mx-auto space-y-4">
        <h1 className="font-display text-7xl sm:text-8xl font-extrabold text-primary tracking-tight">
          404
        </h1>

        <h2 className="font-display text-2xl font-bold text-foreground">
          Page Not Found
        </h2>

        <p className="text-sm text-muted-foreground font-body leading-relaxed">
          The link you requested is unavailable or has been relocated.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Button variant="default" asChild>
            <Link to="/">
              <Home className="w-4 h-4 mr-1.5" />
              Return to Home
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
