import React from 'react';
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ClipboardCheck,
  Gift,
  HeartHandshake,
  Laugh,
  Music,
  Paintbrush,
  PartyPopper,
  Sparkles,
  UsersRound
} from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';

import heroCelebration from '../assets/social-curated/social-birthday-hero.jpg';
import eventAtmosphere from '../assets/social-curated/social-event-atmosphere.jpg';
import birthdayCake from '../assets/social-curated/social-birthday-cake.jpg';
import birthdayDecor from '../assets/social-curated/social-birthday-decor.jpg';
import paintPlant from '../assets/social-curated/social-paint-plant.jpg';
import totePainting from '../assets/social-curated/social-tote-painting.jpg';
import crochetFlowers from '../assets/social-curated/social-crochet-flowers.jpg';
import returnGift from '../assets/social-curated/social-return-gift.jpg';
import kidsEntertainment from '../assets/social-curated/social-kids-entertainment.jpg';
import mascotVisual from '../assets/social-curated/social-mascot.jpg';
import anniversaryHero from '../assets/social-curated/social-anniversary-hero.jpg';
import anniversaryDecor from '../assets/social-curated/social-anniversary-decor.jpg';
import perfumeBar from '../assets/social-curated/social-perfume-bar.jpg';
import babyShowerDecor from '../assets/social-curated/social-baby-shower-decor.jpg';
import babyActivity from '../assets/social-curated/social-baby-activity.jpg';
import diaperGame from '../assets/social-curated/social-diaper-game.jpg';
import communityHero from '../assets/social-curated/social-community-hero.jpg';
import dahiHandi from '../assets/social-curated/social-dahi-handi.jpg';
import diwaliEvent from '../assets/social-curated/social-diwali-event.jpg';
import retroMetro from '../assets/social-curated/social-retro-metro.jpg';
import communityStage from '../assets/social-curated/social-community-stage.jpg';

const portfolioLinks = [
  { label: 'Weddings', href: '/wedding-portfolio' },
  { label: 'Corporate', href: '/corporate-portfolio' },
  { label: 'Social Events', href: '/social-events-portfolio' }
];

const expertise = [
  {
    title: 'Birthdays',
    icon: PartyPopper,
    image: birthdayCake,
    text: 'Theme-led celebrations for kids and adults, from playful balloon installations to elegant cocktail or luxury setups.'
  },
  {
    title: 'Anniversaries',
    icon: HeartHandshake,
    image: anniversaryHero,
    text: 'Romantic decor, milestone storytelling and warm guest experiences built around love, gratitude and shared history.'
  },
  {
    title: 'Baby Showers',
    icon: Gift,
    image: babyShowerDecor,
    text: 'Soft, festive decor with coordinated backdrops, activities, games and thoughtful details for parents-to-be.'
  },
  {
    title: 'Community Events',
    icon: UsersRound,
    image: communityHero,
    text: 'Cultural groups and clubs supported with monthly events, annual calendars and consistent member engagement.'
  }
];

const processSteps = [
  'Understanding Requirements',
  'Concept & Theme Design',
  'Planning & Budgeting',
  'Contracting',
  'Vendor Coordination',
  'Execution',
  'Post-Event Support'
];

const experienceModules = [
  {
    title: 'Decor',
    icon: Paintbrush,
    image: birthdayDecor,
    items: ['Kids themes and colorful balloon installations', 'Adult birthday styling with floral, ambient and luxury details', 'Fully customized setups that reflect personality and preferences']
  },
  {
    title: 'Activities',
    icon: Sparkles,
    image: paintPlant,
    items: ['Photo frame painting and paint-and-plant corners', 'Tote bag, canvas, bracelet and cookie decorating stations', 'Sip-and-paint, crochet flowers, resin art and tea coaster activities']
  },
  {
    title: 'Return Gifts',
    icon: Gift,
    image: returnGift,
    items: ['Theme-matched curated gifting', 'Perfume, potpourri, candles, plants and personalized bottles', 'Age-group appropriate gifts that feel like keepsakes']
  },
  {
    title: 'Entertainment',
    icon: Music,
    image: kidsEntertainment,
    items: ['Magic shows, mascots and puppet shows for children', 'DJ, karaoke, stand-up comedy and movie nights for adults', 'Entertainment planned for every age group']
  },
  {
    title: 'Baby Shower Games',
    icon: Laugh,
    image: diaperGame,
    items: ['Create-a-bib and decorate-a-block stations', 'Bath salt, onesie and charm bracelet activities', 'Diaper pong, blindfolded diaper changing and bottle chug games']
  },
  {
    title: 'Community Programming',
    icon: CalendarDays,
    image: communityStage,
    items: ['Annual event calendars for clubs and cultural groups', 'Monthly member engagement experiences', 'Regular updates and coordination for active participation']
  }
];

