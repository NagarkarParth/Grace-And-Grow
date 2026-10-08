import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import BrandLogo from './BrandLogo';
import { InstagramIcon, LinkedinIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/portfolio' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Social Media Marketing', path: '/services#social-media-marketing' },
    { name: 'Performance Marketing', path: '/services#performance-marketing' },
    { name: 'SEO & Search Authority', path: '/services#seo' },
    { name: 'Branding & Creative', path: '/services#branding-creative' },
    { name: 'Website Development', path: '/services#website-development' },
    { name: 'Content Marketing', path: '/services#content-marketing' },
    { name: 'Google & Meta Ads', path: '/services#google-meta-ads' },
    { name: 'Marketing Strategy', path: '/services#marketing-strategy' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com' },
    { name: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com' },
    { name: 'YouTube', icon: YoutubeIcon, href: 'https://youtube.com' },
  ];

  return (
    <footer className="bg-brand-deep text-slate-300 pt-16 lg:pt-20 pb-10 border-t border-brand-800/60 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-forest/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-mint/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-brand-800/80">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <BrandLogo inverted={true} />
            
            <p className="text-slate-300/80 text-sm leading-relaxed max-w-sm mt-2">
              Grace & Grow is a modern digital marketing agency that helps ambitious businesses build strong brands, reach their target audience, generate qualified leads, and scale their digital footprint.
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-300/90">
              <a href="mailto:hello@graceandgrow.com" className="flex items-center gap-2.5 hover:text-brand-300 transition-colors">
                <Mail className="w-4 h-4 text-brand-mint flex-shrink-0" />
                <span>hello@graceandgrow.com</span>
              </a>
              <div className="flex items-center gap-2.5 text-slate-300/90">
                <Phone className="w-4 h-4 text-brand-mint flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300/90">
                <MapPin className="w-4 h-4 text-brand-mint flex-shrink-0" />
                <span>Mumbai / Bengaluru, India</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-9 h-9 rounded-lg bg-brand-spruce border border-brand-700/60 flex items-center justify-center text-slate-300 hover:text-brand-mint hover:border-brand-mint/50 hover:bg-brand-800 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-brand-mint pl-2.5">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-300/80 hover:text-brand-mint transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-mint/40 group-hover:bg-brand-mint group-hover:scale-125 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Directory (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-brand-mint pl-2.5">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-slate-300/80 hover:text-brand-mint transition-colors inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Growth Insights (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-brand-mint pl-2.5">
              Growth Insights
            </h3>
            <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed mb-4">
              Get our weekly breakdown of high-ROI marketing strategies, paid ad teardowns, and growth frameworks.
            </p>

            {subscribed ? (
              <div className="bg-brand-spruce/90 border border-brand-mint/40 rounded-xl p-3.5 flex items-center gap-3 text-brand-mint">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-semibold">You're subscribed! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full bg-brand-spruce/60 border border-brand-700/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-brand-mint focus:ring-1 focus:ring-brand-mint transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-mint hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Subscribe to Insights</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="flex items-center gap-2 mt-4 text-[11px] text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-brand-mint" />
              <span>Strictly zero spam. Unsubscribe anytime.</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Grace & Grow. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-brand-300 transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-brand-300 transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-brand-300 transition-colors">Client Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
