'use client';

import styles from './Services.module.css';
import {useTranslations} from 'next-intl';

const Services = () => {
  const t = useTranslations('Services');

  const services = [
    {
      id: 's1',
      icon: '🚀'
    },
    {
      id: 's2',
      icon: '⚡'
    },
    {
      id: 's3',
      icon: '💡'
    }
  ];

  return (
    <section id="services" className={styles.servicesSection}>
      <h2>{t('title')}</h2>
      <div className={styles.grid}>
        {services.map((service) => (
          <div key={service.id} className={`${styles.card} glass`}>
            <div className={styles.icon}>{service.icon}</div>
            <h3>{t(`${service.id}_title`)}</h3>
            <p>{t(`${service.id}_desc`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
