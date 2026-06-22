import React from 'react';
import { Award, Users } from 'lucide-react';
import { images, siteCopy } from '../data.js';
import Reveal from './Reveal.jsx';

const teamMembers = [
  {
    name: "Bhavik",
    role: "Head of Operations & Logistics",
    bio: "The operational glue of the Brigade. Bhavik orchestrates event logistics, vendor coordinates, and on-site scheduling, ensuring every moving piece functions flawlessly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=750&q=80"
  },
  {
    name: "Sagar",
    role: "Production & Technical Lead",
    bio: "Mastering complex stage designs, high-end AV setups, and technical execution. Sagar translates ambitious design concepts into safe, physical production wonders.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&h=750&q=80"
  },
  {
    name: "Creative Lead",
    role: "Experience & Decor Curator",
    bio: "Bringing visual storytelling to life. Curation of custom floral palettes, table settings, and light themes to reflect each client's unique celebration identity.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=750&q=80"
  }
];

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
              className="glass-card group flex flex-col h-full overflow-hidden rounded-[2rem] border border-champagne/20 bg-ivory/[0.045] backdrop-blur-xl transition duration-300 hover:border-gold/50 hover:shadow-glow hover:-translate-y-1"
            >
              {/* Photo Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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

      </div>
    </section>
  );
}
