import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandLogo({ inverted = false, showTagline = true, className = '' }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Official uploaded logo image with subtle ring */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shadow-sm border border-brand-200/50 bg-white flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
        <img
          src="/logo.jpg"
          alt="Grace & Grow Logo"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`text-xl sm:text-2xl font-extrabold tracking-tight font-display transition-colors duration-200 ${
            inverted ? 'text-white group-hover:text-brand-300' : 'text-brand-spruce group-hover:text-brand-600'
          }`}>
            Grace <span className="text-brand-mint font-bold">&</span> Grow
          </span>
        </div>
        {showTagline && (
          <span className={`text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase mt-0.5 transition-colors duration-200 ${
            inverted ? 'text-brand-200/70' : 'text-brand-muted group-hover:text-brand-spruce/80'
          }`}>
            Create. Connect. Grow.
          </span>
        )}
      </div>
    </Link>
  );
}
