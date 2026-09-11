'use client';

import { useEffect, useState } from 'react';

const APP_SIGNUP = 'https://app.sejaacqua.com.br/sign-up';

const TERMS = [6, 8, 12, 18, 24];
const EU_M = 0.0135; // 1,35% a.m.
const CDI_A = 0.112; // 11,20% a.a.
const POUP_A = 0.0617; // 6,17% a.a.
const MIN_BAR = 26;

const AMOUNT_MIN = 1000;
const AMOUNT_MAX = 100000;

const brl = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
const num = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function Simulador() {
  const [amount, setAmount] = useState(20000);
  const [termIdx, setTermIdx] = useState(2);
  const [revealed, setRevealed] = useState(false);
  // valor do input de texto enquanto o usuário edita (null = exibe formatado)
  const [editing, setEditing] = useState<string | null>(null);
  const [maxBar, setMaxBar] = useState(260);

  useEffect(() => {
    const onResize = () => setMaxBar(window.innerWidth < 480 ? 200 : 260);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const months = TERMS[termIdx];
  const eu = amount * Math.pow(1 + EU_M, months);
  const cdi = amount * Math.pow(1 + CDI_A, months / 12);
  const poup = amount * Math.pow(1 + POUP_A, months / 12);

  const gainEu = eu - amount;
  const barH = (gain: number) => Math.max(MIN_BAR, (gain / gainEu) * maxBar);
  const euBarH = revealed ? maxBar : Math.round(maxBar * 0.43);

  const pct = ((eu - amount) / amount) * 100;
  const amountPos = ((amount - AMOUNT_MIN) / (AMOUNT_MAX - AMOUNT_MIN)) * 100;
  const termPos = (termIdx / (TERMS.length - 1)) * 100;

  return (
    <>
      <div className={`sim-card${revealed ? '' : ' masked'}`}>
        <div className="sim-controls">
          <div className="sim-field">
            <div className="sim-field-top">
              <span className="sim-field-label">Valor</span>
              <input
                className="sim-amount"
                inputMode="numeric"
                aria-label="Valor"
                value={editing ?? `R$ ${num.format(amount)}`}
                onFocus={(e) => {
                  setEditing(String(amount / 1000));
                  const el = e.target;
                  requestAnimationFrame(() => el.select());
                }}
                onChange={(e) => {
                  let digits = e.target.value.replace(/\D/g, '').slice(0, 3);
                  let n = parseInt(digits || '0', 10);
                  if (n > 100) {
                    n = 100;
                    digits = '100';
                  }
                  setEditing(digits);
                  setAmount(Math.min(AMOUNT_MAX, Math.max(AMOUNT_MIN, n * 1000)));
                }}
                onBlur={(e) => {
                  const n = Math.min(
                    100,
                    Math.max(1, parseInt(e.target.value.replace(/\D/g, '') || '20', 10)),
                  );
                  setAmount(n * 1000);
                  setEditing(null);
                }}
              />
            </div>
            <input
              type="range"
              className="sim-range"
              min={AMOUNT_MIN}
              max={AMOUNT_MAX}
              step={1000}
              value={amount}
              aria-label="Ajustar valor"
              style={{ '--p': `${amountPos.toFixed(1)}%` } as React.CSSProperties}
              onChange={(e) => {
                setAmount(parseInt(e.target.value, 10));
                setEditing(null);
              }}
            />
            <div className="sim-ticks">
              <span>R$ 1.000</span>
              <span>R$ 100.000</span>
            </div>
          </div>

          <div className="sim-field">
            <div className="sim-field-top">
              <span className="sim-field-label">Prazo</span>
              <span className="sim-field-val">{months} meses</span>
            </div>
            <input
              type="range"
              className="sim-range"
              min={0}
              max={TERMS.length - 1}
              step={1}
              value={termIdx}
              aria-label="Prazo em meses"
              style={{ '--p': `${termPos.toFixed(1)}%` } as React.CSSProperties}
              onChange={(e) => setTermIdx(parseInt(e.target.value, 10))}
            />
            <div className="sim-ticks">
              {TERMS.map((t, i) => (
                <button
                  key={t}
                  type="button"
                  className={i === termIdx ? 'active' : undefined}
                  onClick={() => setTermIdx(i)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="sim-chart">
          <div className="sim-bars">
            <div className="sim-bar-col">
              <div className="sim-bar-top">
                <span className="sim-bar-val sim-eu-val">{brl.format(eu)}</span>
                <span className="sim-badge sim-eu-badge">
                  +{pct.toFixed(2).replace('.', ',')}%
                </span>
              </div>
              <a
                className="sim-bar eu"
                href={APP_SIGNUP}
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: euBarH }}
                tabIndex={revealed ? 0 : -1}
                aria-hidden={!revealed}
              >
                <span className="sim-mask-q" aria-hidden="true">
                  ?
                </span>
              </a>
              <div className="sim-bar-name eu-name">
                <span className="n">Eu</span>
                <span className="r sim-eu-rate">17,46% a.a.</span>
              </div>
            </div>

            <div className="sim-bar-col">
              <div className="sim-bar-top">
                <span className="sim-bar-val cdi-val">{brl.format(cdi)}</span>
              </div>
              <div className="sim-bar cdi" style={{ height: barH(cdi - amount) }} />
              <div className="sim-bar-name">
                <span className="n cdi-n">CDI</span>
                <span className="r">11,20% a.a.</span>
              </div>
            </div>

            <div className="sim-bar-col">
              <div className="sim-bar-top">
                <span className="sim-bar-val poup-val">{brl.format(poup)}</span>
              </div>
              <div className="sim-bar poup" style={{ height: barH(poup - amount) }} />
              <div className="sim-bar-name">
                <span className="n poup-n">Poupança</span>
                <span className="r">6,17% a.a.</span>
              </div>
            </div>
          </div>

          <div className="sim-highlight">
            <b>+{brl.format(eu - cdi)}</b> a mais que o CDI no período
          </div>
        </div>
      </div>

      <div className="sim-cta-row">
        {revealed ? (
          <>
            <a className="btn btn-primary" href={APP_SIGNUP} target="_blank" rel="noopener noreferrer">
              Prosseguir{' '}
              <span className="arr" aria-hidden="true">
                →
              </span>
            </a>
            <span className="sim-cta-note">Grátis · Sem taxas · Cadastro em 2 minutos</span>
            <button type="button" className="sim-reset" onClick={() => setRevealed(false)}>
              ↺ Ocultar e recomeçar
            </button>
          </>
        ) : (
          <button type="button" className="btn btn-primary" onClick={() => setRevealed(true)}>
            Próximos passos{' '}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        )}
      </div>
    </>
  );
}
