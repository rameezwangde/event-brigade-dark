import React from 'react';
import { Award, Users } from 'lucide-react';
import { images, siteCopy } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Founder() {
  return (
    <section id="founder" className="relative bg-gradient-to-b from-obsidian to-charcoal pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-center text-2xl font-semibold uppercase tracking-[0.24em] text-champagne md:text-3xl">
          Founder & Director
        </p>
        <div className="mx-auto mt-12 grid max-w-6xl items-center gap-8 lg:grid-cols-[0.46fr_0.54fr] lg:gap-12">
          <Reveal className="relative w-full justify-self-center lg:max-w-lg">
            <div className="absolute -inset-3 rounded-[2.25rem] border border-gold/25 shadow-glow" />
            <img
              src={images.founder}
              alt="Kunal Garg, Founder and Director of Event Brigade"
              loading="lazy"
              className="relative aspect-[4/5] max-h-[580px] w-full rounded-[2rem] object-cover object-[center_22%] shadow-soft"
            />
            <div className="absolute bottom-5 left-5 max-w-[calc(100%-2.5rem)] rounded-2xl border border-champagne/20 bg-obsidian/80 p-4 backdrop-blur-md">
              <p className="font-serif text-2xl leading-none text-ivory">Kunal Garg</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-champagne">Founder, Director</p>
            </div>
          </Reveal>
          <Reveal className="flex flex-col justify-center gap-8 lg:py-6">
            <p className="max-w-3xl text-left text-lg leading-9 text-smoke">{siteCopy.founder}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['15+', 'Years', Award],
                ['1900+', 'Events Managed', Users],
                ['700+', 'Clients Served', Award]
              ].map(([value, label, Icon]) => (
                <div key={label} className="glass-card p-5 h-full">
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
