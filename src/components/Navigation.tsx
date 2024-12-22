import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/Images/BT Foods Logo File HQ.png"
                alt="BT Foods Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-primary hover:text-accent-gold transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/all-products"
              className="text-primary hover:text-accent-gold transition-colors duration-200"
            >
              Products
            </Link>
            <Link
              to="/about-contact"
              className="text-primary hover:text-accent-gold transition-colors duration-200"
            >
              About & Contact
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-accent-gold focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && isMobile && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-primary hover:text-accent-gold transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/all-products"
              className="block px-3 py-2 rounded-md text-primary hover:text-accent-gold transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about-contact"
              className="block px-3 py-2 rounded-md text-primary hover:text-accent-gold transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              About & Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;