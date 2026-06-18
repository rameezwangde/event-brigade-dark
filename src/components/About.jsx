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
              <p className="text-lg font-semibold uppercase tracking-[0.28em] text-champagne md:text-xl">Introduction</p>
              <h3 className="mt-3 max-w-xl font-serif text-5xl leading-tight text-ivory md:text-6xl">
                Every Occasion Begins with a Vision.
              </h3>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative flex flex-col items-start justify-center overflow-hidden rounded-[2rem] border border-champagne/20 bg-[linear-gradient(145deg,rgba(248,241,223,0.08),rgba(248,241,223,0.025))] p-8 text-left shadow-soft md:p-10 h-full">
            <div className="absolute right-0 top-0 h-32 w-1 bg-gold" />
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="text-lg font-semibold uppercase tracking-[0.28em] text-champagne md:text-xl">Company Overview</p>
            <h3 className="mt-4 max-w-xl font-serif text-5xl leading-tight text-ivory md:text-6xl">The Brigade Behind Extraordinary Events.</h3>
            <div className="mt-6 h-px w-28 bg-gradient-to-r from-gold to-transparent" />
            <div className="mt-7 max-w-xl space-y-5 text-base leading-relaxed text-smoke md:text-lg text-left">
              {siteCopy.aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-champagne/15 bg-charcoal/30 p-8 backdrop-blur-md md:p-12">
          {/* Background Radial Glow */}
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold-radial opacity-10 blur-3xl pointer-events-none" />
          <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-gold-radial opacity-10 blur-3xl pointer-events-none" />
          
          <div className="flex flex-col gap-10 relative z-10">
            {/* Vision */}
            <Reveal className="flex flex-col items-center text-center">
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-gold/35 bg-gold-radial text-gold shadow-glow">
                <Lightbulb size={24} />
              </div>
              <div className="mt-4 flex flex-col items-center">
                <span className="font-mono text-xs text-gold/60 tracking-wider">01 / BRAND PURPOSE</span>
                <h3 className="font-serif text-3xl leading-tight text-ivory mt-1">Vision</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-smoke max-w-2xl mx-auto text-center">
                  {siteCopy.philosophy}
                </p>
              </div>
            </Reveal>

            {/* Horizontal Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent w-full" />

            {/* Mission */}
            <Reveal className="flex flex-col items-center text-center" delay={0.08}>
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-gold/35 bg-gold-radial text-gold shadow-glow">
                <Sparkles size={24} />
              </div>
              <div className="mt-4 flex flex-col items-center">
                <span className="font-mono text-xs text-gold/60 tracking-wider">02 / THE PLEDGE</span>
                <h3 className="font-serif text-3xl leading-tight text-ivory mt-1">Mission</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-smoke max-w-2xl mx-auto text-center">
                  {siteCopy.mission}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
