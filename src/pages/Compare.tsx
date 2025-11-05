import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Download, X, ArrowRight } from 'lucide-react';
import productsData from '@/data/products.json';
import { useComparisonStore } from '@/store/comparison';

const Compare = () => {
  const { product1, product2, setProduct1, setProduct2, reset } = useComparisonStore();
  const [selectedProduct1, setSelectedProduct1] = useState(product1 || '');
  const [selectedProduct2, setSelectedProduct2] = useState(product2 || '');

  useEffect(() => {
    if (selectedProduct1) setProduct1(selectedProduct1);
    if (selectedProduct2) setProduct2(selectedProduct2);
  }, [selectedProduct1, selectedProduct2, setProduct1, setProduct2]);

  const p1 = productsData.find((p) => p.id === selectedProduct1);
  const p2 = productsData.find((p) => p.id === selectedProduct2);

  const allSpecKeys = new Set<string>();
  if (p1) Object.keys(p1.specifications).forEach((key) => allSpecKeys.add(key));
  if (p2) Object.keys(p2.specifications).forEach((key) => allSpecKeys.add(key));

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
            Compare Simulators
          </h1>
          <p className="text-xl text-gray-400 font-exo">
            Select two models to compare their specifications side by side
          </p>
        </motion.div>

        {/* Product Selectors */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product 1 Selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gunmetal to-anthracite border border-industrial/20 rounded-lg p-6"
          >
            <label className="block text-industrial font-orbitron font-bold mb-3">
              First Simulator
            </label>
            <select
              value={selectedProduct1}
              onChange={(e) => setSelectedProduct1(e.target.value)}
              className="w-full px-4 py-3 bg-anthracite border border-industrial/30 text-white font-exo rounded focus:outline-none focus:border-industrial"
            >
              <option value="">Select a simulator...</option>
              {productsData
                .filter((p) => p.id !== selectedProduct2)
                .map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name} - {product.subtitle}
                  </option>
                ))}
            </select>
            {selectedProduct1 && (
              <button
                onClick={() => setSelectedProduct1('')}
                className="mt-3 text-sm text-gray-400 hover:text-industrial font-exo flex items-center"
              >
                <X size={16} className="mr-1" />
                Clear selection
              </button>
            )}
          </motion.div>

          {/* Product 2 Selector */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gunmetal to-anthracite border border-industrial/20 rounded-lg p-6"
          >
            <label className="block text-industrial font-orbitron font-bold mb-3">
              Second Simulator
            </label>
            <select
              value={selectedProduct2}
              onChange={(e) => setSelectedProduct2(e.target.value)}
              className="w-full px-4 py-3 bg-anthracite border border-industrial/30 text-white font-exo rounded focus:outline-none focus:border-industrial"
            >
              <option value="">Select a simulator...</option>
              {productsData
                .filter((p) => p.id !== selectedProduct1)
                .map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name} - {product.subtitle}
                  </option>
                ))}
            </select>
            {selectedProduct2 && (
              <button
                onClick={() => setSelectedProduct2('')}
                className="mt-3 text-sm text-gray-400 hover:text-industrial font-exo flex items-center"
              >
                <X size={16} className="mr-1" />
                Clear selection
              </button>
            )}
          </motion.div>
        </div>

        {/* Comparison Table */}
        {p1 && p2 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Product Headers */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div></div>
              <div className="bg-gradient-to-br from-industrial/20 to-transparent border border-industrial/30 rounded-lg p-6 text-center">
                <h2 className="text-2xl font-orbitron font-bold text-industrial mb-2">
                  {p1.name}
                </h2>
                <p className="text-gray-400 font-exo text-sm">{p1.subtitle}</p>
                <Link
                  to={`/products/${p1.id}`}
                  className="inline-flex items-center mt-4 text-sm text-industrial hover:underline font-exo"
                >
                  View Details
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-industrial/20 to-transparent border border-industrial/30 rounded-lg p-6 text-center">
                <h2 className="text-2xl font-orbitron font-bold text-industrial mb-2">
                  {p2.name}
                </h2>
                <p className="text-gray-400 font-exo text-sm">{p2.subtitle}</p>
                <Link
                  to={`/products/${p2.id}`}
                  className="inline-flex items-center mt-4 text-sm text-industrial hover:underline font-exo"
                >
                  View Details
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Specifications Comparison */}
            <div className="bg-gradient-to-br from-gunmetal to-anthracite border border-industrial/20 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-industrial to-industrial/80 px-6 py-4">
                <h3 className="text-xl font-orbitron font-bold text-anthracite">
                  Specifications Comparison
                </h3>
              </div>
              <div className="divide-y divide-industrial/20">
                {Array.from(allSpecKeys).map((key) => (
                  <div key={key} className="grid grid-cols-3 gap-4 p-4 hover:bg-industrial/5 transition-colors">
                    <div className="font-exo font-semibold text-industrial capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="font-exo text-gray-300">
                      {(p1.specifications as Record<string, string>)[key] || '-'}
                    </div>
                    <div className="font-exo text-gray-300">
                      {(p2.specifications as Record<string, string>)[key] || '-'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-industrial hover:bg-industrial/90 text-anthracite font-exo font-bold uppercase tracking-wider transition-all rounded-sm box-glow flex items-center justify-center">
                <Download className="mr-2" size={20} />
                Export Comparison
              </button>
              <Link
                to="/contact"
                state={{ comparedProducts: [p1.name, p2.name] }}
                className="px-8 py-4 bg-transparent border-2 border-industrial hover:bg-industrial/10 text-industrial font-exo font-bold uppercase tracking-wider transition-all rounded-sm text-center"
              >
                Request Information
              </Link>
              <button
                onClick={() => {
                  reset();
                  setSelectedProduct1('');
                  setSelectedProduct2('');
                }}
                className="px-8 py-4 bg-transparent border border-industrial/50 hover:bg-industrial/5 text-gray-400 hover:text-industrial font-exo font-semibold transition-all rounded-sm"
              >
                Reset Comparison
              </button>
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {(!p1 || !p2) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <div className="text-industrial/30 mb-6">
              <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-2xl font-orbitron font-bold text-gray-400 mb-2">
              Select Two Simulators
            </h3>
            <p className="text-gray-500 font-exo">
              Choose two models from the dropdowns above to see a detailed comparison
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Compare;
