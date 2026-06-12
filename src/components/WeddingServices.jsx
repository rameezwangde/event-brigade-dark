import React from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ClipboardCheck,
  Gem,
  Gift,
  Heart,
  Hotel,
  MapPinned,
  Music,
  Palette,
  Plane,
  Sparkles,
  Utensils,
  UsersRound
} from 'lucide-react';
import { services, weddingShowcase } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';

import weddingStage from '../assets/weddings/wedding-stage.jpg';
import weddingInvites from '../assets/weddings/wedding-invites.jpg';
import guestWelcome from '../assets/weddings/guest-welcome.jpg';
import weddingDecor from '../assets/weddings/wedding-decor.jpg';
import haldiMehendi from '../assets/weddings/haldi-mehendi.jpg';
import reception from '../assets/weddings/reception.jpg';
import specialEntry from '../assets/weddings/special-entry.jpg';
import weddingActivities from '../assets/weddings/wedding-activities.jpg';
import sangeetVisual from '../assets/weddings/pdf-page25-xref298.jpg';
import poolPartyVisual from '../assets/weddings/pdf-page28-xref330.jpg';
import mandapVisual from '../assets/weddings/pdf-page21-xref1238.jpg';
import brideGroomVisual from '../assets/weddings/pdf-page30-xref363.jpg';

const planningServices = [
  {
    title: 'Invitation & Guest RSVP',
    icon: Heart,
    image: weddingInvites,
    items: ['Wedding logo and e-invites', 'Dedicated guest communication number', 'Bulk messaging and RSVP data collection']
  },
  {
    title: 'Logistics',
    icon: MapPinned,
    image: guestWelcome,
    items: ['Airport, station and bus pickup coordination', 'Vehicle tracking sheets', 'On-property movement planning']
  },
  {
    title: 'Hospitality',
    icon: Hotel,
    image: guestWelcome,
    items: ['Festivity desks and welcome plaques', 'Luggage tagging and room allocation', 'Traditional or western welcome flow']
  },
  {
    title: 'Wedding Stationery',
    icon: Gift,
    image: weddingInvites,
    items: ['Thank-you tags and door knobs', 'Key jackets, hamper notes and luggage tags', 'Welcome letters and room itinerary cards']
  },
  {
    title: 'Rituals Management',
    icon: ClipboardCheck,
    image: haldiMehendi,
    items: ['Dedicated ritual team', 'Function-wise material packing', 'Fresh ritual items available on time']
  },
  {
    title: 'Artist Management',
    icon: Music,
    image: reception,
    items: ['Live bands and violin acts', 'Bollywood dancers and singers', 'Celebrity performers and comedians']
  },
  {
    title: 'Food & Beverages',
    icon: Utensils,
    image: reception,
    items: ['Dedicated F&B manager', 'Plate count and liquor count tracking', 'Meal boxes for departing guests']
  },
  {
    title: 'Vendor Management',
    icon: UsersRound,
    image: weddingDecor,
    items: ['Band, ghodi, makeup, mehendi and valet vendors', 'Licenses, bartenders, security and bouncers', 'Vetted partners for fuss-free onboarding']
  },
  {
    title: 'Decor',
    icon: Palette,
    image: weddingDecor,
    items: ['Theme-led design and decor', 'Culture, story and aesthetic-led concepts', 'Memorable venue transformations']
  }
];

const celebrationMoments = [
  { title: 'Welcome & Check-In', image: guestWelcome, text: 'Guest arrival, festivity desk, room keys, luggage flow and warm first impressions.' },
  { title: 'Haldi & Mehendi', image: haldiMehendi, text: 'Festive decor, ritual support, guest comfort and function-wise experience details.' },
  { title: 'Sangeet', image: sangeetVisual, text: 'Performance-led evenings with stage, sound, artists, choreography and family moments.' },
  { title: 'Pool Party', image: poolPartyVisual, text: 'Relaxed daytime celebrations with themed styling, music, service and guest engagement.' },
  { title: 'Vidhi Mandap', image: mandapVisual, text: 'Ceremony settings shaped around tradition, aesthetics, movement and ritual requirements.' },
  { title: 'Reception', image: reception, text: 'Elegant hosting, entertainment, stage flow, hospitality and dining coordination.' },
  { title: 'Bride & Groom Sitout', image: brideGroomVisual, text: 'Designed focal zones for portraits, greetings and couple-led experiences.' },
  { title: 'Special Entries', image: specialEntry, text: 'Bride and groom entries planned with cues, music, performers and visual impact.' }
];

const activityIdeas = [
  'Live calligraphy station',
  'Candle making station',
  'Live bangle making station',
  'Doodle artist',
  'DIY potli making',
  'Block print station',
  'Polaroid pictures',
  'Perfume bar',
  'Mithai mela'
];

