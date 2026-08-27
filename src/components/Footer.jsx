import React from 'react';
import { 
  Crosshair, 
  Mail, 
  ChevronUp 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { soundManager } from '../utils/soundEffects';

export default function Footer() {
  const scrollToTop = () => {
    soundManager.playConfirm();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060809] border-t border-zinc-800 text-zinc-400 font-mono text-xs overflow-hidden">
      
      {/* Top Accent Light line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 border-b border-zinc-800/80">
          
          {/* Brand & Motto: PARTH NAGARKAR & BUILD • CREATE • LEVEL UP */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-xs bg-[#151719] border border-amber-500/60 flex items-center justify-center">
                <Crosshair className="w-3.5 h-3.5 text-amber-500" />
              </div>
              <span className="font-display font-black text-lg sm:text-xl text-white tracking-[0.14em] text-glow-orange uppercase">
                PARTH NAGARKAR
              </span>
            </div>

            <p className="font-display font-bold text-xs text-amber-400 tracking-[0.25em] uppercase">
              BUILD • CREATE • LEVEL UP
            </p>
          </div>

          {/* System Telemetry */}
          <div className="md:col-span-4 space-y-1.5 text-[11px] text-zinc-400 p-3.5 bg-[#0D0F11] border border-zinc-800/80 rounded">
            <div className="flex items-center justify-between">
              <span>SYSTEM STATUS:</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE &amp; OPERATIONAL
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>EMAIL:</span>
              <a
                href="mailto:nagarkarparth013@gmail.com"
                className="text-amber-400 hover:underline font-mono truncate"
              >
                nagarkarparth013@gmail.com
              </a>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 flex flex-col sm:items-end gap-3">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/NagarkarParth"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                onMouseEnter={() => soundManager.playHover()}
                aria-label="GitHub Profile"
                className="p-2.5 bg-[#151719] hover:bg-[#1C1F23] border border-zinc-800 hover:border-amber-500/60 rounded text-zinc-300 hover:text-white transition-all"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/parth-nagarkar"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                onMouseEnter={() => soundManager.playHover()}
                aria-label="LinkedIn Profile"
                className="p-2.5 bg-[#151719] hover:bg-[#1C1F23] border border-zinc-800 hover:border-amber-500/60 rounded text-zinc-300 hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="mailto:nagarkarparth013@gmail.com"
                onClick={() => soundManager.playClick()}
                onMouseEnter={() => soundManager.playHover()}
                aria-label="Email Parth"
                className="p-2.5 bg-[#151719] hover:bg-[#1C1F23] border border-zinc-800 hover:border-amber-500/60 rounded text-amber-400 hover:text-amber-300 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                onMouseEnter={() => soundManager.playHover()}
                aria-label="Return to top of page"
                className="p-2.5 bg-gradient-to-r from-amber-600 to-amber-500 text-black rounded hover:from-amber-500 hover:to-yellow-500 transition-all shadow-md active:scale-95 cursor-pointer"
                title="Return to Top"
              >
                <ChevronUp className="w-4 h-4 stroke-[3]" />
              </button>
            </div>

            <span className="text-[10px] text-zinc-400 uppercase tracking-wider">
              [ RETURN TO TOP ]
            </span>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-400 gap-3">
          <div>
            © 2026 Parth Nagarkar. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4 text-[10px] tracking-widest text-zinc-500">
            <span>GRID: 28.6139° N / 77.2090° E</span>
            <span>TACTICAL OS v3.7</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
