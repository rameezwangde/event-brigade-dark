import React from 'react';
import EventPortfolioPage from './EventPortfolioPage.jsx';

// Dynamically generate the 35 wedding slide pages
const weddingPages = Array.from({ length: 35 }, (_, i) => {
  const pageNum = String(i + 1).padStart(2, '0');
  return {
    full: new URL(`../assets/wedding-portfolio/wedding-page-${pageNum}.jpg`, import.meta.url).href,
    thumb: new URL(`../assets/wedding-portfolio-thumbs/wedding-page-${pageNum}.jpg`, import.meta.url).href
  };
});

export default function WeddingPortfolio() {
  return (
    <EventPortfolioPage
      eyebrow="Wedding Portfolio 2026"
      title="Wedding celebrations engineered for beauty."
      intro="If you can dream it, we can create it. Browse through our complete 2026 wedding planning booklet pages showcasing detailed concept setups, timelines, logistics, and visual highlights."
      pages={weddingPages}
      activeHref="/wedding-portfolio"
    />
  );
}
