'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

interface HeroProps {
  whatsapp: string;
}

export function Hero({ whatsapp }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-acqua-cream pb-20 pt-32 md:pb-28 md:pt-40">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#1b3a6b0d_1px,transparent_1px),linear-gradient(to_bottom,#1b3a6b0d_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_40%,transparent_100%)]"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 md:grid-cols-2 md:gap-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-acqua-blue/20 bg-white px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-acqua-blue">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Você pode mais
          </span>

          <h1 className="mt-5 max-w-lg font-heading text-4xl font-bold leading-[1.08] tracking-tight text-acqua-blue md:text-6xl md:leading-[1.05]">
            Economia real.
            <br />
            Oportunidades reais.
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-acqua-blue/70 md:text-lg">
            A Acqua é uma plataforma de tecnologia que aproxima você de oportunidades ligadas ao
            mercado de crédito e recebíveis. Aqui, você conhece as condições, entende como cada
            possibilidade funciona e encontra as informações necessárias para decidir o próximo
            passo.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#quem"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-acqua-blue px-7 py-3.5 text-sm font-semibold text-acqua-cream shadow-sm transition-colors hover:bg-[#244373]"
            >
              Entenda como a Acqua funciona
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-acqua-blue/25 px-7 py-3.5 text-sm font-semibold text-acqua-blue transition-colors hover:bg-acqua-blue/5"
            >
              Fale com a gente
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative rounded-[28px] border border-acqua-blue/10 bg-white p-3 shadow-[0_24px_60px_-20px_rgba(27,58,107,0.35)]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
              <Image
                src="/images/hero-banner.webp"
                alt="Pessoa utilizando o app da Seja Acqua pelo celular"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 480px"
                className="object-cover"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-acqua-blue/10 bg-white px-4 py-3 shadow-[0_16px_40px_-16px_rgba(27,58,107,0.3)] sm:-left-8"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-acqua-blue/10 text-acqua-blue">
              <TrendingUp className="h-4.5 w-4.5" aria-hidden="true" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-acqua-blue">Acesso simples</p>
              <p className="text-xs text-acqua-blue/60">à economia real</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
