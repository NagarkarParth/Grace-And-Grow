import React from 'react';
import { 
  Crosshair, 
  Mail, 
  FileDown, 
  Radio, 
  ExternalLink,
  MapPin
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { soundManager } from '../utils/soundEffects';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-[#0A0C0E] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-zinc-800/80">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
            <Crosshair className="w-4 h-4 text-amber-500" />
            <span>COMMUNICATION // 07</span>
          </div>
          <h2 className="mt-2 font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase text-glow-orange">
            CONTACT
          </h2>
          <p className="mt-1 text-sm font-mono text-zinc-400 uppercase tracking-wider">
            "HAVE A PROJECT IDEA OR WANT TO WORK TOGETHER? GET IN TOUCH."
          </p>
        </div>

        {/* Contact Options Cards Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#101214] border border-zinc-700/80 p-6 sm:p-10 rounded-sm hud-bracket shadow-2xl space-y-8">
            
            {/* Top Status Header */}
            <div className="flex flex-wrap items-center justify-between pb-4 border-b border-zinc-800 gap-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-amber-500 animate-pulse" />
                <span className="text-white font-bold uppercase tracking-widest">
                  GET IN TOUCH
                </span>
              </div>
              <span className="px-2.5 py-0.5 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold uppercase rounded-xs tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                AVAILABLE FOR PROJECTS
              </span>
            </div>

            {/* Introductory Text */}
            <div className="space-y-2">
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                LET'S BUILD SOMETHING TOGETHER
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 font-body leading-relaxed">
                Have a project idea or want to work together? Get in touch.
              </p>
            </div>

            {/* Direct Contact Channels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
              
              {/* EMAIL CARD */}
              <div className="p-5 bg-[#151719] border border-zinc-800 hover:border-amber-500/70 rounded-sm transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-3">
                    <span className="font-semibold uppercase tracking-wider">EMAIL</span>
                    <Mail className="w-4 h-4 text-amber-500" />
                  </div>
                  <p className="text-xs text-zinc-300 font-semibold break-all leading-snug">
                    nagarkarparth013@gmail.com
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-800/80">
                  <a
                    href="mailto:nagarkarparth013@gmail.com"
                    onClick={() => soundManager.playConfirm()}
                    onMouseEnter={() => soundManager.playHover()}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-yellow-500 text-black font-tactical font-extrabold text-xs uppercase tracking-wider rounded-xs transition-all shadow-md active:scale-95"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>[ EMAIL ]</span>
                  </a>
                </div>
              </div>

              {/* GITHUB CARD */}
              <div className="p-5 bg-[#151719] border border-zinc-800 hover:border-zinc-600 rounded-sm transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-3">
                    <span className="font-semibold uppercase tracking-wider">GITHUB</span>
                    <Github className="w-4 h-4 text-zinc-300" />
                  </div>
                  <p className="text-xs text-zinc-300 font-semibold truncate leading-snug">
                    github.com/NagarkarParth
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-800/80">
                  <a
                    href="https://github.com/NagarkarParth"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClick()}
                    onMouseEnter={() => soundManager.playHover()}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1B1E22] hover:bg-[#22272D] border border-zinc-700 hover:border-zinc-500 text-white font-tactical font-bold text-xs uppercase tracking-wider rounded-xs transition-all active:scale-95"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>[ GITHUB ]</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                </div>
              </div>

              {/* LINKEDIN CARD */}
              <div className="p-5 bg-[#151719] border border-zinc-800 hover:border-amber-500/60 rounded-sm transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-3">
                    <span className="font-semibold uppercase tracking-wider">LINKEDIN</span>
                    <Linkedin className="w-4 h-4 text-amber-500" />
                  </div>
                  <p className="text-xs text-zinc-300 font-semibold truncate leading-snug">
                    linkedin.com/in/parth-nagarkar
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-800/80">
                  <a
                    href="https://www.linkedin.com/in/parth-nagarkar"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClick()}
                    onMouseEnter={() => soundManager.playHover()}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1B1E22] hover:bg-[#22272D] border border-zinc-700 hover:border-amber-500/60 text-white font-tactical font-bold text-xs uppercase tracking-wider rounded-xs transition-all active:scale-95"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-amber-500" />
                    <span>[ LINKEDIN ]</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                </div>
              </div>

            </div>

            {/* Download Resume Action in Contact Box */}
            <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
              <span className="text-zinc-400">
                NEED A COPY OF MY FULL CURRICULUM VITAE?
              </span>
              <a
                href="/resume.pdf"
                download
                onClick={() => soundManager.playConfirm()}
                onMouseEnter={() => soundManager.playHover()}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#151719] hover:bg-[#1C1F23] border border-amber-500/60 hover:border-amber-400 text-amber-400 font-tactical font-bold text-xs uppercase tracking-wider rounded-xs transition-all shadow-sm cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
