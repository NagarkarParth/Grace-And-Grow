import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';

export default function PortfolioCard({ project, onOpenModal, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group bg-white rounded-2xl sm:rounded-3xl border border-brand-200/80 shadow-soft hover:shadow-hover overflow-hidden transition-all duration-300 flex flex-col justify-between h-full"
    >
      {/* Visual Image / Showcase Container */}
      <div className={`relative h-56 sm:h-64 w-full bg-gradient-to-br ${project.imageGradient} p-6 flex flex-col justify-between overflow-hidden`}>
        {/* Abstract background grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-brand-mint/20 blur-2xl group-hover:bg-brand-mint/35 transition-all duration-500 pointer-events-none" />

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/90 backdrop-blur-md text-brand-spruce shadow-sm">
            {project.category}
          </span>
          <span className="text-[11px] font-semibold text-slate-200 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
            {project.industry}
          </span>
        </div>

        {/* Center Decorative Visual Graphic */}
        <div className="relative z-10 my-auto text-center transform group-hover:scale-105 transition-transform duration-500">
          <div className="inline-block p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl max-w-xs">
            <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {project.client}
            </div>
            <div className="text-xs text-brand-300 font-semibold mt-1">
              {project.visualBadge}
            </div>
          </div>
        </div>

        {/* Bottom Banner with Result Metric */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-deep/80 backdrop-blur-md border border-brand-mint/30 text-brand-mint text-xs font-bold shadow-md">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{project.results}</span>
          </div>
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          <div className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-1">
            {project.client}
          </div>
          <h3 className="text-xl font-extrabold text-brand-charcoal group-hover:text-brand-spruce transition-colors mb-2.5">
            {project.title}
          </h3>
          <p className="text-sm text-brand-muted leading-relaxed mb-4">
            {project.shortDesc}
          </p>

          {/* Services Provided Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.services.slice(0, 3).map((srv) => (
              <span
                key={srv}
                className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-100 text-slate-700"
              >
                {srv}
              </span>
            ))}
          </div>
        </div>

        {/* View Case Study Button */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-brand-50 hover:bg-brand-spruce text-brand-spruce hover:text-white border border-brand-200/80 hover:border-brand-spruce transition-all duration-200 group/btn cursor-pointer"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
