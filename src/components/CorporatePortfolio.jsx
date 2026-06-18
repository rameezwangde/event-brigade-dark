import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Users, Heart, Sparkles, ArrowRight, Cpu, Tv, Award } from 'lucide-react';

// Import local corporate assets
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

// Booklet pages for corporate showcase
const corporatePages = [
  { full: heroStage, thumb: heroStage, title: 'Large Format LED Stage Production' },
  { full: conferenceStage, thumb: conferenceStage, title: 'Main Conference Arena' },
  { full: awardsNight, thumb: awardsNight, title: 'Merit Awards Night Setup' },
  { full: registrationDesk, thumb: registrationDesk, title: 'Branded Registration and Access Flow' },
  { full: partnerMeet, thumb: partnerMeet, title: 'Channel Partner Summit Lounge' },
  { full: outdoorSetup, thumb: outdoorSetup, title: 'Outdoor Corporate Production' },
  { full: launchWalk, thumb: launchWalk, title: 'Product Launch Catwalk & Unveil' },
  { full: familyTheme, thumb: familyTheme, title: 'Tented Corporate Family Carnival' },
  { full: groupPhoto, thumb: groupPhoto, title: 'Outbound Team Strategy camp' },
  { full: clientMeet, thumb: clientMeet, title: 'CEO Roundtable Presentation' }
];

// Category filter tabs for corporate projects
const categories = [
  'All Projects',
  'Conferences',
  'Product Launches',
  'Awards & Galas',
  'Dealer Meets & Activations'
];

// Corporate Case Studies Data
const corporateCaseStudies = [
  {
    id: 1,
    title: 'Grand Summit 2026',
    subtitle: 'National B2B Tech Conference',
    highlight: 'Keynote Venue',
    categories: ['Conferences'],
    description: 'India\'s premier executive technology conference featuring multi-zone AV routing, digital queue check-ins, and a 60ft stage.',
    image: conferenceStage,
    location: 'JW Marriott, Pune',
    date: 'Jan 2026',
    guests: '1,200 Attendees',
    avSpecs: '60ft LED Backdrop | 4K Broadcast',
    pageRange: [1, 2] // Main Conference, Awards
  },
  {
    id: 2,
    title: 'Next-Gen SUV Unveil',
    subtitle: 'Automobile Product Launch',
    highlight: 'Product Reveal',
    categories: ['Product Launches'],
    description: 'A B2B launch catwalk reveal integrating laser mapping, mechanical turntable reveal plates, and media streaming setups.',
    image: launchWalk,
    location: 'Nesco Exhibition Centre, Mumbai',
    date: 'Feb 2026',
    guests: '800 VIPs',
    avSpecs: '3D Laser Mapping | 12K Lumens Projectors',
    pageRange: [6, 6] // Product Launch Catwalk
  },
  {
    id: 3,
    title: 'B2B Channel Syndicate',
    subtitle: 'Channel Partner & Dealer Forum',
    highlight: 'Dealer Meets',
    categories: ['Dealer Meets & Activations'],
    description: 'Outdoor partner conference styled with premium custom lounges, exhibition booths, and executive hospitality.',
    image: partnerMeet,
    location: 'Sheraton Grand Lawn, Pune',
    date: 'Nov 2025',
    guests: '400 Delegates',
    avSpecs: 'Outdoor Sound Array | Custom Booth Fab',
    pageRange: [4, 5] // Partner Meet, Outdoor Production
  },
  {
    id: 4,
    title: 'Annual Merit Awards',
    subtitle: 'MNC Recognition Ceremony',
    highlight: 'Awards & Galas',
    categories: ['Awards & Galas'],
    description: 'High-value employee recognition ceremony with suspended truss structures, 3D fabrications, and live broadcast arrays.',
    image: awardsNight,
    location: 'Conrad Grand Ballroom, Pune',
    date: 'Dec 2025',
    guests: '1,500 Attendees',
    avSpecs: 'FOH Broadcast Array | Line Array Audio',
    pageRange: [2, 2] // Awards setup
  },
  {
    id: 5,
    title: 'Tech Expo Pavilion',
    subtitle: 'Exhibition Stall & Access Management',
    highlight: 'Corporate Exhibition',
    categories: ['Conferences', 'Dealer Meets & Activations'],
    description: 'CREDAI Tech Expo registration pavilion, custom entrance fabrications, visitor access flows, and security protocols.',
    image: registrationDesk,
    location: 'Agriculture Ground, Pune',
    date: 'Oct 2025',
    guests: '2,500 Daily Footfall',
    avSpecs: 'Branded Registration Desks | RFID Gates',
    pageRange: [3, 3] // Registration Flow
  },
  {
    id: 6,
    title: 'CEO Leadership Roundtable',
    subtitle: 'High-Confidentiality Strategy Meet',
    highlight: 'CEO Presentations',
    categories: ['Conferences'],
    description: 'Lodha Group executive board roundtable meeting, designed under exact NDA security protocols and VIP liaison.',
    image: clientMeet,
    location: 'Ritz-Carlton, Pune',
    date: 'March 2026',
    guests: '30 Executives',
    avSpecs: 'UHD Presentation Screens | Secure Audio',
    pageRange: [9, 9] // CEO Roundtable
  },
  {
    id: 7,
    title: 'Experiential Brand Launch',
    subtitle: 'Immersive B2B Brand Activation',
    highlight: 'Brand Activations',
    categories: ['Dealer Meets & Activations'],
    description: 'Interactive B2B brand activation for Nestle, combining sensory AV modules, beachside production, and live violin queues.',
    image: heroStage,
    location: 'W Hotel Beachfront, Goa',
    date: 'April 2026',
    guests: '300 Brand Partners',
    avSpecs: 'L-Acoustics Sound Array | Pixel Mapping',
    pageRange: [0, 0] // Large Stage Production
  }
];

