import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Sparkles, 
  Layers, 
  Zap, 
  Share2, 
  Search, 
  Palette, 
  Layout, 
  FileText, 
  Target, 
  Compass, 
  ChevronRight
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import CTA from '../components/CTA';
import { servicesData } from '../data/services';

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

export default function Services() {
  return (
    <div className="pt-28 lg:pt-36 bg-brand-canvas min-h-screen">
      
      {/* 1. HERO HEADER */}
      <section className="pb-14 lg:pb-20 border-b border-brand-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-brand-mint/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 text-brand-spruce border border-brand-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-mint" />
            <span>FULL-FUNNEL CAPABILITIES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-charcoal tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
            Marketing Systems Engineered For <span className="text-brand-spruce underline decoration-brand-mint/60 underline-offset-8">Measurable Revenue.</span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-muted max-w-3xl mx-auto leading-relaxed mb-8">
            We don't offer generic, disconnected tasks. Every service we deliver is integrated into an end-to-end growth engine tailored to your margins and audience psychology.
          </p>

          {/* Jump Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto pt-4">
            {servicesData.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white text-slate-700 hover:text-brand-spruce hover:bg-brand-50 border border-brand-200/80 shadow-sm transition-all"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. DETAILED INDIVIDUAL SERVICE SECTIONS */}
      <div className="py-16 lg:py-24 space-y-20 lg:space-y-32">
        {servicesData.map((service, index) => {
          const Icon = ICON_MAP[service.icon] || TrendingUp;
          const isEven = index % 2 === 0;

          return (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="bg-white rounded-3xl sm:rounded-4xl p-6 sm:p-10 lg:p-14 border border-brand-200/90 shadow-card hover:shadow-hover transition-all duration-300">
                
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
                  <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-brand-spruce text-brand-mint flex items-center justify-center flex-shrink-0 shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-mint mb-1 block">
                        {service.tag}
                      </span>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-charcoal tracking-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {/* Benchmark pill & CTA */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-brand-50 border border-brand-200 text-brand-spruce text-xs sm:text-sm font-bold">
                      <TrendingUp className="w-4 h-4 text-brand-mint" />
                      <span>{service.stats}</span>
                    </div>
                    <Button
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      variant="primary"
                      size="sm"
                      icon={ArrowRight}
                    >
                      Inquire About {service.title.split(' ')[0]}
                    </Button>
                  </div>
                </div>

                {/* Service Overview Text */}
                <div className="py-8 text-base sm:text-lg text-slate-600 leading-relaxed border-b border-slate-100">
                  {service.overview}
                </div>

                {/* 2-Column Grid: What We Do & Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 py-8 border-b border-slate-100">
                  
                  {/* Column 1: What We Do */}
                  <div>
                    <h3 className="text-base font-extrabold text-brand-charcoal uppercase tracking-wider mb-5 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-spruce" />
                      What We Do
                    </h3>
                    <ul className="space-y-3">
                      {service.whatWeDo.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                          <CheckCircle2 className="w-5 h-5 text-brand-mint flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Key Benefits */}
                  <div>
                    <h3 className="text-base font-extrabold text-brand-charcoal uppercase tracking-wider mb-5 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-mint" />
                      Key Business Benefits
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                          <div className="w-5 h-5 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-spruce" />
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Bottom Row: 4-Step Process & Tangible Deliverables */}
                <div className="pt-8 space-y-8">
                  {/* Process Roadmap */}
                  <div>
                    <h4 className="text-xs font-extrabold text-brand-muted uppercase tracking-widest mb-4">
                      Execution Methodology
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {service.process.map((p) => (
                        <div key={p.step} className="p-4 rounded-xl bg-brand-canvas border border-brand-200/80">
                          <span className="text-xs font-mono font-black text-brand-mint block mb-1">
                            {p.step}
                          </span>
                          <div className="text-sm font-bold text-brand-charcoal mb-1">
                            {p.title}
                          </div>
                          <p className="text-xs text-brand-muted leading-relaxed">
                            {p.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="bg-brand-50/70 p-5 sm:p-6 rounded-2xl border border-brand-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-xs font-bold text-brand-spruce uppercase tracking-wider mb-2">
                        Included Key Deliverables
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((deliv, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white border border-brand-200 text-brand-charcoal shadow-sm"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-mint" />
                            <span>{deliv}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      variant="secondary"
                      size="sm"
                      icon={ArrowRight}
                      className="flex-shrink-0 shadow-sm"
                    >
                      Book Strategy Call
                    </Button>
                  </div>
                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* 3. CTA BANNER */}
      <CTA
        title="Need a Bespoke Omnichannel Strategy?"
        text="Not sure which combination of services will unlock your next growth inflection point? Let our strategists audit your business for free."
        buttonText="Request Free Growth Audit"
      />

    </div>
  );
}
