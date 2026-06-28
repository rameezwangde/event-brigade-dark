import React from 'react';
import { motion } from 'framer-motion';
import { brandCollage } from '../data.js';

export default function BrandHeritage() {
  return (
    <section className="relative overflow-hidden bg-obsidian pb-2 pt-8 md:pb-4 md:pt-12" aria-labelledby="brand-heritage-title">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(212,175,55,0.14),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-8 md:px-12 lg:px-16">
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
                } ${index === 2 ? 'md:row-span-2' : ''}`}
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

          <div className="relative flex flex-col items-center justify-center px-6 py-12 text-center sm:px-8 md:absolute md:inset-x-0 md:bottom-16 md:top-0 md:px-24 md:py-0 md:pt-12">
            <div className="absolute inset-x-3 top-1/2 h-[88%] -translate-y-1/2 rounded-[2rem] bg-obsidian/58 blur-2xl md:inset-x-20 md:h-[70%]" />
            <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.26em] text-champagne drop-shadow-[0_2px_14px_rgba(0,0,0,1)] sm:text-sm md:mt-4 md:text-lg md:tracking-[0.34em]">TO YOUR RESCUE</p>
            <h2 id="brand-heritage-title" className="relative z-10 mt-3 max-w-4xl font-serif text-3xl leading-[1.12] text-ivory drop-shadow-[0_4px_24px_rgba(0,0,0,1)] sm:text-4xl md:mt-4 md:text-6xl md:leading-[1.06]">
              We master the complexity,<br />You experience the luxury.
            </h2>
            <p className="relative z-10 mt-5 max-w-4xl text-sm leading-7 text-smoke drop-shadow-[0_2px_14px_rgba(0,0,0,1)] md:mt-6 md:text-base md:leading-8 text-center">
              Luxury lies in the details, and that's where we excel. Every exceptional event is built on thousands of moving parts working together seamlessly. At Event Brigade, we bring together creativity, precision, and expertise to deliver unforgettable experiences that feel effortless. From intimate celebrations to large-scale productions, we handle every complexity with creative vision, meticulous planning, and flawless execution. Behind the scenes, our team works tirelessly to manage every detail, anticipate every challenge, and ensure everything comes together perfectly. While you enjoy the spotlight and create lasting memories, we're always ready, always reliable, and always to your rescue.
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
