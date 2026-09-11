import type { Metadata } from 'next';
import { Simulador } from '@/components/calculadora/Simulador';
import './calculadora.css';

const TITLE = 'Calculadora interativa';
const DESCRIPTION =
  'Compare o seu potencial com o CDI e a poupança. Comece a planejar suas conquistas.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/calculadora' },
  openGraph: {
    title: `${TITLE} | Seja Acqua`,
    description: DESCRIPTION,
    url: 'https://sejaacqua.com.br/calculadora',
    type: 'website',
  },
};

export default function CalculadoraPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="wrap reveal">
          <span className="eyebrow">Calculadora interativa</span>
          <h1>
            Quanto vale o seu <span className="sim-hl">sonho?</span>
          </h1>
          <p>
            Compare o seu potencial com o CDI e a poupança.{' '}
            <strong>Comece a planejar suas conquistas.</strong>
          </p>
        </div>
      </section>

      {/* SIMULADOR */}
      <section className="band">
        <div className="wrap">
          <div className="reveal">
            <Simulador />
          </div>

          <div className="sim-legal reveal">
            <h4>Informativo</h4>
            <p>
              Simulação para efeito de reflexão e não de comparação. Antes de qualquer tomada de
              decisão, procure um profissional certificado e observe seu perfil. *Todos os produtos
              utilizados nessa simulação estão com o prazo mínimo de 12 (doze) meses, com a
              apresentação dos cálculos antes das respectivas cobranças de impostos sob a
              remuneração obtida. Simulação projetada em remuneração de 1,35% a.m. (17,46% a.a.),
              considerando as últimas operações da Seja Acqua. O desempenho passado não é
              necessariamente um indicador de resultados futuros e nenhuma representação ou
              garantia, expressa ou implícita, é feita pela Seja Acqua em relação ao desempenho
              futuro. Rendimento médio anual da poupança em 6,17% a.a e CDI em 11,20% a.a. Esses
              índices sofrem variações constantes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
