import type { Metadata } from 'next';
import { ShieldCheck, Clock } from 'lucide-react';
import { AuthShell } from '@/components/auth/AuthShell';
import { SignupForm } from './SignupForm';

export const metadata: Metadata = {
  title: 'Criar conta',
  description: 'Abra sua conta Seja Acqua em menos de 2 minutos.',
  alternates: { canonical: '/criar-conta' },
};

export default function CriarContaPage() {
  return (
    <AuthShell
      heading={
        <>
          Sua conta <em className="not-italic text-acqua-cream">Seja Acqua</em> em menos de 2 minutos.
        </>
      }
      subheading="Abra sua conta e acesse as melhores oportunidades do mercado de crédito."
      trust={[
        {
          icon: <ShieldCheck className="h-[18px] w-[18px]" aria-hidden="true" />,
          title: 'Dados protegidos pela LGPD',
          desc: 'Lei 13.709/18',
        },
        {
          icon: <Clock className="h-[18px] w-[18px]" aria-hidden="true" />,
          title: 'Rápido de verdade',
          desc: 'Menos de 2 minutos',
        },
      ]}
      formTitle="Crie sua conta"
      formSubtitle="Preencha seus dados para começar a investir."
      backHref="/"
    >
      <SignupForm />
    </AuthShell>
  );
}
