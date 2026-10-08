import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  Palette, 
  TrendingUp, 
  BarChart, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Users, 
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import GrowthDashboardVisual from '../components/GrowthDashboardVisual';
import ServiceCard from '../components/ServiceCard';
import PortfolioCard from '../components/PortfolioCard';
import CaseStudyModal from '../components/CaseStudyModal';
import TestimonialCard from '../components/TestimonialCard';
import ProcessTimeline from '../components/ProcessTimeline';
import CTA from '../components/CTA';

import { servicesData } from '../data/services';
import { projectsData, portfolioCategories } from '../data/projects';
import { testimonialsData, clientLogos } from '../data/testimonials';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Filter projects for the home preview
  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  // Animated statistics array (easy to replace)
  const stats = [
    { value: "50+", label: "Projects Delivered", detail: "Across 8 industries" },
    { value: "30+", label: "Brands Supported", detail: "Global & fast-scaling" },
    { value: "3X", label: "Average Growth Focus", detail: "Measurable revenue impact" },
    { value: "95%", label: "Client Satisfaction", detail: "Retainer renewal rate" },
  ];

  // Why Grace & Grow 6 Feature Cards
  const whyCards = [
    {
      title: "Strategy First",
      desc: "Every campaign starts with a clear strategy. We never execute without understanding your unit economics.",
      icon: Compass,
      tag: "Foundation"
    },
    {
      title: "Creative Thinking",
      desc: "We turn ideas into memorable brand experiences that capture attention and create emotional connection.",
      icon: Palette,
      tag: "Uniqueness"
    },
    {
      title: "Data Driven",
      desc: "Decisions are supported by data and measurable performance, not gut feeling or outdated assumptions.",
      icon: BarChart,
      tag: "Analytics"
    },
    {
      title: "Customized Solutions",
      desc: "Every business receives a strategy designed around its goals, competitive advantages, and customer lifecycle.",
      icon: Layers,
      tag: "Tailored"
    },
    {
      title: "Transparent Process",
      desc: "Clear communication and visibility throughout the project with live metric dashboards and weekly syncs.",
      icon: ShieldCheck,
      tag: "Trust"
    },
    {
      title: "Growth Focused",
      desc: "We focus on outcomes, not vanity metrics. If it doesn't move the commercial needle, we don't do it.",
      icon: TrendingUp,
      tag: "Results"
    }
  ];

  const handleNextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className="relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-brand-canvas via-white to-brand-canvas overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        
        {/* Ambient Top Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-mint/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-spruce/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-widest uppercase bg-brand-50 border border-brand-200 text-brand-spruce mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-mint animate-pulse" />
                <span>DIGITAL MARKETING AGENCY</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-brand-charcoal leading-[1.1] mb-6">
                We Build Brands <br className="hidden sm:inline" />
                <span className="relative inline-block">
                  <span className="relative z-10 text-brand-spruce">That Grow.</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-brand-mint/20 -z-0 rounded" />
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-lg sm:text-xl text-brand-muted leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-normal">
                From strategy to execution, we help ambitious businesses create meaningful brands, connect with the right audience, and turn attention into growth.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="w-full sm:w-auto shadow-md hover:shadow-lg"
                >
                  Let’s Grow Together
                </Button>
                <Button
                  to="/portfolio"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Explore Our Work
                </Button>
              </div>

              {/* Quick Trust Checklist */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-brand-charcoal font-semibold pt-2 border-t border-slate-200/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-mint flex-shrink-0" />
                  <span>Custom Strategy Roadmap</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-mint flex-shrink-0" />
                  <span>Transparent Attribution</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-mint flex-shrink-0" />
                  <span>Dedicated Growth Team</span>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Column (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-5"
            >
              <GrowthDashboardVisual />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. TRUST / STATS SECTION */}
      <section className="py-12 bg-white border-y border-brand-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center p-4 rounded-2xl bg-brand-50/50 border border-brand-100"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-spruce tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-bold text-brand-charcoal mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-brand-muted mt-0.5">
                  {stat.detail}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Client Brand Logos Strip */}
          <div className="pt-6 border-t border-slate-100 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 block">
              Trusted by Ambitious Brands Across Tech, Wellness, Luxury & Direct-to-Consumer
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75">
              {clientLogos.map((client) => (
                <div key={client.name} className="flex items-center gap-2 group">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-mint/60 group-hover:bg-brand-mint transition-colors" />
                  <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-700 group-hover:text-brand-spruce transition-colors">
                    {client.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-20 lg:py-28 bg-brand-canvas relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="OUR EXPERTISE"
            title="Everything You Need to Grow Online."
            subtitle="We combine creativity, strategy, technology, and data to build marketing systems that deliver measurable results."
            className="mb-16"
          />

          {/* Service Cards Grid (8 services) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* Bottom Services CTA Link */}
          <div className="mt-12 text-center">
            <Button
              to="/services"
              variant="outline"
              size="md"
              icon={ArrowRight}
            >
              View Full Service Deliverables & Methodologies
            </Button>
          </div>
        </div>
      </section>

      {/* 4. ABOUT PREVIEW SECTION */}
      <section className="py-20 lg:py-28 bg-white border-y border-brand-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Core Philosophy */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 text-brand-spruce border border-brand-200 mb-4">
                <span className="w-2 h-2 rounded-full bg-brand-mint" />
                <span>AGENCY PHILOSOPHY</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight mb-6">
                Growth Starts With the Right Strategy.
              </h2>
              
              <p className="text-base text-brand-muted leading-relaxed mb-6">
                At Grace & Grow, we do not believe in one-size-fits-all marketing. Off-the-shelf templates and generic playbooks fail because your brand's margins, customer journey, and competitive moat are unique.
              </p>

              <p className="text-base text-brand-muted leading-relaxed mb-8">
                We take the time to immerse ourselves in your business, uncovering untapped leverage points and architecting systems designed for compounding ROI.
              </p>

              <Button
                to="/about"
                variant="primary"
                size="md"
                icon={ArrowRight}
              >
                Discover Grace & Grow
              </Button>
            </div>

            {/* Right Column: Three Principles Cards */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Principle 01 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-brand-canvas p-6 sm:p-7 rounded-2xl border border-brand-200/90 hover:border-brand-mint/50 transition-all duration-300 shadow-soft group"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-spruce text-brand-mint font-mono font-black text-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    01
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-brand-charcoal mb-2 group-hover:text-brand-spruce transition-colors">
                      Understand
                    </h3>
                    <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                      Understand the business, audience, market, and goals. We conduct thorough competitive research and customer psychology audits before launching any campaign.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Principle 02 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-brand-canvas p-6 sm:p-7 rounded-2xl border border-brand-200/90 hover:border-brand-mint/50 transition-all duration-300 shadow-soft group"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-spruce text-brand-mint font-mono font-black text-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    02
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-brand-charcoal mb-2 group-hover:text-brand-spruce transition-colors">
                      Create
                    </h3>
                    <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                      Build powerful branding, content, campaigns, and digital experiences. We engineer creatives that stop the scroll and turn casual curiosity into commercial intent.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Principle 03 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-brand-canvas p-6 sm:p-7 rounded-2xl border border-brand-200/90 hover:border-brand-mint/50 transition-all duration-300 shadow-soft group"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-spruce text-brand-mint font-mono font-black text-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    03
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-brand-charcoal mb-2 group-hover:text-brand-spruce transition-colors">
                      Grow
                    </h3>
                    <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                      Measure results, optimize continuously, and scale what works. With tight feedback loops and real-time attribution, we scale winners while protecting your CAC.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO SECTION */}
      <section className="py-20 lg:py-28 bg-brand-canvas relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="CASE STUDIES"
            title="Work That Speaks for Itself."
            subtitle="Explore our recent client transformations across brand identity, paid acquisition, high-performance web, and organic search."
            className="mb-10"
          />

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-brand-spruce text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-brand-50 hover:text-brand-spruce border border-brand-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(0, 6).map((project, idx) => (
              <PortfolioCard
                key={project.id}
                project={project}
                index={idx}
                onOpenModal={(p) => setActiveModalProject(p)}
              />
            ))}
          </div>

          {/* Portfolio Footer CTA */}
          <div className="mt-14 text-center">
            <Button
              to="/portfolio"
              variant="primary"
              size="md"
              icon={ArrowRight}
            >
              Explore All Case Studies & Filter by Industry
            </Button>
          </div>
        </div>
      </section>

      {/* 6. WHY GRACE & GROW */}
      <section className="py-20 lg:py-28 bg-white border-y border-brand-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="THE GRACE & GROW ADVANTAGE"
            title="Why Brands Choose Grace & Grow"
            subtitle="We replace disjointed freelancers and sluggish traditional agencies with an agile, high-caliber growth partner."
            className="mb-16"
          />

          {/* 6 Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="bg-brand-canvas rounded-2xl p-6 sm:p-7 border border-brand-200/90 shadow-soft hover:shadow-card transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-spruce group-hover:bg-brand-spruce group-hover:text-brand-mint group-hover:border-brand-spruce transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-mint bg-white px-2.5 py-1 rounded-full border border-brand-200/80">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-brand-charcoal mb-2.5 group-hover:text-brand-spruce transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-brand-muted leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. PROCESS SECTION */}
      <section className="py-20 lg:py-28 bg-brand-canvas relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="OUR PROVEN ROADMAP"
            title="From Idea to Impact."
            subtitle="A structured, six-stage methodology engineered to take your brand from initial discovery to compounding digital market dominance."
            className="mb-16"
          />

          <ProcessTimeline />
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="py-20 lg:py-28 bg-white border-y border-brand-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionTitle
              badge="CLIENT TESTIMONIALS"
              title="What Our Clients Say"
              subtitle="Hear directly from founders and growth leaders who scaled their organizations with Grace & Grow."
              align="left"
              className="mb-6 md:mb-0"
            />

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrevTestimonial}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full border border-brand-200 bg-white hover:bg-brand-spruce text-brand-spruce hover:text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextTestimonial}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full border border-brand-200 bg-white hover:bg-brand-spruce text-brand-spruce hover:text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonials Grid / Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.map((item, idx) => (
              <TestimonialCard
                key={item.id}
                item={item}
                index={idx}
                isActive={idx === activeTestimonialIdx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <CTA />

      {/* Case Study Modal Window */}
      <CaseStudyModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </div>
  );
}
