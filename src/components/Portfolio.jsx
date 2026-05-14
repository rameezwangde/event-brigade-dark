import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';
import { portfolio } from '../data.js';
import SectionHeader from './SectionHeader.jsx';

const categories = ['All', 'Weddings', 'Corporate', 'Social Events', 'Artist Management'];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [preview, setPreview] = useState(null);
  const filtered = active === 'All' ? portfolio : portfolio.filter((item) => item.category === active);

  return (
    <section id="portfolio" className="section bg-obsidian">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Portfolio"
          title="Moments designed to be remembered."
          text="A premium gallery inspired by weddings, corporate productions, social experiences and artist-led celebrations."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full border px-5 py-2 text-sm transition ${
                active === category
                  ? 'border-gold bg-gold text-obsidian'
                  : 'border-champagne/25 text-ivory/75 hover:border-gold hover:text-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 columns-1 gap-5 space-y-5 md:columns-2 lg:columns-3">
          <AnimatePresence>
            {filtered.map((item, index) => (
              <motion.article
                layout
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className={`group relative mb-5 break-inside-avoid overflow-hidden rounded-[1.5rem] border border-champagne/20 bg-graphite shadow-soft ${
                  index % 3 === 0 ? 'h-[440px]' : 'h-[340px]'
                }`}
              >
                <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-champagne">{item.category}</p>
                  <h3 className="mt-2 font-serif text-3xl text-ivory">{item.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setPreview(item)}
                  className="absolute right-5 top-5 grid h-11 w-11 translate-y-2 place-items-center rounded-full border border-gold/40 bg-obsidian/60 text-gold opacity-0 backdrop-blur transition group-hover:translate-y-0 group-hover:opacity-100"
                  aria-label={`Preview ${item.title}`}
                >
                  <Maximize2 size={18} />
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-obsidian/90 p-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-champagne/25 bg-charcoal shadow-soft"
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img src={preview.image} alt={preview.title} className="max-h-[74vh] w-full object-cover" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-champagne">{preview.category}</p>
                <h3 className="font-serif text-3xl text-ivory">{preview.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setPreview(null)}
                className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-obsidian/70 text-gold backdrop-blur"
                aria-label="Close preview"
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
