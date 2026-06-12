import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Zap } from 'lucide-react';
import { contact } from '../data.js';
import eventBrigadeLogo from '../../eventbrigade.PNG';

const quickLinks = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/wedding-services'],
  ['Portfolio', '/wedding-portfolio'],
  ['Contact', '/contact'],
  ['Privacy', '/contact']
];

const serviceLinks = [
  ['Wedding Events', '/wedding-services'],
  ['Corporate Events', '/corporate-services'],
  ['Social Events', '/social-services']
];

const socialLinks = [
  ['Facebook', 'https://www.facebook.com/EventBrigade', Facebook],
  ['Instagram', 'https://www.instagram.com/eventbrigade/', Instagram],
  ['LinkedIn', 'https://in.linkedin.com/company/event-brigade', Linkedin]
];

function HexButton({ href, label, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white text-[#555555] transition hover:border-gold hover:text-gold"
    >
      <Icon size={19} strokeWidth={2.2} />
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    window.history.pushState({}, '', href);
  };

  return (
    <footer className="footer-luxury relative border-t border-[#d4af37]/15 bg-[#FAF6EC] text-[#111111]">
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-14">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="/" onClick={(e) => handleNavClick(e, '/')} className="inline-flex" aria-label="Event Brigade Home">
              <img src={eventBrigadeLogo} alt="Event Brigade logo" className="h-20 w-24 object-contain" />
            </a>
            <p className="mt-6 max-w-xs text-sm leading-7 text-[#555555]">
              Your premier partner in turning ordinary moments into extraordinary memories. We specialize in complete event experiences with creative planning and seamless execution.
            </p>
            <div className="mt-8 flex gap-4">
              {socialLinks.map(([label, href, Icon]) => (
                <HexButton key={label} href={href} label={label} Icon={Icon} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-bold text-[#111111]">Navigation</h3>
            <div className="mt-6 grid gap-3">
              {quickLinks.map(([label, href]) => (
                <a key={label} href={href} onClick={(e) => handleNavClick(e, href)} className="block text-sm text-[#555555] transition hover:text-gold">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-bold text-[#111111]">Services</h3>
            <div className="mt-6 grid gap-3">
              {serviceLinks.map(([label, href]) => (
                <a key={label} href={href} onClick={(e) => handleNavClick(e, href)} className="block text-sm text-[#555555] transition hover:text-gold">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-bold text-[#111111]">Contact</h3>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[#555555]">
              <a
                href={contact.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="grid grid-cols-[20px_1fr] gap-4 transition hover:text-gold"
              >
                <MapPin size={18} />
                <span>Bavdhan, Pune<br />Maharashtra, India</span>
              </a>
              <a href="tel:+918552831191" className="grid grid-cols-[20px_1fr] gap-4 transition hover:text-gold">
                <Phone size={18} />
                <span>{contact.phones[0]}</span>
              </a>
              <a href="tel:+919028755979" className="grid grid-cols-[20px_1fr] gap-4 transition hover:text-gold">
                <Phone size={18} />
                <span>{contact.phones[1]}</span>
              </a>
              <a href={`mailto:${contact.email}`} className="grid grid-cols-[20px_1fr] gap-4 transition hover:text-gold">
                <Mail size={18} />
                <span>{contact.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-black/10 pt-7">
          <div className="flex flex-col gap-5 text-xs text-[#555555] md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-3">
              <Zap size={16} /> © {year} Event Brigade. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="/contact" onClick={(e) => handleNavClick(e, '/contact')} className="transition hover:text-gold">Privacy Policy</a>
              <a href="/contact" onClick={(e) => handleNavClick(e, '/contact')} className="transition hover:text-gold">Terms Of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
