import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Science', path: '/science' },
    { name: 'Pipeline', path: '/pipeline' },
    { name: 'News', path: '/news' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
        {/* <Link to="/" className="flex items-center group"> */}
          <img 
            src={"/data/images/logo2_xyone.png"} 
            alt="XYone Therapeutics" 
            className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              // Fallback if image fails
              e.currentTarget.style.display = 'none';
              // You could show the text fallback here if needed, but for now we hide broken images
            }}
          />
          {/* Fallback Text (Hidden if image loads, handled by the error above typically, but simpler to just replace) */}
        {/* </Link> */}
          <span className={`font-serif text-xl font-bold tracking-tight ${isScrolled || location.pathname !== '/' ? 'text-navy-900' : 'text-navy-900'}`}>
            XYone Therapeutics
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide uppercase">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`hover:text-primary transition-colors duration-200 ${
                isActive(link.path) ? 'text-primary' : 'text-navy-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-primary hover:bg-red-700 text-white px-6 py-2.5 rounded-sm transition-all shadow-sm hover:shadow-md"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-navy-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-xl py-6 px-6 flex flex-col space-y-4">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-lg font-medium text-navy-900 py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            className="text-lg font-medium text-primary py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;