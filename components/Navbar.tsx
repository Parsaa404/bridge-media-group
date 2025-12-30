import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed "About Us" as requested
  const navLinks = [
    { name: 'IRAN BRIDGE TV', href: '#tv' },
    { name: 'BRIDGE EVENT', href: '#event' },
    { name: 'BRIDGE PROPERTY', href: '#property' },
    { name: 'CONTACT US', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'bg-slate-950/70 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative p-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-lg border border-white/10 group-hover:scale-105 transition-transform duration-300">
              <Globe className="text-white w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-widest text-white leading-none">BRIDGE</span>
            <span className="text-xs font-medium tracking-[0.2em] text-blue-400 uppercase leading-none">Media Group</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1 items-center bg-white/5 p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="px-5 py-2 text-xs font-bold text-gray-300 hover:text-white transition-all rounded-full hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/10 transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-8 space-y-6 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-white hover:scale-110 font-bold text-xl transition-all uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;