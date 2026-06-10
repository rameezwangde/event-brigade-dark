import React from 'react';
import { Mail, MapPin, MessageCircle, Phone, Send, Sparkles } from 'lucide-react';
import { contact } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function Contact() {
  const whatsapp = `https://wa.me/918552831191?text=${encodeURIComponent('Hello Event Brigade, I would like to plan an event.')}`;

  return (
    <section id="contact" className="relative overflow-hidden bg-obsidian pb-24 pt-10 md:pb-32 md:pt-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.16),transparent_36%)]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Plan An Event"
          eyebrowClassName="text-2xl md:text-3xl"
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
              <a className="contact-line" href={contact.mapUrl} target="_blank" rel="noreferrer">
                <MapPin className="text-gold" /> <span>{contact.address}</span>
              </a>
              <a className="contact-line" href="tel:+918552831191">
                <Phone className="text-gold" /> <span>{contact.phones.join(', ')}</span>
              </a>
              <a className="contact-line" href={`mailto:${contact.email}`}>
                <Mail className="text-gold" /> <span>{contact.email}</span>
              </a>
              <a className="contact-line" href="https://www.eventbrigade.in/">
                <Sparkles className="text-gold" /> <span>{contact.website}</span>
              </a>
            </div>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="btn-primary mt-7 w-full justify-center">
              <MessageCircle size={18} /> WhatsApp Quick Contact
            </a>
          </Reveal>

          <Reveal className="glass-card h-full p-8 md:p-10" delay={0.08}>
            <form className="flex h-full flex-col gap-5" onSubmit={(event) => event.preventDefault()}>
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
                Send Inquiry <Send size={18} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
      <a href="#contact" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full border border-gold/40 bg-gold text-obsidian shadow-glow transition hover:scale-105" aria-label="Open event inquiry form">
        <MessageCircle size={24} />
      </a>
    </section>
  );
}
