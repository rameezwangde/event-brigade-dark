import React from 'react';
import { contact } from '../data.js';

export default function Footer() {
  return (
    <footer className="border-t border-champagne/20 bg-charcoal px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-smoke md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-2xl text-ivory">Event Brigade</p>
          <p className="mt-1">Wedding, corporate, social and artist management experiences across Pune and beyond.</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <a href={`mailto:${contact.email}`} className="hover:text-gold">{contact.email}</a>
          <a href="tel:+918552831191" className="hover:text-gold">{contact.phones[0]}</a>
          <span>Copyright © Event Brigade</span>
        </div>
      </div>
    </footer>
  );
}
