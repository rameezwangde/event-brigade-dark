import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ClipboardCheck,
  Gem,
  Handshake,
  Lightbulb,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Presentation,
  Award,
  Globe,
  Milestone,
  Smile,
  Cpu,
  Tv,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Users
} from 'lucide-react';
import { services, corporatePortfolio } from '../data.js';
import Reveal from './Reveal.jsx';

// Import corporate assets
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
import reviewOne from '../assets/corporate-extracted/corporate-p18-xref1127.jpg';
import reviewTwo from '../assets/corporate-extracted/corporate-p18-xref1184.jpg';

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

// Mapping of process steps to Lucide icons
const processIcons = [Target, Lightbulb, Gem, ClipboardCheck, Handshake, BadgeCheck];
const strengthIcons = [ShieldCheck, BadgeCheck, ClipboardCheck, Sparkles];

// 8 Premium B2B Corporate Formats
const b2bCorporateServices = [
  {
    number: '01',
    title: 'Annual Days',
    image: awardsNight,
    icon: Milestone,
    description: 'High-impact B2B themes, customized LED backdrop graphics, precise stage set fabrications, and professional lighting control.'
  },
  {
    number: '02',
    title: 'Product Launches',
    image: launchWalk,
    icon: Cpu,
    description: 'Strategic reveal moments, 3D projection mapping, laser installations, media coordinates, and secure VIP logistics.'
  },
  {
    number: '03',
    title: 'Conferences & Summits',
    image: conferenceStage,
    icon: Globe,
    description: 'High-spec multi-room AV setups, check-in systems, live video broadcast setups, speaker queues, and seating plans.'
  },
  {
    number: '04',
    title: 'Awards Nights',
    image: registrationDesk, // Reusing local assets
    icon: Award,
    description: 'Chronological trophy lists, professional sound design, VIP registration queues, and high-spec corporate F&B curation.'
  },
  {
    number: '05',
    title: 'Dealer Meets',
    image: partnerMeet,
    icon: Handshake,
    description: 'Distributor forums, interactive networking lounges, custom brand exhibitions, and outdoor event spaces.'
  },
  {
    number: '06',
    title: 'Family Days',
    image: familyTheme,
    icon: Smile,
    description: 'Bespoke corporate employee engagement carnivals, family-friendly game zones, stage acts, and safety protocols.'
  },
  {
    number: '07',
    title: 'Team Building Experiences',
    image: groupPhoto,
    icon: UsersRound,
    description: 'Outbound corporate retreats, custom team challenges, interactive team strategies, and fully managed travel.'
  },
  {
    number: '08',
    title: 'Leadership Events',
    image: clientMeet,
    icon: Presentation,
    description: 'Boardroom leadership roundtables, high-confidentiality B2B setups, transport coordination, and luxury hospitality.'
  }
];

// Corporate Showcase Config
const corporateShowcase = {
  hero: heroStage,
  eyebrow: 'Corporate Showcase',
  title: 'Precision Corporate Event Management & Production',
  text: 'At Event Brigade, we engineer custom B2B experiences with bulletproof logistics, state-of-the-art stage fabrications, and precise technical orchestration. From initial blueprint to final live broadcast, we handle the complexity so your leadership can focus on driving impact.',
  modules: [
    {
      title: 'Stage Production & AV',
      text: 'Bespoke stage designs, large-format LED screen setups, line-array audio, and multi-camera broadcast systems.',
      image: conferenceStage
    },
    {
      title: 'Logistics & RSVP Flow',
      text: 'Secure executive check-in, RFID badge scanning, multi-hotel hospitality, and VIP transport networks.',
      image: registrationDesk
    },
    {
      title: 'Product Unveils',
      text: 'Theatrical product reveals with synchronous laser shows, turntable setups, and high-impact sound design.',
      image: launchWalk
    },
    {
      title: 'Partner Meets',
      text: 'Exhibition stalls fabrication, interactive lounge zones, and tailored executive hospitality for dealer forums.',
      image: partnerMeet
    },
    {
      title: 'Awards Gala Setups',
      text: 'Red carpet entries, trophy presentations, live entertainment curation, and premium F&B logistics.',
      image: awardsNight
    },
    {
      title: 'Corporate Outbounds',
      text: 'Team building retreats, custom games, stage events, and safety-audited employee carnivals.',
      image: familyTheme
    }
  ],
  gallery: [heroStage, conferenceStage, launchWalk, partnerMeet]
};

