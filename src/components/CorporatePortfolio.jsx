import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Users, Image as ImageIcon, ArrowRight } from 'lucide-react';

// Scan the general corporate raw uploads directory dynamically
const corporateGlob = import.meta.glob('../assets/corporate-gallery/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true });
const corporateImages = Object.values(corporateGlob)
  .map((mod) => mod.default || mod)
  .filter((path) => !path.includes('placeholder'));

// Scan the BGL Auctions raw uploads directory dynamically
const auctionsGlob = import.meta.glob('../assets/bgl-auctions/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true });
const auctionsImages = Object.values(auctionsGlob).map((mod) => mod.default || mod);

// Scan the KP Transport raw uploads directory dynamically
const kpGlob = import.meta.glob('../assets/kp-transport/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true });
const kpImages = Object.values(kpGlob).map((mod) => mod.default || mod);

// Category filter tabs
const categories = ['All Projects', 'Conferences'];
if (corporateImages.length > 0) {
  categories.push('Corporate Uploads');
}
if (auctionsImages.length > 0) {
  categories.push('BGL Auctions');
}
if (kpImages.length > 0) {
  categories.push('KP Transport');
}

// Luxury Corporate Projects List
const corporateProjects = [];

if (auctionsImages.length > 0) {
  corporateProjects.push({
    id: corporateProjects.length + 1,
    number: String(corporateProjects.length + 1).padStart(2, '0'),
    title: "BGL Auctions",
    subtitle: "Corporate Event Production",
    tag: 'BGL Auctions',
    categories: ['BGL Auctions'],
    description: "Immersive corporate event setup and production management for the prestigious BGL Auctions.",
    image: auctionsImages[0],
    layout: 'left',
    location: 'Various Venues',
    date: 'Recent',
    guests: 'Premium Attendees',
    isRawGallery: true,
    images: auctionsImages
  });
}

if (kpImages.length > 0) {
  corporateProjects.push({
    id: corporateProjects.length + 1,
    number: String(corporateProjects.length + 1).padStart(2, '0'),
    title: "KP Transport",
    subtitle: "Office Opening Ceremony",
    tag: 'KP Transport',
    categories: ['KP Transport'],
    description: "Grand office opening celebration, ribbon-cutting ceremony, and premium venue management for KP Transport.",
    image: kpImages[0],
    layout: corporateProjects.length % 2 === 0 ? 'left' : 'right',
    location: 'Various Venues',
    date: 'Recent',
    guests: 'Premium Attendees',
    isRawGallery: true,
    images: kpImages
  });
}

if (corporateImages.length > 0) {
  corporateProjects.push({
    id: corporateProjects.length + 1,
    number: String(corporateProjects.length + 1).padStart(2, '0'),
    title: "Raw Corporate Captures.",
    subtitle: "Uploaded Corporate Gallery",
    tag: 'Corporate Uploads',
    categories: ['Corporate Uploads'],
    description: "A repository of raw event photographs from recent corporate meets, stages, and activations.",
    image: corporateImages[0],
    layout: corporateProjects.length % 2 === 0 ? 'left' : 'right',
    location: 'Various Venues',
    date: 'Recent',
    guests: 'Dynamic',
    isRawGallery: true,
    images: corporateImages
  });
}

export default function CorporatePortfolio() {
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    const cat = params.get('category');
    if (cat) {
      const catLower = cat.toLowerCase();
      if (catLower === 'conferences') return 'Conferences';
      if (catLower === 'corporate-uploads' || catLower === 'uploads') return 'Corporate Uploads';
      if (catLower === 'bgl-auctions' || catLower === 'auctions') return 'BGL Auctions';
      if (catLower === 'kp-transport' || catLower === 'kp') return 'KP Transport';
    }
    return 'All Projects';
  });
  const [activeProject, setActiveProject] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [networkNodes, setNetworkNodes] = useState([]);

  // Sync state if category changes via search query parameter
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get('category');
      if (cat) {
        const catLower = cat.toLowerCase();
        if (catLower === 'conferences') {
          setSelectedCategory('Conferences');
        } else if (catLower === 'corporate-uploads' || catLower === 'uploads') {
          setSelectedCategory('Corporate Uploads');
        } else if (catLower === 'bgl-auctions' || catLower === 'auctions') {
          setSelectedCategory('BGL Auctions');
        } else if (catLower === 'kp-transport' || catLower === 'kp') {
          setSelectedCategory('KP Transport');
        } else {
          setSelectedCategory('All Projects');
        }
      } else {
        setSelectedCategory('All Projects');
      }
    };
    window.addEventListener('popstate', handlePopState);
    handlePopState();
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Generate background network coordinates on mount
  useEffect(() => {
    const nodes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1.5 + Math.random() * 2,
      duration: 4 + Math.random() * 3
    }));
    setNetworkNodes(nodes);
  }, []);

  const usingUploaded = corporateProjects.length > 0;

  // Filter projects based on selected tab
  const filteredProjects = selectedCategory === 'All Projects'
    ? corporateProjects
    : corporateProjects.filter(p => p.categories.includes(selectedCategory));

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
    <div className="relative w-full min-h-screen bg-[#050505] text-[#FFFFFF] font-sans overflow-x-hidden selection:bg-[#2E6BFF]/30 selection:text-white pt-28 pb-16">

      {/* Blueprint Grid & Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(8,27,58,0.45),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(46,107,255,0.06),transparent_50%)]" />
        <div className="absolute inset-0 corp-blueprint-grid opacity-60" />
        <div className="absolute -top-[10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(46,107,255,0.05),transparent_60%)] corp-spotlight" />
        <div className="absolute top-[50%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(46,107,255,0.04),transparent_60%)] corp-spotlight" style={{ animationDelay: '-12s' }} />
      </div>

      {/* Network Nodes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
        {networkNodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute rounded-full bg-[#2E6BFF]"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              boxShadow: '0 0 10px #2E6BFF'
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.4, 1]
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-5 z-10">
        {/* Header */}
        <div className="text-center mt-12 mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
            <p className="text-base sm:text-lg font-semibold uppercase tracking-[0.34em] text-[#D4AF37]">
              Corporate Gallery
            </p>
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.15] max-w-4xl mx-auto">
            Corporate Production <span className="italic font-normal text-[#D4AF37]">Capture Grid</span>
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            A standalone space dedicated to raw photography captures of our stage set fabrications, registration desks, and summits.
          </p>



          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </div>

        {/* Category Navigation Tabs */}
        {usingUploaded && (
          <div className="flex flex-wrap justify-center items-center gap-3 mb-16 relative z-20">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase transition duration-300 font-sans border ${isSelected
                      ? 'border-[#2E6BFF] text-white shadow-sm'
                      : 'border-white/10 bg-[#151515]/40 text-white/70 hover:border-white/30 hover:text-white'
                    }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="activeCorpCategoryPill"
                      className="absolute inset-0 rounded-full bg-[#2E6BFF]/15"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Project Cards Grid or Placeholder */}
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
                    className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-[#151515] h-[380px] shadow-xl hover:border-[#2E6BFF]/50 transition-all duration-500 cursor-pointer"
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
                    <span className="absolute left-5 top-5 rounded-md border border-[#2E6BFF]/30 bg-black/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#2E6BFF] z-20">
                      {tag}
                    </span>

                    {/* Details */}
                    <div className="absolute bottom-5 left-5 right-5 z-20 flex flex-col justify-end">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#D4AF37] mb-1 text-left">
                        {subtitle}
                      </p>
                      <h3 className="font-serif text-2xl text-white group-hover:text-[#2E6BFF] transition-colors leading-snug text-left">
                        {title}
                      </h3>

                      {/* Hover Stats Section */}
                      <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-36 group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 border-t border-white/10 pt-4">
                        <div className="space-y-2 text-xs text-white/80 text-left">
                          <div className="flex items-center gap-2">
                            <MapPin size={13} className="text-[#2E6BFF] shrink-0" />
                            <span>{location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users size={13} className="text-[#2E6BFF] shrink-0" />
                            <span>{guests}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={13} className="text-[#2E6BFF] shrink-0" />
                            <span>{date}</span>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#2E6BFF] group-hover:translate-x-1 transition-transform text-left">
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
        ) : null}
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
                <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.34em] text-[#D4AF37]">
                  {activeProject.tag} — GALLERY
                </p>
                <h3 className="font-serif text-xl sm:text-2xl mt-1 text-white">
                  {activeProject.subtitle}
                </h3>
              </div>

              <div className="flex items-center gap-6">
                <span className="font-serif text-sm font-semibold text-[#D4AF37]">
                  {String(currentSlideIndex + 1).padStart(2, '0')} / {String(activeSlides.length).padStart(2, '0')}
                </span>

                <button
                  type="button"
                  onClick={closeLightbox}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-[#151515] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#050505]"
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
                className="absolute left-2 md:-left-12 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-[#151515]/90 text-[#D4AF37] backdrop-blur transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050505]"
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
                    <span key={i} className="h-1 w-1 rounded-full bg-[#2E6BFF]" />
                  ))}
                </div>

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
                className="absolute right-2 md:-right-12 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-[#151515]/90 text-[#D4AF37] backdrop-blur transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050505]"
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
