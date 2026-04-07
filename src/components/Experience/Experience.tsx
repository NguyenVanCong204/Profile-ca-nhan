'use client';

import styles from './Experience.module.css';
import {useTranslations} from 'next-intl';

const Experience = () => {
  const t = useTranslations('Experience');

  const historyKeys = ['exp1', 'exp2', 'exp3'] as const;

  return (
    <section id="experience" className={styles.expSection}>
      <h2>{t('title')}</h2>
      <div className={styles.timeline}>
        {historyKeys.map((key) => (
          <div key={key} className={styles.timelineItem}>
            <div className={styles.date}>{t(`items.${key}.period`)}</div>
            <div className={`${styles.content} glass`}>
              <h3>{t(`items.${key}.role`)}</h3>
              <h4>{t(`items.${key}.company`)}</h4>
              <ul className={styles.points}>
                {[0, 1, 2].map((idx) => (
                  <li key={idx}>{t(`items.${key}.points.${idx}`)}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
