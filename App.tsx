import React from 'react';
import Navbar from './Navbar.tsx';
import Hero from './Hero.tsx';
import Features from './Features.tsx';
import Testimonials from './Testimonials.tsx';
import Pricing from './Pricing.tsx';
import CTA from './CTA.tsx';
import Footer from './Footer.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-blue-500/30 selection:text-blue-200 antialiased overflow-x-hidden">
      {/* Background ambient glow mesh */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* Main Core Layout Interface */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
