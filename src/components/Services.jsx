import React from 'react';
import { Check, PartyPopper, Sparkles, UsersRound } from 'lucide-react';
import { services, weddingShowcase } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';

import corporateHero from '../assets/corporate-extracted/corporate-p15-xref1070.jpg';
import corporateAwards from '../assets/corporate-extracted/corporate-p08-xref843.jpg';
import corporateLaunch from '../assets/corporate-extracted/corporate-p14-xref1054.jpg';
import corporateConference from '../assets/corporate-extracted/corporate-p17-xref1109.jpg';
import corporateFamily from '../assets/corporate-extracted/corporate-p15-xref1073.jpg';
import corporatePartner from '../assets/corporate-extracted/corporate-p14-xref1046.jpg';
import socialHero from '../assets/social-curated/social-birthday-hero.jpg';
import socialBirthday from '../assets/social-curated/social-birthday-cake.jpg';
import socialAnniversary from '../assets/social-curated/social-anniversary-hero.jpg';
import socialBabyShower from '../assets/social-curated/social-baby-shower-decor.jpg';
import socialCommunity from '../assets/social-curated/social-community-stage.jpg';
import socialActivities from '../assets/social-curated/social-paint-plant.jpg';
import socialGifts from '../assets/social-curated/social-return-gift.jpg';

const icons = [Sparkles, UsersRound, PartyPopper];

const serviceShowcases = [
  {
    eyebrow: weddingShowcase.eyebrow,
    title: weddingShowcase.title,
    text: weddingShowcase.text,
    hero: weddingShowcase.gallery[0],
    href: '/wedding-portfolio',
    modules: weddingShowcase.modules,
    gallery: weddingShowcase.gallery
  },
  {
    eyebrow: 'Corporate Services',
    title: 'Corporate events engineered for impact.',
    text:
      'From annual days and launches to conferences, partner meets and outdoor experiences, Event Brigade brings together strategy, technical production, hospitality and on-ground execution.',
    hero: corporateHero,
    href: '/corporate-portfolio',
    modules: [
      {
        title: 'Annual Days & Awards Night',
        text: 'Brand-aligned themes, immersive stage design, lighting, entertainment, recognition moments and curated F&B.',
        image: corporateAwards
      },
      {
        title: 'Product Launches',
        text: 'Concept, reveal moments, registration, hospitality, LED walls, AV, lighting and special effects.',
        image: corporateLaunch
      },
      {
        title: 'Conference',
        text: 'Stage design, seating layout, branding, check-in, speaker coordination and smooth session flow.',
        image: corporateConference
      },
      {
        title: 'Family Days & Theme Parties',
        text: 'Vibrant themes, kids zones, games, live performances, food options and comfortable guest experiences.',
        image: corporateFamily
      }
    ],
    gallery: [corporateAwards, corporateLaunch, corporateConference, corporatePartner]
  },
  {
    eyebrow: 'Social Event Services',
    title: 'Social celebrations made personal, seamless and memorable.',
    text:
      'Birthdays, anniversaries, baby showers and community events are shaped with decor, activities, gifting, entertainment and a clear planning process.',
    hero: socialHero,
    href: '/social-events-portfolio',
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
  }
];

