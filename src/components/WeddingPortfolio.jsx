import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Users, Heart, Sparkles, ArrowRight } from 'lucide-react';

// Import local premium assets
import weddingStage from '../assets/weddings/wedding-stage.jpg';
import weddingDecor from '../assets/weddings/wedding-decor.jpg';
import haldiMehendi from '../assets/weddings/haldi-mehendi.jpg';
import reception from '../assets/weddings/reception.jpg';
import specialEntry from '../assets/weddings/special-entry.jpg';
import weddingActivities from '../assets/weddings/wedding-activities.jpg';
import sangeetVisual from '../assets/weddings/pdf-page25-xref298.jpg';
import poolPartyVisual from '../assets/weddings/pdf-page28-xref330.jpg';
import mandapVisual from '../assets/weddings/pdf-page21-xref1238.jpg';
import brideGroomVisual from '../assets/weddings/pdf-page30-xref363.jpg';

// Dynamically generate the 35 wedding slide pages
const weddingBookletPages = Array.from({ length: 35 }, (_, i) => {
  const pageNum = String(i + 1).padStart(2, '0');
  return {
    full: new URL(`../assets/wedding-portfolio/wedding-page-${pageNum}.jpg`, import.meta.url).href,
    thumb: new URL(`../assets/wedding-portfolio-thumbs/wedding-page-${pageNum}.jpg`, import.meta.url).href
  };
});

// Category filter tabs
const categories = [
  'All Weddings',
  'Destination Weddings',
  'Luxury Weddings',
  'Traditional Weddings',
  'Reception Events',
  'Mehendi & Sangeet'
];

// Luxury Wedding Projects List
const weddingProjects = [
  {
    id: 1,
    number: '01',
    title: 'We Design Experiences.',
    subtitle: 'Sheraton Grand Grandeur',
    tag: 'Luxury Weddings',
    categories: ['Luxury Weddings'],
    description: 'Stories beautifully planned. Moments perfectly crafted. A celebration designed with Sabyasachi-inspired warm color palettes, rich floral backdrops, and timeless ivory setups.',
    image: brideGroomVisual,
    layout: 'right', // Content Left, Image Right
    location: 'Sheraton Grand, Pune',
    date: 'Dec 2025',
    guests: '600 Guests',
    pageRange: [0, 5] // Pages 1 to 6
  },
  {
    id: 2,
    number: '02',
    title: 'Crafting Timeless Celebrations.',
    subtitle: 'Udaipur Palace Union',
    tag: 'Destination Weddings',
    categories: ['Destination Weddings', 'Luxury Weddings'],
    description: 'From intimate gatherings to grand affairs, we turn your vision into unforgettable wedding experiences. High-end destination layouts featuring floating mandap stages and lakeside candlelit paths.',
    image: weddingStage,
    layout: 'left', // Image Left, Content Right
    location: 'Jagmandir Palace, Udaipur',
    date: 'Nov 2025',
    guests: '350 Guests',
    pageRange: [6, 11] // Pages 7 to 12
  },
  {
    id: 3,
    number: '03',
    title: 'Every Detail. Every Emotion.',
    subtitle: 'The Grand Ballroom Gala',
    tag: 'Reception Events',
    categories: ['Reception Events', 'Luxury Weddings'],
    description: "We don't just plan weddings, we craft memories that last forever. An immersive reception ballroom layout styled with suspended floral ceilings, golden tablescapes, and a grand stage setup.",
    image: reception,
    layout: 'right', // Content Left, Image Right
    location: 'JW Marriott, Pune',
    date: 'Jan 2026',
    guests: '500 Guests',
    pageRange: [12, 17] // Pages 13 to 18
  },
  {
    id: 4,
    number: '04',
    title: 'Where Dreams Find Their Stage.',
    subtitle: 'The Sundowner Mehendi & Sangeet',
    tag: 'Mehendi & Sangeet',
    categories: ['Mehendi & Sangeet'],
    description: 'Thoughtful planning. Flawless execution. Unforgettable celebrations featuring vibrant colors, hand-crafted floral swings, interactive bangle bars, and a high-spec Sangeet performance stage.',
    image: haldiMehendi,
    layout: 'left', // Image Left, Content Right
    location: 'Ritz-Carlton Lawn, Pune',
    date: 'Feb 2026',
    guests: '400 Guests',
    pageRange: [18, 23] // Pages 19 to 24
  },
  {
    id: 5,
    number: '05',
    title: 'Designed with Passion. Delivered with Perfection.',
    subtitle: 'Bespoke Floral Aisles',
    tag: 'Traditional Weddings',
    categories: ['Traditional Weddings'],
    description: 'Bespoke wedding experiences, curated just for you. Seamless integration of rich cultural heritage, sacred mandap coordinates, and fresh floral paths matching classic bridal style.',
    image: weddingDecor,
    layout: 'editorial', // Editorial Vogue Style
    location: 'Conrad Grand Ballroom, Pune',
    date: 'March 2026',
    guests: '700 Guests',
    pageRange: [24, 29] // Pages 25 to 30
  },
  {
    id: 6,
    number: '06',
    title: 'Celebrating Love. Creating Legacies.',
    subtitle: 'The Beachfront Canopy',
    tag: 'Destination Weddings',
    categories: ['Destination Weddings'],
    description: 'Your love story is unique. We make it extraordinary. A grand destination celebration under a warm sunset sky in Goa, detailed with pastel drapes, fairy lights, and live acoustic violin entries.',
    image: specialEntry,
    layout: 'full', // Full Width Hero
    location: 'W Hotel beachfront, Goa',
    date: 'April 2026',
    guests: '300 Guests',
    pageRange: [30, 34] // Pages 31 to 35
  }
];

