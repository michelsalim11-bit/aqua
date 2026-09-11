'use client';

import { useState } from 'react';

import { isPhoneComplete, maskPhone } from '@/lib/phone';

export function ContatoForm() {
  const [note, setNote] = useState('');
  const [tel, setTel] = useState('');
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const nome = (form.elements.namedItem('nome') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const msg = (form.elements.namedItem('msg') as HTMLTextAreaElement).value.trim();

    if (!nome || !email || !msg) {
      setNote('Preencha nome, e-mail e mensagem.');
      return;
    }
    // Telefone é opcional aqui — só cobra se a pessoa começou a preencher.
    if (tel.trim() && !isPhoneComplete(tel)) {
      setNote('Informe um telefone completo, com DDD.');
      return;
    }

    setSending(true);
    setNote('Enviando...');

    try {
      const resp = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          email,
          telefone: tel.trim(),
          mensagem: msg,
          origem: 'Contato (site)',
        }),
      });

      if (!resp.ok) {
        const data = await resp.json().catch(() => ({}));
        setNote(data.error ?? 'Não foi possível enviar. Tente novamente.');
        setSending(false);
        return;
      }

      form.reset();
      setDone(true);
    } catch {
      setNote('Não foi possível enviar. Tente novamente.');
      setSending(false);
    }
  }

  if (done) {
    return (
      <div className="info-card" style={{ marginTop: '1.8rem' }}>
        <div className="blk">
          <h4>Mensagem enviada</h4>
          <p className="muted" style={{ marginTop: '0.4rem' }}>
            Recebemos seu contato e retornaremos o mais breve possível. Obrigado!
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="form" id="contato-form" style={{ marginTop: '1.8rem' }} onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="nome">Nome completo</label>
        <input type="text" id="nome" name="nome" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="tel">Telefone</label>
        <input
          type="tel"
          id="tel"
          name="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="(00) 00000-0000"
          value={tel}
          onChange={(e) => setTel(maskPhone(e.target.value))}
        />
      </div>
      <div className="field">
        <label htmlFor="msg">Mensagem</label>
        <textarea id="msg" name="msg" required />
      </div>
      <p className="form-note" id="form-note" role="status" aria-live="polite">
        {note}
      </p>
      <div>
        <button type="submit" className="btn btn-primary" disabled={sending}>
          {sending ? 'Enviando...' : 'Enviar mensagem'}{' '}
          <span className="arr" aria-hidden="true">
            →
          </span>
        </button>
      </div>
    </form>
  );
}
