import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Reveal from './Reveal.jsx';

const pageImages = Object.entries(
  import.meta.glob('../assets/wedding-portfolio/wedding-page-*.jpg', {
    eager: true,
    query: '?url',
    import: 'default'
  })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

export default function WeddingPortfolio() {
  return (
    <section id="portfolio" className="min-h-screen bg-obsidian pb-20 pt-32 md:pt-36">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-10 flex flex-col gap-5 border-b border-champagne/15 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">Wedding Portfolio 2026</p>
            <h1 className="mt-4 font-serif text-5xl leading-none text-ivory md:text-7xl">Event Brigade</h1>
          </div>
          <a href="/#home" className="btn-secondary w-fit">
            <ArrowLeft size={18} /> Back Home
          </a>
        </div>

        <div className="grid gap-8">
          {pageImages.map((image, index) => (
            <Reveal
              key={image}
              delay={(index % 2) * 0.04}
              className="overflow-hidden rounded-[1.5rem] border border-champagne/20 bg-ivory shadow-soft"
            >
              <img
                src={image}
                alt={`Event Brigade wedding portfolio page ${index + 1}`}
                loading={index < 2 ? 'eager' : 'lazy'}
                className="w-full"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
