"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";
import { ambientAudio } from "@/lib/audio-engine";

export const AmbientAudioControl: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const toggleSound = async () => {
    if (!ambientAudio) return;
    const playing = await ambientAudio.toggle();
    setIsPlaying(playing);
    setHasInteracted(true);
  };

  useEffect(() => {
    const handleFirstClick = () => {
      // Optional sound prompt
    };
    window.addEventListener("click", handleFirstClick, { once: true });
    return () => window.removeEventListener("click", handleFirstClick);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <button
        onClick={toggleSound}
        className={`group flex items-center gap-3 px-4 py-2.5 rounded-full border transition-all duration-500 backdrop-blur-md shadow-2xl ${
          isPlaying
            ? "bg-midnight-850/80 border-gold-400/40 text-gold-300 shadow-[0_0_25px_rgba(223,194,122,0.25)]"
            : "bg-midnight-950/70 border-white/10 text-white/70 hover:border-gold-400/30 hover:text-white"
        }`}
        title={isPlaying ? "Mute Ethereal Ambience" : "Play Ethereal Ambience"}
        aria-label="Toggle Cosmic Atmosphere"
      >
        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <>
              <Volume2 className="w-4 h-4 text-gold-400 animate-pulse" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
            </>
          ) : (
            <VolumeX className="w-4 h-4 text-white/50 group-hover:text-gold-300" />
          )}
        </div>

        <div className="flex flex-col text-left">
          <span className="text-[11px] font-medium tracking-widest uppercase text-ivory-100 flex items-center gap-1.5">
            {isPlaying ? "Cosmic Soundscape" : "Ambient Sound"}
            {isPlaying && (
              <span className="flex items-end gap-0.5 h-2.5">
                <span className="w-0.5 bg-gold-400 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-full" />
                <span className="w-0.5 bg-gold-400 rounded-full animate-[pulse_1.2s_ease-in-out_infinite] h-2/3" />
                <span className="w-0.5 bg-gold-400 rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-4/5" />
              </span>
            )}
          </span>
          <span className="text-[9px] text-white/40 tracking-wider">
            {isPlaying ? "2007 Ethereal Resonance" : "Click to Immerse"}
          </span>
        </div>
      </button>
    </div>
  );
};
