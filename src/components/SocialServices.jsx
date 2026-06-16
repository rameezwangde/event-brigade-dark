import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Heart,
  Calendar,
  Gift,
  Star,
  Users,
  Award,
  MapPin,
  Smile,
  ChevronLeft,
  ChevronRight,
  Home,
  GraduationCap
} from 'lucide-react';
import Reveal from './Reveal.jsx';

// Import local premium assets
import socialHero from '../assets/social-curated/social-birthday-hero.jpg';
import socialBirthday from '../assets/social-curated/social-birthday-cake.jpg';
import socialAnniversary from '../assets/social-curated/social-anniversary-hero.jpg';
import socialBabyShower from '../assets/social-curated/social-baby-shower-decor.jpg';
import socialCommunity from '../assets/social-curated/social-community-stage.jpg';
import socialActivities from '../assets/social-curated/social-paint-plant.jpg';
import eventAtmosphere from '../assets/social-curated/social-event-atmosphere.jpg';
import socialGifts from '../assets/social-curated/social-return-gift.jpg';

// Luxury Header Helper for Social Services
function LuxuryHeader({ eyebrow, title, text, align = 'center' }) {
  return (
    <Reveal className={`max-w-4xl mx-auto mb-12 ${align === 'left' ? 'text-left' : 'text-center'}`}>
      <div className={`flex items-center gap-2 mb-3 ${align === 'left' ? 'justify-start' : 'justify-center'}`}>
        <span className="w-5 h-[1.5px] bg-[#D56A4A]/50" />
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#D56A4A]">{eyebrow}</p>
        <span className="w-5 h-[1.5px] bg-[#D56A4A]/50" />
      </div>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#222222] font-semibold leading-[1.2]">
        {title}
      </h2>
      {text && (
        <p className="mt-4 text-sm sm:text-base text-[#222222]/70 font-sans leading-relaxed max-w-2xl mx-auto">
          {text}
        </p>
      )}
    </Reveal>
  );
}

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
  gallery: [socialActivities, socialGifts, socialBabyShower, socialCommunity]
};

