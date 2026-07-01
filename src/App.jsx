import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import BrandHeritage from './components/BrandHeritage.jsx';
import About from './components/About.jsx';
import WeddingServices from './components/WeddingServices.jsx';
import CorporateServices from './components/CorporateServices.jsx';
import SocialServices from './components/SocialServices.jsx';
import WeddingPortfolio from './components/WeddingPortfolio.jsx';
import CorporatePortfolio from './components/CorporatePortfolio.jsx';
import SocialEventsPortfolio from './components/SocialEventsPortfolio.jsx';
import PortfolioAccess from './components/PortfolioAccess.jsx';
import Testimonials from './components/Testimonials.jsx';
import Founder from './components/Founder.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Privacy from './components/Privacy.jsx';



export default function App() {
  const [path, setPath] = useState(window.location.pathname.replace(/\/$/, '') || '/');

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname.replace(/\/$/, '') || '/');
      
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const id = decodeURIComponent(hash.slice(1));
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo(0, 0);
          }
        }, 150);
      } else {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 50);
      }
    };

    // Override window.history.pushState to trigger location changes in state
    const originalPushState = window.history.pushState;
    window.history.pushState = function (...args) {
      originalPushState.apply(this, args);
      window.dispatchEvent(new Event('popstate'));
    };

    window.addEventListener('popstate', handleLocationChange);
    
    // Check initial hash on mount
    const initialHash = window.location.hash;
    if (initialHash) {
      setTimeout(() => {
        const id = decodeURIComponent(initialHash.slice(1));
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }

    return () => {
      window.history.pushState = originalPushState;
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-obsidian text-ivory">
      <Navbar />
      <main>
        {path === '/about' ? (
          <About />
        ) : path === '/services' || path === '/wedding-services' ? (
          <WeddingServices />
        ) : path === '/wedding-portfolio' ? (
          <WeddingPortfolio />
        ) : path === '/corporate-services' ? (
          <CorporateServices />
        ) : path === '/corporate-portfolio' ? (
          <CorporatePortfolio />
        ) : path === '/social-services' ? (
          <SocialServices />
        ) : path === '/social-events-portfolio' ? (
          <SocialEventsPortfolio />
        ) : path === '/testimonials' ? (
          <Testimonials />
        ) : path === '/founder' ? (
          <Founder />
        ) : path === '/contact' ? (
          <Contact />
        ) : path === '/privacy' ? (
          <Privacy />
        ) : (
          <>
            <Hero />
            <BrandHeritage />
            <PortfolioAccess />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
