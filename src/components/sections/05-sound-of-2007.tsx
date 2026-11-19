"use client";

import React from "react";
import { Sparkles, Disc, Radio, Music } from "lucide-react";
import { VinylPlayer } from "@/components/ui/vinyl-player";

export const Section05SoundOf2007: React.FC = () => {
  return (
    <section id="the-sound" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto relative">
      {/* Chapter Marker */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <span className="text-xs uppercase font-mono tracking-[0.3em] text-gold-400">
          CHAPTER 04
        </span>
        <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-[0.15em] text-ivory-100 uppercase">
          The Sound of 2007
        </h2>
        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        <p className="text-sm sm:text-base font-cormorant italic text-ivory-200/80 max-w-2xl font-light">
          "November 2007 was a golden zenith of melody: 'Aankhon Mein Teri' serenaded India, 'Tum Se Hi' filled the autumn airwaves, and Alicia Keys ruled the world with 'No One'."
        </p>
      </div>

      {/* Main Luxury Interactive Turntable & Audio Console */}
      <VinylPlayer />

      {/* Album Releases of November 2007 */}
      <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-midnight-900/60 border border-gold-400/20 backdrop-blur-xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Music className="w-4 h-4 text-gold-400" />
            <h3 className="font-editorial text-lg font-semibold tracking-wider text-ivory-100 uppercase">
              Major Album Releases of November 2007
            </h3>
          </div>
          <span className="text-xs font-mono text-white/40">Worldwide Distribution</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Om Shanti Om",
              artist: "Vishal-Shekhar",
              releaseDate: "Nov 9, 2007 (Theatrical)",
              highlight: "Aankhon Mein Teri, Dard-e-Disco, Main Agar Kahoon",
              tag: "Bollywood Landmark",
            },
            {
              title: "As I Am",
              artist: "Alicia Keys",
              releaseDate: "Nov 13, 2007",
              highlight: "No One, Like You'll Never See Me Again",
              tag: "Global #1 Album",
            },
            {
              title: "Spirit",
              artist: "Leona Lewis",
              releaseDate: "Nov 9, 2007",
              highlight: "Bleeding Love, Better in Time",
              tag: "Record UK Debut",
            },
            {
              title: "Mungaru Male",
              artist: "Mano Murthy & Sonu Nigam",
              releaseDate: "2007 Evergreen Phenomenon",
              highlight: "Anisuthide, Ondu Malebillu",
              tag: "Bengaluru Cult Classic",
            },
          ].map((album) => (
            <div
              key={album.title}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-gold-400/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 text-gold-300">
                  {album.tag}
                </span>
                <h4 className="font-editorial text-lg font-bold text-ivory-100 mt-2">
                  {album.title}
                </h4>
                <div className="text-xs text-gold-300 font-medium">{album.artist}</div>
                <div className="text-[10px] text-white/40 font-mono mt-0.5">{album.releaseDate}</div>
              </div>
              <div className="mt-3 pt-3 border-t border-white/5 text-[11px] text-ivory-200/70 font-light italic">
                {album.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
