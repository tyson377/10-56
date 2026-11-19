"use client";

import React from "react";
import { Sparkles, Award } from "lucide-react";
import { CertificateRenderer } from "@/components/certificate/certificate-renderer";

export const Section08Certificate: React.FC = () => {
  return (
    <section id="certificate" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto relative">
      {/* Chapter Marker */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <span className="text-xs uppercase font-mono tracking-[0.3em] text-gold-400">
          CHAPTER 07
        </span>
        <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-[0.15em] text-ivory-100 uppercase">
          Her Certificate of Arrival
        </h2>
        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        <p className="text-sm sm:text-base font-cormorant italic text-ivory-200/80 max-w-2xl font-light">
          "An official, museum-grade parchment commemorating the exact coordinates and celestial hour of Divya's birth."
        </p>
      </div>

      {/* Main Luxury Certificate Renderer */}
      <CertificateRenderer />
    </section>
  );
};
