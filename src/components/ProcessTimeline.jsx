import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Palette, Rocket, Sliders, TrendingUp } from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    desc: "Understand your business, target audience, competitive moat, and commercial goals.",
    icon: Search,
    detail: "Deep intake sprint, metrics audit, and ideal customer profile mapping."
  },
  {
    step: "02",
    title: "Strategize",
    desc: "Create a customized, data-backed marketing strategy tailored to your margins.",
    icon: Compass,
    detail: "Channel selection, budget allocation, messaging hooks, and KPI benchmarks."
  },
  {
    step: "03",
    title: "Create",
    desc: "Develop content, campaigns, branding, and high-converting digital experiences.",
    icon: Palette,
    detail: "Bespoke ad creatives, landing pages, copy frameworks, and asset libraries."
  },
  {
    step: "04",
    title: "Launch",
    desc: "Put the strategy into action with verified pixel attribution and multi-channel deployment.",
    icon: Rocket,
    detail: "Precise campaign rollout, audience seeding, and server-side tracking."
  },
  {
    step: "05",
    title: "Optimize",
    desc: "Analyze real-time performance and continuously improve cost-per-acquisition.",
    icon: Sliders,
    detail: "Multivariate A/B testing, negative keyword tuning, and creative refresh sprints."
  },
  {
    step: "06",
    title: "Grow",
    desc: "Scale successful campaigns and create compounding, long-term brand equity.",
    icon: TrendingUp,
    detail: "Channel expansion, audience lookalikes, and automated retention funnels."
  }
];

export default function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Central Connecting Line for Desktop */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-spruce via-brand-mint to-brand-spruce/30 -translate-y-1/2 z-0" />

      {/* Grid of Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
        {PROCESS_STEPS.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-brand-200/80 shadow-soft hover:shadow-card transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Step indicator header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-spruce group-hover:bg-brand-spruce group-hover:text-brand-mint group-hover:border-brand-spruce transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-2xl font-black text-brand-200 group-hover:text-brand-mint transition-colors duration-200 font-mono">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-brand-charcoal mb-2 group-hover:text-brand-spruce transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-brand-muted leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-semibold text-brand-spruce/80 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-mint" />
                  <span>{step.detail}</span>
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
