import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Target, 
  Eye, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Lightbulb, 
  Award,
  ArrowRight
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import CTA from '../components/CTA';

import { agencyValues, teamMembers, agencyMilestones } from '../data/team';

const VALUE_ICONS = {
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Users,
  Lightbulb,
  Award
};

export default function About() {
  return (
    <div className="pt-28 lg:pt-36 bg-brand-canvas min-h-screen">
      
      {/* 1. HERO HEADER */}
      <section className="pb-16 lg:pb-24 border-b border-brand-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-brand-mint/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 text-brand-spruce border border-brand-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-mint" />
            <span>WHO WE ARE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-charcoal tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
            We Believe True Brand Impact Begins Where <span className="text-brand-spruce underline decoration-brand-mint/60 underline-offset-8">Art Meets Data.</span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-muted max-w-3xl mx-auto leading-relaxed">
            Grace & Grow is a modern digital marketing agency built for ambitious leaders who refuse to blend into the background. We combine timeless brand storytelling with high-precision performance engineering.
          </p>
        </div>
      </section>

      {/* 2. WHO WE ARE & AGENCY NARRATIVE */}
      <section className="py-20 lg:py-28 bg-white border-b border-brand-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Visual Story / Philosophy Block */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl bg-brand-spruce p-8 sm:p-10 text-white shadow-card overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-mint/15 rounded-full blur-3xl pointer-events-none" />
                
                <span className="text-xs font-bold tracking-widest uppercase text-brand-mint mb-4 block">
                  THE GRACE & GROW CREED
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug mb-6 text-white">
                  "Create with intention. Connect with empathy. Grow without compromise."
                </h3>

                <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed mb-6">
                  Marketing has become plagued with transactional vanity metrics. We rejected the idea that brands must choose between looking extraordinary and driving ruthless commercial return.
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center gap-4 text-xs font-semibold text-brand-200">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-mint animate-pulse" />
                  <span>Proudly Independent & Growth-Obsessed</span>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-brand-spruce bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                <span>OUR BACKGROUND</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
                Not Just Another Marketing Vendor. <br />
                Your Dedicated Commercial Growth Partner.
              </h2>

              <p className="text-base text-brand-muted leading-relaxed">
                Founded with a mission to elevate modern digital commerce, Grace & Grow was born out of frustration with siloed agencies. Traditional creative shops make pretty graphics that fail to convert, while data agencies launch robotic campaigns that dilute brand equity.
              </p>

              <p className="text-base text-brand-muted leading-relaxed">
                At Grace & Grow, we integrate both worlds seamlessly. From deep market audits to creative identity suites, performance ad buying, and technical web architectures, we engineer complete marketing ecosystems that consistently generate compounding revenue.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-brand-canvas border border-brand-200/80">
                  <div className="text-2xl font-black text-brand-spruce">100%</div>
                  <div className="text-xs font-semibold text-brand-muted mt-0.5">Bespoke Strategies Tailored to Your Margins</div>
                </div>
                <div className="p-4 rounded-xl bg-brand-canvas border border-brand-200/80">
                  <div className="text-2xl font-black text-brand-spruce">Zero</div>
                  <div className="text-xs font-semibold text-brand-muted mt-0.5">Hidden Fees or Opaque Vendor Markups</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION DUAL CARDS */}
      <section className="py-20 lg:py-24 bg-brand-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="OUR PURPOSE"
            title="What Drives Us Every Single Day"
            subtitle="Clear principles that guide how we partner with our clients, make strategic decisions, and measure success."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-200/90 shadow-soft hover:shadow-card transition-all duration-300 relative group">
              <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-spruce mb-6 group-hover:bg-brand-spruce group-hover:text-brand-mint transition-colors">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-mint mb-2 block">Our Mission</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal mb-4">
                Sustainable Digital Growth for Ambitious Brands
              </h3>
              <p className="text-base text-brand-muted leading-relaxed">
                To empower forward-thinking businesses with the strategy, creative excellence, and performance marketing infrastructure necessary to build authentic market authority and generate long-term, sustainable enterprise value.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-200/90 shadow-soft hover:shadow-card transition-all duration-300 relative group">
              <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-spruce mb-6 group-hover:bg-brand-spruce group-hover:text-brand-mint transition-colors">
                <Eye className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-mint mb-2 block">Our Vision</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal mb-4">
                The Gold Standard in Growth Partnership
              </h3>
              <p className="text-base text-brand-muted leading-relaxed">
                To become the most trusted digital growth partner for ambitious global brands — celebrated worldwide for our strategic integrity, measurable business outcomes, and unrelenting commitment to our clients' commercial success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR VALUES */}
      <section className="py-20 lg:py-28 bg-white border-y border-brand-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="OUR CORE PILLARS"
            title="The Values That Guide Our Work"
            subtitle="Six non-negotiable principles embedded in every strategy, campaign, and client conversation we conduct."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {agencyValues.map((val, idx) => {
              const Icon = VALUE_ICONS[val.icon] || Sparkles;
              return (
                <div
                  key={val.title}
                  className="bg-brand-canvas rounded-2xl p-6 sm:p-7 border border-brand-200/90 shadow-soft hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-spruce group-hover:bg-brand-spruce group-hover:text-brand-mint transition-all duration-300 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-brand-charcoal mb-2.5 group-hover:text-brand-spruce transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. TEAM SECTION */}
      <section className="py-20 lg:py-28 bg-brand-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="MEET THE STRATEGISTS"
            title="The Minds Behind the Magic"
            subtitle="A seasoned leadership team of brand consultants, media buyers, technical search engineers, and art directors."
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-200/90 shadow-soft hover:shadow-card transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute bottom-3 left-3 bg-brand-deep/80 backdrop-blur-md text-brand-mint text-[11px] font-bold px-3 py-1 rounded-full border border-brand-mint/30">
                      {member.specialty}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-extrabold text-brand-charcoal group-hover:text-brand-spruce transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-brand-mint uppercase tracking-wider mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AGENCY MILESTONES & JOURNEY */}
      <section className="py-20 lg:py-24 bg-white border-y border-brand-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="OUR TRACK RECORD"
            title="The Grace & Grow Journey"
            subtitle="From our humble inception to scaling over 30+ international client brands."
            className="mb-16"
          />

          <div className="space-y-6 sm:space-y-8 relative">
            {/* Vertical connector line */}
            <div className="hidden sm:block absolute left-[88px] top-6 bottom-6 w-0.5 bg-brand-200" />

            {agencyMilestones.map((m) => (
              <div key={m.year} className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 group">
                <div className="w-20 sm:w-24 text-left sm:text-right flex-shrink-0">
                  <span className="text-xl sm:text-2xl font-black text-brand-spruce font-mono">
                    {m.year}
                  </span>
                </div>

                <div className="hidden sm:flex w-6 h-6 rounded-full bg-brand-50 border-2 border-brand-spruce items-center justify-center flex-shrink-0 mt-1 z-10 group-hover:bg-brand-mint group-hover:border-brand-mint transition-colors">
                  <div className="w-2 h-2 rounded-full bg-brand-spruce group-hover:bg-white" />
                </div>

                <div className="bg-brand-canvas rounded-2xl p-5 sm:p-6 border border-brand-200/80 shadow-soft flex-1">
                  <h4 className="text-lg font-extrabold text-brand-charcoal mb-1">
                    {m.title}
                  </h4>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <CTA
        title="Ready to Partner with Grace & Grow?"
        text="Let's schedule a dedicated strategy session and map out your next stage of digital market expansion."
        buttonText="Schedule Strategy Call"
      />

    </div>
  );
}
