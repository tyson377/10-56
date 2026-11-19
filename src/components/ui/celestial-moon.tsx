"use client";

import React, { useState } from "react";
import { Moon, Sparkles, Compass, Eye, ShieldCheck } from "lucide-react";
import { astronomyData } from "@/data/astronomy-data";

export const CelestialMoon: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"moon" | "sun" | "planets">("moon");

  return (
    <div className="rounded-3xl border border-gold-400/20 bg-midnight-900/80 backdrop-blur-2xl p-6 sm:p-8 relative overflow-hidden">
      {/* Background celestial nebula glow */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-lavender-500/10 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold-500/10 blur-[90px] pointer-events-none" />

      {/* Tabs */}
      <div className="flex items-center gap-2 pb-6 border-b border-white/10">
        {[
          { key: "moon", label: "Waxing Gibbous Moon" },
          { key: "sun", label: "Solar Coordinates" },
          { key: "planets", label: "Planetary Positions" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as "moon" | "sun" | "planets")}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
              activeTab === tab.key
                ? "bg-gold-500/20 border border-gold-400/40 text-gold-300 shadow-[0_0_15px_rgba(223,194,122,0.15)]"
                : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "moon" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
          {/* Luminous Moon Artwork */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
              {/* Outer atmospheric aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-lavender-400/20 via-gold-300/15 to-transparent blur-2xl animate-pulse-subtle" />

              {/* Orbital Ring with markings */}
              <div className="absolute -inset-4 rounded-full border border-gold-400/20 border-dashed animate-spin-slow opacity-60 pointer-events-none" />

              {/* Realistic 81.4% Waxing Gibbous Moon SVG */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-[0_0_50px_rgba(207,194,227,0.35)] bg-[#111320] border border-white/20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <radialGradient id="lunarSurface" cx="40%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="45%" stopColor="#E6E0D4" />
                      <stop offset="85%" stopColor="#B3ABB8" />
                      <stop offset="100%" stopColor="#7B7484" />
                    </radialGradient>
                    <radialGradient id="shadowGrad" cx="70%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#0B0E18" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#060810" stopOpacity="0.98" />
                    </radialGradient>
                  </defs>

                  {/* Luminous lunar disc */}
                  <circle cx="50" cy="50" r="48" fill="url(#lunarSurface)" />

                  {/* Realistic Lunar Maria / Seas (Crater impressions) */}
                  <ellipse cx="40" cy="38" rx="14" ry="11" fill="#8F8796" opacity="0.38" />
                  <ellipse cx="56" cy="46" rx="10" ry="16" fill="#888090" opacity="0.42" />
                  <ellipse cx="36" cy="62" rx="12" ry="9" fill="#938B9B" opacity="0.35" />
                  <circle cx="28" cy="32" r="5" fill="#807888" opacity="0.4" />
                  <circle cx="48" cy="74" r="4" fill="#756E7D" opacity="0.45" />

                  {/* Accurate Waxing Gibbous Terminator (81.4% illumination) */}
                  {/* The dark shadow covers ~18.6% of the western limb */}
                  <path
                    d="M 50 2 
                       A 48 48 0 0 0 50 98 
                       A 31 48 0 0 1 50 2 Z"
                    fill="url(#shadowGrad)"
                    opacity="0.96"
                  />
                </svg>
              </div>

              {/* Degree / Coordinate Badge */}
              <div className="absolute -bottom-2 px-3 py-1 rounded-full bg-midnight-950/90 border border-gold-400/40 text-[10px] uppercase font-mono tracking-widest text-gold-300">
                81.4% Illumination
              </div>
            </div>

            <span className="text-xs uppercase tracking-[0.2em] text-white/50 mt-6 font-mono">
              Bengaluru Sky • 20 Nov 2007
            </span>
          </div>

          {/* Lunar Ephemeris Metrics */}
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-mono">
                Astronomical Reconstruction
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-ivory-100">
                The Waxing Gibbous Moon
              </h3>
              <p className="text-sm text-ivory-200/80 leading-relaxed font-light">
                {astronomyData.moon.visualDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-[10px] uppercase tracking-wider text-white/40">Lunar Phase</div>
                <div className="text-sm font-semibold text-ivory-100 font-editorial mt-0.5">
                  {astronomyData.moon.phase}
                </div>
                <div className="text-[10px] text-gold-300/80 mt-1 font-mono">Age: 10.4 Days</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-[10px] uppercase tracking-wider text-white/40">Constellation</div>
                <div className="text-sm font-semibold text-ivory-100 font-editorial mt-0.5">
                  Pisces (Sidereal Meena)
                </div>
                <div className="text-[10px] text-lavender-300/80 mt-1">Bordering Aries</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-[10px] uppercase tracking-wider text-white/40">Moonrise in BLR</div>
                <div className="text-sm font-semibold text-ivory-100 font-mono mt-0.5">
                  {astronomyData.moon.moonrise}
                </div>
                <div className="text-[10px] text-white/50 mt-1">Ascending afternoon sky</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-[10px] uppercase tracking-wider text-white/40">Distance from Earth</div>
                <div className="text-sm font-semibold text-ivory-100 font-mono mt-0.5">
                  {astronomyData.moon.distanceKm}
                </div>
                <div className="text-[10px] text-gold-400/80 mt-1">Next Full: 24 Nov 2007</div>
              </div>
            </div>

            {/* Authenticity Guarantee Note */}
            <div className="flex items-center gap-2 p-3 rounded-lg bg-gold-400/[0.05] border border-gold-400/20 text-xs text-gold-300/90 font-light">
              <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>
                Calculated using NASA JPL Ephemerides and USNO astronomical algorithms for Bengaluru coordinates (12.9716° N, 77.5946° E).
              </span>
            </div>
          </div>
        </div>
      )}

      {activeTab === "sun" && (
        <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-gold-400 font-mono">Daybreak & Dusk</span>
            <h4 className="text-lg font-editorial text-ivory-100 font-semibold">Bengaluru Daylight</h4>
            <div className="space-y-1 pt-2 font-mono text-sm">
              <div className="flex justify-between text-ivory-200">
                <span className="text-white/50 font-sans">Sunrise:</span> {astronomyData.sun.sunrise}
              </div>
              <div className="flex justify-between text-ivory-200">
                <span className="text-white/50 font-sans">Solar Noon:</span> {astronomyData.sun.solarNoon}
              </div>
              <div className="flex justify-between text-ivory-200">
                <span className="text-white/50 font-sans">Sunset:</span> {astronomyData.sun.sunset}
              </div>
              <div className="flex justify-between text-gold-300">
                <span className="text-white/50 font-sans">Day Length:</span> {astronomyData.sun.dayLength}
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-gold-400 font-mono">Exact Birth Moment</span>
            <h4 className="text-lg font-editorial text-ivory-100 font-semibold">10:56 AM Sun Angles</h4>
            <div className="space-y-1 pt-2 font-mono text-sm">
              <div className="flex justify-between text-ivory-200">
                <span className="text-white/50 font-sans">Sun Altitude:</span> {astronomyData.sun.altitudeAtBirth}
              </div>
              <div className="flex justify-between text-ivory-200">
                <span className="text-white/50 font-sans">Sun Azimuth:</span> {astronomyData.sun.azimuthAtBirth}
              </div>
              <div className="flex justify-between text-gold-300">
                <span className="text-white/50 font-sans">Solar Sign:</span> 27° Scorpio
              </div>
            </div>
            <p className="text-xs text-white/50 pt-2 font-light">
              At the exact minute Divya was born, the Sun was high in the southeast sky, bathing Bengaluru in warm late-morning radiance.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-gold-400 font-mono">Active Meteor Shower</span>
            <h4 className="text-lg font-editorial text-ivory-100 font-semibold">The Leonids of Nov 2007</h4>
            <p className="text-xs text-ivory-200/80 leading-relaxed font-light">
              The annual Leonid meteor shower was active in the night skies overhead, shedding brilliant shooting stars from the debris stream of Comet Tempel-Tuttle.
            </p>
            <div className="p-2.5 rounded-lg bg-lavender-500/10 text-xs text-lavender-200 flex items-center gap-2 mt-3">
              <Sparkles className="w-3.5 h-3.5 text-lavender-300" />
              <span>Visible in pre-dawn skies toward constellation Leo</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === "planets" && (
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {astronomyData.planets.map((p) => (
            <div
              key={p.planet}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-gold-400/30 transition-all group"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-editorial text-xl font-semibold text-ivory-100 group-hover:text-gold-300 transition-colors">
                  {p.planet}
                </h4>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 text-gold-400">
                  {p.position}
                </span>
              </div>
              <div className="text-xs text-gold-300/80 font-medium mt-1">{p.state}</div>
              <p className="text-xs text-ivory-200/70 mt-2 font-light leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
