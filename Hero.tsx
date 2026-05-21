import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 flex flex-col items-center justify-center overflow-hidden px-6 bg-grid-pattern">
      {/* Dynamic Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-float-slow" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-white/10 text-xs font-medium text-blue-400 mb-6 tracking-wide uppercase">
          <Sparkles className="w-3.5 h-3.5 animate-spin" /> Next-Gen Enterprise Automation
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          AI Automation For <br />
          <span className="text-gradient">Modern Businesses</span>
        </h1>

        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          We build intelligent websites, AI chatbots, and automated workflows that help businesses scale faster without additional operational overhead.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300">
            Book Free Consultation <ArrowUpRight className="w-4 h-4" />
          </a>
          <a href="#services" className="w-full sm:w-auto px-8 py-4 rounded-full font-medium glass-card hover:bg-white/5 border-white/10 transition-all text-neutral-300">
            View Services
          </a>
        </div>
      </div>

      {/* Futuristic Dashboard Mockup */}
      <div className="w-full max-w-5xl mx-auto relative z-10 px-4 animate-float-delayed">
        <div className="glass-card rounded-2xl border-white/10 p-4 shadow-2xl shadow-blue-500/5">
          <div className="flex items-center gap-2 pb-3 mb-4 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/40" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
            <div className="w-3 h-3 rounded-full bg-green-500/40" />
            <div className="h-4 bg-white/5 rounded px-3 text-[10px] text-neutral-500 font-mono ml-4 flex items-center">
              https://core.nexora.ai/dashboard
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-48 md:h-64 bg-neutral-950/50 rounded-xl p-4">
            <div className="border border-white/5 rounded-lg bg-white/[0.01] p-4 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-xs text-neutral-400 uppercase font-mono">Agent Status</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <div className="text-2xl font-bold tracking-tight text-blue-400 font-mono">99.8% Active</div>
            </div>
            <div className="border border-white/5 rounded-lg bg-white/[0.01] p-4 flex flex-col justify-between md:col-span-2">
              <span className="text-xs text-neutral-400 uppercase font-mono">Real-Time Data Streaming</span>
              <div className="w-full h-24 flex items-end gap-1 pt-4">
                {[40, 70, 55, 90, 45, 80, 95, 60, 75, 100, 40, 85].map((val, idx) => (
                  <div key={idx} className="flex-1 bg-gradient-to-t from-blue-600/40 to-purple-500 rounded-sm" style={{ height: `${val}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
