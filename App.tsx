import Navbar from './Navbar.tsx';
import Hero from './Hero.tsx';
import Features from './Features.tsx';
import TechnicalGrid from './TechnicalGrid.tsx';
import Testimonials from './Testimonials.tsx';
import Pricing from './Pricing.tsx';
import CTA from './CTA.tsx';
import Footer from './Footer.tsx';

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
