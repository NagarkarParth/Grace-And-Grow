import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Sparkles, Layers, ArrowRight, RotateCcw } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import PortfolioCard from '../components/PortfolioCard';
import CaseStudyModal from '../components/CaseStudyModal';
import Button from '../components/Button';
import CTA from '../components/CTA';

import { projectsData, portfolioCategories } from '../data/projects';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        project.category.toLowerCase() === selectedCategory.toLowerCase();

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.industry.toLowerCase().includes(query) ||
        project.shortDesc.toLowerCase().includes(query) ||
        project.services.some((s) => s.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="pt-28 lg:pt-36 bg-brand-canvas min-h-screen">
      
      {/* 1. HERO HEADER */}
      <section className="pb-12 lg:pb-16 border-b border-brand-200/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-brand-mint/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 text-brand-spruce border border-brand-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-mint" />
            <span>CLIENT PROVEN IMPACT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-charcoal tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
            Work That Speaks <span className="text-brand-spruce underline decoration-brand-mint/60 underline-offset-8">For Itself.</span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed mb-10">
            Real commercial transformations. Explore how we engineered growth, built enduring brand equity, and unlocked high returns for our partners.
          </p>

          {/* Interactive Search & Filter Control Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search case studies by keyword, brand, or service..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-brand-200 shadow-sm text-sm sm:text-base text-brand-charcoal placeholder-slate-400 focus:outline-none focus:border-brand-mint focus:ring-2 focus:ring-brand-mint/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-100 px-2 py-1 rounded-md"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 max-w-4xl mx-auto">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-brand-spruce text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-brand-50 hover:text-brand-spruce border border-brand-200/80 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Result Count Indicator */}
          <div className="mt-6 text-xs text-brand-muted font-medium">
            Showing <strong className="text-brand-charcoal">{filteredProjects.length}</strong> case {filteredProjects.length === 1 ? 'study' : 'studies'}
            {selectedCategory !== 'All' && <span> in <span className="text-brand-spruce font-bold">"{selectedCategory}"</span></span>}
            {searchQuery && <span> matching <span className="text-brand-spruce font-bold">"{searchQuery}"</span></span>}
          </div>
        </div>
      </section>

      {/* 2. PORTFOLIO GRID */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <PortfolioCard
                    project={project}
                    index={idx}
                    onOpenModal={(p) => setActiveModalProject(p)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-20 bg-white rounded-3xl border border-brand-200 p-8 max-w-md mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-spruce flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-brand-charcoal mb-2">No Case Studies Found</h3>
            <p className="text-sm text-brand-muted mb-6">
              We couldn't find any projects matching your current search criteria. Try modifying your keywords or resetting filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-spruce text-white font-semibold text-sm hover:bg-brand-forest transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </section>

      {/* 3. CTA BANNER */}
      <CTA
        title="Want Your Brand to Be Our Next Case Study?"
        text="Let's engineer a marketing system that drives the same breakthrough metrics for your organization."
        buttonText="Discuss Your Project"
      />

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </div>
  );
}
