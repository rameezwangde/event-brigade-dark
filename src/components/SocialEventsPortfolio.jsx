import React from 'react';
import EventPortfolioPage from './EventPortfolioPage.jsx';

// Dynamically generate the 38 social event slide pages
const socialPages = Array.from({ length: 38 }, (_, i) => {
  const pageNum = String(i + 1).padStart(2, '0');
  return {
    full: new URL(`../assets/social-events-portfolio/social-page-${pageNum}.jpg`, import.meta.url).href,
    thumb: new URL(`../assets/social-events-portfolio-thumbs/social-page-${pageNum}.jpg`, import.meta.url).href
  };
});

export default function SocialEventsPortfolio() {
  return (
    <EventPortfolioPage
      eyebrow="Social Events Portfolio 2026"
      title="Social celebrations made personal."
      intro="Intimate milestones, birthdays, and community festivals organized with professional production structure. Swipe through our showcase slides."
      pages={socialPages}
      activeHref="/social-events-portfolio"
    />
  );
}
