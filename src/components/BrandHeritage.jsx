import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { brandCollage } from '../data.js';
import eventBrigadeLogo from '../../eventbrigade.PNG';

export default function BrandHeritage() {
  return (
    <section className="relative overflow-hidden bg-obsidian pb-2 pt-8 md:pb-4 md:pt-12" aria-labelledby="brand-heritage-title">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(244,215,138,0.14),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-champagne/20 bg-charcoal shadow-soft"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid min-h-[500px] grid-cols-2 md:min-h-[540px] md:grid-cols-6">
            {brandCollage.map((item, index) => (
              <figure
                key={item.label}
                className={`group relative overflow-hidden ${
                  index === 0 || index === 5 ? 'md:col-span-2' : 'md:col-span-1'
                } ${index === 2 ? 'row-span-2' : ''}`}
              >
                <img
                  src={item.image}
                  alt={`${item.label} by Event Brigade`}
                  loading="lazy"
                  className="h-full min-h-[170px] w-full object-cover opacity-70 grayscale-[25%] transition duration-700 group-hover:scale-110 group-hover:opacity-95 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/25 to-transparent" />
              </figure>
            ))}
          </div>

          <div className="absolute inset-0 bg-obsidian/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/92 via-obsidian/72 to-obsidian/92" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/65 via-transparent to-obsidian/78" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

          <div className="absolute inset-x-0 bottom-12 top-0 flex flex-col items-center justify-center px-6 pt-10 text-center md:bottom-16 md:pt-12">
            <div className="absolute inset-x-4 top-1/2 h-[78%] -translate-y-1/2 rounded-[2rem] bg-obsidian/58 blur-2xl md:inset-x-20 md:h-[70%]" />
            <motion.div
              className="brand-logo-frame relative z-10 px-8 py-6"
              initial={{ opacity: 0, scale: 0.86 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15 }}
            >
              <img src={eventBrigadeLogo} alt="Event Brigade logo" className="h-full w-full object-contain" />
            </motion.div>

            <p className="relative z-10 mt-8 text-sm font-semibold uppercase tracking-[0.36em] text-champagne drop-shadow-[0_2px_14px_rgba(0,0,0,1)] md:text-base">Original Identity, Elevated</p>
            <h2 id="brand-heritage-title" className="relative z-10 mt-4 max-w-3xl font-serif text-4xl leading-[1.08] text-ivory drop-shadow-[0_4px_24px_rgba(0,0,0,1)] md:text-6xl md:leading-[1.06]">
              The Event Brigade signature, reimagined for modern luxury.
            </h2>
            <p className="relative z-10 mt-5 max-w-2xl text-sm leading-7 text-smoke drop-shadow-[0_2px_14px_rgba(0,0,0,1)] md:text-base">
              Inspired by the original collage masthead and shield logo, this premium brand moment preserves the rescue-first spirit while presenting it with cinematic depth.
            </p>
            <div className="relative z-10 mt-6 flex items-center gap-3 rounded-full border border-champagne/25 bg-obsidian/75 px-5 py-2 text-xs uppercase tracking-[0.24em] text-gold backdrop-blur">
              <ShieldCheck size={16} /> Since 1500+ successful projects
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
