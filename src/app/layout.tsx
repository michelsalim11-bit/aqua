import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Hanken_Grotesk } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const SITE_URL = 'https://aquainvest.com.br';
const SITE_NAME = 'Seja Acqua';
const DESCRIPTION =
  'A Aqua aproxima você de um mercado que contribui para a circulação de recursos na economia, conectando pessoas a oportunidades ligadas à atividade empresarial e ao crescimento econômico.';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hanken',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0c1015',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Faça seu cadastro e comece a trazer fluidez para suas finanças`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    'Seja Acqua',
    'Aqua',
    'economia real',
    'liquidez empresarial',
    'capital de giro',
    'circulação de recursos',
    'fluxo financeiro das empresas',
    'recebíveis',
    'crescimento empresarial',
    'tecnologia',
  ],
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo-green.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/logo-green.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Faça seu cadastro e comece a trazer fluidez para suas finanças`,
    description: DESCRIPTION,
    images: [
      {
        url: '/og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Seja Acqua',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Faça seu cadastro e comece a trazer fluidez para suas finanças`,
    description: DESCRIPTION,
    images: ['/og.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  category: 'finance',
  other: {
    'facebook-domain-verification': 'angck9h2ym9f6cq9im32awzde8t0ue',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: SITE_NAME,
  legalName: 'Seja Acqua',
  url: SITE_URL,
  logo: `${SITE_URL}/logo-green.svg`,
  image: `${SITE_URL}/og.jpeg`,
  description: DESCRIPTION,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contato@aquainvest.com.br',
      availableLanguage: ['Portuguese'],
      areaServed: 'BR',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'data protection officer',
      email: 'dpo@aquainvest.com.br',
      availableLanguage: ['Portuguese'],
    },
  ],
  areaServed: { '@type': 'Country', name: 'Brazil' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${bricolage.variable} ${hanken.variable}`}>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TQ378FHR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* HubSpot Embed Code */}
        <Script
          id="hs-script-loader"
          strategy="afterInteractive"
          src="https://js.hs-scripts.com/51681885.js"
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TQ378FHR');`,
          }}
        />
      </body>
    </html>
  );
}
