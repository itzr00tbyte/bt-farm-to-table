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
                <Link to="/" className="text-gray-200 hover:text-accent-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/all-products" className="text-gray-200 hover:text-accent-gold transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about-contact" className="text-gray-200 hover:text-accent-gold transition-colors">
                  About & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li className="text-gray-200">Fruit Powders</li>
              <li className="text-gray-200">Vegetable Powders</li>
              <li className="text-gray-200">Dehydrated Vegetables</li>
              <li className="text-gray-200">Spices</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent-gold" />
                <span className="text-gray-200">123 Farm Road, Agricultural District</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-gold" />
                <span className="text-gray-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-gold" />
                <span className="text-gray-200">info@btfoods.com</span>
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