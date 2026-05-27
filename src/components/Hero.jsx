import React from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { stats } from '../data.js';
import heroImage from '../../hero.png';

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) ref.current.textContent = `${Math.round(latest).toLocaleString('en-IN')}${suffix}`;
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32">
      <img
        src={heroImage}
        alt="Event Brigade corporate event stage with seating and production lights"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/75 to-obsidian" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(244,215,138,0.26),transparent_32%),radial-gradient(circle_at_12%_65%,rgba(216,183,106,0.18),transparent_28%)]" />
      <div className="particles" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-center px-5 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl"
        >
          <h1 className="font-serif text-5xl leading-[0.95] text-ivory md:text-7xl lg:text-8xl">
            <span className="text-gradient">Event Brigade</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-light tracking-wide text-ivory/80 md:text-3xl">We Design. We Plan. We Deliver.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#services" className="btn-primary">
              Explore Services <ArrowRight size={18} />
            </a>
            <a href="#portfolio" className="btn-secondary">View Portfolio</a>
            <a href="#contact" className="btn-secondary">
              <CalendarDays size={18} /> Plan An Event
            </a>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 + index * 0.1 }}
            >
              <div className="font-serif text-4xl text-gold md:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-smoke">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
