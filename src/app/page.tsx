"use client";

import React from "react";
import { Section01Arrival } from "@/components/sections/01-arrival";
import { Section02DayToRemember } from "@/components/sections/02-day-to-remember";
import { Section03WorldIn2007 } from "@/components/sections/03-world-in-2007";
import { Section04SkyAboveBengaluru } from "@/components/sections/04-sky-above-bengaluru";
import { Section05SoundOf2007 } from "@/components/sections/05-sound-of-2007";
import { Section06LifeIn2007 } from "@/components/sections/06-life-in-2007";
import { Section07CosmicIdentity } from "@/components/sections/07-cosmic-identity";
import { Section08Certificate } from "@/components/sections/08-certificate";
import { Section09FinalMessage } from "@/components/sections/09-final-message";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 01 — THE ARRIVAL */}
      <Section01Arrival />

      {/* Subtle Celestial Divider */}
      <div className="w-full flex items-center justify-center my-8 opacity-30 pointer-events-none">
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        <span className="mx-4 text-xs font-mono text-gold-400">✦</span>
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      </div>

      {/* SECTION 02 — A DAY TO REMEMBER */}
      <Section02DayToRemember />

      {/* Subtle Celestial Divider */}
      <div className="w-full flex items-center justify-center my-8 opacity-30 pointer-events-none">
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        <span className="mx-4 text-xs font-mono text-gold-400">✦</span>
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      </div>

      {/* SECTION 03 — THE WORLD SHE ARRIVED INTO */}
      <Section03WorldIn2007 />

      {/* Subtle Celestial Divider */}
      <div className="w-full flex items-center justify-center my-8 opacity-30 pointer-events-none">
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        <span className="mx-4 text-xs font-mono text-gold-400">✦</span>
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      </div>

      {/* SECTION 04 — THE SKY ABOVE BENGALURU */}
      <Section04SkyAboveBengaluru />

      {/* Subtle Celestial Divider */}
      <div className="w-full flex items-center justify-center my-8 opacity-30 pointer-events-none">
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        <span className="mx-4 text-xs font-mono text-gold-400">✦</span>
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      </div>

      {/* SECTION 05 — THE SOUND OF 2007 */}
      <Section05SoundOf2007 />

      {/* Subtle Celestial Divider */}
      <div className="w-full flex items-center justify-center my-8 opacity-30 pointer-events-none">
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        <span className="mx-4 text-xs font-mono text-gold-400">✦</span>
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      </div>

      {/* SECTION 06 — LIFE IN 2007 */}
      <Section06LifeIn2007 />

      {/* Subtle Celestial Divider */}
      <div className="w-full flex items-center justify-center my-8 opacity-30 pointer-events-none">
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        <span className="mx-4 text-xs font-mono text-gold-400">✦</span>
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      </div>

      {/* SECTION 07 — HER COSMIC IDENTITY */}
      <Section07CosmicIdentity />

      {/* Subtle Celestial Divider */}
      <div className="w-full flex items-center justify-center my-8 opacity-30 pointer-events-none">
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        <span className="mx-4 text-xs font-mono text-gold-400">✦</span>
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      </div>

      {/* SECTION 08 — HER CERTIFICATE OF ARRIVAL */}
      <Section08Certificate />

      {/* Subtle Celestial Divider */}
      <div className="w-full flex items-center justify-center my-8 opacity-30 pointer-events-none">
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        <span className="mx-4 text-xs font-mono text-gold-400">✦</span>
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      </div>

      {/* SECTION 09 — THE FINAL MESSAGE */}
      <Section09FinalMessage />
    </div>
  );
}
