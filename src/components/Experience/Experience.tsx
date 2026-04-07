'use client';

import styles from './Experience.module.css';
import {useTranslations} from 'next-intl';

const Experience = () => {
  const t = useTranslations('Experience');

  const items = t.raw('items') as Record<string, { period: string; role: string; company: string; points: string[] }>;
  const itemKeys = Object.keys(items);

  return (
    <section id="experience" className={styles.expSection}>
      <h2>{t('title')}</h2>
      <div className={styles.timeline}>
        {itemKeys.map((key) => (
          <div key={key} className={styles.timelineItem}>
            <div className={styles.date}>{items[key].period}</div>
            <div className={`${styles.content} glass`}>
              <h3>{items[key].role}</h3>
              <h4>{items[key].company}</h4>
              <ul className={styles.points}>
                {items[key].points.map((point, idx) => (
                  <li key={idx}>{point}</li>
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
