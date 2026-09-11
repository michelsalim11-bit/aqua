import Image from 'next/image';
import Link from 'next/link';
import { MobileMenu } from '@/components/MobileMenu';

const LOGIN_HREF = '/login';
const CADASTRO_HREF = '/criar-conta';

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
          <Link className="enter" href={LOGIN_HREF}>
            Login
          </Link>
          <Link className="btn btn-primary" href={CADASTRO_HREF}>
            Faça seu cadastro
          </Link>
          <MobileMenu links={navLinks} loginHref={LOGIN_HREF} />
        </div>
      </div>
    </header>
  );
}
