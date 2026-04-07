'use client';

import styles from './Projects.module.css';

import {useTranslations} from 'next-intl';

const Projects = () => {
  const t = useTranslations('Projects');

  const projectList = [
    {
      id: "ecommerce",
      title: t('ecommerce'),
      category: t('ecommerce_cat'),
      description: t('ecommerce_desc'),
      tags: ["Next.js", "PostgreSQL", "Prisma", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "healthcare",
      title: t('healthcare'),
      category: t('healthcare_cat'),
      description: t('healthcare_desc'),
      tags: ["React Native", "Firebase", "Node.js", "Chart.js"],
      image: "https://images.unsplash.com/photo-1576091160550-217359f4814c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "edtech",
      title: t('edtech'),
      category: t('edtech_cat'),
      description: t('edtech_desc'),
      tags: ["Next.js", "Socket.io", "MongoDB", "AWS"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2>{t('title')}</h2>
      <div className={styles.grid}>
        {projectList.map((project, index) => (
          <div key={index} className={`${styles.card} glass`}>
            <div className={styles.category}>{project.category}</div>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className={styles.tag}>#{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
