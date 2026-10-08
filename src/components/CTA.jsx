import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react';
import Button from './Button';

export default function CTA({
  badge = "LET'S GROW TOGETHER",
  title = "Ready to Grow Your Brand?",
  text = "Let’s turn your ideas into a brand people remember and a marketing strategy that delivers results.",
  buttonText = "Start a Conversation",
  className = ""
}) {
  return (
    <section className={`py-16 sm:py-24 relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-brand-spruce via-brand-forest to-brand-deep rounded-3xl p-8 sm:p-14 lg:p-16 text-center text-white overflow-hidden shadow-2xl border border-brand-mint/30"
        >
          {/* Subtle animated background shapes */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-brand-mint/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />

          {/* Upward Growth Arrow Watermark */}
          <div className="absolute right-10 bottom-6 opacity-5 pointer-events-none select-none">
            <svg width="240" height="240" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 15 L75 50 H60 V85 H40 V50 H25 Z" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-brand-mint/15 text-brand-mint border border-brand-mint/30 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-white mb-6">
              {title}
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              {text}
            </p>

            {/* Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                to="/contact"
                variant="secondary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto shadow-glow hover:shadow-glow-lg"
              >
                {buttonText}
              </Button>
              <Button
                to="/portfolio"
                variant="white"
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore Case Studies
              </Button>
            </div>

            {/* Guarantee / Trust Points */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-10 pt-8 border-t border-white/10 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-mint flex-shrink-0" />
                <span>Complimentary Growth Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-mint flex-shrink-0" />
                <span>Tailored Strategy Roadmap</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-brand-mint flex-shrink-0" />
                <span>Zero Obligation Consultation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
