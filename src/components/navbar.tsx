"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Compass, Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  number: string;
}

const navItems: NavItem[] = [
  { label: "Arrival", href: "#arrival", number: "01" },
  { label: "The Day", href: "#the-day", number: "02" },
  { label: "The World", href: "#the-world", number: "03" },
  { label: "The Sky", href: "#the-sky", number: "04" },
  { label: "The Sound", href: "#the-sound", number: "05" },
  { label: "Life in '07", href: "#life-2007", number: "06" },
  { label: "Cosmic Identity", href: "#cosmic-identity", number: "07" },
  { label: "Certificate", href: "#certificate", number: "08" },
  { label: "Final Message", href: "#final-message", number: "09" },
];

export const Navbar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Gold Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-white/5 z-50">
        <div
          className="h-full bg-gradient-to-r from-rose-400 via-gold-400 to-lavender-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-midnight-950/85 backdrop-blur-xl border-b border-gold-400/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Monogram & Title */}
          <a
            href="#arrival"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="The Day Divya Was Born - Return to Top"
          >
            <div className="w-8 h-8 rounded-full border border-gold-400/40 flex items-center justify-center bg-midnight-900 group-hover:border-gold-300 transition-colors">
              <span className="font-editorial text-xs font-semibold text-gold-300 tracking-wider">D</span>
            </div>
            <div className="flex flex-col">
              <span className="font-editorial tracking-[0.22em] text-xs font-bold text-ivory-100 uppercase group-hover:text-gold-200 transition-colors">
                The Day Divya Was Born
              </span>
              <span className="text-[9px] tracking-[0.25em] text-gold-400/80 uppercase font-light">
                Bengaluru • 20 Nov 2007
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2.5 py-1.5 rounded-md text-[11px] uppercase tracking-[0.16em] text-ivory-200/70 hover:text-gold-300 hover:bg-white/[0.04] transition-all flex items-center gap-1.5 group"
              >
                <span className="text-[9px] text-gold-400/60 font-mono group-hover:text-gold-300">
                  {item.number}
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Right Action Pill */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#certificate"
              className="px-3.5 py-1.5 rounded-full border border-gold-400/30 bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 hover:text-gold-200 text-xs tracking-wider font-medium transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(223,194,122,0.1)]"
            >
              <Sparkles className="w-3 h-3 text-gold-400" />
              <span>Certificate</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-ivory-100 hover:text-gold-300 hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-midnight-950/95 backdrop-blur-2xl border-b border-gold-400/15 px-6 py-6 transition-all animate-fadeIn">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 border-b border-white/[0.04] text-sm uppercase tracking-widest text-ivory-200/80 hover:text-gold-300 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-gold-400/70">{item.number}</span>
                    <span>{item.label}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/30" />
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#certificate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 rounded-lg border border-gold-400/30 bg-gold-500/15 text-gold-300 text-center text-xs tracking-widest uppercase font-semibold block"
                >
                  View Certificate of Arrival
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
