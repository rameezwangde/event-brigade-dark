import React from 'react';
import { Mail, MapPin, MessageCircle, Phone, Send, Sparkles } from 'lucide-react';
import { contact } from '../data.js';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function Contact() {
  const whatsapp = `https://wa.me/918552831191?text=${encodeURIComponent('Hello Event Brigade, I would like to plan an event.')}`;

  return (
    <section id="contact" className="section relative overflow-hidden bg-obsidian">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(244,215,138,0.16),transparent_36%)]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Plan An Event"
          title="Let us design your next extraordinary gathering."
          text="Share your brief and the Event Brigade team will help you shape the event with clarity, creativity and confident execution."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="rounded-[2rem] border border-champagne/20 bg-charcoal/70 p-8 shadow-soft md:p-10">
            <h3 className="font-serif text-4xl text-ivory">Contact us</h3>
            <p className="mt-3 text-smoke">We are always available to listen.</p>
            <div className="mt-8 space-y-5">
              <a className="contact-line" href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`}>
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
            <a href={whatsapp} target="_blank" rel="noreferrer" className="btn-primary mt-9 inline-flex">
              <MessageCircle size={18} /> WhatsApp Quick Contact
            </a>
          </Reveal>

          <Reveal className="glass-card p-6 md:p-10" delay={0.08}>
            <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
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
              <button type="submit" className="btn-primary w-full justify-center">
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
