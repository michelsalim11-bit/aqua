'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Comportamentos client-side compartilhados (iguais à referência):
 * - header ganha .scrolled após rolar
 * - elementos .reveal aparecem ao entrar na viewport
 */
export function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.getElementById('hdr');
    const onScroll = () => {
      if (header) header.classList.toggle('scrolled', window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    els.forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
