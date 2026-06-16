import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Users, Heart, Sparkles, ArrowRight } from 'lucide-react';

// Import local premium assets
import socialBirthday from '../assets/social-curated/social-birthday-cake.jpg';
import socialAnniversary from '../assets/social-curated/social-anniversary-hero.jpg';
import socialBabyShower from '../assets/social-curated/social-baby-shower-decor.jpg';
import socialCommunity from '../assets/social-curated/social-community-stage.jpg';

// Dynamically generate the 38 social event slide pages
const socialBookletPages = Array.from({ length: 38 }, (_, i) => {
  const pageNum = String(i + 1).padStart(2, '0');
  return {
    full: new URL(`../assets/social-events-portfolio/social-page-${pageNum}.jpg`, import.meta.url).href,
    thumb: new URL(`../assets/social-events-portfolio-thumbs/social-page-${pageNum}.jpg`, import.meta.url).href
  };
});

// Category filter tabs
const categories = [
  'All Celebrations',
  'Birthdays',
  'Anniversaries',
  'Baby Showers',
  'Fests & Community Events'
];

// Luxury Social Projects List
const socialProjects = [
  {
    id: 1,
    number: '01',
    title: 'A Half-Century of Joy & Light.',
    subtitle: 'Kunal\'s 50th Celebration',
    tag: 'Birthdays',
    categories: ['Birthdays'],
    description: 'An evening filled with warm fairy lights, custom-curated activity tables, and a beautiful premium birthday cake stage setup. Tailored precisely to reflect a lifetime of achievements.',
    image: socialBirthday,
    layout: 'right', // Content Left, Image Right
    location: 'Sheraton Grand, Pune',
    date: 'Dec 2025',
    guests: '200 Guests',
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
    layout: 'left', // Image Left, Content Right
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
    layout: 'right', // Content Left, Image Right
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
    layout: 'left', // Image Left, Content Right
    location: 'Nyati County lawns, Pune',
    date: 'Nov 2025',
    guests: '800 Guests',
    pageRange: [25, 37] // Pages 26 to 38
  }
];

