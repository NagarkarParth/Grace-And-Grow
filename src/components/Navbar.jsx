import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import BrandLogo from './BrandLogo';
import Button from './Button';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Our Work', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-white/90 backdrop-blur-md shadow-soft border-b border-brand-subtle/80'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <BrandLogo />

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-brand-200/60 shadow-sm">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className="relative px-3.5 py-1.5 text-sm font-semibold text-brand-charcoal hover:text-brand-spruce transition-colors rounded-full"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-brand-50 border border-brand-200 rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className={isActive ? 'text-brand-spruce font-bold' : ''}>
                      {link.name}
                    </span>
                    {isActive && (
                      <span className="inline-block w-1 h-1 rounded-full bg-brand-mint ml-1.5 mb-0.5 align-middle" />
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                to="/contact"
                variant="primary"
                size="sm"
                icon={ArrowRight}
                iconPosition="right"
                className="shadow-sm hover:shadow-md"
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-white/90 border border-brand-200 text-brand-charcoal hover:text-brand-spruce focus:outline-none focus:ring-2 focus:ring-brand-spruce"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[68px] z-40 bg-white/95 backdrop-blur-xl border-b border-brand-200 shadow-xl px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? 'bg-brand-50 text-brand-spruce font-bold border border-brand-200'
                        : 'text-brand-charcoal hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-brand-mint" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-slate-400 opacity-60" />
                    )}
                  </NavLink>
                );
              })}

              <div className="pt-4 border-t border-brand-subtle mt-2">
                <Button
                  to="/contact"
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  className="w-full justify-center"
                >
                  Let's Talk →
                </Button>
                <div className="flex items-center justify-center gap-2 mt-4 text-xs font-semibold text-brand-muted">
                  <Sparkles className="w-3.5 h-3.5 text-brand-mint" />
                  <span>Free Initial Strategy Consultation</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
