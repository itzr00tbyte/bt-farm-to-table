import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">BT Foods</h3>
            <p className="text-gray-200">
              Committed to providing high-quality, sustainable food products while supporting local farmers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-200 hover:text-accent-gold transition-colors duration-200 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/all-products" 
                  className="text-gray-200 hover:text-accent-gold transition-colors duration-200 inline-block"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/about-contact" 
                  className="text-gray-200 hover:text-accent-gold transition-colors duration-200 inline-block"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/all-products" 
                  className="text-gray-200 hover:text-accent-gold transition-colors duration-200 inline-block"
                >
                  Fruit Powders
                </Link>
              </li>
              <li>
                <Link 
                  to="/all-products" 
                  className="text-gray-200 hover:text-accent-gold transition-colors duration-200 inline-block"
                >
                  Vegetable Powders
                </Link>
              </li>
              <li>
                <Link 
                  to="/all-products" 
                  className="text-gray-200 hover:text-accent-gold transition-colors duration-200 inline-block"
                >
                  Dehydrated Vegetables
                </Link>
              </li>
              <li>
                <Link 
                  to="/all-products" 
                  className="text-gray-200 hover:text-accent-gold transition-colors duration-200 inline-block"
                >
                  Spices
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent-gold mt-1 flex-shrink-0" />
                <a 
                  href="https://maps.google.com/?q=7-13,+Unnava,+Edlapdu,+Guntur,+Andhra+Pradesh+-+522233" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-accent-gold transition-colors duration-200"
                >
                  7-13, Unnava, Edlapdu, Guntur<br />
                  Andhra Pradesh - 522233
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-gold" />
                <a 
                  href="tel:+917893533766" 
                  className="text-gray-200 hover:text-accent-gold transition-colors duration-200"
                >
                  +917893533766
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-gold" />
                <a 
                  href="mailto:info@BalaTradeElite.com" 
                  className="text-gray-200 hover:text-accent-gold transition-colors duration-200"
                >
                  info@BalaTradeElite.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8">
          <div className="text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} BT Foods. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;