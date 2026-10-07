'use client';

import { useState } from 'react';
import Image from 'next/image';

const TABS = [
  {
    key: 'futuro',
    label: 'Futuro',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200',
    alt: 'Casa à beira de um lago ao entardecer',
    title: 'Minha Casa',
    value: 'R$ 45.000',
  },
  {
    key: 'projetos',
    label: 'Projetos',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200',
    alt: 'Celebração de um grande dia',
    title: 'Grande Dia',
    value: 'R$ 28.000',
  },
  {
    key: 'experiencias',
    label: 'Experiências',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200',
    alt: 'Paisagem de viagem ao pôr do sol',
    title: 'Próxima Viagem',
    value: 'R$ 15.000',
  },
];

export function GoalsTabs() {
  const [active, setActive] = useState(0);
  const current = TABS[active];

  return (
    <div className="rounded-[26px] bg-gradient-to-br from-white/50 to-white/10 p-[1px]">
      <div className="relative h-[420px] overflow-hidden rounded-[25px] md:h-[480px]">
        {TABS.map((tab, i) => (
          <Image
            key={tab.key}
            src={tab.image}
            alt={tab.alt}
            fill
            priority={i === 0}
            className="object-cover transition-opacity duration-500"
            style={{ opacity: i === active ? 1 : 0 }}
            sizes="(min-width: 768px) 1200px, 100vw"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-swiss-navy-deep/85 via-swiss-navy-deep/10 to-transparent" />

        {/* Card flutuante — glassmorphism */}
        <div className="absolute left-6 top-6 w-fit max-w-[240px] rounded-2xl border border-white/30 bg-white/20 p-5 text-white backdrop-blur-md md:left-8 md:top-8">
          <p className="font-body text-[11px] uppercase tracking-[0.12em] text-white/70">Objetivo</p>
          <p className="font-apoio mt-1 text-xl font-bold">{current.title}</p>
          <p className="font-display mt-2 text-2xl font-extrabold">{current.value}</p>
        </div>

        {/* Abas estilo Revolut */}
        <div className="absolute inset-x-6 bottom-6 flex flex-wrap gap-2 md:inset-x-8 md:bottom-8">
          {TABS.map((tab, i) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActive(i)}
              className={`font-body rounded-full px-5 py-2.5 text-[13px] font-semibold backdrop-blur-md transition-colors ${
                i === active ? 'bg-white text-black' : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
