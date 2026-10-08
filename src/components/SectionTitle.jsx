import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'center',
  inverted = false,
  className = '',
  badgeColor = 'mint'
}) {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4 border ${
            inverted
              ? 'bg-brand-mint/10 border-brand-mint/30 text-brand-mint'
              : 'bg-brand-50 border-brand-200 text-brand-spruce'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-brand-mint animate-pulse" />
          <span>{badge}</span>
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-4 ${
            inverted ? 'text-white' : 'text-brand-charcoal'
          }`}
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className={`text-base sm:text-lg leading-relaxed ${
            inverted ? 'text-slate-300' : 'text-brand-muted'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
