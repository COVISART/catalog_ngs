import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Layers, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import productsData from '@/data/products.json';
import { useComparisonStore } from '@/store/comparison';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'specifications' | 'applications'>('overview');
  const { product1, product2, setProduct1, setProduct2 } = useComparisonStore();

  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-orbitron font-bold text-white mb-4">
            Product Not Found
          </h1>
          <Link to="/products" className="text-industrial hover:underline font-exo">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCompare = () => {
    if (!product1) {
      setProduct1(product.id);
    } else if (!product2 && product1 !== product.id) {
      setProduct2(product.id);
    }
  };

  const isInComparison = product1 === product.id || product2 === product.id;

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Banner */}
      <section className="relative h-96 bg-gradient-to-br from-gunmetal to-anthracite flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-industrial/10 to-transparent"></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center"
        >
          <Layers className="mx-auto text-industrial opacity-50 mb-4" size={80} />
          <h1 className="text-5xl md:text-6xl font-orbitron font-black text-white mb-4 text-glow">
            {product.name}
          </h1>
          <p className="text-2xl text-industrial font-exo">{product.subtitle}</p>
        </motion.div>
      </section>

      {/* Navigation */}
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="py-6">
          <Link
            to="/products"
            className="inline-flex items-center text-industrial hover:text-industrial/80 font-exo transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Products
          </Link>
        </div>

        {/* Tabs */}
        <div className="border-b border-industrial/20 mb-8">
          <div className="flex space-x-8">
            {(['overview', 'specifications', 'applications'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-exo font-semibold uppercase tracking-wider transition-colors ${
                  activeTab === tab
                    ? 'text-industrial border-b-2 border-industrial'
                    : 'text-gray-400 hover:text-industrial'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-orbitron font-bold text-white mb-4">
                  Overview
                </h2>
                <p className="text-gray-300 font-exo text-lg mb-6">
                  {product.description}
                </p>

                <h3 className="text-xl font-orbitron font-bold text-industrial mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-industrial mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-300 font-exo">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gunmetal to-anthracite border border-industrial/20 rounded-lg p-8">
                <div className="aspect-square bg-gradient-to-br from-industrial/20 to-transparent rounded-lg flex items-center justify-center mb-6">
                  <Layers className="text-industrial opacity-30" size={120} />
                </div>
                <div className="space-y-4">
                  <div className="px-4 py-3 bg-anthracite border border-industrial/30 rounded">
                    <div className="text-sm text-gray-400 font-exo">Category</div>
                    <div className="text-lg text-industrial font-orbitron font-bold">
                      {product.category}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div>
              <h2 className="text-3xl font-orbitron font-bold text-white mb-6">
                Technical Specifications
              </h2>
              <div className="bg-gradient-to-br from-gunmetal to-anthracite border border-industrial/20 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-industrial to-industrial/80 px-6 py-4">
                  <h3 className="text-xl font-orbitron font-bold text-anthracite">
                    System Details
                  </h3>
                </div>
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="border-b border-industrial/20 pb-4">
                        <h4 className="text-industrial font-exo font-semibold mb-1 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h4>
                        <p className="text-gray-300 font-exo">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div>
              <h2 className="text-3xl font-orbitron font-bold text-white mb-6">
                Applications
              </h2>
              <p className="text-gray-300 font-exo text-lg mb-8">
                The {product.name} is designed for versatile deployment across multiple sectors:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.applications.map((app, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gunmetal to-anthracite border border-industrial/20 hover:border-industrial/50 p-6 rounded-lg transition-all"
                  >
                    <h3 className="text-lg font-orbitron font-bold text-industrial mb-2">
                      {app}
                    </h3>
                    <CheckCircle className="text-industrial/50" size={20} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleAddToCompare}
            disabled={isInComparison}
            className={`flex-1 px-8 py-4 font-exo font-bold uppercase tracking-wider transition-all rounded-sm ${
              isInComparison
                ? 'bg-industrial/30 text-industrial/60 cursor-not-allowed'
                : 'bg-transparent border-2 border-industrial text-industrial hover:bg-industrial/10'
            }`}
          >
            {isInComparison ? 'Added to Comparison' : 'Add to Comparison'}
          </button>
          <button className="flex-1 px-8 py-4 bg-industrial hover:bg-industrial/90 text-anthracite font-exo font-bold uppercase tracking-wider transition-all rounded-sm box-glow flex items-center justify-center">
            <Download className="mr-2" size={20} />
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
