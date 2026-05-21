import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative bg-neutral-950 text-neutral-100 min-h-screen overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Showcase />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
