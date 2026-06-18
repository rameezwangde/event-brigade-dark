import React from 'react';
import { ArrowUpRight, BriefcaseBusiness, Heart, PartyPopper } from 'lucide-react';
import Reveal from './Reveal.jsx';

const divisions = [
  {
    title: 'WEDDINGS',
    tagline: 'CRAFTED LUXURY FOR A LIFETIME OF MEMORIES.',
    desc: 'From bespoke décor and guest hospitality to entertainment and seamless coordination, we bring together every element needed to create extraordinary wedding experiences. Blending creativity, elegance, and precision, we craft moments that will be cherished for a lifetime.',
    servicesUrl: '/wedding-services',
    portfolioUrl: '/wedding-portfolio',
    icon: Heart
  },
  {
    title: 'Corporate Events',
    tagline: 'Precision meets brand strategy.',
    desc: 'Delivering product launch reveal moments, conferences, channel meets, and awards nights with exact execution.',
    servicesUrl: '/corporate-services',
    portfolioUrl: '/corporate-portfolio',
    icon: BriefcaseBusiness
  },
  {
    title: 'Social Celebrations',
    tagline: 'Bespoke, warm milestone celebrations.',
    desc: 'Shaping milestones, anniversaries, baby showers and community moments with custom decor, games and curations.',
    servicesUrl: '/social-services',
    portfolioUrl: '/social-events-portfolio',
    icon: PartyPopper
  }
];

export default function PortfolioAccess() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    window.history.pushState({}, '', href);
  };

  return (
    <section className="relative bg-obsidian pb-20 pt-16 md:pb-24 md:pt-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14 text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-champagne">Our Services</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory md:text-6xl">
              Curated with Purpose. Executed with Precision.
            </h2>
            <div className="mx-auto mt-5 h-px w-28 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {divisions.map((div, index) => {
            const Icon = div.icon;
            return (
              <Reveal
                key={div.title}
                delay={index * 0.08}
                className="glass-card group flex flex-col justify-between p-8 min-h-[380px] h-full"
              >
                <div className="relative">
                  <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl border border-gold/35 bg-gold-radial text-gold shadow-glow transition duration-300 group-hover:scale-105">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-serif text-3xl leading-tight text-ivory transition-colors duration-300 group-hover:text-gold">
                    {div.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-champagne/80 min-h-[36px] flex items-center">
                    {div.tagline}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-smoke text-justify">
                    {div.desc}
                  </p>
                </div>

                <div className="mt-8 border-t border-champagne/10 pt-6">
                  <div className="flex items-center justify-between gap-4">
                    <a
                      href={div.servicesUrl}
                      onClick={(e) => handleNavClick(e, div.servicesUrl)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-ivory/82 transition-colors duration-300 hover:text-gold"
                    >
                      Services <ArrowUpRight size={14} className="opacity-60" />
                    </a>
                    <div className="h-4 w-px bg-champagne/20" />
                    <a
                      href={div.portfolioUrl}
                      onClick={(e) => handleNavClick(e, div.portfolioUrl)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-ivory/82 transition-colors duration-300 hover:text-gold"
                    >
                      Portfolio <ArrowUpRight size={14} className="opacity-60" />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
