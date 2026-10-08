import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, TrendingUp, Award, Quote } from 'lucide-react';
import Button from './Button';

export default function CaseStudyModal({ project, isOpen, onClose }) {
  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-deep/70 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-brand-200 max-w-3xl w-full my-8 overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Banner */}
          <div className="relative bg-brand-spruce text-white p-6 sm:p-8 flex-shrink-0">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-brand-mint"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-mint text-white">
                {project.category}
              </span>
              <span className="text-xs font-semibold text-brand-200/90">
                {project.industry}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-200/90">
              Client: <strong className="text-white">{project.client}</strong>
            </p>

            {/* Results Pill */}
            <div className="mt-4 inline-flex items-center gap-2 bg-brand-forest/90 border border-brand-mint/40 rounded-xl px-4 py-2 text-brand-mint text-xs sm:text-sm font-bold shadow-sm">
              <TrendingUp className="w-4 h-4 flex-shrink-0" />
              <span>Key Outcome: {project.results}</span>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            {/* 3 Metrics Row */}
            {project.metrics && (
              <div className="grid grid-cols-3 gap-3 bg-brand-50 rounded-2xl p-4 border border-brand-200/70">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xl sm:text-2xl font-black text-brand-spruce">{m.value}</div>
                    <div className="text-[11px] sm:text-xs font-semibold text-brand-muted mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Challenge */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-brand-charcoal uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                The Challenge
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                {project.challenge}
              </p>
            </div>

            {/* Strategy */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-brand-charcoal uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-mint" />
                Our Strategic Approach
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                {project.strategy}
              </p>
            </div>

            {/* Solution */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-brand-charcoal uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-spruce" />
                The Execution & Solution
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                {project.solution}
              </p>
            </div>

            {/* Services Used */}
            <div>
              <h4 className="text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-2.5">
                Services Delivered
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.services.map((srv) => (
                  <span
                    key={srv}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-brand-50 border border-brand-200 text-brand-spruce"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-mint" />
                    <span>{srv}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            {project.testimonial && (
              <div className="bg-brand-50/70 border-l-4 border-brand-mint rounded-r-xl p-5 relative">
                <Quote className="w-8 h-8 text-brand-mint/30 absolute top-3 right-3" />
                <p className="text-sm italic text-slate-700 leading-relaxed mb-3">
                  "{project.testimonial.quote}"
                </p>
                <div className="text-xs">
                  <span className="font-bold text-brand-spruce">{project.testimonial.author}</span>
                  <span className="text-brand-muted"> — {project.testimonial.role}</span>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer CTA */}
          <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0">
            <div className="text-center sm:text-left">
              <div className="text-xs font-semibold text-brand-muted">Ready to achieve similar results?</div>
              <div className="text-sm font-extrabold text-brand-charcoal">Let’s engineer your custom growth system.</div>
            </div>
            <Button
              to="/contact"
              onClick={onClose}
              variant="primary"
              size="sm"
              icon={ArrowRight}
            >
              Start Your Project
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
