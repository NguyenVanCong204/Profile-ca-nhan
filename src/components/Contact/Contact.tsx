'use client';

import { useState } from 'react';
import styles from './Contact.module.css';
import { useTranslations } from 'next-intl';

const Contact = () => {
  const t = useTranslations('Contact');
  const s = useTranslations('SocialLinks');
  const socialKeys = ['github', 'linkedin', 'facebook', 'twitter'] as const;

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    // Here you would normally send the data to Formspree or your API
    // For now, we'll simulate a 1-second delay
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log('Form submission:', data);

    try {
      const response = await fetch('https://formspree.io/f/xnjowdyq', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={`${styles.card} glass`}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('title')}</h2>
          <p className={styles.subtitle}>{t('subtitle')}</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <div className={styles.field}>
              <label htmlFor="name">{t('form.name')}</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                required 
                placeholder="John Doe" 
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">{t('form.email')}</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required 
                placeholder="john@example.com" 
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="message">{t('form.message')}</label>
            <textarea 
              name="message" 
              id="message" 
              rows={5} 
              required 
              placeholder={t('form.message')}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            disabled={status === 'sending'}
          >
            {status === 'sending' ? t('form.sending') : t('form.send')}
          </button>

          {status === 'success' && (
            <div className={styles.successMessage}>
              {t('form.success')}
            </div>
          )}

          {status === 'error' && (
            <div className={styles.errorMessage}>
              {t('form.error')}
            </div>
          )}
        </form>

        <div className={styles.footer}>
          <div className={styles.socials}>
            {socialKeys.map((key) => (
              <a 
                key={key} 
                href={s(key)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink}
              >
                {t(`social.${key}`)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
