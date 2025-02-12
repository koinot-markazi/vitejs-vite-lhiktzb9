import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { currentLanguage, changeLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Tours', href: '/tours' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'uz', name: 'O\'zbekcha' },
  ];

  const getCurrentLanguageName = () => {
    return languages.find(lang => lang.code === currentLanguage)?.name || 'English';
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md ${
        isScrolled ? 'bg-white shadow-md' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className={`text-2xl font-bold tracking-wider  ${
                isScrolled ? "text-gray-900 hover:text-[#FF5733]" : "text-black hover:text-[#FF5733]"
              }`}
            >
              <svg width="150" height="57" viewBox="0 0 150 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M124.917 37V19.7869H128.335C130.106 19.7869 131.483 20.1557 132.466 20.8934C133.45 21.6311 133.942 22.6557 133.942 23.9672C133.942 24.9344 133.655 25.7623 133.081 26.4508C132.507 27.123 131.704 27.582 130.671 27.8279V27.9754C132.081 28.1557 133.18 28.6475 133.966 29.4508C134.77 30.2377 135.171 31.2377 135.171 32.4508C135.171 33.877 134.622 34.9918 133.524 35.7951C132.425 36.5984 130.884 37 128.901 37H124.917ZM128.36 20.377H126.589V27.7541H128.335C130.925 27.7541 132.221 26.5246 132.221 24.0656C132.221 21.6066 130.934 20.377 128.36 20.377ZM128.901 28.3443H126.589V36.4098H128.901C131.901 36.4098 133.401 35.0656 133.401 32.377C133.401 29.6885 131.901 28.3443 128.901 28.3443Z" fill="#FF5733"/>
<path d="M106.175 37L112.789 19.7869H114.314L120.929 37H119.134L116.084 28.9344H110.502L107.97 37H106.175ZM112.961 21.0656L110.675 28.3443H115.863L113.109 21.0656H112.961Z" fill="#FF5733"/>
<path d="M96.9172 19.7869H98.5893V36.5082C98.9008 36.5082 99.3926 36.459 100.065 36.3607L104.147 35.7459V37H96.9172V19.7869Z" fill="#FF5733"/>
<path d="M82.8931 37V19.7869H85.9668C87.9504 19.7869 89.4914 20.2131 90.5898 21.0656C91.6882 21.9016 92.2373 23.0738 92.2373 24.582C92.2373 26.0902 91.6882 27.2705 90.5898 28.1229C89.4914 28.959 87.9504 29.3771 85.9668 29.3771H84.5652V37H82.8931ZM85.9668 20.377H84.5652V28.7869H85.9668C88.9668 28.7869 90.4668 27.3852 90.4668 24.582C90.4668 21.7787 88.9668 20.377 85.9668 20.377Z" fill="#FF5733"/>
<path d="M74.8244 37V19.7869H76.4966V37H74.8244Z" fill="#FF5733"/>
<path d="M59.0473 19.7869H62.3424C64.0801 19.7869 65.4244 20.1557 66.3752 20.8934C67.3424 21.6148 67.826 22.6311 67.826 23.9426C67.826 24.959 67.5227 25.8033 66.9162 26.4754C66.326 27.1475 65.4654 27.5984 64.3342 27.8279V27.9754C65.4162 28.1885 66.3014 28.6967 66.99 29.5C67.6785 30.3033 68.1949 31.2951 68.5391 32.4754C68.8506 33.5574 69.1539 34.4016 69.449 35.0082C69.7605 35.5984 70.0965 36.0246 70.4572 36.2869C70.8342 36.5492 71.2768 36.7377 71.785 36.8525V37H70.7768C70.0555 37 69.4572 36.8689 68.9818 36.6066C68.5227 36.3443 68.1293 35.9016 67.8014 35.2787C67.4736 34.6557 67.1621 33.7951 66.867 32.6967C66.3916 31.0082 65.7605 29.8115 64.9736 29.1066C64.1867 28.4016 63.2277 28.0492 62.0965 28.0492H61.949V27.6066H62.0965C64.7359 27.6066 66.0555 26.3934 66.0555 23.9672C66.0555 21.5738 64.8178 20.377 62.3424 20.377H60.7195V37H59.0473V19.7869Z" fill="#FF5733"/>
<path d="M47.0366 37V20.2787C46.7907 20.2787 46.2825 20.3279 45.512 20.4262L40.6923 21.041V19.7869H55.053V21.041L50.2333 20.4262C49.4628 20.3279 48.9546 20.2787 48.7087 20.2787V37H47.0366Z" fill="#FF5733"/>
<path d="M22.8799 11.2019C22.441 11.323 22.0474 11.4441 22.002 11.4744C21.9717 11.5198 22.2896 11.6712 22.7286 11.8225C25.4835 12.7156 27.9205 14.7742 29.2525 17.3323C29.8429 18.4525 30.4181 20.1781 30.4181 20.829C30.4181 21.5555 30.6603 21.4647 31.0235 20.6322C31.5382 19.4212 31.6139 17.1356 31.1749 15.8489C29.9791 12.3069 26.4522 10.3391 22.8799 11.2019Z" fill="#FF5733"/>
<path d="M17.3253 13.1532C16.0386 13.4408 15.2666 13.7132 13.9497 14.4095C12.4512 15.1815 10.332 17.3007 9.56006 18.7841C9.25733 19.3895 9 19.9042 9 19.9496C9 19.995 9.63575 19.7074 10.4077 19.2987C16.2505 16.2108 23.6827 16.5892 28.9806 20.2221C30.4337 21.2211 30.3581 21.206 30.1159 20.5097C29.5558 18.9354 28.7536 17.6942 27.3912 16.3319C26.2408 15.1664 25.8019 14.8485 24.5909 14.2582C23.8038 13.8646 22.7442 13.4408 22.2447 13.3197C20.943 12.9715 18.5211 12.8958 17.3253 13.1532Z" fill="#FF5733"/>
<path d="M24.3294 19.7529C22.9823 20.1313 21.9075 20.7519 21.075 21.6298C20.0608 22.6894 19.5311 23.5825 19.2435 24.748C19.0013 25.6562 18.9105 27.5635 19.1072 27.7451C19.1526 27.8056 19.3948 27.5029 19.637 27.0791C20.3333 25.7924 21.2567 24.7026 22.3919 23.8095C24.4354 22.205 26.3124 21.5087 28.9613 21.3574L30.6718 21.2665L29.809 20.6913C29.3397 20.3886 28.598 20.0253 28.1742 19.8891C27.0389 19.5409 25.2831 19.4804 24.3294 19.7529Z" fill="#FF5733"/>
<path d="M31.2135 24.4153C31.2135 27.0794 31.1832 27.4426 30.8048 28.7898C29.8814 32.1653 28.3829 34.7537 25.9459 37.1756C23.6602 39.4764 20.981 41.0809 18.0142 41.9286L17 42.2162H24.3716L31.7433 42.2313L32.2125 40.7479C33.8624 35.4198 33.9381 29.6678 32.4244 24.0823C31.4708 20.5554 31.2286 20.6159 31.2135 24.4153Z" fill="#FF5733"/>
<path d="M25.8306 22.3118C24.2109 22.9022 23 24.6126 23 26.3382C23 27.1708 23.4238 28.412 23.8779 28.9266L24.2866 29.3807L24.2261 28.5179C24.105 26.4745 24.9829 24.3553 26.5117 22.9325L27.4048 22.0999H26.9053C26.6328 22.1151 26.1485 22.2059 25.8306 22.3118Z" fill="#FF5733"/>
</svg>


            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href.startsWith('#') ? `/${link.href}` : link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-gray-900 hover:text-[#FF5733]' : 'text-black hover:text-[#FF5733]'
                } ${location.pathname === link.href ? 'text-[#FF5733]' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Language & Contact */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-gray-900' : 'text-black'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>{getCurrentLanguageName()}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  isLangMenuOpen ? 'rotate-180' : ''
                }`} />
              </button>

              {/* Language Dropdown */}
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 py-2 w-40 bg-white rounded-lg shadow-lg">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        currentLanguage === lang.code
                          ? 'text-[#FF5733] bg-gray-50'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Button */}
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#FF5733] rounded-lg hover:bg-[#FF4520] transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isScrolled ? 'text-gray-900' : 'text-black'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href.startsWith('#') ? `/${link.href}` : link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-[#FF5733] rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <div className="flex flex-col space-y-2">
                  {/* Mobile Language Switcher */}
                  <div className="border-t pt-2">
                    <p className="text-sm font-medium text-gray-500 mb-2">Select Language</p>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`w-full text-left px-2 py-1 text-sm rounded-md ${
                          currentLanguage === lang.code
                            ? 'text-[#FF5733] bg-gray-50'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                  {/* Mobile Contact Button */}
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#FF5733] rounded-lg hover:bg-[#FF4520] transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;