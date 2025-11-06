import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-black border-t border-industrial/20 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-industrial rounded-lg flex items-center justify-center font-orbitron font-bold text-anthracite">
                C
              </div>
              <div className="text-lg font-orbitron font-bold text-industrial">
                COVISART
              </div>
            </div>
            <p className="text-gray-400 font-exo text-sm mb-4">
              {t('footer.companyDescription')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-industrial transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-industrial transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="mailto:info@covisart.com.tr"
                className="text-gray-400 hover:text-industrial transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-industrial font-orbitron font-bold mb-4">{t('footer.productsTitle')}</h4>
            <ul className="space-y-2 text-gray-400 font-exo text-sm">
              <li>
                <Link to="/products/ngs-360-3" className="hover:text-industrial transition-colors">
                  NGS-360-3
                </Link>
              </li>
              <li>
                <Link to="/products/ngs-5000" className="hover:text-industrial transition-colors">
                  NGS-5000
                </Link>
              </li>
              <li>
                <Link to="/products/ngs-mini-trainer" className="hover:text-industrial transition-colors">
                  NGS-Mini Trainer
                </Link>
              </li>
              <li>
                <Link to="/compare" className="hover:text-industrial transition-colors">
                  {t('nav.compare')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-industrial font-orbitron font-bold mb-4">{t('footer.companyTitle')}</h4>
            <ul className="space-y-2 text-gray-400 font-exo text-sm">
              <li>
                <Link to="/about" className="hover:text-industrial transition-colors">
                  {t('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-industrial transition-colors">
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-industrial transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Compliance Badges */}
        <div className="border-t border-industrial/20 pt-6 mb-6">
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="px-4 py-2 bg-gunmetal border border-industrial/30 rounded text-xs font-orbitron text-industrial">
              MIL-STD-2525D
            </div>
            <div className="px-4 py-2 bg-gunmetal border border-industrial/30 rounded text-xs font-orbitron text-industrial">
              APP-6D
            </div>
            <div className="px-4 py-2 bg-gunmetal border border-industrial/30 rounded text-xs font-orbitron text-industrial">
              ISO 9001
            </div>
            <div className="px-4 py-2 bg-gunmetal border border-industrial/30 rounded text-xs font-orbitron text-industrial">
              IDEF 2025
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-industrial/20 pt-6 text-center">
          <p className="text-gray-500 font-exo text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
