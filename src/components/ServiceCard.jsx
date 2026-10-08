import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Share2, 
  TrendingUp, 
  Search, 
  Palette, 
  Layout, 
  FileText, 
  Target, 
  Compass, 
  ArrowUpRight 
} from 'lucide-react';

const ICON_MAP = {
  Share2,
  TrendingUp,
  Search,
  Palette,
  Layout,
  FileText,
  Target,
  Compass
};

export default function ServiceCard({ service, index = 0 }) {
  const IconComponent = ICON_MAP[service.icon] || TrendingUp;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-brand-200/80 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col justify-between h-full overflow-hidden"
    >
      {/* Top right subtle glow on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full blur-2xl group-hover:bg-brand-mint/15 transition-all duration-300 pointer-events-none" />

      <div>
        {/* Header row: Icon & Tag */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-200/80 flex items-center justify-center text-brand-spruce group-hover:bg-brand-spruce group-hover:text-brand-mint group-hover:border-brand-spruce transition-all duration-300 shadow-sm">
            <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
          </div>

          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-mint bg-brand-50 px-2.5 py-1 rounded-full border border-brand-200/60">
            {service.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-extrabold text-brand-charcoal group-hover:text-brand-spruce transition-colors duration-200 mb-2.5">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-brand-muted leading-relaxed mb-5">
          {service.shortDesc}
        </p>
      </div>

      <div>
        {/* Outcome metric highlight badge */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
          <div className="font-semibold text-brand-spruce flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-mint" />
            <span>{service.stats}</span>
          </div>

          <Link
            to={`/services#${service.id}`}
            className="inline-flex items-center gap-1 font-bold text-brand-spruce group-hover:text-brand-mint transition-colors"
          >
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
