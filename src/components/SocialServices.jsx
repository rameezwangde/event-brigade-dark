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
import birthdayDecor from '../assets/social-curated/social-birthday-decor.jpg';
import perfumeBar from '../assets/social-curated/social-perfume-bar.jpg';
import babyActivity from '../assets/social-curated/social-baby-activity.jpg';
import communityHero from '../assets/social-curated/social-community-hero.jpg';

export default function SocialServices() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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

  const galleryImages = [
    { image: birthdayDecor, title: 'Birthday Setup' },
    { image: socialBirthday, title: 'Celebration Cake' },
    { image: eventAtmosphere, title: 'Luxury Table Styling' },
    { image: perfumeBar, title: 'Elegant Hospitality' },
    { image: babyActivity, title: 'Happy Guests' }
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

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="relative w-full min-h-screen text-[#222222] font-sans overflow-x-hidden selection:bg-[#D56A4A]/20 pt-28 pb-16 bg-[#F9F5EF]"
    >
      <div className="relative max-w-7xl mx-auto px-5 z-10">

        {/* HERO SECTION */}
        <Reveal className="mt-8 mb-24">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* LEFT SIDE */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-5 h-[1.5px] bg-[#D56A4A]/60" />
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.34em] text-[#D56A4A]">
                  SOCIAL EVENTS ♡
                </p>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#222222] leading-[1.15] font-semibold">
                Life's Best Moments,<br />
                Beautifully <span className="font-script text-[#D56A4A] italic font-normal inline-block transform translate-y-1">Celebrated. ♡</span>
              </h1>

              <p className="mt-6 text-sm sm:text-base md:text-lg text-[#222222]/75 leading-relaxed max-w-xl">
                From intimate gatherings to milestone celebrations, we create experiences that bring people together and leave memories that last a lifetime.
              </p>

              <div className="mt-8">
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/contact');
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D56A4A] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#F9F5EF] shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#E07A5F] hover:shadow-xl"
                >
                  Explore Our Services →
                </a>
              </div>

              {/* 4 Premium Feature Icons */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#D56A4A]/12 divide-y-0 divide-x-0 md:divide-x divide-[#C8A96B]/25">
                <div className="flex flex-col items-center text-center px-1">
                  <Heart size={20} className="text-[#D56A4A] mb-2" />
                  <span className="text-xs font-semibold text-[#222222]/90 leading-tight">Personalized Experiences</span>
                </div>
                <div className="flex flex-col items-center text-center px-1">
                  <Calendar size={20} className="text-[#D56A4A] mb-2" />
                  <span className="text-xs font-semibold text-[#222222]/90 leading-tight">End-To-End Planning</span>
                </div>
                <div className="flex flex-col items-center text-center px-1">
                  <Gift size={20} className="text-[#D56A4A] mb-2" />
                  <span className="text-xs font-semibold text-[#222222]/90 leading-tight">Thoughtful Details</span>
                </div>
                <div className="flex flex-col items-center text-center px-1">
                  <Star size={20} className="text-[#D56A4A] mb-2" />
                  <span className="text-xs font-semibold text-[#222222]/90 leading-tight">Memories That Last Forever</span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] sm:aspect-[1.3] overflow-hidden rounded-[2rem] shadow-2xl border border-[#C8A96B]/15">
                <img
                  src={socialHero}
                  alt="Luxury birthday social celebration dinner setup"
                  className="h-full w-full object-cover"
                />
                {/* Subtle Image Fade to Content side */}
                <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#F9F5EF] via-[#F9F5EF]/10 to-transparent pointer-events-none" />
                
                {/* Visual Accent */}
                <div className="absolute bottom-4 right-4 z-20 rounded-2xl border border-[#F9F5EF]/20 bg-[#FAF7F2]/90 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-[#222222] shadow">
                  ✨ Elegant Hospitality Setup
                </div>
              </div>
            </div>
          </div>
        </Reveal>

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
                    
                    {/* Overlapping White Circle Icon Badge */}
                    <div className="absolute left-6 -bottom-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white border border-[#D56A4A]/30 shadow text-[#D56A4A]">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-7 pt-9 flex-grow flex flex-col justify-between">
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

        {/* PORTFOLIO SHOWCASE SECTION */}
        <div className="mt-32">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* LEFT SIDE */}
            <div className="lg:col-span-4 flex flex-col text-left">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-[1.5px] bg-[#D56A4A]/60" />
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#D56A4A]">
                  MOMENTS WE'VE CREATED
                </p>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#222222] leading-[1.2] font-semibold">
                Designed Around People.<br />
                Built Around <span className="font-script text-[#D56A4A] font-normal italic inline-block transform translate-y-1">Memories.</span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-[#222222]/70 leading-relaxed max-w-md">
                Every smile, every floral installation, and every candlelit table styling represents a story that was planned with dedication.
              </p>

              <div className="mt-8">
                <a
                  href="/social-events-portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/social-events-portfolio');
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D56A4A] px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#D56A4A] hover:bg-[#D56A4A] hover:text-[#F9F5EF] transition-all duration-300"
                >
                  VIEW OUR PORTFOLIO →
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: Horizontal row of 5 images */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {galleryImages.map((item, index) => (
                  <Reveal
                    key={item.title}
                    delay={index * 0.04}
                    className="overflow-hidden rounded-2xl border border-[#C8A96B]/20 bg-[#FAF7F2] shadow-sm group cursor-pointer"
                  >
                    <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* COMBINED STATS & TESTIMONIAL BAR */}
      <div className="border-t border-[#D56A4A]/15 bg-[#FAF7F2] py-10 mt-32">
        <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-12 gap-8 items-center">
          
          {/* STATS SECTION (col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
            
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2 text-[#D56A4A] mb-1.5">
                <Users size={18} />
                <span className="font-serif text-2xl sm:text-3xl font-bold">2000+</span>
              </div>
              <span className="text-[11px] font-bold tracking-wider text-[#222222]/60 uppercase">Events Planned</span>
            </div>
            
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2 text-[#D56A4A] mb-1.5">
                <Award size={18} />
                <span className="font-serif text-2xl sm:text-3xl font-bold">15+</span>
              </div>
              <span className="text-[11px] font-bold tracking-wider text-[#222222]/60 uppercase">Years of Experience</span>
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2 text-[#D56A4A] mb-1.5">
                <MapPin size={18} />
                <span className="font-serif text-2xl sm:text-3xl font-bold">100+</span>
              </div>
              <span className="text-[11px] font-bold tracking-wider text-[#222222]/60 uppercase">Cities Served</span>
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2 text-[#D56A4A] mb-1.5">
                <Smile size={18} />
                <span className="font-serif text-2xl sm:text-3xl font-bold">50k+</span>
              </div>
              <span className="text-[11px] font-bold tracking-wider text-[#222222]/60 uppercase">Smiles Delivered</span>
            </div>

          </div>

          {/* VERTICAL DIVIDER */}
          <div className="hidden lg:block h-16 w-px bg-[#C8A96B]/25 lg:col-span-1 justify-self-center" />

          {/* TESTIMONIAL SLIDER (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col text-left relative">
            
            {/* Quotation text */}
            <div className="flex gap-3 items-start">
              <span className="font-serif text-4xl text-[#D56A4A]/40 leading-none">“</span>
              <div className="flex-grow">
                <p className="font-sans text-sm md:text-base text-[#222222]/85 italic leading-relaxed">
                  {testimonials[activeTestimonial].quote}
                </p>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full border border-[#D56A4A]/25 shadow-sm">
                      <img
                        src={testimonials[activeTestimonial].image}
                        alt={testimonials[activeTestimonial].author}
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                    <span className="font-sans text-xs font-bold text-[#222222]">
                      – {testimonials[activeTestimonial].author}
                    </span>
                  </div>

                  {/* Slider Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrevTestimonial}
                      className="grid h-7 w-7 place-items-center rounded-full border border-[#D56A4A]/25 bg-white text-[#D56A4A] transition hover:bg-[#D56A4A] hover:text-[#F9F5EF]"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextTestimonial}
                      className="grid h-7 w-7 place-items-center rounded-full border border-[#D56A4A]/25 bg-white text-[#D56A4A] transition hover:bg-[#D56A4A] hover:text-[#F9F5EF]"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
