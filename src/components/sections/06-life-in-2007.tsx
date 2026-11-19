"use client";

import React, { useState } from "react";
import { Smartphone, Monitor, Sparkles, Coffee, Users, Film, Tv, DollarSign, TrendingUp } from "lucide-react";
import { life2007Artifacts, priceComparisons2007 } from "@/data/life-2007-data";

export const Section06LifeIn2007: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"artifacts" | "prices" | "cinema">("artifacts");

  return (
    <section id="life-2007" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto relative">
      {/* Chapter Marker */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <span className="text-xs uppercase font-mono tracking-[0.3em] text-gold-400">
          CHAPTER 05
        </span>
        <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-[0.15em] text-ivory-100 uppercase">
          Life in 2007
        </h2>
        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        <p className="text-sm sm:text-base font-cormorant italic text-ivory-200/80 max-w-2xl font-light">
          "A snapshot of everyday reality: click-wheels, Orkut scraps, Darshini coffee, and a gold price of just ₹10,250 for 10 grams."
        </p>
      </div>

      {/* Navigation Pills */}
      <div className="flex items-center justify-center gap-2 mb-12">
        {[
          { key: "artifacts", label: "Gadgets, Culture & Fashion" },
          { key: "prices", label: "2007 vs Today Prices" },
          { key: "cinema", label: "Cinema & Television" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as "artifacts" | "prices" | "cinema")}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
              activeTab === tab.key
                ? "bg-gold-500/20 border border-gold-400/40 text-gold-300 shadow-[0_0_15px_rgba(223,194,122,0.15)]"
                : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "artifacts" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {life2007Artifacts.map((art) => (
            <div
              key={art.title}
              className="p-6 rounded-2xl editorial-card flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-gold-400/10 text-gold-300">
                    {art.category}
                  </span>
                  <Sparkles className="w-4 h-4 text-gold-400/60 group-hover:text-gold-300 transition-colors" />
                </div>

                <h4 className="font-editorial text-xl font-bold text-ivory-100 group-hover:text-gold-200 transition-colors">
                  {art.title}
                </h4>

                <div className="text-xs text-gold-400 font-mono mt-1">{art.highlight}</div>

                <p className="text-xs text-ivory-200/80 font-light mt-3 leading-relaxed">
                  {art.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-white/40">
                Verified 2007 Artifact
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "prices" && (
        <div className="rounded-3xl border border-gold-400/20 bg-midnight-900/80 backdrop-blur-xl p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <h3 className="font-editorial text-xl font-semibold text-ivory-100">
                Historical Price Index (November 2007)
              </h3>
              <p className="text-xs text-white/50 mt-0.5">
                Economic reality check: how everyday living costs transformed in India & Bengaluru
              </p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/10 text-gold-300 text-xs font-mono">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Inflation & Value Shift</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
            {priceComparisons2007.map((item) => (
              <div
                key={item.item}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold-400/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-medium text-ivory-200/80">{item.item}</span>
                  <div className="flex items-baseline gap-3 mt-3">
                    <span className="font-editorial text-2xl font-bold gold-gradient-text">
                      {item.price2007}
                    </span>
                    <span className="text-xs text-white/40 font-mono">in Nov 2007</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-white/50">Today: {item.priceToday}</span>
                  <span className="text-gold-400 font-semibold">{item.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "cinema" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-midnight-900/70 border border-gold-400/20 backdrop-blur-xl space-y-4">
            <div className="flex items-center gap-2">
              <Film className="w-5 h-5 text-gold-400" />
              <h3 className="font-editorial text-xl font-bold text-ivory-100 uppercase tracking-wider">
                The Silver Screen of Nov 2007
              </h3>
            </div>
            <p className="text-xs text-ivory-200/80 font-light leading-relaxed">
              Cinema was in an iconic renaissance. Farah Khan's grand reincarnation drama <span className="text-gold-300 font-medium">Om Shanti Om</span> had just debuted on Diwali alongside Sanjay Leela Bhansali's <span className="text-gold-300 font-medium">Saawariya</span>. Imtiaz Ali's <span className="text-gold-300 font-medium">Jab We Met</span> was sweeping hearts across the subcontinent. Internationally, the Coen Brothers' masterpiece <span className="text-gold-300 font-medium">No Country for Old Men</span>, Disney's <span className="text-gold-300 font-medium">Enchanted</span>, and Ridley Scott's <span className="text-gold-300 font-medium">American Gangster</span> ruled box offices.
            </p>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-gold-300/90 font-mono">
              Bengaluru Theaters: Rex, Urvashi 4K, Cauvery, PVR Forum Koramangala
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-midnight-900/70 border border-gold-400/20 backdrop-blur-xl space-y-4">
            <div className="flex items-center gap-2">
              <Tv className="w-5 h-5 text-gold-400" />
              <h3 className="font-editorial text-xl font-bold text-ivory-100 uppercase tracking-wider">
                Television & Living Rooms
              </h3>
            </div>
            <p className="text-xs text-ivory-200/80 font-light leading-relaxed">
              Families congregated around boxy CRT television sets in the evening. In India, reality singing sensations like <span className="text-gold-300 font-medium">Sa Re Ga Ma Pa Challenge 2007</span> were gripping millions of voters every weekend, alongside prime-time serials and cricket broadcasts. Globally, serialized dramas like <span className="text-gold-300 font-medium">Heroes</span>, <span className="text-gold-300 font-medium">Lost</span>, and the newly premiered <span className="text-gold-300 font-medium">Gossip Girl</span> were defining water-cooler conversations.
            </p>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-gold-300/90 font-mono">
              Cable TV Era: Set-top boxes were rare; analog coaxial cables reigned
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
