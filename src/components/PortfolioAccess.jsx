import React from 'react';
import { ArrowRight, BriefcaseBusiness, Heart, PartyPopper } from 'lucide-react';
import Reveal from './Reveal.jsx';

export default function PortfolioAccess() {
  return (
    <section id="portfolio" className="relative bg-obsidian pb-8 pt-8 md:pb-10 md:pt-10">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-champagne/20 bg-[linear-gradient(135deg,rgba(248,241,223,0.08),rgba(248,241,223,0.025))] p-8 shadow-soft md:p-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="grid gap-8 lg:grid-cols-[0.68fr_0.32fr] lg:items-center">
            <div>
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-gold/35 bg-obsidian/70 text-gold shadow-glow">
                <BriefcaseBusiness size={26} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">Portfolio</p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-ivory md:text-6xl">
                View our event portfolios.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-smoke md:text-lg">
                Open the dedicated portfolio pages for corporate productions, weddings and social events.
              </p>
            </div>
            <div className="grid gap-4 lg:justify-self-end">
              <a href="/wedding-portfolio" className="btn-primary">
                <Heart size={18} /> Weddings <ArrowRight size={18} />
              </a>
              <a href="/corporate-portfolio" className="btn-secondary">
                <BriefcaseBusiness size={18} /> Corporate <ArrowRight size={18} />
              </a>
              <a href="/social-events-portfolio" className="btn-secondary">
                <PartyPopper size={18} /> Social Events <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
