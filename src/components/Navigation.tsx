import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, User } from 'lucide-react';

interface NavigationProps {
  onLoginClick: () => void;
  onAboutClick: () => void;
}

const Navigation = ({ onLoginClick, onAboutClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-poppins font-bold text-primary">EduPortal</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={onAboutClick}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              About Us
            </button>
            <a href="#features" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
              Features
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
              Contact
            </a>
            <Button 
              onClick={onLoginClick}
              className="btn-hero px-6 py-2 rounded-lg font-medium"
            >
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-foreground"></div>
              <div className="w-6 h-0.5 bg-foreground"></div>
              <div className="w-6 h-0.5 bg-foreground"></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={onAboutClick}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                About Us
              </button>
              <a href="#features" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                Features
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                Contact
              </a>
              <Button 
                onClick={onLoginClick}
                className="btn-hero w-full py-2 rounded-lg font-medium"
              >
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;