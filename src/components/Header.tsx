import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/products', label: t('nav.products') },
    { path: '/compare', label: t('nav.compare') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
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
            <button 
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1 text-sm font-exo transition-colors rounded ${
                i18n.language === 'en' 
                  ? 'bg-industrial/20 text-industrial' 
                  : 'text-gray-400 hover:text-industrial'
              }`}
            >
              EN
            </button>
            <button 
              onClick={() => changeLanguage('tr')}
              className={`px-3 py-1 text-sm font-exo transition-colors rounded ${
                i18n.language === 'tr' 
                  ? 'bg-industrial/20 text-industrial' 
                  : 'text-gray-400 hover:text-industrial'
              }`}
            >
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
              <button 
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 text-sm font-exo rounded ${
                  i18n.language === 'en' 
                    ? 'bg-industrial/20 text-industrial' 
                    : 'text-gray-400'
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => changeLanguage('tr')}
                className={`px-3 py-1 text-sm font-exo rounded ${
                  i18n.language === 'tr' 
                    ? 'bg-industrial/20 text-industrial' 
                    : 'text-gray-400'
                }`}
              >
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
