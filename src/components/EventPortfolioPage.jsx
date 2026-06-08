import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Grid2X2, Maximize2, Sparkles, X } from 'lucide-react';
import Reveal from './Reveal.jsx';

const portfolioLinks = [
  { label: 'Weddings', href: '/wedding-portfolio' },
  { label: 'Corporate', href: '/corporate-portfolio' },
  { label: 'Social Events', href: '/social-events-portfolio' }
];

export default function EventPortfolioPage({ eyebrow, title, intro, pages, activeHref }) {
  const heroImage = pages[0]?.full;
  const [preview, setPreview] = useState(null);

  return (
    <section id="portfolio" className="relative min-h-screen overflow-hidden bg-obsidian pb-20 pt-32 md:pt-36">
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_50%_0%,rgba(244,215,138,0.18),transparent_62%)]" />
      <div className="particles opacity-20" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <a href="/#portfolio" className="btn-secondary w-fit">
            <ArrowLeft size={18} /> Back To Site
          </a>
          <div className="flex flex-wrap gap-3">
            {portfolioLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                  activeHref === link.href
                    ? 'border-gold bg-gold text-obsidian shadow-glow'
                    : 'border-champagne/25 bg-obsidian/55 text-ivory/75 hover:border-gold hover:text-gold'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <Reveal className="relative overflow-hidden rounded-[2rem] border border-champagne/20 bg-[linear-gradient(145deg,rgba(248,241,223,0.075),rgba(248,241,223,0.025))] shadow-soft">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[420px] p-7 md:p-10">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="relative z-10 max-w-2xl">
                <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl border border-gold/35 bg-obsidian/70 text-gold shadow-glow">
                  <Sparkles size={26} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">{eyebrow}</p>
                <h1 className="mt-5 font-serif text-5xl leading-[0.95] text-ivory md:text-7xl">{title}</h1>
                <p className="mt-6 text-base leading-8 text-smoke md:text-lg">{intro}</p>
                <div className="mt-9 flex flex-wrap gap-4">
              <a href="#portfolio-pages" className="btn-primary">
                View Pages <ArrowRight size={18} />
              </a>
                  <div className="inline-flex items-center gap-3 rounded-full border border-champagne/25 bg-obsidian/60 px-5 py-3 text-sm font-semibold text-ivory/80">
                    <Grid2X2 size={18} className="text-gold" /> {pages.length} pages
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden bg-obsidian/45 p-5 md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,215,138,0.14),transparent_58%)]" />
              <div className="relative h-full rounded-[1.5rem] border border-champagne/20 bg-ivory p-2 shadow-glow">
                <img
                  src={heroImage}
                  alt={`${title} cover page`}
                  className="h-full min-h-[340px] w-full rounded-[1rem] object-contain"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <div id="portfolio-pages" className="mt-16">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">Gallery</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-ivory md:text-5xl">Browse the complete portfolio.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-smoke">
              Select any visual to view it larger without leaving the site experience.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page, index) => (
            <Reveal
              key={page.full}
              delay={(index % 3) * 0.04}
              className={`group ${index === 0 ? 'sm:col-span-2' : ''}`}
            >
              <button
                type="button"
                onClick={() => setPreview({ image: page.full, index })}
                className="relative block w-full overflow-hidden rounded-[1.5rem] border border-champagne/18 bg-[linear-gradient(145deg,rgba(248,241,223,0.08),rgba(248,241,223,0.02))] p-2 text-left shadow-soft transition duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-glow"
                aria-label={`Open ${title} portfolio visual ${index + 1}`}
              >
                <div className="relative aspect-[1500/844] overflow-hidden rounded-[1rem] bg-ivory">
                  <img
                    src={page.thumb}
                    alt={`${title} portfolio visual ${index + 1}`}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                    width="640"
                    height="360"
                    className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/72 via-transparent to-transparent opacity-70 transition group-hover:opacity-45" />
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-champagne/25 bg-obsidian/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ivory/82 backdrop-blur">
                    Event Brigade
                  </span>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/45 bg-obsidian/70 text-gold backdrop-blur">
                    <Maximize2 size={17} />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-center bg-obsidian/92 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
          >
            <motion.div
              className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[1.5rem] border border-champagne/25 bg-ivory p-2 shadow-glow"
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 18 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="max-h-[88vh] overflow-auto rounded-[1rem]">
                <img
                  src={preview.image}
                  alt={`${title} portfolio visual ${preview.index + 1}`}
                  decoding="async"
                  className="w-full"
                />
              </div>
              <button
                type="button"
                onClick={() => setPreview(null)}
                className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-obsidian/75 text-gold backdrop-blur transition hover:bg-gold hover:text-obsidian"
                aria-label="Close portfolio preview"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
