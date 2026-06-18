import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

// Import corporate assets as fallbacks
import heroStage from '../assets/corporate-extracted/corporate-p15-xref1070.jpg';
import conferenceStage from '../assets/corporate-extracted/corporate-p17-xref1109.jpg';
import awardsNight from '../assets/corporate-extracted/corporate-p08-xref843.jpg';
import registrationDesk from '../assets/corporate-extracted/corporate-p14-xref1057.jpg';
import partnerMeet from '../assets/corporate-extracted/corporate-p14-xref1046.jpg';
import outdoorSetup from '../assets/corporate-extracted/corporate-p13-xref1011.jpg';
import launchWalk from '../assets/corporate-extracted/corporate-p14-xref1054.jpg';
import familyTheme from '../assets/corporate-extracted/corporate-p15-xref1073.jpg';
import groupPhoto from '../assets/corporate-extracted/corporate-p13-xref1020.jpg';
import clientMeet from '../assets/corporate-extracted/corporate-p12-xref973.jpg';

// Scan the corporate raw uploads directory dynamically
const corporateGlob = import.meta.glob('../assets/corporate-gallery/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true });
const rawUploadedImages = Object.values(corporateGlob)
  .map((mod) => mod.default || mod)
  .filter((path) => !path.includes('placeholder'));

// Curated fallbacks with tags for a structured gallery before user uploads photos
const fallbackCorporatePhotos = [
  { url: heroStage, category: 'Stages', title: 'Main LED Stage Set' },
  { url: conferenceStage, category: 'Conferences', title: 'Executive Summit Arena' },
  { url: awardsNight, category: 'Galas', title: 'MNC Annual Awards Gala' },
  { url: registrationDesk, category: 'Logistics', title: 'RFID Access Registration Desk' },
  { url: partnerMeet, category: 'Dealer Meets', title: 'Partner Summit Lounge' },
  { url: outdoorSetup, category: 'Outdoor', title: 'Outdoor Corporate Event' },
  { url: launchWalk, category: 'Product Launches', title: 'SUV Catwalk Unveil' },
  { url: familyTheme, category: 'Outdoor', title: 'Tented Corporate Carnival' },
  { url: groupPhoto, category: 'Team Building', title: 'Executive Team Strategy Camp' },
  { url: clientMeet, category: 'Conferences', title: 'CEO Leadership Roundtable' }
];

const categories = ['All Projects', 'Conferences', 'Stages', 'Product Launches', 'Galas', 'Dealer Meets', 'Team Building'];

export default function CorporatePortfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);
  const [networkNodes, setNetworkNodes] = useState([]);

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

  const usingUploaded = rawUploadedImages.length > 0;

  // Build the list of images to render in the grid
  const galleryImages = usingUploaded
    ? rawUploadedImages.map((path, idx) => ({
        url: path,
        category: 'Uploads',
        title: `Corporate Photo ${idx + 1}`
      }))
    : fallbackCorporatePhotos;

  // Filter images based on category tabs
  const filteredImages = selectedCategory === 'All Projects' || usingUploaded
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (idx) => {
    setActivePhotoIndex(idx);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
    document.body.style.overflow = '';
  };

  const nextPhoto = () => {
    setActivePhotoIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  const prevPhoto = () => {
    setActivePhotoIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

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
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.36em] text-[#D4AF37]">
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

          {/* Status Alert Badge */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#151515]/90 px-4.5 py-2 text-xs font-semibold tracking-wide text-[#D4AF37] shadow-lg">
            <ImageIcon size={14} />
            <span>
              {usingUploaded
                ? 'Displaying uploaded corporate files'
                : 'Curated Fallback Mode — Upload folders to src/assets/corporate-gallery to update'}
            </span>
          </div>

          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </div>

        {/* Category Tabs */}
        {!usingUploaded && (
          <div className="flex flex-wrap justify-center items-center gap-3 mb-16 relative z-20">
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

        {/* Raw Photos Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.url}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-[20px] border border-white/10 bg-[#151515] shadow-lg hover:border-[#2E6BFF]/50 transition duration-500 cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                
                {/* Overlay details on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white z-10">
                  {!usingUploaded && (
                    <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-semibold mb-1">
                      {img.category}
                    </span>
                  )}
                  <h3 className="font-serif text-lg text-white text-left">{img.title}</h3>
                  <p className="text-[10px] text-white/50 tracking-wider uppercase mt-1.5 text-left">Click to view full size</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Viewer */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#050505]/98 p-4 md:p-6 lg:p-8"
            onClick={closeLightbox}
          >
            {/* Header */}
            <div className="max-w-7xl w-full mx-auto flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
              <div className="text-white text-left">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37] bg-white/5 border border-white/10 px-2 py-1 rounded">
                  {filteredImages[activePhotoIndex]?.category || 'Corporate Gallery'}
                </span>
                <h3 className="font-serif text-lg sm:text-xl mt-1 text-white">
                  {filteredImages[activePhotoIndex]?.title}
                </h3>
              </div>

              <div className="flex items-center gap-6">
                <span className="font-serif text-sm font-semibold text-[#D4AF37]">
                  {String(activePhotoIndex + 1).padStart(2, '0')} / {String(filteredImages.length).padStart(2, '0')}
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

            {/* Showcase Arena */}
            <div className="flex-grow flex items-center justify-center max-w-5xl w-full mx-auto my-4 relative" onClick={(e) => e.stopPropagation()}>
              {/* Left Arrow */}
              <button
                type="button"
                onClick={prevPhoto}
                className="absolute left-2 md:-left-12 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-[#151515]/90 text-[#D4AF37] backdrop-blur transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050505]"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Image Box */}
              <div className="w-full h-[62vh] md:h-[68vh] rounded-2xl border border-white/10 bg-[#050505] p-2 sm:p-4 shadow-2xl flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-4 border border-white/5 pointer-events-none rounded-xl" />
                <div className="absolute top-6 left-6 grid grid-cols-2 gap-1.5 opacity-10 pointer-events-none">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <span key={i} className="h-1 w-1 rounded-full bg-[#2E6BFF]" />
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.img
                    key={filteredImages[activePhotoIndex]?.url}
                    src={filteredImages[activePhotoIndex]?.url}
                    alt={filteredImages[activePhotoIndex]?.title}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="max-h-full max-w-full object-contain rounded-lg relative z-10"
                  />
                </AnimatePresence>
              </div>

              {/* Right Arrow */}
              <button
                type="button"
                onClick={nextPhoto}
                className="absolute right-2 md:-right-12 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-[#151515]/90 text-[#D4AF37] backdrop-blur transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050505]"
                aria-label="Next image"
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