export default function SocialEventsPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All Celebrations');
  const [activeProject, setActiveProject] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [bubbles, setBubbles] = useState([]);

  // Generate floating warm bubbles on mount
  useEffect(() => {
    const generatedBubbles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      delay: `${Math.random() * 12}s`,
      duration: `${16 + Math.random() * 8}s`,
      size: `${4 + Math.random() * 5}px`
    }));
    setBubbles(generatedBubbles);
  }, []);

  // Filter projects based on selected tab
  const filteredProjects = selectedCategory === 'All Celebrations'
    ? socialProjects
    : socialProjects.filter(p => p.categories.includes(selectedCategory));

  // Lightbox handlers
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

  // Get pages for active project lightbox
  const getActiveSlides = () => {
    if (!activeProject) return [];
    const [start, end] = activeProject.pageRange;
    return socialBookletPages.slice(start, end + 1);
  };
  const activeSlides = getActiveSlides();

  return (
    <div
      className="relative w-full min-h-screen text-[#222222] font-sans overflow-x-hidden selection:bg-[#D56A4A]/20 selection:text-[#222222] pt-28 pb-16"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.08' numOctaves='3'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.83 0 0 0 0 0.70 0 0 0 0 0.52 0 0 0 0.04 0'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' fill='transparent'/%3E%3C/svg%3E")`,
        backgroundColor: '#F9F5EF'
      }}
    >
      {/* Soft Ambient Radiance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(213,106,74,0.05),transparent_65%)]" />
        <div className="absolute top-[40%] right-[-15%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle,rgba(200,169,107,0.05),transparent_70%)]" />
        <div className="absolute bottom-[10%] left-[-15%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(213,106,74,0.05),transparent_60%)]" />
      </div>

      {/* Floating Celebration Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="champagne-bubble absolute rounded-full"
            style={{
              left: bubble.left,
              animationDelay: bubble.delay,
              animationDuration: bubble.duration,
              width: bubble.size,
              height: bubble.size,
              top: '100%',
              background: 'radial-gradient(circle, rgba(213, 106, 74, 0.35) 0%, rgba(213, 106, 74, 0.03) 70%)',
              boxShadow: '0 0 5px rgba(213, 106, 74, 0.15)',
              opacity: 0.15 + Math.random() * 0.15
            }}
          />
        ))}
      </div>

      {/* Page Header */}
      <div className="relative max-w-7xl mx-auto px-5 text-center mt-12 mb-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-6 h-[1.5px] bg-[#D56A4A]/55" />
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.34em] text-[#D56A4A] font-sans">
              Social Portfolio
            </p>
            <span className="w-6 h-[1.5px] bg-[#D56A4A]/55" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#222222] leading-[1.15] max-w-4xl mx-auto font-semibold">
            We Design Around People. Built Around <span className="font-script text-[#D56A4A] font-normal italic inline-block transform translate-y-1">Memories.</span>
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-[#222222]/70 font-sans max-w-2xl mx-auto leading-relaxed">
            Intimate celebrations, milestone birthdays, and community festivals organized with detailed production structure. Explore our booklet slides.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D56A4A]/40" />
            <Heart size={14} className="text-[#D56A4A]" />
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D56A4A]/40" />
          </div>
        </motion.div>
      </div>

      {/* Category Navigation Tabs */}
      <div className="relative max-w-7xl mx-auto px-5 mb-16 z-20">
        <div className="flex flex-wrap justify-center items-center gap-3">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase transition duration-300 font-sans border ${
                  isSelected
                    ? 'border-[#D56A4A] text-[#222222] shadow-sm bg-[#D56A4A]/10'
                    : 'border-[#C8A96B]/20 bg-[#F7F1EA]/40 text-[#222222]/70 hover:border-[#D56A4A]/40 hover:text-[#222222]'
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="activeSocialCategoryPill"
                    className="absolute inset-0 rounded-full bg-[#D56A4A]/5"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid / Stack of Cards */}
      <div className="relative max-w-6xl mx-auto px-5 space-y-16 z-10">
        <motion.div layout className="space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const { layout, title, subtitle, tag, description, image, location, date, guests } = project;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden rounded-[2rem] border border-[#C8A96B]/20 bg-[#F7F1EA] shadow-xl transition-all duration-700 hover:border-[#D56A4A]/40 hover:shadow-[#D56A4A]/5"
                >
                  <div className={`grid lg:grid-cols-12 min-h-[460px] ${layout === 'left' ? 'direction-rtl' : ''}`}>
                    
                    {/* Left Column: Content */}
                    <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 md:p-12 relative z-10 text-left">
                      <div>
                        <div className="flex items-center gap-2 mb-6 text-xs font-semibold tracking-widest text-[#D56A4A] uppercase">
                          <Sparkles size={14} />
                          <span>{tag}</span>
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#222222] leading-[1.15] font-semibold">
                          {title}
                        </h2>
                        <p className="text-[#8B5E3C] font-serif text-lg italic mt-2">{subtitle}</p>
                        <p className="mt-6 text-[#222222]/75 text-sm sm:text-base leading-relaxed max-w-xl">
                          {description}
                        </p>
                      </div>

                      <div className="mt-8 pt-8 border-t border-[#C8A96B]/15">
                        <div className="grid grid-cols-3 gap-4 mb-8 text-xs text-[#222222]/75">
                          <div className="flex items-center gap-2">
                            <MapPin size={14} className="text-[#D56A4A] shrink-0" />
                            <span className="truncate">{location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-[#D56A4A] shrink-0" />
                            <span>{date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users size={14} className="text-[#D56A4A] shrink-0" />
                            <span>{guests}</span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => openLightbox(project)}
                          className="inline-flex items-center gap-3 border border-[#D56A4A] bg-[#D56A4A] text-[#F9F5EF] font-bold text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-full hover:bg-transparent hover:text-[#D56A4A] transition-all duration-300"
                        >
                          Explore Booklet <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="lg:col-span-5 relative overflow-hidden min-h-[300px] lg:min-h-full p-4 bg-[#F7F1EA]">
                      <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden border border-[#C8A96B]/30 shadow-md">
                        <img
                          src={image}
                          alt={subtitle}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105"
                        />
                        {/* Soft Gold Border Overlay on Hover */}
                        <div className="absolute inset-0 border border-transparent group-hover:border-[#D56A4A]/40 transition-all duration-500 rounded-[1.2rem] pointer-events-none z-20 m-1.5" />
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full-screen Booklet Modal / Lightbox */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#F9F5EF] p-4 md:p-6 lg:p-8"
            onClick={closeLightbox}
          >
            {/* Header Details */}
            <div className="max-w-7xl w-full mx-auto flex items-center justify-between border-b border-[#C8A96B]/20 pb-4 relative z-10">
              <div className="text-[#222222] text-left">
                <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.34em] text-[#D56A4A]">
                  {activeProject.tag} — BOOKLET {activeProject.number}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl mt-1 text-[#222222]">
                  {activeProject.subtitle}
                </h3>
              </div>

              <div className="flex items-center gap-6">
                <span className="font-serif text-sm font-semibold text-[#D56A4A]">
                  {String(currentSlideIndex + 1).padStart(2, '0')} / {String(activeSlides.length).padStart(2, '0')}
                </span>

                <button
                  type="button"
                  onClick={closeLightbox}
                  className="grid h-11 w-11 place-items-center rounded-full border border-[#D56A4A]/20 bg-[#F9F5EF] text-[#D56A4A] transition hover:bg-[#D56A4A] hover:text-[#F9F5EF]"
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
                className="absolute left-2 md:-left-12 z-20 grid h-12 w-12 place-items-center rounded-full border border-[#D56A4A]/25 bg-[#F9F5EF]/90 text-[#D56A4A] backdrop-blur transition hover:border-[#D56A4A] hover:bg-[#D56A4A] hover:text-[#F9F5EF]"
                aria-label="Previous page"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Slide Image Box */}
              <div className="w-full h-[62vh] md:h-[68vh] rounded-2xl border border-[#C8A96B]/20 bg-[#F7F1EA] p-2 sm:p-4 shadow-xl flex items-center justify-center overflow-hidden relative">
                {/* Frame borders */}
                <div className="absolute inset-4 border border-[#C8A96B]/15 pointer-events-none rounded-xl" />

                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlideIndex}
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
                className="absolute right-2 md:-right-12 z-20 grid h-12 w-12 place-items-center rounded-full border border-[#D56A4A]/25 bg-[#F9F5EF]/90 text-[#D56A4A] backdrop-blur transition hover:border-[#D56A4A] hover:bg-[#D56A4A] hover:text-[#F9F5EF]"
                aria-label="Next page"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Thumbnail Navigation Row */}
            <div className="max-w-4xl w-full mx-auto flex flex-col items-center gap-3 relative z-10" onClick={(e) => e.stopPropagation()}>
              <p className="text-[10px] tracking-widest uppercase text-[#222222]/50">
                Booklet Navigation Pages
              </p>

              {/* Thumbnails list */}
              <div className="flex gap-2 overflow-x-auto py-2 px-4 max-w-full scrollbar-thin scrollbar-thumb-[#D56A4A]">
                {activeSlides.map((slide, slideIdx) => {
                  const isActive = slideIdx === currentSlideIndex;
                  return (
                    <button
                      key={slideIdx}
                      type="button"
                      onClick={() => setCurrentSlideIndex(slideIdx)}
                      className={`h-12 w-20 shrink-0 rounded border overflow-hidden p-0.5 transition duration-300 ${
                        isActive
                          ? 'border-[#D56A4A] bg-[#D56A4A]/10 scale-105 shadow'
                          : 'border-[#C8A96B]/25 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={slide.thumb} alt={`Thumb ${slideIdx + 1}`} className="h-full w-full object-cover rounded" />
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Consultation Call to Action */}
      <div className="relative max-w-4xl mx-auto px-5 text-center mt-24 pb-12 z-10">
        <div className="border border-[#C8A96B]/30 rounded-[32px] p-8 sm:p-12 md:p-16 bg-[#F7F1EA]/50 relative overflow-hidden">
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <Heart className="mx-auto text-[#D56A4A] mb-6 animate-pulse" size={36} />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#222222] leading-[1.15] font-semibold">
              Let’s Craft Your Next <span className="italic text-[#D56A4A] font-normal font-script inline-block transform translate-y-1">Milestone</span>
            </h2>
            <p className="mt-6 text-[#222222]/70 text-sm sm:text-base leading-relaxed">
              Intimate family dinners, premium birthdays, baby showers, or large community fests — we weave warmth, elegance, and coordination protocols into every celebration.
            </p>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/contact');
              }}
              className="inline-flex items-center gap-3 border border-[#D56A4A] bg-[#D56A4A] text-[#F9F5EF] font-bold text-sm sm:text-base uppercase tracking-[0.2em] px-10 py-4 rounded-full hover:bg-transparent hover:text-[#D56A4A] transition-all duration-300 mt-10"
            >
              Consult Our Celebration Designer <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
