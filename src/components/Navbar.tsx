import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">S</span>
          </div>
          <span className="text-xl font-bold text-foreground">Scoloria</span>
        </Link>

        {!isAuthPage && (
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Signup</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
