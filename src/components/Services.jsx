import React from 'react';
import { Mic2, PartyPopper, Sparkles, UsersRound } from 'lucide-react';
import { services } from '../data.js';
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
            return (
              <Reveal key={service.title} delay={index * 0.08} className="group service-card">
                <img src={service.image} alt={`${service.title} by Event Brigade`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />
                <div className="relative z-10 mt-auto p-7 md:p-9">
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-full border border-gold/40 bg-obsidian/60 text-gold shadow-glow backdrop-blur">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-serif text-4xl text-ivory">{service.title}</h3>
                  <p className="mt-4 max-w-xl leading-7 text-ivory/75">{service.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-12 rounded-[2rem] border border-champagne/25 bg-ivory/[0.04] p-8 text-center shadow-glow backdrop-blur md:p-12">
          <p className="font-serif text-3xl text-ivory md:text-5xl">Have an event in mind? Let&apos;s make it extraordinary.</p>
          <a href="#contact" className="btn-primary mt-8 inline-flex">Plan An Event</a>
        </Reveal>
      </div>
    </section>
  );
}