// Elegant SVG Floral Branch Ornament
function FloralOrnament({ className }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10 90 C 20 60, 40 40, 90 10 M10 90 C 40 70, 70 40, 90 10" stroke="#C8A96B" strokeWidth="0.5" opacity="0.3" />
      <path d="M30 70 Q 34 52, 44 47 C 54 42, 58 56, 30 70" fill="#C8A96B" opacity="0.12" />
      <path d="M50 50 Q 54 36, 64 31 C 74 26, 76 39, 50 50" fill="#C8A96B" opacity="0.12" />
      <path d="M15 85 C 19 81, 21 76, 22 71" stroke="#C8A96B" strokeWidth="0.4" opacity="0.35" />
      <circle cx="22" cy="71" r="1" fill="#C8A96B" opacity="0.5" />
      <circle cx="44" cy="47" r="1" fill="#C8A96B" opacity="0.5" />
      <circle cx="64" cy="31" r="1" fill="#C8A96B" opacity="0.5" />
    </svg>
  );
}

// Faint Background Mandala Accent
function BackgroundMandala({ className }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="100" cy="100" r="80" stroke="#C8A96B" strokeWidth="0.25" opacity="0.12" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="60" stroke="#C8A96B" strokeWidth="0.25" opacity="0.15" />
      <circle cx="100" cy="100" r="40" stroke="#C8A96B" strokeWidth="0.3" opacity="0.1" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 100 + Math.cos(angle) * 40;
        const y1 = 100 + Math.sin(angle) * 40;
        const x2 = 100 + Math.cos(angle) * 80;
        const y2 = 100 + Math.sin(angle) * 80;
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C8A96B" strokeWidth="0.25" opacity="0.15" />
        );
      })}
    </svg>
  );
}

