import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Laptop, 
  Monitor, 
  Database,
  Smartphone,
  Server,
  HardDrive
} from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const services = [
    {
      icon: <Laptop className="w-10 h-10 text-[#6ab04c]" />,
      title: t('services.laptopRepair.title'),
      description: t('services.laptopRepair.description')
    },
    {
      icon: <Monitor className="w-10 h-10 text-[#6ab04c]" />,
      title: t('services.desktopRepair.title'),
      description: t('services.desktopRepair.description')
    },
    {
      icon: <Monitor className="w-10 h-10 text-[#6ab04c]" />,
      title: t('services.imacRepair.title'),
      description: t('services.imacRepair.description')
    },
    {
      icon: <Laptop className="w-10 h-10 text-[#6ab04c]" />,
      title: t('services.macbookRepair.title'),
      description: t('services.macbookRepair.description')
    },
    {
      icon: <Server className="w-10 h-10 text-[#6ab04c]" />,
      title: t('services.macMiniRepair.title'),
      description: t('services.macMiniRepair.description')
    },
    {
      icon: <HardDrive className="w-10 h-10 text-[#6ab04c]" />,
      title: t('services.dataRecovery.title'),
      description: t('services.dataRecovery.description')
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-slate-800 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;