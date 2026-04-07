'use client';

import styles from './About.module.css';

import {useTranslations} from 'next-intl';

const About = () => {
  const t = useTranslations('About');
  
  const skills = t.raw('skills') as string[];

  return (
    <section id="about" className={styles.aboutSection}>
      <h2>{t('title')}</h2>
      <div className={styles.container}>
        <div className={styles.bio}>
          <h3 className={styles.title}>{t('bio_title')}</h3>
          <p>{t('bio_p1')}</p>
          <p>{t('bio_p2')}</p>
        </div>
        <div className={styles.skills}>
          <h3 className={styles.title}>{t('skills_title')}</h3>
          <div className={styles.skillList}>
            {skills.map((skill, index) => (
              <span key={index} className={`${styles.skillBadge} glass`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
