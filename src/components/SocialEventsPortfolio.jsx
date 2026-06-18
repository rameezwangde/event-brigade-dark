import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Users, Heart, Sparkles, ArrowRight } from 'lucide-react';

// Import local premium assets
import socialBirthday from '../assets/social-curated/social-birthday-decor.jpg';
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

// Dynamically glob all files in the vaani folder
const vaaniGlob = import.meta.glob('../assets/vaani/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true });
const vaaniImages = Object.values(vaaniGlob).map((mod) => mod.default || mod);
const vaaniHero = vaaniGlob['../assets/vaani/DSC00028.JPG']?.default || vaaniGlob['../assets/vaani/DSC00028.JPG'] || socialBirthday;


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
    id: 2,
    number: '01',
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
    number: '02',
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
    number: '03',
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
  },
  {
    id: 5,
    number: '04',
    title: 'A Vibrant Birthday Wonderland.',
    subtitle: "Vaani's Birthday Celebration",
    tag: 'Birthdays',
    categories: ['Birthdays'],
    description: 'A magical celebration designed and managed for Vaani, filled with premium floral drapes, custom themes, and interactive game counters.',
    image: vaaniHero,
    layout: 'right', // Content Left, Image Right
    location: 'JW Marriott, Pune',
    date: 'April 2026',
    guests: '150 Guests',
    isRawGallery: true,
    images: vaaniImages
  }
];

