
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 md:px-6">
        <div className="flex gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              ProjectPilot
            </span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link to="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
              Dashboard
            </Link>
            <Link to="/calendar" className="text-sm font-medium transition-colors hover:text-primary">
              Calendar
            </Link>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button asChild size="sm" className="hidden md:flex">
            <Link to="/projects/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Project
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
