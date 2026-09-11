import type { Metadata } from 'next';
import Link from 'next/link';

const TITLE = 'Documentos legais';
const DESCRIPTION =
  'Documentos que orientam a relação entre a Acqua, seus clientes, parceiros e visitantes.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/legal' },
  openGraph: {
    title: `${TITLE} | Seja Acqua`,
    description: DESCRIPTION,
    url: 'https://sejaacqua.com.br/legal',
    type: 'website',
  },
};

const docs = [
  {
    title: 'Termos de Uso',
    text: 'Condições de utilização da plataforma e dos canais digitais da Acqua.',
    href: '/termos-de-uso',
    icon: (
      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6M9 17h6" />
      </svg>
    ),
  },
  {
    title: 'Política de Privacidade',
    text: 'Informações sobre coleta, tratamento, armazenamento e proteção de dados pessoais.',
    href: '/politica-de-privacidade',
    icon: (
      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      </svg>
    ),
  },
  {
    title: 'Código de Ética e Conduta',
    text: 'Princípios que orientam a atuação da Acqua e o relacionamento com clientes, parceiros e colaboradores.',
    href: '/codigo-de-etica-e-conduta',
    icon: (
      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3 6 6 .9-4.5 4.3 1.1 6.3L12 16.8 6.4 19.5l1.1-6.3L3 8.9 9 8l3-6Z" />
      </svg>
    ),
  },
];

export default function LegalPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap reveal">
          <span className="eyebrow">Legal</span>
          <h1>Transparência faz parte da nossa forma de atuar.</h1>
          <p>
            Aqui você encontra os documentos que orientam a relação entre a Acqua, seus clientes,
            parceiros e visitantes.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="legal-docs">
            {docs.map((doc) => (
              <article className="ldoc reveal" key={doc.href}>
                {doc.icon}
                <h3>{doc.title}</h3>
                <p>{doc.text}</p>
                <Link className="btn btn-ghost" href={doc.href}>
                  Ler documento{' '}
                  <span className="arr" aria-hidden="true">
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
