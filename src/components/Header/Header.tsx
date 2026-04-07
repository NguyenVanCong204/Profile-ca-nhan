'use client';

import { useState, useEffect } from 'react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.css';

export default function Header() {
  const t = useTranslations('Nav');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking a link
  const closeMenu = () => setIsMenuOpen(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoAccent}>DEV</span>PORT
        </Link>
        
        <button 
          className={styles.menuToggle} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}></div>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link href="/#about" className={styles.navLink} onClick={closeMenu}>
            {t('about')}
          </Link>
          <Link href="/#projects" className={styles.navLink} onClick={closeMenu}>
            {t('projects')}
          </Link>
          <Link href="/#contact" className={styles.navLink} onClick={closeMenu}>
            {t('contact')}
          </Link>
          
          <div className={styles.mobileActions}>
            <ThemeToggle />
            <LocaleSwitcher />
          </div>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
