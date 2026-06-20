import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Heart,
  Calendar,
  Gift,
  Star,
  Users,
  Smile,
  ChevronLeft,
  ChevronRight,
  Home,
  GraduationCap,
  X,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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

// Dynamically generate the 38 social event slide pages
const socialBookletPages = Array.from({ length: 38 }, (_, i) => {
  const pageNum = String(i + 1).padStart(2, '0');
  return {
    full: new URL(`../assets/social-events-portfolio/social-page-${pageNum}.jpg`, import.meta.url).href,
    thumb: new URL(`../assets/social-events-portfolio-thumbs/social-page-${pageNum}.jpg`, import.meta.url).href
  };
});

// Dynamically glob all files in the vaani folder
const vaaniGlob = import.meta.glob('../assets/vaani/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true });
const vaaniImages = Object.values(vaaniGlob).map((mod) => mod.default || mod);
const vaaniHero = vaaniGlob['../assets/vaani/DSC00018.JPG']?.default || vaaniGlob['../assets/vaani/DSC00018.JPG'] || socialBirthday;

// Luxury Social Projects List
const socialProjects = [
  {
    id: 1,
    number: '01',
    title: 'Milestone 50 Years of Life.',
    subtitle: "Kunal's 50th Celebration",
    tag: 'Birthdays',
    categories: ['Birthdays'],
    description: 'A grand golden themed celebration with interactive photo walls, custom stage lighting, and curated hospitality details.',
    image: socialBirthday,
    layout: 'right',
    location: 'JW Marriott, Pune',
    date: 'Dec 2025',
    guests: '150 Guests',
    pageRange: [0, 8] // Pages 1 to 9
  },
  {
    id: 2,
    number: '02',
    title: 'Welcome to the World Little One.',
    subtitle: 'Teddy Baby Shower',
    tag: 'Baby Showers',
    categories: ['Baby Showers'],
    description: 'Pastel balloon arches, customized Onesie-decorating tables, and teddy-themed photobooths made this baby shower a cozy family gathering full of warmth and laughter.',
    image: socialBabyShower,
    layout: 'left',
    location: 'Conrad Grand Room, Pune',
    date: 'Jan 2026',
    guests: '120 Guests',
    pageRange: [9, 16] // Pages 10 to 17
  },
  {
    id: 3,
    number: '03',
    title: 'Twenty-Five Years of Shared Love.',
    subtitle: 'The Silver Jubilee Soiree',
    tag: 'Anniversaries',
    categories: ['Anniversaries'],
    description: 'Designed around silver coordinates, ambient candelabras, and live jazz performances. A celebration honoring shared milestones and beautiful family stories.',
    image: socialAnniversary,
    layout: 'right',
    location: 'JW Marriott, Pune',
    date: 'Feb 2026',
    guests: '150 Guests',
    pageRange: [17, 24] // Pages 18 to 25
  },
  {
    id: 4,
    number: '04',
    title: 'Cultural Beats & Festival Rhythm.',
    subtitle: 'The Grand Diwali Celebration',
    tag: 'Fests & Community Events',
    categories: ['Fests & Community Events'],
    description: 'Connecting community spaces with immersive drapes, lighting towers, a high-spec main stage, and structured guest flows for festival operations.',
    image: socialCommunity,
    layout: 'left',
    location: 'Nyati County lawns, Pune',
    date: 'Nov 2025',
    guests: '800 Guests',
    pageRange: [25, 37] // Pages 26 to 38
  },
  {
    id: 5,
    number: '05',
    title: 'A Vibrant Birthday Wonderland.',
    subtitle: "Vaani's Birthday Celebration",
    tag: 'Birthdays',
    categories: ['Birthdays'],
    description: 'A magical celebration designed and managed for Vaani, filled with premium floral drapes, custom themes, and interactive game counters.',
    image: vaaniHero,
    layout: 'right',
    location: 'JW Marriott, Pune',
    date: 'April 2026',
    guests: '150 Guests',
    isRawGallery: true,
    images: vaaniImages
  }
];


// Luxury Header Helper for Social Services
function LuxuryHeader({ eyebrow, title, text, align = 'center' }) {
  return (
    <Reveal className={`max-w-4xl mx-auto mb-12 ${align === 'left' ? 'text-left' : 'text-center'}`}>
      <div className={`flex items-center gap-2.5 mb-3.5 ${align === 'left' ? 'justify-start' : 'justify-center'}`}>
        <span className="w-8 h-[1.5px] bg-[#D56A4A]/50" />
        <p className="text-base sm:text-lg font-semibold uppercase tracking-[0.34em] text-[#D56A4A]">{eyebrow}</p>
        <span className="w-8 h-[1.5px] bg-[#D56A4A]/50" />
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
  const [activeProject, setActiveProject] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const openLightbox = (project) => {
    setActiveProject(project);
    setCurrentSlideIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveProject(null);
    document.body.style.overflow = '';
  };

  const nextSlide = (rangeLength) => {
    setCurrentSlideIndex((prev) => (prev === rangeLength - 1 ? 0 : prev + 1));
  };

  const prevSlide = (rangeLength) => {
    setCurrentSlideIndex((prev) => (prev === 0 ? rangeLength - 1 : prev - 1));
  };

  const getActiveSlides = () => {
    if (!activeProject) return [];
    if (activeProject.isRawGallery) {
      return activeProject.images.map((img) => ({
        full: img,
        thumb: img
      }));
    }
    const [start, end] = activeProject.pageRange;
    return socialBookletPages.slice(start, end + 1);
  };
  const activeSlides = getActiveSlides();

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
                  className="group flex flex-col overflow-hidden rounded-[2rem] border border-[#C8A96B]/20 bg-[#FAF7F2] shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-md h-full cursor-pointer"
                  onClick={() => {
                    const projectMap = {
                      'Birthdays': "Kunal's 50th Celebration",
                      'Anniversaries': 'The Silver Jubilee Soiree',
                      'Baby Showers': 'Teddy Baby Shower',
                      'Community Events': 'The Grand Diwali Celebration'
                    };
                    const targetTitle = projectMap[card.title];
                    if (targetTitle) {
                      const proj = socialProjects.find(p => p.subtitle === targetTitle);
                      if (proj) {
                        openLightbox(proj);
                      }
                    }
                  }}
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



      {/* Booklet Modal / Lightbox for Kunal's 50th Birthday Celebration */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#050505]/80 backdrop-blur-md p-4 md:p-6 lg:p-8"
            onClick={closeLightbox}
          >
            {/* Header Details */}
            <div className="max-w-7xl w-full mx-auto flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
              <div className="text-white text-left">
                <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.34em] text-[#D56A4A]">
                  {activeProject.tag} — BOOKLET {activeProject.number}
                </p>
                {activeProject.tag === 'Birthdays' ? (
                  <div className="flex items-center gap-4 mt-2" onClick={(e) => e.stopPropagation()}>
                    <button
                      type="button"
                      onClick={() => {
                        const proj = socialProjects.find(p => p.subtitle === "Kunal's 50th Celebration");
                        if (proj) {
                          setActiveProject(proj);
                          setCurrentSlideIndex(0);
                        }
                      }}
                      className={`font-serif text-base sm:text-xl transition pb-1 ${
                        activeProject.subtitle === "Kunal's 50th Celebration"
                          ? 'text-[#D56A4A] border-b-2 border-[#D56A4A] font-semibold'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      Kunal's 50th
                    </button>
                    <span className="text-white/25">|</span>
                    <button
                      type="button"
                      onClick={() => {
                        const proj = socialProjects.find(p => p.subtitle === "Vaani's Birthday Celebration");
                        if (proj) {
                          setActiveProject(proj);
                          setCurrentSlideIndex(0);
                        }
                      }}
                      className={`font-serif text-base sm:text-xl transition pb-1 ${
                        activeProject.subtitle === "Vaani's Birthday Celebration"
                          ? 'text-[#D56A4A] border-b-2 border-[#D56A4A] font-semibold'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      Vaani's Birthday
                    </button>
                  </div>
                ) : (
                  <h3 className="font-serif text-xl sm:text-2xl mt-1 text-white">
                    {activeProject.subtitle}
                  </h3>
                )}
              </div>

              <div className="flex items-center gap-6">
                <span className="font-serif text-sm font-semibold text-[#D56A4A]">
                  {String(currentSlideIndex + 1).padStart(2, '0')} / {String(activeSlides.length).padStart(2, '0')}
                </span>

                <button
                  type="button"
                  onClick={closeLightbox}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-[#151515] text-[#D56A4A] transition hover:bg-[#D56A4A] hover:text-[#050505]"
                  aria-label="Close booklet"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Slide Showcase Arena */}
            <div className="flex-grow flex items-center justify-center max-w-5xl w-full mx-auto my-4 relative" onClick={(e) => e.stopPropagation()}>
              
              {/* Left Arrow */}
              <button
                type="button"
                onClick={() => prevSlide(activeSlides.length)}
                className="absolute left-2 md:-left-12 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-[#151515]/90 text-[#D56A4A] backdrop-blur transition hover:border-[#D56A4A] hover:bg-[#D56A4A] hover:text-[#050505]"
                aria-label="Previous page"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Slide Image Box */}
              <div className="w-full h-[62vh] md:h-[68vh] rounded-2xl border border-white/10 bg-[#050505] p-2 sm:p-4 shadow-2xl flex items-center justify-center overflow-hidden relative">
                {/* Frame borders */}
                <div className="absolute inset-4 border border-white/5 pointer-events-none rounded-xl" />
                <div className="absolute top-6 left-6 grid grid-cols-2 gap-1.5 opacity-10 pointer-events-none">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <span key={i} className="h-1 w-1 rounded-full bg-[#D56A4A]" />
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${activeProject.id}-${currentSlideIndex}`}
                    src={activeSlides[currentSlideIndex]?.full}
                    alt={`Booklet page ${currentSlideIndex + 1}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="max-h-full max-w-full object-contain rounded-lg relative z-10"
                  />
                </AnimatePresence>
              </div>

              {/* Right Arrow */}
              <button
                type="button"
                onClick={() => nextSlide(activeSlides.length)}
                className="absolute right-2 md:-right-12 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-[#151515]/90 text-[#D56A4A] backdrop-blur transition hover:border-[#D56A4A] hover:bg-[#D56A4A] hover:text-[#050505]"
                aria-label="Next page"
              >
                <ChevronRight size={24} />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
