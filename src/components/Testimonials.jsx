import React, { useState } from 'react';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data.js';
import SectionHeader from './SectionHeader.jsx';

export default function Testimonials() {
  const [openReview, setOpenReview] = useState(null);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-gradient-to-b from-charcoal via-obsidian to-charcoal pb-8 pt-16 md:pb-10 md:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(216,183,106,0.16),transparent_28%),radial-gradient(circle_at_84%_68%,rgba(244,215,138,0.12),transparent_30%)]" />
      {openReview !== null && (
        <button
          type="button"
          aria-label="Close full testimonial"
          className="absolute inset-0 z-10 bg-obsidian/55 backdrop-blur-sm"
          onClick={() => setOpenReview(null)}
        />
      )}
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Testimonials"
          eyebrowClassName="text-2xl md:text-3xl"
          title="Client words from events that had to go right."
          text="Real feedback from weddings, corporate meets, social events and live productions managed by Event Brigade."
        />

        <div className="relative z-20 mt-10 overflow-visible pb-10">
          <div
            className="testimonial-scroll flex w-max gap-4"
            style={{ animationPlayState: openReview !== null ? 'paused' : undefined }}
          >
            {[...testimonials, ...testimonials].map((testimonial, testimonialIndex) => {
              const isOpen = openReview === testimonialIndex;

              return (
              <button
                type="button"
                key={`${testimonial.name}-${testimonialIndex}`}
                onClick={() => setOpenReview(isOpen ? null : testimonialIndex)}
                className={`relative min-h-[300px] w-[78vw] shrink-0 rounded-[1.25rem] border bg-[linear-gradient(145deg,rgba(248,241,223,0.08),rgba(248,241,223,0.025))] p-5 text-left shadow-soft transition duration-300 sm:w-[380px] md:p-6 ${
                  isOpen
                    ? 'z-30 scale-[1.04] border-gold/70 bg-obsidian shadow-glow sm:w-[520px]'
                    : 'z-20 border-champagne/20 hover:-translate-y-1 hover:border-gold/45'
                }`}
                aria-expanded={isOpen}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                <div className="flex items-start justify-between gap-6">
                  <Quote className="shrink-0 text-gold" size={28} />
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, star) => <Star key={star} size={13} fill="currentColor" />)}
                  </div>
                </div>

                <p className={`mt-5 font-serif text-xl leading-snug text-ivory md:text-2xl ${isOpen ? '' : 'line-clamp-6'}`}>&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-6 border-t border-champagne/15 pt-4">
                  <p className="text-base font-semibold text-gold">{testimonial.name}</p>
                  <p className="mt-1 text-[0.68rem] uppercase tracking-[0.2em] text-smoke">{testimonial.role}</p>
                </div>
              </button>
              );
            })}
          </div>
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
