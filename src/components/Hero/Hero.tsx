'use client';

import styles from './Hero.module.css';
import Image from 'next/image';

import {useTranslations} from 'next-intl';

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {t.rich('title', {
              accent: (chunks) => <span className="gradient-text">{chunks}</span>
            })}
          </h1>
          <p className={styles.subtitle}>
            {t.rich('subtitle', {
              bold: (chunks) => <b>{chunks}</b>
            })}
          </p>
          <div className={styles.ctaGroup}>
            <a href="#contact" className="btn btn-primary">{t('cta_contact')}</a>
            <a href="#projects" className="btn btn-secondary">{t('cta_projects')}</a>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>{t('stats_years')}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>20+</span>
              <span className={styles.statLabel}>{t('stats_projects')}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>{t('stats_satisfaction')}</span>
            </div>
          </div>
        </div>
        <div className={styles.imageColumn}>
          <div className={styles.blob}></div>
          <div className={`${styles.imageCard} glass`}>
            <Image 
              src="/profile.png" 
              alt="Professional Profile" 
              width={400} 
              height={450} 
              className={styles.profileImg}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