export default function Services() {
  return (
    <section id="services" className="section relative overflow-hidden bg-charcoal">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(216,183,106,0.16),transparent_58%)]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Our Services"
          title="Tailored solutions for every occasion."
          text="Weddings, corporate experiences, social celebrations and artist-led entertainment delivered with premium planning discipline."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[index];
            const portfolioHref =
              service.title === 'Corporate Events'
                ? '/corporate-portfolio'
                : service.title === 'Weddings'
                  ? '/wedding-portfolio'
                  : service.title === 'Social Events'
                    ? '/social-events-portfolio'
                    : undefined;
            const CardTag = portfolioHref ? 'a' : 'article';
            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <CardTag
                  href={portfolioHref}
                  className="group service-card"
                  aria-label={portfolioHref ? `Open ${service.title.toLowerCase()} portfolio` : undefined}
                >
                  <img src={service.image} alt={`${service.title} by Event Brigade`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />
                  <div className="relative z-10 mt-auto p-7 md:p-9">
                    <div className="mb-6 grid h-14 w-14 place-items-center rounded-full border border-gold/40 bg-obsidian/60 text-gold shadow-glow backdrop-blur">
                      <Icon size={28} />
                    </div>
                    <h3 className="font-serif text-4xl text-ivory">{service.title}</h3>
                    <p className="mt-4 max-w-xl leading-7 text-ivory/75">{service.text}</p>
                    {portfolioHref && (
                      <span className="mt-6 inline-flex text-sm font-bold uppercase tracking-[0.14em] text-gold">
                        View Portfolio
                      </span>
                    )}
                  </div>
                </CardTag>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-8 space-y-10 md:mt-10">
          {serviceShowcases.map((showcase, index) => (
            <Reveal
              key={showcase.eyebrow}
              delay={index * 0.08}
              className="overflow-hidden rounded-[2rem] border border-champagne/20 bg-obsidian shadow-soft"
            >
              <div className={`grid lg:grid-cols-[0.9fr_1.1fr] ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="relative min-h-[420px]">
                  <img
                    src={showcase.hero}
                    alt={`${showcase.eyebrow} by Event Brigade`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-obsidian/55 md:bg-obsidian/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-obsidian/35 md:from-obsidian/95 md:via-obsidian/35 md:to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                    <div className="rounded-[1.25rem] border border-champagne/10 bg-obsidian/78 p-5 shadow-soft backdrop-blur-sm md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-champagne drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">{showcase.eyebrow}</p>
                      <h3 className="mt-3 font-serif text-4xl leading-tight text-ivory drop-shadow-[0_3px_18px_rgba(0,0,0,0.95)] md:text-5xl">{showcase.title}</h3>
                      <a href={showcase.href} className="mt-6 inline-flex text-sm font-bold uppercase tracking-[0.14em] text-gold drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                      View Portfolio
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-7 md:p-10">
                  <p className="text-base leading-8 text-smoke md:text-lg">{showcase.text}</p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {showcase.modules.map((module) => (
                      <article key={module.title} className="overflow-hidden rounded-2xl border border-champagne/15 bg-ivory/[0.035]">
                        <img src={module.image} alt={`${module.title} by Event Brigade`} loading="lazy" className="h-36 w-full object-cover" />
                        <div className="p-5">
                          <h4 className="font-serif text-2xl text-ivory">{module.title}</h4>
                          <p className="mt-3 text-sm leading-6 text-smoke">{module.text}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 border-t border-champagne/15 md:grid-cols-4">
                {showcase.gallery.map((item, galleryIndex) => {
                  const image = typeof item === 'string' ? item : item.image;
                  const position = typeof item === 'string' ? 'center center' : item.position;

                  return (
                    <img
                      key={`${showcase.eyebrow}-${galleryIndex}`}
                      src={image}
                      alt={`${showcase.eyebrow} visual ${galleryIndex + 1}`}
                      loading="lazy"
                      style={{ objectPosition: position }}
                      className="h-44 w-full object-cover opacity-80 transition hover:opacity-100"
                    />
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={`${service.title}-details`} delay={index * 0.06} className="glass-card p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">Services we provide</p>
              <h3 className="mt-3 font-serif text-3xl text-ivory">{service.title}</h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.servicesWeProvide.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-smoke">
                    <Check className="mt-1 shrink-0 text-gold" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 rounded-[2rem] border border-champagne/25 bg-ivory/[0.04] p-8 text-center shadow-glow backdrop-blur md:p-12">
          <p className="font-serif text-3xl text-ivory md:text-5xl">Have an event in mind? Let&apos;s make it extraordinary.</p>
          <a href="#contact" className="btn-primary mt-8 inline-flex">Plan An Event</a>
        </Reveal>
      </div>
    </section>
  );
}
