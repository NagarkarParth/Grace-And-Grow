import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle, 
  ChevronDown,
  ShieldCheck
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { InstagramIcon, LinkedinIcon, FacebookIcon, YoutubeIcon } from '../components/SocialIcons';

const SERVICE_OPTIONS = [
  "Social Media Marketing",
  "Performance Marketing",
  "SEO",
  "Branding",
  "Website Development",
  "Content Marketing",
  "Google Ads",
  "Meta Ads",
  "Other"
];

const BUDGET_OPTIONS = [
  "Under $2,500 / month",
  "$2,500 – $5,000 / month",
  "$5,000 – $10,000 / month",
  "$10,000+ / month"
];

const FAQS = [
  {
    q: "How fast can we launch our campaigns?",
    a: "After our initial discovery intake and strategy sprint, most paid performance and social campaigns go live within 10 to 14 business days. Branding and comprehensive website builds typically range from 3 to 6 weeks."
  },
  {
    q: "Do you require long-term lock-in contracts?",
    a: "We believe in earning our seat at your table every month. Following an initial 90-day momentum sprint (necessary to audit, test, and dial in attribution algorithms), our retainers operate on flexible 30-day rolling terms."
  },
  {
    q: "What makes Grace & Grow different from other agencies?",
    a: "We marry high-aesthetic design with ruthless commercial data. You will never get cookie-cutter playbooks or vanity impressions. You receive direct access to senior strategists, custom growth roadmaps, and full transparency."
  },
  {
    q: "How do you report results to our team?",
    a: "You receive a live, 24/7 client dashboard tracking blended ROAS, CPA, conversion rates, and pipeline revenue. In addition, we host bi-weekly strategy calls and deliver monthly executive growth briefings."
  }
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service');

  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    serviceRequired: '',
    estimatedBudget: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (preselectedService) {
      // Find matching option
      const match = SERVICE_OPTIONS.find(
        (opt) => opt.toLowerCase().includes(preselectedService.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, serviceRequired: match }));
      }
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate async submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
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
            <span>START A CONVERSATION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-charcoal tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
            Let’s Build Something <span className="text-brand-spruce underline decoration-brand-mint/60 underline-offset-8">That Grows.</span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to explore how our growth systems can scale your revenue? Fill out the inquiry below, and our lead strategist will connect with you within 24 hours.
          </p>
        </div>
      </section>

      {/* 2. FORM & CONTACT INFO SECTION */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Agency Contact Card (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-brand-spruce text-white rounded-3xl p-8 sm:p-10 shadow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-mint/15 rounded-full blur-3xl pointer-events-none" />
              
              <span className="text-xs font-bold tracking-widest uppercase text-brand-mint mb-3 block">
                DIRECT CHANNELS
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
                Get in Touch Directly
              </h2>

              <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed mb-8">
                Prefer email or a phone conversation? Reach out directly to our client partnerships team.
              </p>

              {/* Contact details */}
              <div className="space-y-6 text-sm">
                <a
                  href="mailto:hello@graceandgrow.com"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-mint/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-mint/20 flex items-center justify-center text-brand-mint flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-brand-200 block">Email Us</span>
                    <strong className="text-base text-white">hello@graceandgrow.com</strong>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-brand-mint/20 flex items-center justify-center text-brand-mint flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-brand-200 block">Call Our Team</span>
                    <strong className="text-base text-white">+91 98765 43210</strong>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-brand-mint/20 flex items-center justify-center text-brand-mint flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-brand-200 block">Office & Headquarters</span>
                    <strong className="text-base text-white">Mumbai & Bengaluru, India</strong>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-brand-mint/20 flex items-center justify-center text-brand-mint flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-brand-200 block">Response Time Guarantee</span>
                    <strong className="text-base text-white">Within 24 Hours on Business Days</strong>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-8 mt-8 border-t border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-200 mb-3 block">
                  Connect on Social Media
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-mint hover:text-white flex items-center justify-center text-slate-200 transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-mint hover:text-white flex items-center justify-center text-slate-200 transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-mint hover:text-white flex items-center justify-center text-slate-200 transition-all duration-200"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-mint hover:text-white flex items-center justify-center text-slate-200 transition-all duration-200"
                    aria-label="YouTube"
                  >
                    <YoutubeIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick trust reassurance badge */}
            <div className="p-5 rounded-2xl bg-white border border-brand-200/80 shadow-soft flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-brand-mint flex-shrink-0" />
              <div className="text-xs text-brand-muted">
                <strong className="text-brand-charcoal block text-sm">Strict NDA & Privacy Policy</strong>
                All details and proprietary project documents shared are protected under mutual non-disclosure.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-200/90 shadow-card">
              
              {submitted ? (
                /* Success Confirmation State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-50 border-2 border-brand-mint text-brand-mint flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal mb-3">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-base text-brand-muted max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you for reaching out, <strong className="text-brand-spruce">{formData.fullName}</strong>. One of our growth strategists will review your project details and connect with you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        businessName: '',
                        email: '',
                        phone: '',
                        serviceRequired: '',
                        estimatedBudget: '',
                        message: ''
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-spruce text-white font-semibold hover:bg-brand-forest transition-colors cursor-pointer"
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </motion.div>
              ) : (
                /* Main Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-extrabold text-brand-charcoal mb-1">
                      Project Inquiry
                    </h3>
                    <p className="text-sm text-brand-muted">
                      Tell us about your brand, goals, and desired timeframe.
                    </p>
                  </div>

                  {/* Row 1: Full Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Parth Nagarkar"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-brand-charcoal placeholder-slate-400 focus:outline-none focus:border-brand-mint focus:bg-white focus:ring-1 focus:ring-brand-mint transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2">
                        Business Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Lumina Health Inc."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-brand-charcoal placeholder-slate-400 focus:outline-none focus:border-brand-mint focus:bg-white focus:ring-1 focus:ring-brand-mint transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="parth@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-brand-charcoal placeholder-slate-400 focus:outline-none focus:border-brand-mint focus:bg-white focus:ring-1 focus:ring-brand-mint transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-brand-charcoal placeholder-slate-400 focus:outline-none focus:border-brand-mint focus:bg-white focus:ring-1 focus:ring-brand-mint transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Required & Estimated Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2">
                        Service Required <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="serviceRequired"
                          value={formData.serviceRequired}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-brand-charcoal focus:outline-none focus:border-brand-mint focus:bg-white focus:ring-1 focus:ring-brand-mint transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select a service...</option>
                          {SERVICE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2">
                        Estimated Budget
                      </label>
                      <div className="relative">
                        <select
                          name="estimatedBudget"
                          value={formData.estimatedBudget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-brand-charcoal focus:outline-none focus:border-brand-mint focus:bg-white focus:ring-1 focus:ring-brand-mint transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select budget range...</option>
                          {BUDGET_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2">
                      Project Details & Goals <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your brand, current challenges, and what commercial goals you want to accomplish..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-brand-charcoal placeholder-slate-400 focus:outline-none focus:border-brand-mint focus:bg-white focus:ring-1 focus:ring-brand-mint transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-spruce text-white font-bold text-base hover:bg-brand-forest hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-spruce disabled:opacity-50 cursor-pointer shadow-md"
                  >
                    {submitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-brand-muted">
                    We value your privacy. Your information is never sold or shared.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* 3. CLIENT ONBOARDING FAQS ACCORDION */}
      <section className="py-20 lg:py-24 bg-white border-t border-brand-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="COMMON INQUIRIES"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about partnering with Grace & Grow before taking the next step."
            className="mb-14"
          />

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-brand-200/90 overflow-hidden bg-brand-canvas transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-extrabold text-brand-charcoal">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-spruce transition-transform duration-300 flex-shrink-0 ml-4 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-brand-muted leading-relaxed border-t border-brand-200/50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
