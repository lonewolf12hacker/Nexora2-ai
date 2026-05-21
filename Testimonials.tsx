import React from 'react';
import { User } from 'lucide-react';

const testimonials = [
  {
    quote: "Nexora's automated customer workflows cut our support overhead down completely. The integration was incredibly smooth.",
    author: "Sarah Jenkins",
    role: "COO, Vertex Media",
    initials: "SJ"
  },
  {
    quote: "The AI agent they built answers our product inquiries flawlessly. It acts exactly like an internal team expert.",
    author: "Marcus Vance",
    role: "Founder, SaaSFlow",
    initials: "MV"
  },
  {
    quote: "Our custom database pipeline handles high-volume streaming without single lag points. Exceptionally clean engineering.",
    author: "Elena Rostova",
    role: "CTO, CloudPulse Systems",
    initials: "ER"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 max-w-7xl mx-auto px-6 relative border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Industry Leaders</h2>
        <p className="text-neutral-400 max-w-xl mx-auto">See how businesses are leveraging our automated infrastructure to scale operations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {testimonials.map((t, idx) => (
          <div key={idx} className="glass-card rounded-2xl p-8 border-white/5 flex flex-col justify-between hover:border-blue-500/10 transition-colors duration-300">
            <p className="text-neutral-300 text-base leading-relaxed italic mb-8">
              "{t.quote}"
            </p>
            
            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-bold text-xs text-white uppercase font-mono tracking-wider shadow-inner">
                {t.initials}
              </div>
              <div>
                <div className="font-semibold text-sm text-white">{t.author}</div>
                <div className="text-xs text-neutral-500 font-mono mt-0.5">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
