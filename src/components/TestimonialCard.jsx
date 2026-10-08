import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function TestimonialCard({ item, index = 0, isActive = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-brand-200/80 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between h-full relative"
    >
      <Quote className="w-10 h-10 text-brand-mint/20 absolute top-6 right-6 pointer-events-none" />

      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(item.rating || 5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
          <span className="text-xs font-bold text-slate-500 ml-1.5">5.0 Verified Result</span>
        </div>

        {/* Tagline / Headline */}
        <h4 className="text-lg font-extrabold text-brand-charcoal mb-3">
          "{item.tagline}"
        </h4>

        {/* Body review */}
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
          {item.testimonial}
        </p>
      </div>

      <div>
        {/* Client identity row */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={item.avatar}
              alt={item.clientName}
              className="w-11 h-11 rounded-full object-cover border-2 border-brand-200 shadow-sm"
              loading="lazy"
            />
            <div>
              <div className="text-sm font-extrabold text-brand-charcoal">{item.clientName}</div>
              <div className="text-xs text-brand-muted">{item.role}, {item.company}</div>
            </div>
          </div>

          <span className="hidden sm:inline-flex px-2.5 py-1 rounded-md text-[11px] font-semibold bg-brand-50 text-brand-spruce border border-brand-200">
            {item.serviceUsed}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
