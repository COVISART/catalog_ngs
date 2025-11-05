import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/compare', label: 'Compare' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-anthracite/95 backdrop-blur-sm border-b border-industrial/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-industrial rounded-lg flex items-center justify-center font-orbitron font-bold text-anthracite text-xl">
              C
            </div>
            <div className="text-xl font-orbitron font-bold text-industrial">
              COVISART
              <span className="block text-xs text-gray-400 font-exo font-light">
                Advanced Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 font-exo">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? 'text-industrial'
                    : 'text-gray-300 hover:text-industrial'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Toggle */}
          <div className="hidden md:flex items-center space-x-2">
            <button className="px-3 py-1 text-sm font-exo bg-industrial/20 text-industrial rounded">
              EN
            </button>
            <button className="px-3 py-1 text-sm font-exo text-gray-400 hover:text-industrial transition-colors rounded">
              TR
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-industrial"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 font-exo ${
                  isActive(link.path)
                    ? 'text-industrial'
                    : 'text-gray-300'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex space-x-2 pt-2">
              <button className="px-3 py-1 text-sm font-exo bg-industrial/20 text-industrial rounded">
                EN
              </button>
              <button className="px-3 py-1 text-sm font-exo text-gray-400 rounded">
                TR
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
