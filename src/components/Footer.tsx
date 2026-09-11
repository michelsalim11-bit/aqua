import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer id="contato-foot" className="site-footer">
      <div className="wrap">
        <div className="foot-grid" style={{ gridTemplateColumns: '1.4fr repeat(2, 1fr)' }}>
          <div className="foot-brand">
            <Link href="/" aria-label="Seja Acqua">
              <Image src="/logo-green.svg" alt="Seja Acqua" width={76} height={32} />
            </Link>
            <p>
              Mais acesso. Mais possibilidades. Uma plataforma eletrônica conectada à economia
              real.
            </p>
            <div className="socials" aria-label="Redes sociais">
              <a href="https://www.instagram.com/sejaacqua/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4>Contato</h4>
            <ul>
              <li>
                <a href="mailto:contato@sejaacqua.com.br">contato@sejaacqua.com.br</a>
              </li>
              <li>Segunda a sexta, 09h às 18h</li>
              <li>
                <a href="https://wa.me/5511991948472" target="_blank" rel="noopener noreferrer">
                  Fale com a gente
                </a>
              </li>
            </ul>
            <h4 style={{ marginTop: '1.6rem' }}>Privacidade</h4>
            <ul>
              <li>
                <a href="mailto:dpo@sejaacqua.com.br">dpo@sejaacqua.com.br</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Institucional</h4>
            <ul>
              <li>
                <Link href="/sobre">Seja Acqua</Link>
              </li>
              <li>
                <Link href="/#mercado">O mercado</Link>
              </li>
              <li>
                <Link href="/#principios">Princípios</Link>
              </li>
              <li>
                <Link href="/calculadora">Calculadora</Link>
              </li>
              <li>
                <Link href="/legal">Documentos legais</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="legal">
          <div className="docs">
            <Link href="/termos-de-uso">Termos de Uso</Link>
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>
            <Link href="/codigo-de-etica-e-conduta">Código de Ética e Conduta</Link>
          </div>
          <p style={{ marginTop: '1.4rem' }}>
            Seja Acqua é uma plataforma de tecnologia que conecta investidores a
            oportunidades ligadas à economia real. Este conteúdo possui caráter
            exclusivamente informativo e não constitui oferta, recomendação ou
            aconselhamento. Simulações e projeções, quando apresentadas, não
            representam garantia de remuneração futura. Toda operação envolve
            riscos e deve ser avaliada individualmente.
          </p>
          <div className="row" style={{ marginTop: '1.4rem' }}>
            <span>
              Seja Acqua · Não é uma instituição financeira e não realiza operações de crédito.
            </span>
            <span>© 2026 Seja Acqua</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
