import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import BrandHeritage from './components/BrandHeritage.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.jsx';
import Testimonials from './components/Testimonials.jsx';
import Founder from './components/Founder.jsx';
import BusinessCard3D from './components/BusinessCard3D.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-obsidian text-ivory">
      <Navbar />
      <main>
        <Hero />
        <BrandHeritage />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Founder />
        <BusinessCard3D />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
