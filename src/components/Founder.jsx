import React from 'react';
import { Award, Users } from 'lucide-react';
import { images, siteCopy } from '../data.js';
import Reveal from './Reveal.jsx';

export default function Founder() {
  return (
    <section id="founder" className="relative bg-gradient-to-b from-obsidian to-charcoal pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-7xl px-8 md:px-12 lg:px-16">
        <p className="text-center text-2xl font-semibold uppercase tracking-[0.24em] text-champagne md:text-3xl">
          Founder & Director
        </p>
        <div className="mx-auto mt-12 grid max-w-6xl items-center gap-8 lg:grid-cols-[0.46fr_0.54fr] lg:gap-12">
          <Reveal className="relative w-full justify-self-center lg:max-w-lg">
            <div className="absolute -inset-3 rounded-[2.25rem] border border-gold/25 shadow-glow" />
            <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] max-h-[580px] w-full shadow-soft">
              <img
                src={images.founder}
                alt="Kunal Garg, Founder and Director of Event Brigade"
                loading="lazy"
                className="h-full w-full object-cover object-[center_22%]"
              />
              {/* Fade out gradient at the bottom of the photo */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-obsidian via-obsidian/45 to-transparent pointer-events-none" />

              {/* Text Badge attached to the layout box bottom-left */}
              <div className="absolute bottom-0 left-0 rounded-tr-2xl border-t border-r border-champagne/20 bg-obsidian/90 px-6 py-4 backdrop-blur-md z-10">
                <p className="font-serif text-2xl leading-none text-white font-semibold">Kunal Garg</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-champagne">Founder, Director</p>
              </div>
            </div>
          </Reveal>
          <Reveal className="flex flex-col justify-center gap-8 lg:py-6">
            <p className="max-w-3xl text-justify text-lg leading-9 text-smoke">{siteCopy.founder}</p>
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
