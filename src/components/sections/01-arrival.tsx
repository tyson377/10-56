"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowDown, Volume2 } from "lucide-react";
import { ambientAudio } from "@/lib/audio-engine";

export const Section01Arrival: React.FC = () => {
  const [entered, setEntered] = useState(false);

  const handleEnter = async () => {
    setEntered(true);
    if (ambientAudio) {
      await ambientAudio.start();
    }
    const target = document.getElementById("the-day");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="arrival"
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-20 pb-16"
    >
      {/* Atmospheric Radial Nebula Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] bg-gradient-to-tr from-lavender-500/10 via-rose-500/10 to-gold-400/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Floating subtle constellation rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full border border-gold-400/10 animate-spin-slow" />
        <div className="absolute w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full border border-dashed border-lavender-300/10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-8 sm:space-y-10">
        {/* Monogram / Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/25 bg-midnight-900/60 backdrop-blur-md shadow-[0_0_20px_rgba(223,194,122,0.1)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-gold-300">
            A Personalised Digital Time Capsule
          </span>
        </motion.div>

        {/* Phase 1: Exact Date */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="space-y-2"
        >
          <h2 className="font-editorial text-2xl sm:text-4xl md:text-5xl font-light tracking-[0.25em] text-ivory-200/90 uppercase">
            20 NOVEMBER 2007
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
        </motion.div>

        {/* Phase 2: Poetic Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.8 }}
          className="font-cormorant italic text-xl sm:text-2xl md:text-3xl text-ivory-100/90 max-w-2xl font-light leading-relaxed"
        >
          "At 10:56 AM, somewhere in Bengaluru, a beautiful story began."
        </motion.p>

        {/* Phase 3: The Grand Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 1.4 }}
          className="pt-2 sm:pt-4"
        >
          <span className="text-xs sm:text-sm font-mono tracking-[0.4em] uppercase text-gold-400/90 block mb-2 font-medium">
            Her name was
          </span>
          <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl font-bold tracking-[0.14em] text-transparent bg-clip-text bg-gradient-to-r from-[#FAF7F2] via-[#DFC27A] to-[#FAF7F2] drop-shadow-[0_10px_35px_rgba(223,194,122,0.35)]">
            DIVYA
          </h1>
        </motion.div>

        {/* Phase 4: Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.0 }}
          className="pt-6 sm:pt-8"
        >
          <button
            onClick={handleEnter}
            className="group relative px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-gold-500 via-rose-400 to-lavender-400 p-[1.5px] transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_35px_rgba(223,194,122,0.25)] focus:outline-none"
          >
            <div className="px-8 py-3.5 rounded-full bg-midnight-950/90 group-hover:bg-transparent transition-colors duration-500 flex items-center gap-3">
              <span className="font-editorial text-xs sm:text-sm font-bold tracking-[0.25em] text-ivory-100 group-hover:text-midnight-950 uppercase transition-colors">
                ENTER HER WORLD
              </span>
              <ArrowDown className="w-4 h-4 text-gold-400 group-hover:text-midnight-950 transition-colors group-hover:translate-y-1" />
            </div>
          </button>
        </motion.div>
      </div>

      {/* Bottom Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-white/40">
          Scroll to Travel in Time
        </span>
        <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-gold-400 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};
