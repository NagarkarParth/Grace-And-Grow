import React, { useState } from 'react';
import { 
  Crosshair, 
  Layers, 
  Layout, 
  Palette, 
  Code, 
  Atom, 
  Terminal, 
  Server, 
  Coffee, 
  FileCode, 
  Filter
} from 'lucide-react';
import { skillCategories, skillsData } from '../data/skills';
import { soundManager } from '../utils/soundEffects';

const iconMap = {
  Layout,
  Palette,
  Code,
  Atom,
  Terminal,
  Server,
  Coffee,
  FileCode,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredSkills = activeCategory === 'ALL'
    ? skillsData
    : skillsData.filter((s) => s.categoryId === activeCategory);

  const handleCategoryChange = (id) => {
    soundManager.playClick();
    setActiveCategory(id);
  };

  return (
    <section id="loadout" className="relative py-20 bg-[#080A0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-zinc-800/80 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
              <Crosshair className="w-4 h-4 text-amber-500" />
              <span>ARMORY &amp; INVENTORY // 02</span>
            </div>
            <h2 className="mt-2 font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase text-glow-orange">
              LOADOUT
            </h2>
            <p className="mt-1 text-sm font-mono text-zinc-400 uppercase tracking-wider">
              "TECHNICAL LOADOUT &amp; CORE STACK"
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-[#101214] px-3.5 py-2 border border-zinc-800 rounded">
            <span className="text-amber-400 font-bold">TOTAL GEAR:</span>
            <span>{skillsData.length} CORE TECHNOLOGIES</span>
          </div>
        </div>

        {/* Tactical Category Navigation Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <div className="flex items-center gap-1.5 px-3 py-2 bg-[#101214] border border-zinc-800 text-[11px] font-mono text-zinc-400 uppercase tracking-wider rounded-sm mr-2">
            <Filter className="w-3.5 h-3.5 text-amber-500" />
            <span>FILTER:</span>
          </div>

          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                onMouseEnter={() => soundManager.playHover()}
                className={`px-3.5 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-150 rounded-sm border cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-black border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.4)] scale-105'
                    : 'bg-[#121417] text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Loadout Equipment Grid - 7 Technologies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const Icon = iconMap[skill.iconName] || Code;

            return (
              <div
                key={skill.id}
                onMouseEnter={() => soundManager.playHover()}
                className="group relative bg-[#101214]/90 hover:bg-[#15181C] border border-zinc-800/90 hover:border-amber-500/70 p-5 rounded-sm transition-all duration-200 shadow-md hover:shadow-[0_0_15px_rgba(245,158,11,0.15)] flex flex-col justify-between"
              >
                {/* Micro corner accent */}
                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-zinc-700 group-hover:border-amber-500 transition-colors" />

                <div>
                  {/* Top Bar: Code & Tier Badge */}
                  <div className="flex items-center justify-between text-[10px] font-mono pb-2.5 mb-3 border-b border-zinc-800/80">
                    <span className="text-zinc-400 font-semibold tracking-wider">{skill.code}</span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30">
                      {skill.tier}
                    </span>
                  </div>

                  {/* Skill Identity */}
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-[#181B1E] border border-zinc-700/80 group-hover:border-amber-500/60 rounded shrink-0 transition-colors">
                      <Icon className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-tactical font-bold text-lg text-white tracking-wide group-hover:text-amber-400 transition-colors truncate uppercase">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block font-medium">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs text-zinc-400 font-body leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                {/* Bottom Visual Progress Power Indicator */}
                <div className="mt-4 pt-3 border-t border-zinc-800/70 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider">
                    CALIBRATION
                  </span>

                  {/* Segmented HUD power blocks */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((block) => {
                      const isFilled = block <= skill.level;
                      return (
                        <span
                          key={block}
                          className={`w-2.5 h-1.5 rounded-xs transition-colors ${
                            isFilled
                              ? 'bg-amber-500 shadow-[0_0_4px_rgba(245,158,11,0.6)]'
                              : 'bg-zinc-800'
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Loadout Bottom Tactical Footer */}
        <div className="mt-8 p-4 bg-[#101214] border border-zinc-800 rounded flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-400 gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-zinc-300">CORE STACK:</span>
            <span>Java, Python, HTML, CSS, JavaScript, React, Django</span>
          </div>
          <span className="text-amber-500 font-bold uppercase tracking-widest text-[11px]">
            // LOADOUT: READY
          </span>
        </div>

      </div>
    </section>
  );
}
