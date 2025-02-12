import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ExchangeRates from './navigation/ExchangeRates';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Tours', href: '/tours' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <footer className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr] gap-16 lg:gap-24 mb-16">
          {/* Newsletter Section */}
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-[#FF5733] flex items-center justify-center">
                <span className="text-white text-xs">★</span>
              </div>
              <span className="text-[#FF5733] uppercase tracking-wider text-sm">
                JOIN OUR NEWSLETTER
              </span>
            </div>
            <h3 className="text-2xl mb-8">
              Stay updated with the latest travel deals and destination insights.
            </h3>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-b border-white/20 px-4 py-2 focus:outline-none focus:border-white/40 transition-colors"
              />
              <button className="px-6 py-3 bg-[#FF5733] text-white rounded hover:bg-[#FF4520] transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            {/* Pages */}
            <div>
              <h4 className="text-lg font-medium mb-6">NAVIGATION</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href.startsWith('#') ? `/${link.href}` : link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-medium mb-6">RESOURCES</h4>
              <ul className="space-y-4">
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact us</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/insurance" className="text-gray-400 hover:text-white transition-colors">Travel Insurance</Link></li>
                <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-medium mb-6">FOLLOW US</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exchange Rates */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <h4 className="text-lg font-medium mb-6">EXCHANGE RATES</h4>
          <ExchangeRates />
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-white/10">
          <div>
            <h4 className="text-lg font-medium mb-4">BY EMAIL</h4>
            <a href="mailto:info@triplab.com" className="text-gray-400 hover:text-white transition-colors">
              info@triplab.com
            </a>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">BY PHONE</h4>
            <a href="tel:+998901234567" className="text-gray-400 hover:text-white transition-colors">
              +998 90 123 45 67
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <div className="text-2xl font-bold">TRIPLAB</div>
          <div className="text-gray-400">
            © {new Date().getFullYear()} Triplab. All rights reserved.
          </div>
          <div className="text-gray-400">
            Your Gateway to Adventure
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;