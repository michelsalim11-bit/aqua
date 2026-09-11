import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SiteEffects } from '@/components/SiteEffects';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-acqua-blue focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-acqua-cream"
      >
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">{children}</main>
      <Footer />
      <SiteEffects />
    </>
  );
}
