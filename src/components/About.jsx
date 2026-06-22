import React from 'react';
import { images, siteCopy } from '../data.js';
import Reveal from './Reveal.jsx';

// Custom Light-Themed Section Header for About
function LuxuryHeader({ eyebrow, title, text }) {
  return (
    <Reveal className="max-w-4xl mx-auto mb-12 text-center">
      <div className="flex items-center justify-center gap-2.5 mb-3.5">
        <span className="w-8 h-[1px] bg-[#C8A96B]/50" />
        <p className="text-base sm:text-lg font-semibold uppercase tracking-[0.34em] text-[#C8A96B]">{eyebrow}</p>
        <span className="w-8 h-[1px] bg-[#C8A96B]/50" />
      </div>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C] leading-[1.2]">
        {title}
      </h2>
      {text && (
        <p className="mt-4 text-sm sm:text-base text-[#1C1C1C]/70 font-sans leading-relaxed max-w-2xl mx-auto">
          {text}
        </p>
      )}
    </Reveal>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full text-[#1C1C1C] font-sans overflow-x-hidden selection:bg-[#C8A96B]/30 selection:text-[#1C1C1C] pb-14 pt-32 md:pb-20 md:pt-40"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.08' numOctaves='3'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.78 0 0 0 0 0.66 0 0 0 0 0.42 0 0 0 0.05 0'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' fill='transparent'/%3E%3C/svg%3E")`,
        backgroundColor: '#FAF7F2'
      }}
    >
      <div className="mx-auto max-w-7xl px-8 md:px-12 lg:px-16">
        <LuxuryHeader
          eyebrow="About Us"
          title={<>We Don't Just Manage Events.<br />We Create Experiences.</>}
          text="A Pune-based event management and production company delivering seamless experiences."
        />

        {/* Vision & Mission Block */}
        <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-[#C8A96B]/20 bg-[#F5F1EA] p-8 shadow-md md:p-12">
          {/* Background Radial Glow */}
          <div className="absolute -left-24 -top-24 w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(200,169,107,0.05),transparent_60%)] pointer-events-none" />
          <div className="absolute -right-24 -bottom-24 w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(200,169,107,0.05),transparent_60%)] pointer-events-none" />
          
          <div className="flex flex-col gap-10 relative z-10">
            {/* Vision */}
            <Reveal className="flex flex-col items-center text-center">
              <h3 className="font-serif text-3xl leading-tight text-[#1C1C1C]">Vision</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#1C1C1C]/75 max-w-2xl mx-auto text-center">
                {siteCopy.philosophy}
              </p>
            </Reveal>

            {/* Horizontal Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#C8A96B]/20 to-transparent w-full" />

            {/* Mission */}
            <Reveal className="flex flex-col items-center text-center" delay={0.08}>
              <h3 className="font-serif text-3xl leading-tight text-[#1C1C1C]">Mission</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#1C1C1C]/75 max-w-2xl mx-auto text-center">
                {siteCopy.mission}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Introduction & Our Story Grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-[#C8A96B]/20 bg-[#F5F1EA] shadow-md h-full">
            <img
              src={images.about}
              alt="Elegant event stage designed by Event Brigade"
              loading="lazy"
              className="h-full min-h-[460px] w-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <p className="text-base font-semibold uppercase tracking-[0.28em] text-[#C8A96B] sm:text-lg">Introduction</p>
              <h3 className="mt-3 max-w-xl font-serif text-4xl leading-tight text-white sm:text-5xl">
                Every Occasion Begins with a Vision.
              </h3>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative flex flex-col items-start justify-between overflow-hidden rounded-[2rem] border border-[#C8A96B]/20 bg-[#F5F1EA] p-8 text-left shadow-md md:p-10 h-full">
            <div>
              <p className="text-base font-semibold uppercase tracking-[0.28em] text-[#C8A96B] sm:text-lg">Our Story</p>
              <h3 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-[#1C1C1C] sm:text-5xl">The Brigade Behind Extraordinary Events.</h3>
              <div className="mt-6 h-px w-28 bg-gradient-to-r from-[#C8A96B] to-transparent" />
            </div>
            <div className="mt-7 max-w-xl space-y-5 text-base leading-relaxed text-[#1C1C1C]/75 text-justify">
              {siteCopy.aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
