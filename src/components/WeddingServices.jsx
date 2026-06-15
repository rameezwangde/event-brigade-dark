import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ClipboardCheck,
  Gem,
  Gift,
  Heart,
  Hotel,
  MapPinned,
  Music,
  Palette,
  Plane,
  Sparkles,
  Utensils,
  UsersRound
} from 'lucide-react';
import { services, weddingShowcase } from '../data.js';
import Reveal from './Reveal.jsx';

// Import local premium assets
import weddingStage from '../assets/weddings/wedding-stage.jpg';
import weddingInvites from '../assets/weddings/wedding-invites.jpg';
import guestWelcome from '../assets/weddings/guest-welcome.jpg';
import weddingDecor from '../assets/weddings/wedding-decor.jpg';
import haldiMehendi from '../assets/weddings/haldi-mehendi.jpg';
import reception from '../assets/weddings/reception.jpg';
import specialEntry from '../assets/weddings/special-entry.jpg';
import weddingActivities from '../assets/weddings/wedding-activities.jpg';
import sangeetVisual from '../assets/weddings/pdf-page25-xref298.jpg';
import poolPartyVisual from '../assets/weddings/pdf-page28-xref330.jpg';
import mandapVisual from '../assets/weddings/pdf-page21-xref1238.jpg';
import brideGroomVisual from '../assets/weddings/pdf-page30-xref363.jpg';

const planningServices = [
  {
    title: 'Invitation & Guest RSVP',
    icon: Heart,
    image: weddingInvites,
    items: ['Wedding logo and e-invites', 'Dedicated guest communication number', 'Bulk messaging and RSVP data collection']
  },
  {
    title: 'Logistics',
    icon: MapPinned,
    image: guestWelcome,
    items: ['Airport, station and bus pickup coordination', 'Vehicle tracking sheets', 'On-property movement planning']
  },
  {
    title: 'Hospitality',
    icon: Hotel,
    image: guestWelcome,
    items: ['Festivity desks and welcome plaques', 'Luggage tagging and room allocation', 'Traditional or western welcome flow']
  },
  {
    title: 'Wedding Stationery',
    icon: Gift,
    image: weddingInvites,
    items: ['Thank-you tags and door knobs', 'Key jackets, hamper notes and luggage tags', 'Welcome letters and room itinerary cards']
  },
  {
    title: 'Rituals Management',
    icon: ClipboardCheck,
    image: haldiMehendi,
    items: ['Dedicated ritual team', 'Function-wise material packing', 'Fresh ritual items available on time']
  },
  {
    title: 'Artist Management',
    icon: Music,
    image: reception,
    items: ['Live bands and violin acts', 'Bollywood dancers and singers', 'Celebrity performers and comedians']
  },
  {
    title: 'Food & Beverages',
    icon: Utensils,
    image: reception,
    items: ['Dedicated F&B manager', 'Plate count and liquor count tracking', 'Meal boxes for departing guests']
  },
  {
    title: 'Vendor Management',
    icon: UsersRound,
    image: weddingDecor,
    items: ['Band, ghodi, makeup, mehendi and valet vendors', 'Licenses, bartenders, security and bouncers', 'Vetted partners for fuss-free onboarding']
  },
  {
    title: 'Decor',
    icon: Palette,
    image: weddingDecor,
    items: ['Theme-led design and decor', 'Culture, story and aesthetic-led concepts', 'Memorable venue transformations']
  }
];

const celebrationMoments = [
  { title: 'Welcome & Check-In', image: guestWelcome, text: 'Guest arrival, festivity desk, room keys, luggage flow and warm first impressions.' },
  { title: 'Haldi & Mehendi', image: haldiMehendi, text: 'Festive decor, ritual support, guest comfort and function-wise experience details.' },
  { title: 'Sangeet', image: sangeetVisual, text: 'Performance-led evenings with stage, sound, artists, choreography and family moments.' },
  { title: 'Pool Party', image: poolPartyVisual, text: 'Relaxed daytime celebrations with themed styling, music, service and guest engagement.' },
  { title: 'Vidhi Mandap', image: mandapVisual, text: 'Ceremony settings shaped around tradition, aesthetics, movement and ritual requirements.' },
  { title: 'Reception', image: reception, text: 'Elegant hosting, entertainment, stage flow, hospitality and dining coordination.' },
  { title: 'Bride & Groom Sitout', image: brideGroomVisual, text: 'Designed focal zones for portraits, greetings and couple-led experiences.' },
  { title: 'Special Entries', image: specialEntry, text: 'Bride and groom entries planned with cues, music, performers and visual impact.' }
];