const eventSpotlight = [
  { title: 'Interactive Activity Tables', image: totePainting, text: 'Hands-on corners that turn guests into participants.' },
  { title: 'Crochet Flower Making', image: crochetFlowers, text: 'Quiet, craft-led experiences for sophisticated social gatherings.' },
  { title: 'Kids Entertainment', image: mascotVisual, text: 'Mascots, games and performers planned around younger audiences.' },
  { title: 'Anniversary Decor', image: anniversaryDecor, text: 'Romantic backdrops, florals and milestone styling.' },
  { title: 'Live Perfume Bar', image: perfumeBar, text: 'Premium interactive stations for adult celebrations.' },
  { title: 'Baby Shower Activities', image: babyActivity, text: 'Creative stations and keepsake moments for parents-to-be.' },
  { title: 'Dahi Handi Event', image: dahiHandi, text: 'Community celebrations managed with stage, crowd and cultural flow.' },
  { title: 'Diwali Event', image: diwaliEvent, text: 'Festival-led experiences with decor, lighting and guest movement.' },
  { title: 'Retro Metro', image: retroMetro, text: 'Club events shaped around a strong theme and stage identity.' }
];

const activityIdeas = [
  'Photo frame painting',
  'Paint and plant',
  'Tote bag painting',
  'Canvas painting',
  'DIY bracelet making',
  'Cookie decorating',
  'Sip and paint',
  'Polaroid frame painting',
  'Crochet flower making',
  'Resin art tea coaster'
];

