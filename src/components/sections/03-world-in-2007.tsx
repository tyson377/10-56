"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Cpu, Users, Newspaper, Landmark, CheckCircle2, Award } from "lucide-react";
import { historicalData, leaders2007, worldNumbers2007, HistoricalEvent } from "@/data/historical-data";

export const Section03WorldIn2007: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "World News", "Technology", "India & Bengaluru", "Science & Space", "Culture"];

  const filteredEvents =
    selectedCategory === "All"
      ? historicalData
      : historicalData.filter((ev) => ev.category === selectedCategory);

  return (
    <section id="the-world" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto relative">
      {/* Chapter Marker */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <span className="text-xs uppercase font-mono tracking-[0.3em] text-gold-400">
          CHAPTER 02
        </span>
        <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-[0.15em] text-ivory-100 uppercase">
          The World She Arrived Into
        </h2>
        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        <p className="text-sm sm:text-base font-cormorant italic text-ivory-200/80 max-w-2xl font-light">
          "November 20, 2007 was a historic Tuesday: e-books were born, royals celebrated 60 years of love, and technology was on the brink of revolution."
        </p>
      </div>

      {/* World Leaders Editorial Spread */}
      <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-midnight-900/60 border border-gold-400/20 backdrop-blur-xl">
        <div className="flex items-center gap-2 mb-6">
          <Landmark className="w-4 h-4 text-gold-400" />
          <h3 className="font-editorial text-lg font-semibold tracking-wider text-ivory-100 uppercase">
            World Leadership on 20 November 2007
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {leaders2007.map((leader) => (
            <div
              key={leader.role}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-gold-400/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-gold-400/80 block">
                  {leader.role}
                </span>
                <div className="font-editorial text-base font-bold text-ivory-100 mt-1">
                  {leader.name}
                </div>
              </div>
              <p className="text-[11px] text-white/50 mt-2 font-light">{leader.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* World Numbers Snapshot */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
        {worldNumbers2007.map((stat) => (
          <div
            key={stat.label}
            className="p-5 rounded-2xl bg-midnight-900/50 border border-white/5 text-center flex flex-col justify-center"
          >
            <div className="font-editorial text-2xl sm:text-3xl font-bold gold-gradient-text">
              {stat.value}
            </div>
            <div className="text-xs uppercase tracking-wider text-ivory-100 font-medium mt-1">
              {stat.label}
            </div>
            <div className="text-[10px] text-white/40 font-mono mt-0.5">{stat.context}</div>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-gold-500/20 border border-gold-400/40 text-gold-300 shadow-[0_0_15px_rgba(223,194,122,0.15)]"
                  : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="text-xs font-mono text-gold-400/70">
          Showing {filteredEvents.length} Researched Historical Records
        </div>
      </div>

      {/* Historical Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div
            key={event.title}
            className="p-6 rounded-2xl editorial-card flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-gold-400/10 text-gold-300 font-medium tracking-wider">
                  {event.tag}
                </span>
                <span className="text-[10px] text-white/40 font-mono">{event.category}</span>
              </div>

              <h4 className="font-editorial text-xl font-bold text-ivory-100 group-hover:text-gold-200 transition-colors leading-snug">
                {event.title}
              </h4>

              <p className="text-xs text-ivory-200/80 font-light leading-relaxed">
                {event.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
              <div className="text-[11px] text-gold-300/90 italic font-cormorant flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{event.impact}</span>
              </div>
              <div className="text-[9px] font-mono text-white/40">
                Source: {event.source}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
