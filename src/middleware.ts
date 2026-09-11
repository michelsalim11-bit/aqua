import { NextResponse, type NextRequest } from 'next/server';

/**
 * Roteamento por host:
 * - lp.sejaacqua.com.br  → serve a rota /lp (layout próprio, sem
 *   header/footer do site e com tema escopado em .lp-root).
 * - sejaacqua.com.br     → a LP não existe (some do site).
 */
const LP_HOST = 'lp.sejaacqua.com.br';

export function middleware(req: NextRequest) {
  const host = (req.headers.get('host') ?? '').toLowerCase();
  const { pathname } = req.nextUrl;

  if (host === LP_HOST) {
    // raiz do subdomínio → a LP; assets (/_next/...) seguem normais
    if (pathname === '/' || pathname === '') {
      return NextResponse.rewrite(new URL('/lp', req.url));
    }
    return NextResponse.next();
  }

  // domínio principal: a LP não existe aqui → manda pra home (sem soft-404)
  if (pathname === '/lp' || pathname.startsWith('/lp/')) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  // roda em tudo, menos assets internos do Next e API
  matcher: ['/((?!_next/|api/).*)'],
};
