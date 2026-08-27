import React from 'react';
import { 
  User, 
  GraduationCap, 
  Code, 
  MapPin, 
  Target, 
  Cpu, 
  Terminal, 
  Crosshair, 
  ShieldCheck,
  Zap,
  Mail
} from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

export default function About() {
  const profileDetails = [
    { label: 'NAME', value: 'PARTH NAGARKAR', icon: User, highlight: 'text-white' },
    { label: 'CLASS', value: 'SOFTWARE ENGINEER', icon: Cpu, highlight: 'text-amber-400' },
    { label: 'ROLE', value: 'FULL-STACK DEVELOPER', icon: Code, highlight: 'text-white' },
    { label: 'STATUS', value: 'ONLINE', icon: Zap, highlight: 'text-emerald-400', isStatus: true },
    { label: 'EDUCATION', value: 'B.Tech Information Technology (Currently Pursuing)', icon: GraduationCap, highlight: 'text-zinc-200' },
    { label: 'LOCATION', value: 'India', icon: MapPin, highlight: 'text-zinc-200' },
    { label: 'EMAIL', value: 'nagarkarparth013@gmail.com', icon: Mail, highlight: 'text-amber-400', isLink: true },
  ];

  return (
    <section id="about" className="relative py-20 bg-[#0A0C0E] border-t border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: ABOUT ME */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
            <Crosshair className="w-4 h-4 text-amber-500" />
            <span>PROFILE OVERVIEW // 01</span>
          </div>
          <h2 className="mt-2 font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase text-glow-orange">
            ABOUT ME
          </h2>
          <p className="mt-1 text-sm font-mono text-zinc-400 uppercase tracking-wider">
            "SOFTWARE ENGINEER &amp; FULL-STACK DEVELOPER"
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Profile Left Info Panel */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#101214] border border-zinc-700/80 p-6 hud-bracket shadow-xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800 text-xs font-mono">
                <span className="text-amber-400 font-bold uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                  IDENTITY SPECIFICATIONS
                </span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  ONLINE
                </span>
              </div>

              {/* Data Fields */}
              <div className="mt-6 space-y-3 font-mono">
                {profileDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="p-3 bg-[#151719] border border-zinc-800/90 rounded flex items-start gap-3 hover:border-amber-500/40 transition-colors"
                    >
                      <div className="p-2 bg-[#1B1E22] border border-zinc-700 rounded shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-semibold">
                          {item.label}
                        </span>
                        {item.isLink ? (
                          <a
                            href={`mailto:${item.value}`}
                            className="text-xs sm:text-sm font-bold tracking-wide break-words text-amber-400 hover:underline block"
                          >
                            {item.value}
                          </a>
                        ) : item.isStatus ? (
                          <span className="text-xs sm:text-sm font-bold tracking-wide text-emerald-400 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            ● {item.value}
                          </span>
                        ) : (
                          <span className={`text-xs sm:text-sm font-bold tracking-wide break-words ${item.highlight}`}>
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Verification Tag */}
              <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>SECURITY CLEARANCE</span>
                <span className="text-emerald-400 font-bold tracking-wider">● VERIFIED PROFILE</span>
              </div>

            </div>
          </div>

          {/* Right Narrative & Objective */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Biography Narrative Panel */}
            <div className="bg-[#101214] border border-zinc-700/80 p-6 sm:p-8 hud-bracket shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold tracking-widest uppercase mb-4">
                <Terminal className="w-4 h-4 text-amber-500" />
                <span>BIOGRAPHY &amp; TECHNICAL BACKGROUND</span>
              </div>

              <div className="space-y-4 text-zinc-300 font-body text-base leading-relaxed">
                <p>
                  I am a <strong className="text-white font-semibold">BTech Information Technology student</strong> passionate about software development, full-stack web development, Android application development and building real-world digital products.
                </p>
                <p>
                  I have worked on projects including <strong className="text-amber-400 font-semibold">RaktDaan</strong>, an Android application built using Java, Android Studio and Firebase, and <strong className="text-amber-400 font-semibold">ModzLab</strong>, a freelance e-commerce web development project built using React and Supabase.
                </p>
                <p>
                  I am currently pursuing <strong className="text-yellow-400 font-semibold">Data Science training</strong> to strengthen my knowledge of Python, data analysis, data visualization, statistics and machine learning fundamentals.
                </p>
              </div>

              {/* Watermark in corner */}
              <div className="absolute -bottom-6 -right-6 font-display font-black text-7xl text-zinc-800/10 pointer-events-none select-none">
                PARTH
              </div>
            </div>

            {/* CURRENT OBJECTIVE PANEL */}
            <div 
              onMouseEnter={() => soundManager.playHover()}
              className="bg-gradient-to-r from-amber-500/10 via-[#151719] to-[#101214] border-l-4 border-amber-500 border-y border-r border-zinc-700/70 p-6 rounded-r shadow-lg relative group transition-all"
            >
              <div className="flex items-center gap-2.5 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider mb-2">
                <Target className="w-4 h-4 text-amber-500 animate-pulse" />
                <span>CURRENT OBJECTIVE</span>
                <span className="text-[10px] text-zinc-400 font-normal">[PRIORITY ALPHA]</span>
              </div>

              <p className="text-white font-tactical font-semibold text-lg sm:text-xl tracking-wide leading-snug">
                "Build real-world applications, gain practical experience and continuously upgrade my technical skills."
              </p>

              <div className="mt-3 flex items-center gap-4 text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <Zap className="w-3.5 h-3.5" /> ACTIVE DIRECTIVE
                </span>
                <span>// MISSION READY</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
