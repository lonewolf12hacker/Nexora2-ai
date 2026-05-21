import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import TrustBar from './TrustBar';
import Features from './Features';
import Testimonials from './Testimonials';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <Features />
      <Testimonials />
    </div>
  );
}
