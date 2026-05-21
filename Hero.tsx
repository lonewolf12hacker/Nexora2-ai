import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-400 mb-8 hover:border-blue-500/50 transition-colors cursor-default">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          Enterprise AI Infrastructure v2.0
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 gradient-text leading-[0.9]">
          Intelligence that<br />scales systems.
        </h1>
        
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Nexora deploys autonomous neural layers to optimize enterprise state transitions. Build, audit, and scale your infrastructure in real-time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-neutral-200 transition-all active:scale-95 flex items-center gap-2">
            Initialize Platform <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all">
            View Documentation
          </button>
        </div>
      </div>
    </section>
  );
}