export default function SocialEventsPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    const cat = params.get('category');
    if (cat) {
      if (cat.toLowerCase() === 'birthdays') return 'Birthdays';
      if (cat.toLowerCase() === 'anniversaries') return 'Anniversaries';
      if (cat.toLowerCase() === 'baby showers') return 'Baby Showers';
      if (cat.toLowerCase() === 'fests' || cat.toLowerCase() === 'community') return 'Fests & Community Events';
    }
    return 'All Celebrations';
  });
  const [activeProject, setActiveProject] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [bubbles, setBubbles] = useState([]);

  // Sync state if category changes via search query parameter
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get('category');
      if (cat) {
        if (cat.toLowerCase() === 'birthdays') setSelectedCategory('Birthdays');
        else if (cat.toLowerCase() === 'anniversaries') setSelectedCategory('Anniversaries');
        else if (cat.toLowerCase() === 'baby showers') setSelectedCategory('Baby Showers');
        else if (cat.toLowerCase() === 'fests' || cat.toLowerCase() === 'community') setSelectedCategory('Fests & Community Events');
      } else {
        setSelectedCategory('All Celebrations');
      }
    };
    window.addEventListener('popstate', handlePopState);
    
    // Run once on mount to ensure parsing
    handlePopState();

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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

  return (
    <div
      className="relative w-full min-h-screen text-[#222222] font-sans overflow-x-hidden selection:bg-[#D56A4A]/20 pt-28 pb-16 bg-[#F9F5EF]"
    >
      {/* Soft Radial Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[8%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(circle,rgba(213,106,74,0.06),transparent_65%)]" />
        <div className="absolute top-[35%] left-[-15%] w-[65vw] h-[65vw] rounded-full bg-[radial-gradient(circle,rgba(213,106,74,0.05),transparent_70%)]" />
        <div className="absolute bottom-[8%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(213,106,74,0.05),transparent_60%)]" />
      </div>

      {/* Floating Celebration Particles (Terracotta themed) */}
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
              background: 'radial-gradient(circle, rgba(213, 106, 74, 0.45) 0%, rgba(213, 106, 74, 0.05) 70%)',
              boxShadow: '0 0 5px rgba(213, 106, 74, 0.25)',
              opacity: 0.12 + Math.random() * 0.15
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
            <span className="w-6 h-[1.5px] bg-[#D56A4A]" />
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.34em] text-[#D56A4A] font-sans">
              Social Portfolio
            </p>
            <span className="w-6 h-[1.5px] bg-[#D56A4A]" />
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
                    ? 'border-[#D56A4A] text-[#FAF7F2] shadow-sm'
                    : 'border-[#D56A4A]/20 bg-[#FAF7F2]/50 text-[#222222]/70 hover:border-[#D56A4A]/50 hover:text-[#222222]'
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="activeSocialCategoryPill"
                    className="absolute inset-0 rounded-full bg-[#D56A4A]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="relative max-w-7xl mx-auto px-5 z-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const { title, subtitle, tag, image, location, date, guests } = project;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden rounded-[20px] border border-[#D56A4A]/20 bg-[#FAF7F2] h-[380px] shadow-xl hover:border-[#D56A4A]/50 transition-all duration-500 cursor-pointer"
                  onClick={() => openLightbox(project)}
                >
                  {/* Case Study Image Cover */}
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105"
                  />
                  
                  {/* Default Soft Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent z-10" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500 z-10" />

                  {/* Top Highlight Badge */}
                  <span className="absolute left-5 top-5 rounded-md border border-[#D56A4A]/30 bg-black/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#D56A4A] z-20">
                    {tag}
                  </span>

                  {/* Case Study Details */}
                  <div className="absolute bottom-5 left-5 right-5 z-20 flex flex-col justify-end">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#D56A4A] mb-1 text-left">
                      {subtitle}
                    </p>
                    <h3 className="font-serif text-2xl text-white group-hover:text-[#D56A4A] transition-colors leading-snug text-left">
                      {title}
                    </h3>
                    
                    {/* Hover Stats Section - Fades in & slides up */}
                    <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-36 group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 border-t border-white/10 pt-4">
                      <div className="space-y-2 text-xs text-white/80 text-left">
                        <div className="flex items-center gap-2">
                          <MapPin size={13} className="text-[#D56A4A] shrink-0" />
                          <span>{location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={13} className="text-[#D56A4A] shrink-0" />
                          <span>{guests}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={13} className="text-[#D56A4A] shrink-0" />
                          <span>{date}</span>
                        </div>
                      </div>

                      {/* View Project Action */}
                      <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#D56A4A] group-hover:translate-x-1 transition-transform text-left">
                        <span>Explore Booklet</span>
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Full-screen Booklet Modal / Lightbox */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#050505]/98 p-4 md:p-6 lg:p-8"
            onClick={closeLightbox}
          >
            {/* Header Details */}
            <div className="max-w-7xl w-full mx-auto flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
              <div className="text-white text-left">
                <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.34em] text-[#D56A4A]">
                  {activeProject.tag} — BOOKLET {activeProject.number}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl mt-1 text-white">
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
                className="absolute left-2 md:-left-12 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-[#151515]/90 text-[#D56A4A] backdrop-blur transition hover:border-[#D4AF37] hover:bg-[#D56A4A] hover:text-[#050505]"
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
                className="absolute right-2 md:-right-12 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-[#151515]/90 text-[#D56A4A] backdrop-blur transition hover:border-[#D4AF37] hover:bg-[#D56A4A] hover:text-[#050505]"
                aria-label="Next page"
              >
                <ChevronRight size={24} />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Consultation Call to Action */}
      <div className="relative max-w-4xl mx-auto px-5 text-center mt-24 pb-12 z-10">
        <div className="border border-[#D56A4A]/20 rounded-[32px] p-8 sm:p-12 md:p-16 bg-[#FAF7F2] shadow-md relative overflow-hidden">
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <Heart className="mx-auto text-[#D56A4A] mb-6 animate-pulse" size={36} />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#222222] leading-[1.15] font-semibold">
              Let’s Craft Your Next <span className="italic text-[#D56A4A] font-normal">Milestone</span>
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
              className="gold-shimmer-btn inline-flex items-center gap-3 text-obsidian font-bold text-sm sm:text-base uppercase tracking-[0.2em] px-10 py-4 rounded-full hover:shadow-glow transition-all duration-300 mt-10"
            >
              Consult Our Celebration Designer <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
