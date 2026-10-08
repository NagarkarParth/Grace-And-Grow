import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Target, 
  ArrowUpRight, 
  Sparkles, 
  BarChart3, 
  Activity, 
  CheckCircle2, 
  Zap,
  MousePointerClick
} from 'lucide-react';

export default function GrowthDashboardVisual() {
  const [activeTab, setActiveTab] = useState('all');

  const tabData = {
    all: {
      reach: '1,420,800',
      reachGrowth: '+320%',
      leads: '2,840',
      leadsGrowth: '+184%',
      roas: '4.8x',
      revenue: '$284,500',
      chartPath: "M0,90 Q50,75 100,60 T200,45 T300,25 T400,10",
      areaPath: "M0,90 Q50,75 100,60 T200,45 T300,25 T400,10 L400,120 L0,120 Z"
    },
    paid: {
      reach: '840,200',
      reachGrowth: '+260%',
      leads: '1,920',
      leadsGrowth: '+210%',
      roas: '5.2x',
      revenue: '$198,000',
      chartPath: "M0,95 Q50,85 100,50 T200,35 T300,20 T400,8",
      areaPath: "M0,95 Q50,85 100,50 T200,35 T300,20 T400,8 L400,120 L0,120 Z"
    },
    seo: {
      reach: '580,600',
      reachGrowth: '+410%',
      leads: '920',
      leadsGrowth: '+145%',
      roas: 'N/A Organic',
      revenue: '$86,500',
      chartPath: "M0,100 Q50,90 100,70 T200,50 T300,30 T400,12",
      areaPath: "M0,100 Q50,90 100,70 T200,50 T300,30 T400,12 L400,120 L0,120 Z"
    }
  };

  const current = tabData[activeTab];

  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto select-none">
      {/* Background ambient decorative blurs */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand-mint/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-brand-spruce/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Glass Dashboard Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative bg-white/95 backdrop-blur-xl border border-brand-200/90 rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-hover transition-all duration-300 z-10"
      >
        {/* Top Header with live status & tab switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-spruce flex items-center justify-center text-brand-mint shadow-sm">
              <Activity className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">Live Growth Engine</span>
                <span className="w-2 h-2 rounded-full bg-brand-mint animate-ping" />
              </div>
              <p className="text-[11px] text-brand-muted">Real-time Campaign Attribution</p>
            </div>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-brand-spruce shadow-sm font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Omnichannel
            </button>
            <button
              onClick={() => setActiveTab('paid')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                activeTab === 'paid'
                  ? 'bg-white text-brand-spruce shadow-sm font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Paid Ads
            </button>
            <button
              onClick={() => setActiveTab('seo')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                activeTab === 'seo'
                  ? 'bg-white text-brand-spruce shadow-sm font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Organic
            </button>
          </div>
        </div>

        {/* Highlight Metrics Row */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3 my-4">
          <div className="bg-brand-50/70 border border-brand-100/90 rounded-xl p-2.5 sm:p-3">
            <div className="flex items-center justify-between text-brand-muted text-[10px] sm:text-xs font-medium">
              <span>Audience Reach</span>
              <Users className="w-3.5 h-3.5 text-brand-spruce" />
            </div>
            <div className="text-sm sm:text-lg font-extrabold text-brand-charcoal mt-1">
              {current.reach}
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-brand-mint mt-0.5">
              <TrendingUp className="w-3 h-3" />
              <span>{current.reachGrowth}</span>
            </div>
          </div>

          <div className="bg-brand-50/70 border border-brand-100/90 rounded-xl p-2.5 sm:p-3">
            <div className="flex items-center justify-between text-brand-muted text-[10px] sm:text-xs font-medium">
              <span>Client Leads</span>
              <Target className="w-3.5 h-3.5 text-brand-spruce" />
            </div>
            <div className="text-sm sm:text-lg font-extrabold text-brand-charcoal mt-1">
              {current.leads}
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-brand-mint mt-0.5">
              <TrendingUp className="w-3 h-3" />
              <span>{current.leadsGrowth}</span>
            </div>
          </div>

          <div className="bg-brand-50/70 border border-brand-100/90 rounded-xl p-2.5 sm:p-3">
            <div className="flex items-center justify-between text-brand-muted text-[10px] sm:text-xs font-medium">
              <span>Average ROAS</span>
              <Zap className="w-3.5 h-3.5 text-brand-mint" />
            </div>
            <div className="text-sm sm:text-lg font-extrabold text-brand-spruce mt-1">
              {current.roas}
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-brand-mint mt-0.5">
              <span>High ROI Target</span>
            </div>
          </div>
        </div>

        {/* Dynamic Growth Chart Graphic */}
        <div className="bg-slate-50/90 rounded-xl p-3 border border-slate-200/70 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-brand-muted mb-1">
            <span className="font-semibold text-brand-charcoal flex items-center gap-1">
              <BarChart3 className="w-3.5 h-3.5 text-brand-mint" />
              Compounding Growth Curve
            </span>
            <span className="text-brand-mint font-bold text-[11px] bg-brand-mint/10 px-2 py-0.5 rounded-full">
              +380% Over Benchmark
            </span>
          </div>

          {/* SVG Growth Wave Chart */}
          <div className="h-28 w-full relative">
            <svg viewBox="0 0 400 120" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="mintGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0E3836" />
                  <stop offset="50%" stopColor="#0D9488" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>

              {/* Grid guide lines */}
              <line x1="0" y1="30" x2="400" y2="30" stroke="#E2E8F0" strokeDasharray="3 3" />
              <line x1="0" y1="70" x2="400" y2="70" stroke="#E2E8F0" strokeDasharray="3 3" />

              {/* Shaded Area */}
              <motion.path
                d={current.areaPath}
                fill="url(#mintGrad)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Glowing Line */}
              <motion.path
                d={current.chartPath}
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              {/* End Point Marker */}
              <circle cx="395" cy="14" r="5" fill="#10B981" className="animate-ping opacity-75" />
              <circle cx="395" cy="14" r="4" fill="#0E3836" stroke="#10B981" strokeWidth="2" />
            </svg>
          </div>

          <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-medium">
            <span>Month 01 (Audit)</span>
            <span>Month 03 (Engine)</span>
            <span>Month 06 (Scale)</span>
          </div>
        </div>

        {/* Bottom micro-footer with prompt */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-brand-muted">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-mint" />
            <span className="font-medium text-brand-charcoal">Conversion tracking verified</span>
          </div>
          <span className="text-[11px] text-brand-spruce font-semibold flex items-center gap-1">
            <MousePointerClick className="w-3 h-3 text-brand-mint" />
            Interactive preview
          </span>
        </div>
      </motion.div>

      {/* Floating Card 1: Top Right - Campaign Winner */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="hidden sm:flex absolute -top-5 -right-6 bg-white/95 backdrop-blur-md border border-brand-200/90 rounded-xl p-3 shadow-card items-center gap-3 z-20"
      >
        <div className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center text-brand-mint flex-shrink-0">
          <ArrowUpRight className="w-5 h-5 text-brand-mint" />
        </div>
        <div className="text-left">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Top Campaign</div>
          <div className="text-xs font-extrabold text-brand-spruce">+480% Inbound Inquiries</div>
        </div>
      </motion.div>

      {/* Floating Card 2: Bottom Left - Trust Badge */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden sm:flex absolute -bottom-6 -left-6 bg-brand-spruce text-white border border-brand-mint/30 rounded-xl p-3 shadow-card items-center gap-3 z-20"
      >
        <div className="w-9 h-9 rounded-lg bg-brand-mint/20 flex items-center justify-center text-brand-mint flex-shrink-0">
          <Sparkles className="w-4 h-4 text-brand-mint" />
        </div>
        <div className="text-left pr-2">
          <div className="text-[10px] font-semibold text-brand-200 uppercase tracking-wider">Client Revenue Impact</div>
          <div className="text-xs font-bold text-white">$4.8M+ Generated in 2026</div>
        </div>
      </motion.div>
    </div>
  );
}
