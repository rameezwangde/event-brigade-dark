import React from 'react';
import { Compass, Gem, Handshake, Lightbulb, Sparkles, Target } from 'lucide-react';
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
    <section id="about" className="relative bg-gradient-to-b from-obsidian via-charcoal to-obsidian pb-24 pt-10 md:pb-32 md:pt-14">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="About Us"
          title="We do not just manage events. We engineer experiences."
          text="A Pune-based full-service event management and production company built for seamless execution."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-champagne/20 bg-ivory/[0.035] shadow-soft">
            <img
              src={images.about}
              alt="Elegant event stage designed by Event Brigade"
              loading="lazy"
              className="h-full min-h-[460px] w-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">Introduction</p>
              <h3 className="mt-3 max-w-xl font-serif text-4xl leading-tight text-ivory">
                Every occasion begins as a blank canvas.
              </h3>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative overflow-hidden rounded-[2rem] border border-champagne/20 bg-[linear-gradient(145deg,rgba(248,241,223,0.08),rgba(248,241,223,0.025))] p-8 shadow-soft md:p-10">
            <div className="absolute right-0 top-0 h-32 w-1 bg-gold" />
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">Company Overview</p>
            <h3 className="mt-4 font-serif text-4xl leading-tight text-ivory md:text-5xl">From idea to on-ground execution.</h3>
            <div className="mt-6 h-px w-28 bg-gradient-to-r from-gold to-transparent" />
            <div className="mt-7 space-y-6 text-base leading-8 text-smoke md:text-lg">
              <p>{siteCopy.about}</p>
              <p>{siteCopy.company}</p>
            </div>
          </Reveal>
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

        <div className="mt-24 grid gap-6 lg:grid-cols-2">
          {[
            ['Vision', siteCopy.philosophy, Lightbulb],
            ['Mission', siteCopy.mission, Sparkles]
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
