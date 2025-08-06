import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-charcoal-dark border-t border-luxury-gold/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="relative">
                <Home className="h-10 w-10 text-luxury-gold" />
                <div className="absolute inset-0 bg-luxury-gold/20 rounded-full blur-lg"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-playfair font-medium text-white tracking-wide">Grande Manor</span>
                <span className="text-xs text-luxury-gold font-medium tracking-widest uppercase">Homes</span>
              </div>
            </div>
            <p className="text-gray-400 mb-8 max-w-md font-light leading-relaxed">
              Timeless Design. Modern Living. We specialize in creating premium homes that blend 
              sophisticated architecture with contemporary comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300 font-light">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300 font-light">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300 font-light">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300 font-light">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-luxury-gold transition-colors duration-300 font-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium mb-6 tracking-wide">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-luxury-gold" />
                <span className="text-gray-400 font-light">(919) 868-4720</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-luxury-gold" />
                <span className="text-gray-400 font-light">info@grandemanorhomes.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-luxury-gold mt-0.5" />
                <span className="text-gray-400 font-light">
                  847 Wake Forest Business Park Ste 102<br />
                  Wake Forest, NC 27587
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-luxury-gold/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm font-light">
            © 2025 Grande Manor Homes. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a 
              href="https://nineoneninedigital.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-luxury-gold text-sm transition-colors duration-300 font-light"
            >
              Website built by NineOneNine Digital
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;