export default function CorporateServices() {
  const [activeModule, setActiveModule] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [networkNodes, setNetworkNodes] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);

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

  // Generate background network coordinates on mount
  useEffect(() => {
    const nodes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1.5 + Math.random() * 2,
      duration: 3 + Math.random() * 4
    }));
    setNetworkNodes(nodes);
  }, []);

  const corporateData = services.find(s => s.title === 'Corporate Events') || { servicesWeProvide: [] };
  const splitIndex = Math.floor(corporateData.servicesWeProvide.length / 2);
  const corporateEventsList = corporateData.servicesWeProvide.slice(0, splitIndex);
  const corporateSolutionsList = corporateData.servicesWeProvide.slice(splitIndex);

  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-[#FFFFFF] font-sans overflow-x-hidden selection:bg-[#2E6BFF]/30 selection:text-white pt-28 pb-16">
      
      {/* Blueprint Grid & Spotlights Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Navy Mesh Radial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(8,27,58,0.45),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(46,107,255,0.06),transparent_50%)]" />
        
        {/* Tech Blueprint Grid */}
        <div className="absolute inset-0 corp-blueprint-grid opacity-60" />

        {/* Dynamic Sweeping Spotlight Beams */}
        <div className="absolute -top-[10%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(46,107,255,0.06),transparent_60%)] corp-spotlight" />
        <div className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(46,107,255,0.04),transparent_60%)] corp-spotlight" style={{ animationDelay: '-8s' }} />
      </div>

      {/* Abstract Network Connection Lines */}
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
        {/* SVG connection beams */}
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {networkNodes.slice(0, -1).map((node, i) => {
            const next = networkNodes[i + 1];
            return (
              <line
                key={i}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${next.x}%`}
                y2={`${next.y}%`}
                stroke="rgba(46, 107, 255, 0.08)"
                strokeWidth="0.5"
              />
            );
          })}
        </svg>
      </div>

      {/* Main Page Layout */}
      <div className="relative max-w-7xl mx-auto px-5 mt-12 z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.36em] text-[#D4AF37]">
                Corporate Events & Production
              </p>
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.15] max-w-4xl mx-auto">
              Engineered For <span className="italic font-normal text-[#D4AF37]">Corporate</span> Impact
            </h1>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              From strategy and production to hospitality and execution, we deliver B2B experiences that strengthen brands, engage audiences, and drive measurable enterprise outcomes.
            </p>

            <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          </Reveal>
        </div>

        {/* Corporate Showcase Panel */}
        <div className="mt-8">
          <Reveal
            id="corporate"
            className="overflow-hidden rounded-[24px] border border-white/10 bg-[#151515]/90 shadow-2xl scroll-mt-28"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              {/* Left Side: LED Keynote Image */}
              <div className="relative min-h-[440px] overflow-hidden lg:min-h-full">
                <img
                  src={corporateShowcase.hero}
                  alt="Corporate Event Production"
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    activeModule !== null ? 'opacity-0 scale-100' : 'opacity-100 scale-105'
                  }`}
                />

                {corporateShowcase.modules.map((module, index) => (
                  <img
                    key={module.title}
                    src={module.image}
                    alt={module.title}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                      activeModule === index ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                    }`}
                  />
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-[#050505]/30 z-10" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D4AF37] bg-black/40 px-3.5 py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
                    {corporateShowcase.eyebrow}
                  </span>
                  <h3 className="mt-4 font-serif text-3xl sm:text-4xl text-white leading-snug">
                    {corporateShowcase.title}
                  </h3>
                  <a
                    href="#portfolio-grid"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('portfolio-grid');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-[#2E6BFF] transition-colors"
                  >
                    View Case Studies <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* Right Side: Interactive Modules */}
              <div className="flex flex-col justify-center p-6 sm:p-10 md:p-12 bg-[#151515]/80">
                <p className="text-sm sm:text-base leading-relaxed text-white/75">{corporateShowcase.text}</p>
                
                <div className="mt-8 divide-y divide-white/5">
                  {corporateShowcase.modules.map((module, index) => {
                    const isHovered = activeModule === index;
                    return (
                      <div
                        key={module.title}
                        onMouseEnter={() => setActiveModule(index)}
                        onMouseLeave={() => setActiveModule(null)}
                        className="group cursor-pointer py-4 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-5">
                            <span className={`font-mono text-xs tracking-wider transition-colors duration-300 ${isHovered ? 'text-[#D4AF37]' : 'text-white/40'}`}>
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <h4 className={`font-serif text-xl sm:text-2xl transition-all duration-300 ${isHovered ? 'text-[#D4AF37] pl-2' : 'text-white'}`}>
                              {module.title}
                            </h4>
                          </div>
                          <div className={`h-1.5 w-1.5 rounded-full bg-[#D4AF37] transition-all duration-500 ${isHovered ? 'opacity-100 scale-125' : 'opacity-0 scale-50'}`} />
                        </div>
                        
                        <div
                          className={`grid transition-all duration-500 ease-in-out ${
                            isHovered ? 'grid-rows-[1fr] opacity-100 mt-3.5' : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="pl-10 text-xs sm:text-sm leading-relaxed text-white/70">
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

            {/* Auto Scrolling Banner */}
            <div className="overflow-hidden border-t border-white/5 bg-[#050505]/45">
              <div className="auto-scroll-gallery flex w-max gap-0">
                {[...corporateShowcase.gallery, ...corporateShowcase.gallery].map((image, idx) => (
                  <img
                    key={`scroll-img-${idx}-${image}`}
                    src={image}
                    alt={`Summit moment ${idx + 1}`}
                    loading="lazy"
                    className="h-36 w-[55vw] shrink-0 object-cover opacity-60 transition duration-300 hover:opacity-100 sm:w-[35vw] lg:w-72 border-r border-white/5"
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* 8 Premium Corporate Cards Grid */}
        <div className="mt-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-[1px] bg-[#2E6BFF]" />
                <p className="text-xs font-semibold uppercase tracking-widest text-[#2E6BFF]">Capabilities</p>
                <span className="w-5 h-[1px] bg-[#2E6BFF]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">
                Enterprise Production Formats
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
            {b2bCorporateServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal
                  key={service.title}
                  delay={index * 0.04}
                  className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-[#151515] shadow-lg transition-all duration-500 hover:-translate-y-1.5 border-t-2 hover:border-t-2 hover:border-t-[#2E6BFF] border-t-[#D4AF37] corp-blue-glow-hover flex flex-col h-full cursor-pointer"
                  onClick={() => {
                    const projectMap = {
                      'Conferences & Summits': 'Grand Summit 2026',
                      'Product Launches': 'Next-Gen SUV Unveil',
                      'Dealer Meets': 'B2B Channel Syndicate',
                      'Awards Nights': 'Annual Merit Awards',
                      'Annual Days': 'Experiential Brand Launch',
                      'Leadership Events': 'CEO Leadership Roundtable'
                    };
                    const targetTitle = projectMap[service.title];
                    if (targetTitle) {
                      const proj = corporateCaseStudies.find(p => p.title === targetTitle);
                      if (proj) {
                        openLightbox(proj);
                      }
                    }
                  }}
                >
                  {/* Card Image Area */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Dark mask overlay */}
                    <div className="absolute inset-0 bg-[#050505]/40" />
                    
                    {/* Floating index tag */}
                    <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-[#050505]/80 px-3 py-1 text-[10px] font-mono font-bold text-[#D4AF37]">
                      {service.number}
                    </span>

                    {/* Icon container */}
                    <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-[#050505]/85 text-[#D4AF37] backdrop-blur-sm">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-5 flex-grow flex flex-col justify-between bg-[#151515]">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl text-white leading-snug transition-colors group-hover:text-[#D4AF37]">
                        {service.title}
                      </h3>
                      <p className="mt-3.5 text-xs sm:text-sm text-white/70 leading-relaxed text-justify">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Strategic Workflow Section */}
        <div className="mt-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-[1px] bg-[#D4AF37]" />
                <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">Strategic Process</p>
                <span className="w-5 h-[1px] bg-[#D4AF37]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">
                Discipline-Led Event Architecture
              </h2>
            </Reveal>
          </div>

          {/* Creative Connected Roadmap */}
          <div className="relative mt-20 mx-auto max-w-6xl px-4">
            {/* The Connecting Line (Desktop) */}
            <div className="absolute left-10 right-10 top-10 hidden h-[2px] bg-gradient-to-r from-[#D4AF37]/10 via-[#2E6BFF]/30 to-[#D4AF37]/10 lg:block">
              {/* Active Progress glow indicator */}
              <div 
                className="h-full bg-gradient-to-r from-[#2E6BFF] to-[#D4AF37] transition-all duration-700 ease-out shadow-[0_0_15px_#2E6BFF]"
                style={{ width: `${(activeStep / 5) * 100}%` }}
              />
            </div>

            {/* The Connecting Line (Mobile/Tablet) */}
            <div className="absolute left-10 bottom-8 top-10 w-[2px] bg-gradient-to-b from-[#D4AF37]/10 via-[#2E6BFF]/30 to-[#D4AF37]/10 lg:hidden">
              <div 
                className="w-full bg-gradient-to-b from-[#2E6BFF] to-[#D4AF37] transition-all duration-700 ease-out shadow-[0_0_15px_#2E6BFF]"
                style={{ height: `${(activeStep / 5) * 100}%` }}
              />
            </div>

            {/* Steps Container */}
            <div className="relative grid gap-12 lg:grid-cols-6 lg:gap-6">
              {corporatePortfolio.workflow.map((stepName, index) => {
                const Icon = processIcons[index] || Check;
                const isActive = activeStep === index;
                const isHovered = hoveredStep === index;
                
                // Detailed descriptions for each step to make the roadmap rich
                const stepDescriptions = [
                  "Understanding goals, audience metrics, theme design preferences, and branding targets.",
                  "Defining strict timelines, budget coordinates, team assignments, and operational blueprints.",
                  "Developing 3D stage renders, screen templates, layout maps, and technical specs.",
                  "Managing check-in queues, VIP logistics, technical calls, and real-time execution flow.",
                  "Selecting and coordinating onboarding checklists for vetted vendors and local security.",
                  "Assembling client evaluations, item counts, and reconciliation audits."
                ];

                return (
                  <Reveal
                    key={stepName}
                    delay={index * 0.05}
                    className="relative flex lg:flex-col items-start lg:items-center text-left lg:text-center group"
                  >
                    {/* Interactive Node Point */}
                    <div 
                      className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border transition-all duration-500 cursor-pointer lg:mx-auto"
                      style={{
                        borderColor: isActive || isHovered ? '#D4AF37' : 'rgba(255, 255, 255, 0.1)',
                        backgroundColor: isActive || isHovered ? '#151515' : '#0D0D0D',
                        boxShadow: isActive || isHovered ? '0 0 25px rgba(212, 175, 55, 0.25)' : 'none'
                      }}
                      onMouseEnter={() => {
                        setHoveredStep(index);
                        setActiveStep(index);
                      }}
                      onMouseLeave={() => setHoveredStep(null)}
                      onClick={() => setActiveStep(index)}
                    >
                      {/* Step Indicator Number */}
                      <span className="absolute -top-3 -right-3 font-mono text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/10 bg-[#050505] text-[#D4AF37]">
                        0{index + 1}
                      </span>
                      
                      <Icon 
                        size={26} 
                        className="transition-transform duration-500 group-hover:scale-110"
                        style={{ color: isActive || isHovered ? '#D4AF37' : 'rgba(255,255,255,0.4)' }}
                      />
                    </div>

                    {/* Step Content Card */}
                    <div 
                      className="ml-6 lg:ml-0 lg:mt-6 transition-all duration-500 lg:w-full"
                      onMouseEnter={() => {
                        setHoveredStep(index);
                        setActiveStep(index);
                      }}
                      onMouseLeave={() => setHoveredStep(null)}
                    >
                      <h3 
                        className="font-serif text-lg md:text-xl font-semibold transition-colors duration-300"
                        style={{ color: isActive || isHovered ? '#D4AF37' : '#FFFFFF' }}
                      >
                        {stepName}
                      </h3>
                      
                      <p 
                        className="mt-3 text-xs md:text-sm leading-relaxed text-white/60 transition-opacity duration-500 text-justify lg:text-center"
                        style={{ opacity: isActive || isHovered ? 1 : 0.6 }}
                      >
                        {stepDescriptions[index]}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* Strengths & Executive Focus Section */}
        <div className="mt-28 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative overflow-hidden rounded-[24px] border border-white/10 shadow-2xl h-full min-h-[380px] lg:min-h-full">
            <img
              src={conferenceStage}
              alt="High-spec corporate summit setup"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-[4000ms]"
            />
            {/* Soft dark tech gradient */}
            <div className="absolute inset-0 bg-[#050505]/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#2E6BFF] border border-[#2E6BFF]/35 bg-[#2E6BFF]/10 px-3 py-1.5 rounded-full">
                Operations
              </span>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-white leading-snug">
                Discipline Meets Brand Strategy
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {corporatePortfolio.strengths.map((strength, index) => {
              const Icon = strengthIcons[index] || ShieldCheck;
              return (
                <Reveal
                  key={strength.title}
                  delay={index * 0.05}
                  className="rounded-[20px] border border-white/10 bg-[#151515] p-6 h-full flex flex-col justify-start hover:border-[#D4AF37]/40 transition-colors"
                >
                  <Icon className="mb-4 text-[#D4AF37]" size={26} />
                  <h3 className="font-serif text-xl sm:text-2xl text-white">{strength.title}</h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/70">{strength.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Detailed Capabilities Lists */}
        <div className="mt-28 grid gap-6 md:grid-cols-2">
          <Reveal
            className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#151515]/60 p-8 shadow-xl transition-all duration-300 hover:border-[#D4AF37]/30 h-full flex flex-col"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]/80 font-sans">Operations & Management</p>
            <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold text-white">Corporate Events Checklist</h3>
            <div className="mt-4 h-[1px] w-24 bg-gradient-to-r from-[#D4AF37] to-transparent" />
            
            <ul className="mt-6.5 grid gap-x-6 gap-y-3.5 sm:grid-cols-2 flex-grow">
              {corporateEventsList.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed text-white/85"
                >
                  <span className="mt-1 shrink-0 text-[#D4AF37] text-[8px]">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.08}
            className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#151515]/60 p-8 shadow-xl transition-all duration-300 hover:border-[#D4AF37]/30 h-full flex flex-col"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]/80 font-sans">Technical Production</p>
            <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold text-white">Corporate Solutions Checklist</h3>
            <div className="mt-4 h-[1px] w-24 bg-gradient-to-r from-[#D4AF37] to-transparent" />
            
            <ul className="mt-6.5 grid gap-x-6 gap-y-3.5 sm:grid-cols-2 flex-grow">
              {corporateSolutionsList.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed text-white/85"
                >
                  <span className="mt-1 shrink-0 text-[#D4AF37] text-[8px]">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Enterprise Client Logs */}
        <div className="mt-28 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="rounded-[24px] border border-white/10 bg-[#151515] p-7 md:p-9 shadow-xl flex flex-col justify-between h-full">
            <div>
              <UsersRound className="mb-5 text-[#D4AF37]" size={28} />
              <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">Corporate Credentials</p>
              <h2 className="mt-3 font-serif text-3xl text-white">MNC Brands Trust Event Brigade</h2>
              <p className="mt-3 text-xs sm:text-sm text-white/70">
                Delivering secure, brand-aligned, and logistically sound event executions across corporate hubs in India.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-3.5">
              {corporatePortfolio.clients.map((client) => (
                <div
                  key={client}
                  className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-[#050505]/75 px-5 py-3 text-xs sm:text-sm text-white/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2E6BFF] shrink-0" />
                  <span>{client}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="grid gap-4 sm:grid-cols-2 h-full">
            {[reviewOne, reviewTwo].map((review, idx) => (
              <div
                key={review}
                className="overflow-hidden rounded-[20px] border border-white/10 bg-[#151515] p-5 shadow-lg h-full flex items-center justify-center hover:border-white/20 transition-all duration-300"
              >
                <img
                  src={review}
                  alt={`Corporate client review ${idx + 1}`}
                  loading="lazy"
                  className="h-full w-full rounded-xl object-contain filter brightness-95 hover:brightness-100 transition-all duration-300"
                />
              </div>
            ))}
          </Reveal>
        </div>

        {/* PORTFOLIO GRID SECTION */}
        <div id="portfolio-grid" className="mt-32 scroll-mt-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-[1px] bg-[#D4AF37]" />
                <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">Case Studies</p>
                <span className="w-5 h-[1px] bg-[#D4AF37]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">
                Selected Project Showcase
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {corporateCaseStudies.map((project, idx) => {
              const { title, subtitle, highlight, image, location, date, guests, avSpecs } = project;
              return (
                <Reveal
                  key={project.id}
                  delay={idx * 0.05}
                  className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-[#151515] h-[380px] shadow-xl hover:border-[#2E6BFF]/50 transition-all duration-500 cursor-pointer"
                  onClick={() => openLightbox(project)}
                >
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent z-10" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500 z-10" />

                  <span className="absolute left-5 top-5 rounded-md border border-[#D4AF37]/30 bg-black/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#D4AF37] z-20">
                    {highlight}
                  </span>

                  <div className="absolute bottom-5 left-5 right-5 z-20 flex flex-col justify-end">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#2E6BFF] mb-1 text-left font-sans">
                      {subtitle}
                    </p>
                    <h3 className="font-serif text-2xl text-white group-hover:text-[#D4AF37] transition-colors leading-snug text-left">
                      {title}
                    </h3>
                    
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
                          <Cpu size={13} className="text-[#D4AF37] shrink-0" />
                          <span>{avSpecs}</span>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] group-hover:translate-x-1 transition-transform text-left">
                        <span>Explore Case</span>
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Final Consultation Call to Action */}
        <Reveal className="mt-28 text-center max-w-4xl mx-auto border border-white/10 bg-[#151515]/50 p-8 sm:p-12 md:p-16 rounded-[32px] relative overflow-hidden">
          {/* Faint blueprint watermark */}
          <div className="absolute inset-0 corp-blueprint-grid opacity-20 z-0 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <Quote className="mx-auto text-[#D4AF37] mb-6" size={32} />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Engineered For Impact.<br />
              <span className="text-[#D4AF37] italic font-normal">Delivered With Precision.</span>
            </h2>
            <p className="mt-6 text-white/70 text-xs sm:text-sm leading-relaxed">
              Partner with Kunal Garg and the Event Brigade team to execute your next leadership summit, product unveiler, awards ceremony, or dealer forum.
            </p>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/contact');
              }}
              className="gold-shimmer-btn inline-flex items-center gap-3 text-obsidian font-bold text-sm sm:text-base uppercase tracking-[0.2em] px-10 py-4 rounded-full hover:shadow-glow transition-all duration-300 mt-10"
            >
              Initiate Project Briefing <ArrowRight size={14} />
            </a>
          </div>
        </Reveal>

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
              <div className="text-white text-left">
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
