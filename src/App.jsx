import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import BrandHeritage from './components/BrandHeritage.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import CorporatePortfolio from './components/CorporatePortfolio.jsx';
import WeddingPortfolio from './components/WeddingPortfolio.jsx';
import PortfolioAccess from './components/PortfolioAccess.jsx';
import Testimonials from './components/Testimonials.jsx';
import Founder from './components/Founder.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const BusinessCard3D = lazy(() => import('./components/BusinessCard3D.jsx'));

function BusinessCardSlot() {
  const ref = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '650px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {shouldLoad ? (
        <Suspense
          fallback={
            <section className="section bg-charcoal">
              <div className="mx-auto max-w-7xl px-5">
                <div className="min-h-[420px] animate-pulse rounded-[2rem] border border-champagne/15 bg-ivory/[0.035]" />
              </div>
            </section>
          }
        >
          <BusinessCard3D />
        </Suspense>
      ) : (
        <section className="section bg-charcoal">
          <div className="mx-auto max-w-7xl px-5">
            <div className="min-h-[420px] rounded-[2rem] border border-champagne/15 bg-ivory/[0.03]" />
          </div>
        </section>
      )}
    </div>
  );
}

export default function App() {
  const currentPath = window.location.pathname.replace(/\/$/, '');
  const isCorporatePortfolioPage = currentPath === '/corporate-portfolio';
  const isWeddingPortfolioPage = currentPath === '/wedding-portfolio';

  return (
    <div className="min-h-screen overflow-x-hidden bg-obsidian text-ivory">
      <Navbar />
      <main>
        {isCorporatePortfolioPage ? (
          <CorporatePortfolio />
        ) : isWeddingPortfolioPage ? (
          <WeddingPortfolio />
        ) : (
          <>
            <Hero />
            <BrandHeritage />
            <About />
            <Services />
            <PortfolioAccess />
            <Testimonials />
            <Founder />
            <BusinessCardSlot />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
