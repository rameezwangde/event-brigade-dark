import React from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { stats } from '../data.js';
import heroImage from '../../Hero final.jpg';

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
    <section id="home" className="relative min-h-[100svh] overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40 lg:min-h-[56.25vw] lg:pt-48">
      <img
        src={heroImage}
        alt="Event Brigade corporate event stage with seating and production lights"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/75 to-obsidian" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(212,175,55,0.26),transparent_32%),radial-gradient(circle_at_12%_65%,rgba(244,208,111,0.18),transparent_28%)]" />
      <div className="particles" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-full text-center"
        >
          <h1 className="font-display font-black uppercase tracking-[0.03em] text-4xl leading-[0.95] sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem]">
            <span className="text-[#FAF7F2]">EVENT </span>
            <span className="text-[#D4AF37]">BRIGADE</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-sm font-abel uppercase tracking-[0.45em] text-ivory/80 sm:text-base md:text-lg lg:text-xl">TO YOUR RESCUE</p>
        </motion.div>

        <div className="mx-auto mt-24 grid max-w-4xl w-full gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card p-5 text-center h-full"
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
