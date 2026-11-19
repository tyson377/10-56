"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Compass, Sparkles } from "lucide-react";
import { BengaluruMap } from "@/components/ui/bengaluru-map";
import { TimeCounter } from "@/components/ui/time-counter";

export const Section02DayToRemember: React.FC = () => {
  // November 2007 calendar generator
  // Nov 1, 2007 was a Thursday
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const daysInNov2007 = 30;
  const startDayOffset = 4; // Thursday = 4 (0=Su, 1=Mo, 2=Tu, 3=We, 4=Th)

  return (
    <section id="the-day" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto relative">
      {/* Chapter Marker */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <span className="text-xs uppercase font-mono tracking-[0.3em] text-gold-400">
          CHAPTER 01
        </span>
        <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-[0.15em] text-ivory-100 uppercase">
          A Day to Remember
        </h2>
        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        <p className="text-sm sm:text-base font-cormorant italic text-ivory-200/80 max-w-xl font-light">
          "The universe aligned, the clocks in Bengaluru ticked to 10:56, and the world welcomed Divya."
        </p>
      </div>

      {/* Hero Editorial Birth Spec Sheet */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="p-6 rounded-2xl bg-midnight-900/60 border border-gold-400/20 backdrop-blur-md relative overflow-hidden group hover:border-gold-400/40 transition-all">
          <div className="flex items-center gap-3 text-gold-400 mb-3">
            <Calendar className="w-5 h-5" />
            <span className="text-xs uppercase font-mono tracking-widest text-white/50">Date of Arrival</span>
          </div>
          <div className="font-editorial text-2xl sm:text-3xl font-bold text-ivory-100">
            Tuesday, Nov 20, 2007
          </div>
          <p className="text-xs text-gold-300/80 mt-1 font-mono">Day 324 of 2007 • Week 47</p>
        </div>

        <div className="p-6 rounded-2xl bg-midnight-900/60 border border-gold-400/20 backdrop-blur-md relative overflow-hidden group hover:border-gold-400/40 transition-all">
          <div className="flex items-center gap-3 text-gold-400 mb-3">
            <Clock className="w-5 h-5" />
            <span className="text-xs uppercase font-mono tracking-widest text-white/50">Exact Birth Time</span>
          </div>
          <div className="font-editorial text-2xl sm:text-3xl font-bold text-ivory-100">
            10:56 AM IST
          </div>
          <p className="text-xs text-gold-300/80 mt-1 font-mono">05:26 UTC • Asia/Kolkata (UTC+5:30)</p>
        </div>

        <div className="p-6 rounded-2xl bg-midnight-900/60 border border-gold-400/20 backdrop-blur-md relative overflow-hidden group hover:border-gold-400/40 transition-all">
          <div className="flex items-center gap-3 text-gold-400 mb-3">
            <MapPin className="w-5 h-5" />
            <span className="text-xs uppercase font-mono tracking-widest text-white/50">Birthplace</span>
          </div>
          <div className="font-editorial text-2xl sm:text-3xl font-bold text-ivory-100">
            Bengaluru, India
          </div>
          <p className="text-xs text-gold-300/80 mt-1 font-mono">Karnataka • 12.9716° N, 77.5946° E</p>
        </div>
      </div>

      {/* Main Grid: Historical Calendar + Bengaluru Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
        {/* Left Column: Authentic November 2007 Calendar */}
        <div className="lg:col-span-5 rounded-2xl border border-gold-400/20 bg-midnight-900/70 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="font-editorial text-lg font-semibold tracking-wider text-ivory-100 uppercase">
                November 2007
              </span>
              <span className="text-[10px] uppercase font-mono px-2.5 py-1 rounded bg-gold-400/10 text-gold-300">
                Gregorian Calendar
              </span>
            </div>

            {/* Days of week header */}
            <div className="grid grid-cols-7 gap-1 text-center py-3 text-xs uppercase font-mono text-white/40">
              {daysOfWeek.map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1 text-center font-mono text-xs">
              {/* Blank offset days */}
              {Array.from({ length: startDayOffset }).map((_, idx) => (
                <div key={`offset-${idx}`} className="h-9" />
              ))}

              {/* November days */}
              {Array.from({ length: daysInNov2007 }).map((_, idx) => {
                const dayNum = idx + 1;
                const isDivyaDay = dayNum === 20;

                return (
                  <div
                    key={`day-${dayNum}`}
                    className={`h-9 flex flex-col items-center justify-center rounded-lg relative transition-all ${
                      isDivyaDay
                        ? "bg-gradient-to-tr from-gold-500 to-rose-400 text-midnight-950 font-bold shadow-[0_0_20px_rgba(223,194,122,0.8)] scale-110 z-10"
                        : "text-ivory-200/70 hover:bg-white/5"
                    }`}
                  >
                    <span>{dayNum}</span>
                    {isDivyaDay && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white animate-ping" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 text-gold-300 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Tuesday, 20 November 2007</span>
            </span>
            <span className="text-white/40 font-mono">Day of Divya</span>
          </div>
        </div>

        {/* Right Column: Bengaluru Map with historic coordinates */}
        <div className="lg:col-span-7">
          <BengaluruMap />
        </div>
      </div>

      {/* Live Time Counter Section */}
      <div className="mt-12">
        <div className="text-center mb-6">
          <span className="text-xs uppercase font-mono tracking-widest text-gold-400">
            Living Time Capsule
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-ivory-100 mt-1">
            Time Elapsed Since That Tuesday Morning
          </h3>
          <p className="text-xs text-white/50 mt-1">
            Calculated in real time from November 20, 2007 at 10:56 AM IST
          </p>
        </div>
        <TimeCounter />
      </div>
    </section>
  );
};
