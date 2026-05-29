import React from 'react';
import EventPortfolioPage from './EventPortfolioPage.jsx';

const fullImages = Object.entries(
  import.meta.glob('../assets/wedding-portfolio/wedding-page-*.jpg', {
    eager: true,
    query: '?url',
    import: 'default'
  })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const thumbImages = Object.entries(
  import.meta.glob('../assets/wedding-portfolio-thumbs/wedding-page-*.jpg', {
    eager: true,
    query: '?url',
    import: 'default'
  })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const pages = fullImages.map((full, index) => ({
  full,
  thumb: thumbImages[index] || full
}));

export default function WeddingPortfolio() {
  return (
    <EventPortfolioPage
      eyebrow="Wedding Portfolio 2026"
      title="Wedding Experiences"
      intro="A curated wedding portfolio presented inside the Event Brigade site experience, from invitations and hospitality to rituals, decor, entertainment and guest activities."
      pages={pages}
      activeHref="/wedding-portfolio"
    />
  );
}
