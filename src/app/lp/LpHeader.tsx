'use client';

import { useEffect, useState } from 'react';
import { AcquaLogo } from './AcquaLogo';

const NAV = [
  { href: '#oportunidades', label: 'Oportunidades' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#como-funciona', label: 'Como funciona' },
];

export function LpHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--bg)_85%,transparent)] backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between md:h-20">
        <a href="#top" aria-label="Seja Acqua — início" className="text-[var(--green)]">
          <AcquaLogo className="h-7 w-auto md:h-8" />
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#cadastro"
          className="rounded-full bg-[var(--green)] px-5 py-2.5 text-sm font-bold text-[var(--green-ink)] shadow-[0_8px_24px_var(--green-glow)] transition-transform duration-300 ease-[var(--ease-out-quart)] hover:-translate-y-0.5"
        >
          Quero participar
        </a>
      </div>
    </header>
  );
}
