'use client';

import Link from 'next/link';
import { useState } from 'react';

type NavLink = { href: string; label: string };

export function MobileMenu({ links, loginHref }: { links: NavLink[]; loginHref: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="menu-btn"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="menu-icon" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>
      <nav className={`mobile-panel${open ? ' open' : ''}`} aria-label="Principal" aria-hidden={!open}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            {link.label}
          </Link>
        ))}
        <a href={loginHref} tabIndex={open ? 0 : -1}>
          Login
        </a>
      </nav>
    </>
  );
}
