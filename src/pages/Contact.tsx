import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const location = useLocation();
  const comparedProducts = (location.state as { comparedProducts?: string[] })?.comparedProducts || [];
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: comparedProducts.length > 0
      ? `${t('contact.interestedIn')} ${comparedProducts.join(' and ')}.`
      : '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-400 font-exo max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-orbitron font-bold text-industrial mb-8">
              {t('contact.contactInfo')}
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-industrial/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-industrial" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-orbitron font-bold text-white mb-1">{t('contact.email')}</h3>
                  <a
                    href="mailto:info@covisart.com.tr"
                    className="text-gray-400 hover:text-industrial font-exo transition-colors"
                  >
                    info@covisart.com.tr
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-industrial/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-industrial" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-orbitron font-bold text-white mb-1">{t('contact.phone')}</h3>
                  <a
                    href="tel:+905551234567"
                    className="text-gray-400 hover:text-industrial font-exo transition-colors"
                  >
                    +90 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-industrial/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-industrial" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-orbitron font-bold text-white mb-1">{t('contact.location')}</h3>
                  <p className="text-gray-400 font-exo">
                    {t('contact.locationValue')}
                    <br />
                    {t('contact.locationCountry')}
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-6 bg-gradient-to-br from-gunmetal to-anthracite border border-industrial/20 rounded-lg">
              <h3 className="text-xl font-orbitron font-bold text-industrial mb-4">
                {t('contact.businessHours')}
              </h3>
              <div className="space-y-2 font-exo text-gray-300">
                <div className="flex justify-between">
                  <span>{t('contact.monday')}</span>
                  <span className="text-industrial">{t('contact.mondayHours')}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.saturday')}</span>
                  <span className="text-industrial">{t('contact.saturdayHours')}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.sunday')}</span>
                  <span className="text-gray-500">{t('contact.sundayHours')}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-gunmetal to-anthracite border border-industrial/20 rounded-lg p-8">
              <h2 className="text-3xl font-orbitron font-bold text-industrial mb-6">
                {t('contact.sendMessage')}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-exo font-semibold text-gray-400 mb-2">
                    {t('contact.name')} {t('contact.required')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-anthracite border border-industrial/30 text-white font-exo rounded focus:outline-none focus:border-industrial transition-colors"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-exo font-semibold text-gray-400 mb-2">
                    {t('contact.emailLabel')} {t('contact.required')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-anthracite border border-industrial/30 text-white font-exo rounded focus:outline-none focus:border-industrial transition-colors"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-exo font-semibold text-gray-400 mb-2">
                    {t('contact.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-anthracite border border-industrial/30 text-white font-exo rounded focus:outline-none focus:border-industrial transition-colors"
                    placeholder={t('contact.companyPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-exo font-semibold text-gray-400 mb-2">
                    {t('contact.message')} {t('contact.required')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-anthracite border border-industrial/30 text-white font-exo rounded focus:outline-none focus:border-industrial transition-colors resize-none"
                    placeholder={t('contact.messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-4 font-exo font-bold uppercase tracking-wider transition-all rounded-sm flex items-center justify-center ${
                    submitted
                      ? 'bg-green-600 text-white'
                      : 'bg-industrial hover:bg-industrial/90 text-anthracite box-glow'
                  }`}
                >
                  {submitted ? (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t('contact.messageSent')}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      {t('contact.send')}
                    </>
                  )}
                </button>
              </form>

              {comparedProducts.length > 0 && (
                <div className="mt-4 p-4 bg-industrial/10 border border-industrial/30 rounded text-sm font-exo text-gray-400">
                  <span className="text-industrial font-semibold">Note:</span> {t('contact.inquiryNote')} {comparedProducts.join(', ')}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
