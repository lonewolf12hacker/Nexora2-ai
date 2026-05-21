import React from 'react';
import { Terminal, Activity, ArrowUpRight } from 'lucide-react';

export default function Showcase() {
  return (
    <section className="py-32 max-w-7xl mx-auto px-6 relative">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Inside the Core Workspace</h2>
        <p className="text-neutral-400 max-w-xl mx-auto">Take a look at how our deployed AI models stream information and handle processes autonomously.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Technical Data Stream */}
        <div className="glass-card rounded-2xl p-6 border-white/5 lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">Autonomous Agent Terminal</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">LIVE_FEED</span>
            </div>
            
            <div className="space-y-3 font-mono text-xs text-neutral-400 max-h-60 overflow-y-auto pr-2">
              <p className="text-blue-400">&gt;&gt; initializing nexora-core-model-v4.1...</p>
              <p>&gt;&gt; ingestion pipeline established. processing active user streams.</p>
              <p className="text-purple-400">&gt;&gt; database synchronization [success]: 24,850 rows optimized.</p>
              <p>&gt;&gt; executing automated backup sequence across cloud infrastructure nodes...</p>
              <p className="text-emerald-400">&gt;&gt; anomaly detection matrix: 0 structural errors encountered.</p>
              <p className="text-neutral-500">&gt;&gt; thread idling. awaiting high-volume transactional request hooks.</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-white/5 bg-neutral-950/40 p-4 rounded-xl">
            <div>
              <div className="text-[10px] text-neutral-500 font-mono uppercase">Avg Execution</div>
              <div className="text-lg font-bold text-white font-mono">1.2s</div>
            </div>
            <div>
              <div className="text-[10px] text-neutral-500 font-mono uppercase">Token/Sec</div>
              <div className="text-lg font-bold text-white font-mono">124.5k</div>
            </div>
            <div>
              <div className="text-[10px] text-neutral-500 font-mono uppercase">Active Nodes</div>
              <div className="text-lg font-bold text-white font-mono">16/16</div>
            </div>
          </div>
        </div>

        {/* Live System Resource Monitoring */}
        <div className="glass-card rounded-2xl p-6 border-white/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 pb-4 mb-6 border-b border-white/5">
              <Activity className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">Node Metrics</span>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-neutral-400">Model Threshold Inference</span>
                  <span className="font-mono text-blue-400">42%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-[42%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-neutral-400">API Queue Load</span>
                  <span className="font-mono text-purple-400">18%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full w-[18%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-neutral-400">Memory Cache Pool</span>
                  <span className="font-mono text-indigo-400">89%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="bg-indigo-500 h-full w-[89%]" />
                </div>
              </div>
            </div>
          </div>

          <a href="#contact" className="mt-8 w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-center border border-white/5 text-neutral-300 transition-all flex items-center justify-center gap-2">
            Request API Access Key <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
