import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import eventBrigadeLogo from '../../darker bg.png';

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
  { label: 'Founder', id: 'founder', href: '/founder' },
  { label: 'Contact', id: 'contact', href: '/contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.replace(/\/$/, '') || '/';
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
        path === '/corporate-portfolio' ||
        path === '/wedding-portfolio' ||
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

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    window.history.pushState({}, '', href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
          className="block h-20 w-24 transition duration-300 hover:scale-105 md:h-24 md:w-28"
          aria-label="Event Brigade Home"
        >
          <img src={eventBrigadeLogo} alt="Event Brigade logo" className="h-full w-full object-contain" />
        </a>

        <div
          className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-champagne/15 bg-obsidian/50 p-1.5 shadow-soft backdrop-blur-xl transition duration-300 lg:flex ${
            scrolled ? 'bg-obsidian/82' : ''
          }`}
        >
          {links.map((link) => {
            const hasDropdown = !!link.dropdown;
            const isLinkActive = active === link.id;
            return (
              <div key={link.id} className="group relative">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isLinkActive ? 'page' : undefined}
                  className={`relative flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition duration-300 ${
                    isLinkActive ? 'text-obsidian' : 'text-ivory/72 hover:bg-ivory/[0.06] hover:text-gold'
                  }`}
                >
                  {isLinkActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-gold to-champagne shadow-glow"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1">
                    {link.label}
                    {hasDropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 group-hover:rotate-180 ${
                          isLinkActive ? 'text-obsidian' : 'text-ivory/60 group-hover:text-gold'
                        }`}
                      />
                    )}
                  </span>
                </a>

                {hasDropdown && (
                  <div className="absolute left-1/2 top-full z-50 mt-1 w-48 -translate-x-1/2 scale-95 opacity-0 invisible group-hover:scale-100 group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out origin-top">
                    <div className="h-2 w-full" />
                    <div className="rounded-2xl border border-champagne/20 bg-charcoal/95 p-1.5 shadow-soft shadow-gold/5 backdrop-blur-xl">
                      {link.dropdown.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          onClick={(e) => handleNavClick(e, subItem.href)}
                          className="block rounded-xl px-4 py-2 text-sm font-medium text-ivory/80 hover:bg-gold/10 hover:text-gold transition duration-200"
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
          className={`grid h-12 w-12 place-items-center rounded-full border border-champagne/25 bg-obsidian/60 text-gold shadow-soft backdrop-blur-xl transition hover:border-gold/60 lg:hidden ${
            open ? 'bg-gold text-obsidian' : ''
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
          className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.75rem] border border-champagne/20 bg-charcoal/95 p-2 shadow-soft backdrop-blur-xl lg:hidden"
        >
          {links.map((link) => {
            const hasDropdown = !!link.dropdown;
            const isExpanded = expandedMobileItem === link.id;
            const isLinkActive = active === link.id;

            return (
              <div key={link.id} className="block">
                {hasDropdown ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => setExpandedMobileItem(isExpanded ? null : link.id)}
                      className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition text-left ${
                        isLinkActive ? 'bg-gold/10 text-gold' : 'text-ivory/80 hover:bg-champagne/10 hover:text-gold'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${isExpanded ? 'rotate-180 text-gold' : 'text-ivory/60'}`}
                      />
                    </button>
                    
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isExpanded ? 'max-h-40 opacity-100 mt-1 mb-2' : 'max-h-0 opacity-0 pointer-events-none'
                      }`}
                    >
                      <div className="pl-6 space-y-1 border-l border-champagne/15 ml-4">
                        {link.dropdown.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            onClick={(e) => {
                              handleNavClick(e, subItem.href);
                              setOpen(false);
                              setExpandedMobileItem(null);
                            }}
                            className="block rounded-xl px-4 py-2.5 text-xs font-semibold text-ivory/70 hover:text-gold transition"
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
                      isLinkActive ? 'bg-gold text-obsidian' : 'text-ivory/80 hover:bg-champagne/10 hover:text-gold'
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
