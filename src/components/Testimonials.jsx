import React, { useState, useEffect } from 'react';
import { Quote, Star, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { testimonials } from '../data.js';
import SectionHeader from './SectionHeader.jsx';

export default function Testimonials() {
  const [openReview, setOpenReview] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(3);
      } else if (window.innerWidth >= 640) {
        setVisibleItems(2);
      } else {
        setVisibleItems(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Recalculate maxIndex whenever visibleItems changes
  const maxIndex = Math.max(0, testimonials.length - visibleItems);

  // If currentIndex goes out of bounds due to resizing, clamp it
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleItems, currentIndex, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const totalDots = maxIndex + 1;

  return (
    <section id="testimonials" className="relative overflow-hidden bg-gradient-to-b from-charcoal via-obsidian to-charcoal pb-36 pt-32 md:pb-44 md:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,175,55,0.16),transparent_28%),radial-gradient(circle_at_84%_68%,rgba(244,208,111,0.12),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-8 md:px-12 lg:px-16">
        <SectionHeader
          eyebrow="TESTIMONIALS"
          title={<>The Moments We Created,<br />The Stories They Tell.</>}
          text="Discover what our clients have to say about their Event Brigade experience."
        />

        {/* Carousel Container */}
        <div className="relative mt-14 px-4 sm:px-12 z-20">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute -left-1 sm:left-0 top-1/2 -translate-y-1/2 z-30 grid h-12 w-12 place-items-center rounded-full border border-champagne/25 bg-obsidian/75 text-gold hover:border-gold hover:bg-gold hover:text-obsidian shadow-glow transition duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} strokeWidth={2.4} />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={nextSlide}
            className="absolute -right-1 sm:right-0 top-1/2 -translate-y-1/2 z-30 grid h-12 w-12 place-items-center rounded-full border border-champagne/25 bg-obsidian/75 text-gold hover:border-gold hover:bg-gold hover:text-obsidian shadow-glow transition duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} strokeWidth={2.4} />
          </button>

          {/* Cards Wrapper */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out py-4"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
              }}
            >
              {testimonials.map((testimonial, testimonialIndex) => (
                <div
                  key={`${testimonial.name}-${testimonialIndex}`}
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3 flex"
                >
                  <button
                    type="button"
                    onClick={() => setOpenReview(testimonialIndex)}
                    className="relative flex flex-col justify-between min-h-[280px] w-full rounded-[1.25rem] border border-champagne/20 bg-[linear-gradient(145deg,rgba(248,241,223,0.08),rgba(248,241,223,0.025))] p-6 text-left shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold/45 cursor-pointer"
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
                      <p className="mt-5 font-serif text-lg leading-snug text-ivory md:text-xl line-clamp-5">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </div>
                    <div className="mt-6 border-t border-champagne/15 pt-4 w-full">
                      <p className="text-base font-semibold text-gold">{testimonial.name}</p>
                      <p className="mt-1 text-[0.68rem] uppercase tracking-[0.2em] text-smoke">{testimonial.role}</p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        {totalDots > 1 && (
          <div className="flex justify-center gap-2 mt-8 relative z-20">
            {Array.from({ length: totalDots }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === dotIdx ? 'w-8 bg-gold' : 'w-2.5 bg-champagne/20 hover:bg-gold/50'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        )}
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
