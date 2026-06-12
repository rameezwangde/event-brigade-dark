import React from 'react';
import { services, weddingShowcase } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function WeddingServices() {
  const [activeModule, setActiveModule] = React.useState(null);
  
  // Find wedding services from the data
  const weddingData = services.find(s => s.title === 'Weddings') || { servicesWeProvide: [] };

  return (
    <section className="relative overflow-hidden bg-charcoal pb-8 pt-32 md:pb-10 md:pt-40">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_58%)]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Our Services"
          title="Curated wedding experiences."
          text="At Event Brigade, a wedding is more than an event. It is a once-in-a-lifetime story waiting to be told beautifully."
          className="max-w-5xl"
        />

        <div className="mt-12 space-y-10">
          <Reveal
            id="weddings"
            className="overflow-hidden rounded-[2rem] border border-champagne/20 bg-obsidian shadow-soft scroll-mt-28"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[460px] overflow-hidden lg:min-h-full">
                {/* Default Background */}
                <img
                  src={weddingShowcase.gallery[0]}
                  alt="Wedding Services by Event Brigade"
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    activeModule !== null ? 'opacity-0 scale-100' : 'opacity-100 scale-105'
                  }`}
                />
                
                {/* Module Specific Backgrounds */}
                {weddingShowcase.modules.map((module, moduleIndex) => (
                  <img
                    key={module.title}
                    src={module.image}
                    alt={module.title}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                      activeModule === moduleIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                    }`}
                  />
                ))}
                
                <div className="absolute inset-0 bg-obsidian/55 md:bg-obsidian/25" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-obsidian/35 md:from-obsidian/95 md:via-obsidian/35 md:to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 pb-9 md:p-8 md:pb-12">
                  <div className="rounded-[1.25rem] border border-champagne/10 bg-obsidian/78 p-5 shadow-soft backdrop-blur-sm md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.34em] text-champagne drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                      {weddingShowcase.eyebrow}
                    </p>
                    <h3 className="mt-3 font-serif text-4xl leading-tight text-ivory drop-shadow-[0_3px_18px_rgba(0,0,0,0.95)] md:text-5xl">
                      {weddingShowcase.title}
                    </h3>
                    <a href="/wedding-portfolio" className="mt-6 inline-flex text-sm font-bold uppercase tracking-[0.14em] text-gold drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                      View Portfolio
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 md:p-10">
                <p className="text-base leading-8 text-smoke md:text-lg">{weddingShowcase.text}</p>
                <div className="mt-8 divide-y divide-champagne/10">
                  {weddingShowcase.modules.map((module, moduleIndex) => {
                    const isHovered = activeModule === moduleIndex;
                    return (
                      <div
                        key={module.title}
                        onMouseEnter={() => setActiveModule(moduleIndex)}
                        onMouseLeave={() => setActiveModule(null)}
                        className="group cursor-pointer py-5 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6">
                            <span className={`font-mono text-sm tracking-[0.2em] transition-colors duration-300 ${isHovered ? 'text-gold' : 'text-smoke/60'}`}>
                              {String(moduleIndex + 1).padStart(2, '0')}
                            </span>
                            <h4 className={`font-serif text-2xl leading-none transition-all duration-300 ${isHovered ? 'text-gold pl-2' : 'text-ivory'}`}>
                              {module.title}
                            </h4>
                          </div>
                          <div className={`h-1.5 w-1.5 rounded-full bg-gold transition-all duration-500 ${isHovered ? 'opacity-100 scale-125' : 'opacity-0 scale-50'}`} />
                        </div>
                        <div
                          className={`grid transition-all duration-500 ease-in-out ${
                            isHovered ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="pl-11 text-sm leading-6 text-smoke/90">
                              {module.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="overflow-hidden border-t border-champagne/15">
              <div className="auto-scroll-gallery flex w-max gap-0">
                {[...weddingShowcase.gallery, ...weddingShowcase.gallery].map((item, galleryIndex) => {
                  const image = typeof item === 'string' ? item : item.image;
                  const position = typeof item === 'string' ? 'center center' : item.position;

                  return (
                    <img
                      key={`wedding-${galleryIndex}-${image}`}
                      src={image}
                      alt={`Wedding visual ${galleryIndex + 1}`}
                      loading="lazy"
                      style={{ objectPosition: position }}
                      className="h-44 w-[72vw] shrink-0 object-cover opacity-80 transition hover:opacity-100 sm:w-[44vw] lg:w-96"
                    />
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Details Checklist Grid */}
        <div className="mt-16">
          <Reveal
            className="group relative overflow-hidden rounded-[2rem] border border-champagne/15 bg-graphite/40 p-8 shadow-soft transition-all duration-500 hover:border-gold/50 hover:bg-graphite/70 hover:shadow-glow"
          >
            <span className="absolute right-8 top-6 font-serif text-8xl font-bold text-gold/10 select-none pointer-events-none transition-colors duration-500 group-hover:text-gold/15">
              01
            </span>
            <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-gold-radial opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30 pointer-events-none" />

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne/80 transition-colors duration-300 group-hover:text-champagne">
              Services we provide
            </p>
            <h3 className="mt-4 font-serif text-3xl font-semibold text-ivory transition-colors duration-300 group-hover:text-gold md:text-4xl">
              Wedding Planning & Management
            </h3>
            <div className="mt-5 h-px w-24 bg-gradient-to-r from-gold/50 to-transparent transition-all duration-500 group-hover:w-32 group-hover:from-gold" />
            
            <ul className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {weddingData.servicesWeProvide.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 text-[15px] font-medium leading-relaxed text-smoke transition-colors duration-300 group-hover:text-smoke/90"
                >
                  <span className="mt-1.5 shrink-0 text-[10px] text-gold/80 transition-transform duration-300 group-hover:scale-125">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-16 px-4 py-4 text-center md:py-6">
          <p className="mx-auto max-w-4xl font-serif text-3xl leading-tight text-ivory md:text-5xl">
            Have a wedding in mind?
            <span className="mt-2 block">Let&apos;s make it extraordinary.</span>
          </p>
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/contact');
            }}
            className="btn-primary mt-8 inline-flex"
          >
            Plan A Wedding
          </a>
        </Reveal>
      </div>
    </section>
  );
}
