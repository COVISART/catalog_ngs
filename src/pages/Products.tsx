import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Layers } from 'lucide-react';
import productsData from '@/data/products.json';
import { useComparisonStore } from '@/store/comparison';
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { product1, product2, setProduct1, setProduct2 } = useComparisonStore();
  const { t } = useTranslation();

  const handleAddToCompare = (productId: string) => {
    if (!product1) {
      setProduct1(productId);
    } else if (!product2 && product1 !== productId) {
      setProduct2(productId);
    }
  };

  const isInComparison = (productId: string) => {
    return product1 === productId || product2 === productId;
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
            {t('products.title')}
          </h1>
          <p className="text-xl text-gray-400 font-exo max-w-3xl mx-auto">
            {t('products.subtitle')}
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gunmetal to-anthracite border border-industrial/20 rounded-lg overflow-hidden hover:border-industrial/50 transition-all"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-industrial/20 to-transparent flex items-center justify-center relative">
                <Layers className="text-industrial opacity-30" size={80} />
                <div className="absolute top-4 right-4 px-3 py-1 bg-industrial/20 backdrop-blur-sm border border-industrial/30 rounded-full text-xs font-exo text-industrial">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-orbitron font-bold text-industrial mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-400 font-exo text-sm mb-2">
                  {product.subtitle}
                </p>
                <p className="text-gray-300 font-exo text-sm mb-6 line-clamp-3">
                  {product.description}
                </p>

                {/* Actions */}
                <div className="space-y-3">
                  <Link
                    to={`/products/${product.id}`}
                    className="group flex items-center justify-between w-full px-4 py-3 bg-industrial hover:bg-industrial/90 text-anthracite font-exo font-semibold transition-all rounded"
                  >
                    {t('products.viewDetails')}
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>

                  <button
                    onClick={() => handleAddToCompare(product.id)}
                    disabled={isInComparison(product.id)}
                    className={`w-full px-4 py-3 font-exo font-semibold transition-all rounded ${
                      isInComparison(product.id)
                        ? 'bg-industrial/30 text-industrial/60 cursor-not-allowed'
                        : 'bg-transparent border border-industrial/50 text-industrial hover:bg-industrial/10'
                    }`}
                  >
                    {isInComparison(product.id) ? t('products.inComparison') : t('products.addToCompare')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison CTA */}
        {(product1 || product2) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 p-6 bg-gradient-to-r from-industrial/10 to-transparent border border-industrial/30 rounded-lg"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-xl font-orbitron font-bold text-industrial mb-1">
                  {product1 && product2 ? t('products.readyToCompare') : t('products.addAnother')}
                </h3>
                <p className="text-gray-400 font-exo text-sm">
                  {product1 && product2
                    ? t('products.compareSelected')
                    : t('products.selectMore')}
                </p>
              </div>
              {product1 && product2 && (
                <Link
                  to="/compare"
                  className="mt-4 md:mt-0 px-6 py-3 bg-industrial hover:bg-industrial/90 text-anthracite font-exo font-bold uppercase tracking-wider transition-all rounded-sm"
                >
                  {t('products.goToComparison')}
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Products;
