import React from 'react';
import { ShieldCheck, BarChart3, Clock, Server } from 'lucide-react';

const features = [
  { icon: <Clock className="w-5 h-5 text-blue-400" />, name: "Fast Deployment", val: 94, label: "Systems Ready" },
  { icon: <BarChart3 className="w-5 h-5 text-purple-400" />, name: "Smart Analytics", val: 88, label: "Decision Engine" },
  { icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />, name: "24/7 Automation", val: 100, label: "Uptime Guaranteed" },
  { icon: <Server className="w-5 h-5 text-cyan-400" />, name: "Scalable Infrastructure", val: 76, label: "Resource Elasticity" }
];

export default function Features() {
  return (
    <section id="features" className="py-32 bg-neutral-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Built for enterprise-grade <br />
            <span className="text-gradient">resilience and scale.</span>
          </h2>
          <p className="text-neutral-400 mb-8 leading-relaxed">
            Nexora AI designs systems with robust data monitoring dashboards and native scalability parameters so operations remain uninterrupted during volume spikes.
          </p>
          <div className="flex gap-4">
            <div className="p-4 border border-white/5 rounded-xl glass-card">
              <div className="text-2xl font-bold text-white font-mono">99.9%</div>
              <div className="text-xs text-neutral-500">API Operational Success</div>
            </div>
            <div className="p-4 border border-white/5 rounded-xl glass-card">
              <div className="text-2xl font-bold text-white font-mono">&lt; 250ms</div>
              <div className="text-xs text-neutral-500">Average Agent Response</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feat, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 border-white/5 hover:border-purple-500/20 transition-all">
              <div className="flex items-center gap-3 mb-4">
                {feat.icon}
                <span className="font-semibold text-sm">{feat.name}</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-neutral-500">
                  <span>{feat.label}</span>
                  <span className="font-mono">{feat.val}%</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-1000" style={{ width: `${feat.val}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
