import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './lp.css';

const mantri = localFont({
  src: [
    { path: './fonts/mantri-400.otf', weight: '400', style: 'normal' },
    { path: './fonts/mantri-500.otf', weight: '500', style: 'normal' },
    { path: './fonts/mantri-600.otf', weight: '600', style: 'normal' },
    { path: './fonts/mantri-700.otf', weight: '700', style: 'normal' },
    { path: './fonts/mantri-800.otf', weight: '800', style: 'normal' },
    { path: './fonts/mantri-900.otf', weight: '900', style: 'normal' },
  ],
  variable: '--font-mantri',
  display: 'swap',
});

const TITLE = 'Seja Acqua — Você pode mais';
const DESCRIPTION =
  'Seja Acqua conecta você a oportunidades ligadas à economia real. Acesso a um mercado historicamente restrito a bancos, fundos e grandes instituições.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: 'https://lp.sejaacqua.com.br' },
  robots: { index: false, follow: false, nocache: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://lp.sejaacqua.com.br',
    type: 'website',
  },
};

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${mantri.variable} lp-root flex min-h-screen flex-col`}>{children}</div>;
}
