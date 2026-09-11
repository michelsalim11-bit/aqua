import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SiteEffects } from '@/components/SiteEffects';
import { MobileMenu } from '@/components/MobileMenu';
import { CadastroForm } from '@/components/home/CadastroForm';
import { Hero } from '@/components/home/Hero';
import './home-v2.css';

const LOGIN_HREF = '/login';
const CADASTRO_HREF = '/criar-conta';
const WHATSAPP = 'https://wa.me/5511991948472';

const NAV_LINKS = [
  { href: '#quem', label: 'Conheça a Seja Acqua' },
  { href: '#mvv', label: 'Missão e valores' },
  { href: '#mercado', label: 'O mercado' },
  { href: '#produto', label: 'Produto' },
  { href: '/calculadora', label: 'Calculadora' },
];

const TITLE = 'Seja Acqua · Acesso à economia real';
const DESCRIPTION =
  'Seja Acqua é uma plataforma de tecnologia que aproxima você de oportunidades ligadas ao mercado de crédito e recebíveis.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://sejaacqua.com.br/',
    type: 'website',
  },
};

function HomeHeader() {
  return (
    <header id="hdr" className="site-header">
      <div className="wrap nav">
        <Link href="/" className="brand" aria-label="Seja Acqua, página inicial">
          <Image src="/logo-green.svg" alt="Seja Acqua" width={71} height={30} priority />
        </Link>
        <nav className="nav-links" aria-label="Principal">
          {NAV_LINKS.map((link) =>
            link.href.startsWith('#') ? (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <div className="nav-actions">
          <Link className="enter" href={LOGIN_HREF}>
            Login
          </Link>
          <Link className="btn btn-primary" href={CADASTRO_HREF}>
            Faça seu cadastro
          </Link>
          <MobileMenu links={NAV_LINKS} loginHref={LOGIN_HREF} />
        </div>
      </div>
    </header>
  );
}

function HomeFooter() {
  return (
    <footer id="contato-foot" className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/" aria-label="Seja Acqua">
              <Image src="/logo-green.svg" alt="Seja Acqua" width={76} height={32} />
            </Link>
            <p>
              Mais acesso. Mais possibilidades. Uma plataforma de tecnologia conectada à economia
              real.
            </p>
            <div className="socials" aria-label="Redes sociais">
              <a
                href="https://www.instagram.com/sejaacqua/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9V9Z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4>Institucional</h4>
            <ul>
              <li>
                <a href="#quem">Conheça a Seja Acqua</a>
              </li>
              <li>
                <a href="#mvv">Missão, visão e valores</a>
              </li>
              <li>
                <a href="#mercado">O mercado</a>
              </li>
              <li>
                <a href="#produto">Produto</a>
              </li>
              <li>
                <Link href="/calculadora">Calculadora</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contato</h4>
            <ul>
              <li>
                <a href="#cadastro">Tenho interesse</a>
              </li>
              <li>
                <a href="mailto:contato@sejaacqua.com.br">contato@sejaacqua.com.br</a>
              </li>
              <li>Segunda a sexta, das 9h às 18h</li>
              <li>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
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
        </div>
        <div className="legal">
          <div className="docs">
            <Link href="/termos-de-uso">Termos de Uso</Link>
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>
            <Link href="/codigo-de-etica-e-conduta">Código de Ética e Conduta</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="home-v2">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-acqua-blue focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-acqua-cream"
      >
        Ir para o conteúdo
      </a>
      <HomeHeader />

      <main id="top">
        {/* ===================== HERO ===================== */}
        <Hero whatsapp={WHATSAPP} />

        {/* ===================== 1 · QUEM É A ACQUA ===================== */}
        <section className="feature feature--rev" id="quem">
          <div className="feature__media reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/v2/biz-sobre.jpg" alt="Mulher sorrindo enquanto acessa a plataforma pelo tablet" loading="lazy" />
          </div>
          <div className="feature__body reveal">
            <span className="trilha-tag">
              <span className="n">1</span>
              <span className="lbl">Conheça a Seja Acqua</span>
            </span>
            <h2 className="lead-h">
              Seja Acqua é uma plataforma de tecnologia <span className="hl">conectada à economia real.</span>
            </h2>
            <p className="lead-sub">
              Um ambiente criado para aproximar pessoas de oportunidades, organizar informações e
              facilitar cada etapa da jornada.
            </p>
            <div className="prose" style={{ marginTop: '1.4rem' }}>
              <p>
                Seja Acqua nasceu para tornar mais simples o acesso a mercados que, por muito tempo,
                ficaram distantes da maioria das pessoas.
              </p>
              <p>
                Reunimos tecnologia, informação e acompanhamento humano em uma plataforma que
                apresenta oportunidades ligadas ao crédito e aos recebíveis.
              </p>
              <p>
                Você entende o que está sendo apresentado, conhece as condições e decide o que
                combina com o seu momento.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== 2 · MISSÃO, VISÃO E VALORES ===================== */}
        <section className="band" id="mvv">
          {/* alias para links legados /#principios do Header/Footer das páginas internas */}
          <span id="principios" aria-hidden="true" />
          <div className="wrap">
            <div className="section-head reveal">
              <h2 className="lead-h">Como a Seja Acqua pensa, trabalha e se relaciona.</h2>
            </div>
            <div className="mv-grid" style={{ marginBottom: 'clamp(1.8rem,4vw,3rem)' }}>
              <article className="mv reveal">
                <span className="eyebrow">Missão</span>
                <p>
                  Tornar o acesso a mercados ligados à economia real mais simples, próximo e
                  transparente.
                </p>
              </article>
              <article className="mv reveal d1">
                <span className="eyebrow">Visão</span>
                <p>
                  Ser referência nacional em tecnologia e acesso aos mercados de crédito e
                  recebíveis.
                </p>
              </article>
            </div>
            <div className="section-head reveal" style={{ marginBottom: 'clamp(1.4rem,3vw,2rem)' }}>
              <span className="eyebrow">Valores</span>
            </div>
            <div className="vgrid">
              <article className="pcard reveal">
                <div className="pcard__img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/v2/princ-acesso.jpg" alt="Pessoa consultando informações no celular" loading="lazy" />
                </div>
                <div className="pcard__body">
                  <h3>Informação</h3>
                  <p>Você conhece as condições antes de tomar qualquer decisão.</p>
                </div>
              </article>
              <article className="pcard reveal d1">
                <div className="pcard__img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/v2/princ-tecnologia.jpg" alt="Cliente usando a plataforma no computador e no celular" loading="lazy" />
                </div>
                <div className="pcard__body">
                  <h3>Tecnologia</h3>
                  <p>Usamos a tecnologia para organizar informações e tornar a experiência mais simples.</p>
                </div>
              </article>
              <article className="pcard reveal d2">
                <div className="pcard__img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/v2/princ-compreensao.jpg" alt="Cliente conversando com a equipe da Seja Acqua" loading="lazy" />
                </div>
                <div className="pcard__body">
                  <h3>Proximidade</h3>
                  <p>A jornada é digital, mas nossa equipe continua por perto sempre que você precisar.</p>
                </div>
              </article>
              <article className="pcard reveal">
                <div className="pcard__img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/v2/princ-responsabilidade.jpg" alt="Cliente tranquilo avaliando com calma" loading="lazy" />
                </div>
                <div className="pcard__body">
                  <h3>Responsabilidade</h3>
                  <p>
                    Cada possibilidade possui características e riscos próprios, que precisam ser
                    conhecidos e avaliados.
                  </p>
                </div>
              </article>
              <article className="pcard reveal d1">
                <div className="pcard__img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/v2/val-transparencia.jpg" alt="Ambiente claro e transparente" loading="lazy" />
                </div>
                <div className="pcard__body">
                  <h3>Transparência</h3>
                  <p>Condições, prazos e critérios são apresentados de forma clara durante toda a jornada.</p>
                </div>
              </article>
            </div>
            <div className="fechamento reveal">
              <p>
                Informação para entender. Tecnologia para facilitar.{' '}
                <span className="hl">Proximidade para acompanhar.</span>
              </p>
            </div>
          </div>
        </section>

        {/* ===================== 3 · O MERCADO ===================== */}
        <section className="feature" id="mercado">
          <div className="feature__media reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/v2/biz-mercado.jpg" alt="Pessoas trabalhando em um negócio da economia real" loading="lazy" />
          </div>
          <div className="feature__body reveal">
            <span className="trilha-tag">
              <span className="n">3</span>
              <span className="lbl">O mercado</span>
            </span>
            <h2 className="lead-h">A empresa vende hoje. O recurso pode chegar depois.</h2>
            <p className="lead-sub">
              Entre realizar uma venda e ter o valor disponível, existe um intervalo que faz parte
              da rotina de milhares de empresas.
            </p>
            <div className="prose" style={{ marginTop: '1.4rem' }}>
              <p>
                Todos os dias, empresas vendem produtos, prestam serviços e geram valores a receber.
                Muitas vezes, o pagamento dessas vendas chega somente depois de 30, 60 ou 90 dias.
              </p>
              <p>
                Nesse intervalo, a operação continua. Há fornecedores para pagar, estoques para
                repor, equipes trabalhando e novas decisões em andamento.
              </p>
              <p>
                A antecipação de recebíveis existe para reduzir essa distância. Quando uma operação
                atende aos critérios, parte do valor previsto para o futuro pode retornar antes à
                circulação e ajudar a empresa a manter seus planos em movimento.
              </p>
              <p>
                Esse mecanismo não está ligado apenas a empresas em dificuldade. Também pode ser
                utilizado para organizar prazos, preservar o fluxo da operação e aproveitar
                oportunidades no momento adequado.
              </p>
            </div>
          </div>
        </section>

        {/* Como esse mercado funciona */}
        <section className="band soft">
          <div className="wrap">
            <div className="section-head reveal">
              <h2 className="lead-h" style={{ fontSize: 'var(--step-2)' }}>
                Como esse mercado funciona.
              </h2>
            </div>
            <div className="mech">
              <article className="mech-step reveal">
                <span className="num">1</span>
                <h4>Venda</h4>
                <p>A empresa vende um produto ou presta um serviço.</p>
              </article>
              <article className="mech-step reveal d1">
                <span className="num">2</span>
                <h4>Recebimento futuro</h4>
                <p>O negócio já aconteceu, mas existe um prazo até que o valor fique disponível.</p>
              </article>
              <article className="mech-step reveal d2">
                <span className="num">3</span>
                <h4>Antecipação</h4>
                <p>Quando a operação atende aos critérios, o recebível pode ser antecipado.</p>
              </article>
              <article className="mech-step reveal d3">
                <span className="num">4</span>
                <h4>Circulação</h4>
                <p>O recurso retorna ao presente e pode ser utilizado na continuidade da operação.</p>
              </article>
            </div>
            <div className="fechamento reveal" style={{ maxWidth: 'none' }}>
              <p className="oneline">
                A empresa continua em movimento. <span className="hl">E a economia também.</span>
              </p>
            </div>
          </div>
        </section>

        {/* ===================== 4 · PRODUTO ===================== */}
        <section className="band" id="produto">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="trilha-tag">
                <span className="n">4</span>
                <span className="lbl">Produto</span>
              </span>
              <h2 className="lead-h">Conheça antes de decidir.</h2>
              <p>
                Na plataforma Seja Acqua, você encontra oportunidades ligadas a operações de crédito e
                recebíveis. Cada possibilidade é apresentada com informações sobre origem,
                condições, prazos, remuneração e riscos.
              </p>
            </div>
            <div className="icards">
              <article className="icard reveal">
                <span className="badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 3v5h5" />
                    <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                    <path d="M9 13h6M9 17h4" />
                  </svg>
                </span>
                <h3>Condições conhecidas</h3>
                <p>As principais características da oportunidade são apresentadas antes de qualquer decisão.</p>
              </article>
              <article className="icard reveal d1">
                <span className="badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <path d="M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </span>
                <h3>Remuneração</h3>
                <p>Você conhece a forma de remuneração e as condições previstas para cada possibilidade.</p>
              </article>
              <article className="icard reveal d2">
                <span className="badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>
                <h3>Prazo e carência</h3>
                <p>O prazo da operação e o período de carência, quando houver, ficam disponíveis para consulta.</p>
              </article>
              <article className="icard reveal">
                <span className="badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="5" width="16" height="16" rx="2" />
                    <path d="M4 9h16M9 3v4M15 3v4" />
                    <path d="M8 13h2M14 13h2M8 17h2" />
                  </svg>
                </span>
                <h3>Previsibilidade das condições</h3>
                <p>
                  Prazos, fluxos previstos e critérios são apresentados desde o início, sem
                  representar garantia de resultado.
                </p>
              </article>
              <article className="icard reveal d1">
                <span className="badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 8-6-16-3 8H2" />
                  </svg>
                </span>
                <h3>Acompanhamento</h3>
                <p>Depois de avançar, você acompanha as informações e as etapas da jornada pela plataforma.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Como a Seja Acqua participa */}
        <section className="feature feature--rev">
          <div className="feature__media reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/v2/produto-participa.jpg" alt="Pessoas consultando as oportunidades na plataforma pelo celular" loading="lazy" />
          </div>
          <div className="feature__body reveal">
            <span className="eyebrow">Como a Seja Acqua participa</span>
            <h2 className="lead-h">
              Você conhece primeiro. <span className="hl">Decide depois.</span>
            </h2>
            <div className="prose" style={{ marginTop: '1.4rem' }}>
              <p>Seja Acqua organiza as informações e apresenta as possibilidades disponíveis em um único ambiente.</p>
              <p>
                Você consulta as condições, entende como a operação funciona e avalia cada
                oportunidade com mais informação.
              </p>
              <p>Nossa equipe também permanece disponível para orientar e esclarecer dúvidas durante a jornada.</p>
            </div>
          </div>
        </section>

        {/* ===================== 5 · CADASTRE-SE ===================== */}
        <section className="band imgband final" id="cadastro">
          <div className="bg bg-video" aria-hidden="true">
            <video autoPlay muted loop playsInline>
              <source src="/videos/cta-tapestry.webm" type="video/webm" />
            </video>
            <div className="bg-video-tint" />
          </div>
          <div className="wrap">
            <h2 className="reveal">Conheça a plataforma.</h2>
            <p className="reveal">
              Deixe seus dados e nossa equipe entrará em contato para apresentar a plataforma, as
              oportunidades disponíveis e os próximos passos.
            </p>
            <CadastroForm />
          </div>
        </section>

        {/* ===================== FALE COM A GENTE ===================== */}
        <section className="band" id="contato">
          <div className="wrap" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <span className="eyebrow reveal" style={{ justifyContent: 'center' }}>
              Fale com a gente
            </span>
            <h2 className="lead-h reveal">Vamos conversar.</h2>
            <p
              className="reveal"
              style={{
                margin: '1.2rem auto 0',
                color: 'var(--ink-soft)',
                fontSize: 'var(--step-1)',
                maxWidth: '54ch',
              }}
            >
              Se você deseja saber mais sobre a Seja Acqua, conhecer a plataforma ou esclarecer dúvidas,
              nossa equipe está pronta para ajudar.
            </p>
            <div className="cta-row reveal" style={{ justifyContent: 'center', marginTop: '1.8rem' }}>
              <a
                className="btn btn-primary"
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale com a gente{' '}
                <span className="arr" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
            <p
              className="reveal"
              style={{ marginTop: '1.6rem', color: 'var(--ink-faint)', fontSize: 'var(--step--1)' }}
            >
              contato@sejaacqua.com.br · Segunda a sexta, das 9h às 18h
            </p>
          </div>
        </section>

        {/* ===================== DISCLAIMER ===================== */}
        <section className="band disclaimer" style={{ paddingBlock: 'clamp(2.5rem,5vw,3.5rem)' }}>
          <div className="wrap reveal">
            <span className="lbl">Disclaimer</span>
            <p>
              As informações apresentadas possuem caráter exclusivamente institucional e
              informativo e não constituem oferta, recomendação ou aconselhamento financeiro. As
              possibilidades eventualmente disponibilizadas pela Seja Acqua estão sujeitas a critérios,
              análise, disponibilidade, condições específicas e riscos. O cadastro ou o contato com
              a Seja Acqua não representa aprovação, contratação, garantia de acesso, remuneração ou
              resultado.
            </p>
          </div>
        </section>
      </main>

      <HomeFooter />
      <SiteEffects />
    </div>
  );
}
