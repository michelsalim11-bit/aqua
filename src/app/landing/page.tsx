import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  FileCheck2,
  TrendingUp,
  Clock3,
  BarChart3,
  Users2,
} from 'lucide-react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter-landing',
});

export const metadata: Metadata = {
  title: 'Landing — Neo-Banking UI',
  description:
    'Seja Acqua é uma plataforma de tecnologia que aproxima você de oportunidades ligadas ao mercado de crédito e recebíveis.',
  alternates: { canonical: '/landing' },
};

const COMO_PENSA = [
  { n: '01', title: 'Informação', body: 'Você conhece as condições antes de tomar qualquer decisão.' },
  { n: '02', title: 'Tecnologia', body: 'Organizamos as informações e tornamos a experiência mais simples.' },
  { n: '03', title: 'Proximidade', body: 'A jornada é digital, mas nossa equipe continua por perto.' },
];

const DIFERENCIAIS = [
  { icon: <FileCheck2 className="h-5 w-5" aria-hidden="true" />, title: 'Condições conhecidas', body: 'Apresentadas antes de qualquer decisão, sem letra miúda.' },
  { icon: <TrendingUp className="h-5 w-5" aria-hidden="true" />, title: 'Remuneração', body: 'Forma e condições previstas para cada possibilidade.' },
  { icon: <Clock3 className="h-5 w-5" aria-hidden="true" />, title: 'Prazo e carência', body: 'Disponíveis para consulta a qualquer momento.' },
  { icon: <BarChart3 className="h-5 w-5" aria-hidden="true" />, title: 'Previsibilidade', body: 'Fluxos e critérios apresentados desde o início.' },
  { icon: <Users2 className="h-5 w-5" aria-hidden="true" />, title: 'Acompanhamento', body: 'Nossa equipe segue com você em toda a jornada.' },
];

