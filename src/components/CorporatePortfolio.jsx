import React from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ClipboardCheck,
  Gem,
  Handshake,
  Lightbulb,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound
} from 'lucide-react';
import { corporatePortfolio } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';

import heroStage from '../assets/corporate-extracted/corporate-p15-xref1070.jpg';
import conferenceStage from '../assets/corporate-extracted/corporate-p17-xref1109.jpg';
import awardsNight from '../assets/corporate-extracted/corporate-p08-xref843.jpg';
import registrationDesk from '../assets/corporate-extracted/corporate-p14-xref1057.jpg';
import partnerMeet from '../assets/corporate-extracted/corporate-p14-xref1046.jpg';
import outdoorSetup from '../assets/corporate-extracted/corporate-p13-xref1011.jpg';
import launchWalk from '../assets/corporate-extracted/corporate-p14-xref1054.jpg';
import familyTheme from '../assets/corporate-extracted/corporate-p15-xref1073.jpg';
import groupPhoto from '../assets/corporate-extracted/corporate-p13-xref1020.jpg';
import clientMeet from '../assets/corporate-extracted/corporate-p12-xref973.jpg';
import reviewOne from '../assets/corporate-extracted/corporate-p18-xref1127.jpg';
import reviewTwo from '../assets/corporate-extracted/corporate-p18-xref1184.jpg';

const portfolioLinks = [
  { label: 'Weddings', href: '/wedding-portfolio' },
  { label: 'Corporate', href: '/corporate-portfolio' },
  { label: 'Social Events', href: '/social-events-portfolio' }
];

const processIcons = [Target, Lightbulb, Gem, ClipboardCheck, Handshake, BadgeCheck];
const strengthIcons = [ShieldCheck, BadgeCheck, ClipboardCheck, Sparkles];

const serviceVisuals = {
  'Annual Days & Awards Night': awardsNight,
  'Product Launches': launchWalk,
  Conference: conferenceStage,
  'Family Days Events & Theme Parties': familyTheme,
  'Channel Partner & Dealers Meet': partnerMeet,
  'Outdoor Events': outdoorSetup
};

const spotlight = [
  { image: heroStage, title: 'Large-format stage production' },
  { image: conferenceStage, title: 'Conference and leadership sessions' },
  { image: registrationDesk, title: 'Guest registration and access flow' },
  { image: groupPhoto, title: 'Outdoor corporate gatherings' },
  { image: clientMeet, title: 'Partner and dealer meets' },
  { image: awardsNight, title: 'Awards nights and celebrations' }
];

