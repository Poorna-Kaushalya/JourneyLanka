import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ease-in-out ${
        isScrolled 
          ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm text-text' 
          : 'py-6 bg-transparent text-white'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="#" 
          className={`text-2xl font-extrabold transition-colors duration-400 ${
            isScrolled ? 'text-primary-dark' : 'text-white'
          }`}
        >
          JourneyLanka
        </a>

        <div 
          className={`fixed lg:static top-0 h-screen lg:h-auto w-[300px] lg:w-auto bg-white lg:bg-transparent flex flex-col lg:flex-row gap-8 lg:gap-8 p-24 lg:p-0 shadow-2xl lg:shadow-none transition-all duration-400 ease-in-out ${
            isMobileMenuOpen ? 'right-0' : '-right-full lg:right-0'
          }`}
        >
          {['Home', 'Tours', 'Destinations', 'Map', 'About', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              onClick={toggleMenu}
              className={`relative font-medium text-lg lg:text-base transition-colors duration-300 group ${
                isScrolled ? 'text-text hover:text-primary lg:text-text' : 'text-text hover:text-primary lg:text-white'
              }`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button 
            className={`flex items-center gap-2 font-semibold text-base transition-colors duration-300 ${
              isScrolled ? 'text-text hover:text-primary' : 'text-white hover:text-primary-light'
            }`}
          >
            <User size={18} />
            <span className="hidden lg:inline">Login / Register</span>
          </button>
          
          <button className="px-6 py-2.5 bg-primary text-white rounded-full font-semibold shadow-[0_4px_14px_rgba(2,132,199,0.4)] hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-300">
            Book Now
          </button>
          
          <button 
            className={`block lg:hidden z-50 ${isMobileMenuOpen ? 'text-text' : (isScrolled ? 'text-text' : 'text-white')}`} 
            onClick={toggleMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
