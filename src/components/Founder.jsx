import React from 'react';
import { Award, Users } from 'lucide-react';
import { images, siteCopy } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function Founder() {
  return (
    <section id="founder" className="relative bg-gradient-to-b from-obsidian to-charcoal pb-24 pt-10 md:pb-32 md:pt-12">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Founder & Director"
          eyebrowClassName="text-2xl md:text-3xl"
          title="Kunal Garg"
          text="A calm, production-aware leader with deep experience across logistics, hospitality, artist management and event execution."
        />
        <div className="mt-6 grid items-stretch gap-6 lg:grid-cols-[0.66fr_1.34fr]">
          <Reveal className="relative max-w-sm justify-self-center lg:max-w-md">
            <div className="absolute -inset-3 rounded-[2.25rem] border border-gold/25 shadow-glow" />
            <img
              src={images.founder}
              alt="Kunal Garg, Founder and Director of Event Brigade"
              loading="lazy"
              className="relative aspect-[4/5] max-h-[520px] w-full rounded-[2rem] object-cover object-[center_22%] shadow-soft"
            />
          </Reveal>
          <Reveal className="flex h-full flex-col justify-between gap-8 lg:min-h-[520px] lg:py-6">
            <p className="text-lg leading-9 text-smoke">{siteCopy.founder}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['15+', 'Years', Award],
                ['3000+', 'Events Managed', Users],
                ['700+', 'Clients Served', Award]
              ].map(([value, label, Icon]) => (
                <div key={label} className="glass-card p-5">
                  <Icon className="mb-4 text-gold" size={24} />
                  <p className="font-serif text-4xl text-gold">{value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-smoke">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
