'use client';

import { useState } from 'react';

import { isPhoneComplete, maskPhone } from '@/lib/phone';

const INPUT_CLASSES =
  'w-full rounded-xl border border-[var(--line)] bg-[color-mix(in_oklab,var(--bg)_60%,transparent)] px-4 py-3.5 text-[15px] text-[var(--fg)] placeholder:text-[var(--faint)] outline-none transition-colors duration-200 focus:border-[var(--green)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--green)_25%,transparent)]';

const AMOUNTS = ['Até R$ 5.000', 'R$ 5.000 a R$ 20.000', 'R$ 20.000 a R$ 50.000', 'Acima de R$ 50.000'];

type Status = 'idle' | 'loading' | 'success' | 'error';

/**
 * Form da LP. O export estático original não enviava para lugar nenhum;
 * agora envia para /api/contato (planilha de leads, interim pré-HubSpot).
 */
export function LpForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [phone, setPhone] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg('');
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const amount = String(data.get('amount') || '');

    if (!name || !email || !phone.trim()) {
      setStatus('error');
      setErrorMsg('Preencha nome, e-mail e telefone.');
      return;
    }
    if (!isPhoneComplete(phone)) {
      setStatus('error');
      setErrorMsg('Informe um telefone completo, com DDD.');
      return;
    }

    setStatus('loading');
    try {
      const resp = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: name,
          email,
          telefone: phone.trim(),
          // `mensagem` alimenta a coluna da planilha; `faixaAporte` vai para o
          // campo próprio do form no HubSpot.
          mensagem: amount ? `Faixa de aporte: ${amount}` : '',
          faixaAporte: amount,
          origem: 'LP',
        }),
      });
      if (!resp.ok) {
        const body = await resp.json().catch(() => ({}));
        setStatus('error');
        setErrorMsg(body.error ?? 'Não foi possível enviar. Tente novamente.');
        return;
      }
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('Não foi possível enviar. Tente novamente.');
    }
  }

  if (status === 'success') {
    return (
      <div
        className="flex min-h-[420px] flex-col items-center justify-center gap-4 rounded-2xl border border-[color-mix(in_oklab,var(--green)_30%,transparent)] bg-[var(--surface)] p-10 text-center"
        role="status"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--green)] text-[var(--green-ink)]">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-2xl font-extrabold">Recebemos o seu contato.</h3>
        <p className="max-w-xs text-[15px] leading-relaxed text-[var(--muted)]">
          Um especialista da Seja Acqua vai falar com você em breve. Enquanto isso, o movimento continua.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[var(--line)] bg-[color-mix(in_oklab,var(--surface)_90%,transparent)] p-6 backdrop-blur-sm md:p-8"
      noValidate
    >
      <h3 className="text-xl font-extrabold tracking-tight">Acesse as oportunidades</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">
        Preencha e fale com um especialista da Seja Acqua. Sem custo e sem compromisso.
      </p>
      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-[13px] font-semibold tracking-wide text-[var(--muted)]">
            Nome completo
          </label>
          <input id="name" name="name" type="text" autoComplete="name" placeholder="Seu nome" className={INPUT_CLASSES} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-[13px] font-semibold tracking-wide text-[var(--muted)]">
            E-mail
          </label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="voce@email.com" className={INPUT_CLASSES} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-[13px] font-semibold tracking-wide text-[var(--muted)]">
            Telefone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="(00) 00000-0000"
            value={phone}
            onChange={(e) => setPhone(maskPhone(e.target.value))}
            className={INPUT_CLASSES}
          />
        </div>
        <div>
          <label htmlFor="amount" className="mb-1.5 block text-[13px] font-semibold tracking-wide text-[var(--muted)]">
            Quanto pretende aportar?
          </label>
          <select
            id="amount"
            name="amount"
            defaultValue=""
            className={`${INPUT_CLASSES} appearance-none bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-11`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='%2374817b' stroke-width='2.5' stroke-linecap='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="" disabled>
              Selecione uma faixa
            </option>
            {AMOUNTS.map((a) => (
              <option key={a} value={a} className="bg-[var(--surface)]">
                {a}
              </option>
            ))}
          </select>
        </div>
      </div>
      {status === 'error' && <p className="mt-4 text-sm font-medium text-[oklch(0.7_0.17_25)]">{errorMsg}</p>}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-6 w-full rounded-xl bg-[var(--green)] py-4 text-[15px] font-extrabold text-[var(--green-ink)] shadow-[0_14px_34px_var(--green-glow)] transition-all duration-300 ease-[var(--ease-out-quart)] hover:-translate-y-0.5 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'loading' ? 'Enviando…' : 'Quero falar com um especialista'}
      </button>
      <p className="mt-4 text-center text-xs leading-relaxed text-[var(--faint)]">
        Ao continuar, você concorda em ser contatado pela Seja Acqua. Seus dados estão protegidos.
      </p>
    </form>
  );
}
