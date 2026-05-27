import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials } from '../data.js';
import SectionHeader from './SectionHeader.jsx';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % testimonials.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  const item = testimonials[index];
  const showPrevious = () => setIndex((value) => (value - 1 + testimonials.length) % testimonials.length);
  const showNext = () => setIndex((value) => (value + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section relative overflow-hidden bg-gradient-to-b from-charcoal via-obsidian to-charcoal">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(216,183,106,0.16),transparent_28%),radial-gradient(circle_at_84%_68%,rgba(244,215,138,0.12),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Testimonials"
          title="Client words from events that had to go right."
          text="Real feedback from weddings, corporate meets, social events and live productions managed by Event Brigade."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <AnimatePresence mode="wait">
            <motion.article
              key={item.name}
              className="relative overflow-hidden rounded-[2rem] border border-champagne/20 bg-[linear-gradient(145deg,rgba(248,241,223,0.08),rgba(248,241,223,0.025))] p-7 shadow-soft md:p-10"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45 }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <Quote className="text-gold" size={44} />
              <div className="mt-6 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, star) => <Star key={star} size={18} fill="currentColor" />)}
              </div>
              <p className="mt-7 font-serif text-2xl leading-relaxed text-ivory md:text-4xl">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-8 flex flex-col gap-5 border-t border-champagne/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xl font-semibold text-gold">{item.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-smoke">{item.role}</p>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="grid h-11 w-11 place-items-center rounded-full border border-champagne/25 text-gold transition hover:border-gold hover:bg-gold hover:text-obsidian"
                    aria-label="Show previous testimonial"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="grid h-11 w-11 place-items-center rounded-full border border-champagne/25 text-gold transition hover:border-gold hover:bg-gold hover:text-obsidian"
                    aria-label="Show next testimonial"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="grid gap-3 sm:grid-cols-2">
            {testimonials.map((testimonial, cardIndex) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setIndex(cardIndex)}
                className={`group rounded-[1.25rem] border p-5 text-left transition duration-300 ${
                  cardIndex === index
                    ? 'border-gold/70 bg-gold/[0.12] shadow-glow'
                    : 'border-champagne/15 bg-ivory/[0.035] hover:border-gold/45 hover:bg-ivory/[0.06]'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-ivory">{testimonial.name}</span>
                  <span className={`h-2.5 w-2.5 rounded-full ${cardIndex === index ? 'bg-gold' : 'bg-ivory/25 group-hover:bg-gold/70'}`} />
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-smoke">{testimonial.role}</p>
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-smoke">{testimonial.quote}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((testimonial, dotIndex) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setIndex(dotIndex)}
                className={`h-2.5 rounded-full transition ${dotIndex === index ? 'w-10 bg-gold' : 'w-2.5 bg-ivory/25'}`}
                aria-label={`Show testimonial from ${testimonial.name}`}
              />
            ))}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {['Corporate Events', 'Social Celebrations', 'Wedding Planning', 'Artist Management'].map((label) => (
            <div key={label} className="rounded-2xl border border-champagne/20 bg-ivory/[0.03] px-6 py-5 text-center text-sm font-semibold uppercase tracking-[0.2em] text-ivory/70">
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
