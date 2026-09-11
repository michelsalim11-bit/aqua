import { AquaLogo } from './AquaLogo';
import { LpEffects } from './LpEffects';
import { LpForm } from './LpForm';
import { LpHeader } from './LpHeader';

const CheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    className="shrink-0 text-[var(--green)]"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const OPORTUNIDADES = [
  {
    nome: 'AQUAPRO',
    tipo: 'Remuneração ao final do prazo',
    taxa: '1,35%',
    destaque: false,
    prazo: '10 meses',
    janela: 'Junho 2026',
    aporteMinimo: 'R$ 3.000',
    delay: '0ms',
  },
  {
    nome: 'AQUAPRIME',
    tipo: 'Remuneração ao final do prazo',
    taxa: '1,50%',
    destaque: true,
    prazo: '8 meses',
    janela: 'Junho 2026',
    aporteMinimo: 'R$ 1.000',
    delay: '90ms',
  },
  {
    nome: 'AQUAPLUS',
    tipo: 'Remuneração mensal',
    taxa: '1,25%',
    destaque: false,
    prazo: '12 meses',
    janela: 'Junho 2026',
    aporteMinimo: 'R$ 1.000',
    delay: '180ms',
  },
];

const DIFERENCIAIS = [
  {
    numero: '01',
    titulo: 'Um mercado que era restrito',
    texto:
      'Operações ligadas à economia real e ao crédito privado ficaram por muito tempo concentradas entre bancos, fundos e grandes instituições. A Aqua usa tecnologia e curadoria para abrir esse acesso.',
    delay: '0ms',
  },
  {
    numero: '02',
    titulo: 'Menos intermediários no caminho',
    texto:
      'Conectamos você diretamente às operações da economia real. Menos camadas entre o recurso e o destino, mais clareza sobre para onde o seu dinheiro vai.',
    delay: '80ms',
  },
  {
    numero: '03',
    titulo: 'Tudo em um só ambiente',
    texto:
      'Da escolha da oportunidade ao acompanhamento da remuneração, você gerencia tudo numa plataforma simples e transparente, com suporte de especialistas.',
    delay: '160ms',
  },
];

const PASSOS = [
  {
    numero: '01',
    titulo: 'Cadastre-se',
    texto: 'Preencha o formulário e fale com um especialista para conhecer as oportunidades disponíveis.',
    delay: '0ms',
  },
  {
    numero: '02',
    titulo: 'Escolha sua oportunidade',
    texto: 'Selecione a operação com o prazo, a remuneração e o aporte ideais para o seu momento.',
    delay: '100ms',
  },
  {
    numero: '03',
    titulo: 'Acompanhe o movimento',
    texto: 'Receba a remuneração no prazo combinado e acompanhe tudo de forma simples e transparente.',
    delay: '200ms',
  },
];

