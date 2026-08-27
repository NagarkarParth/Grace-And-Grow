import React from 'react';
import { 
  Crosshair, 
  ExternalLink, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Layers, 
  Terminal
} from 'lucide-react';
import { Github } from './Icons';
import { projectsData } from '../data/projects';
import { soundManager } from '../utils/soundEffects';

export default function Projects() {
  return (
    <section id="missions" className="relative py-20 bg-[#0A0C0E] border-t border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: MISSIONS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-zinc-800/80 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
              <Crosshair className="w-4 h-4 text-amber-500" />
              <span>FIELD OPERATIONS // 03</span>
            </div>
            <h2 className="mt-2 font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase text-glow-orange">
              MISSIONS
            </h2>
            <p className="mt-1 text-sm font-mono text-zinc-400 uppercase tracking-wider">
              "COMPLETED PROJECTS &amp; FIELD OPERATIONS"
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 bg-[#101214] px-4 py-2 border border-zinc-800 rounded">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-bold uppercase tracking-wider">02 COMPLETED</span>
            <span className="text-zinc-600">//</span>
            <span className="text-yellow-400 font-bold uppercase tracking-wider">01 CLASSIFIED</span>
          </div>
        </div>

        {/* Missions Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => {
            const isYellow = project.accentColor === 'yellow';
            const isLocked = project.isLocked;

            return (
              <div
                key={project.id}
                onMouseEnter={() => !isLocked && soundManager.playHover()}
                className={`relative flex flex-col justify-between bg-[#101214] border transition-all duration-300 rounded-sm shadow-xl ${
                  isLocked
                    ? 'border-dashed border-zinc-800 bg-[#0E1012]/80 opacity-90'
                    : isYellow
                    ? 'border-zinc-800 hover:border-yellow-500/80 hud-bracket hover:shadow-[0_0_20px_rgba(250,204,21,0.15)]'
                    : 'border-zinc-800 hover:border-amber-500/80 hud-bracket hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]'
                }`}
              >
                {/* Top Mission HUD Banner */}
                <div className="p-4 border-b border-zinc-800/80 flex items-center justify-between font-mono text-xs bg-[#14171A]">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block w-2 h-2 rounded-full ${
                        isLocked
                          ? 'bg-yellow-500 animate-pulse'
                          : isYellow
                          ? 'bg-yellow-400 animate-pulse'
                          : 'bg-amber-500 animate-pulse'
                      }`}
                    />
                    <span className="font-bold tracking-widest text-zinc-300 uppercase">
                      {project.code}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs ${
                      isLocked
                        ? 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30'
                        : isYellow
                        ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 shadow-[0_0_8px_rgba(250,204,21,0.2)]'
                        : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                    }`}
                  >
                    ● {project.status}
                  </span>
                </div>

                {/* Main Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Project Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-3 font-mono text-[10px]">
                      {project.projectBadges?.map((badge) => (
                        <span
                          key={badge}
                          className={`px-2 py-0.5 border font-bold uppercase tracking-wider ${
                            badge === 'NOT DEPLOYED'
                              ? 'bg-zinc-800/80 border-zinc-700 text-zinc-400'
                              : 'bg-[#181B1E] border-zinc-800 text-zinc-400'
                          }`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Mission Name & Subtitle */}
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
                      {project.name}
                    </h3>
                    <p className={`mt-1 font-mono text-xs font-semibold uppercase tracking-wider ${
                      isYellow ? 'text-yellow-400' : 'text-amber-400'
                    }`}>
                      {project.subtitle}
                    </p>

                    {/* Mission Objective / Role */}
                    <div className="mt-4 p-3 bg-[#151719] border border-zinc-800/80 rounded font-mono text-xs space-y-1">
                      <div className="flex justify-between">
                        <span className="text-[10px] text-zinc-400 uppercase">TYPE:</span>
                        <span className="font-bold text-zinc-200">{project.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[10px] text-zinc-400 uppercase">ROLE:</span>
                        <span className={`font-bold ${isYellow ? 'text-yellow-400' : 'text-amber-400'}`}>
                          {project.role}
                        </span>
                      </div>
                      {project.deploymentStatus && (
                        <div className="flex justify-between pt-1 border-t border-zinc-800">
                          <span className="text-[10px] text-zinc-400 uppercase">DEPLOYMENT:</span>
                          <span className="font-bold text-zinc-400">{project.deploymentStatus}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-xs sm:text-sm text-zinc-300 font-body leading-relaxed">
                      "{project.description}"
                    </p>

                    {/* Key Features List */}
                    {project.features && (
                      <div className="mt-4 pt-3 border-t border-zinc-800/80 space-y-1.5 font-mono text-xs text-zinc-300">
                        {project.features.slice(0, 4).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-[11px]">
                            <span className="text-amber-500 font-bold">&gt;</span>
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Technology Badges */}
                  <div className="mt-6 pt-4 border-t border-zinc-800/80">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-2 font-semibold">
                      TECHNOLOGIES:
                    </span>
                    <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-xs border ${
                            isYellow
                              ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
                              : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                          }`}
                        >
                          [ {tech} ]
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mission Card Action Links Footer */}
                <div className="p-4 bg-[#14171A] border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2">
                  {isLocked ? (
                    <button
                      onClick={() => {
                        soundManager.playLock();
                      }}
                      className="w-full py-2.5 bg-zinc-900 border border-zinc-800 text-yellow-500 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-zinc-850 transition-colors cursor-default"
                    >
                      <Lock className="w-4 h-4" />
                      <span>[ CLASSIFIED CRATE ]</span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-3 w-full justify-between">
                      {/* GitHub Button */}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => soundManager.playClick()}
                          onMouseEnter={() => soundManager.playHover()}
                          className="flex items-center gap-2 px-3.5 py-2 text-zinc-200 hover:text-white bg-[#181B1E] border border-zinc-700 hover:border-amber-500 rounded text-xs font-mono font-bold uppercase tracking-wider transition-all"
                        >
                          <Github className="w-4 h-4 text-amber-400" />
                          <span>GITHUB</span>
                        </a>
                      )}

                      {/* ModzLab Live Demo button (disabled / not deployed state without redirecting) */}
                      {project.id === 'mission-01' && (
                        <div className="relative group/demo">
                          <button
                            type="button"
                            disabled
                            className="flex items-center gap-1.5 px-3.5 py-2 bg-zinc-800/80 border border-zinc-700/80 text-zinc-400 font-tactical font-bold text-xs uppercase tracking-wider rounded-xs cursor-not-allowed opacity-75"
                            title="Live deployment not active"
                          >
                            <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                            <span>LIVE DEMO</span>
                            <span className="text-[9px] text-zinc-500 ml-1 font-mono">(NOT DEPLOYED)</span>
                          </button>
                        </div>
                      )}

                      {/* RaktDaan Not Deployed badge */}
                      {project.id === 'mission-02' && (
                        <span className="px-3 py-1.5 bg-zinc-800/90 border border-zinc-700 text-zinc-400 font-mono text-xs uppercase tracking-wider font-semibold rounded-xs">
                          NOT DEPLOYED
                        </span>
                      )}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
