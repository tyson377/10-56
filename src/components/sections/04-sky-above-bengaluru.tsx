"use client";

import React from "react";
import { Sparkles, Moon, Sun, Orbit, Eye } from "lucide-react";
import { CelestialMoon } from "@/components/ui/celestial-moon";
import { astronomyData } from "@/data/astronomy-data";

export const Section04SkyAboveBengaluru: React.FC = () => {
  return (
    <section id="the-sky" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto relative">
      {/* Chapter Marker */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <span className="text-xs uppercase font-mono tracking-[0.3em] text-gold-400">
          CHAPTER 03
        </span>
        <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-[0.15em] text-ivory-100 uppercase">
          The Sky Above Bengaluru
        </h2>
        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        <p className="text-sm sm:text-base font-cormorant italic text-ivory-200/80 max-w-2xl font-light">
          "At 10:56 AM on November 20, 2007, an 81.4% waxing gibbous moon waited below the horizon while the Sun crowned the mid-morning skies at 54° altitude."
        </p>
      </div>

      {/* Main Interactive Astronomical Celestial Viewer */}
      <CelestialMoon />

      {/* Astronomical Highlights Timeline */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        {astronomyData.celestialEvents.map((ev) => (
          <div
            key={ev.name}
            className="p-6 rounded-2xl bg-midnight-900/60 border border-gold-400/20 backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-lavender-500/15 text-lavender-300">
                  {ev.dateRange}
                </span>
                <Sparkles className="w-4 h-4 text-gold-400" />
              </div>
              <h4 className="font-editorial text-xl font-bold text-ivory-100 mt-2">
                {ev.name}
              </h4>
              <p className="text-xs text-ivory-200/80 font-light mt-2 leading-relaxed">
                {ev.description}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 text-[10px] font-mono text-gold-300/80">
              Verified Sky Phenomenon • November 2007
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
