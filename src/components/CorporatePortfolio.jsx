import React from 'react';
import EventPortfolioPage from './EventPortfolioPage.jsx';

import heroStage from '../assets/corporate-extracted/corporate-p15-xref1070.jpg';
import conferenceStage from '../assets/corporate-extracted/corporate-p17-xref1109.jpg';
import awardsNight from '../assets/corporate-extracted/corporate-p08-xref843.jpg';
import registrationDesk from '../assets/corporate-extracted/corporate-p14-xref1057.jpg';
import partnerMeet from '../assets/corporate-extracted/corporate-p14-xref1046.jpg';
import outdoorSetup from '../assets/corporate-extracted/corporate-p13-xref1011.jpg';
import launchWalk from '../assets/corporate-extracted/corporate-p14-xref1054.jpg';
import familyTheme from '../assets/corporate-extracted/corporate-p15-xref1073.jpg';
import groupPhoto from '../assets/corporate-extracted/corporate-p13-xref1020.jpg';
import clientMeet from '../assets/corporate-extracted/corporate-p12-xref973.jpg';

const corporatePages = [
  { full: heroStage, thumb: heroStage },
  { full: conferenceStage, thumb: conferenceStage },
  { full: awardsNight, thumb: awardsNight },
  { full: registrationDesk, thumb: registrationDesk },
  { full: partnerMeet, thumb: partnerMeet },
  { full: outdoorSetup, thumb: outdoorSetup },
  { full: launchWalk, thumb: launchWalk },
  { full: familyTheme, thumb: familyTheme },
  { full: groupPhoto, thumb: groupPhoto },
  { full: clientMeet, thumb: clientMeet }
];

export default function CorporatePortfolio() {
  return (
    <EventPortfolioPage
      eyebrow="Corporate Portfolio 2026"
      title="Corporate events engineered for impact."
      intro="Strategy, high-spec AV production, summits, and employee celebrations delivered with strict execution standards. Browse through our showcase pages."
      pages={corporatePages}
      activeHref="/corporate-portfolio"
    />
  );
}
