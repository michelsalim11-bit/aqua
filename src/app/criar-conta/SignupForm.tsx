'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Check, Mail, Phone } from 'lucide-react';
import { FloatingField } from '@/components/auth/FloatingField';
import { SectionLabel } from '@/components/auth/SectionLabel';
import { maskPhone, isPhoneComplete } from '@/lib/phone';
import { maskCPF, maskBirthdate } from '@/lib/masks';

const REQS: { key: 'len' | 'upper' | 'lower' | 'num' | 'sym'; label: string }[] = [
  { key: 'len', label: '8+ caracteres' },
  { key: 'upper', label: 'Maiúscula' },
  { key: 'lower', label: 'Minúscula' },
  { key: 'num', label: 'Número' },
  { key: 'sym', label: 'Símbolo' },
];

const STRENGTH_COLOR = ['bg-[#e2574c]', 'bg-[#d99a3d]', 'bg-[#3d6ea5]', 'bg-acqua-blue'];
const STRENGTH_TEXT = ['text-[#e2574c]', 'text-[#d99a3d]', 'text-[#3d6ea5]', 'text-acqua-blue'];
const STRENGTH_WORD = ['Fraca', 'Média', 'Boa', 'Forte'];

export function SignupForm() {
  const [tel, setTel] = useState('');
  const [nasc, setNasc] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [senha2, setSenha2] = useState('');
  const [agree, setAgree] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const checks = useMemo(
    () => ({
      len: senha.length >= 8,
      upper: /[A-Z]/.test(senha),
      lower: /[a-z]/.test(senha),
      num: /\d/.test(senha),
      sym: /[^A-Za-z0-9]/.test(senha),
    }),
    [senha],
  );
  const score = Object.values(checks).filter(Boolean).length;
  const level = senha.length === 0 ? -1 : Math.max(0, Math.min(3, score - 2));
  const match = senha2.length > 0 ? senha === senha2 : null;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const nome = (form.elements.namedItem('nome') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();

    if (!nome || !email || !isPhoneComplete(tel) || !cpf || !nasc) {
      setError('Preencha todos os campos antes de continuar.');
      return;
    }
    if (score < 5) {
      setError('Sua senha ainda não atende a todos os requisitos.');
      return;
    }
    if (senha !== senha2) {
      setError('As senhas não coincidem.');
      return;
    }

    setError('');
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      window.alert('Protótipo de layout — pronto para integrar no fluxo real de cadastro.');
    }, 500);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <SectionLabel>Seus dados</SectionLabel>

      <FloatingField id="nome" name="nome" label="Nome completo" autoComplete="name" required />
      <FloatingField
        id="tel"
        label="Telefone"
        type="tel"
        inputMode="numeric"
        autoComplete="tel"
        required
        icon={<Phone className="h-[17px] w-[17px]" />}
        value={tel}
        onChange={(e) => setTel(maskPhone(e.target.value))}
      />

      <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
        <FloatingField
          id="nasc"
          label="Data de nascimento"
          inputMode="numeric"
          autoComplete="bday"
          maxLength={10}
          required
          value={nasc}
          onChange={(e) => setNasc(maskBirthdate(e.target.value))}
        />
        <FloatingField
          id="cpf"
          label="CPF"
          inputMode="numeric"
          maxLength={14}
          required
          value={cpf}
          onChange={(e) => setCpf(maskCPF(e.target.value))}
        />
      </div>

      <FloatingField
        id="email"
        name="email"
        label="E-mail"
        type="email"
        autoComplete="email"
        required
        icon={<Mail className="h-[17px] w-[17px]" />}
      />

      <SectionLabel>Segurança</SectionLabel>

      <FloatingField
        id="senha"
        label="Senha"
        autoComplete="new-password"
        required
        isPassword
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <div className="mt-3.5 flex items-center gap-2.5">
        <div className="flex flex-1 gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors ${
                senha.length && i <= level ? STRENGTH_COLOR[level] : 'bg-acqua-blue/10'
              }`}
            />
          ))}
        </div>
        <span className={`min-w-[46px] text-right text-xs font-semibold ${senha.length ? STRENGTH_TEXT[level] : 'text-acqua-blue/40'}`}>
          {senha.length ? STRENGTH_WORD[level] : '—'}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {REQS.map(({ key, label }) => (
          <span
            key={key}
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11.5px] transition-colors ${
              checks[key]
                ? 'border-acqua-blue/40 bg-acqua-blue/[0.08] text-acqua-blue'
                : 'border-acqua-blue/15 text-acqua-blue/40'
            }`}
          >
            <Check className={`h-[11px] w-[11px] ${checks[key] ? 'opacity-100' : 'opacity-30'}`} />
            {label}
          </span>
        ))}
      </div>

      <FloatingField
        id="senha2"
        label="Confirme sua senha"
        autoComplete="new-password"
        required
        isPassword
        className="mt-8"
        value={senha2}
        onChange={(e) => setSenha2(e.target.value)}
      />
      {match !== null && (
        <p className={`mt-2.5 text-xs font-semibold ${match ? 'text-acqua-blue' : 'text-[#e2574c]'}`}>
          {match ? 'As senhas coincidem' : 'As senhas não coincidem'}
        </p>
      )}

      <label className="mt-8 flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="peer sr-only"
        />
        <span className="mt-0.5 flex h-[22px] w-[22px] flex-none items-center justify-center rounded-[7px] border-[1.5px] border-acqua-blue/25 transition-colors peer-checked:border-acqua-blue peer-checked:bg-acqua-blue">
          <Check className="h-[13px] w-[13px] text-acqua-cream opacity-0 transition-opacity peer-checked:opacity-100" />
        </span>
        <span className="text-[13.5px] leading-relaxed text-acqua-blue/70">
          Li e concordo com as <Link href="#" className="font-semibold text-acqua-blue">Condições</Link>, os{' '}
          <Link href="/termos-de-uso" className="font-semibold text-acqua-blue">Termos de uso</Link> e a{' '}
          <Link href="/politica-de-privacidade" className="font-semibold text-acqua-blue">Política de Privacidade</Link>.
        </span>
      </label>

      <p className="mb-6 mt-4 text-[11.5px] leading-relaxed text-acqua-blue/40">
        Dados coletados e tratados em cumprimento aos requisitos legais para proteção, incluindo a
        LGPD — Lei 13.709/18.
      </p>

      {error && <p className="mb-4 text-sm font-medium text-[#e2574c]">{error}</p>}

      <button
        type="submit"
        disabled={!agree || sending}
        className="w-full rounded-2xl bg-acqua-blue py-4 text-[15px] font-semibold text-acqua-cream shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#244373] disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {sending ? 'Enviando...' : 'Criar minha conta'}
      </button>

      <p className="mt-6 text-center text-sm text-acqua-blue/55">
        Já tem conta?{' '}
        <Link href="/login" className="font-semibold text-acqua-blue">
          Entrar
        </Link>
      </p>
    </form>
  );
}
