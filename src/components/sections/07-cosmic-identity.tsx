"use client";

import React from "react";
import { Sparkles, Compass, ShieldAlert, Award, Star, Flame } from "lucide-react";

export const Section07CosmicIdentity: React.FC = () => {
  return (
    <section id="cosmic-identity" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto relative">
      {/* Chapter Marker */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <span className="text-xs uppercase font-mono tracking-[0.3em] text-gold-400">
          CHAPTER 06
        </span>
        <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-[0.15em] text-ivory-100 uppercase">
          Her Cosmic Identity
        </h2>
        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        <p className="text-sm sm:text-base font-cormorant italic text-ivory-200/80 max-w-2xl font-light">
          "Archetypes, numbers, and celestial symbolism woven into the fabric of November 20, 2007."
        </p>
      </div>

      {/* Science vs Symbolism Editorial Advisory */}
      <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-midnight-900/60 border border-gold-400/20 backdrop-blur-md flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
        <div className="text-xs leading-relaxed text-ivory-200/80 font-light">
          <strong className="text-gold-300 font-medium uppercase font-mono tracking-wider mr-2">
            Editorial Distinction:
          </strong>
          The planetary coordinates and lunar calculations in Chapter 03 represent scientifically verified astrophysics. The interpretations below represent cultural traditions, ancient mythic archetypes, and symbolic numerological frameworks celebrated across human history.
        </div>
      </div>

      {/* Grid of Cosmic Identity Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Pillar 1: Western Zodiac - Scorpio */}
        <div className="p-6 sm:p-8 rounded-3xl editorial-card flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-gold-400/10 text-gold-300">
                Western Zodiac
              </span>
              <span className="text-xs font-mono text-white/40">Oct 23 – Nov 21</span>
            </div>

            <h3 className="font-editorial text-2xl font-bold text-ivory-100 group-hover:text-gold-300 transition-colors">
              Scorpio (The Alchemist)
            </h3>

            <div className="flex items-center gap-2 text-xs text-gold-400 font-mono mt-1">
              <span>Element: Water</span>
              <span>•</span>
              <span>Quality: Fixed</span>
              <span>•</span>
              <span>Ruler: Pluto & Mars</span>
            </div>

            <p className="text-xs text-ivory-200/80 font-light mt-4 leading-relaxed">
              Born under the fixed water sign of Scorpio, Divya's astrological profile represents profound emotional depth, unwavering loyalty, keen intuitive discernment, and remarkable personal magnetism. Scorpios are natural truth-seekers with an inner resilience capable of transforming any challenge into strength.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
            {["Intuitive", "Passionate", "Fiercely Loyal", "Perceptive"].map((trait) => (
              <span key={trait} className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-white/70">
                {trait}
              </span>
            ))}
          </div>
        </div>

        {/* Pillar 2: Life Path Number 4 & Master 22 */}
        <div className="p-6 sm:p-8 rounded-3xl editorial-card flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-gold-400/10 text-gold-300">
                Life Path Numerology
              </span>
              <span className="text-xs font-mono text-gold-400 font-bold">20 + 11 + 2007</span>
            </div>

            <h3 className="font-editorial text-2xl font-bold text-ivory-100 group-hover:text-gold-300 transition-colors">
              Life Path 4 (The Builder)
            </h3>

            <div className="text-xs text-gold-400 font-mono mt-1">
              (2+0) + (1+1) + (2+0+0+7) = 2 + 2 + 9 = 13 → 4
            </div>

            <p className="text-xs text-ivory-200/80 font-light mt-4 leading-relaxed">
              In Pythagorean numerology, the Number 4 represents foundational strength, dependable wisdom, integrity, and structured creativity. People with Life Path 4 are the pillars that others lean upon—architects of lasting ideas and loyal friendships. (If preserving Master Number 11: 2 + 11 + 9 = 22, the legendary Master Builder archetype!).
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
            {["Steadfast", "Architect of Dreams", "Honest", "Practical"].map((trait) => (
              <span key={trait} className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-white/70">
                {trait}
              </span>
            ))}
          </div>
        </div>

        {/* Pillar 3: Birth Day Number 20 */}
        <div className="p-6 sm:p-8 rounded-3xl editorial-card flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-gold-400/10 text-gold-300">
                Birth Day Vibration
              </span>
              <span className="text-xs font-mono text-white/40">20th of the Month</span>
            </div>

            <h3 className="font-editorial text-2xl font-bold text-ivory-100 group-hover:text-gold-300 transition-colors">
              Day 20 (The Peacemaker)
            </h3>

            <div className="text-xs text-gold-400 font-mono mt-1">
              Vibration of 2 with the amplification of 0
            </div>

            <p className="text-xs text-ivory-200/80 font-light mt-4 leading-relaxed">
              The number 20 brings a refined sensitivity, natural diplomatic grace, and a deep appreciation for beauty, music, and emotional harmony. Those born on the 20th excel at bringing disparate people together with gentle understanding and warmth.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
            {["Diplomatic", "Empathetic", "Harmonious", "Artistic"].map((trait) => (
              <span key={trait} className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-white/70">
                {trait}
              </span>
            ))}
          </div>
        </div>

        {/* Pillar 4: Tuesday Weekday Symbolism */}
        <div className="p-6 sm:p-8 rounded-3xl editorial-card flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-gold-400/10 text-gold-300">
                Weekday Lore
              </span>
              <span className="text-xs font-mono text-white/40">Mardi / Mangalavara</span>
            </div>

            <h3 className="font-editorial text-2xl font-bold text-ivory-100 group-hover:text-gold-300 transition-colors">
              Tuesday (Child of Grace & Courage)
            </h3>

            <div className="text-xs text-gold-400 font-mono mt-1">
              Traditional Ruler: Mars (Mangala)
            </div>

            <p className="text-xs text-ivory-200/80 font-light mt-4 leading-relaxed">
              Named after the Norse god Tyr and Latin Martis, Tuesday signifies vital courage, energetic drive, and purpose. In Indian classical traditions (Mangalavara), Tuesday is revered for dynamic spirit and inner bravery.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
            {["Courageous", "Dynamic", "Spirited", "Direct"].map((trait) => (
              <span key={trait} className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-white/70">
                {trait}
              </span>
            ))}
          </div>
        </div>

        {/* Pillar 5: Chinese Zodiac - Fire Pig */}
        <div className="p-6 sm:p-8 rounded-3xl editorial-card flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-gold-400/10 text-gold-300">
                Eastern Zodiac
              </span>
              <span className="text-xs font-mono text-white/40">Ding Hai (丁亥)</span>
            </div>

            <h3 className="font-editorial text-2xl font-bold text-ivory-100 group-hover:text-gold-300 transition-colors">
              The Fire Boar / Pig
            </h3>

            <div className="text-xs text-gold-400 font-mono mt-1">
              Element: Yin Fire • 2007 Lunar Cycle
            </div>

            <p className="text-xs text-ivory-200/80 font-light mt-4 leading-relaxed">
              2007 was the Year of the Fire Pig (known as the Golden Pig in traditional folklore). Fire Pigs are celebrated for immense generosity, warm hospitality, love of celebration, sincerity, and unwavering perseverance in the pursuit of their dreams.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
            {["Generous", "Warm-Hearted", "Diligent", "Joyful"].map((trait) => (
              <span key={trait} className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-white/70">
                {trait}
              </span>
            ))}
          </div>
        </div>

        {/* Pillar 6: Name Etymology - DIVYA */}
        <div className="p-6 sm:p-8 rounded-3xl editorial-card flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-gold-400/10 text-gold-300">
                Sanskrit Etymology
              </span>
              <span className="text-xs font-mono text-white/40">दिव्या • Divine Radiance</span>
            </div>

            <h3 className="font-editorial text-2xl font-bold text-ivory-100 group-hover:text-gold-300 transition-colors">
              The Meaning of "Divya"
            </h3>

            <div className="text-xs text-gold-400 font-mono mt-1">
              From the Sanskrit root 'Div' (To Shine)
            </div>

            <p className="text-xs text-ivory-200/80 font-light mt-4 leading-relaxed">
              In classical Sanskrit, 'Divya' translates to "celestial, divine, luminous, and extraordinary." It evokes heavenly starlight and a pure, radiant presence—a name that effortlessly harmonizes with the celestial time capsule crafted for her arrival.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
            {["Luminous", "Divine", "Celestial Light", "Pure"].map((trait) => (
              <span key={trait} className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-white/70">
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
