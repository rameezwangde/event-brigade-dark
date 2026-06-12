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
import { services } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';

import socialHero from '../assets/social-curated/social-birthday-hero.jpg';
import socialBirthday from '../assets/social-curated/social-birthday-cake.jpg';
import socialAnniversary from '../assets/social-curated/social-anniversary-hero.jpg';
import socialBabyShower from '../assets/social-curated/social-baby-shower-decor.jpg';
import socialCommunity from '../assets/social-curated/social-community-stage.jpg';
import socialActivities from '../assets/social-curated/social-paint-plant.jpg';
import socialGifts from '../assets/social-curated/social-return-gift.jpg';

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

const socialShowcase = {
  eyebrow: 'Social Event Services',
  title: 'Social celebrations made personal, seamless and memorable.',
  text: 'Birthdays, anniversaries, baby showers and community events are shaped with decor, activities, gifting, entertainment and a clear planning process.',
  hero: socialHero,
  modules: [
    {
      title: 'Birthdays',
      text: 'Theme-led celebrations for kids and adults, from playful balloon installations to elegant party styling.',
      image: socialBirthday
    },
    {
      title: 'Anniversaries',
      text: 'Romantic decor, milestone storytelling and warm guest experiences built around shared history.',
      image: socialAnniversary
    },
    {
      title: 'Baby Showers',
      text: 'Coordinated backdrops, festive decor, creative stations, games and keepsake moments.',
      image: socialBabyShower
    },
    {
      title: 'Community Events',
      text: 'Cultural calendars, club moments, festival formats and member engagement experiences.',
      image: socialCommunity
    }
  ],
  gallery: [
    { image: socialActivities, position: 'center center' },
    { image: socialGifts, position: 'center 42%' },
    { image: socialBabyShower, position: 'center 48%' },
    { image: socialCommunity, position: 'center 72%' }
  ]
};

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

