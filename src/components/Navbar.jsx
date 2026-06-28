import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import eventBrigadeLogoDark from '../../darker bg.png';
import eventBrigadeLogoLight from '../../white light logo.PNG';

const links = [
  { label: 'Home', id: 'home', href: '/' },
  { label: 'About', id: 'about', href: '/about' },
  {
    label: 'Services',
    id: 'services',
    href: '/wedding-services',
    dropdown: [
      { label: 'Weddings', href: '/wedding-services' },
      { label: 'Corporate', href: '/corporate-services' },
      { label: 'Social', href: '/social-services' }
    ]
  },
  {
    label: 'Portfolio',
    id: 'portfolio',
    href: '/wedding-portfolio',
    dropdown: [
      { label: 'Wedding Portfolio', href: '/wedding-portfolio' },
      { label: 'Corporate Portfolio', href: '/corporate-portfolio' },
      { label: 'Social Portfolio', href: '/social-events-portfolio' }
    ]
  },
  { label: 'Testimonials', id: 'testimonials', href: '/testimonials' },
  { label: 'The Brigades', id: 'founder', href: '/founder' },
  { label: 'Contact', id: 'contact', href: '/contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);
  const [isLightPage, setIsLightPage] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.replace(/\/$/, '') || '/';
      setIsLightPage(
        path === '/about' ||
        path === '/wedding-services' ||
        path === '/services' ||
        path === '/social-services' ||
        path === '/wedding-portfolio' ||
        path === '/social-events-portfolio'
      );
      setScrolled(window.scrollY > 24);
      if (path === '/') {
        setActive('home');
      } else if (path === '/about') {
        setActive('about');
      } else if (
        path === '/services' ||
        path === '/wedding-services' ||
        path === '/corporate-services' ||
        path === '/social-services'
      ) {
        setActive('services');
      } else if (
        path === '/wedding-portfolio' ||
        path === '/corporate-portfolio' ||
        path === '/social-events-portfolio'
      ) {
        setActive('portfolio');
      } else if (path === '/testimonials') {
        setActive('testimonials');
      } else if (path === '/founder') {
        setActive('founder');
      } else if (path === '/contact') {
        setActive('contact');
      }
    };

    handleLocationChange();

    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    // Listen to history changes
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Create custom event listener for pushstate
    const handlePushState = () => {
      handleLocationChange();
    };
    window.addEventListener('popstate', handlePushState);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('popstate', handlePushState);
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    window.history.pushState({}, '', href);
  };

  const currentLogo = isLightPage ? eventBrigadeLogoLight : eventBrigadeLogoDark;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
          className={`block transition duration-300 hover:scale-105 ${
            isLightPage
              ? 'h-[105px] w-[126px] md:h-[126px] md:w-[147px]'
              : 'h-20 w-24 md:h-24 md:w-28'
          }`}
          aria-label="Event Brigade Home"
        >
          <img src={currentLogo} alt="Event Brigade logo" className="h-full w-full object-contain" />
        </a>

        <div
          className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border p-1.5 shadow-soft backdrop-blur-xl transition duration-300 lg:flex ${
            isLightPage
              ? scrolled
                ? window.location.pathname.includes('social')
                  ? 'border-[#D56A4A]/30 bg-[#F9F5EF]/90 shadow-glow text-[#222222]'
                  : 'border-[#C8A96B]/35 bg-[#FAF7F2]/90 shadow-glow text-[#1C1C1C]'
                : window.location.pathname.includes('social')
                  ? 'border-[#D56A4A]/15 bg-[#F9F5EF]/55 text-[#222222]'
                  : 'border-[#C8A96B]/15 bg-[#FAF7F2]/50 text-[#1C1C1C]'
              : window.location.pathname.includes('corporate')
                ? scrolled
                  ? 'border-[#2E6BFF]/35 bg-[#070D1E]/90 shadow-[0_0_20px_rgba(46,107,255,0.2)] text-white'
                  : 'border-[#2E6BFF]/15 bg-[#070D1E]/60 text-white'
                : scrolled
                  ? 'border-champagne/20 bg-[#121214]/90 shadow-[0_4px_30px_rgba(0,0,0,0.4)] text-ivory'
                  : 'border-champagne/15 bg-obsidian/60 text-ivory'
          }`}
        >
          {links.map((link) => {
            const hasDropdown = !!link.dropdown;
            const isLinkActive = active === link.id;
            const isFixedChampagneLink = link.id === 'home' || link.id === 'services' || link.id === 'portfolio';
            const isSocialPage = window.location.pathname.includes('social');
            const isCorporatePage = window.location.pathname.includes('corporate');
            return (
              <div key={link.id} className="group relative">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isLinkActive ? 'page' : undefined}
                  className={`relative flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition duration-300 ${
                    isLinkActive
                      ? isFixedChampagneLink
                        ? 'text-[#111111]'
                        : isSocialPage || isCorporatePage
                        ? 'text-white'
                        : 'text-obsidian'
                      : isFixedChampagneLink
                        ? 'text-ivory/72 hover:bg-[#E3C484] hover:text-[#111111]'
                        : isLightPage
                        ? isSocialPage
                          ? 'text-[#222222]/75 hover:bg-[#D56A4A]/10 hover:text-[#D56A4A]'
                          : 'text-[#1C1C1C]/75 hover:bg-[#C8A96B]/10 hover:text-[#C8A96B]'
                        : isCorporatePage
                          ? 'text-ivory/72 hover:bg-[#2E6BFF]/10 hover:text-[#2E6BFF]'
                          : 'text-ivory/72 hover:bg-ivory/[0.06] hover:text-gold'
                  }`}
                >
                  {isLinkActive && (
                    <motion.span
                      layoutId="activeNav"
                      className={`absolute inset-0 rounded-full ${
                        isFixedChampagneLink
                          ? 'border border-[#D0B175]/60 bg-[#E3C484] shadow-sm'
                          : isSocialPage
                          ? 'bg-[#D56A4A] shadow-sm'
                          : isCorporatePage
                            ? 'bg-gradient-to-r from-[#2E6BFF] to-[#1E40AF] shadow-[0_0_15px_rgba(46,107,255,0.45)] border border-[#2E6BFF]/30'
                            : isLightPage
                              ? 'bg-gradient-to-r from-[#C8A96B] to-[#EDE4D3] shadow-sm border border-[#C8A96B]/30'
                              : 'bg-gradient-to-r from-gold to-champagne shadow-glow'
                      }`}
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1">
                    {link.label}
                    {hasDropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 group-hover:rotate-180 ${
                          isLinkActive
                            ? isFixedChampagneLink
                              ? 'text-[#111111]'
                              : isSocialPage || isCorporatePage
                              ? 'text-white'
                              : 'text-obsidian'
                            : isFixedChampagneLink
                              ? 'text-[#E3C484] group-hover:text-[#111111]'
                              : isLightPage
                              ? isSocialPage
                                ? 'text-[#D56A4A] group-hover:text-[#D56A4A]'
                                : 'text-[#1C1C1C]/60 group-hover:text-[#C8A96B]'
                              : isCorporatePage
                                ? 'text-[#2E6BFF] group-hover:text-[#2E6BFF]'
                                : 'text-ivory/60 group-hover:text-gold'
                        }`}
                      />
                    )}
                  </span>
                </a>

                {hasDropdown && (
                  <div className="absolute left-1/2 top-full z-50 mt-1 w-48 -translate-x-1/2 scale-95 opacity-0 invisible group-hover:scale-100 group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out origin-top">
                    <div className="h-2 w-full" />
                    <div className="rounded-2xl border border-[#D0B175]/35 bg-[#FAF7F2]/95 p-1.5 shadow-soft backdrop-blur-xl">
                      {link.dropdown.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          onClick={(e) => handleNavClick(e, subItem.href)}
                          className="block rounded-xl px-4 py-2 text-sm font-medium text-[#1C1C1C]/80 transition duration-200 hover:bg-[#E3C484]/25 hover:text-[#111111]"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className={`grid h-12 w-12 place-items-center rounded-full border transition duration-300 shadow-soft backdrop-blur-xl lg:hidden ${
            isLightPage
              ? window.location.pathname.includes('social')
                ? `border-[#D56A4A]/25 bg-[#F9F5EF]/60 text-[#D56A4A] hover:border-[#D56A4A]/60 ${open ? 'bg-[#D56A4A] text-white' : ''}`
                : `border-[#C8A96B]/25 bg-[#FAF7F2]/60 text-[#C8A96B] hover:border-[#C8A96B]/60 ${open ? 'bg-[#C8A96B] text-[#FAF7F2]' : ''}`
              : window.location.pathname.includes('corporate')
                ? `border-[#2E6BFF]/25 bg-[#070D1E]/60 text-[#2E6BFF] hover:border-[#2E6BFF]/60 ${open ? 'bg-[#2E6BFF] text-white' : ''}`
                : `border-champagne/25 bg-obsidian/60 text-gold hover:border-gold/60 ${open ? 'border border-[#D0B175]/60 bg-[#E3C484] text-[#111111]' : ''}`
          }`}
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.75rem] border p-2 shadow-soft backdrop-blur-xl lg:hidden ${
            isLightPage
              ? window.location.pathname.includes('social')
                ? 'border-[#D56A4A]/20 bg-[#F9F5EF]/95'
                : 'border-[#C8A96B]/20 bg-[#FAF7F2]/95'
              : window.location.pathname.includes('corporate')
                ? 'border-[#2E6BFF]/20 bg-[#070D1E]/95 shadow-[0_8px_32px_rgba(46,107,255,0.15)]'
                : 'border-champagne/20 bg-charcoal/95'
          }`}
        >
          {links.map((link) => {
            const hasDropdown = !!link.dropdown;
            const isExpanded = expandedMobileItem === link.id;
            const isLinkActive = active === link.id;
            const isFixedChampagneLink = link.id === 'home' || link.id === 'services' || link.id === 'portfolio';
            const isSocialPage = window.location.pathname.includes('social');
            const isCorporatePage = window.location.pathname.includes('corporate');

            return (
              <div key={link.id} className="block">
                {hasDropdown ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => setExpandedMobileItem(isExpanded ? null : link.id)}
                      className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition text-left ${
                        isLinkActive
                          ? isFixedChampagneLink
                            ? 'border border-[#D0B175]/60 bg-[#E3C484] text-[#111111]'
                            : isLightPage
                            ? isSocialPage
                              ? 'bg-[#D56A4A]/15 text-[#D56A4A]'
                              : 'bg-[#C8A96B]/15 text-[#C8A96B]'
                            : isCorporatePage
                              ? 'bg-[#2E6BFF]/15 text-[#2E6BFF]'
                              : 'bg-gold/10 text-gold'
                          : isLightPage
                            ? isSocialPage
                              ? 'text-[#222222]/80 hover:bg-[#D56A4A]/10 hover:text-[#D56A4A]'
                              : 'text-[#1C1C1C]/80 hover:bg-[#C8A96B]/10 hover:text-[#C8A96B]'
                            : isCorporatePage
                              ? 'text-white/80 hover:bg-[#2E6BFF]/10 hover:text-[#2E6BFF]'
                              : 'text-ivory/80 hover:bg-champagne/10 hover:text-gold'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          isExpanded
                            ? isFixedChampagneLink
                              ? 'rotate-180 text-[#111111]'
                              : 'rotate-180 text-gold' 
                            : isLightPage 
                              ? isSocialPage 
                                ? 'text-[#D56A4A]/60' 
                                : 'text-[#C8A96B]/60' 
                              : isCorporatePage 
                                ? 'text-[#2E6BFF]/60' 
                                : 'text-ivory/60'
                        }`}
                      />
                    </button>
                    
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isExpanded ? 'max-h-40 opacity-100 mt-1 mb-2' : 'max-h-0 opacity-0 pointer-events-none'
                      }`}
                    >
                      <div className="ml-4 space-y-1 border-l border-[#D0B175]/30 pl-6">
                        {link.dropdown.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            onClick={(e) => {
                              handleNavClick(e, subItem.href);
                              setOpen(false);
                              setExpandedMobileItem(null);
                            }}
                            className="block rounded-xl px-4 py-2.5 text-xs font-semibold text-[#1C1C1C]/75 transition hover:bg-[#E3C484]/25 hover:text-[#111111]"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href);
                      setOpen(false);
                      setExpandedMobileItem(null);
                    }}
                    aria-current={isLinkActive ? 'page' : undefined}
                    className={`block rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      isLinkActive
                        ? isLightPage
                          ? isSocialPage
                            ? 'bg-[#D56A4A] text-white'
                            : 'bg-[#C8A96B] text-white'
                          : isCorporatePage
                            ? 'bg-[#2E6BFF] text-white shadow-[0_0_12px_rgba(46,107,255,0.25)]'
                            : 'border border-[#D0B175]/60 bg-[#E3C484] text-[#111111]'
                        : isLightPage
                          ? isSocialPage
                            ? 'text-[#222222]/80 hover:bg-[#D56A4A]/10 hover:text-[#D56A4A]'
                            : 'text-[#1C1C1C]/80 hover:bg-[#C8A96B]/10 hover:text-[#C8A96B]'
                          : isCorporatePage
                            ? 'text-white/80 hover:bg-[#2E6BFF]/10 hover:text-[#2E6BFF]'
                            : 'text-ivory/80 hover:bg-champagne/10 hover:text-gold'
                    }`}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            );
          })}
        </motion.div>
      )}
    </header>
  );
}



