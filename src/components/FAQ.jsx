import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "What types of events does Event Brigade organise?",
    answer:
      "Event Brigade is an event management company based in Pune, delivering events across India. We specialise in corporate events, social events, brand activations, conferences, employee engagement activities, weddings, private celebrations and experiential events."
  },
  {
    question: "Does Event Brigade provide end-to-end event planning and execution?",
    answer:
      "Yes. Event Brigade provides end-to-end event management services, including event planning, creative concepts, production, vendor coordination, logistics and on-ground execution across India."
  },
 {
    question: "What corporate events does Event Brigade manage?",
    answer:
      "Event Brigade manages a wide range of corporate events, including annual days, conferences, award ceremonies, corporate parties, offsites, employee engagement events and team-building activities across India."
  },
  {
    question: "Does Event Brigade organise brand activations and experiential events?",
    answer:
      "Yes. We plan and execute brand activations and experiential events across India, including concept development, event production, branding, audience engagement and on-ground execution."
  },
  {
    question: "Does Event Brigade provide complete wedding planning and management services?",
    answer:
      "Yes. Event Brigade provides complete wedding planning and management, including customised concepts and themes, venue and vendor coordination, décor, entertainment, production, guest management, logistics and on-ground execution. We create personalised wedding experiences based on the couple's vision, requirements and budget."
  },
  {
    question: "Does Event Brigade provide complete planning and management for social events?",
    answer:
      "Yes. Event Brigade manages social events and private celebrations, including birthdays, anniversaries, parties and milestone celebrations. Our services cover customised themes, décor, entertainment, games and activities, production, vendor coordination, logistics and complete on-ground execution."
  },
  {
    question: "Can Event Brigade create a customised concept or theme for an event?",
    answer:
      "Yes. Event Brigade develops customised event concepts and themes based on the event objective, audience, venue, occasion and budget. From creative concepts and décor to entertainment, activities and production, we bring the different elements together to create a cohesive event experience."
  },
  {
    question: "Does Event Brigade provide event production, décor, AV and technical setup?",
    answer:
      "Yes. Event Brigade coordinates event production requirements including stage setups, décor, sound, lighting, LED screens, AV equipment, fabrication and other technical elements. Our production team works with the required vendors and coordinates the setup, execution and dismantling of event infrastructure."
  },
  {
    question: "Can Event Brigade help with venue selection, vendors and event logistics?",
    answer:
      "Yes. Depending on the event requirements, Event Brigade can assist with venue selection, vendor coordination and event logistics. This can include coordinating production, décor, entertainment, transportation, staffing, schedules and other operational requirements for events across India."
  },
  {
    question: "Does Event Brigade organise employee engagement activities and corporate experiences?",
    answer:
      "Yes. Event Brigade plans employee engagement activities and corporate experiences designed around the audience, company objectives and event format. These can include team-building activities, interactive games, themed experiences, celebrations and other customised engagement formats."
  },
  {
    question: "Can Event Brigade manage events outside Pune?",
    answer:
      "Yes. Event Brigade is based in Pune and delivers event management services across India. Our team can manage corporate events, brand activations, weddings, social events and other experiences across locations, handling planning, production, vendor coordination, logistics and on-ground execution."
  },
  {
    question: "How much does event management cost?",
    answer:
      "The cost of event management varies depending on factors such as the type and scale of the event, guest count, location, venue, production, décor, entertainment, logistics and other requirements. Event Brigade creates customised proposals based on the specific scope and budget of each event."
  },
  {
    question: "Can Event Brigade plan an event according to our budget?",
    answer:
      "Yes. Event Brigade can develop event concepts and execution plans based on the available budget. Our team can prioritise the most important elements of the experience and recommend suitable options for production, décor, entertainment, activities and other event requirements."
  },
  {
    question: "How far in advance should I book Event Brigade?",
    answer:
      "Ideally, event planning should begin several weeks or months in advance, depending on the event size, location and requirements. But if you're in a time crunch, Event Brigade is always here to come to your rescue. Our team can assess your timeline and help plan and execute your event efficiently."
  },
  {
    question: "How does Event Brigade's event planning and execution process work?",
    answer:
      "The process typically begins with understanding the client's event objectives, audience, date, location and requirements. The team then develops the concept and event plan, coordinates vendors and production, manages timelines and prepares for execution. On the event day, the team oversees setup, coordination and on-ground operations."
  },
  {
    question: "How can I get a quotation or book Event Brigade for my event?",
    answer:
      "You can contact Event Brigade with details such as your event type, preferred date, location, approximate guest count and requirements. Our team will understand your brief, discuss the possibilities and prepare a customised proposal based on the event scope and budget."
  },
  {
    question: "How can I apply for a career opportunity at Event Brigade?",
    answer:
      "We're always open to meeting passionate people interested in event management, production, creative, marketing and event operations. To explore current career opportunities, internships or freelance roles at Event Brigade, you can share your profile and resume with our team. Your next opportunity could be just one event away!"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-b from-charcoal via-obsidian to-charcoal py-12 md:py-16"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_18%_20%,rgba(212,175,55,0.10),transparent_28%),radial-gradient(circle_at_82%_75%,rgba(244,208,111,0.07),transparent_30%)]" />

      <div className="relative mx-auto max-w-5xl px-8 md:px-12">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.34em] text-gold">
            FAQ
          </p>

          <h2 className="font-serif text-4xl leading-tight text-[#FAF7F2] sm:text-5xl md:text-6xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-smoke sm:text-base">
            Everything you need to know about working with Event Brigade
            and bringing your event vision to life.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="border-t border-champagne/20">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-champagne/20"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-300 hover:text-gold"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg text-[#FAF7F2] sm:text-xl">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-champagne/25 text-gold transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    <Plus size={17} strokeWidth={1.5} />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-4xl pb-7 pr-12 text-sm leading-7 text-smoke sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}