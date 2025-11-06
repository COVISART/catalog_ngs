import { motion } from 'framer-motion';
import { useState } from 'react';
import { Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { t } = useTranslation();

  const categories = [
    'all',
    'Motion Platforms',
    'Cockpits',
    'Control Systems',
    'Displays',
    'Integration',
  ];

  const galleryItems = [
    { category: 'Motion Platforms', title: 'NGS-360-3 Platform', image: '/assets/gallery/blank-1024x768.png' },
    { category: 'Motion Platforms', title: 'NGS-5000 Setup', image: '/assets/gallery/blank-1024x768.png' },
    { category: 'Cockpits', title: 'Flight Cockpit Interior', image: '/assets/gallery/blank-1024x768.png' },
    { category: 'Cockpits', title: 'Vehicle Cabin', image: '/assets/gallery/blank-1024x768.png' },
    { category: 'Control Systems', title: 'Beckhoff Controllers', image: '/assets/gallery/blank-1024x768.png' },
    { category: 'Control Systems', title: 'Motion Control Panel', image: '/assets/gallery/blank-1024x768.png' },
    { category: 'Displays', title: '360° Display Array', image: '/assets/gallery/blank-1024x768.png' },
    { category: 'Displays', title: 'HD Projection System', image: '/assets/gallery/blank-1024x768.png' },
    { category: 'Integration', title: 'System Integration', image: '/assets/gallery/blank-1024x768.png' },
    { category: 'Integration', title: 'Network Infrastructure', image: '/assets/gallery/blank-1024x768.png' },
    { category: 'Motion Platforms', title: 'Mini Trainer Platform', image: '/assets/gallery/blank-1024x768.png' },
    { category: 'Cockpits', title: 'Advanced Cockpit Design', image: '/assets/gallery/blank-1024x768.png' },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-4">
            {t('gallery.title')}
          </h1>
          <p className="text-xl text-gray-400 font-exo max-w-3xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 font-exo font-semibold rounded-full transition-all ${
                activeFilter === category
                  ? 'bg-industrial text-anthracite'
                  : 'bg-gunmetal border border-industrial/30 text-gray-400 hover:text-industrial hover:border-industrial/50'
              }`}
            >
              {category === 'all' ? t('gallery.all') : 
               category === 'Motion Platforms' ? t('gallery.motionPlatforms') :
               category === 'Cockpits' ? t('gallery.cockpits') :
               category === 'Control Systems' ? t('gallery.controlSystems') :
               category === 'Displays' ? t('gallery.displays') :
               category === 'Integration' ? t('gallery.integration') : category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.category}-${index}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group bg-gradient-to-br from-gunmetal to-anthracite border border-industrial/20 rounded-lg overflow-hidden hover:border-industrial/50 transition-all cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-industrial/20 to-transparent flex items-center justify-center relative overflow-hidden">
                <Layers className="text-industrial opacity-20 group-hover:opacity-30 transition-opacity" size={60} />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-exo font-semibold">{t('gallery.viewImage')}</span>
                </div>
              </div>

              {/* Title */}
              <div className="p-4">
                <div className="text-xs text-industrial font-exo mb-1">{item.category}</div>
                <h3 className="text-lg font-orbitron font-bold text-white group-hover:text-industrial transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note about placeholders */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center p-6 bg-gunmetal border border-industrial/20 rounded-lg"
        >
          <p className="text-gray-400 font-exo text-sm">
            <span className="text-industrial font-semibold">Note:</span> {t('gallery.placeholderNote')}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
