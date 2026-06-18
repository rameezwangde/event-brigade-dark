import React from 'react';
import { Lightbulb, Sparkles } from 'lucide-react';
import { images, siteCopy } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function About() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-obsidian via-charcoal to-obsidian pb-10 pt-32 md:pb-14 md:pt-40">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="About Us"
          title={<>We Don't Just Manage Events.<br />We Create Experiences.</>}
          text="A Pune-based event management and production company delivering seamless experiences."
          className="max-w-5xl"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-champagne/20 bg-ivory/[0.035] shadow-soft h-full">
            <img
              src={images.about}
              alt="Elegant event stage designed by Event Brigade"
              loading="lazy"
              className="h-full min-h-[460px] w-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-base font-semibold uppercase tracking-[0.28em] text-champagne md:text-lg">Introduction</p>
              <h3 className="mt-3 max-w-xl font-serif text-4xl leading-tight text-ivory">
                Every Occasion Begins with a Vision.
              </h3>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative flex flex-col items-start justify-center overflow-hidden rounded-[2rem] border border-champagne/20 bg-[linear-gradient(145deg,rgba(248,241,223,0.08),rgba(248,241,223,0.025))] p-8 text-left shadow-soft md:p-10 h-full">
            <div className="absolute right-0 top-0 h-32 w-1 bg-gold" />
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="text-base font-semibold uppercase tracking-[0.28em] text-champagne md:text-lg">Company Overview</p>
            <h3 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-ivory md:text-5xl">From idea to on-ground execution.</h3>
            <div className="mt-6 h-px w-28 bg-gradient-to-r from-gold to-transparent" />
            <div className="mt-7 max-w-xl space-y-5 text-base leading-8 text-smoke md:text-lg md:leading-8 text-justify">
              <p>{siteCopy.about}</p>
              <p>{siteCopy.company}</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:mt-14 lg:grid-cols-2">
          {[
            ['Vision', siteCopy.philosophy, Lightbulb],
            ['Mission', siteCopy.mission, Sparkles]
          ].map(([title, text, Icon], index) => (
            <Reveal
              key={title}
              delay={index * 0.1}
              className="timeline-card group flex min-h-0 flex-col justify-start h-full"
            >
              <div className="absolute left-8 top-8 z-10 grid h-14 w-14 place-items-center rounded-2xl border border-gold/35 bg-gold-radial text-gold shadow-glow transition duration-300 group-hover:scale-105 md:left-9 md:top-9">
                <Icon size={25} />
              </div>
              <div className="relative z-10 pt-20">
                <h3 className="font-serif text-4xl leading-tight text-ivory">{title}</h3>
                <div className="mt-5 h-px w-24 bg-gradient-to-r from-gold to-transparent" />
                <p className="mt-6 text-[15px] leading-8 text-smoke md:text-base text-justify">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
