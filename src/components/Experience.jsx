import React from 'react';
import { 
  Crosshair, 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  ExternalLink,
  GitBranch,
  Terminal
} from 'lucide-react';
import { experienceData } from '../data/experience';
import { soundManager } from '../utils/soundEffects';

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 bg-[#080A0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-zinc-800/80">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
            <Crosshair className="w-4 h-4 text-amber-500" />
            <span>TIMELINE &amp; SERVICE LOGS // 04</span>
          </div>
          <h2 className="mt-2 font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase text-glow-orange">
            MISSION HISTORY
          </h2>
          <p className="mt-1 text-sm font-mono text-zinc-400 uppercase tracking-wider">
            "PLAYER EXPERIENCE"
          </p>
        </div>

        {/* Tactical Timeline Stream */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-amber-500 before:via-emerald-500 before:to-zinc-800">
          
          {experienceData.map((exp, idx) => {
            const isGreen = exp.accentColor === 'green';

            return (
              <div
                key={exp.id}
                onMouseEnter={() => soundManager.playHover()}
                className="relative group"
              >
                {/* Tactical Radar Node Pin */}
                <div className={`absolute -left-[30px] sm:-left-[35px] top-4 w-5 h-5 rounded-full bg-[#101214] border-2 ${
                  isGreen ? 'border-emerald-500' : 'border-amber-500'
                } flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform`}>
                  <span className={`w-2 h-2 rounded-full ${
                    isGreen ? 'bg-emerald-400' : 'bg-amber-400'
                  } animate-pulse`} />
                </div>

                {/* Timeline Card */}
                <div className="bg-[#101214] border border-zinc-800/90 hover:border-zinc-700 p-6 sm:p-8 rounded-sm hud-bracket shadow-xl transition-all">
                  
                  {/* Top Bar: Code, Duration, Badge */}
                  <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-zinc-800 gap-2 text-xs font-mono">
                    <div className="flex items-center gap-3">
                      <span className="text-zinc-400 font-semibold tracking-wider">{exp.code}</span>
                      <span className="px-2.5 py-0.5 bg-[#181B1E] border border-zinc-700 text-zinc-300 font-bold uppercase tracking-wider text-[10px]">
                        [ {exp.badge} ]
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-zinc-400">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      <span>{exp.duration}</span>
                      <span className="text-emerald-400 font-bold uppercase tracking-wider">
                        ● {exp.status}
                      </span>
                    </div>
                  </div>

                  {/* Role Title & Organization */}
                  <div className="space-y-1">
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
                      {exp.position}
                    </h3>
                    <p className="font-mono text-sm font-semibold text-amber-400 uppercase tracking-wider">
                      {exp.organization}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm sm:text-base text-zinc-300 font-body leading-relaxed">
                    "{exp.description}"
                  </p>

                  {/* Responsibilities List */}
                  {exp.responsibilities && (
                    <div className="mt-6 pt-4 border-t border-zinc-800/80">
                      <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-3 font-semibold flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-amber-500" />
                        FIELD RESPONSIBILITIES &amp; SCOPE:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div
                            key={rIdx}
                            className="flex items-start gap-2 p-2 bg-[#151719] border border-zinc-800/80 rounded"
                          >
                            <span className="text-amber-500 font-bold">&gt;</span>
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies Used */}
                  <div className="mt-6 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mr-2 font-semibold">
                      TECH DEPLOYED:
                    </span>
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-[#181B1E] border border-zinc-700 text-zinc-300 font-mono text-[11px] font-bold uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
