import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale, getTranslations} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import Header from '@/components/Header/Header';
import {Analytics} from '@vercel/analytics/react';
import './globals.css';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});

  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Ensure that the incoming `locale` is valid
  // @ts-expect-error -- routing.locales is readonly
  if (!routing.locales.includes(locale)) {
    return null;
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();
  const t = await getTranslations({locale, namespace: 'Hero'});
  const s = await getTranslations({locale, namespace: 'SocialLinks'});
  const sc = await getTranslations({locale, namespace: 'Contact'});
  
  const socialKeys = ['github', 'linkedin', 'facebook', 'twitter'] as const;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Analytics />
          <footer
            style={{
              padding: "4rem 0",
              textAlign: "center",
              borderTop: "1px solid var(--glass-border)",
              marginTop: "4rem",
              background: "rgba(15, 23, 42, 0.3)",
            }}
          >
            <div style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "center", gap: "2rem" }}>
              {socialKeys.map((key) => (
                <a 
                  key={key} 
                  href={s(key)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }}
                >
                  {sc(`social.${key}`)}
                </a>
              ))}
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem opacity: 0.6" }}>
              &copy; {new Date().getFullYear()} {t('copyright')}
            </p>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
