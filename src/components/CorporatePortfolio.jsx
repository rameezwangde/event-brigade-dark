import React from 'react';
import EventPortfolioPage from './EventPortfolioPage.jsx';

const fullImages = Object.entries(
  import.meta.glob('../assets/corporate/corporate-page-*.jpg', {
    eager: true,
    query: '?url',
    import: 'default'
  })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src)
  .slice(0, 18);

const thumbImages = Object.entries(
  import.meta.glob('../assets/corporate-thumbs/corporate-page-*.jpg', {
    eager: true,
    query: '?url',
    import: 'default'
  })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src)
  .slice(0, 18);

const pages = fullImages.map((full, index) => ({
  full,
  thumb: thumbImages[index] || full
}));

export default function CorporatePortfolio() {
  return (
    <EventPortfolioPage
      eyebrow="Corporate Portfolio 2026"
      title="Corporate Productions"
      intro="Corporate stages, launches, conferences, partner meets, outdoor events and audience journeys presented as a polished Event Brigade showcase."
      pages={pages}
      activeHref="/corporate-portfolio"
    />
  );
}
