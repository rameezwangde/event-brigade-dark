import React from 'react';
import { Compass, Gem, Handshake, Lightbulb, Sparkles, Target, Trophy } from 'lucide-react';
import { images, siteCopy } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';

const cards = [
  { icon: Gem, title: 'Design-Led', text: 'Distinctive ideas translated into immersive environments and polished guest journeys.' },
  { icon: Compass, title: 'Detail-Driven', text: 'Every minute detail is acknowledged, attended to and aligned with the event vision.' },
  { icon: Handshake, title: 'Client-First', text: 'A responsible team that lets families and organizations rest assured.' },
  { icon: Target, title: 'Outcome-Focused', text: 'Events built with meaning, identity, vision and measurable delight.' }
];

export default function About() {
  return (
    <section id="about" className="section bg-gradient-to-b from-obsidian via-charcoal to-obsidian">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative">
            <div className="absolute -inset-6 rounded-full bg-gold-radial blur-3xl" />
            <img
              src={images.about}
              alt="Elegant celebration table and chandeliers"
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-[2rem] border border-champagne/20 object-cover shadow-soft"
            />
          </Reveal>
          <div>
            <SectionHeader
              align="left"
              eyebrow="About Us"
              title="A brigade of event enthusiasts to rescue your biggest occasions."
              text="A squad of event enthusiasts and event managers to rescue you from the worry of organizing and managing an event of your life makes an Event Brigade!"
            />
            <Reveal className="mt-8 space-y-5 text-base leading-8 text-smoke md:text-lg">
              <p>{siteCopy.about}</p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08} className="glass-card p-6">
              <card.icon className="mb-6 text-gold" size={30} />
              <h3 className="font-serif text-2xl text-ivory">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-smoke">{card.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid gap-6 lg:grid-cols-3">
          {[
            ['Company Overview', siteCopy.company, Trophy],
            ['Our Philosophy', siteCopy.philosophy, Lightbulb],
            ['Our Mission', siteCopy.mission, Sparkles]
          ].map(([title, text, Icon], index) => (
            <Reveal
              key={title}
              delay={index * 0.1}
              className={`timeline-card group ${index === 1 ? 'lg:mt-10' : ''}`}
            >
              <div className="relative z-10 flex items-center justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-gold/35 bg-gold-radial text-gold shadow-glow transition duration-300 group-hover:scale-105">
                  <Icon size={25} />
                </div>
                <span className="rounded-full border border-champagne/25 bg-obsidian/70 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-champagne">
                  0{index + 1}
                </span>
              </div>
              <h3 className="relative z-10 mt-8 font-serif text-4xl leading-tight text-ivory">{title}</h3>
              <div className="relative z-10 mt-5 h-px w-24 bg-gradient-to-r from-gold to-transparent" />
              <p className="relative z-10 mt-6 text-[15px] leading-8 text-smoke md:text-base">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