export default function CorporatePortfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [activeProject, setActiveProject] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
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

  // Filter projects based on selected category tab
  const filteredProjects = selectedCategory === 'All Projects'
    ? corporateCaseStudies
    : corporateCaseStudies.filter(p => p.categories.includes(selectedCategory));

  // Lightbox handles
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

  const activeSlides = activeProject
    ? corporatePages.slice(activeProject.pageRange[0], activeProject.pageRange[1] + 1)
    : [];

  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-[#FFFFFF] font-sans overflow-x-hidden selection:bg-[#2E6BFF]/30 selection:text-white pt-28 pb-16">
      
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

      {/* Abstract Network Lines */}
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

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-5 mt-12 z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.36em] text-[#D4AF37]">
                Enterprise Portfolio
              </p>
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.15] max-w-4xl mx-auto">
              Event Production <span className="italic font-normal text-[#D4AF37]">Case Studies</span>
            </h1>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              Explore a selection of our large-scale corporate conferences, summits, launches, and activations produced under exact brand specifications.
            </p>

            <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          </motion.div>
        </div>

        {/* Category Tabs */}
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

        {/* Case Studies Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const { title, subtitle, highlight, image, location, date, guests, avSpecs } = project;
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
                    {highlight}
                  </span>

                  {/* Case Study Details */}
                  <div className="absolute bottom-5 left-5 right-5 z-20 flex flex-col justify-end">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#2E6BFF] mb-1">
                      {subtitle}
                    </p>
                    <h3 className="font-serif text-2xl text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                      {title}
                    </h3>
                    
                    {/* Hover Stats Section - Fades in & slides up */}
                    <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-36 group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 border-t border-white/10 pt-4">
                      <div className="space-y-2 text-xs text-white/80">
                        <div className="flex items-center gap-2">
                          <MapPin size={13} className="text-[#D4AF37]" />
                          <span>{location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={13} className="text-[#D4AF37]" />
                          <span>{guests}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Cpu size={13} className="text-[#D4AF37]" />
                          <span className="truncate">{avSpecs}</span>
                        </div>
                      </div>

                      {/* View Project Action */}
                      <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                        <span>View Project Case</span>
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

      {/* Lightbox / B2B Case Study Booklet Overlay */}
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
              <div className="text-white">
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#D4AF37] bg-white/5 border border-white/5 px-2.5 py-1 rounded">
                  CASE STUDY — {activeProject.highlight}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl mt-2 text-white">
                  {activeProject.title} — {activeProject.subtitle}
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
                  aria-label="Close case study"
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
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Slide Image Box */}
              <div className="w-full h-[62vh] md:h-[68vh] rounded-2xl border border-white/10 bg-[#050505] p-2 sm:p-4 shadow-2xl flex items-center justify-center overflow-hidden relative">
                {/* Tech blue layout overlay inside image frame */}
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
                    alt={activeSlides[currentSlideIndex]?.title || 'Case page'}
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
                aria-label="Next slide"
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
