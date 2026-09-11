import { type ReactNode } from 'react';
import { BlurOrb } from './BlurOrb';
import { Container } from './Container';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  titleId?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  align = 'left',
  titleId = 'page-title',
}: PageHeroProps) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : '';

  return (
    <section className="relative isolate overflow-hidden border-b border-acqua-blue/10" aria-labelledby={titleId}>
      <BlurOrb className="-left-32 top-0 h-72 w-72 sm:h-80 sm:w-80" />
      <BlurOrb className="right-0 top-20 h-72 w-72 sm:h-80 sm:w-80" color="green-soft" />

      <Container className={`relative flex flex-col gap-5 pb-16 pt-20 md:gap-6 md:pb-28 md:pt-32 ${alignClass}`.trim()}>
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-acqua-blue/25 bg-acqua-blue/[0.08] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-acqua-blue sm:text-xs">
          {eyebrow}
        </span>
        <h1
          id={titleId}
          className="max-w-3xl text-balance text-[2rem] font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
        >
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-acqua-blue/70 sm:text-lg">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