export default function LandingPage() {
  return (
    <div
      className={`${inter.variable} bg-swiss-cream text-swiss-ink`}
      style={{ fontFamily: 'var(--font-inter-landing), sans-serif' }}
    >
      {/* ===================== HEADER ===================== */}
      <header className="sticky top-0 z-20 bg-swiss-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-5 md:px-10">
          <Link href="/" className="flex items-center gap-2" aria-label="Seja Acqua, página inicial">
            <Image src="/logo-green.svg" alt="Seja Acqua" width={120} height={26} priority className="h-6 w-auto md:h-7" />
          </Link>

          <nav className="hidden items-center gap-9 text-[14px] font-medium text-swiss-navy/70 md:flex">
            <a href="#sistema" className="transition-colors hover:text-swiss-navy">Sistema</a>
            <a href="#mercado" className="transition-colors hover:text-swiss-navy">Mercado</a>
            <a href="#diferenciais" className="transition-colors hover:text-swiss-navy">Diferenciais</a>
            <a href="#valores" className="transition-colors hover:text-swiss-navy">Valores</a>
          </nav>

          <Link
            href="/criar-conta"
            className="rounded-full bg-swiss-navy px-5 py-2.5 text-[13px] font-semibold text-white transition-transform hover:scale-[1.04] hover:bg-swiss-navy-deep"
          >
            Criar conta
          </Link>
        </div>
      </header>

      {/* ===================== HERO ===================== */}
      <section id="sistema" className="px-5 pb-20 pt-6 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-14 md:grid-cols-2 md:items-center md:gap-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-swiss-navy/70">
                <span className="h-1.5 w-1.5 rounded-full bg-swiss-orange" />
                Sistema de antecipação · Seja Acqua
              </span>

              <h1 className="mt-6 text-[13vw] font-extrabold leading-[0.98] tracking-tight text-swiss-navy md:text-[3.6vw]">
                Economia real,
                <br />
                sem <span className="text-swiss-orange">letra miúda</span>.
              </h1>

              <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-swiss-navy/65 md:text-lg">
                Seja Acqua aproxima você de oportunidades ligadas ao mercado de crédito e
                recebíveis. Você conhece as condições, entende como cada possibilidade funciona e
                decide com informação.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/criar-conta"
                  className="inline-flex items-center gap-2 rounded-full bg-swiss-navy px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-swiss-navy-deep"
                >
                  Criar conta
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="#diferenciais"
                  className="inline-flex items-center gap-2 rounded-full border border-swiss-navy/20 px-7 py-3.5 text-sm font-semibold text-swiss-navy transition-colors hover:bg-white"
                >
                  Como funciona
                </Link>
              </div>
            </div>

            {/* Card de visualização — 100% UI em código, sem foto */}
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-swiss-navy to-swiss-navy-deep p-7 text-white shadow-[0_30px_60px_-20px_rgba(14,54,85,0.45)] md:p-9">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-white/55">
                    Simulação · Antecipação
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-swiss-orange-bright">
                    <span className="h-1.5 w-1.5 rounded-full bg-swiss-orange-bright" />
                    Ilustrativo
                  </span>
                </div>

                <p className="mt-7 text-[13px] text-white/55">Valor estimado a antecipar</p>
                <p className="mt-1 text-[13vw] font-extrabold leading-none tracking-tight sm:text-[52px]">
                  R$ 18.500
                </p>

                <Link
                  href="/criar-conta"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-swiss-orange px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-swiss-orange-bright"
                >
                  Ver oportunidades
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>

                <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                  {['30', '60', '90'].map((d) => (
                    <div key={d} className="text-center">
                      <p className="text-xl font-bold sm:text-2xl">{d}</p>
                      <p className="mt-0.5 text-[10px] uppercase tracking-[0.1em] text-white/45">dias</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Badges sobrepostos, estilo Revolut */}
              <div className="relative z-10 mx-4 -mt-6 flex flex-wrap gap-3 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_30px_-14px_rgba(30,34,61,0.25)]">
                <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-swiss-navy/70">
                  <ShieldCheck className="h-4 w-4 text-swiss-orange" aria-hidden="true" />
                  Dados protegidos
                </span>
                <span className="hidden h-4 w-px bg-swiss-navy/15 sm:block" />
                <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-swiss-navy/70">
                  <FileCheck2 className="h-4 w-4 text-swiss-orange" aria-hidden="true" />
                  Sem letra miúda
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SUA OPERAÇÃO, SEMPRE EM DIA ===================== */}
      <section className="bg-white px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-swiss-navy md:text-5xl">
                Sua operação,
                <br />
                sempre em dia.
              </h2>
              <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-swiss-navy/60">
                Consulte as modalidades disponíveis e entenda os prazos antes de decidir. Nenhuma
                possibilidade representa garantia de resultado.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-gradient-to-br from-swiss-navy to-swiss-navy-deep p-7 text-white transition-transform hover:-translate-y-1">
                <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-white/50">Modalidade</span>
                <p className="mt-3 text-3xl font-extrabold tracking-tight">30–60 dias</p>
                <p className="mt-2 text-[14px] text-white/60">Ciclo mais curto de antecipação.</p>
                <Link href="/calculadora" className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-[13px] font-semibold transition-colors hover:bg-white/20">
                  Simular <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-swiss-navy-deep to-swiss-orange p-7 text-white transition-transform hover:-translate-y-1">
                <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-white/60">Modalidade</span>
                <p className="mt-3 text-3xl font-extrabold tracking-tight">60–90 dias</p>
                <p className="mt-2 text-[14px] text-white/70">Ciclo estendido de antecipação.</p>
                <Link href="/calculadora" className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-[13px] font-semibold transition-colors hover:bg-white/25">
                  Simular <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* linha de prova social — conteúdo real, baixo contraste */}
          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-swiss-navy/10 pt-8 text-[13px] font-medium text-swiss-navy/45">
            <span>Informação antes da decisão</span>
            <span className="hidden h-1 w-1 rounded-full bg-swiss-navy/25 sm:block" />
            <span>Tecnologia para organizar oportunidades</span>
            <span className="hidden h-1 w-1 rounded-full bg-swiss-navy/25 sm:block" />
            <span>Equipe disponível durante toda a jornada</span>
            <span className="hidden h-1 w-1 rounded-full bg-swiss-navy/25 sm:block" />
            <span>contato@sejaacqua.com.br</span>
          </div>
        </div>
      </section>

      {/* ===================== O MERCADO ===================== */}
      <section id="mercado" className="bg-gradient-to-br from-swiss-navy-deep to-swiss-orange px-5 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/70">
            O mercado
          </span>
          <h2 className="mt-5 max-w-[20ch] text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
            A empresa vende hoje. O recurso pode chegar depois.
          </h2>
          <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-white/75 md:text-lg">
            Todos os dias, empresas vendem produtos, prestam serviços e geram valores a receber.
            Muitas vezes, o pagamento dessas vendas chega somente depois de 30, 60 ou 90 dias. A
            antecipação de recebíveis existe para reduzir essa distância.
          </p>
        </div>
      </section>

      {/* ===================== DIFERENCIAIS (cartões estilo "planos") ===================== */}
      <section id="diferenciais" className="bg-swiss-navy px-5 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 flex items-end justify-between gap-6 md:mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Conheça antes de decidir.</h2>
            <span className="hidden text-[12px] font-medium uppercase tracking-[0.1em] text-white/40 md:block">
              05 diferenciais
            </span>
          </div>

          <div className="flex flex-col gap-4">
            {DIFERENCIAIS.map((d) => (
              <div
                key={d.title}
                className="group flex items-center justify-between gap-6 rounded-3xl bg-white/[0.06] px-7 py-6 transition-colors hover:bg-white/[0.1] md:px-9 md:py-7"
              >
                <div className="flex items-center gap-5">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-swiss-orange/15 text-swiss-orange-bright">
                    {d.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold md:text-xl">{d.title}</h3>
                    <p className="mt-1 text-[14px] text-white/55 md:text-[15px]">{d.body}</p>
                  </div>
                </div>
                <ArrowRight
                  className="h-5 w-5 flex-none text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-swiss-orange-bright"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== VALORES ===================== */}
      <section id="valores" className="bg-white px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 flex items-end justify-between gap-6 md:mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-swiss-navy md:text-4xl">
              Como a Seja Acqua pensa.
            </h2>
            <span className="hidden text-[12px] font-medium uppercase tracking-[0.1em] text-swiss-navy/40 md:block">
              03 princípios
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {COMO_PENSA.map((v) => (
              <div key={v.n} className="rounded-3xl bg-swiss-cream p-8 transition-transform hover:-translate-y-1">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[13px] font-bold text-swiss-orange">
                  {v.n}
                </span>
                <h3 className="mt-5 text-xl font-bold text-swiss-navy">{v.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-swiss-navy/60">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col items-start gap-8 rounded-3xl bg-gradient-to-br from-swiss-navy to-swiss-orange p-10 text-white md:flex-row md:items-center md:justify-between md:p-16">
            <div>
              <span className="rounded-full bg-white/15 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em]">
                Faça seu cadastro
              </span>
              <h2 className="mt-4 max-w-[18ch] text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Conheça a plataforma.
              </h2>
            </div>
            <Link
              href="/criar-conta"
              className="inline-flex flex-none items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-swiss-navy transition-transform hover:scale-[1.04]"
            >
              Criar conta
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="px-5 py-6 md:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-3 text-[12px] text-swiss-navy/50 md:flex-row md:items-center">
          <span>© 2026 Seja Acqua</span>
          <Link href="/" className="underline-offset-4 hover:underline">
            ← Voltar para o site
          </Link>
        </div>
      </footer>
    </div>
  );
}
