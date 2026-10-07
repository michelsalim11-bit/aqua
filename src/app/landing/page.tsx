import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  FileCheck2,
  TrendingUp,
  Clock3,
  BarChart3,
  Users2,
} from 'lucide-react';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-inter-landing' });

export const metadata: Metadata = {
  title: 'Landing — Swiss Minimalist',
  description:
    'Seja Acqua é uma plataforma de tecnologia que aproxima você de oportunidades ligadas ao mercado de crédito e recebíveis.',
  alternates: { canonical: '/landing' },
};

const VALUES = [
  {
    n: '01',
    title: 'Informação',
    body: 'Você conhece as condições antes de tomar qualquer decisão.',
    dark: false,
  },
  {
    n: '02',
    title: 'Tecnologia',
    body: 'Usamos a tecnologia para organizar informações e tornar a experiência mais simples.',
    dark: true,
  },
  {
    n: '03',
    title: 'Proximidade',
    body: 'A jornada é digital, mas nossa equipe continua por perto sempre que você precisar.',
    dark: false,
  },
];

const RECURSOS = [
  { icon: <FileCheck2 className="h-5 w-5" aria-hidden="true" />, title: 'Condições conhecidas', body: 'Apresentadas antes de qualquer decisão.' },
  { icon: <TrendingUp className="h-5 w-5" aria-hidden="true" />, title: 'Remuneração', body: 'Forma e condições previstas, sem letra miúda.' },
  { icon: <Clock3 className="h-5 w-5" aria-hidden="true" />, title: 'Prazo e carência', body: 'Disponíveis para consulta a qualquer momento.' },
  { icon: <BarChart3 className="h-5 w-5" aria-hidden="true" />, title: 'Previsibilidade', body: 'Fluxos e critérios apresentados desde o início.' },
  { icon: <Users2 className="h-5 w-5" aria-hidden="true" />, title: 'Acompanhamento', body: 'Nossa equipe segue com você na jornada.' },
];

const TIMELINE = ['30', '60', '90'];