export default function LpPage() {
  return (
    <>
      <LpHeader />

      <main className="flex-1">
        {/* HERO + CADASTRO */}
        <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="glow-top pointer-events-none absolute inset-0" />
          <div
            className="pointer-events-none absolute -left-40 bottom-0 h-[480px] w-[480px] rounded-full opacity-50 blur-3xl"
            style={{ background: 'radial-gradient(circle, var(--green-soft), transparent 65%)' }}
          />
          <div className="shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div data-reveal="" className="is-in">
              <span className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--green)_35%,transparent)] bg-[var(--green-soft)] px-4 py-1.5 text-[13px] font-semibold text-[var(--green)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" />
                Conectado à economia real
              </span>
              <h1 className="mt-6 text-[clamp(2.6rem,6vw,4.6rem)] font-black leading-[0.98] tracking-[-0.03em]">
                A economia <span className="text-[var(--green)]">não pode esperar.</span>
              </h1>
              <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-[var(--muted)]">
                A Aqua conecta você a oportunidades ligadas à economia real. Acesso a um mercado
                historicamente restrito a bancos, fundos e grandes instituições.
              </p>
              <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-7">
                <li className="flex items-center gap-2.5 text-sm text-[var(--muted)]">
                  <CheckIcon />
                  Ligado à economia real
                </li>
                <li className="flex items-center gap-2.5 text-sm text-[var(--muted)]">
                  <CheckIcon />
                  Remuneração simulada de 1,35% ao mês*
                </li>
              </ul>
            </div>
            <div id="cadastro" className="scroll-mt-28 lg:w-full lg:max-w-[460px] lg:justify-self-end">
              <LpForm />
            </div>
          </div>
        </section>

        {/* OPORTUNIDADES */}
        <section
          id="oportunidades"
          className="scroll-mt-20 border-t border-[var(--line-2)] bg-[var(--bg-2)] py-20 md:py-28"
        >
          <div className="shell">
            <div data-reveal="" className="max-w-2xl" style={{ '--reveal-delay': '0ms' } as React.CSSProperties}>
              <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[var(--green)]">
                Oportunidades
              </span>
              <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-black leading-[1.04] tracking-[-0.03em]">
                Oportunidades disponíveis agora
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-[var(--muted)]">
                Operações ligadas à economia real. Escolha a estratégia, o prazo e o aporte que
                fazem sentido para o seu momento.
              </p>
            </div>
            <div className="mt-14 grid items-stretch gap-5 md:grid-cols-3 lg:gap-6">
              {OPORTUNIDADES.map((op) => (
                <div
                  key={op.nome}
                  data-reveal=""
                  className={`group relative flex flex-col rounded-2xl border p-7 transition-transform duration-[400ms] ease-[var(--ease-out-quart)] hover:-translate-y-1 md:p-8 ${
                    op.destaque
                      ? 'border-[color-mix(in_oklab,var(--green)_45%,transparent)] bg-[var(--surface-2)] shadow-[0_24px_70px_-30px_var(--green-glow)] lg:-mt-4 lg:mb-0'
                      : 'border-[var(--line)] bg-[var(--surface)]'
                  }`}
                  style={{ '--reveal-delay': op.delay } as React.CSSProperties}
                >
                  {op.destaque && (
                    <span className="absolute -top-3 left-7 rounded-full bg-[var(--green)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--green-ink)]">
                      Mais procurada
                    </span>
                  )}
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-lg font-extrabold tracking-tight">{op.nome}</span>
                  </div>
                  <span className="mt-1 text-[13px] font-medium text-[var(--muted)]">{op.tipo}</span>
                  <div className="mt-6 flex items-end gap-1.5">
                    <span
                      className={`text-[3.4rem] font-black leading-none tracking-[-0.04em] ${
                        op.destaque ? 'text-[var(--green)]' : 'text-[var(--fg)]'
                      }`}
                    >
                      {op.taxa}
                    </span>
                    <span className="mb-2 text-sm font-semibold text-[var(--muted)]">ao mês*</span>
                  </div>
                  <dl className="mt-7 space-y-3 border-t border-[var(--line)] pt-6 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-[var(--muted)]">Prazo</dt>
                      <dd className="font-semibold">{op.prazo}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-[var(--muted)]">Janela</dt>
                      <dd className="font-semibold">{op.janela}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-[var(--muted)]">Aporte mínimo</dt>
                      <dd className="font-semibold">{op.aporteMinimo}</dd>
                    </div>
                  </dl>
                  <a
                    href="#cadastro"
                    className={`mt-7 inline-flex items-center justify-center rounded-xl py-3.5 text-sm font-bold transition-all duration-300 ease-[var(--ease-out-quart)] ${
                      op.destaque
                        ? 'bg-[var(--green)] text-[var(--green-ink)] shadow-[0_12px_30px_var(--green-glow)] hover:-translate-y-0.5 hover:brightness-105'
                        : 'border border-[var(--line)] text-[var(--fg)] hover:border-[color-mix(in_oklab,var(--green)_50%,transparent)] hover:text-[var(--green)]'
                    }`}
                  >
                    Quero participar
                  </a>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-[var(--faint)]">
              *Percentuais de remuneração apresentados em caráter de simulação, sem garantia de
              resultado. Comunicação informativa, sem caráter de oferta ou recomendação. Condições
              sujeitas a análise e disponibilidade da janela.
            </p>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section id="diferenciais" className="scroll-mt-20 py-20 md:py-28">
          <div className="shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div
              data-reveal=""
              className="lg:sticky lg:top-28 lg:self-start"
              style={{ '--reveal-delay': '0ms' } as React.CSSProperties}
            >
              <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[var(--green)]">
                Por que a Aqua
              </span>
              <h2 className="mt-3 text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.03] tracking-[-0.03em]">
                Acesso à economia real, sem a complexidade de sempre.
              </h2>
            </div>
            <ul className="flex flex-col">
              {DIFERENCIAIS.map((d) => (
                <li
                  key={d.numero}
                  data-reveal=""
                  className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-[var(--line)] py-8 first:border-t-0 first:pt-0 md:gap-x-9"
                  style={{ '--reveal-delay': d.delay } as React.CSSProperties}
                >
                  <span className="text-2xl font-black tabular-nums text-[var(--green)] md:text-3xl">
                    {d.numero}
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold tracking-tight md:text-2xl">{d.titulo}</h3>
                    <p className="mt-2.5 max-w-xl text-[16px] leading-relaxed text-[var(--muted)]">
                      {d.texto}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section
          id="como-funciona"
          className="scroll-mt-20 border-t border-[var(--line-2)] bg-[var(--bg-2)] py-20 md:py-28"
        >
          <div className="shell">
            <div data-reveal="" className="max-w-2xl" style={{ '--reveal-delay': '0ms' } as React.CSSProperties}>
              <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[var(--green)]">
                Como funciona
              </span>
              <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-black leading-[1.04] tracking-[-0.03em]">
                Três passos para entrar no movimento.
              </h2>
            </div>
            <div className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
              <div
                className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px md:block"
                style={{ background: 'linear-gradient(90deg, transparent, var(--line), var(--line), transparent)' }}
              />
              {PASSOS.map((p) => (
                <div
                  key={p.numero}
                  data-reveal=""
                  className="relative"
                  style={{ '--reveal-delay': p.delay } as React.CSSProperties}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--green)_40%,transparent)] bg-[var(--bg-2)] text-lg font-black text-[var(--green)]">
                    {p.numero}
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold tracking-tight">{p.titulo}</h3>
                  <p className="mt-2.5 max-w-xs text-[16px] leading-relaxed text-[var(--muted)]">{p.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(70% 120% at 50% 120%, var(--green-soft), transparent 60%)' }}
          />
          <div
            data-reveal=""
            className="shell relative mx-auto max-w-3xl text-center"
            style={{ '--reveal-delay': '0ms' } as React.CSSProperties}
          >
            <h2 className="text-[clamp(2.1rem,5vw,3.6rem)] font-black leading-[1.02] tracking-[-0.03em]">
              O futuro é construído pelo movimento.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-[var(--muted)]">
              Crescimento não acontece quando os recursos ficam parados. Fale com um especialista da
              Aqua e descubra como participar da economia real.
            </p>
            <a
              href="#cadastro"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--green)] px-9 py-4 text-[16px] font-extrabold text-[var(--green-ink)] shadow-[0_18px_44px_var(--green-glow)] transition-transform duration-300 ease-[var(--ease-out-quart)] hover:-translate-y-0.5"
            >
              Quero acessar as oportunidades
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[var(--line)] bg-[var(--bg)] py-14">
        <div className="shell">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <AquaLogo className="h-8 w-auto text-[var(--green)]" />
              <p className="mt-4 text-sm font-semibold text-[var(--muted)]">Você pode mais.</p>
            </div>
            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              <a href="#oportunidades" className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--fg)]">
                Oportunidades
              </a>
              <a href="#diferenciais" className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--fg)]">
                Diferenciais
              </a>
              <a href="#como-funciona" className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--fg)]">
                Como funciona
              </a>
            </nav>
          </div>
          <p className="mt-10 max-w-4xl text-xs leading-relaxed text-[var(--faint)]">
            A Aqua é uma plataforma de tecnologia que conecta investidores a oportunidades ligadas à
            economia real. Este conteúdo possui caráter exclusivamente informativo e não constitui
            oferta, recomendação ou aconselhamento. Simulações e projeções, quando apresentadas, não
            representam garantia de remuneração futura. Toda operação envolve riscos e deve ser
            avaliada individualmente.
          </p>
          <p className="mt-6 border-t border-[var(--line-2)] pt-6 text-xs text-[var(--faint)]">
            © 2026 Seja Acqua. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <LpEffects />
    </>
  );
}