const activityIdeas = [
  'Live calligraphy station',
  'Candle making station',
  'Live bangle making station',
  'Doodle artist',
  'DIY potli making',
  'Block print station',
  'Polaroid pictures',
  'Perfume bar',
  'Mithai mela'
];

// Luxury SVG Corner Ornament
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

// Custom Light-Themed Section Header
function LuxuryHeader({ eyebrow, title, text, align = 'center' }) {
  return (
    <Reveal className={`max-w-4xl mx-auto mb-12 ${align === 'left' ? 'text-left' : 'text-center'}`}>
      <div className={`flex items-center gap-2 mb-3 ${align === 'left' ? 'justify-start' : 'justify-center'}`}>
        <span className="w-5 h-[1px] bg-[#C8A96B]/50" />
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#C8A96B]">{eyebrow}</p>
        <span className="w-5 h-[1px] bg-[#C8A96B]/50" />
      </div>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C] leading-[1.2]">
        {title}
      </h2>
      {text && (
        <p className="mt-4 text-sm sm:text-base text-[#1C1C1C]/70 font-sans leading-relaxed max-w-2xl mx-auto">
          {text}
        </p>
      )}
    </Reveal>
  );
}

export default function WeddingServices() {
  const [activeModule, setActiveModule] = useState(null);
  const [bubbles, setBubbles] = useState([]);

  // Generate champagne bubbles configuration on mount
  useEffect(() => {
    const generatedBubbles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: `${3 + Math.random() * 94}%`,
      delay: `${Math.random() * 12}s`,
      duration: `${16 + Math.random() * 8}s`,
      size: `${4 + Math.random() * 5}px`
    }));
    setBubbles(generatedBubbles);
  }, []);

  const weddingData = services.find(s => s.title === 'Weddings') || { servicesWeProvide: [] };

  return (
    <div
      className="relative w-full min-h-screen text-[#1C1C1C] font-sans overflow-x-hidden selection:bg-[#C8A96B]/30 selection:text-[#1C1C1C] pt-28 pb-16"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.08' numOctaves='3'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.78 0 0 0 0 0.66 0 0 0 0 0.42 0 0 0 0.05 0'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' fill='transparent'/%3E%3C/svg%3E")`,
        backgroundColor: '#FAF7F2'
      }}
    >

      {/* Soft Radial Bokeh Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[8%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(circle,rgba(200,169,107,0.06),transparent_65%)]" />
        <div className="absolute top-[35%] left-[-15%] w-[65vw] h-[65vw] rounded-full bg-[radial-gradient(circle,rgba(200,169,107,0.05),transparent_70%)]" />
        <div className="absolute bottom-[8%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(200,169,107,0.05),transparent_60%)]" />
      </div>

      {/* Floating Champagne Particles */}
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

      {/* Botanical Margin Line Art Illustrations */}
      <div className="absolute top-48 left-0 w-24 md:w-36 lg:w-44 pointer-events-none z-0">
        <BotanicalLeftOrnament />
      </div>
      <div className="absolute top-[40%] right-0 w-24 md:w-36 lg:w-44 pointer-events-none z-0">
        <BotanicalRightOrnament />
      </div>

      {/* Main Page Content Wrapper */}
      <div className="relative max-w-7xl mx-auto px-5 mt-12 z-10">

        {/* Main Section Header */}
        <LuxuryHeader
          eyebrow="Our Services"
          title="Curated Wedding Experiences"
          text="At Event Brigade, a wedding is more than an event. It is a once-in-a-lifetime story waiting to be told beautifully."
        />

        {/* Dynamic Showcase Block */}
        <div className="mt-8">
          <Reveal
            id="weddings"
            className="overflow-hidden rounded-[24px] border border-[#C8A96B]/20 bg-[#F5F1EA] shadow-xl scroll-mt-28"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              {/* Left Column: Interactive Image Panel */}
              <div className="relative min-h-[460px] overflow-hidden lg:min-h-full">
                {/* Default Background */}
                <img
                  src={weddingShowcase.gallery[0]}
                  alt="Wedding Services by Event Brigade"
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${activeModule !== null ? 'opacity-0 scale-100' : 'opacity-100 scale-105'
                    }`}
                />

                {/* Module Specific Backgrounds */}
                {weddingShowcase.modules.map((module, moduleIndex) => (
                  <img
                    key={module.title}
                    src={module.image}
                    alt={module.title}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${activeModule === moduleIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                      }`}
                  />
                ))}



                {/* Floating Content Card */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="rounded-2xl border border-[#C8A96B]/35 bg-[#FAF7F2]/92 backdrop-blur-md p-6 shadow-xl max-w-md">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#C8A96B]">
                      {weddingShowcase.eyebrow}
                    </p>
                    <h3 className="mt-2.5 font-serif text-2xl sm:text-3xl text-[#1C1C1C] leading-snug">
                      {weddingShowcase.title}
                    </h3>
                    <a
                      href="/wedding-portfolio"
                      onClick={(e) => {
                        e.preventDefault();
                        window.history.pushState({}, '', '/wedding-portfolio');
                      }}
                      className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#C8A96B] hover:text-[#1C1C1C] transition-colors"
                    >
                      View Portfolio <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Interaction List */}
              <div className="flex flex-col justify-center p-6 sm:p-10 md:p-12">
                <p className="text-sm sm:text-base leading-relaxed text-[#1C1C1C]/75">{weddingShowcase.text}</p>
                <div className="mt-8 divide-y divide-[#C8A96B]/15">
                  {weddingShowcase.modules.map((module, moduleIndex) => {
                    const isHovered = activeModule === moduleIndex;
                    return (
                      <div
                        key={module.title}
                        onMouseEnter={() => setActiveModule(moduleIndex)}
                        onMouseLeave={() => setActiveModule(null)}
                        className="group cursor-pointer py-4.5 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-5">
                            <span className={`font-mono text-xs tracking-wider transition-colors duration-300 ${isHovered ? 'text-[#C8A96B]' : 'text-[#1C1C1C]/45'}`}>
                              {String(moduleIndex + 1).padStart(2, '0')}
                            </span>
                            <h4 className={`font-serif text-xl sm:text-2xl transition-all duration-300 ${isHovered ? 'text-[#C8A96B] pl-2' : 'text-[#1C1C1C]'}`}>
                              {module.title}
                            </h4>
                          </div>
                          <div className={`h-1.5 w-1.5 rounded-full bg-[#C8A96B] transition-all duration-500 ${isHovered ? 'opacity-100 scale-125' : 'opacity-0 scale-50'}`} />
                        </div>

                        <div
                          className={`grid transition-all duration-500 ease-in-out ${isHovered ? 'grid-rows-[1fr] opacity-100 mt-3.5' : 'grid-rows-[0fr] opacity-0'
                            }`}
                        >
                          <div className="overflow-hidden">
                            <p className="pl-10 text-xs sm:text-sm leading-relaxed text-[#1C1C1C]/75">
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
                {[...weddingShowcase.gallery, ...weddingShowcase.gallery].map((image, galleryIndex) => (
                  <img
                    key={`wedding-services-gallery-${galleryIndex}-${image}`}
                    src={image}
                    alt={`Wedding visual ${galleryIndex + 1}`}
                    loading="lazy"
                    className="h-36 w-[60vw] shrink-0 object-cover opacity-85 transition duration-300 hover:opacity-100 sm:w-[40vw] lg:w-80 border-r border-[#C8A96B]/10"
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section 2: Detailed Capabilities Grid */}
        <div className="mt-24">
          <LuxuryHeader
            eyebrow="Capabilities"
            title="Every Detail, Planned with Precision"
            text="From RSVPs and transport to styling and catering counts, our planning checklist translates concepts into stress-free events."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {planningServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal
                  key={service.title}
                  delay={index * 0.04}
                  className="group flex flex-col overflow-hidden rounded-[24px] border border-[#C8A96B]/20 bg-[#F5F1EA] shadow-md transition duration-500 hover:-translate-y-1 hover:border-[#C8A96B]/50 hover:shadow-lg h-full"
                >
                  {/* Card Image Cover */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />


                    {/* Icon frame */}
                    <div className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-2xl border border-[#C8A96B]/35 bg-[#FAF7F2]/90 text-[#C8A96B] backdrop-blur-sm shadow-md">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 pt-2 flex-grow flex flex-col justify-start relative">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#C8A96B]">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-2 min-h-[50px] font-serif text-2xl text-[#1C1C1C] leading-snug">{service.title}</h3>

                    <ul className="mt-4 space-y-2.5">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-[#1C1C1C]/75">
                          <Check className="mt-0.5 shrink-0 text-[#C8A96B]" size={14} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Section 3: Celebration Flow Grid */}
        <div className="mt-24">
          <LuxuryHeader
            eyebrow="Celebration Flow"
            title="Seamless Function Timelines"
            text="Individual functions are coordinated as one fluid journey, making sure guests transition from check-in to final farewell smoothly."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
            {celebrationMoments.map((moment, index) => (
              <Reveal
                key={moment.title}
                delay={(index % 4) * 0.04}
                className={`group overflow-hidden rounded-[20px] border border-[#C8A96B]/20 bg-[#F5F1EA] shadow-md flex flex-col justify-between ${index === 0 || index === 5 ? 'lg:col-span-2' : ''
                  }`}
              >
                {/* Image top */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#1C1C1C]/10 group-hover:bg-[#1C1C1C]/20 transition-colors" />
                </div>

                {/* Content drawer bottom */}
                <div className="p-5 flex-grow bg-[#F5F1EA] border-t border-[#C8A96B]/15">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#C8A96B]">Event Brigade</p>
                  <h3 className="mt-1 font-serif text-xl text-[#1C1C1C]">{moment.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#1C1C1C]/75">{moment.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Section 4: Guest Engagement Activities */}
        <div className="mt-24 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="rounded-[24px] border border-[#C8A96B]/20 bg-[#F5F1EA] p-7 md:p-9 shadow-md flex flex-col justify-between h-full">
            <div>
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-[#C8A96B]/35 bg-[#FAF7F2] text-[#C8A96B] shadow-sm">
                <Gem size={22} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C8A96B]">Guest Engagement</p>
              <h2 className="mt-3 font-serif text-3xl text-[#1C1C1C] leading-[1.2]">Bespoke Guest Experiences</h2>
              <p className="mt-3 text-xs sm:text-sm text-[#1C1C1C]/70">
                Interactive corners, personalized favors, and visual treats that keep guests engaged and excited throughout the wedding weekend.
              </p>
            </div>

            <div className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {activityIdeas.map((activity) => (
                <div
                  key={activity}
                  className="flex items-center gap-2.5 rounded-xl border border-[#C8A96B]/15 bg-[#FAF7F2] px-4 py-2.5 text-xs sm:text-sm text-[#1C1C1C]/80"
                >
                  <BadgeCheck className="shrink-0 text-[#C8A96B]" size={16} />
                  <span>{activity}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative overflow-hidden rounded-[24px] border border-[#C8A96B]/20 shadow-md h-full min-h-[360px] lg:min-h-full">
            <img
              src={weddingActivities}
              alt="Wedding guest activities by Event Brigade"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Soft dark overlay */}
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#EDE4D3]">Interactive Elements</p>
              <h3 className="mt-2 max-w-xl font-serif text-2xl sm:text-3xl text-[#FAF7F2] leading-snug">
                Bespoke souvenir bars, live artisan booths, and custom photography backdrops.
              </h3>
            </div>
          </Reveal>
        </div>

        {/* Section 5: Services Checklist Block */}
        <div className="mt-24">
          <Reveal
            className="group relative overflow-hidden rounded-[24px] border border-[#C8A96B]/20 bg-[#F5F1EA] p-8 shadow-md transition-all duration-500 hover:border-[#C8A96B]/50"
          >
            {/* Corner ornament background */}
            <BackgroundMandala className="absolute right-[-30px] bottom-[-30px] w-44 h-44 pointer-events-none opacity-20" />

            <p className="text-xs font-semibold uppercase tracking-widest text-[#C8A96B] font-sans">Services We Provide</p>
            <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold text-[#1C1C1C] md:text-4xl">End-to-End Wedding Management</h3>
            <div className="mt-4 h-[1px] w-24 bg-gradient-to-r from-[#C8A96B] to-transparent" />

            <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {weddingData.servicesWeProvide.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-xs sm:text-sm font-medium leading-relaxed text-[#1C1C1C]/80"
                >
                  <span className="mt-1 shrink-0 text-[#C8A96B] text-[8px]">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Section 6: Plan a Wedding Consultation CTA */}
        <Reveal className="mt-24 px-4 py-8 text-center relative z-10">
          <Plane className="mx-auto text-[#C8A96B] animate-bounce" size={30} />

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C] leading-[1.25]">
            Dreaming of a Wedding Celebration?
            <span className="mt-1.5 block text-[#C8A96B] italic font-normal">Let’s shape your perfect day.</span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-[#1C1C1C]/60 max-w-xl mx-auto">
            From logistics and check-in audits to complete theme design, hospitality setups and vendor protocols.
          </p>

          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/contact');
            }}
            className="gold-shimmer-btn inline-flex items-center gap-3 text-obsidian font-bold text-xs uppercase tracking-[0.2em] px-10 py-4.5 rounded-full hover:shadow-glow transition-all duration-300 mt-8"
          >
            Schedule Consultation <ArrowRight size={14} />
          </a>
        </Reveal>

      </div>
    </div>
  );
}
