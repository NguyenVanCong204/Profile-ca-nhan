'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';
import styles from './Header.module.css';

export default function Header() {
  const t = useTranslations('Nav');

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoAccent}>DEV</span>PORT
        </Link>
        
        <nav className={styles.nav}>
          <Link href="/#about" className={styles.navLink}>
            {t('about')}
          </Link>
          <Link href="/#projects" className={styles.navLink}>
            {t('projects')}
          </Link>
          <Link href="/#contact" className={styles.navLink}>
            {t('contact')}
          </Link>
        </nav>

        <div className={styles.actions}>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
