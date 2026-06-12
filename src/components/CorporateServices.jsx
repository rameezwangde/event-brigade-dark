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
import { services, corporatePortfolio } from '../data.js';
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

const corporateShowcase = {
  eyebrow: 'Corporate Services',
  title: 'Corporate events engineered for impact.',
  text: 'From annual days and launches to conferences, partner meets and outdoor experiences, Event Brigade brings together strategy, technical production, hospitality and on-ground execution.',
  hero: heroStage,
  modules: [
    {
      title: 'Annual Days & Awards Night',
      text: 'Brand-aligned themes, immersive stage design, lighting, entertainment, recognition moments and curated F&B.',
      image: awardsNight
    },
    {
      title: 'Product Launches',
      text: 'Concept, reveal moments, registration, hospitality, LED walls, AV, lighting and special effects.',
      image: launchWalk
    },
    {
      title: 'Conference',
      text: 'Stage design, seating layout, branding, check-in, speaker coordination and smooth session flow.',
      image: conferenceStage
    },
    {
      title: 'Family Days & Theme Parties',
      text: 'Vibrant themes, kids zones, games, live performances, food options and comfortable guest experiences.',
      image: familyTheme
    }
  ],
  gallery: [awardsNight, launchWalk, conferenceStage, partnerMeet]
};