export default function WeddingServices() {
  const [activeModule, setActiveModule] = React.useState(null);

  // Find wedding services from the data
  const weddingData = services.find(s => s.title === 'Weddings') || { servicesWeProvide: [] };

  return (
    <section className="relative overflow-hidden bg-charcoal pb-12 pt-32 md:pb-16 md:pt-40">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_58%)]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Our Services"
          title="Curated wedding experiences."
          text="At Event Brigade, a wedding is more than an event. It is a once-in-a-lifetime story waiting to be told beautifully."
          className="max-w-5xl"
        />

        {/* Showcase Block */}
        <div className="mt-12 space-y-10">
          <Reveal
            id="weddings"
            className="overflow-hidden rounded-[2rem] border border-champagne/20 bg-obsidian shadow-soft scroll-mt-28"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[460px] overflow-hidden lg:min-h-full">
                {/* Default Background */}
                <img
                  src={weddingShowcase.gallery[0]}
                  alt="Wedding Services by Event Brigade"
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    activeModule !== null ? 'opacity-0 scale-100' : 'opacity-100 scale-105'
                  }`}
                />

                {/* Module Specific Backgrounds */}
                {weddingShowcase.modules.map((module, moduleIndex) => (
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
                      {weddingShowcase.eyebrow}
                    </p>
                    <h3 className="mt-3 font-serif text-4xl leading-tight text-ivory drop-shadow-[0_3px_18px_rgba(0,0,0,0.95)] md:text-5xl">
                      {weddingShowcase.title}
                    </h3>
                    <a href="/wedding-portfolio" className="mt-6 inline-flex text-sm font-bold uppercase tracking-[0.14em] text-gold drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                      View Portfolio
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 md:p-10">
                <p className="text-base leading-8 text-smoke md:text-lg">{weddingShowcase.text}</p>
                <div className="mt-8 divide-y divide-champagne/10">
                  {weddingShowcase.modules.map((module, moduleIndex) => {
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
                {[...weddingShowcase.gallery, ...weddingShowcase.gallery].map((item, galleryIndex) => {
                  const image = typeof item === 'string' ? item : item.image;
                  const position = typeof item === 'string' ? 'center center' : item.position;

                  return (
                    <img
                      key={`wedding-showcase-${galleryIndex}-${image}`}
                      src={image}
                      alt={`Wedding visual ${galleryIndex + 1}`}
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

        {/* Detailed Capabilities Grid */}
        <div className="mt-24">
          <SectionHeader
            eyebrow="Capabilities"
            title="The wedding brief translated into managed modules."
            text="From logistics and RSVPs to production and styling, we plan weddings with detailed checklist execution."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {planningServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.04} className="group flex flex-col overflow-hidden rounded-[2rem] border border-champagne/20 bg-graphite shadow-soft transition duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-glow h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} by Event Brigade`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                    <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl border border-gold/35 bg-obsidian/75 text-gold backdrop-blur">
                      <Icon size={24} />
                    </div>
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
              );
            })}
          </div>
        </div>

        {/* Celebration Flow Grid */}
        <div className="mt-24">
          <SectionHeader
            eyebrow="Celebration Flow"
            title="Function moments shaped into one guest journey."
            text="Individual functions are coordinated seamlessly so families and guests can enjoy the celebration without friction."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {celebrationMoments.map((moment, index) => (
              <Reveal
                key={moment.title}
                delay={(index % 4) * 0.04}
                className={`group relative overflow-hidden rounded-[1.5rem] border border-champagne/20 bg-graphite shadow-soft ${
                  index === 0 || index === 5 ? 'lg:col-span-2' : ''
                }`}
              >
                <img src={moment.image} alt={`${moment.title} wedding moment`} loading="lazy" className="h-80 w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/92 via-obsidian/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">Event Brigade</p>
                  <h3 className="mt-2 font-serif text-2xl text-ivory">{moment.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-smoke">{moment.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Guest Engagement Activity Bar */}
        <div className="mt-24 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="glass-card p-7 md:p-8 h-full flex flex-col justify-between">
            <div>
              <Gem className="mb-6 text-gold" size={34} />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">Guest Engagement</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory">Small experiences that make the wedding feel alive.</h2>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {activityIdeas.map((activity) => (
                <div key={activity} className="flex items-center gap-3 rounded-2xl border border-champagne/12 bg-obsidian/55 px-4 py-3 text-sm font-semibold text-ivory/82">
                  <BadgeCheck className="shrink-0 text-gold" size={17} />
                  <span>{activity}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative overflow-hidden rounded-[2rem] border border-champagne/20 bg-ivory/[0.035] shadow-soft h-full">
            <img src={weddingActivities} alt="Wedding guest activities by Event Brigade" loading="lazy" className="h-full min-h-[520px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/88 via-obsidian/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-champagne">Activities</p>
              <h2 className="mt-3 max-w-xl font-serif text-4xl leading-tight text-ivory">Interactive corners, keepsakes and guest-led memories.</h2>
            </div>
          </Reveal>
        </div>

        {/* Details Checklist Grid */}
        <div className="mt-24">
          <Reveal
            className="group relative overflow-hidden rounded-[2rem] border border-champagne/15 bg-graphite/40 p-8 shadow-soft transition-all duration-500 hover:border-gold/50 hover:bg-graphite/70 hover:shadow-glow"
          >
            <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-gold-radial opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30 pointer-events-none" />

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne/80 transition-colors duration-300 group-hover:text-champagne">
              Services we provide
            </p>
            <h3 className="mt-4 font-serif text-3xl font-semibold text-ivory transition-colors duration-300 group-hover:text-gold md:text-4xl">
              Wedding Planning & Management
            </h3>
            <div className="mt-5 h-px w-24 bg-gradient-to-r from-gold/50 to-transparent transition-all duration-500 group-hover:w-32 group-hover:from-gold" />

            <ul className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {weddingData.servicesWeProvide.map((item) => (
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

        {/* Plan a Wedding CTA */}
        <Reveal className="mt-20 px-4 py-4 text-center md:py-6">
          <Plane className="mx-auto text-gold" size={34} />
          <p className="mx-auto mt-6 max-w-4xl font-serif text-3xl leading-tight text-ivory md:text-5xl">
            Have a wedding in mind?
            <span className="mt-2 block">Let&apos;s make it extraordinary.</span>
          </p>
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/contact');
            }}
            className="btn-primary mt-8 inline-flex"
          >
            Plan A Wedding
          </a>
        </Reveal>
      </div>
    </section>
  );
}
