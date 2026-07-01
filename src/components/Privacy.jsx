import React from 'react';
import SectionHeader from './SectionHeader.jsx';
import Reveal from './Reveal.jsx';

export default function Privacy() {
  return (
    <section id="privacy" className="relative overflow-hidden bg-obsidian pb-24 pt-32 md:pb-32 md:pt-40 min-h-[80vh]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.16),transparent_36%)]" />
      <div className="relative mx-auto max-w-4xl px-8 md:px-12 lg:px-16 text-ivory">
        <SectionHeader
          eyebrow="Privacy Policy"
          title="How we handle your data."
          text="Your privacy is important to us. This policy outlines our practices."
        />
        
        <Reveal className="mt-12 space-y-8 text-smoke/90 leading-relaxed">
          <div>
            <h3 className="text-xl font-serif text-gold mb-3">1. Information We Collect</h3>
            <p>
              We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us about event planning services. This may include your name, email address, phone number, and event details.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif text-gold mb-3">2. How We Use Your Information</h3>
            <p>
              We use the information we collect to provide, maintain, and improve our services. Specifically, we use it to communicate with you about your event, process inquiries, and ensure we deliver the best possible experience.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif text-gold mb-3">3. Information Sharing</h3>
            <p>
              We do not sell or rent your personal information to third parties. We may share information with trusted vendors and partners strictly for the purpose of executing your event, always with your confidentiality in mind.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif text-gold mb-3">4. Security</h3>
            <p>
              We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif text-gold mb-3">5. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at our provided email address or phone number on the contact page.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