export default function SocialServices() {
  const [activeModule, setActiveModule] = React.useState(null);

  // Find social data
  const socialData = services.find(s => s.title === 'Social Events') || { servicesWeProvide: [] };

  return (
    <section className="relative overflow-hidden bg-charcoal pb-12 pt-32 md:pb-16 md:pt-40">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_58%)]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Our Services"
          title="Personal celebrations, seamlessly managed."
          text="We create custom experiences that bring families, friends, and communities together in warmth and style."
          className="max-w-5xl"
        />

        {/* Showcase Block */}
        <div className="mt-12 space-y-10">
          <Reveal
            id="social"
            className="overflow-hidden rounded-[2rem] border border-champagne/20 bg-obsidian shadow-soft scroll-mt-28"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[460px] overflow-hidden lg:min-h-full">
                {/* Default Background */}
                <img
                  src={socialShowcase.hero}
                  alt="Social Services by Event Brigade"
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    activeModule !== null ? 'opacity-0 scale-100' : 'opacity-100 scale-105'
                  }`}
                />

                {/* Module Specific Backgrounds */}
                {socialShowcase.modules.map((module, moduleIndex) => (
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
                      {socialShowcase.eyebrow}
                    </p>
                    <h3 className="mt-3 font-serif text-4xl leading-tight text-ivory drop-shadow-[0_3px_18px_rgba(0,0,0,0.95)] md:text-5xl">
                      {socialShowcase.title}
                    </h3>
                    <a href="/social-events-portfolio" className="mt-6 inline-flex text-sm font-bold uppercase tracking-[0.14em] text-gold drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                      View Portfolio
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 md:p-10">
                <p className="text-base leading-8 text-smoke md:text-lg">{socialShowcase.text}</p>
                <div className="mt-8 divide-y divide-champagne/10">
                  {socialShowcase.modules.map((module, moduleIndex) => {
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
                {socialShowcase.gallery.concat(socialShowcase.gallery).map((item, galleryIndex) => {
                  const image = typeof item === 'string' ? item : item.image;
                  const position = typeof item === 'string' ? 'center center' : item.position;

                  return (
                    <img
                      key={`social-showcase-${galleryIndex}-${image}`}
                      src={image}
                      alt={`Social visual ${galleryIndex + 1}`}
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

        {/* Expertise Section */}
        <div className="mt-24">
          <SectionHeader
            eyebrow="Our Expertise"
            title="Social events organized by occasion and audience."
            text="Designed service cards for celebrations, family milestones, and community-led gatherings."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.05} className="group overflow-hidden rounded-[2rem] border border-champagne/20 bg-graphite shadow-soft transition duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-glow h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img src={item.image} alt={`${item.title} by Event Brigade`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                    <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl border border-gold/35 bg-obsidian/75 text-gold backdrop-blur">
                      <Icon size={24} />
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-start">
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

        {/* Process Flow */}
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
              <Reveal key={step} delay={index * 0.04} className="glass-card p-6 h-full flex flex-col justify-between">
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

        {/* Experience Modules Grid */}
        <div className="mt-24">
          <SectionHeader
            eyebrow="Experience Modules"
            title="Decor, activities, gifting and entertainment rebuilt for the web."
            text="Instead of static sheets, event services are organized into reusable planning modules."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experienceModules.map((module, index) => {
              const Icon = module.icon;
              return (
                <Reveal key={module.title} delay={index * 0.05} className="group overflow-hidden rounded-[2rem] border border-champagne/20 bg-graphite shadow-soft transition duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-glow h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img src={module.image} alt={`${module.title} social event module`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                    <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl border border-gold/35 bg-obsidian/75 text-gold backdrop-blur">
                      <Icon size={24} />
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-start">
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

        {/* Event Spotlight Grid */}
        <div className="mt-24">
          <SectionHeader
            eyebrow="Event Spotlight"
            title="Real social event moments from the portfolio."
            text="These visuals showcase real Event Brigade celebrations and activities organized recently."
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

        {/* Activity Ideas Section */}
        <div className="mt-24 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="glass-card p-7 md:p-8 h-full flex flex-col justify-between">
            <div>
              <Paintbrush className="mb-6 text-gold" size={34} />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">Activity Ideas</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory">Interactive details that keep guests involved.</h2>
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
            <img src={communityStage} alt="Large community event stage by Event Brigade" loading="lazy" className="h-full min-h-[520px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/88 via-obsidian/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-champagne">Community Events</p>
              <h2 className="mt-3 max-w-xl font-serif text-4xl leading-tight text-ivory">Cultural calendars, club moments and shared celebration formats.</h2>
            </div>
          </Reveal>
        </div>

        {/* Services We Provide Details Card */}
        <div className="mt-24">
          <Reveal
            className="group relative overflow-hidden rounded-[2rem] border border-champagne/15 bg-graphite/40 p-8 shadow-soft transition-all duration-500 hover:border-gold/50 hover:bg-graphite/70 hover:shadow-glow"
          >
            <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-gold-radial opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30 pointer-events-none" />

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne/80 transition-colors duration-300 group-hover:text-champagne">
              Services we provide
            </p>
            <h3 className="mt-4 font-serif text-3xl font-semibold text-ivory transition-colors duration-300 group-hover:text-gold md:text-4xl">
              Social Celebrations & Get-Togethers
            </h3>
            <div className="mt-5 h-px w-24 bg-gradient-to-r from-gold/50 to-transparent transition-all duration-500 group-hover:w-32 group-hover:from-gold" />

            <ul className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {socialData.servicesWeProvide.map((item) => (
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
          <PartyPopper className="mx-auto text-gold" size={34} />
          <p className="mx-auto mt-6 max-w-4xl font-serif text-3xl leading-tight text-ivory md:text-5xl">
            Social events with the warmth of a personal celebration and the structure of professional production.
          </p>
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/contact');
            }}
            className="btn-primary mt-8 inline-flex"
          >
            Plan A Social Event
          </a>
        </Reveal>
      </div>
    </section>
  );
}