export default function LandingPage() {
  return (
    <div
      className={`${playfair.variable} ${inter.variable} bg-swiss-cream text-swiss-navy`}
      style={{ fontFamily: 'var(--font-inter-landing), sans-serif' }}
    >
      {/* ===================== HEADER ===================== */}
      <header className="border-b border-swiss-navy/15">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 items-center px-5 py-6 md:grid-cols-[auto_1fr_auto] md:px-10">
          <Link href="/" className="flex items-center gap-2" aria-label="Seja Acqua, página inicial">
            <Image src="/logo-green.svg" alt="Seja Acqua" width={120} height={26} priority className="h-6 w-auto md:h-7" />
          </Link>

          <nav className="hidden items-center justify-center gap-10 text-[13px] font-normal tracking-[0.02em] text-swiss-navy/70 md:flex">
            <a href="#sistema" className="transition-colors hover:text-swiss-navy">
              Sistema
            </a>
            <a href="#mercado" className="transition-colors hover:text-swiss-navy">
              Mercado
            </a>
            <a href="#recursos" className="transition-colors hover:text-swiss-navy">
              Recursos
            </a>
            <a href="#valores" className="transition-colors hover:text-swiss-navy">
              Valores
            </a>
          </nav>

          <Link
            href="/criar-conta"
            className="justify-self-end rounded-lg bg-swiss-orange px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-swiss-orange-bright"
          >
            Criar conta
          </Link>
        </div>
      </header>

      {/* ===================== HERO ===================== */}
      <section id="sistema" className="border-b border-swiss-navy/15">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-24">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-swiss-navy/20 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-swiss-navy/60 md:mb-10">
            <span className="h-1.5 w-1.5 rounded-full bg-swiss-orange" />
            Sistema de antecipação · Seja Acqua
          </div>

          <div className="grid gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-20">
            <div>
              <h1 className="font-display text-[13vw] font-extrabold leading-[1.02] tracking-tight md:text-[4.6vw]">
                Economia
                <br />
                <span className="italic text-swiss-orange">real,</span> sem
                <br />
                letra miúda.
              </h1>
              <p className="mt-8 max-w-[46ch] text-base leading-relaxed text-swiss-navy/65 md:text-lg">
                Seja Acqua é uma plataforma de tecnologia que aproxima você de oportunidades
                ligadas ao mercado de crédito e recebíveis. Você conhece as condições, entende como
                cada possibilidade funciona e decide com informação.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link
                  href="/criar-conta"
                  className="inline-flex items-center gap-2 rounded-lg bg-swiss-orange px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-swiss-orange-bright"
                >
                  Entenda como funciona
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <span className="text-sm text-swiss-navy/50">
                  Sem promessa de resultado garantido.
                </span>
              </div>
            </div>

            {/* Painel de visualização financeira — 100% código, sem foto */}
            <div className="rounded-lg border border-swiss-navy-deep bg-swiss-navy-deep p-6 text-swiss-cream md:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[11px] uppercase tracking-[0.18em] text-swiss-cream/55">
                  Fluxo de antecipação
                </span>
                <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-swiss-orange-bright">
                  <span className="h-1.5 w-1.5 rounded-full bg-swiss-orange-bright" />
                  Em andamento
                </span>
              </div>

              <svg viewBox="0 0 300 110" className="mt-6 w-full" aria-hidden="true">
                <line x1="0" y1="20" x2="300" y2="20" stroke="white" strokeOpacity="0.08" />
                <line x1="0" y1="55" x2="300" y2="55" stroke="white" strokeOpacity="0.08" />
                <line x1="0" y1="90" x2="300" y2="90" stroke="white" strokeOpacity="0.08" />
                <polyline
                  points="0,88 50,78 100,82 150,52 200,40 250,22 300,14"
                  fill="none"
                  stroke="#FE7522"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="300" cy="14" r="4" fill="#FE7522" />
              </svg>

              <div className="mt-6 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-5">
                {TIMELINE.map((d) => (
                  <div key={d} className="text-center first:pl-0">
                    <p className="font-display text-2xl font-bold md:text-3xl">{d}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-swiss-cream/50">dias</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== O MERCADO ===================== */}
      <section id="mercado" className="border-b border-swiss-navy/15 bg-gradient-to-br from-swiss-navy-deep to-swiss-orange-bright text-swiss-cream">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-24">
          <span className="text-[11px] uppercase tracking-[0.2em] text-swiss-cream/60">O mercado</span>
          <h2 className="font-display mt-4 max-w-[20ch] text-3xl font-extrabold leading-[1.1] md:text-5xl">
            A empresa vende hoje. <span className="italic">O recurso</span> pode chegar depois.
          </h2>
          <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-swiss-cream/80 md:text-lg">
            Todos os dias, empresas vendem produtos, prestam serviços e geram valores a receber.
            Muitas vezes, o pagamento dessas vendas chega somente depois de 30, 60 ou 90 dias. A
            antecipação de recebíveis existe para reduzir essa distância.
          </p>
        </div>
      </section>

      {/* ===================== RECURSOS (grid 3 colunas) ===================== */}
      <section id="recursos" className="border-b border-swiss-navy/15">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-24">
          <div className="mb-12 flex items-end justify-between gap-6 md:mb-16">
            <h2 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
              Conheça antes de decidir.
            </h2>
            <span className="hidden text-[11px] uppercase tracking-[0.18em] text-swiss-navy/45 md:block">
              05 recursos
            </span>
          </div>

          <div className="grid divide-y divide-swiss-navy/12 border-t border-swiss-navy/12 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
            {RECURSOS.map((r) => (
              <div key={r.title} className="flex flex-col gap-3 px-0 py-7 sm:px-7 lg:border-b lg:border-swiss-navy/12 lg:py-9">
                <span className="text-swiss-orange">{r.icon}</span>
                <h3 className="font-display text-lg font-bold">{r.title}</h3>
                <p className="text-[15px] leading-relaxed text-swiss-navy/60">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== VALORES ===================== */}
      <section id="valores" className="border-b border-swiss-navy/15">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-24">
          <div className="mb-12 flex items-end justify-between gap-6 md:mb-16">
            <h2 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
              Como a Seja Acqua pensa.
            </h2>
            <span className="hidden text-[11px] uppercase tracking-[0.18em] text-swiss-navy/45 md:block">
              03 princípios
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {VALUES.map((v) =>
              v.dark ? (
                <div key={v.n} className="rounded-lg bg-swiss-navy p-8 text-swiss-cream">
                  <span className="font-display text-xl font-bold text-swiss-orange-bright">{v.n}</span>
                  <h3 className="font-display mt-4 text-xl font-bold">{v.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-swiss-cream/70">{v.body}</p>
                </div>
              ) : (
                <div key={v.n} className="rounded-lg border border-swiss-navy/15 bg-white p-8">
                  <span className="font-display text-xl font-bold text-swiss-orange">{v.n}</span>
                  <h3 className="font-display mt-4 text-xl font-bold">{v.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-swiss-navy/65">{v.body}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col items-start gap-8 rounded-lg bg-gradient-to-br from-swiss-navy-deep to-swiss-orange-bright p-10 text-swiss-cream md:flex-row md:items-center md:justify-between md:p-16">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-swiss-cream/60">
                Faça seu cadastro
              </span>
              <h2 className="font-display mt-3 max-w-[18ch] text-3xl font-extrabold leading-tight md:text-5xl">
                Conheça a plataforma.
              </h2>
            </div>
            <Link
              href="/criar-conta"
              className="inline-flex flex-none items-center gap-2 rounded-lg bg-white px-8 py-4 text-sm font-medium text-swiss-navy transition-colors hover:bg-swiss-cream"
            >
              Criar conta
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="border-t border-swiss-navy/15 px-5 py-6 md:px-10">
        <div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-3 text-[12px] text-swiss-navy/50 md:flex-row md:items-center">
          <span>© 2026 Seja Acqua</span>
          <Link href="/" className="underline-offset-4 hover:underline">
            ← Voltar para o site
          </Link>
        </div>
      </footer>
    </div>
  );
}
