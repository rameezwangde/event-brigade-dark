import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import eventBrigadeLogo from '../../eventbrigade.PNG';

const links = [
  { label: 'Home', id: 'home', href: '/#home' },
  { label: 'About', id: 'about', href: '/#about' },
  { label: 'Services', id: 'services', href: '/#services' },
  { label: 'Portfolio', id: 'portfolio', href: '/corporate-portfolio' },
  { label: 'Testimonials', id: 'testimonials', href: '/#testimonials' },
  { label: 'Founder', id: 'founder', href: '/#founder' },
  { label: 'Contact', id: 'contact', href: '/#contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const isPortfolioPage = window.location.pathname.replace(/\/$/, '') === '/corporate-portfolio';
    if (isPortfolioPage) {
      setActive('portfolio');
      return undefined;
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const current = links
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean)
        .findLast((section) => section.getBoundingClientRect().top <= 120);
      if (current) setActive(current.id);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a
          href="/#home"
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
          {links.map(({ label, id, href }) => (
            <a
              key={id}
              href={href}
              aria-current={active === id ? 'page' : undefined}
              className={`relative rounded-full px-4 py-2.5 text-sm font-semibold transition duration-300 ${
                active === id ? 'text-obsidian' : 'text-ivory/72 hover:bg-ivory/[0.06] hover:text-gold'
              }`}
            >
              {active === id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-gold to-champagne shadow-glow"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </a>
          ))}
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
          {links.map(({ label, id, href }) => (
            <a
              key={id}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={active === id ? 'page' : undefined}
              className={`block rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                active === id ? 'bg-gold text-obsidian' : 'text-ivory/80 hover:bg-champagne/10 hover:text-gold'
              }`}
            >
              {label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