export default function CorporatePortfolio() {
  return (
    <section id="portfolio" className="relative min-h-screen overflow-hidden bg-obsidian pb-20 pt-32 md:pt-36">
      <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.18),transparent_62%)]" />
      <div className="particles opacity-20" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-end">
          <div className="flex flex-wrap gap-3">
            {portfolioLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                  link.href === '/corporate-portfolio'
                    ? 'border-gold bg-gold text-obsidian shadow-glow'
                    : 'border-champagne/25 bg-obsidian/55 text-ivory/75 hover:border-gold hover:text-gold'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <Reveal className="overflow-hidden rounded-[2rem] border border-champagne/20 bg-[linear-gradient(145deg,rgba(248,241,223,0.075),rgba(248,241,223,0.025))] shadow-soft">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[560px]">
              <img src={heroStage} alt="Corporate event stage by Event Brigade" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">Corporate Portfolio 2026</p>
                <h1 className="mt-4 max-w-2xl font-serif text-5xl leading-[0.95] text-ivory md:text-7xl">
                  Corporate events engineered for impact.
                </h1>
              </div>
            </div>

            <div className="relative p-7 md:p-10">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">Introduction</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory md:text-5xl">
                We do not just manage events.<br />We engineer experiences.
              </h2>
              <div className="mt-6 h-px w-28 bg-gradient-to-r from-gold to-transparent" />
              <div className="mt-7 space-y-5 text-base leading-8 text-smoke md:text-lg">
                <p>
                  Event Brigade sees every brief as a blank canvas for a brand&apos;s next leap. Based in Pune with
                  over 15 years of experience, the team brings together strategy, creativity, technical production
                  and calm on-ground execution.
                </p>
                <p>
                  The corporate portfolio covers annual days, product launches, conferences, family days, channel
                  partner meets, dealer meets and outdoor experiences built around brand goals and audience engagement.
                </p>
              </div>
              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {[
                  ['15+', 'Years'],
                  ['6', 'Event formats'],
                  ['8', 'Client names']
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-champagne/15 bg-obsidian/55 p-4">
                    <div className="font-serif text-3xl text-gold">{value}</div>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-smoke">{label}</p>
                  </div>
                ))}
              </div>
              <a href="#corporate-services" className="btn-primary mt-9">
                Explore Capabilities <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-24">
          <SectionHeader
            eyebrow="How We Work"
            title="A structured path from brief to applause."
            text="The PDF process has been translated into a clear delivery system for corporate clients."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {corporatePortfolio.workflow.map((step, index) => {
              const Icon = processIcons[index] || Check;
              return (
                <Reveal key={step} delay={index * 0.05} className="glass-card p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <Icon className="text-gold" size={28} />
                    <span className="rounded-full border border-champagne/20 px-4 py-2 text-xs font-semibold text-champagne">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-ivory">{step}</h3>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="mt-24 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-champagne/20 bg-ivory/[0.035] shadow-soft">
            <img src={conferenceStage} alt="Corporate conference produced by Event Brigade" className="h-full min-h-[520px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-champagne">Why Choose Us</p>
              <h2 className="mt-3 max-w-xl font-serif text-4xl leading-tight text-ivory">Seamless, creative and result-driven.</h2>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {corporatePortfolio.strengths.map((item, index) => {
              const Icon = strengthIcons[index] || ShieldCheck;
              return (
                <Reveal key={item.title} delay={index * 0.06} className="glass-card p-6">
                  <Icon className="mb-5 text-gold" size={28} />
                  <h3 className="font-serif text-2xl text-ivory">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-smoke">{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div id="corporate-services" className="mt-24">
          <SectionHeader
            eyebrow="What We Do"
            title="Corporate formats shaped into complete experiences."
            text="Each event type from the portfolio is presented as a service module with production, hospitality and engagement layers."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {corporatePortfolio.services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.05} className="group overflow-hidden rounded-[2rem] border border-champagne/20 bg-graphite shadow-soft transition duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-glow">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={serviceVisuals[service.title] || heroStage}
                    alt={`${service.title} by Event Brigade`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 min-h-16 font-serif text-3xl leading-tight text-ivory">{service.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-smoke">
                        <Check className="mt-1 shrink-0 text-gold" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <SectionHeader
            eyebrow="Event Spotlight"
            title="Real event moments from the corporate portfolio."
            text="Extracted visuals from the PDF are used as image assets, then composed into the website design."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {spotlight.map((item, index) => (
              <Reveal
                key={item.title}
                delay={(index % 3) * 0.05}
                className={`group relative overflow-hidden rounded-[1.5rem] border border-champagne/20 bg-graphite shadow-soft ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <img src={item.image} alt={item.title} loading="lazy" className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 md:h-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-champagne">Event Brigade</p>
                  <h3 className="mt-2 font-serif text-2xl text-ivory">{item.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="glass-card p-7 md:p-8">
            <UsersRound className="mb-6 text-gold" size={34} />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">Our Clients</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory">Brands and communities served.</h2>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {corporatePortfolio.clients.map((client) => (
                <div key={client} className="rounded-2xl border border-champagne/12 bg-obsidian/55 px-4 py-3 text-sm font-semibold text-ivory/82">
                  {client}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08} className="grid gap-4 sm:grid-cols-2">
            {[reviewOne, reviewTwo].map((review, index) => (
              <div key={review} className="overflow-hidden rounded-[1.5rem] border border-champagne/20 bg-ivory p-3 shadow-soft">
                <img src={review} alt={`Corporate client review ${index + 1}`} loading="lazy" className="h-full w-full rounded-[1rem] object-contain" />
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="mt-12 rounded-[2rem] border border-champagne/25 bg-ivory/[0.04] p-8 text-center shadow-glow backdrop-blur md:p-12">
          <Quote className="mx-auto text-gold" size={34} />
          <p className="mx-auto mt-6 max-w-4xl font-serif text-3xl leading-tight text-ivory md:text-5xl">
            Corporate events with the discipline of production and the feel of an experience.
          </p>
          <a href="/#contact" className="btn-primary mt-8">
            Plan A Corporate Event <ArrowRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
