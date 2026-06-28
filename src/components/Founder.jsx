import React from 'react';
import { Award, Users, ArrowRight } from 'lucide-react';
import { images, siteCopy } from '../data.js';
import Reveal from './Reveal.jsx';

import sandipPawar from '../../Sandip Pawar.jpeg';
import shraddhaShinde from '../../Shraddha Shinde.jpeg';
import yashDhawane from '../../Yash Dhawane.png';
import aditiMaindalkar from '../../Aditi Maindalkar.jpeg';

const teamMembers = [
  {
    name: "Sandip Pawar",
    role: "Head of Operations",
    bio: "With a keen eye for detail and operational excellence, Sandip leads the execution backbone of Event Brigade. From production and vendor management to on-ground execution, he ensures every event unfolds flawlessly, from planning to final applause.",
    image: sandipPawar,
    objectPosition: "object-[center_12%]"
  },
  {
    name: "Shraddha Shinde",
    role: "Creative Head",
    bio: "Driven by creativity and inspired by experiences, Shraddha leads the creative direction at Event Brigade. From themes and concepts to visual storytelling, she crafts celebrations that are distinctive, immersive, and memorable.",
    image: shraddhaShinde,
    objectPosition: "object-top"
  },
  {
    name: "Yash Dhawane",
    role: "Head of Innovation",
    bio: "With a focus on innovation and continuous improvement, Yash helps shape experiences that are relevant, engaging, and memorable.",
    image: yashDhawane,
    objectPosition: "object-center"
  },
  {
    name: "Aditi Maindalkar",
    role: "Technical Head",
    bio: "Blending technology with creativity, Aditi drives the technical vision at Event Brigade. From digital innovation to operational efficiency, she ensures every event is supported by seamless systems and smart solutions.",
    image: aditiMaindalkar,
    objectPosition: "object-[center_18%]"
  }
];

export default function Founder() {
  return (
    <section id="founder" className="relative bg-gradient-to-b from-obsidian to-charcoal pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-7xl px-8 md:px-12 lg:px-16">
        <p className="text-center text-2xl font-semibold uppercase tracking-[0.24em] text-champagne md:text-3xl">
          The Brigades
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

        {/* Divider Line */}
        <div className="h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent my-24" />

        {/* Team Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-gold mb-3.5">The Rescue Squad</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2] leading-tight">
            Meet the Core Brigade
          </h2>
          <p className="mt-4 text-sm sm:text-base text-smoke leading-relaxed max-w-2xl mx-auto">
            Behind every spectacular show, there is a dedicated squad managing every detail, overcoming every challenge, and bringing your vision to life.
          </p>
        </Reveal>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {teamMembers.map((member, index) => (
            <Reveal
              key={member.name}
              delay={index * 0.08}
              className="glass-card group flex flex-col h-full overflow-hidden rounded-[2rem] border border-champagne/20 bg-ivory/[0.045] backdrop-blur-xl transition duration-300 hover:border-gold/50 hover:shadow-glow"
            >
              {/* Photo Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#050505]">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  loading="lazy"
                  className={`h-full w-full ${member.objectFit || 'object-cover'} ${member.objectPosition || 'object-center'}`}
                  style={member.scale ? { 
                    transform: `scale(${member.scale})`, 
                    transformOrigin: member.transformOrigin || 'center center' 
                  } : undefined}
                />
                {/* Dark overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent pointer-events-none" />
                
                {/* Member Name overlay */}
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <h3 className="font-serif text-2xl text-white font-semibold leading-none">{member.name}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-champagne">{member.role}</p>
                </div>
              </div>
              
              {/* Bio Content */}
              <div className="p-6 flex-grow bg-charcoal/20">
                <p className="text-sm text-smoke leading-relaxed text-justify">
                  {member.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Join the Brigade Section */}
        <Reveal delay={0.15} className="mt-28 text-center max-w-4xl mx-auto z-10 relative">
          <div className="border border-champagne/15 rounded-[2.5rem] p-8 sm:p-12 md:p-16 bg-ivory/[0.025] backdrop-blur-xl shadow-glow relative overflow-hidden">
            {/* Background Subtle Radial Glow */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_70%)]" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <Users className="mx-auto text-gold mb-6 animate-pulse" size={38} />
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF7F2] leading-tight font-semibold">
                Join the <span className="italic text-gold font-normal">Brigade</span>
              </h2>
              <p className="mt-6 text-smoke text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                Are you an event manager, designer, planner, or technical wizard ready to create spectacular experiences? Let's join forces and build the future of events together.
              </p>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', '/contact');
                }}
                className="gold-shimmer-btn inline-flex items-center gap-3 text-obsidian font-bold text-sm sm:text-base uppercase tracking-[0.2em] px-10 py-4 rounded-full hover:shadow-glow transition-all duration-300 mt-10"
              >
                Connect With Us <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