export default function SocialServices() {
  const [activeModule, setActiveModule] = useState(null);

  const serviceCards = [
    {
      title: 'Birthdays',
      description: 'Magical birthdays made unforgettable.',
      image: socialBirthday,
      icon: Gift
    },
    {
      title: 'Anniversaries',
      description: 'Celebrate love with elegance & style.',
      image: socialAnniversary,
      icon: Heart
    },
    {
      title: 'Baby Showers',
      description: 'Cherish the joy of new beginnings.',
      image: socialBabyShower,
      icon: Smile
    },
    {
      title: 'Housewarming',
      description: 'Welcome new beginnings with warmth.',
      image: eventAtmosphere,
      icon: Home
    },
    {
      title: 'Graduation Parties',
      description: 'Milestones achieved, memories celebrated.',
      image: socialActivities,
      icon: GraduationCap
    },
    {
      title: 'Community Events',
      description: 'Bringing communities closer together.',
      image: socialCommunity,
      icon: Users
    }
  ];

  const testimonials = [
    {
      quote: "Event Brigade made my mom's 50th birthday truly magical. Every detail was beyond perfect!",
      author: "Ananya Sharma",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      quote: "The teddy baby shower and custom onesie activity station kept our family smiling all day.",
      author: "Meera Kapoor",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      quote: "Managing a large community event with multiple resident coordinates was executed flawlessly.",
      author: "Rohan Singhal",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
    }
  ];

  return (
    <div
      className="relative w-full min-h-screen text-[#222222] font-sans overflow-x-hidden selection:bg-[#D56A4A]/20 pt-28 pb-16 bg-[#F9F5EF]"
    >
      <div className="relative max-w-7xl mx-auto px-5 z-10">

        {/* Main Section Header */}
        <LuxuryHeader
          eyebrow="Our Services"
          title="Curated Social Experiences"
          text="From intimate gatherings to milestone celebrations, we create experiences that bring people together and leave memories that last a lifetime."
        />

        {/* Dynamic Showcase Block */}
        <div className="mt-8">
          <Reveal
            id="social"
            className="overflow-hidden rounded-[24px] border border-[#C8A96B]/20 bg-[#FAF7F2] shadow-xl scroll-mt-28"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              {/* Left Column: Interactive Image Panel */}
              <div className="relative min-h-[460px] overflow-hidden lg:min-h-full">
                {/* Default Background */}
                <img
                  src={socialShowcase.hero}
                  alt="Social Services by Event Brigade"
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${activeModule !== null ? 'opacity-0 scale-100' : 'opacity-100 scale-105'
                    }`}
                />

                {/* Module Specific Backgrounds */}
                {socialShowcase.modules.map((module, moduleIndex) => (
                  <img
                    key={module.title}
                    src={module.image}
                    alt={module.title}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${activeModule === moduleIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                      }`}
                  />
                ))}

                {/* Image Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/80 via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-[#222222]/15 z-10" />

                {/* Floating Content Card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D56A4A] bg-black/40 px-3.5 py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
                    {socialShowcase.eyebrow}
                  </span>
                  <h3 className="mt-4 font-serif text-3xl sm:text-4xl text-white leading-snug font-semibold">
                    {socialShowcase.title}
                  </h3>
                  <a
                    href="/social-events-portfolio"
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, '', '/social-events-portfolio');
                    }}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D56A4A] hover:text-white transition-colors"
                  >
                    View Portfolio <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* Right Column: Interaction List */}
              <div className="flex flex-col justify-center p-6 sm:p-10 md:p-12">
                <p className="text-sm sm:text-base leading-relaxed text-[#222222]/75">{socialShowcase.text}</p>
                <div className="mt-8 divide-y divide-[#D56A4A]/15">
                  {socialShowcase.modules.map((module, moduleIndex) => {
                    const isHovered = activeModule === moduleIndex;
                    return (
                      <div
                        key={module.title}
                        onMouseEnter={() => setActiveModule(moduleIndex)}
                        onMouseLeave={() => setActiveModule(null)}
                        className="group cursor-pointer py-4 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-5">
                            <span className={`font-mono text-xs tracking-wider transition-colors duration-300 ${isHovered ? 'text-[#D56A4A]' : 'text-[#222222]/45'}`}>
                              {String(moduleIndex + 1).padStart(2, '0')}
                            </span>
                            <h4 className={`font-serif text-xl sm:text-2xl font-semibold transition-all duration-300 ${isHovered ? 'text-[#D56A4A] pl-2' : 'text-[#222222]'}`}>
                              {module.title}
                            </h4>
                          </div>
                          <div className={`h-1.5 w-1.5 rounded-full bg-[#D56A4A] transition-all duration-500 ${isHovered ? 'opacity-100 scale-125' : 'opacity-0 scale-50'}`} />
                        </div>

                        <div
                          className={`grid transition-all duration-500 ease-in-out ${isHovered ? 'grid-rows-[1fr] opacity-100 mt-3.5' : 'grid-rows-[0fr] opacity-0'
                            }`}
                        >
                          <div className="overflow-hidden">
                            <p className="pl-10 text-xs sm:text-sm leading-relaxed text-[#222222]/75">
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

            {/* Horizontal Auto Scrolling Ribbon */}
            <div className="overflow-hidden border-t border-[#C8A96B]/15 bg-[#FAF7F2]/50">
              <div className="auto-scroll-gallery flex w-max gap-0">
                {[...socialShowcase.gallery, ...socialShowcase.gallery].map((image, galleryIndex) => (
                  <img
                    key={`social-services-gallery-${galleryIndex}-${image}`}
                    src={image}
                    alt={`Social visual ${galleryIndex + 1}`}
                    loading="lazy"
                    className="h-36 w-[60vw] shrink-0 object-cover opacity-85 transition duration-300 hover:opacity-100 sm:w-[40vw] lg:w-80 border-r border-[#C8A96B]/10"
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* 4 Premium Features Grid */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 py-8 border-t border-b border-[#D56A4A]/12">
            {[
              { Icon: Heart, label: 'Personalized Experiences' },
              { Icon: Calendar, label: 'End-To-End Planning' },
              { Icon: Gift, label: 'Thoughtful Details' },
              { Icon: Star, label: 'Memories That Last Forever' }
            ].map((item, index) => {
              const { Icon, label } = item;
              const isOdd = index % 2 === 0;
              const isLast = index === 3;
              return (
                <div
                  key={label}
                  className={`flex flex-col items-center text-center px-2 py-4 border-[#C8A96B]/25 ${
                    isOdd ? 'border-r' : ''
                  } ${index < 2 ? 'border-b' : ''} md:border-b-0 md:border-r ${
                    isLast ? 'md:border-r-0' : ''
                  }`}
                >
                  <Icon size={20} className="text-[#D56A4A] mb-2" />
                  <span className="text-xs font-semibold text-[#222222]/90 leading-tight max-w-[115px] mx-auto block">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* SERVICES SECTION */}
        <div className="mt-28">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-5 h-[1px] bg-[#D56A4A]/50" />
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#D56A4A]">
                — OUR SOCIAL EVENT SERVICES —
              </p>
              <span className="w-5 h-[1px] bg-[#D56A4A]/50" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#222222] leading-[1.2] font-semibold">
              Celebrations Crafted Around <span className="font-script text-[#D56A4A] font-normal italic inline-block transform translate-y-1">You ♡</span>
            </h2>
          </Reveal>

          {/* 6 Capability cards grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Reveal
                  key={card.title}
                  delay={idx * 0.04}
                  className="group flex flex-col overflow-hidden rounded-[2rem] border border-[#C8A96B]/20 bg-[#FAF7F2] shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-md h-full"
                >
                  {/* Card Image */}
                  <div className="relative h-60 overflow-hidden rounded-t-[2rem]">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-103"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-7 pt-9 flex-grow flex flex-col justify-between relative">
                    {/* Overlapping White Circle Icon Badge */}
                    <div className="absolute left-6 -top-[22px] z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white border border-[#D56A4A]/30 shadow text-[#D56A4A]">
                      <Icon size={18} />
                    </div>

                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#222222] font-semibold leading-snug text-left">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#222222]/75 text-left">
                        {card.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-[#C8A96B]/15 flex items-center justify-end">
                      <ArrowRight size={18} className="text-[#D56A4A] transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>



      </div>

      {/* COMBINED STATS & TESTIMONIAL BAR */}
      <div className="border-t border-[#D56A4A]/15 bg-[#FAF7F2] py-10 mt-16">
        {/* STATS SECTION ROW */}
        <div className="mx-auto max-w-7xl px-5 border-b border-[#D56A4A]/10 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-2 text-[#D56A4A] mb-1.5">
                <Users size={18} />
                <span className="font-serif text-2xl sm:text-3xl font-bold">2000+</span>
              </div>
              <span className="text-[11px] font-bold tracking-wider text-[#222222]/60 uppercase">Events Planned</span>
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-2 text-[#D56A4A] mb-1.5">
                <Award size={18} />
                <span className="font-serif text-2xl sm:text-3xl font-bold">15+</span>
              </div>
              <span className="text-[11px] font-bold tracking-wider text-[#222222]/60 uppercase">Years of Experience</span>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-2 text-[#D56A4A] mb-1.5">
                <MapPin size={18} />
                <span className="font-serif text-2xl sm:text-3xl font-bold">100+</span>
              </div>
              <span className="text-[11px] font-bold tracking-wider text-[#222222]/60 uppercase">Cities Served</span>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-2 text-[#D56A4A] mb-1.5">
                <Smile size={18} />
                <span className="font-serif text-2xl sm:text-3xl font-bold">50k+</span>
              </div>
              <span className="text-[11px] font-bold tracking-wider text-[#222222]/60 uppercase">Smiles Delivered</span>
            </div>
          </div>
        </div>

        {/* TESTIMONIALS SECTION ROW */}
        <div className="mx-auto max-w-7xl px-5 pt-10">
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x scroll-smooth no-scrollbar">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="snap-start shrink-0 w-[85vw] sm:w-[350px] rounded-2xl border border-[#D56A4A]/15 bg-white p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-4xl text-[#D56A4A]/25 leading-none block mb-1">“</span>
                  <p className="font-sans text-sm sm:text-base text-[#222222] italic leading-relaxed">
                    {t.quote}
                  </p>
                </div>
                <div className="mt-6 border-t border-[#D56A4A]/10 pt-4 flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full border border-[#D56A4A]/25 shadow-sm">
                    <img
                      src={t.image}
                      alt={t.author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="font-sans text-xs sm:text-sm font-bold text-[#222222]">
                    – {t.author}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
