import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, text, align = 'center', eyebrowClassName = '', className = 'max-w-4xl' }) {
  return (
    <motion.div
      className={`mx-auto ${className} ${align === 'left' ? 'mx-0 text-left' : 'text-center'}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
    >
      <p className={`mb-4 text-base font-semibold uppercase tracking-[0.34em] text-champagne md:text-lg ${eyebrowClassName}`}>{eyebrow}</p>
      <h2 className="font-serif font-bold text-4xl leading-tight text-ivory md:text-6xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-smoke md:text-lg">{text}</p>}
    </motion.div>
  );
}
