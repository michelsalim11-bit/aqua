import type { Metadata } from 'next';

const TITLE = 'A Aqua';
const DESCRIPTION =
  'A Aqua é uma plataforma eletrônica que aproxima pessoas de oportunidades ligadas à economia real, ampliando o acesso a mercados relevantes para o crescimento econômico.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/sobre' },
  openGraph: {
    title: `${TITLE} | Seja Acqua`,
    description: DESCRIPTION,
    url: 'https://aquainvest.com.br/sobre',
    type: 'website',
  },
};

const values = [
  {
    title: 'Transparência',
    text: 'Comunicação objetiva e relações construídas com confiança.',
    icon: (
      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Acesso',
    text: 'Reduzir barreiras e ampliar possibilidades.',
    icon: (
      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="15" r="4" />
        <path d="M10.8 12.2 19 4" />
        <path d="M16 5l3 3" />
        <path d="M14 7l3 3" />
      </svg>
    ),
  },
  {
    title: 'Responsabilidade',
    text: 'Atuar com disciplina e compromisso em cada decisão.',
    icon: (
      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Tecnologia',
    text: 'Utilizar inovação para simplificar experiências e aproximar oportunidades.',
    icon: (
      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
      </svg>
    ),
  },
  {
    title: 'Longo Prazo',
    text: 'Construir relações consistentes que valorizam permanência e evolução.',
    icon: (
      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M21 7v5h-5" />
      </svg>
    ),
  },
  {
    title: 'Respeito',
    text: 'Valorizar o capital, o tempo e a confiança de cada cliente.',
    icon: (
      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.8 5.6a4 4 0 0 0-5.7 0L12 8.7 8.9 5.6a4 4 0 1 0-5.7 5.7L12 20l8.8-8.7a4 4 0 0 0 0-5.7Z" />
      </svg>
    ),
  },
];

export default function SobrePage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="wrap reveal">
          <span className="eyebrow">A Aqua</span>
          <h1>Mais acesso. Mais possibilidades.</h1>
          <p>
            A economia se move todos os dias. Empresas vendem, produzem, contratam e crescem. Mas
            nem sempre os recursos acompanham esse mesmo ritmo.
          </p>
        </div>
      </section>

      {/* SOBRE */}
      <section className="band">
        <div className="wrap split">
          <div className="reveal prose">
            <p>
              Existe um mercado que contribui para aproximar o momento em que o valor é gerado do
              momento em que ele volta a circular. Um mercado relevante para empresas, para a
              atividade econômica e para o crescimento.
            </p>
            <p>
              A Aqua nasce conectada a esse contexto. Somos uma plataforma eletrônica que aproxima
              pessoas de oportunidades ligadas à economia real, ampliando o acesso a mercados que
              durante muito tempo permaneceram concentrados em poucos participantes.
            </p>
            <p>
              Acreditamos que a tecnologia pode reduzir distâncias, ampliar possibilidades e tornar
              o acesso mais simples.
            </p>
            <p>
              Por isso construímos uma experiência digital que combina tecnologia, organização e
              transparência para aproximar pessoas de um mercado que movimenta empresas, recursos e
              desenvolvimento econômico.
            </p>
          </div>
          <div className="media reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/bg-sobre.jpg"
              alt="Pessoa conectada à plataforma Aqua pelo celular"
              loading="lazy"
              width={1200}
              height={896}
            />
          </div>
        </div>
      </section>

      {/* MISSÃO / VISÃO */}
      <section className="band soft">
        <div className="wrap">
          <div className="mv-grid">
            <article className="mv reveal">
              <span className="eyebrow">Nossa missão</span>
              <p>
                Ampliar o acesso a oportunidades ligadas à economia real por meio da tecnologia,
                aproximando pessoas de mercados relevantes para o crescimento econômico.
              </p>
            </article>
            <article className="mv reveal">
              <span className="eyebrow">Nossa visão</span>
              <p>
                Ser reconhecida como uma plataforma de referência na conexão entre pessoas,
                oportunidades e mercados que contribuem para a circulação eficiente de recursos na
                economia.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="band">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Nossos valores</span>
            <h2 className="lead-h">O que orienta cada decisão.</h2>
          </div>
          <div className="values">
            {values.map((v) => (
              <article className="value reveal" key={v.title}>
                {v.icon}
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="band imgband final">
        <div className="bg" aria-hidden="true" />
        <div className="wrap">
          <h2 className="reveal">Faça seu cadastro e conheça a plataforma Aqua.</h2>
          <div className="cta-row reveal">
            <a className="btn btn-primary" href="/#cadastro">
              Faça seu cadastro{' '}
              <span className="arr" aria-hidden="true">
                →
              </span>
            </a>
            <a className="btn btn-ghost" href="/contato">
              Falar com a gente
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
