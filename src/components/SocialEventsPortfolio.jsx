import React from 'react';
import EventPortfolioPage from './EventPortfolioPage.jsx';

const fullImages = Object.entries(
  import.meta.glob('../assets/social-events-portfolio/social-page-*.jpg', {
    eager: true,
    query: '?url',
    import: 'default'
  })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src)
  .slice(0, 38);

const thumbImages = Object.entries(
  import.meta.glob('../assets/social-events-portfolio-thumbs/social-page-*.jpg', {
    eager: true,
    query: '?url',
    import: 'default'
  })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src)
  .slice(0, 38);

const pages = fullImages.map((full, index) => ({
  full,
  thumb: thumbImages[index] || full
}));

export default function SocialEventsPortfolio() {
  return (
    <EventPortfolioPage
      eyebrow="Social Events Portfolio 2026"
      title="Social Celebrations"
      intro="Birthdays, anniversaries, baby showers, community events, decor, entertainment and activity-led celebrations designed for memorable social experiences."
      pages={pages}
      activeHref="/social-events-portfolio"
    />
  );
}
