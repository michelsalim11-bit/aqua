'use client';

import { useState } from 'react';
import Link from 'next/link';
import { isPhoneComplete, maskPhone } from '@/lib/phone';
import { ArrowRight } from 'lucide-react';

export function LeadForm() {
  const [note, setNote] = useState('');
  const [tel, setTel] = useState('');
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const nome = (form.elements.namedItem('nome') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();

    if (!nome || !email || !tel.trim()) {
      setNote('Preencha nome, e-mail e telefone.');
      return;
    }
    if (!isPhoneComplete(tel)) {
      setNote('Informe um telefone completo, com DDD.');
      return;
    }

    setSending(true);
    setNote('Enviando...');

    try {
      const resp = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, telefone: tel, origem: 'Interesse (landing)' }),
      });

      if (!resp.ok) {
        const data = await resp.json().catch(() => ({}));
        setNote(data.error ?? 'Não foi possível enviar. Tente novamente.');
        setSending(false);
        return;
      }

      form.reset();
      setTel('');
      setDone(true);
      setSending(false);
      setNote('Recebemos seu interesse! Em breve entraremos em contato.');
    } catch {
      setNote('Não foi possível enviar. Tente novamente.');
      setSending(false);
    }
  }

  const fieldClass =
    'font-body w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-white/50 focus:bg-white/[0.14]';
  const labelClass = 'font-body mb-1.5 block text-[12px] font-medium text-white/60';

  return (
    <form id="cadastro-form" onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div>
        <label htmlFor="l-nome" className={labelClass}>
          Nome
        </label>
        <input type="text" id="l-nome" name="nome" autoComplete="name" required className={fieldClass} />
      </div>
      <div>
        <label htmlFor="l-email" className={labelClass}>
          E-mail
        </label>
        <input type="email" id="l-email" name="email" autoComplete="email" required className={fieldClass} />
      </div>
      <div>
        <label htmlFor="l-tel" className={labelClass}>
          Telefone
        </label>
        <input
          type="tel"
          id="l-tel"
          name="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="(00) 00000-0000"
          value={tel}
          onChange={(e) => setTel(maskPhone(e.target.value))}
          required
          className={fieldClass}
        />
      </div>

      <p className="font-body min-h-[1.2em] text-[13px] text-white/70" role="status" aria-live="polite">
        {note}
      </p>

      <button
        type="submit"
        disabled={sending || done}
        className="font-body inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-swiss-navy transition-transform hover:scale-[1.02] disabled:opacity-70"
      >
        {done ? 'Interesse enviado' : sending ? 'Enviando...' : 'Tenho interesse'}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>

      <Link href="/criar-conta" className="font-body text-center text-[13px] text-white/55 underline-offset-4 hover:underline">
        Ou faça seu cadastro completo
      </Link>
    </form>
  );
}