export default function CorporateServices() {
  const [activeModule, setActiveModule] = React.useState(null);

  // Find corporate data
  const corporateData = services.find(s => s.title === 'Corporate Events') || { servicesWeProvide: [] };
  const splitIndex = Math.floor(corporateData.servicesWeProvide.length / 2);
  const corporateEventsList = corporateData.servicesWeProvide.slice(0, splitIndex);
  const corporateSolutionsList = corporateData.servicesWeProvide.slice(splitIndex);

  return (
    <section className="relative overflow-hidden bg-charcoal pb-12 pt-32 md:pb-16 md:pt-40">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_58%)]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Our Services"
          title="Engineered for corporate impact."
          text="From planning and production to hospitality and execution, we deliver end-to-end alignment with your brand strategy."
          className="max-w-5xl"
        />

        {/* Showcase Block */}
        <div className="mt-12 space-y-10">
          <Reveal
            id="corporate"
            className="overflow-hidden rounded-[2rem] border border-champagne/20 bg-obsidian shadow-soft scroll-mt-28"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[460px] overflow-hidden lg:min-h-full">
                {/* Default Background */}
                <img
                  src={corporateShowcase.hero}
                  alt="Corporate Services by Event Brigade"
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    activeModule !== null ? 'opacity-0 scale-100' : 'opacity-100 scale-105'
                  }`}
                />

                {/* Module Specific Backgrounds */}
                {corporateShowcase.modules.map((module, moduleIndex) => (
                  <img
                    key={module.title}
                    src={module.image}
                    alt={module.title}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                      activeModule === moduleIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                    }`}
                  />
                ))}

                <div className="absolute inset-0 bg-obsidian/55 md:bg-obsidian/25" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-obsidian/35 md:from-obsidian/95 md:via-obsidian/35 md:to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 pb-9 md:p-8 md:pb-12">
                  <div className="rounded-[1.25rem] border border-champagne/10 bg-obsidian/78 p-5 shadow-soft backdrop-blur-sm md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.34em] text-champagne drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                      {corporateShowcase.eyebrow}
                    </p>
                    <h3 className="mt-3 font-serif text-4xl leading-tight text-ivory drop-shadow-[0_3px_18px_rgba(0,0,0,0.95)] md:text-5xl">
                      {corporateShowcase.title}
                    </h3>
                    <a href="/corporate-portfolio" className="mt-6 inline-flex text-sm font-bold uppercase tracking-[0.14em] text-gold drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                      View Portfolio
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 md:p-10">
                <p className="text-base leading-8 text-smoke md:text-lg">{corporateShowcase.text}</p>
                <div className="mt-8 divide-y divide-champagne/10">
                  {corporateShowcase.modules.map((module, moduleIndex) => {
                    const isHovered = activeModule === moduleIndex;
                    return (
                      <div
                        key={module.title}
                        onMouseEnter={() => setActiveModule(moduleIndex)}
                        onMouseLeave={() => setActiveModule(null)}
                        className="group cursor-pointer py-5 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6">
                            <span className={`font-mono text-sm tracking-[0.2em] transition-colors duration-300 ${isHovered ? 'text-gold' : 'text-smoke/60'}`}>
                              {String(moduleIndex + 1).padStart(2, '0')}
                            </span>
                            <h4 className={`font-serif text-2xl leading-none transition-all duration-300 ${isHovered ? 'text-gold pl-2' : 'text-ivory'}`}>
                              {module.title}
                            </h4>
                          </div>
                          <div className={`h-1.5 w-1.5 rounded-full bg-gold transition-all duration-500 ${isHovered ? 'opacity-100 scale-125' : 'opacity-0 scale-50'}`} />
                        </div>
                        <div
                          className={`grid transition-all duration-500 ease-in-out ${
                            isHovered ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="pl-11 text-sm leading-6 text-smoke/90">
                              {module.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="overflow-hidden border-t border-champagne/15">
              <div className="auto-scroll-gallery flex w-max gap-0">
                {[...corporateShowcase.gallery, ...corporateShowcase.gallery].map((item, galleryIndex) => {
                  const image = typeof item === 'string' ? item : item.image;
                  const position = typeof item === 'string' ? 'center center' : item.position;

                  return (
                    <img
                      key={`corporate-showcase-${galleryIndex}-${image}`}
                      src={image}
                      alt={`Corporate visual ${galleryIndex + 1}`}
                      loading="lazy"
                      style={{ objectPosition: position }}
                      className="h-44 w-[72vw] shrink-0 object-cover opacity-80 transition hover:opacity-100 sm:w-[44vw] lg:w-96"
                    />
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Workflow Section */}
        <div className="mt-24">
          <SectionHeader
            eyebrow="How We Work"
            title="A structured path from brief to applause."
            text="Our operational workflows ensure a smooth progression from understanding project goals to on-ground setup."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {corporatePortfolio.workflow.map((step, index) => {
              const Icon = processIcons[index] || Check;
              return (
                <Reveal key={step} delay={index * 0.05} className="glass-card p-6 h-full flex flex-col justify-between">
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

        {/* Strengths Section */}
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
                <Reveal key={item.title} delay={index * 0.06} className="glass-card p-6 h-full flex flex-col justify-start">
                  <Icon className="mb-5 text-gold" size={28} />
                  <h3 className="font-serif text-2xl text-ivory">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-smoke">{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="mt-24">
          <SectionHeader
            eyebrow="What We Do"
            title="Corporate formats shaped into complete experiences."
            text="Each format covers design, stage production, vendor onboarding, and guest hospitality layers."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {corporatePortfolio.services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.05} className="group overflow-hidden rounded-[2rem] border border-champagne/20 bg-graphite shadow-soft transition duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-glow h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={serviceVisuals[service.title] || heroStage}
                    alt={`${service.title} by Event Brigade`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-start">
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

        {/* Spotlight Grid */}
        <div className="mt-24">
          <SectionHeader
            eyebrow="Event Spotlight"
            title="Real event moments from the corporate portfolio."
            text="Highlights from conferences, leadership summits, and awards productions managed by Event Brigade."
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

        {/* Clients & Reviews */}
        <div className="mt-24 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="glass-card p-7 md:p-8 h-full flex flex-col justify-between">
            <div>
              <UsersRound className="mb-6 text-gold" size={34} />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">Our Clients</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory">Brands and communities served.</h2>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {corporatePortfolio.clients.map((client) => (
                <div key={client} className="rounded-2xl border border-champagne/12 bg-obsidian/55 px-4 py-3 text-sm font-semibold text-ivory/82">
                  {client}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08} className="grid gap-4 sm:grid-cols-2 h-full">
            {[reviewOne, reviewTwo].map((review, index) => (
              <div key={review} className="overflow-hidden rounded-[1.5rem] border border-champagne/20 bg-ivory p-3 shadow-soft h-full flex items-center justify-center">
                <img src={review} alt={`Corporate client review ${index + 1}`} loading="lazy" className="h-full w-full rounded-[1rem] object-contain" />
              </div>
            ))}
          </Reveal>
        </div>

        {/* Services We Provide Details Cards */}
        <div className="mt-24 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-2 xl:gap-8">
          <Reveal
            className="group relative overflow-hidden rounded-[2rem] border border-champagne/15 bg-graphite/40 p-8 shadow-soft transition-all duration-500 hover:border-gold/50 hover:bg-graphite/70 hover:shadow-glow h-full flex flex-col"
          >
            <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-gold-radial opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30 pointer-events-none" />

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne/80 transition-colors duration-300 group-hover:text-champagne">
              Services we provide
            </p>
            <h3 className="mt-4 font-serif text-3xl font-semibold text-ivory transition-colors duration-300 group-hover:text-gold md:text-4xl">
              Corporate Events
            </h3>
            <div className="mt-5 h-px w-24 bg-gradient-to-r from-gold/50 to-transparent transition-all duration-500 group-hover:w-32 group-hover:from-gold" />
            
            <ul className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2 flex-grow">
              {corporateEventsList.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 text-[15px] font-medium leading-relaxed text-smoke transition-colors duration-300 group-hover:text-smoke/90"
                >
                  <span className="mt-1.5 shrink-0 text-[10px] text-gold/80 transition-transform duration-300 group-hover:scale-125">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.08}
            className="group relative overflow-hidden rounded-[2rem] border border-champagne/15 bg-graphite/40 p-8 shadow-soft transition-all duration-500 hover:border-gold/50 hover:bg-graphite/70 hover:shadow-glow h-full flex flex-col"
          >
            <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-gold-radial opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30 pointer-events-none" />

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne/80 transition-colors duration-300 group-hover:text-champagne">
              Services we provide
            </p>
            <h3 className="mt-4 font-serif text-3xl font-semibold text-ivory transition-colors duration-300 group-hover:text-gold md:text-4xl">
              Corporate Solutions
            </h3>
            <div className="mt-5 h-px w-24 bg-gradient-to-r from-gold/50 to-transparent transition-all duration-500 group-hover:w-32 group-hover:from-gold" />
            
            <ul className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2 flex-grow">
              {corporateSolutionsList.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 text-[15px] font-medium leading-relaxed text-smoke transition-colors duration-300 group-hover:text-smoke/90"
                >
                  <span className="mt-1.5 shrink-0 text-[10px] text-gold/80 transition-transform duration-300 group-hover:scale-125">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* CTA Banner */}
        <Reveal className="mt-20 rounded-[2rem] border border-champagne/25 bg-ivory/[0.04] p-8 text-center shadow-glow backdrop-blur md:p-12">
          <Quote className="mx-auto text-gold" size={34} />
          <p className="mx-auto mt-6 max-w-4xl font-serif text-3xl leading-tight text-ivory md:text-5xl">
            Corporate events with the discipline of production and the feel of an experience.
          </p>
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/contact');
            }}
            className="btn-primary mt-8 inline-flex"
          >
            Plan A Corporate Event
          </a>
        </Reveal>
      </div>
    </section>
  );
}
