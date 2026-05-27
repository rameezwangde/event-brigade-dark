import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Zap } from 'lucide-react';
import { contact } from '../data.js';
import eventBrigadeLogo from '../../eventbrigade.PNG';

const quickLinks = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Services', 'services'],
  ['Portfolio', 'portfolio'],
  ['Contact', 'contact'],
  ['Privacy', 'contact']
];

const serviceLinks = ['Corporate Events', 'Social Events', 'Cultural Events', 'Wedding Events', 'Entertainment Events'];

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
      className="grid h-12 w-14 place-items-center bg-[#eeeeee] font-bold text-black transition hover:bg-black hover:text-white"
      style={{ clipPath: 'polygon(24% 0, 76% 0, 100% 50%, 76% 100%, 24% 100%, 0 50%)' }}
    >
      <Icon size={20} strokeWidth={2.2} />
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#f7f7f4] text-[#050505]" style={{ backgroundColor: '#f7f7f4', color: '#050505' }}>
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div>
            <a href="#home" className="inline-flex" aria-label="Event Brigade Home">
              <img src={eventBrigadeLogo} alt="Event Brigade logo" className="h-24 w-28 object-contain" />
            </a>
            <p className="mt-8 max-w-xs text-base leading-8 text-black/80">
              Your premier partner in turning ordinary moments into extraordinary memories. We specialize in complete event experiences with creative planning and seamless execution.
            </p>
            <div className="mt-10 flex gap-4">
              {socialLinks.map(([label, href, Icon]) => (
                <HexButton key={label} href={href} label={label} Icon={Icon} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black uppercase tracking-[0.14em]">Navigation</h3>
            <div className="mt-8 grid grid-cols-2 gap-x-10 gap-y-4">
              {quickLinks.map(([label, id]) => (
                <a key={label} href={`#${id}`} className="block text-sm font-semibold uppercase tracking-[0.18em] text-black/75 transition hover:text-black">
                  {label}
                </a>
              ))}
            </div>

            <h3 className="mt-12 text-xl font-black uppercase tracking-[0.14em]">Services</h3>
            <div className="mt-8 space-y-4">
              {serviceLinks.map((service) => (
                <a key={service} href="#services" className="block text-sm font-semibold uppercase tracking-[0.18em] text-black/75 transition hover:text-black">
                  {service}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black uppercase tracking-[0.14em]">Contact</h3>
            <div className="mt-8 space-y-6 text-sm font-semibold uppercase leading-7 tracking-[0.12em] text-black/80">
              <a
                href={contact.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="grid grid-cols-[24px_1fr] gap-5 transition hover:text-black"
              >
                <MapPin size={22} />
                <span>Bavdhan, Pune<br />Maharashtra, India</span>
              </a>
              <a href="tel:+918552831191" className="grid grid-cols-[24px_1fr] gap-5 transition hover:text-black">
                <Phone size={22} />
                <span>{contact.phones[0]}</span>
              </a>
              <a href="tel:+919028755979" className="grid grid-cols-[24px_1fr] gap-5 transition hover:text-black">
                <Phone size={22} />
                <span>{contact.phones[1]}</span>
              </a>
              <a href={`mailto:${contact.email}`} className="grid grid-cols-[24px_1fr] gap-5 transition hover:text-black">
                <Mail size={22} />
                <span>{contact.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-black/20 pt-8">
          <div className="flex flex-col gap-5 text-sm font-semibold uppercase tracking-[0.12em] text-black md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-4">
              <Zap size={20} /> © {year} Event Brigade. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-8">
              <a href="#contact" className="transition hover:text-black/60">Privacy Policy</a>
              <a href="#contact" className="transition hover:text-black/60">Terms Of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
