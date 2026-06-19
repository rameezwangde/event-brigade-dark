import React, { useState } from 'react';
import { Quote, Star, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { testimonials } from '../data.js';
import SectionHeader from './SectionHeader.jsx';

export default function Testimonials() {
  const [openReview, setOpenReview] = useState(null);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-gradient-to-b from-charcoal via-obsidian to-charcoal pb-36 pt-32 md:pb-44 md:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,175,55,0.16),transparent_28%),radial-gradient(circle_at_84%_68%,rgba(244,208,111,0.12),transparent_30%)]" />
      
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="TESTIMONIALS"
          title={<>The Moments We Created,<br />The Stories They Tell.</>}
          text="Discover what our clients have to say about their Event Brigade experience."
        />

        <div className="relative z-20 mt-20 overflow-visible pb-10">
          <div
            className="testimonial-scroll flex w-max gap-4 items-stretch"
            style={{ animationPlayState: openReview !== null ? 'paused' : undefined }}
          >
            {[...testimonials, ...testimonials].map((testimonial, testimonialIndex) => (
              <button
                type="button"
                key={`${testimonial.name}-${testimonialIndex}`}
                onClick={() => setOpenReview(testimonialIndex)}
                className="relative flex flex-col justify-between min-h-[260px] w-[78vw] shrink-0 rounded-[1.25rem] border border-champagne/20 bg-[linear-gradient(145deg,rgba(248,241,223,0.08),rgba(248,241,223,0.025))] p-5 text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold/45 sm:w-[380px] md:p-6 cursor-pointer"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                <div className="flex-1 flex flex-col justify-start">
                  <div className="flex items-start justify-between gap-6">
                    <Quote className="shrink-0 text-gold" size={28} />
                    <div className="flex gap-1 text-gold">
                      {Array.from({ length: 5 }).map((_, star) => (
                        <Star key={star} size={13} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-5 font-serif text-xl leading-snug text-ivory md:text-2xl line-clamp-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 border-t border-champagne/15 pt-4 w-full">
                  <p className="text-base font-semibold text-gold">{testimonial.name}</p>
                  <p className="mt-1 text-[0.68rem] uppercase tracking-[0.2em] text-smoke">{testimonial.role}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Focus Overlay Modal */}
      <AnimatePresence>
        {openReview !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenReview(null)}
              className="fixed inset-0 bg-obsidian/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="my-auto relative w-full max-w-2xl rounded-[2rem] border border-champagne/25 bg-graphite p-8 shadow-glow md:p-10 z-10"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setOpenReview(null)}
                className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full border border-champagne/15 bg-obsidian text-smoke/70 transition hover:border-gold hover:text-gold cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="flex items-start justify-between gap-6">
                <Quote className="text-gold" size={40} />
                <div className="flex gap-1.5 text-gold mt-2">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={star} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="font-serif text-2xl leading-relaxed text-ivory md:text-3xl">
                  &ldquo;{testimonials[openReview % testimonials.length].quote}&rdquo;
                </p>
              </div>

              <div className="mt-10 border-t border-champagne/15 pt-6">
                <p className="text-lg font-semibold text-gold">
                  {testimonials[openReview % testimonials.length].name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-smoke">
                  {testimonials[openReview % testimonials.length].role}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
