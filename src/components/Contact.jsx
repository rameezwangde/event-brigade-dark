import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { contact } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import eventBrigadeLogo from '../../eventbrigade.PNG';

function WhatsAppIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.27-1.38a9.88 9.88 0 0 0 4.77 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.25-4.38c0-4.54 3.69-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.42 5.82c0 4.55-3.7 8.24-8.25 8.24Zm4.52-6.17c-.25-.12-1.47-.73-1.7-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.98-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}

export default function Contact() {
  const whatsappNumber = contact.phones[0].replace(/\D/g, '');
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;
  const phoneLink = `tel:${contact.phones[0].replace(/\s/g, '')}`;
  const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}`;
  const websiteLink = `https://${contact.website.replace(/^https?:\/\//, '')}`;
  const getWhatsappLink = (text) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  const whatsapp = getWhatsappLink('Hello Event Brigade, I would like to plan an event.');

  const handleInquirySubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const phone = formData.get('phone')?.trim();
    const message = formData.get('message')?.trim();
    const whatsappMessage = [
      'Hello Event Brigade, I would like to plan an event.',
      name ? `Name: ${name}` : null,
      email ? `Email: ${email}` : null,
      phone ? `Phone: ${phone}` : null,
      message ? `Message: ${message}` : null
    ].filter(Boolean).join('\n');

    window.open(getWhatsappLink(whatsappMessage), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-obsidian pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.16),transparent_36%)]" />
      <div className="relative mx-auto max-w-7xl px-8 md:px-12 lg:px-16">
        <SectionHeader
          eyebrow="Plan An Event"
          title="Let us design your next extraordinary gathering."
          text="Share your brief and the Event Brigade team will help you shape the event with clarity, creativity and confident execution."
        />
        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
          <Reveal className="flex h-full flex-col rounded-[2rem] border border-champagne/20 bg-charcoal/70 p-8 shadow-soft md:p-10">
            <div>
              <h3 className="font-serif text-4xl text-ivory">Contact us</h3>
              <p className="mt-3 text-smoke">We are always available to listen.</p>
            </div>
            <div className="mt-8 grid gap-4">
              <a className="contact-line" href={mapLink} target="_blank" rel="noreferrer">
                <MapPin className="text-gold" /> <span>{contact.address}</span>
              </a>
              <a className="contact-line" href={phoneLink}>
                <Phone className="text-gold" /> <span>{contact.phones.join(', ')}</span>
              </a>
              <a className="contact-line" href={emailLink} target="_blank" rel="noreferrer">
                <Mail className="text-gold" /> <span>{contact.email}</span>
              </a>
              <a className="contact-line" href={websiteLink} target="_blank" rel="noreferrer">
                <img src={eventBrigadeLogo} alt="Event Brigade logo" className="h-7 w-7 object-contain" /> <span>{contact.website}</span>
              </a>
            </div>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="btn-primary mt-7 w-full justify-center">
              <WhatsAppIcon size={18} /> WhatsApp Quick Contact
            </a>
          </Reveal>

          <Reveal className="glass-card h-full p-8 md:p-10" delay={0.08}>
            <form className="flex h-full flex-col gap-5" onSubmit={handleInquirySubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="field">
                  <span>Name*</span>
                  <input type="text" name="name" placeholder="Your name" required />
                </label>
                <label className="field">
                  <span>Email*</span>
                  <input type="email" name="email" placeholder="you@example.com" required />
                </label>
              </div>
              <label className="field">
                <span>Phone</span>
                <input type="tel" name="phone" placeholder="+91" />
              </label>
              <label className="field">
                <span>Message*</span>
                <textarea name="message" rows="6" placeholder="Tell us about your event..." required />
              </label>
              <button type="submit" className="btn-primary mt-auto w-full justify-center">
                Send Inquiry <WhatsAppIcon size={18} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
      <a href="#contact" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full border border-gold/40 bg-gold text-obsidian shadow-glow transition hover:scale-105" aria-label="Open event inquiry form">
        <WhatsAppIcon size={24} />
      </a>
    </section>
  );
}

