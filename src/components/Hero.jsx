import React from 'react';
import { 
  Shield, 
  Crosshair, 
  FileDown, 
  Terminal, 
  FolderGit2, 
  Briefcase, 
  ShoppingBag, 
  GraduationCap,
  Mail,
  ChevronRight,
  Radio,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { soundManager } from '../utils/soundEffects';

export default function Hero() {
  const stats = [
    { label: 'FEATURED PROJECTS', count: '03+', icon: FolderGit2, color: 'text-amber-500', desc: 'MODZLAB, RAKTDAAN & CLASSIFIED' },
    { label: 'INTERNSHIP', count: '01', icon: Briefcase, color: 'text-emerald-400', desc: 'MOBILE APP DEVELOPMENT INTERN' },
    { label: 'FREELANCE PROJECT', count: '01', icon: ShoppingBag, color: 'text-amber-400', desc: 'MODZLAB E-COMMERCE STORE' },
    { label: 'TRAINING', count: '01', icon: GraduationCap, color: 'text-yellow-400', desc: 'DATA SCIENCE TRAINING' },
  ];

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Briefing & Right Tactical Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Briefing & Call To Action */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Tactical Status Chips */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#151719] border border-emerald-500/40 rounded-sm text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-zinc-400">STATUS:</span>
                <span className="text-emerald-400 font-bold tracking-wider">● ONLINE</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-sm text-xs font-mono text-amber-400">
                <Radio className="w-3.5 h-3.5" />
                <span className="tracking-wider uppercase">LOBBY READY</span>
              </div>
            </div>

            {/* Main Heading: PARTH NAGARKAR */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400 flex items-center gap-2">
                <span>// PORTFOLIO</span>
                <div className="h-[1px] w-12 bg-amber-500/50" />
              </div>
              
              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white uppercase text-glow-orange leading-none">
                PARTH NAGARKAR
              </h1>
            </div>

            {/* Subtitles: SOFTWARE ENGINEER, FULL-STACK DEVELOPER, FREELANCE WEB DEVELOPER */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs sm:text-sm">
              <span className="px-3 py-1 bg-[#181B1E] border-l-2 border-amber-500 text-zinc-200 uppercase tracking-wider font-semibold">
                SOFTWARE ENGINEER
              </span>
              <span className="px-3 py-1 bg-[#181B1E] border-l-2 border-amber-500 text-amber-400 uppercase tracking-wider font-semibold">
                FULL-STACK DEVELOPER
              </span>
              <span className="px-3 py-1 bg-[#181B1E] border-l-2 border-yellow-500 text-yellow-400 uppercase tracking-wider font-semibold">
                FREELANCE WEB DEVELOPER
              </span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-body max-w-2xl">
              "I build modern web applications, e-commerce platforms and software solutions using React, JavaScript, Python and modern backend technologies."
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#missions"
                onClick={() => soundManager.playConfirm()}
                onMouseEnter={() => soundManager.playHover()}
                className="group relative flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-yellow-500 text-black font-tactical font-extrabold text-sm uppercase tracking-wider rounded-sm shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all active:scale-95"
              >
                <Crosshair className="w-4 h-4 text-black group-hover:rotate-90 transition-transform duration-300" />
                <span>VIEW MISSIONS</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                download
                onClick={() => soundManager.playConfirm()}
                onMouseEnter={() => soundManager.playHover()}
                className="group flex items-center gap-2 px-6 py-3.5 bg-[#151719] hover:bg-[#1C1F23] border border-zinc-700 hover:border-amber-500/80 text-zinc-100 hover:text-amber-400 font-tactical font-bold text-sm uppercase tracking-wider rounded-sm transition-all shadow-md active:scale-95"
              >
                <FileDown className="w-4 h-4 text-amber-500 group-hover:translate-y-0.5 transition-transform" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

            {/* Social Links with exact URLs */}
            <div className="flex items-center gap-4 pt-2 font-mono text-xs text-zinc-400">
              <span className="uppercase tracking-widest text-[11px] text-zinc-500">// CONTACTS:</span>
              
              <a
                href="https://github.com/NagarkarParth"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                onMouseEnter={() => soundManager.playHover()}
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <span className="text-zinc-700">/</span>

              <a
                href="https://www.linkedin.com/in/parth-nagarkar"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                onMouseEnter={() => soundManager.playHover()}
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <span className="text-zinc-700">/</span>

              <a
                href="mailto:nagarkarparth013@gmail.com"
                onClick={() => soundManager.playClick()}
                onMouseEnter={() => soundManager.playHover()}
                className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-500" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* RIGHT SIDE: Tactical Profile Card with User Image */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#101214]/95 border border-zinc-700/80 p-5 sm:p-6 hud-bracket shadow-2xl rounded-sm backdrop-blur-md">
              
              {/* Card Top Banner */}
              <div className="flex items-center justify-between pb-3.5 border-b border-zinc-800 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-amber-500 rounded-sm animate-pulse" />
                  <span className="font-bold text-amber-400 tracking-wider uppercase">PROFILE</span>
                </div>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  ONLINE
                </span>
              </div>

              {/* User Profile Image with Tactical HUD Frame */}
              <div className="relative my-4 aspect-[4/3] bg-gradient-to-b from-[#181B1E] via-[#0E1012] to-[#080A0B] border border-amber-500/40 rounded overflow-hidden group shadow-inner">
                
                {/* User's uploaded portrait */}
                <img
                  src="/parth-profile.jpg"
                  alt="Parth Nagarkar"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-105"
                />

                {/* Subtle tactical laser scanline */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/90 to-transparent animate-scanline pointer-events-none opacity-80" />

                {/* Tactical grid & vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A0B]/80 via-transparent to-black/30 pointer-events-none" />

                {/* HUD Corner markers */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-amber-500 pointer-events-none" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-amber-500 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-amber-500 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-amber-500 pointer-events-none" />

                {/* Live tag */}
                <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/70 backdrop-blur-sm border border-emerald-500/60 rounded text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>ONLINE</span>
                </div>

                {/* Overlay Name Caption */}
                <div className="absolute bottom-2.5 left-3 right-3 flex justify-between items-end pointer-events-none">
                  <div>
                    <span className="font-display font-black text-sm sm:text-base text-white tracking-wider text-glow-orange block">
                      PARTH NAGARKAR
                    </span>
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                      SOFTWARE ENGINEER
                    </span>
                  </div>
                </div>
              </div>

              {/* Player Attributes Grid: NAME, CLASS, ROLE, STATUS */}
              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                
                <div className="bg-[#151719] border border-zinc-800/80 p-2.5 rounded">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-medium">NAME</span>
                  <span className="font-bold text-white tracking-wider text-xs sm:text-sm truncate block">
                    PARTH NAGARKAR
                  </span>
                </div>

                <div className="bg-[#151719] border border-zinc-800/80 p-2.5 rounded">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-medium">CLASS</span>
                  <span className="font-bold text-amber-400 tracking-wider text-xs sm:text-sm truncate block">
                    SOFTWARE ENGINEER
                  </span>
                </div>

                <div className="bg-[#151719] border border-zinc-800/80 p-2.5 rounded">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-medium">ROLE</span>
                  <span className="font-bold text-zinc-100 tracking-wider text-xs sm:text-sm truncate block">
                    FULL-STACK DEV
                  </span>
                </div>

                <div className="bg-[#151719] border border-zinc-800/80 p-2.5 rounded">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-medium">STATUS</span>
                  <span className="font-bold text-emerald-400 tracking-wider text-xs sm:text-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    ONLINE
                  </span>
                </div>

              </div>

              {/* Card Footer Tag */}
              <div className="mt-3.5 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span>STATUS: ACTIVE</span>
                <span className="text-amber-500 font-bold">[VERIFIED]</span>
              </div>

            </div>
          </div>

        </div>

        {/* PLAYER STATS ROW */}
        <div className="mt-16 pt-8 border-t border-zinc-800/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  onMouseEnter={() => soundManager.playHover()}
                  className="bg-[#101214]/90 border border-zinc-800/90 hover:border-amber-500/60 p-4 rounded transition-all duration-200 group relative overflow-hidden"
                >
                  {/* Top glowing accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-zinc-800 group-hover:bg-amber-500 transition-colors" />

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-zinc-400 tracking-wider uppercase font-semibold">
                      {stat.label}
                    </span>
                    <Icon className={`w-5 h-5 ${stat.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
                  </div>

                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                      {stat.count}
                    </span>
                  </div>

                  <p className="mt-1 text-[10px] font-mono text-zinc-400 uppercase tracking-wider truncate">
                    {stat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
