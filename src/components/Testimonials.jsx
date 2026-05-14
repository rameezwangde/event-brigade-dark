import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data.js';
import SectionHeader from './SectionHeader.jsx';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % testimonials.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  const item = testimonials[index];

  return (
    <section id="testimonials" className="section relative overflow-hidden bg-charcoal">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(216,183,106,0.12),transparent_30%),radial-gradient(circle_at_80%_75%,rgba(244,215,138,0.12),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted when everything must run perfectly."
          text="Client words from the current Event Brigade site, reframed in a premium testimonial experience."
        />
        <div className="mx-auto mt-12 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.article
              key={item.name}
              className="glass-card p-8 text-center md:p-12"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45 }}
            >
              <Quote className="mx-auto text-gold" size={42} />
              <div className="mt-5 flex justify-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, star) => <Star key={star} size={18} fill="currentColor" />)}
              </div>
              <p className="mt-7 font-serif text-2xl leading-relaxed text-ivory md:text-4xl">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-8 text-lg font-semibold text-gold">{item.name}</p>
              <p className="text-sm uppercase tracking-[0.22em] text-smoke">{item.role}</p>
            </motion.article>
          </AnimatePresence>
          <div className="mt-6 flex justify-center gap-3">
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
        </div>
        <div className="mt-14 grid gap-4 text-center md:grid-cols-4">
          {['Jalan Group', 'Gabriel Limited', 'AYW Club', 'Popular Anchors'].map((brand) => (
            <div key={brand} className="rounded-2xl border border-champagne/20 bg-ivory/[0.03] px-6 py-5 font-serif text-xl text-ivory/70">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
