import React, { useState } from 'react';
import { Cpu, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-card border-b border-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-xl tracking-wider text-white">
          <Cpu className="w-6 h-6 text-blue-500 animate-pulse" />
          NEXORA<span className="text-blue-500">AI</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
          <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>

        <div className="hidden md:flex">
          <a href="#contact" className="px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300">
            Get Started
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-neutral-950 border-b border-white/10 flex flex-col p-6 gap-4 text-center">
          <a href="#" onClick={() => setIsOpen(false)} className="text-neutral-300 py-2">Home</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="text-neutral-300 py-2">Services</a>
          <a href="#features" onClick={() => setIsOpen(false)} className="text-neutral-300 py-2">Features</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="text-neutral-300 py-2">Pricing</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-neutral-300 py-2">Contact</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="mt-2 px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium">Get Started</a>
        </div>
      )}
    </nav>
  );
}
