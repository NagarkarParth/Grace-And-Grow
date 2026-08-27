import React from 'react';
import { 
  Crosshair, 
  BrainCircuit, 
  Terminal, 
  BookOpen, 
  Zap, 
  Binary, 
  LineChart, 
  BarChart3, 
  Sigma, 
  Table, 
  Grid,
  Layers,
  Radio
} from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

const learningAreas = [
  { name: 'Python for Data Science', icon: Terminal, desc: 'Scripting, algorithmic logic, computational data processing' },
  { name: 'NumPy', icon: Grid, desc: 'N-dimensional arrays, vectorization, matrix mathematics' },
  { name: 'Pandas', icon: Table, desc: 'DataFrames, series, indexing, tabular data wrangling' },
  { name: 'Data Cleaning', icon: Layers, desc: 'Handling missing values, type casting, outlier detection' },
  { name: 'Data Analysis', icon: LineChart, desc: 'Exploratory data analysis (EDA), trend modeling, patterns' },
  { name: 'Data Visualization', icon: BarChart3, desc: 'Insight communication, graphical telemetry plots' },
  { name: 'Matplotlib', icon: LineChart, desc: 'Custom plotting, multi-axis figures, statistical charts' },
  { name: 'Statistics', icon: Sigma, desc: 'Probability distributions, central tendency, descriptive metrics' },
  { name: 'Machine Learning Fundamentals', icon: BrainCircuit, desc: 'Supervised & unsupervised models, training fundamentals' },
];

export default function Training() {
  return (
    <section id="training" className="relative py-20 bg-[#0A0C0E] border-t border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: TRAINING */}
        <div className="mb-10 pb-6 border-b border-zinc-800/80">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
            <Crosshair className="w-4 h-4 text-amber-500" />
            <span>SPECIALIZATION UPGRADE // 05</span>
          </div>
          <h2 className="mt-2 font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase text-glow-orange">
            TRAINING
          </h2>
          <p className="mt-1 text-sm font-mono text-zinc-400 uppercase tracking-wider">
            "PROFESSIONAL DATA SCIENCE TRACK"
          </p>
        </div>

        {/* Graphical CSS Progress Bar Above Card (ONGOING Status - No Fake Percentage) */}
        <div className="mb-10 p-5 bg-[#101214] border border-amber-500/50 rounded-sm shadow-xl hud-bracket">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-white font-bold uppercase tracking-wider">
                DATA SCIENCE TRAINING
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-500/15 border border-amber-500/30 rounded-xs">
                <Radio className="w-3.5 h-3.5 animate-pulse" /> ● ONGOING
              </span>
            </div>
          </div>

          {/* Graphical Animated Active Progress Bar */}
          <div className="w-full h-3 bg-[#080A0B] border border-zinc-700/80 p-0.5 rounded-xs overflow-hidden relative">
            <div className="h-full bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-400 w-[65%] relative rounded-xs shadow-[0_0_12px_rgba(245,158,11,0.4)]">
              <div className="absolute inset-0 bg-white/25 animate-pulse" />
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400 mt-2">
            <span>DISCIPLINE: DATA SCIENCE &amp; MACHINE LEARNING</span>
            <span className="text-amber-400 font-semibold uppercase">ACTIVE LEARNING CYCLE</span>
          </div>
        </div>

        {/* Main Training Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Tactical Overview Card */}
          <div className="lg:col-span-5 space-y-6">
            <div 
              onMouseEnter={() => soundManager.playHover()}
              className="bg-[#101214] border border-amber-500/60 p-6 sm:p-7 rounded-sm hud-bracket shadow-2xl relative overflow-hidden"
            >
              {/* Top Status Header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  <span className="text-amber-400 font-bold tracking-wider uppercase">PROFESSIONAL TRAINING</span>
                </div>
                <span className="px-2 py-0.5 bg-amber-500/15 text-amber-400 border border-amber-500/30 text-[10px] font-bold uppercase rounded-xs">
                  ● ONGOING
                </span>
              </div>

              {/* Training Title */}
              <div className="mt-6">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                  TECHNICAL DISCIPLINE
                </span>
                <h3 className="mt-1 font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
                  DATA SCIENCE TRAINING
                </h3>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-zinc-300 font-body leading-relaxed">
                "Currently pursuing Data Science training to strengthen my knowledge of Python, data analysis, data visualization, statistics and machine learning fundamentals."
              </p>

              {/* Status Summary Box */}
              <div className="mt-6 p-4 bg-[#151719] border border-zinc-800 rounded font-mono text-xs space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 uppercase tracking-wider">TRAINING STATUS:</span>
                  <span className="text-amber-400 font-bold flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 animate-pulse" />
                    ● ONGOING
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-zinc-800">
                  <span className="text-zinc-400 uppercase tracking-wider">TRACK:</span>
                  <span className="text-zinc-200">PYTHON &amp; DATA INTELLIGENCE</span>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-zinc-800">
                  <span className="text-zinc-400 uppercase tracking-wider">CURRICULUM:</span>
                  <span className="text-amber-400">{learningAreas.length} MODULES</span>
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span>MODULE TRACKING</span>
                <span className="text-amber-400 font-bold uppercase tracking-wider">[IN PROGRESS]</span>
              </div>
            </div>
          </div>

          {/* Right Learning Areas Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-4 bg-[#101214] border border-zinc-800 rounded-t flex items-center justify-between text-xs font-mono">
              <span className="text-white font-bold uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-500" />
                CURRICULUM DOMAINS &amp; TOPICS
              </span>
              <span className="text-amber-400 font-bold">{learningAreas.length} DOMAINS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {learningAreas.map((area, idx) => {
                const Icon = area.icon;
                return (
                  <div
                    key={area.name}
                    onMouseEnter={() => soundManager.playHover()}
                    className="p-3.5 bg-[#101214] hover:bg-[#15181C] border border-zinc-800 hover:border-amber-500/60 rounded-sm transition-all group"
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-2">
                      <span>MODULE_0{idx + 1}</span>
                      <span className="text-amber-400 font-bold flex items-center gap-1">
                        ● ONGOING
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="p-2 bg-[#181B1E] border border-zinc-700/80 group-hover:border-amber-500/50 rounded shrink-0 transition-colors">
                        <Icon className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-tactical font-bold text-sm text-white group-hover:text-amber-300 transition-colors leading-snug">
                          {area.name}
                        </h4>
                        <p className="mt-1 text-[11px] text-zinc-400 font-body leading-tight">
                          {area.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
