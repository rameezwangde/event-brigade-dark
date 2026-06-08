import React from 'react';
import {
  ArrowLeft,
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

const portfolioLinks = [
  { label: 'Weddings', href: '/wedding-portfolio' },
  { label: 'Corporate', href: '/corporate-portfolio' },
  { label: 'Social Events', href: '/social-events-portfolio' }
];

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

export default function WeddingPortfolio() {
  return (
    <section id="portfolio" className="relative min-h-screen overflow-hidden bg-obsidian pb-20 pt-32 md:pt-36">
      <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_50%_0%,rgba(244,215,138,0.18),transparent_62%)]" />
      <div className="particles opacity-20" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <a href="/#portfolio" className="btn-secondary w-fit">
            <ArrowLeft size={18} /> Back To Site
          </a>
          <div className="flex flex-wrap gap-3">
            {portfolioLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                  link.href === '/wedding-portfolio'
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
              <img src={weddingStage} alt="Wedding celebration planned by Event Brigade" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">Wedding Portfolio 2026</p>
                <h1 className="mt-4 max-w-2xl font-serif text-5xl leading-[0.95] text-ivory md:text-7xl">
                  If you can dream it, we can create it.
                </h1>
              </div>
            </div>

            <div className="relative p-7 md:p-10">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl border border-gold/35 bg-obsidian/70 text-gold shadow-glow">
                <Sparkles size={26} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">What We Do</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory md:text-5xl">
                We do not just plan weddings. We curate experiences.
              </h2>
              <div className="mt-6 h-px w-28 bg-gradient-to-r from-gold to-transparent" />
              <div className="mt-7 space-y-5 text-base leading-8 text-smoke md:text-lg">
                <p>
                  A wedding is more than an event. It is a once-in-a-lifetime story told through thoughtful planning,
                  luxurious aesthetics and calm on-ground execution.
                </p>
                <p>
                  Event Brigade shapes each celebration from the first idea to the final farewell, blending creative
                  concepts, personalized detailing, guest experience and seamless delivery.
                </p>
              </div>
              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {[
                  ['9', 'Core services'],
                  ['8', 'Function moments'],
                  ['End-to-end', 'Planning']
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-champagne/15 bg-obsidian/55 p-4">
                    <div className="font-serif text-3xl text-gold">{value}</div>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-smoke">{label}</p>
                  </div>
                ))}
              </div>
              <a href="#wedding-services" className="btn-primary mt-9">
                Explore Wedding Services <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-24 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-champagne/20 bg-ivory/[0.035] shadow-soft">
            <img src={weddingDecor} alt="Wedding decor and venue styling by Event Brigade" className="h-full min-h-[500px] w-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/88 via-obsidian/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-champagne">Wedding Planning</p>
              <h2 className="mt-3 max-w-xl font-serif text-4xl leading-tight text-ivory">
                Personal celebrations planned with production discipline.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative overflow-hidden rounded-[2rem] border border-champagne/20 bg-[linear-gradient(145deg,rgba(248,241,223,0.08),rgba(248,241,223,0.025))] p-8 shadow-soft md:p-10">
            <div className="absolute right-0 top-0 h-32 w-1 bg-gold" />
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">Company Approach</p>
            <h3 className="mt-4 font-serif text-4xl leading-tight text-ivory md:text-5xl">From location to last guest movement.</h3>
            <div className="mt-6 h-px w-28 bg-gradient-to-r from-gold to-transparent" />
            <div className="mt-7 space-y-6 text-base leading-8 text-smoke md:text-lg">
              <p>
                The wedding portfolio positions Event Brigade as a squad of creative, enthusiastic event professionals
                who remove the worry from organizing and managing life&apos;s biggest celebrations.
              </p>
              <p>
                The team supports destination selection, vendor discovery, hospitality, logistics, decor, entertainment,
                food and guest journeys across lawns, villas, resorts, beaches and boutique hotels.
              </p>
            </div>
          </Reveal>
        </div>

        <div id="wedding-services" className="mt-24">
          <SectionHeader
            eyebrow="Services"
            title="The wedding brief translated into managed modules."
            text="Each PDF service has been rebuilt as site content, supported by extracted wedding visuals rather than page screenshots."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {planningServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.04} className="group overflow-hidden rounded-[2rem] border border-champagne/20 bg-graphite shadow-soft transition duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-glow">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} by Event Brigade`}
                      loading={index < 3 ? 'eager' : 'lazy'}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                    <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl border border-gold/35 bg-obsidian/75 text-gold backdrop-blur">
                      <Icon size={24} />
                    </div>
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
              );
            })}
          </div>
        </div>

        <div className="mt-24">
          <SectionHeader
            eyebrow="Celebration Flow"
            title="Function moments shaped into one guest journey."
            text="The PDF's individual functions have been converted into a structured wedding experience map."
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

        <div className="mt-24 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="glass-card p-7 md:p-8">
            <Gem className="mb-6 text-gold" size={34} />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">Guest Engagement</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory">Small experiences that make the wedding feel alive.</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {activityIdeas.map((activity) => (
                <div key={activity} className="flex items-center gap-3 rounded-2xl border border-champagne/12 bg-obsidian/55 px-4 py-3 text-sm font-semibold text-ivory/82">
                  <BadgeCheck className="shrink-0 text-gold" size={17} />
                  <span>{activity}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative overflow-hidden rounded-[2rem] border border-champagne/20 bg-ivory/[0.035] shadow-soft">
            <img src={weddingActivities} alt="Wedding guest activities by Event Brigade" loading="lazy" className="h-full min-h-[520px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/88 via-obsidian/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-champagne">Activities</p>
              <h2 className="mt-3 max-w-xl font-serif text-4xl leading-tight text-ivory">Interactive corners, keepsakes and guest-led memories.</h2>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12 rounded-[2rem] border border-champagne/25 bg-ivory/[0.04] p-8 text-center shadow-glow backdrop-blur md:p-12">
          <Plane className="mx-auto text-gold" size={34} />
          <p className="mx-auto mt-6 max-w-4xl font-serif text-3xl leading-tight text-ivory md:text-5xl">
            Weddings planned from travel and stay to rituals, decor, entertainment and the final farewell.
          </p>
          <a href="/#contact" className="btn-primary mt-8">
            Plan A Wedding <ArrowRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
