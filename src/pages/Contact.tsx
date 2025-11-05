import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const location = useLocation();
  const comparedProducts = (location.state as { comparedProducts?: string[] })?.comparedProducts || [];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: comparedProducts.length > 0
      ? `I am interested in ${comparedProducts.join(' and ')}.`
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
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400 font-exo max-w-3xl mx-auto">
            Ready to revolutionize your training capabilities? Contact our team for a demonstration 
            or to discuss your specific requirements.
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
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-industrial/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-industrial" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-orbitron font-bold text-white mb-1">Email</h3>
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
                  <h3 className="text-lg font-orbitron font-bold text-white mb-1">Phone</h3>
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
                  <h3 className="text-lg font-orbitron font-bold text-white mb-1">Location</h3>
                  <p className="text-gray-400 font-exo">
                    Global Operations
                    <br />
                    Türkiye
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-6 bg-gradient-to-br from-gunmetal to-anthracite border border-industrial/20 rounded-lg">
              <h3 className="text-xl font-orbitron font-bold text-industrial mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 font-exo text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-industrial">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-industrial">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-gray-500">Closed</span>
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
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-exo font-semibold text-gray-400 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-anthracite border border-industrial/30 text-white font-exo rounded focus:outline-none focus:border-industrial transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-exo font-semibold text-gray-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-anthracite border border-industrial/30 text-white font-exo rounded focus:outline-none focus:border-industrial transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-exo font-semibold text-gray-400 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-anthracite border border-industrial/30 text-white font-exo rounded focus:outline-none focus:border-industrial transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-exo font-semibold text-gray-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-anthracite border border-industrial/30 text-white font-exo rounded focus:outline-none focus:border-industrial transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
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
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {comparedProducts.length > 0 && (
                <div className="mt-4 p-4 bg-industrial/10 border border-industrial/30 rounded text-sm font-exo text-gray-400">
                  <span className="text-industrial font-semibold">Note:</span> Your inquiry includes products: {comparedProducts.join(', ')}
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
