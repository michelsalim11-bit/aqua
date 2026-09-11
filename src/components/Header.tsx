import Image from 'next/image';
import Link from 'next/link';
import { MobileMenu } from '@/components/MobileMenu';

const APP_LOGIN = 'https://app.sejaacqua.com.br/sign-in';

const navLinks = [
  { href: '/#quem', label: 'Quem é a Acqua' },
  { href: '/#mvv', label: 'Missão e valores' },
  { href: '/#mercado', label: 'O mercado' },
  { href: '/#produto', label: 'Produto' },
  { href: '/calculadora', label: 'Calculadora' },
];

export function Header() {
  return (
    <header id="hdr" className="site-header">
      <div className="wrap nav">
        <Link href="/" className="brand" aria-label="Seja Acqua, página inicial">
          <Image src="/logo-green.svg" alt="Seja Acqua" width={71} height={30} priority />
        </Link>

        <nav className="nav-links" aria-label="Principal">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="enter" href={APP_LOGIN}>
            Login
          </a>
          <Link className="btn btn-primary" href="/#cadastro">
            Faça seu cadastro
          </Link>
          <MobileMenu links={navLinks} loginHref={APP_LOGIN} />
        </div>
      </div>
    </header>
  );
}
