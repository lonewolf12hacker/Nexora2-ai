import React from 'react';

export default function TrustBar() {
  const partners = ["Vercel", "Stripe", "Linear", "OpenAI", "Anthropic"];
  
  return (
    <section className="py-16 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-neutral-500 text-xs font-semibold uppercase tracking-[0.2em] mb-10">
          Powering the next generation of enterprise AI
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 hover:opacity-100 transition-opacity duration-700">
          {partners.map((brand) => (
            <span key={brand} className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
