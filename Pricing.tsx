import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-neutral-950/40 border-y border-white/5 relative">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/[0.03] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Transparent Enterprise Tiers</h2>
          <p className="text-neutral-400 max-w-xl mx-auto">Flexible integration plans designed to fit your current structural scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
          {/* Starter Plan */}
          <div className="glass-card rounded-2xl p-8 border-white/5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase text-blue-400 tracking-wider mb-2">Automate Core</div>
              <h3 className="text-2xl font-bold text-white mb-4">Growth Tier</h3>
              <p className="text-neutral-400 text-sm mb-6">Perfect for growing brands looking to optimize customer support operations seamlessly.</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-mono font-bold text-white">$1,499</span>
                <span className="text-neutral-500 text-xs">/ deployment</span>
              </div>

              <div className="space-y-4">
                {["1 Custom Autonomous Agent", "Full Database API Pipe", "Standard UI Portal", "24/7 Core Operations", "Email Support Matrix"].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="#contact" className="mt-8 w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 text-center font-medium text-sm text-neutral-200 border border-white/5 transition-all">
              Initialize Deployment
            </a>
          </div>

          {/* Premium High-Volume Plan */}
          <div className="glass-card rounded-2xl p-8 border-blue-500/20 relative flex flex-col justify-between shadow-xl shadow-blue-500/[0.02]">
            <div className="absolute -top-3.5 right-6 text-[10px] font-mono tracking-widest text-white bg-blue-600 px-3 py-1 rounded-full uppercase font-bold shadow-lg shadow-blue-500/20 border border-blue-400/20">
              RECOMMENDED
            </div>

            <div>
              <div className="text-xs font-mono uppercase text-purple-400 tracking-wider mb-2">Infinite Scaling</div>
              <h3 className="text-2xl font-bold text-white mb-4">Scale Engine</h3>
              <p className="text-neutral-400 text-sm mb-6">Designed for enterprises demanding extreme dataset performance and cluster scaling.</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-mono font-bold text-gradient">$3,899</span>
                <span className="text-neutral-500 text-xs">/ deployment</span>
              </div>

              <div className="space-y-4">
                {["Unlimited Agent Architectures", "High-Volume Vector Datastores", "Custom Dashboard Console", "Real-Time Tracking Terminal", "Dedicated Node Technicians"].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="#contact" className="mt-8 w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.01] text-center font-medium text-sm text-white transition-all shadow-lg shadow-blue-500/20">
              Integrate Infrastructure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
