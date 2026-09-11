'use client';

import { useState } from 'react';

import Link from 'next/link';
import { isPhoneComplete, maskPhone } from '@/lib/phone';

const CADASTRO_HREF = '/criar-conta';

/**
 * Form "Tenho interesse" da home (v2): pedido de contato, não cadastro —
 * o cadastro completo fica em /criar-conta. Envia para /api/contato
 * (planilha de leads) até a integração com o HubSpot.
 */
export function CadastroForm() {
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
        body: JSON.stringify({ nome, email, telefone: tel, origem: 'Interesse (home)' }),
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

  return (
    <form className="cadastro-card form reveal" id="cadastro-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="c-nome">Nome</label>
        <input type="text" id="c-nome" name="nome" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="c-email">E-mail</label>
        <input type="email" id="c-email" name="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="c-tel">Telefone</label>
        <input
          type="tel"
          id="c-tel"
          name="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="(00) 00000-0000"
          value={tel}
          onChange={(e) => setTel(maskPhone(e.target.value))}
          required
        />
      </div>
      <p className="form-note" id="cad-note" role="status" aria-live="polite">
        {note}
      </p>
      <button type="submit" className="btn btn-primary" disabled={sending || done}>
        {done ? 'Interesse enviado' : sending ? 'Enviando...' : 'Tenho interesse'}{' '}
        <span className="arr" aria-hidden="true">
          →
        </span>
      </button>
      <Link className="cad-alt" href={CADASTRO_HREF}>
        Faça seu cadastro
      </Link>
    </form>
  );
}
