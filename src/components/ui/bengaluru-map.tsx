"use client";

import React, { useState } from "react";
import { MapPin, Compass, Sun, Wind, Navigation } from "lucide-react";

interface Landmark {
  name: string;
  x: number;
  y: number;
  type: string;
  memory2007: string;
}

const landmarks: Landmark[] = [
  {
    name: "Vidhana Soudha",
    x: 48,
    y: 38,
    type: "Seat of Governance",
    memory2007: "Granite neo-Dravidian marvel; epicenter of political drama when President's Rule took effect on Nov 20, 2007.",
  },
  {
    name: "Cubbon Park & Bamboo Groves",
    x: 52,
    y: 45,
    type: "Botanical Lungs",
    memory2007: "Morning mist drifting through century-old silver oaks and Gulmohar trees as 10:56 AM approached.",
  },
  {
    name: "MG Road & Brigade Road",
    x: 58,
    y: 48,
    type: "Heart of Town",
    memory2007: "Bustling with classic music stores like Planet M and early CCD hangouts before the Namma Metro viaducts were constructed.",
  },
  {
    name: "Ulsoor Lake",
    x: 65,
    y: 40,
    type: "Heritage Waterway",
    memory2007: "Calm ripples reflecting the golden morning November sun across eastern Bengaluru.",
  },
  {
    name: "Lalbagh Botanical Gardens",
    x: 46,
    y: 62,
    type: "Floral Heritage",
    memory2007: "The historic Glass House surrounded by blooming chrysanthemums in the crisp post-monsoon air.",
  },
  {
    name: "Electronic City & Whitefield",
    x: 75,
    y: 75,
    type: "Tech Frontier",
    memory2007: "The Silicon Valley engine operating 24/7, powering software innovation across the globe.",
  },
];

export const BengaluruMap: React.FC = () => {
  const [activeLandmark, setActiveLandmark] = useState<Landmark | null>(landmarks[0]);

  return (
    <div className="rounded-2xl border border-gold-400/20 bg-midnight-900/70 backdrop-blur-xl p-6 relative overflow-hidden">
      {/* Header bar with coordinates */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-gold-400 animate-ping" />
            <h4 className="font-editorial text-lg font-semibold tracking-wider text-ivory-100 uppercase">
              Bengaluru, Karnataka
            </h4>
          </div>
          <p className="text-xs text-gold-300/80 font-mono mt-0.5">
            12.9716° N, 77.5946° E • Elevation 920m
          </p>
        </div>

        {/* Real Historical Weather Pill */}
        <div className="flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs">
          <Sun className="w-4 h-4 text-gold-400" />
          <span className="text-ivory-200">24°C • Pleasant Sunshine</span>
          <span className="text-white/30">|</span>
          <Wind className="w-3.5 h-3.5 text-lavender-300" />
          <span className="text-white/60">NE 9 km/h</span>
        </div>
      </div>

      {/* Map Graphic Canvas */}
      <div className="relative my-6 aspect-[16/10] w-full rounded-xl bg-midnight-950/80 border border-white/5 overflow-hidden flex items-center justify-center">
        {/* Subtle decorative grid lines */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(223, 194, 122, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(223, 194, 122, 0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* SVG Decorative Constellation & City Flow Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C6A152" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#060810" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50%" cy="50%" r="42%" fill="url(#mapGlow)" />

          {/* Connection vectors between historic nodes */}
          <path
            d="M 48 38 L 52 45 L 58 48 L 65 40 M 52 45 L 46 62 M 58 48 L 75 75"
            fill="none"
            stroke="rgba(223, 194, 122, 0.25)"
            strokeWidth="0.5"
            strokeDasharray="2,2"
          />
        </svg>

        {/* Bengaluru City Pulse Rings at Center */}
        <div className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-28 h-28 rounded-full border border-gold-400/20 animate-ping opacity-25" />
          <div className="w-48 h-48 rounded-full border border-lavender-400/10 -translate-x-10 -translate-y-10" />
        </div>

        {/* Interactive Landmark Pins */}
        {landmarks.map((landmark) => {
          const isSelected = activeLandmark?.name === landmark.name;
          return (
            <button
              key={landmark.name}
              onClick={() => setActiveLandmark(landmark)}
              onMouseEnter={() => setActiveLandmark(landmark)}
              style={{ left: `${landmark.x}%`, top: `${landmark.y}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group z-10 focus:outline-none`}
              aria-label={`Inspect ${landmark.name}`}
            >
              <div
                className={`relative flex items-center justify-center rounded-full transition-all ${
                  isSelected
                    ? "w-8 h-8 bg-gold-500 text-midnight-950 shadow-[0_0_20px_rgba(223,194,122,0.8)] scale-110"
                    : "w-6 h-6 bg-midnight-900 border border-gold-400/50 text-gold-300 hover:scale-110 hover:border-gold-300"
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <span
                className={`absolute top-full mt-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] tracking-wider uppercase px-2 py-0.5 rounded backdrop-blur-md transition-opacity pointer-events-none ${
                  isSelected
                    ? "bg-midnight-950/90 text-gold-200 border border-gold-400/30 opacity-100"
                    : "opacity-0 group-hover:opacity-100 bg-midnight-900/80 text-white/70"
                }`}
              >
                {landmark.name}
              </span>
            </button>
          );
        })}

        {/* Compass Rose Accent */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 text-gold-400/50 text-[10px] font-mono">
          <Compass className="w-4 h-4" />
          <span>BLR GRID 2007</span>
        </div>
      </div>

      {/* Active Landmark Detail Footer */}
      {activeLandmark && (
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 transition-all animate-fadeIn">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-300">
              {activeLandmark.name}
            </span>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-gold-400/10 text-gold-400">
              {activeLandmark.type}
            </span>
          </div>
          <p className="text-xs text-ivory-200/80 mt-1.5 leading-relaxed font-light">
            {activeLandmark.memory2007}
          </p>
        </div>
      )}
    </div>
  );
};
