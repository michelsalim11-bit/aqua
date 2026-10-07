import type { Metadata } from 'next';
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
  CheckCircle2,
} from 'lucide-react';

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

const DIFERENCIAIS = [
  { icon: <FileCheck2 className="h-5 w-5" aria-hidden="true" />, title: 'Condições conhecidas', body: 'Apresentadas antes de qualquer decisão.' },
  { icon: <TrendingUp className="h-5 w-5" aria-hidden="true" />, title: 'Remuneração', body: 'Forma e condições previstas, sem letra miúda.' },
  { icon: <Clock3 className="h-5 w-5" aria-hidden="true" />, title: 'Prazo e carência', body: 'Disponíveis para consulta a qualquer momento.' },
  { icon: <BarChart3 className="h-5 w-5" aria-hidden="true" />, title: 'Previsibilidade', body: 'Fluxos e critérios apresentados desde o início.' },
  { icon: <Users2 className="h-5 w-5" aria-hidden="true" />, title: 'Acompanhamento', body: 'Nossa equipe segue com você na jornada.' },
];

const TIMELINE = [
  { label: '30 dias', status: 'Em análise' },
  { label: '60 dias', status: 'Em andamento' },
  { label: '90 dias', status: 'Circulação' },
];

export default function LandingPage() {
  return (
    <div className="bg-[#e6d5b7] text-[#1e223d]">
      {/* ===================== HEADER ===================== */}
      <header className="border-b-[3px] border-[#1e223d]">
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
            <a href="#diferenciais" className="hover:underline">
              Diferenciais
            </a>
            <a href="#valores" className="hover:underline">
              Valores
            </a>
          </nav>

          <Link
            href="/criar-conta"
            className="justify-self-end border-[2px] border-[#1e223d] px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-colors hover:bg-[#1e223d] hover:text-[#e6d5b7] md:px-5 md:py-2.5"
          >
            Cadastro →
          </Link>
        </div>
      </header>

      {/* ===================== HERO ===================== */}
      <section id="sistema" className="border-b-[3px] border-[#1e223d]">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20">
          <div className="mb-8 flex flex-wrap items-center gap-3 md:mb-12">
            <span className="inline-flex items-center gap-2 border-[2px] border-[#1e223d] px-3 py-1.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.14em]">
              <span className="h-2 w-2 rounded-full bg-[#f54f1b]" />
              Sistema de antecipação · v2
            </span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#1e223d]/60">
              Seja Acqua — Economia real
            </span>
          </div>

          <h1 className="font-heading text-[14vw] font-bold uppercase leading-[0.86] tracking-tight md:text-[7.2vw]">
            Economia
            <br />
            <span className="italic text-[#f54f1b]">real</span>.
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
                className="clay-btn mt-8 inline-flex items-center gap-2 rounded-2xl px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.1em] text-white"
              >
                Entenda como funciona
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 border-t-[2px] border-[#1e223d]/15 pt-6 font-mono text-[10.5px] uppercase tracking-[0.1em] text-[#1e223d]/55 sm:grid-cols-3">
                <span>Tipografia: Space Grotesk</span>
                <span>Cor base: #1E223D</span>
                <span>Acento: #F54F1B</span>
              </div>
            </div>

            {/* Clay "dashboard" panel — linha do tempo da antecipação */}
            <div className="flex flex-col justify-between">
              <p className="font-mono text-sm uppercase leading-relaxed tracking-[0.06em] text-[#1e223d]/60">
                Oportunidades reais, apresentadas com clareza — sem letra miúda, sem promessa de
                resultado garantido.
              </p>

              <div className="clay mt-10 rounded-[28px] p-6 md:mt-0 md:rounded-[32px] md:p-7">
                <div className="mb-5 flex items-center justify-between font-mono text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#1e223d]/50">
                  <span>Linha do tempo</span>
                  <span className="text-[#f54f1b]">Antecipação</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {TIMELINE.map((t) => (
                    <div key={t.label} className="clay-inset rounded-2xl p-4 text-center">
                      <p className="font-heading text-2xl font-bold md:text-3xl">{t.label.split(' ')[0]}</p>
                      <p className="mt-0.5 text-[10px] uppercase tracking-[0.1em] text-[#1e223d]/55">dias</p>
                      <div className="mt-3 flex items-center justify-center gap-1 font-mono text-[9px] font-bold uppercase tracking-[0.08em] text-[#1e223d]/65">
                        <CheckCircle2 className="h-3 w-3 text-[#f54f1b]" aria-hidden="true" />
                        {t.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== O MERCADO (brutalist stripe) ===================== */}
      <section id="mercado" className="border-b-[3px] border-[#1e223d] bg-gradient-to-br from-[#1e223d] via-[#1e223d] to-[#7a2c10] text-[#e6d5b7]">
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
          <div className="mb-6 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#f54f1b]">
            {'// O mercado'}
          </div>
          <h2 className="max-w-[18ch] font-heading text-4xl font-bold uppercase leading-[1.02] md:text-6xl">
            A empresa vende hoje. <span className="italic text-[#f54f1b]">O recurso</span> pode chegar depois.
          </h2>
          <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-[#e6d5b7]/75 md:text-lg">
            Todos os dias, empresas vendem produtos, prestam serviços e geram valores a receber.
            Muitas vezes, o pagamento dessas vendas chega somente depois de 30, 60 ou 90 dias. A
            antecipação de recebíveis existe para reduzir essa distância.
          </p>
        </div>
      </section>

      {/* ===================== DIFERENCIAIS (clay icon grid) ===================== */}
      <section id="diferenciais" className="border-b-[3px] border-[#1e223d]">
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
          <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
            <h2 className="font-heading text-3xl font-bold uppercase leading-[1.05] md:text-5xl">
              Conheça antes
              <br />
              de decidir.
            </h2>
            <span className="hidden font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#1e223d]/50 md:block">
              05 diferenciais
            </span>
          </div>

          <div className="grid gap-5 border-t-[2px] border-[#1e223d]/20 pt-10 sm:grid-cols-2 lg:grid-cols-5">
            {DIFERENCIAIS.map((d) => (
              <div key={d.title} className="border-[2px] border-[#1e223d]/15 p-6">
                <span className="clay-icon inline-flex h-11 w-11 items-center justify-center rounded-full text-[#f54f1b]">
                  {d.icon}
                </span>
                <h3 className="mt-4 font-heading text-base font-bold uppercase tracking-tight">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1e223d]/70">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== NO DIA A DIA (fotos reais) ===================== */}
      <section className="border-b-[3px] border-[#1e223d]">
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
          <div className="mb-10 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#1e223d]/50 md:mb-14">
            {'// Seja Acqua no dia a dia'}
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <figure className="border-[3px] border-[#1e223d]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/landing/vida-caminhamos.jpg"
                  alt="Duas pessoas caminhando lado a lado em um corredor envidraçado"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <figcaption className="flex items-center justify-between border-t-[3px] border-[#1e223d] p-5 font-mono text-[11px] uppercase tracking-[0.1em] text-[#1e223d]/70">
                <span>Quadro 01</span>
                <span className="text-[#f54f1b]">Relacionamento</span>
              </figcaption>
            </figure>
            <figure className="border-[3px] border-[#1e223d]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/landing/vida-selic.jpg"
                  alt="Pessoa caminhando em frente ao edifício do Banco Central do Brasil"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <figcaption className="flex items-center justify-between border-t-[3px] border-[#1e223d] p-5 font-mono text-[11px] uppercase tracking-[0.1em] text-[#1e223d]/70">
                <span>Quadro 02</span>
                <span className="text-[#f54f1b]">Mercado</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ===================== VALORES (swiss grid + clay cards) ===================== */}
      <section id="valores" className="border-b-[3px] border-[#1e223d]">
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
          <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
            <h2 className="font-heading text-3xl font-bold uppercase leading-[1.05] md:text-5xl">
              Como a Seja
              <br />
              Acqua pensa.
            </h2>
            <span className="hidden font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#1e223d]/50 md:block">
              03 princípios
            </span>
          </div>

          <div className="grid gap-6 border-t-[2px] border-[#1e223d]/20 pt-10 md:grid-cols-3 md:gap-8">
            {VALUES.map((v) => (
              <div key={v.n} className="clay rounded-[24px] p-7 md:rounded-[28px] md:p-8">
                <span className="font-mono text-xs font-bold text-[#f54f1b]">{v.n}</span>
                <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-tight">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#1e223d]/70">{v.body}</p>
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
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#1e223d]/50">
                Faça seu cadastro
              </span>
              <h2 className="mt-3 max-w-[16ch] font-heading text-3xl font-bold uppercase leading-[1.02] md:text-5xl">
                Conheça a plataforma.
              </h2>
            </div>
            <Link
              href="/criar-conta"
              className="clay-btn inline-flex flex-none items-center gap-2 rounded-2xl px-8 py-4 font-mono text-sm font-bold uppercase tracking-[0.1em] text-white"
            >
              Criar conta
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="border-t-[3px] border-[#1e223d] px-5 py-6 md:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.1em] text-[#1e223d]/55 md:flex-row md:items-center">
          <span>© 2026 Seja Acqua</span>
          <Link href="/" className="underline-offset-4 hover:underline">
            ← Voltar para o site
          </Link>
        </div>
      </footer>
    </div>
  );
}
