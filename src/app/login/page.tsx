import type { Metadata } from 'next';
import { ShieldCheck, Clock } from 'lucide-react';
import { AuthShell } from '@/components/auth/AuthShell';
import { LoginForm } from './LoginForm';

export const metadata: Metadata = {
  title: 'Entrar',
  description: 'Acesse sua conta Seja Acqua.',
  alternates: { canonical: '/login' },
};

export default function LoginPage() {
  return (
    <AuthShell
      heading={
        <>
          Bem-vindo <em className="not-italic text-acqua-cream">de volta</em>.
        </>
      }
      subheading="Acesse as melhores oportunidades do mercado de crédito."
      trust={[
        {
          icon: <ShieldCheck className="h-[18px] w-[18px]" aria-hidden="true" />,
          title: 'Dados protegidos pela LGPD',
          desc: 'Sua privacidade em primeiro lugar',
        },
        {
          icon: <Clock className="h-[18px] w-[18px]" aria-hidden="true" />,
          title: 'Acesso em segundos',
          desc: 'Continue de onde parou',
        },
      ]}
      formTitle="Acesse sua conta"
      formSubtitle="Entre com seu e-mail e senha para continuar."
      narrow
    >
      <LoginForm />
    </AuthShell>
  );
}
