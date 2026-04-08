'use client';

import {useLocale} from 'next-intl';
import {routing, usePathname, useRouter} from '@/i18n/routing';
import {useParams} from 'next/navigation';
import {useTransition} from 'react';
import styles from './LocaleSwitcher.module.css';

export default function LocaleSwitcher() {
  const t = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function switchLocale(nextLocale: string) {
    if (nextLocale === t) return;
    
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- pathname stays the same
        {pathname, params},
        {locale: nextLocale, scroll: false}
      );
    });
  }

  return (
    <div className={`${styles.container} ${isPending ? styles.pending : ''}`}>
      {routing.locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`${styles.localeBtn} ${t === locale ? styles.active : ''}`}
          disabled={isPending}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