export default function SocialEventsPortfolio() {
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
                  link.href === '/social-events-portfolio'
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
              <img src={heroCelebration} alt="Social celebration decor by Event Brigade" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">Social Events Portfolio 2026</p>
                <h1 className="mt-4 max-w-2xl font-serif text-5xl leading-[0.95] text-ivory md:text-7xl">
                  Social celebrations made personal, seamless and memorable.
                </h1>
              </div>
            </div>

            <div className="relative p-7 md:p-10">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl border border-gold/35 bg-obsidian/70 text-gold shadow-glow">
                <Sparkles size={26} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-champagne">About The Portfolio</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory md:text-5xl">
                Unforgettable social experiences shaped around the client&apos;s style.
              </h2>
              <div className="mt-6 h-px w-28 bg-gradient-to-r from-gold to-transparent" />
              <div className="mt-7 space-y-5 text-base leading-8 text-smoke md:text-lg">
                <p>
                  Event Brigade plans intimate gatherings and grand celebrations with creativity, detail and
                  personalization at the center of the experience.
                </p>
                <p>
                  The social portfolio covers birthdays, anniversaries, baby showers and community events, with decor,
                  activities, gifting, entertainment and coordination rebuilt here as site content.
                </p>
              </div>
              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {[
                  ['4', 'Expertise areas'],
                  ['7', 'Process steps'],
                  ['10+', 'Activity ideas']
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-champagne/15 bg-obsidian/55 p-4">
                    <div className="font-serif text-3xl text-gold">{value}</div>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-smoke">{label}</p>
                  </div>
                ))}
              </div>
              <a href="#social-expertise" className="btn-primary mt-9">
                Explore Social Events <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </Reveal>

        <div id="social-expertise" className="mt-24">
          <SectionHeader
            eyebrow="Our Expertise"
            title="Social events organized by occasion and audience."
            text="The PDF's expertise areas are now presented as designed service cards using extracted portfolio visuals."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.05} className="group overflow-hidden rounded-[2rem] border border-champagne/20 bg-graphite shadow-soft transition duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-glow">
                  <div className="relative h-64 overflow-hidden">
                    <img src={item.image} alt={`${item.title} by Event Brigade`} loading={index < 2 ? 'eager' : 'lazy'} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                    <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl border border-gold/35 bg-obsidian/75 text-gold backdrop-blur">
                      <Icon size={24} />
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl leading-tight text-ivory">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-smoke">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="mt-24 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-champagne/20 bg-ivory/[0.035] shadow-soft">
            <img src={eventAtmosphere} alt="Outdoor social event atmosphere" className="h-full min-h-[500px] w-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/88 via-obsidian/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-champagne">The Process</p>
              <h2 className="mt-3 max-w-xl font-serif text-4xl leading-tight text-ivory">
                From idea to closure, every step is planned.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <Reveal key={step} delay={index * 0.04} className="glass-card p-6">
                <div className="mb-6 flex items-center justify-between">
                  <ClipboardCheck className="text-gold" size={27} />
                  <span className="rounded-full border border-champagne/20 px-4 py-2 text-xs font-semibold text-champagne">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-ivory">{step}</h3>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <SectionHeader
            eyebrow="Experience Modules"
            title="Decor, activities, gifting and entertainment rebuilt for the web."
            text="Instead of PDF pages, the social event services are organized into reusable event-planning modules."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experienceModules.map((module, index) => {
              const Icon = module.icon;
              return (
                <Reveal key={module.title} delay={index * 0.05} className="group overflow-hidden rounded-[2rem] border border-champagne/20 bg-graphite shadow-soft transition duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-glow">
                  <div className="relative h-56 overflow-hidden">
                    <img src={module.image} alt={`${module.title} social event module`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                    <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl border border-gold/35 bg-obsidian/75 text-gold backdrop-blur">
                      <Icon size={24} />
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 min-h-16 font-serif text-3xl leading-tight text-ivory">{module.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {module.items.map((item) => (
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
            eyebrow="Event Spotlight"
            title="Real social event moments from the portfolio."
            text="These visuals are embedded assets extracted from the social events PDF and placed inside the site's design system."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {eventSpotlight.map((item, index) => (
              <Reveal
                key={item.title}
                delay={(index % 4) * 0.04}
                className={`group relative overflow-hidden rounded-[1.5rem] border border-champagne/20 bg-graphite shadow-soft ${
                  index === 1 || index === 7 ? 'lg:col-span-2' : ''
                }`}
              >
                <img src={item.image} alt={`${item.title} by Event Brigade`} loading="lazy" className="h-80 w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/92 via-obsidian/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">Event Brigade</p>
                  <h3 className="mt-2 font-serif text-2xl text-ivory">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-smoke">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="glass-card p-7 md:p-8">
            <Paintbrush className="mb-6 text-gold" size={34} />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">Activity Ideas</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory">Interactive details that keep guests involved.</h2>
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
            <img src={communityStage} alt="Large community event stage by Event Brigade" loading="lazy" className="h-full min-h-[520px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/88 via-obsidian/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-champagne">Community Events</p>
              <h2 className="mt-3 max-w-xl font-serif text-4xl leading-tight text-ivory">Cultural calendars, club moments and shared celebration formats.</h2>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12 rounded-[2rem] border border-champagne/25 bg-ivory/[0.04] p-8 text-center shadow-glow backdrop-blur md:p-12">
          <PartyPopper className="mx-auto text-gold" size={34} />
          <p className="mx-auto mt-6 max-w-4xl font-serif text-3xl leading-tight text-ivory md:text-5xl">
            Social events with the warmth of a personal celebration and the structure of professional production.
          </p>
          <a href="/#contact" className="btn-primary mt-8">
            Plan A Social Event <ArrowRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
