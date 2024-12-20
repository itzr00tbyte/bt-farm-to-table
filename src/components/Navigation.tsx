import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-primary">BT Foods</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-accent-brown hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/all-products" className="text-accent-brown hover:text-primary transition-colors">
              Products
            </Link>
            <Link to="/about-contact" className="text-accent-brown hover:text-primary transition-colors">
              About
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-accent-brown hover:text-primary"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-accent-brown hover:text-primary"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/all-products"
              className="block px-3 py-2 text-accent-brown hover:text-primary"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              to="/about-contact"
              className="block px-3 py-2 text-accent-brown hover:text-primary"
              onClick={toggleMenu}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;