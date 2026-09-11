'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock } from 'lucide-react';
import { FloatingField } from '@/components/auth/FloatingField';

export function LoginForm() {
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      window.alert('Protótipo de layout — pronto para integrar no fluxo real de autenticação.');
    }, 500);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <FloatingField
        id="email"
        label="E-mail"
        type="email"
        autoComplete="email"
        required
        icon={<Mail className="h-[17px] w-[17px]" />}
      />
      <FloatingField
        id="senha"
        label="Senha"
        autoComplete="current-password"
        required
        isPassword
        icon={<Lock className="h-[17px] w-[17px]" />}
      />

      <div className="mt-4 text-right">
        <Link href="#" className="text-[13px] font-medium text-acqua-blue/55 hover:text-acqua-blue">
          Esqueceu sua senha?
        </Link>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-9 w-full rounded-2xl bg-acqua-blue py-4 text-[15px] font-semibold text-acqua-cream shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#244373] disabled:translate-y-0 disabled:opacity-50"
      >
        {sending ? 'Entrando...' : 'Entrar'}
      </button>

      <p className="mt-6 text-center text-sm text-acqua-blue/55">
        Ainda não tem conta?{' '}
        <Link href="/criar-conta" className="font-semibold text-acqua-blue">
          Criar cadastro
        </Link>
      </p>

      <p className="mx-auto mt-8 max-w-[420px] text-center text-[11.5px] leading-relaxed text-acqua-blue/40">
        Dados coletados e tratados em cumprimento aos requisitos legais para proteção, incluindo a
        LGPD — Lei 13.709/18.
      </p>
    </form>
  );
}
