"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Send, ArrowUp, CheckCircle, MessageSquare } from "lucide-react";
import confetti from "canvas-confetti";

interface Wish {
  id: string;
  author: string;
  text: string;
  timestamp: string;
}

const defaultWishes: Wish[] = [
  {
    id: "1",
    author: "With Endless Love",
    text: "Divya, you brought light into this universe the moment you took your first breath in Bengaluru. May every year ahead be as luminous and radiant as your name.",
    timestamp: "Time Capsule Sealed",
  },
  {
    id: "2",
    author: "A Star in the Cosmos",
    text: "From that sunny Tuesday in 2007 to this very second, the world has been infinitely richer because your story exists within it. Happy Birthday!",
    timestamp: "Cosmic Blessing",
  },
];

export const Section09FinalMessage: React.FC = () => {
  const [wishes, setWishes] = useState<Wish[]>(defaultWishes);
  const [newAuthor, setNewAuthor] = useState("");
  const [newText, setNewText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("divya_bday_wishes");
      if (saved) {
        setWishes(JSON.parse(saved));
      }
    } catch (e) {
      // LocalStorage fallback
    }
  }, []);

  const handleCelebrate = () => {
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.7 },
      colors: ["#DFC27A", "#C6A152", "#DFBCC1", "#CFC2E3", "#FAF7F2", "#B3717B"],
    });
  };

  const handleAddWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newText.trim()) return;

    const newWish: Wish = {
      id: Date.now().toString(),
      author: newAuthor.trim() || "A Well-Wisher",
      text: newText.trim(),
      timestamp: "Just Now",
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    try {
      localStorage.setItem("divya_bday_wishes", JSON.stringify(updated));
    } catch (err) {}

    setNewAuthor("");
    setNewText("");
    setSubmitted(true);
    handleCelebrate();
    setTimeout(() => setSubmitted(false), 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="final-message" className="py-28 px-6 sm:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background soft ambient halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-rose-500/10 via-lavender-500/10 to-gold-400/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Chapter Marker */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16 relative z-10">
        <span className="text-xs uppercase font-mono tracking-[0.3em] text-gold-400">
          CHAPTER 08 — THE EPILOGUE
        </span>
        <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-[0.15em] text-ivory-100 uppercase">
          The Final Message
        </h2>
        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      </div>

      {/* Cinematic Emotional Typography Block */}
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 my-12">
        <p className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-light text-ivory-100 leading-snug tracking-wider">
          "Out of all the days in history, this was the day you arrived."
        </p>

        <p className="font-cormorant italic text-xl sm:text-3xl text-gold-200/90 leading-relaxed font-light max-w-3xl mx-auto">
          "The world was already moving, people were living their stories, music was playing, and somewhere in Bengaluru, yours was just beginning."
        </p>

        <div className="pt-8 sm:pt-12">
          <span className="text-xs sm:text-sm font-mono tracking-[0.35em] uppercase text-gold-400/80 block mb-2">
            With All Our Warmth & Joy
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[0.12em] text-transparent bg-clip-text bg-gradient-to-r from-[#FAF7F2] via-[#DFC27A] to-[#DFBCC1] drop-shadow-[0_10px_35px_rgba(223,194,122,0.4)]">
            Happy Birthday, Divya.
          </h1>
        </div>

        {/* Celebrate Confetti Trigger Button */}
        <div className="pt-6">
          <button
            onClick={handleCelebrate}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-rose-400 to-lavender-400 text-midnight-950 font-bold text-xs uppercase tracking-widest shadow-[0_0_30px_rgba(223,194,122,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 mx-auto focus:outline-none"
          >
            <Sparkles className="w-4 h-4 fill-current" />
            <span>Celebrate Her Journey</span>
          </button>
        </div>
      </div>

      {/* Interactive Time Capsule Wish Registry */}
      <div className="mt-20 max-w-3xl mx-auto rounded-3xl border border-gold-400/25 bg-midnight-900/70 backdrop-blur-2xl p-6 sm:p-10 relative z-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <MessageSquare className="w-5 h-5 text-gold-400" />
            <h3 className="font-editorial text-lg sm:text-xl font-semibold text-ivory-100 uppercase tracking-wider">
              Seal a Birthday Wish in Her Capsule
            </h3>
          </div>
          <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-gold-400/10 text-gold-300">
            Digital Guestbook
          </span>
        </div>

        {/* Add Wish Form */}
        <form onSubmit={handleAddWish} className="mt-6 space-y-4">
          <div>
            <input
              type="text"
              value={newAuthor}
              onChange={(e) => setNewAuthor(e.target.value)}
              placeholder="Your Name / Relationship (e.g., Mom & Dad, Best Friend)"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-ivory-100 placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-gold-400/50 transition-colors"
            />
          </div>

          <div>
            <textarea
              rows={3}
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              placeholder="Write an everlasting birthday wish for Divya..."
              required
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-ivory-100 placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-gold-400/50 transition-colors resize-none"
            />
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-white/40">
              {submitted ? (
                <span className="text-green-400 flex items-center gap-1 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" /> Wish sealed in time capsule!
                </span>
              ) : (
                "Saved forever in local archive"
              )}
            </span>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-gold-500/20 hover:bg-gold-500/30 border border-gold-400/40 text-gold-300 font-medium text-xs uppercase tracking-wider flex items-center gap-2 transition-all hover:scale-105 active:scale-95 focus:outline-none"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Seal Wish</span>
            </button>
          </div>
        </form>

        {/* Existing Wishes Feed */}
        <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
          <span className="text-xs uppercase font-mono tracking-wider text-white/50 block">
            Time Capsule Messages ({wishes.length})
          </span>

          <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
            {wishes.map((w) => (
              <div
                key={w.id}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-gold-400/20 transition-all space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-gold-300 font-editorial">{w.author}</span>
                  <span className="text-[10px] font-mono text-white/40">{w.timestamp}</span>
                </div>
                <p className="text-xs text-ivory-200/90 font-light leading-relaxed font-cormorant text-sm">
                  "{w.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Return to Top Button */}
      <div className="mt-20 flex flex-col items-center gap-3 relative z-10">
        <button
          onClick={scrollToTop}
          className="group p-3 rounded-full border border-gold-400/30 bg-midnight-900/80 hover:bg-gold-500/20 text-gold-300 hover:text-gold-200 transition-all shadow-[0_0_20px_rgba(223,194,122,0.15)] focus:outline-none"
          aria-label="Return to Beginning of Time Capsule"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
        <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-white/40">
          Return to Beginning
        </span>
      </div>

      {/* Footer Signature */}
      <footer className="mt-20 pt-8 border-t border-white/5 text-center text-xs font-mono text-white/40 space-y-2 relative z-10">
        <div>
          THE DAY DIVYA WAS BORN • 20 NOVEMBER 2007 • BENGALURU, INDIA
        </div>
        <div className="text-[10px] text-white/25">
          Dedicated with infinite warmth • A Living Digital Time Capsule
        </div>
      </footer>
    </section>
  );
};
