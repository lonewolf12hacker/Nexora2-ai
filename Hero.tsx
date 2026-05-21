import React from 'react';
import { Terminal, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Status Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-mono mb-8 uppercase tracking-widest animate-pulse">
          <Terminal className="w-3.5 h-3.5" /> v2.0 Live Network Active
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-none">
          Autonomous Intelligence for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">Scale Operations</span>
        </h1>

        {/* Subtitle */}
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Nexora deploys sandboxed neural layers that autonomously audit, accelerate, and optimize complex enterprise application states.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
            Initialize Infrastructure <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#features" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 font-medium text-sm transition-all text-neutral-300">
            Review Documentation
          </a>
        </div>
      </div>
    </section>
  );
}
