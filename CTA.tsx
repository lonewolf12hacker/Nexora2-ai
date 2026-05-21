import React from 'react';
import { Send } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-32 max-w-5xl mx-auto px-6 relative">
      <div className="glass-card rounded-3xl p-8 md:p-16 border-white/5 relative overflow-hidden bg-grid-pattern text-center">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to automate your operations?</h2>
          <p className="text-neutral-400 text-sm md:text-base mb-10">
            Drop your details below to schedule a one-on-one architecture call with our system engineers.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full h-12 px-4 rounded-xl bg-neutral-900 border border-white/5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500/50 transition-all font-mono"
            />
            <input 
              type="email" 
              placeholder="Business Email" 
              className="w-full h-12 px-4 rounded-xl bg-neutral-900 border border-white/5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500/50 transition-all font-mono"
            />
            <button className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-medium text-sm text-white flex items-center justify-center gap-2 hover:scale-[1.01] transition-all shadow-lg shadow-blue-500/20">
              Submit Request <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
