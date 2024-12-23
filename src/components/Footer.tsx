import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <img
                src="/Images/BT Foods Logo File HQ.png"
                alt="BT Foods Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400">
              Delivering quality ingredients from farm to table with care and sustainability.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/all-products" className="text-gray-400 hover:text-white">Products</Link>
              </li>
              <li>
                <Link to="/about-contact" className="text-gray-400 hover:text-white">About & Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-gray-400">Email: info@btfoods.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
