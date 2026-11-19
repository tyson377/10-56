"use client";

import React, { useState, useEffect } from "react";
import { Clock, Heart, Orbit, Wind } from "lucide-react";

export const TimeCounter: React.FC = () => {
  // Birth timestamp: 20 November 2007 10:56:00 AM IST (UTC+5:30)
  // UTC equivalent: 2007-11-20T05:26:00Z
  const birthDate = new Date("2007-11-20T05:26:00Z");

  const [elapsed, setElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0,
    heartbeats: "0",
    breaths: "0",
    distanceKm: "0",
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diffMs = now.getTime() - birthDate.getTime();

      const totalSeconds = Math.floor(diffMs / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);

      // Calendar years and months
      let years = now.getFullYear() - birthDate.getFullYear();
      let months = now.getMonth() - birthDate.getMonth();
      let days = now.getDate() - birthDate.getDate();

      if (days < 0) {
        months -= 1;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }

      if (months < 0) {
        years -= 1;
        months += 12;
      }

      const hours = now.getHours() - 10;
      const minutes = (now.getMinutes() - 56 + 60) % 60;
      const seconds = now.getSeconds();

      // Fun cosmic and biological estimates
      // Average 75 beats per minute
      const estHeartbeats = Math.floor(totalMinutes * 75).toLocaleString();
      // Average 16 breaths per minute
      const estBreaths = Math.floor(totalMinutes * 16).toLocaleString();
      // Earth orbits sun at ~107,000 km/h
      const estDistance = Math.floor(totalHours * 107000).toLocaleString();

      setElapsed({
        years,
        months,
        days,
        hours: (hours + 24) % 24,
        minutes,
        seconds,
        totalDays,
        heartbeats: estHeartbeats,
        breaths: estBreaths,
        distanceKm: estDistance,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Primary Elapsed Counter Display */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
        {[
          { label: "Years", value: elapsed.years },
          { label: "Months", value: elapsed.months },
          { label: "Days", value: elapsed.days },
          { label: "Hours", value: elapsed.hours },
          { label: "Minutes", value: elapsed.minutes },
          { label: "Seconds", value: elapsed.seconds },
        ].map((item) => (
          <div
            key={item.label}
            className="p-3 sm:p-4 rounded-xl bg-midnight-900/60 border border-gold-400/20 backdrop-blur-md text-center flex flex-col justify-center"
          >
            <span className="font-editorial text-2xl sm:text-3xl font-semibold gold-gradient-text">
              {item.value}
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-white/50 mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Vital Biological & Cosmic Journey Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        <div className="p-3.5 rounded-xl bg-midnight-900/40 border border-white/5 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-rose-500/10 text-rose-300">
            <Heart className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <div className="text-sm font-semibold text-ivory-100 font-mono">{elapsed.heartbeats}</div>
            <div className="text-[10px] uppercase tracking-wider text-white/40">Approx. Heartbeats</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-midnight-900/40 border border-white/5 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-lavender-500/10 text-lavender-300">
            <Wind className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-semibold text-ivory-100 font-mono">{elapsed.breaths}</div>
            <div className="text-[10px] uppercase tracking-wider text-white/40">Breaths of Earth Air</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-midnight-900/40 border border-white/5 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gold-500/10 text-gold-300">
            <Orbit className="w-4 h-4 animate-spin-slow" />
          </div>
          <div>
            <div className="text-sm font-semibold text-ivory-100 font-mono">{elapsed.distanceKm} km</div>
            <div className="text-[10px] uppercase tracking-wider text-white/40">Traveled Around the Sun</div>
          </div>
        </div>
      </div>
    </div>
  );
};
