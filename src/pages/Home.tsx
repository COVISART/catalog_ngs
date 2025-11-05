import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-b from-anthracite via-gunmetal to-anthracite">
          <div className="absolute inset-0 bg-grid opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-industrial/10 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-industrial/10 border border-industrial/30 rounded-full text-industrial text-sm font-exo font-semibold uppercase tracking-wider">
              Next Generation Technology
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black text-white mb-6 text-glow"
          >
            Next Generation Simulators.
            <br />
            <span className="text-industrial">Built for Reality.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 font-exo"
          >
            Advanced motion simulation platforms for defense, aerospace, and research.
            <br />
            Experience unparalleled realism and precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/products"
              className="group px-8 py-4 bg-industrial hover:bg-industrial/90 text-anthracite font-exo font-bold uppercase tracking-wider transition-all transform hover:scale-105 rounded-sm box-glow flex items-center justify-center"
            >
              Explore Products
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/compare"
              className="px-8 py-4 bg-transparent border-2 border-industrial hover:bg-industrial/10 text-industrial font-exo font-bold uppercase tracking-wider transition-all rounded-sm"
            >
              Compare Models
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-industrial/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-industrial rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
              Our Simulator Family
            </h2>
            <p className="text-gray-400 font-exo text-lg">
              From premium 360° platforms to compact trainers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'NGS-360-3', category: 'Premium Simulator', id: 'ngs-360-3' },
              { name: 'NGS-5000', category: 'Motion Platform', id: 'ngs-5000' },
              { name: 'NGS-Mini Trainer', category: 'Entry Level', id: 'ngs-mini-trainer' },
            ].map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/products/${product.id}`}
                  className="block bg-gradient-to-br from-gunmetal to-anthracite border border-industrial/20 hover:border-industrial/50 rounded-lg p-6 transition-all transform hover:scale-105 hover:box-glow"
                >
                  <div className="aspect-video bg-gradient-to-br from-industrial/20 to-transparent rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl font-orbitron font-black text-industrial opacity-30">
                      {product.name.split('-')[1]}
                    </span>
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold text-industrial mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 font-exo">{product.category}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="inline-block px-8 py-4 bg-transparent border-2 border-industrial hover:bg-industrial/10 text-industrial font-exo font-bold uppercase tracking-wider transition-all rounded-sm"
            >
              View All Products
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
