'use client';

import { useState } from 'react';
import Image from 'next/image';

const TABS = [
  {
    key: 'futuro',
    label: 'Futuro',
    image: '/landing/goal-futuro.jpg',
    alt: 'Família caminhando de mãos dadas em um campo aberto',
    title: 'Minha Casa',
    value: 'R$ 45.000',
  },
  {
    key: 'projetos',
    label: 'Projetos',
    image: '/landing/goal-projetos.jpg',
    alt: 'Casal recém-casado segurando um buquê de flores',
    title: 'Grande Dia',
    value: 'R$ 28.000',
  },
  {
    key: 'experiencias',
    label: 'Experiências',
    image: '/landing/goal-experiencias.jpg',
    alt: 'Kombi amarela em uma estrada entre formações rochosas',
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
