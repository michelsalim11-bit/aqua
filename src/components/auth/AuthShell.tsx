'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';

interface TrustItem {
  icon: ReactNode;
  title: string;
  desc: string;
}

interface AuthShellProps {
  heading: ReactNode;
  subheading: string;
  trust: TrustItem[];
  formTitle: string;
  formSubtitle: string;
  backHref?: string;
  narrow?: boolean;
  children: ReactNode;
}

export function AuthShell({
  heading,
  subheading,
  trust,
  formTitle,
  formSubtitle,
  backHref,
  narrow,
  children,
}: AuthShellProps) {
  return (
    <div className="grid min-h-screen md:grid-cols-[minmax(360px,38%)_1fr]">
      <aside className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#12213f] via-acqua-blue to-[#0f1930] px-8 py-10 md:px-12 md:py-14">
        <div
          aria-hidden="true"
          className="absolute -left-24 -top-20 h-72 w-72 rounded-full bg-acqua-cream/15 blur-[90px]"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-acqua-cream/10 blur-[100px]"
        />

        <Link href="/" className="relative z-10 inline-block" aria-label="Seja Acqua, página inicial">
          <Image src="/logo-black.svg" alt="Seja Acqua" width={140} height={30} priority className="h-8 w-auto" />
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <h1 className="max-w-[13ch] font-heading text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-[2.75rem]">
            {heading}
          </h1>
          <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-white/70">{subheading}</p>
        </motion.div>

        <div className="relative z-10 flex flex-col gap-4 md:flex-row md:gap-6">
          {trust.map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-1 items-start gap-3">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-[11px] border border-acqua-cream/25 bg-acqua-cream/10 text-acqua-cream">
                {icon}
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs text-white/55">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      <main className={`flex flex-col overflow-y-auto bg-white px-6 py-11 md:px-[6vw] ${narrow ? 'justify-center' : ''}`}>
        <div className={`mx-auto w-full ${narrow ? 'max-w-[440px]' : 'max-w-[600px]'}`}>
          {backHref && (
            <Link
              href={backHref}
              className="mb-9 inline-flex items-center gap-2 text-sm font-medium text-acqua-blue/60 transition-colors hover:text-acqua-blue"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Voltar
            </Link>
          )}

          <div className="mb-8">
            <h2 className="font-heading text-[2.1rem] font-bold leading-none tracking-tight text-acqua-blue">
              {formTitle}
            </h2>
            <p className="mt-2.5 text-[14.5px] text-acqua-blue/55">{formSubtitle}</p>
          </div>

          {children}
        </div>
      </main>
    </div>
  );
}
