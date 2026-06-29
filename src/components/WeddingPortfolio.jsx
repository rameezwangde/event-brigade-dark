import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Users, Heart, ArrowRight } from 'lucide-react';

// Scan the engagement raw uploads directory dynamically
const engagementGlob = import.meta.glob('../assets/engagement/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true });
const engagementImages = Object.values(engagementGlob).map((mod) => mod.default || mod);
const engagementHero = engagementGlob['../assets/engagement/IMG_5099.jpg']?.default || engagementGlob['../assets/engagement/IMG_5099.jpg'] || engagementImages[0];

// Scan the keyshav raw uploads directory dynamically
const keyshavGlob = import.meta.glob('../assets/keyshav/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true });
const keyshavImages = Object.values(keyshavGlob).map((mod) => mod.default || mod);
const keyshavHero = keyshavGlob['../assets/keyshav/DSC03874.JPG']?.default || keyshavGlob['../assets/keyshav/DSC03874.jpg']?.default || keyshavGlob['../assets/keyshav/DSC03874.JPG'] || keyshavGlob['../assets/keyshav/DSC03874.jpg'] || keyshavImages[0];

// Scan the wedding raw uploads directory dynamically
const weddingGlob = import.meta.glob('../assets/wedding-gallery/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true });
const weddingImages = Object.values(weddingGlob)
  .map((mod) => mod.default || mod)
  .filter((path) => !path.includes('placeholder'));

// Category filter tabs
const categories = ['All Celebrations', 'Weddings', 'Engagements'];

// Luxury Wedding Projects List
const weddingProjects = [];

if (keyshavImages.length > 0) {
  weddingProjects.push({
    id: 1,
    number: '01',
    title: "Keyshav & Sanika's Wedding Decor.",
    subtitle: "Keyshav & Sanika's Wedding",
    tag: 'Weddings',
    categories: ['Weddings'],
    description: "A breathtaking wedding decor setup featuring custom floral mandaps, luxury grand entry arches, and premium stage lighting.",
    image: keyshavHero,
    layout: 'right', // Content Left, Image Right
    location: 'Pune',
    date: 'June 2026',
    guests: '800+ Guests',
    isRawGallery: true,
    images: keyshavImages
  });
}

if (engagementImages.length > 0) {
  weddingProjects.push({
    id: 2,
    number: weddingProjects.length === 0 ? '01' : '02',
    title: "Shikher & Ishika's Royal Engagement.",
    subtitle: "Shikher & Ishika's Engagement",
    tag: 'Engagements',
    categories: ['Engagements'],
    description: "A gorgeous luxury engagement celebration designed and styled with premium floral detailing, warm candelabras, and elegant setups.",
    image: engagementHero,
    layout: 'left', // Alternate layout: Image Left, Content Right
    location: 'Pune',
    date: 'June 2026',
    guests: '150 Guests',
    isRawGallery: true,
    images: engagementImages
  });
}



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
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    const cat = params.get('category');
    if (cat) {
      const catLower = cat.toLowerCase();
      if (catLower === 'engagements') return 'Engagements';
      if (catLower === 'weddings') return 'Weddings';
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
        const catLower = cat.toLowerCase();
        if (catLower === 'engagements') {
          setSelectedCategory('Engagements');
        } else if (catLower === 'weddings') {
          setSelectedCategory('Weddings');
        } else {
          setSelectedCategory('All Celebrations');
        }
      } else {
        setSelectedCategory('All Celebrations');
      }
    };
    window.addEventListener('popstate', handlePopState);
    handlePopState();
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Setup bubbles
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

  const usingUploaded = weddingProjects.length > 0;

  // Filter projects based on selected tab
  const filteredProjects = selectedCategory === 'All Celebrations'
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
    if (activeProject.isRawGallery) {
      return activeProject.images.map((img) => ({
        full: img,
        thumb: img
      }));
    }
    return [];
  };
  const activeSlides = getActiveSlides();

  return (
    <div
      className="relative w-full min-h-screen text-[#1C1C1C] font-sans overflow-x-hidden selection:bg-[#C8A96B]/30 selection:text-[#1C1C1C] pt-44 pb-16"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.08' numOctaves='3'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.78 0 0 0 0 0.66 0 0 0 0 0.42 0 0 0 0.05 0'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' fill='transparent'/%3E%3C/svg%3E")`,
        backgroundColor: '#FAF7F2'
      }}
    >
      {/* Radial Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[8%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(circle,rgba(200,169,107,0.06),transparent_65%)]" />
        <div className="absolute top-[35%] left-[-15%] w-[65vw] h-[65vw] rounded-full bg-[radial-gradient(circle,rgba(200,169,107,0.05),transparent_70%)]" />
        <div className="absolute bottom-[8%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(200,169,107,0.05),transparent_60%)]" />
      </div>

      {/* Floating Particles */}
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
              background: 'radial-gradient(circle, rgba(200, 169, 107, 0.45) 0%, rgba(200, 169, 107, 0.05) 70%)',
              boxShadow: '0 0 5px rgba(200, 169, 107, 0.25)',
              opacity: 0.12 + Math.random() * 0.15
            }}
          />
        ))}
      </div>

      {/* Botanical Lines */}
      <div className="absolute top-44 left-0 w-24 md:w-36 lg:w-44 pointer-events-none z-0">
        <BotanicalLeftOrnament />
      </div>
      <div className="absolute top-[45%] right-0 w-24 md:w-36 lg:w-44 pointer-events-none z-0">
        <BotanicalRightOrnament />
      </div>

      <div className="relative max-w-7xl mx-auto px-8 md:px-12 lg:px-16 z-10">
        {/* Header */}
        <div className="text-center mt-12 mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-6 h-[1px] bg-[#C8A96B]" />
            <p className="text-base sm:text-lg font-semibold uppercase tracking-[0.34em] text-[#C8A96B] font-sans">
              Wedding Portfolio
            </p>
            <span className="w-6 h-[1px] bg-[#C8A96B]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1C1C1C] leading-[1.15] max-w-4xl mx-auto font-semibold">
            Wedding Celebrations <span className="italic font-normal text-[#C8A96B]">Capture Grid</span>
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-[#1C1C1C]/70 font-sans max-w-2xl mx-auto leading-relaxed">
            Explore photos and custom raw design galleries of our wedding celebrations.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C8A96B]/50" />
            <Heart size={14} className="text-[#C8A96B]" />
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C8A96B]/50" />
          </div>
        </div>

        {/* Category Navigation Tabs */}
        {usingUploaded && (
          <div className="relative max-w-7xl mx-auto px-8 md:px-12 lg:px-16 mb-16 z-20">
            <div className="flex flex-wrap justify-center items-center gap-3">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase transition duration-300 font-sans border ${isSelected
                        ? 'border-[#C8A96B] text-[#FAF7F2] shadow-sm'
                        : 'border-[#C8A96B]/20 bg-[#FAF7F2]/50 text-[#1C1C1C]/70 hover:border-[#C8A96B]/50 hover:text-[#1C1C1C]'
                      }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="activeWeddingCategoryPill"
                        className="absolute inset-0 rounded-full bg-[#C8A96B]"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Raw Photos Grid or Premium Placeholder */}
        {usingUploaded ? (
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
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative overflow-hidden rounded-[20px] border border-[#C8A96B]/20 bg-[#FAF7F2] h-[380px] shadow-xl hover:border-[#C8A96B]/50 transition-all duration-500 cursor-pointer"
                    onClick={() => openLightbox(project)}
                  >
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105"
                    />

                    {/* Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent z-10" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500 z-10" />

                    {/* Top Tag Badge */}
                    <span className="absolute left-5 top-5 rounded-md border border-[#C8A96B]/30 bg-black/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#C8A96B] z-20">
                      {tag}
                    </span>

                    {/* Details */}
                    <div className="absolute bottom-5 left-5 right-5 z-20 flex flex-col justify-end">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#C8A96B] mb-1 text-left">
                        {subtitle}
                      </p>
                      <h3 className="font-serif text-2xl text-white group-hover:text-[#C8A96B] transition-colors leading-snug text-left">
                        {title}
                      </h3>

                      {/* Hover Stats Section */}
                      <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-36 group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 border-t border-white/10 pt-4">
                        <div className="space-y-2 text-xs text-white/80 text-left">
                          <div className="flex items-center gap-2">
                            <MapPin size={13} className="text-[#C8A96B] shrink-0" />
                            <span>{location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users size={13} className="text-[#C8A96B] shrink-0" />
                            <span>{guests}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={13} className="text-[#C8A96B] shrink-0" />
                            <span>{date}</span>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#C8A96B] group-hover:translate-x-1 transition-transform text-left">
                          <span>Explore Gallery</span>
                          <ArrowRight size={12} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto border border-[#C8A96B]/25 rounded-[24px] bg-[#F5F1EA]/60 p-8 sm:p-12 text-center backdrop-blur-md relative overflow-hidden shadow-md"
          >
            {/* Elegant Corner Labels */}
            <div className="absolute top-4 left-4 text-[#C8A96B]/30 font-mono text-[9px] select-none">GALLERY_VAULT // WEDDINGS</div>
            <div className="absolute bottom-4 right-4 text-[#C8A96B]/40 font-mono text-[9px] select-none">READY FOR UPLOADS</div>
            
            <div className="mx-auto w-16 h-16 rounded-full bg-[#C8A96B]/10 flex items-center justify-center border border-[#C8A96B]/35 text-[#C8A96B] mb-6 shadow-sm">
              <Heart size={26} className="animate-pulse" />
            </div>
            
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1C1C] mb-4">
              Wedding Gallery <span className="text-[#C8A96B] italic font-normal">Vault Empty</span>
            </h3>
            
            <p className="text-[#1C1C1C]/75 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8 font-sans">
              This space is configured for direct wedding photo folder uploads. Once raw photography folders are uploaded to the server, cards will dynamically render here with full-size interactive galleries.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono text-[#1C1C1C]/50">
              <span className="flex items-center gap-2 border border-[#C8A96B]/20 bg-[#FAF7F2] px-3.5 py-1.5 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B]" />
                PATH: src/assets/wedding-gallery/
              </span>
              <span className="flex items-center gap-2 border border-[#C8A96B]/20 bg-[#FAF7F2] px-3.5 py-1.5 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B]" />
                FORMATS: JPG, PNG, WEBP
              </span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Full-screen Booklet Modal / Lightbox */}
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
                <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.34em] text-[#C8A96B]">
                  {activeProject.tag} — GALLERY
                </p>
                <h3 className="font-serif text-xl sm:text-2xl mt-1 text-white">
                  {activeProject.subtitle}
                </h3>
              </div>

              <div className="flex items-center gap-6">
                <span className="font-serif text-sm font-semibold text-[#C8A96B]">
                  {String(currentSlideIndex + 1).padStart(2, '0')} / {String(activeSlides.length).padStart(2, '0')}
                </span>

                <button
                  type="button"
                  onClick={closeLightbox}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-[#151515] text-[#C8A96B] transition hover:bg-[#C8A96B] hover:text-[#050505]"
                  aria-label="Close lightbox"
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
                className="absolute left-2 md:left-6 lg:left-8 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-[#151515]/90 text-[#C8A96B] backdrop-blur transition hover:border-[#C8A96B] hover:bg-[#C8A96B] hover:text-[#050505]"
                aria-label="Previous page"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Slide Image Box */}
              <div className="w-full h-[62vh] md:h-[68vh] rounded-2xl border border-white/10 bg-[#050505] p-2 sm:p-4 shadow-2xl flex items-center justify-center overflow-hidden relative">
                {/* Frame borders */}
                <div className="absolute inset-4 border border-white/5 pointer-events-none rounded-xl" />
                <FloralOrnament className="absolute bottom-6 right-6 w-16 h-16 opacity-25" />

                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${activeProject.id}-${currentSlideIndex}`}
                    src={activeSlides[currentSlideIndex]?.full}
                    alt={`Gallery page ${currentSlideIndex + 1}`}
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
                className="absolute right-2 md:right-6 lg:right-8 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-[#151515]/90 text-[#C8A96B] backdrop-blur transition hover:border-[#C8A96B] hover:bg-[#C8A96B] hover:text-[#050505]"
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
