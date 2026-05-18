import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import eventBrigadeLogo from '../assets/event-brigade-logo.svg';

const links = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Services', 'services'],
  ['Portfolio', 'portfolio'],
  ['Testimonials', 'testimonials'],
  ['Founder', 'founder'],
  ['Contact', 'contact']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const current = links
        .map(([, id]) => document.getElementById(id))
        .filter(Boolean)
        .findLast((section) => section.getBoundingClientRect().top <= 120);
      if (current) setActive(current.id);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-champagne/20 bg-obsidian/60 px-5 py-3 shadow-soft backdrop-blur-xl">
        <a href="#home" className="group flex items-center gap-3" aria-label="Event Brigade Home">
          <span className="grid h-14 w-16 place-items-center rounded-2xl border border-champagne/25 bg-obsidian/65 p-1.5 shadow-glow">
            <img src={eventBrigadeLogo} alt="Event Brigade logo" className="h-full w-full object-contain" />
          </span>
          <span>
            <span className="block font-serif text-xl leading-none text-ivory">Event Brigade</span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-champagne">Pune</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="relative text-sm font-medium text-ivory/80 transition hover:text-gold">
              {label}
              {active === id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent"
                />
              )}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-champagne/40 px-5 py-2 text-sm font-semibold text-gold transition hover:border-gold hover:bg-gold hover:text-obsidian lg:inline-flex"
        >
          Plan An Event
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-champagne/25 text-gold lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 max-w-7xl rounded-3xl border border-champagne/20 bg-charcoal/95 p-4 shadow-soft backdrop-blur-xl lg:hidden"
        >
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm text-ivory/80 hover:bg-champagne/10 hover:text-gold"
            >
              {label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
