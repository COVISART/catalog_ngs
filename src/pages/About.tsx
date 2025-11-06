import { motion } from 'framer-motion';
import { Award, Users, Globe, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-gunmetal to-anthracite flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-industrial/10 to-transparent"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-4">
            {t('about.title')}
          </h1>
          <p className="text-2xl text-industrial font-exo">
            {t('about.subtitle')}
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Mission Statement */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-orbitron font-bold text-white mb-6">
              {t('about.missionTitle')}
            </h2>
            <p className="text-xl text-gray-300 font-exo leading-relaxed">
              {t('about.missionText')}
            </p>
          </div>
        </motion.section>

        {/* Key Highlights */}
        <section className="py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: t('about.ifiaGoldMedal'),
                description: t('about.ifiaDescription'),
              },
              {
                icon: Globe,
                title: t('about.idef2025'),
                description: t('about.idefDescription'),
              },
              {
                icon: Shield,
                title: t('about.defenseGrade'),
                description: t('about.defenseDescription'),
              },
              {
                icon: Users,
                title: t('about.expertTeam'),
                description: t('about.expertDescription'),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gunmetal to-anthracite border border-industrial/20 rounded-lg p-6 text-center hover:border-industrial/50 transition-all"
              >
                <item.icon className="mx-auto text-industrial mb-4" size={48} />
                <h3 className="text-xl font-orbitron font-bold text-industrial mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 font-exo text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Compliance & Standards */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20"
        >
          <h2 className="text-4xl font-orbitron font-bold text-white mb-12 text-center">
            {t('about.complianceTitle')}
          </h2>
          <div className="bg-gradient-to-br from-gunmetal to-anthracite border-2 border-industrial/30 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-anthracite rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 bg-industrial/20 rounded-full flex items-center justify-center">
                  <Shield className="text-industrial" size={32} />
                </div>
                <h3 className="text-xl font-orbitron font-bold text-industrial mb-2">
                  {t('about.milStdTitle')}
                </h3>
                <p className="text-gray-400 font-exo text-sm">
                  {t('about.milStdDescription')}
                </p>
              </div>

              <div className="text-center p-6 bg-anthracite rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 bg-industrial/20 rounded-full flex items-center justify-center">
                  <Shield className="text-industrial" size={32} />
                </div>
                <h3 className="text-xl font-orbitron font-bold text-industrial mb-2">
                  {t('about.app6dTitle')}
                </h3>
                <p className="text-gray-400 font-exo text-sm">
                  {t('about.app6dDescription')}
                </p>
              </div>

              <div className="text-center p-6 bg-anthracite rounded-lg">
                <div className="w-16 h-16 mx-auto mb-4 bg-industrial/20 rounded-full flex items-center justify-center">
                  <Shield className="text-industrial" size={32} />
                </div>
                <h3 className="text-xl font-orbitron font-bold text-industrial mb-2">
                  {t('about.iso9001Title')}
                </h3>
                <p className="text-gray-400 font-exo text-sm">
                  {t('about.iso9001Description')}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Technology Partners */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 text-center"
        >
          <h2 className="text-4xl font-orbitron font-bold text-white mb-6">
            {t('about.partnersTitle')}
          </h2>
          <p className="text-xl text-gray-400 font-exo mb-12 max-w-3xl mx-auto">
            {t('about.partnersSubtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="px-8 py-6 bg-gunmetal border border-industrial/30 rounded-lg">
              <div className="text-2xl font-orbitron font-bold text-industrial">{t('about.beckhoff')}</div>
              <div className="text-sm text-gray-400 font-exo">{t('about.beckhoffDescription')}</div>
            </div>
            <div className="px-8 py-6 bg-gunmetal border border-industrial/30 rounded-lg">
              <div className="text-2xl font-orbitron font-bold text-industrial">{t('about.nvidia')}</div>
              <div className="text-sm text-gray-400 font-exo">{t('about.nvidiaDescription')}</div>
            </div>
            <div className="px-8 py-6 bg-gunmetal border border-industrial/30 rounded-lg">
              <div className="text-2xl font-orbitron font-bold text-industrial">{t('about.linux')}</div>
              <div className="text-sm text-gray-400 font-exo">{t('about.linuxDescription')}</div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
