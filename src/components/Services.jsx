import React from 'react';
import { Check, Mic2, PartyPopper, Sparkles, UsersRound } from 'lucide-react';
import { services, weddingShowcase } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';

const icons = [Sparkles, UsersRound, PartyPopper, Mic2];

export default function Services() {
  return (
    <section id="services" className="section relative overflow-hidden bg-charcoal">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(216,183,106,0.16),transparent_58%)]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Our Services"
          title="Tailored solutions for every occasion."
          text="Weddings, corporate experiences, social celebrations and artist-led entertainment delivered with premium planning discipline."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[index];
            const portfolioHref =
              service.title === 'Corporate Events'
                ? '/corporate-portfolio'
                : service.title === 'Weddings'
                  ? '/wedding-portfolio'
                  : undefined;
            const CardTag = portfolioHref ? 'a' : 'article';
            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <CardTag
                  href={portfolioHref}
                  className="group service-card"
                  aria-label={portfolioHref ? `Open ${service.title.toLowerCase()} portfolio` : undefined}
                >
                  <img src={service.image} alt={`${service.title} by Event Brigade`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />
                  <div className="relative z-10 mt-auto p-7 md:p-9">
                    <div className="mb-6 grid h-14 w-14 place-items-center rounded-full border border-gold/40 bg-obsidian/60 text-gold shadow-glow backdrop-blur">
                      <Icon size={28} />
                    </div>
                    <h3 className="font-serif text-4xl text-ivory">{service.title}</h3>
                    <p className="mt-4 max-w-xl leading-7 text-ivory/75">{service.text}</p>
                    {portfolioHref && (
                      <span className="mt-6 inline-flex text-sm font-bold uppercase tracking-[0.14em] text-gold">
                        View Portfolio
                      </span>
                    )}
                  </div>
                </CardTag>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16 overflow-hidden rounded-[2rem] border border-champagne/20 bg-obsidian shadow-soft">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[420px]">
              <img
                src={weddingShowcase.gallery[0]}
                alt="Wedding planning and event production by Event Brigade"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-champagne">{weddingShowcase.eyebrow}</p>
                <h3 className="mt-3 font-serif text-4xl leading-tight text-ivory md:text-5xl">{weddingShowcase.title}</h3>
              </div>
            </div>

            <div className="p-7 md:p-10">
              <p className="text-base leading-8 text-smoke md:text-lg">{weddingShowcase.text}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {weddingShowcase.modules.map((module) => (
                  <article key={module.title} className="overflow-hidden rounded-2xl border border-champagne/15 bg-ivory/[0.035]">
                    <img src={module.image} alt={`${module.title} by Event Brigade`} loading="lazy" className="h-36 w-full object-cover" />
                    <div className="p-5">
                      <h4 className="font-serif text-2xl text-ivory">{module.title}</h4>
                      <p className="mt-3 text-sm leading-6 text-smoke">{module.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 border-t border-champagne/15 md:grid-cols-4">
            {weddingShowcase.gallery.map((image, galleryIndex) => (
              <img
                key={image}
                src={image}
                alt={`Wedding service visual ${galleryIndex + 1}`}
                loading="lazy"
                className="h-44 w-full object-cover opacity-80 transition hover:opacity-100"
              />
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={`${service.title}-details`} delay={index * 0.06} className="glass-card p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">Services we provide</p>
              <h3 className="mt-3 font-serif text-3xl text-ivory">{service.title}</h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.servicesWeProvide.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-smoke">
                    <Check className="mt-1 shrink-0 text-gold" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 rounded-[2rem] border border-champagne/25 bg-ivory/[0.04] p-8 text-center shadow-glow backdrop-blur md:p-12">
          <p className="font-serif text-3xl text-ivory md:text-5xl">Have an event in mind? Let&apos;s make it extraordinary.</p>
          <a href="#contact" className="btn-primary mt-8 inline-flex">Plan An Event</a>
        </Reveal>
      </div>
    </section>
  );
}
