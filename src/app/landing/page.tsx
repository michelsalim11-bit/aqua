import type { Metadata } from 'next';
import { Bricolage_Grotesque, Public_Sans, Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  TrendingUp,
  Clock3,
  BarChart3,
  Users2,
} from 'lucide-react';
import { LeadForm } from './LeadForm';

const WHATSAPP = 'https://wa.me/5511991948472';

// Kregan/Raisah não estão disponíveis via Google Fonts (sem licença de embed web);
// Bricolage Grotesque é o display mais próximo entre as fontes do sistema oficial.
const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
});
const apoio = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-apoio',
});
const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
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
      className={`${display.variable} ${apoio.variable} ${body.variable} font-body bg-white text-swiss-ink`}
    >
      {/* ===================== HEADER ===================== */}
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-5 md:px-10">
          <Link href="/" className="flex items-center gap-2" aria-label="Seja Acqua, página inicial">
            <Image src="/logo-green.svg" alt="Seja Acqua" width={120} height={26} priority className="h-6 w-auto md:h-7" />
          </Link>

          <nav className="font-body hidden items-center gap-9 text-[14px] font-medium text-swiss-navy/70 md:flex">
            <a href="#sistema" className="transition-colors hover:text-swiss-navy">Sistema</a>
            <a href="#mercado" className="transition-colors hover:text-swiss-navy">Mercado</a>
            <a href="#diferenciais" className="transition-colors hover:text-swiss-navy">Diferenciais</a>
            <a href="#valores" className="transition-colors hover:text-swiss-navy">Valores</a>
          </nav>

          <Link
            href="/criar-conta"
            className="font-body rounded-full bg-swiss-navy px-5 py-2.5 text-[13px] font-semibold text-white transition-transform hover:scale-[1.04] hover:bg-swiss-navy-deep"
          >
            Criar conta
          </Link>
        </div>
      </header>

      {/* ===================== HERO — foto em tela cheia, texto sobreposto ===================== */}
      <section id="sistema" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/landing/hero-foto.jpg"
            alt="Cliente consultando a plataforma Seja Acqua pelo celular"
            fill
            priority
            className="object-cover object-[65%_20%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-swiss-navy/90 via-swiss-navy/55 to-swiss-navy/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-swiss-navy/80 via-transparent to-transparent" />
        </div>

        <div className="mx-auto flex min-h-[560px] max-w-[1280px] flex-col justify-center px-5 py-20 md:min-h-[720px] md:px-10 md:py-28">
          <span className="font-apoio inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[12px] font-semibold text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-swiss-orange" />
            Sistema de antecipação · Seja Acqua
          </span>

          <h1 className="font-display mt-6 max-w-[15ch] text-[13vw] font-extrabold leading-[0.98] tracking-tight text-white md:text-[4.4vw]">
            O poder é <span className="text-swiss-orange">seu</span>.
          </h1>

          <p className="font-apoio mt-6 max-w-[42ch] text-base leading-relaxed text-white/80 md:text-lg">
            Investimentos em renda fixa de crédito privado, com o cliente no centro de tudo.
          </p>

          <div className="font-body mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/criar-conta"
              className="inline-flex items-center gap-2 rounded-full bg-swiss-orange px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-swiss-orange-bright"
            >
              Criar conta
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="#diferenciais"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Como funciona
            </Link>
          </div>

          {/* Quadrado — mini painel de UI flutuando sobre a foto */}
          <div className="mt-12 w-full max-w-sm rounded-2xl bg-white/95 p-5 backdrop-blur md:mt-16">
            <p className="font-body text-[12px] text-swiss-navy/55">Valor estimado a antecipar</p>
            <p className="font-apoio mt-1 text-3xl font-extrabold tracking-tight text-swiss-navy">R$ 18.500</p>
            <Link
              href="/criar-conta"
              className="font-body mt-4 inline-flex items-center gap-2 rounded-full bg-swiss-navy px-5 py-2.5 text-[13px] font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-swiss-navy-deep"
            >
              Ver oportunidades
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Badges — faixa inferior sobreposta à foto */}
        <div className="relative z-10 mx-auto -mt-6 max-w-[1280px] px-5 md:px-10">
          <div className="font-body flex flex-wrap gap-3 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_30px_-14px_rgba(30,34,61,0.25)]">
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
        <div className="h-6 md:h-10" />
      </section>

      {/* ===================== SUA OPERAÇÃO, SEMPRE EM DIA ===================== */}
      <section className="bg-white px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-swiss-navy md:text-5xl">
                Sua operação,
                <br />
                sempre em dia.
              </h2>
              <p className="font-apoio mt-5 max-w-[42ch] text-base leading-relaxed text-swiss-navy/60">
                Consulte as modalidades disponíveis e entenda os prazos antes de decidir. Nenhuma
                possibilidade representa garantia de resultado.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-gradient-to-br from-swiss-navy to-swiss-navy-deep p-7 text-white transition-transform hover:-translate-y-1">
                <span className="font-apoio text-[12px] font-medium uppercase tracking-[0.1em] text-white/50">Modalidade</span>
                <p className="font-apoio mt-3 text-3xl font-extrabold tracking-tight">30–60 dias</p>
                <p className="font-body mt-2 text-[14px] text-white/60">Ciclo mais curto de antecipação.</p>
                <Link href="/calculadora" className="font-body mt-6 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-[13px] font-semibold transition-colors hover:bg-white/20">
                  Simular <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-swiss-navy-deep to-swiss-orange p-7 text-white transition-transform hover:-translate-y-1">
                <span className="font-apoio text-[12px] font-medium uppercase tracking-[0.1em] text-white/60">Modalidade</span>
                <p className="font-apoio mt-3 text-3xl font-extrabold tracking-tight">60–90 dias</p>
                <p className="font-body mt-2 text-[14px] text-white/70">Ciclo estendido de antecipação.</p>
                <Link href="/calculadora" className="font-body mt-6 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-[13px] font-semibold transition-colors hover:bg-white/25">
                  Simular <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* linha de prova social — conteúdo real, baixo contraste */}
          <div className="font-body mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-swiss-navy/10 pt-8 text-[13px] font-medium text-swiss-navy/45">
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

      {/* ===================== O MERCADO — foto editorial de fundo ===================== */}
      <section id="mercado" className="relative isolate overflow-hidden px-5 py-20 text-white md:px-10 md:py-32">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/landing/mercado-foto.jpg"
            alt="Pessoas observando o horizonte ao amanhecer, lado a lado"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-swiss-navy-deep/90 to-swiss-orange/70" />
        </div>

        <div className="mx-auto max-w-[1280px]">
          <span className="font-apoio rounded-full bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/70">
            O mercado
          </span>
          <h2 className="font-display mt-5 max-w-[20ch] text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
            A empresa vende hoje. O recurso pode chegar depois.
          </h2>
          <p className="font-apoio mt-6 max-w-[60ch] text-base leading-relaxed text-white/85 md:text-lg">
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
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Conheça antes de decidir.</h2>
            <span className="font-apoio hidden text-[12px] font-medium uppercase tracking-[0.1em] text-white/40 md:block">
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
                    <h3 className="font-apoio text-lg font-bold md:text-xl">{d.title}</h3>
                    <p className="font-body mt-1 text-[14px] text-white/55 md:text-[15px]">{d.body}</p>
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

      {/* ===================== VALORES — foto editorial de fundo ===================== */}
      <section id="valores" className="relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-28">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/landing/pensa-foto.jpg"
            alt="Fachada aconchegante de um bar à noite, com clientes à mesa"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-swiss-navy-deep/88 to-swiss-navy/70" />
        </div>

        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 flex items-end justify-between gap-6 md:mb-16">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Como a Seja Acqua pensa.
            </h2>
            <span className="font-apoio hidden text-[12px] font-medium uppercase tracking-[0.1em] text-white/50 md:block">
              03 princípios
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {COMO_PENSA.map((v) => (
              <div key={v.n} className="rounded-3xl bg-white/95 p-8 backdrop-blur transition-transform hover:-translate-y-1">
                <span className="font-apoio inline-flex h-9 w-9 items-center justify-center rounded-full bg-swiss-cream text-[13px] font-bold text-swiss-orange">
                  {v.n}
                </span>
                <h3 className="font-apoio mt-5 text-xl font-bold text-swiss-navy">{v.title}</h3>
                <p className="font-body mt-2 text-[15px] leading-relaxed text-swiss-navy/60">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CADASTRO — lead form real ===================== */}
      <section id="cadastro" className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="rounded-3xl bg-gradient-to-br from-swiss-navy to-swiss-navy-deep p-8 text-white md:p-14">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              <div>
                <span className="font-apoio rounded-full bg-white/15 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em]">
                  Faça seu cadastro
                </span>
                <h2 className="font-display mt-4 max-w-[16ch] text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
                  Conheça a plataforma.
                </h2>
                <p className="font-apoio mt-5 max-w-[42ch] text-base leading-relaxed text-white/70">
                  Deixe seus dados e nossa equipe entrará em contato para apresentar a
                  plataforma, as oportunidades disponíveis e os próximos passos.
                </p>
              </div>

              <div className="rounded-2xl bg-white/[0.06] p-6 md:p-8">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="font-body border-t border-swiss-navy/10 bg-white px-5 pt-16 md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 pb-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <div>
              <Link href="/" className="flex items-center" aria-label="Seja Acqua, página inicial">
                <Image src="/logo-green.svg" alt="Seja Acqua" width={120} height={26} className="h-7 w-auto" />
              </Link>
              <p className="font-apoio mt-4 max-w-[28ch] text-[15px] text-swiss-navy/55">
                O poder é seu.
              </p>
              <a
                href="https://www.instagram.com/sejaacqua/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-swiss-navy/15 text-swiss-navy/60 transition-colors hover:border-swiss-navy/30 hover:text-swiss-navy"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                </svg>
              </a>
            </div>

            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.1em] text-swiss-navy/40">Institucional</h4>
              <ul className="mt-4 flex flex-col gap-3 text-[14px] text-swiss-navy/65">
                <li><a href="/#quem" className="transition-colors hover:text-swiss-navy">Conheça a Seja Acqua</a></li>
                <li><a href="/#mvv" className="transition-colors hover:text-swiss-navy">Missão, visão e valores</a></li>
                <li><a href="#mercado" className="transition-colors hover:text-swiss-navy">O mercado</a></li>
                <li><a href="/#produto" className="transition-colors hover:text-swiss-navy">Soluções</a></li>
                <li><Link href="/calculadora" className="transition-colors hover:text-swiss-navy">Calculadora</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.1em] text-swiss-navy/40">Contato</h4>
              <ul className="mt-4 flex flex-col gap-3 text-[14px] text-swiss-navy/65">
                <li><a href="#cadastro" className="transition-colors hover:text-swiss-navy">Tenho interesse</a></li>
                <li><a href="mailto:contato@sejaacqua.com.br" className="transition-colors hover:text-swiss-navy">contato@sejaacqua.com.br</a></li>
                <li>Segunda a sexta, das 9h às 18h</li>
                <li>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-swiss-navy">
                    Fale com a gente
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.1em] text-swiss-navy/40">Privacidade</h4>
              <ul className="mt-4 flex flex-col gap-3 text-[14px] text-swiss-navy/65">
                <li><a href="mailto:dpo@sejaacqua.com.br" className="transition-colors hover:text-swiss-navy">dpo@sejaacqua.com.br</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-swiss-navy/10 py-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-swiss-navy/35">Disclaimer</span>
            <p className="mt-3 max-w-[90ch] text-[13px] leading-relaxed text-swiss-navy/45">
              As informações apresentadas possuem caráter exclusivamente institucional e
              informativo e não constituem oferta, recomendação ou aconselhamento financeiro. As
              possibilidades eventualmente disponibilizadas pela Seja Acqua estão sujeitas a
              critérios, análise, disponibilidade, condições específicas e riscos. O cadastro ou
              o contato com a Seja Acqua não representa aprovação, contratação, garantia de
              acesso, remuneração ou resultado.
            </p>
          </div>

          <div className="flex flex-col items-start justify-between gap-3 border-t border-swiss-navy/10 py-6 text-[12px] text-swiss-navy/50 md:flex-row md:items-center">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/termos-de-uso" className="transition-colors hover:text-swiss-navy">Termos de Uso</Link>
              <Link href="/politica-de-privacidade" className="transition-colors hover:text-swiss-navy">Política de Privacidade</Link>
              <Link href="/codigo-de-etica-e-conduta" className="transition-colors hover:text-swiss-navy">Código de Ética e Conduta</Link>
            </div>
            <div className="flex items-center gap-4">
              <span>© 2026 Seja Acqua</span>
              <Link href="/" className="underline-offset-4 hover:underline">
                ← Voltar para o site
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