// Delicate botanical illustrations along left margin
function BotanicalLeftOrnament() {
  return (
    <svg viewBox="0 0 120 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#C8A96B] opacity-[0.07] select-none">
      <path d="M10 380 C 15 280, 45 200, 20 120 C 10 80, 35 40, 50 10" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
      <path d="M22 260 C 40 250, 60 270, 75 255" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" />
      <path d="M75 255 Q 85 240, 65 245 C 55 248, 65 255, 75 255" fill="currentColor" opacity="0.4" />
      <path d="M48 256 Q 58 244, 45 248 C 38 250, 42 255, 48 256" fill="currentColor" opacity="0.4" />
      <path d="M29 180 C 5 160, 0 130, 15 110" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" />
      <path d="M15 110 Q 25 95, 10 100 C 0 103, 8 110, 15 110" fill="currentColor" opacity="0.4" />
      <path d="M14 310 Q 35 300, 25 320 C 18 322, 22 315, 14 310" fill="currentColor" opacity="0.4" />
      <path d="M21 210 Q 5 200, 10 220 C 15 222, 18 215, 21 210" fill="currentColor" opacity="0.4" />
      <path d="M20 140 Q 45 130, 35 150 C 28 152, 32 145, 20 140" fill="currentColor" opacity="0.4" />
      <path d="M30 60 Q 55 50, 45 70 C 38 72, 42 65, 30 60" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

// Delicate botanical illustrations along right margin
function BotanicalRightOrnament() {
  return (
    <svg viewBox="0 0 120 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#C8A96B] opacity-[0.07] select-none">
      <path d="M110 380 C 105 280, 75 200, 100 120 C 110 80, 85 40, 70 10" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
      <path d="M98 260 C 80 250, 60 270, 45 255" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" />
      <path d="M45 255 Q 35 240, 55 245 C 65 248, 55 255, 45 255" fill="currentColor" opacity="0.4" />
      <path d="M72 256 Q 62 244, 75 248 C 82 250, 78 255, 72 256" fill="currentColor" opacity="0.4" />
      <path d="M91 180 C 115 160, 120 130, 105 110" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" />
      <path d="M105 110 Q 95 95, 110 100 C 120 103, 112 110, 105 110" fill="currentColor" opacity="0.4" />
      <path d="M106 310 Q 85 300, 95 320 C 102 322, 98 315, 106 310" fill="currentColor" opacity="0.4" />
      <path d="M99 210 Q 115 200, 110 220 C 105 222, 102 215, 99 210" fill="currentColor" opacity="0.4" />
      <path d="M100 140 Q 75 130, 85 150 C 92 152, 88 145, 100 140" fill="currentColor" opacity="0.4" />
      <path d="M90 60 Q 65 50, 75 70 C 82 72, 78 65, 90 60" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export default function WeddingPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All Weddings');
  const [activeProject, setActiveProject] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [bubbles, setBubbles] = useState([]);

  // Generate champagne bubbles configuration on mount
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
  const filteredProjects = selectedCategory === 'All Weddings'
    ? weddingProjects
    : weddingProjects.filter(p => p.categories.includes(selectedCategory));

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
    return weddingBookletPages.slice(start, end + 1);
  };
  const activeSlides = getActiveSlides();

  return (
    <div 
      className="relative w-full min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#2E6BFF]/30 selection:text-white pt-28 pb-16 bg-[#050505]"
    >
      
      {/* Blueprint Grid & Spotlights Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(8,27,58,0.45),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(46,107,255,0.06),transparent_50%)]" />
        
        {/* Tech Blueprint Grid */}
        <div className="absolute inset-0 corp-blueprint-grid opacity-60" />

        {/* Dynamic Sweeping Spotlight Beams */}
        <div className="absolute -top-[10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(46,107,255,0.05),transparent_60%)] corp-spotlight" />
        <div className="absolute top-[50%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(46,107,255,0.04),transparent_60%)] corp-spotlight" style={{ animationDelay: '-12s' }} />
      </div>

      {/* Floating Champagne Particles (Blue themed) */}
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
              background: 'radial-gradient(circle, rgba(46, 107, 255, 0.45) 0%, rgba(46, 107, 255, 0.05) 70%)',
              boxShadow: '0 0 5px rgba(46, 107, 255, 0.25)',
              opacity: 0.12 + Math.random() * 0.15
            }}
          />
        ))}
      </div>

      {/* Botanical Margin Line Art Illustrations */}
      <div className="absolute top-44 left-0 w-24 md:w-36 lg:w-44 pointer-events-none z-0">
        <BotanicalLeftOrnament />
      </div>
      <div className="absolute top-[45%] right-0 w-24 md:w-36 lg:w-44 pointer-events-none z-0">
        <BotanicalRightOrnament />
      </div>

      {/* Page Header */}
      <div className="relative max-w-7xl mx-auto px-5 text-center mt-12 mb-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.38em] text-[#D4AF37] font-sans">
              Wedding Portfolio
            </p>
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.15] max-w-4xl mx-auto">
            Crafting Love Stories Into <span className="italic font-normal text-[#D4AF37]">Unforgettable</span> Experiences
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-white/70 font-sans max-w-2xl mx-auto leading-relaxed">
            "From intimate ceremonies to grand destination celebrations, every wedding is designed with precision, emotion, and timeless elegance."
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
            <Heart size={14} className="text-[#D4AF37]" />
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
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
                    ? 'border-[#2E6BFF] text-white shadow-sm'
                    : 'border-white/10 bg-[#151515]/40 text-white/70 hover:border-[#2E6BFF]/30 hover:text-white'
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 rounded-full bg-[#2E6BFF]/15"
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
                  className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-[#151515] h-[380px] shadow-xl hover:border-[#2E6BFF]/50 transition-all duration-500 cursor-pointer"
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
                  <span className="absolute left-5 top-5 rounded-md border border-[#D4AF37]/30 bg-black/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#D4AF37] z-20">
                    {tag}
                  </span>

                  {/* Case Study Details */}
                  <div className="absolute bottom-5 left-5 right-5 z-20 flex flex-col justify-end">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#2E6BFF] mb-1 text-left">
                      {subtitle}
                    </p>
                    <h3 className="font-serif text-2xl text-white group-hover:text-[#D4AF37] transition-colors leading-snug text-left">
                      {title}
                    </h3>
                    
                    {/* Hover Stats Section - Fades in & slides up */}
                    <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-36 group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 border-t border-white/10 pt-4">
                      <div className="space-y-2 text-xs text-white/80 text-left">
                        <div className="flex items-center gap-2">
                          <MapPin size={13} className="text-[#D4AF37] shrink-0" />
                          <span>{location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={13} className="text-[#D4AF37] shrink-0" />
                          <span>{guests}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={13} className="text-[#D4AF37] shrink-0" />
                          <span>{date}</span>
                        </div>
                      </div>

                      {/* View Project Action */}
                      <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] group-hover:translate-x-1 transition-transform text-left">
                        <span>Explore Story</span>
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

      {/* Lightbox / Luxury Magazine Booklet Overlay */}
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
                <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.34em] text-[#D4AF37]">
                  {activeProject.tag} — Story {activeProject.number}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl mt-1 text-white">
                  {activeProject.subtitle}
                </h3>
              </div>

              <div className="flex items-center gap-6">
                <span className="font-serif text-sm font-semibold text-[#D4AF37]">
                  {String(currentSlideIndex + 1).padStart(2, '0')} / {String(activeSlides.length).padStart(2, '0')}
                </span>
                
                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-[#151515] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#050505]"
                  aria-label="Close booklet"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Slide Showcase Arena */}
            <div className="flex-grow flex items-center justify-center max-w-6xl w-full mx-auto my-4 relative" onClick={(e) => e.stopPropagation()}>
              
              {/* Left Arrow */}
              <button
                type="button"
                onClick={() => prevSlide(activeSlides.length)}
                className="absolute left-2 md:-left-12 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-[#151515]/90 text-[#D4AF37] backdrop-blur transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050505]"
                aria-label="Previous page"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Slide Image Box */}
              <div className="w-full h-[62vh] md:h-[68vh] rounded-2xl border border-white/10 bg-[#050505] p-2 sm:p-4 shadow-2xl flex items-center justify-center overflow-hidden relative">
                {/* Vintage Frame borders */}
                <div className="absolute inset-4 border border-white/5 pointer-events-none rounded-xl" />
                <div className="absolute top-6 left-6 grid grid-cols-2 gap-1.5 opacity-10 pointer-events-none">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <span key={i} className="h-1 w-1 rounded-full bg-[#2E6BFF]" />
                  ))}
                </div>
                <FloralOrnament className="absolute bottom-6 right-6 w-16 h-16 opacity-25" />

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
                className="absolute right-2 md:-right-12 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-[#151515]/90 text-[#D4AF37] backdrop-blur transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050505]"
                aria-label="Next page"
              >
                <ChevronRight size={24} />
              </button>
            </div>


          </motion.div>
        )}
      </AnimatePresence>

      {/* Grand Planning Consultation CTA */}
      <div className="relative max-w-4xl mx-auto px-5 text-center mt-24 pb-12 z-10">
        <div className="border border-[#C8A96B]/20 rounded-[32px] p-8 sm:p-12 md:p-16 bg-[#151515]/40 backdrop-blur-md relative overflow-hidden">
          <FloralOrnament className="absolute top-4 left-4 w-28 h-28 opacity-20 transform rotate-180" />
          <FloralOrnament className="absolute bottom-4 right-4 w-28 h-28 opacity-20" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <Heart className="mx-auto text-[#D4AF37] mb-6 animate-pulse" size={36} />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.15]">
              Let’s Create Your <span className="italic text-[#D4AF37] font-normal">Timeless</span> Masterpiece
            </h2>
            <p className="mt-6 text-white/70 text-sm sm:text-base leading-relaxed">
              Whether you are looking to host an intimate destination wedding at a beach resort or a grand royal celebration in a majestic palace, our design experts are here to shape your dreams with flawless execution.
            </p>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/contact');
              }}
              className="gold-shimmer-btn inline-flex items-center gap-3 text-obsidian font-bold text-sm sm:text-base uppercase tracking-[0.2em] px-10 py-4 rounded-full hover:shadow-glow transition-all duration-300 mt-10"
            >
              Consult Our Wedding Designer <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

}
