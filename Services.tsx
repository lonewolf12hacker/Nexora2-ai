import React from 'react';
import { MessageSquareCode, Globe, Zap, Headset } from 'lucide-react';

const services = [
  {
    icon: <MessageSquareCode className="w-6 h-6 text-blue-400" />,
    title: "AI Chatbots",
    desc: "Custom LLM integrations configured specifically to convert leads and talk fluidly like internal human experts."
  },
  {
    icon: <Globe className="w-6 h-6 text-purple-400" />,
    title: "Web Development",
    desc: "Ultra-fast, responsive web interfaces styled with expensive modern animations and tailored for clean user tracking."
  },
  {
    icon: <Zap className="w-6 h-6 text-indigo-400" />,
    title: "Workflow Automation",
    desc: "Connect your entire tech stack via customized API pipelines to fully eliminate recurring manual entries."
  },
  {
    icon: <Headset className="w-6 h-6 text-cyan-400" />,
    title: "Customer Support AI",
    desc: "Autonomous agents resolving complex Tier-1 issues instantly 24/7 across email, Discord, and messaging apps."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 max-w-7xl mx-auto px-6 relative">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Capabilities</h2>
        <p className="text-neutral-400 max-w-xl mx-auto">Production-ready AI integration engineered to optimize your daily operations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((svc, idx) => (
          <div key={idx} className="glass-card rounded-2xl p-6 group hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {svc.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">{svc.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{svc.desc}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-blue-400 group-hover:gap-2 transition-all">
              Deploy Integration &rarr;
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
