import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Crosshair } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import AudioToggle from './AudioToggle';
import { soundManager } from '../utils/soundEffects';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'LOADOUT', href: '#loadout' },
  { name: 'MISSIONS', href: '#missions' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'TRAINING', href: '#training' },
  { name: 'SERVICES', href: '#services' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Spy on active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    soundManager.playClick();
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080A0B]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-2.5'
          : 'bg-[#080A0B]/80 backdrop-blur-sm border-b border-zinc-900 py-3.5'
      }`}
    >
      {/* Top micro orange edge line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/80 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Exact Brand Logo: PARTH NAGARKAR */}
        <a
          href="#home"
          onClick={() => soundManager.playClick()}
          onMouseEnter={() => soundManager.playHover()}
          className="group flex items-center gap-2.5 text-decoration-none min-w-0"
        >
          <div className="relative w-8 h-8 flex items-center justify-center bg-[#151719] border border-amber-500/60 rounded-sm group-hover:border-amber-400 group-hover:shadow-[0_0_10px_rgba(245,158,11,0.5)] transition-all shrink-0">
            <Crosshair className="w-5 h-5 text-amber-500 group-hover:rotate-45 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" />
          </div>
          <span className="font-display font-black text-base sm:text-lg lg:text-xl tracking-[0.14em] text-white group-hover:text-amber-400 transition-colors uppercase truncate">
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 font-mono text-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                onMouseEnter={() => soundManager.playHover()}
                className={`relative px-3 py-1.5 transition-all duration-200 uppercase tracking-widest font-semibold ${
                  isActive
                    ? 'text-amber-400 bg-amber-500/10 border-b-2 border-amber-500 font-bold'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/40 border-b-2 border-transparent'
                }`}
              >
                {isActive && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 mr-1.5 animate-pulse" />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Comms, Socials, Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          {/* Audio Comm Toggle */}
          <AudioToggle />

          {/* Social Icons */}
          <a
            href="https://github.com/NagarkarParth"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            onClick={() => soundManager.playClick()}
            aria-label="GitHub Profile"
            className="p-2 text-zinc-400 hover:text-white bg-[#151719] border border-zinc-800 hover:border-zinc-600 rounded transition-all"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/parth-nagarkar"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundManager.playHover()}
            onClick={() => soundManager.playClick()}
            aria-label="LinkedIn Profile"
            className="p-2 text-zinc-400 hover:text-white bg-[#151719] border border-zinc-800 hover:border-zinc-600 rounded transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Download Resume Button */}
          <a
            href="/resume.pdf"
            download
            onMouseEnter={() => soundManager.playHover()}
            onClick={() => soundManager.playConfirm()}
            className="relative flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-yellow-500 text-black font-tactical font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-[0_0_12px_rgba(245,158,11,0.3)] hover:shadow-[0_0_18px_rgba(245,158,11,0.6)] active:scale-95 cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>RESUME</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <AudioToggle />

          <button
            onClick={() => {
              soundManager.playClick();
              setIsOpen(!isOpen);
            }}
            aria-label="Toggle navigation menu"
            className="p-2 text-zinc-400 hover:text-amber-400 bg-[#151719] border border-zinc-800 rounded focus:outline-none cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Tactical Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0D0F11]/98 border-b border-zinc-800 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            
            {/* Quick Nav Tag */}
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800/80 text-[10px] font-mono text-zinc-500">
              <span>// QUICK NAV</span>
              <span className="text-emerald-400 font-bold">ONLINE</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 font-mono text-xs">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded border transition-all ${
                      isActive
                        ? 'bg-amber-500/15 border-amber-500/80 text-amber-400 font-bold'
                        : 'bg-[#151719] border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white'
                    }`}
                  >
                    <span className="text-amber-500 font-bold text-[10px]">&gt;</span>
                    <span className="tracking-wider">{link.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Mobile Actions: Resume + Socials */}
            <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/NagarkarParth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-zinc-400 hover:text-white bg-[#151719] border border-zinc-800 rounded"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/parth-nagarkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-zinc-400 hover:text-white bg-[#151719] border border-zinc-800 rounded"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              <a
                href="/resume.pdf"
                download
                onClick={() => {
                  soundManager.playConfirm();
                  setIsOpen(false);
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-amber-600 to-amber-500 text-black font-tactical font-bold text-xs uppercase tracking-wider rounded-sm shadow-md cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
