import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Landing — Swiss / Brutalist / Clay',
  description:
    'Seja Acqua é uma plataforma de tecnologia que aproxima você de oportunidades ligadas ao mercado de crédito e recebíveis.',
  alternates: { canonical: '/landing' },
};

const VALUES = [
  {
    n: '01',
    title: 'INFORMAÇÃO',
    body: 'Você conhece as condições antes de tomar qualquer decisão.',
  },
  {
    n: '02',
    title: 'TECNOLOGIA',
    body: 'Usamos a tecnologia para organizar informações e tornar a experiência mais simples.',
  },
  {
    n: '03',
    title: 'PROXIMIDADE',
    body: 'A jornada é digital, mas nossa equipe continua por perto sempre que você precisar.',
  },
];

export default function LandingPage() {
  return (
    <div className="bg-acqua-cream text-acqua-blue">
      {/* ===================== HEADER ===================== */}
      <header className="border-b-[3px] border-acqua-blue">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 items-center px-5 py-5 md:grid-cols-[auto_1fr_auto] md:px-10">
          <Link href="/" className="flex items-center gap-2" aria-label="Seja Acqua, página inicial">
            <Image src="/logo-green.svg" alt="Seja Acqua" width={120} height={26} priority className="h-6 w-auto md:h-7" />
          </Link>

          <nav className="hidden items-center justify-center gap-8 font-mono text-[11px] font-bold uppercase tracking-[0.18em] md:flex">
            <a href="#sistema" className="hover:underline">
              Sistema
            </a>
            <a href="#mercado" className="hover:underline">
              Mercado
            </a>
            <a href="#valores" className="hover:underline">
              Valores
            </a>
          </nav>

          <Link
            href="/criar-conta"
            className="justify-self-end border-[2px] border-acqua-blue px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-colors hover:bg-acqua-blue hover:text-acqua-cream md:px-5 md:py-2.5"
          >
            Cadastro →
          </Link>
        </div>
      </header>

      {/* ===================== HERO ===================== */}
      <section id="sistema" className="border-b-[3px] border-acqua-blue">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20">
          <div className="mb-8 flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-acqua-blue/60 md:mb-12">
            <span className="h-2 w-2 rounded-full bg-acqua-blue" />
            Seja Acqua — Sistema 01 / Economia real
          </div>

          <h1 className="font-heading text-[14vw] font-bold uppercase leading-[0.86] tracking-tight md:text-[7.2vw]">
            Economia
            <br />
            real.
          </h1>

          <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-[1fr_1fr] md:gap-14">
            <div className="clay rounded-[28px] p-7 md:rounded-[36px] md:p-10">
              <p className="max-w-[46ch] text-lg leading-relaxed md:text-xl">
                Seja Acqua é uma plataforma de tecnologia que aproxima você de oportunidades ligadas
                ao mercado de crédito e recebíveis. Aqui, você conhece as condições, entende como
                cada possibilidade funciona e encontra as informações necessárias para decidir o
                próximo passo.
              </p>

              <Link
                href="/criar-conta"
                className="clay-btn mt-8 inline-flex items-center gap-2 rounded-2xl px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.1em] text-acqua-cream"
              >
                Entenda como funciona
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 border-t-[2px] border-acqua-blue/15 pt-6 font-mono text-[10.5px] uppercase tracking-[0.1em] text-acqua-blue/55 sm:grid-cols-3">
                <span>Tipografia: Space Grotesk</span>
                <span>Cor base: #1B3A6B</span>
                <span>Grid: 12 colunas</span>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <p className="font-mono text-sm uppercase leading-relaxed tracking-[0.06em] text-acqua-blue/60">
                Oportunidades reais, apresentadas com clareza — sem letra miúda, sem promessa de
                resultado garantido.
              </p>
              <div className="mt-10 grid grid-cols-3 border-[2px] border-acqua-blue/20 font-mono text-center md:mt-0">
                <div className="border-r-[2px] border-acqua-blue/20 p-5">
                  <p className="font-heading text-3xl font-bold md:text-4xl">30</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-acqua-blue/55">dias</p>
                </div>
                <div className="border-r-[2px] border-acqua-blue/20 p-5">
                  <p className="font-heading text-3xl font-bold md:text-4xl">60</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-acqua-blue/55">dias</p>
                </div>
                <div className="p-5">
                  <p className="font-heading text-3xl font-bold md:text-4xl">90</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-acqua-blue/55">dias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== O MERCADO (brutalist stripe) ===================== */}
      <section id="mercado" className="border-b-[3px] border-acqua-blue bg-acqua-blue text-acqua-cream">
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
          <div className="mb-6 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-acqua-cream/55">
            {'// O mercado'}
          </div>
          <h2 className="max-w-[18ch] font-heading text-4xl font-bold uppercase leading-[1.02] md:text-6xl">
            A empresa vende hoje. O recurso pode chegar depois.
          </h2>
          <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-acqua-cream/75 md:text-lg">
            Todos os dias, empresas vendem produtos, prestam serviços e geram valores a receber.
            Muitas vezes, o pagamento dessas vendas chega somente depois de 30, 60 ou 90 dias. A
            antecipação de recebíveis existe para reduzir essa distância.
          </p>
        </div>
      </section>

      {/* ===================== VALORES (swiss grid + clay cards) ===================== */}
      <section id="valores" className="border-b-[3px] border-acqua-blue">
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
          <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
            <h2 className="font-heading text-3xl font-bold uppercase leading-[1.05] md:text-5xl">
              Como a Seja
              <br />
              Acqua pensa.
            </h2>
            <span className="hidden font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-acqua-blue/50 md:block">
              03 princípios
            </span>
          </div>

          <div className="grid gap-6 border-t-[2px] border-acqua-blue/20 pt-10 md:grid-cols-3 md:gap-8">
            {VALUES.map((v) => (
              <div key={v.n} className="clay rounded-[24px] p-7 md:rounded-[28px] md:p-8">
                <span className="font-mono text-xs font-bold text-acqua-blue/45">{v.n}</span>
                <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-tight">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-acqua-blue/70">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="clay flex flex-col items-start gap-8 rounded-[28px] p-8 md:flex-row md:items-center md:justify-between md:rounded-[40px] md:p-14">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-acqua-blue/50">
                Faça seu cadastro
              </span>
              <h2 className="mt-3 max-w-[16ch] font-heading text-3xl font-bold uppercase leading-[1.02] md:text-5xl">
                Conheça a plataforma.
              </h2>
            </div>
            <Link
              href="/criar-conta"
              className="clay-btn inline-flex flex-none items-center gap-2 rounded-2xl px-8 py-4 font-mono text-sm font-bold uppercase tracking-[0.1em] text-acqua-cream"
            >
              Criar conta
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="border-t-[3px] border-acqua-blue px-5 py-6 md:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.1em] text-acqua-blue/55 md:flex-row md:items-center">
          <span>© 2026 Seja Acqua</span>
          <Link href="/" className="underline-offset-4 hover:underline">
            ← Voltar para o site
          </Link>
        </div>
      </footer>
    </div>
  );
}
