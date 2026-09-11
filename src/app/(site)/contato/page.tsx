import type { Metadata } from 'next';
import { ContatoForm } from '@/components/ContatoForm';

const TITLE = 'Contato';
const DESCRIPTION =
  'Fale com a Acqua. Nossa equipe está pronta para ajudar você a conhecer a plataforma e esclarecer dúvidas.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/contato' },
  openGraph: {
    title: `${TITLE} | Seja Acqua`,
    description: DESCRIPTION,
    url: 'https://sejaacqua.com.br/contato',
    type: 'website',
  },
};

export default function ContatoPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap reveal">
          <span className="eyebrow">Contato</span>
          <h1>Vamos conversar.</h1>
          <p>
            Se você deseja saber mais sobre a Acqua, conhecer a plataforma ou esclarecer dúvidas,
            nossa equipe está pronta para ajudar.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap contact-grid">
          <div className="reveal">
            <h2 className="lead-h" style={{ fontSize: 'var(--step-2)' }}>
              Envie uma mensagem
            </h2>
            <p className="muted" style={{ marginTop: '0.6rem' }}>
              Retornaremos o mais breve possível.
            </p>
            <ContatoForm />
          </div>
          <aside className="info-card reveal">
            <div className="blk">
              <h4>E-mail</h4>
              <a href="mailto:contato@sejaacqua.com.br">contato@sejaacqua.com.br</a>
            </div>
            <div className="blk">
              <h4>Atendimento</h4>
              <p className="muted">
                Segunda a sexta-feira
                <br />
                09h às 18h
              </p>
            </div>
            <div className="blk">
              <h4>Privacidade</h4>
              <a href="mailto:dpo@sejaacqua.com.br">dpo@sejaacqua.com.br</a>
              <p className="muted" style={{ marginTop: '0.4rem', fontSize: '0.88rem' }}>
                Canal dedicado para assuntos relacionados à proteção de dados e privacidade.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
