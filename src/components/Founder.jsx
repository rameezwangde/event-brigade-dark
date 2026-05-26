import React from 'react';
import { Award, Linkedin, Mail, Users } from 'lucide-react';
import { contact, images, siteCopy } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function Founder() {
  return (
    <section id="founder" className="section bg-gradient-to-b from-obsidian to-charcoal">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Founder & Director"
          title="Kunal Garg"
          text="A calm, production-aware leader with deep experience across logistics, hospitality, artist management and event execution."
        />
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] border border-gold/25 shadow-glow" />
            <img
              src={images.founder}
              alt="Kunal Garg, Founder and Director of Event Brigade"
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-champagne/25 bg-obsidian/70 p-5 backdrop-blur-xl">
              <p className="font-serif text-3xl text-ivory">Kunal Garg</p>
              <p className="text-sm uppercase tracking-[0.26em] text-champagne">Founder, Director</p>
              <div className="mt-4 flex gap-3">
                <a href={`mailto:${contact.founderEmail}`} className="social-btn" aria-label="Email Kunal Garg"><Mail size={18} /></a>
                <a href="https://www.linkedin.com" className="social-btn" aria-label="LinkedIn"><Linkedin size={18} /></a>
              </div>
            </div>
          </Reveal>
          <Reveal className="space-y-7">
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
