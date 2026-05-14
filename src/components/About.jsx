import React from 'react';
import { Compass, Gem, Handshake, Target } from 'lucide-react';
import { images } from '../data.js';
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
              text="Event Brigade is a team of young, creative, enthusiastic and dynamic professionals with a sparkling stream of ideas and solid experience in Events and Entertainment."
            />
            <Reveal className="mt-8 space-y-5 text-base leading-8 text-smoke md:text-lg">
              <p>
                We aim to be the first choice for organizations and families looking for unique and personalized events.
                Our team conceives, designs and executes experiences that exceed expectations while making planning feel easier.
              </p>
              <p>
                Operating across entertainment, media, communication and production, Event Brigade is widely recognized as a
                holistic events solution factory. Every event receives a distinct meaning, identity and vision with true professionalism.
              </p>
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

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {[
            ['Company Overview', 'We offer a comprehensive and integrated range of services, ensuring the target audience experiences the event with clarity, comfort and delight.'],
            ['Philosophy', 'With dedication and teamwork, we can make dreams come true and achieve wonders. That belief continues to shape every brief we accept.'],
            ['Mission', 'To give the best to our clients by putting our heart and soul into excellent quality service, responsible planning and consistent customer delight.']
          ].map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.1} className="timeline-card">
              <span className="timeline-dot" />
              <p className="text-xs uppercase tracking-[0.32em] text-champagne">0{index + 1}</p>
              <h3 className="mt-4 font-serif text-3xl text-ivory">{title}</h3>
              <p className="mt-4 leading-7 text-smoke">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
