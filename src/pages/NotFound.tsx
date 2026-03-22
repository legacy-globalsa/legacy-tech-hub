import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.02]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="text-center relative z-10 animate-fade-up">
        <h1 className="mb-2 text-8xl font-display font-bold text-foreground/10">404</h1>
        <p className="mb-6 text-xl font-display font-semibold text-foreground">Page not found</p>
        <p className="mb-8 text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 hover:shadow-lg transition-all duration-300 active:scale-[0.97]"
        >
          Return Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
