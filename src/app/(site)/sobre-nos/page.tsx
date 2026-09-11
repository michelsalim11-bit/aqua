import type { Metadata } from 'next';

const TITLE = 'Aqua na imprensa';
const DESCRIPTION =
  'O movimento da economia real registrado pela imprensa.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/sobre-nos' },
  openGraph: {
    title: `${TITLE} | Seja Acqua`,
    description: DESCRIPTION,
    url: 'https://aquainvest.com.br/sobre-nos',
    type: 'website',
  },
};

const press = [
  {
    source: 'Jornal de Brasília',
    title:
      'Por que a velocidade da economia importa mais do que nunca para empresas, empregos e crescimento',
    href: 'https://jornaldebrasilia.com.br/blogs-e-colunas/analice-nicolau/por-que-a-velocidade-da-economia-importa-mais-do-que-nunca-para-empresas-empregos-e-crescimento/',
  },
  {
    source: 'The Date News · Portal iG',
    title:
      'Liquidez empresarial impulsiona crescimento, competitividade e decisões estratégicas no ambiente corporativo',
    href: 'https://thedatenews.ig.com.br/liquidez-empresarial-impulsiona-crescimento-competitividade-e-decisoes-estrategicas-no-ambiente-corporativo/',
  },
  {
    source: 'Última Hora Online',
    title:
      'O mercado que movimenta bilhões e ajuda empresas a manterem a economia em funcionamento',
    href: 'https://www.ultimahoraonline.com.br/noticia/o-mercado-que-movimenta-bilhoes-e-ajuda-empresas-a-manterem-a-economia-em-funcionamento',
  },
];

export default function ImprensaPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="wrap reveal">
          <span className="eyebrow">Imprensa</span>
          <h1>Aqua na imprensa.</h1>
          <p>O movimento da economia real registrado pela imprensa.</p>
        </div>
      </section>

      {/* LISTA EDITORIAL */}
      <section className="pb-24 md:pb-32">
        <ul className="wrap flex flex-col">
          {press.map((item) => (
            <li key={item.href} className="reveal">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-2 border-t border-[var(--line)] py-9 md:grid-cols-[200px_1fr_auto] md:gap-x-10 md:py-11"
              >
                <span className="col-span-2 text-[13px] font-bold uppercase tracking-[0.16em] text-aqua-green md:col-span-1">
                  {item.source}
                </span>
                <h2 className="max-w-3xl text-xl font-extrabold leading-snug tracking-tight transition-colors duration-300 group-hover:text-aqua-green md:text-2xl">
                  {item.title}
                </h2>
                <span
                  aria-hidden="true"
                  className="self-center text-xl font-bold text-[var(--ink-faint)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-aqua-green"
                >
                  ↗
                </span>
              </a>
            </li>
          ))}
          <li aria-hidden="true" className="border-t border-[var(--line)]" />
        </ul>
      </section>
    </>
  );
}
