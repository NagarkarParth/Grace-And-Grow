import React from 'react';
import { 
  Crosshair, 
  Globe, 
  Cpu, 
  Smartphone, 
  Terminal, 
  ArrowRight
} from 'lucide-react';
import { servicesData } from '../data/services';
import { soundManager } from '../utils/soundEffects';

const iconMap = {
  Terminal,
  Cpu,
  Smartphone,
  Globe
};

export default function Services() {
  const handleDeployService = () => {
    soundManager.playConfirm();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-20 bg-[#080A0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-zinc-800/80 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
              <Crosshair className="w-4 h-4 text-amber-500" />
              <span>FREELANCE DIRECTIVES // 06</span>
            </div>
            <h2 className="mt-2 font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase text-glow-orange">
              SERVICES
            </h2>
            <p className="mt-1 text-sm font-mono text-zinc-400 uppercase tracking-wider">
              "AVAILABLE FREELANCE &amp; DEVELOPMENT CAPABILITIES"
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 bg-[#101214] px-4 py-2 border border-zinc-800 rounded">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-bold uppercase tracking-wider">CONTRACTS OPEN</span>
            <span className="text-zinc-600">//</span>
            <span>4 ACTIVE CAPABILITIES</span>
          </div>
        </div>

        {/* Services Grid (4 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {servicesData.map((svc) => {
            const Icon = iconMap[svc.iconName] || Terminal;

            return (
              <div
                key={svc.id}
                onMouseEnter={() => soundManager.playHover()}
                className="group relative bg-[#101214] hover:bg-[#14171A] border border-zinc-800/90 hover:border-amber-500/70 p-6 rounded-sm transition-all duration-200 shadow-xl hud-bracket flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between text-xs font-mono pb-3 mb-4 border-b border-zinc-800/80">
                    <span className="text-zinc-400 font-bold tracking-wider">SERVICE {svc.number}</span>
                    <span className="px-2 py-0.5 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold uppercase rounded-xs tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {svc.status}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="p-3 bg-[#181B1E] border border-zinc-700 group-hover:border-amber-500/60 rounded shrink-0 transition-colors">
                      <Icon className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-display font-black text-xl text-white group-hover:text-amber-400 transition-colors uppercase tracking-wide">
                        {svc.title}
                      </h3>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block font-medium">
                        {svc.category}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-300 font-body leading-relaxed">
                    "{svc.description}"
                  </p>

                  {/* Deliverables */}
                  <div className="mt-4 pt-3 border-t border-zinc-800/80 space-y-1.5">
                    {svc.deliverables.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                        <span className="text-amber-500 font-bold text-[10px]">&gt;</span>
                        <span className="truncate">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action: Get in touch CTA */}
                <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                    {svc.tech.map((t) => (
                      <span key={t} className="px-1.5 py-0.5 bg-[#181B1E] text-zinc-400 rounded-xs">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={handleDeployService}
                    onMouseEnter={() => soundManager.playHover()}
                    className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-yellow-500 text-black font-tactical font-extrabold text-xs uppercase tracking-wider rounded-xs transition-all shadow-md active:scale-95 shrink-0 cursor-pointer"
                  >
                    <span>GET IN TOUCH</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
