"use client";

import React, { useRef, useState } from "react";
import { Download, Printer, Share2, Sparkles, Check, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";

export const CertificateRenderer: React.FC = () => {
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);
  const certRef = useRef<HTMLDivElement | null>(null);

  const handleDownload = async () => {
    setDownloading(true);

    try {
      // Trigger festive golden confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#DFC27A", "#C6A152", "#DFBCC1", "#CFC2E3", "#FAF7F2"],
      });

      // Render high-res canvas for pristine export
      const certEl = certRef.current;
      if (!certEl) return;

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // 2400 x 1600 (High-res 300 DPI equivalent)
      canvas.width = 2400;
      canvas.height = 1600;

      // Background Luxury Midnight Gradient
      const bgGrad = ctx.createRadialGradient(1200, 800, 100, 1200, 800, 1300);
      bgGrad.addColorStop(0, "#0E1326");
      bgGrad.addColorStop(0.7, "#080B16");
      bgGrad.addColorStop(1, "#04050A");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 2400, 1600);

      // Starry dust in background
      for (let i = 0; i < 280; i++) {
        const x = Math.random() * 2400;
        const y = Math.random() * 1600;
        const radius = Math.random() * 1.8 + 0.4;
        ctx.fillStyle = Math.random() > 0.5 ? "#DFC27A" : "#FFFFFF";
        ctx.globalAlpha = Math.random() * 0.7 + 0.2;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Double Gold Ornate Borders
      ctx.strokeStyle = "#C6A152";
      ctx.lineWidth = 4;
      ctx.strokeRect(80, 80, 2240, 1440);

      ctx.strokeStyle = "rgba(223, 194, 122, 0.4)";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(100, 100, 2200, 1400);

      // Corner Accents
      const drawCorner = (cx: number, cy: number, rot: number) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rot);
        ctx.strokeStyle = "#DFC27A";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, 40);
        ctx.lineTo(0, 0);
        ctx.lineTo(40, 0);
        ctx.stroke();

        ctx.fillStyle = "#DFC27A";
        ctx.beginPath();
        ctx.arc(10, 10, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      };

      drawCorner(115, 115, 0);
      drawCorner(2285, 115, Math.PI / 2);
      drawCorner(2285, 1485, Math.PI);
      drawCorner(115, 1485, -Math.PI / 2);

      // Top Monogram Header
      ctx.textAlign = "center";
      ctx.fillStyle = "#DFC27A";
      ctx.font = "bold 28px 'Plus Jakarta Sans', sans-serif";
      ctx.letterSpacing = "6px";
      ctx.fillText("✦  OFFICIAL TIME CAPSULE ARCHIVE  ✦", 1200, 240);

      // Main Title
      ctx.fillStyle = "#FAF7F2";
      ctx.font = "bold 64px 'Playfair Display', serif";
      ctx.letterSpacing = "8px";
      ctx.fillText("CERTIFICATE OF ARRIVAL", 1200, 350);

      // Thin divider with diamond
      ctx.strokeStyle = "rgba(223, 194, 122, 0.5)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(850, 390);
      ctx.lineTo(1550, 390);
      ctx.stroke();

      ctx.fillStyle = "#DFC27A";
      ctx.beginPath();
      ctx.arc(1200, 390, 5, 0, Math.PI * 2);
      ctx.fill();

      // "This certifies that"
      ctx.fillStyle = "rgba(250, 247, 242, 0.75)";
      ctx.font = "italic 36px 'Cormorant Garamond', Georgia, serif";
      ctx.letterSpacing = "2px";
      ctx.fillText("This certifies that", 1200, 480);

      // "DIVYA" (Hero Name in Gold Gradient style)
      ctx.fillStyle = "#DFC27A";
      ctx.font = "bold 130px 'Playfair Display', Georgia, serif";
      ctx.letterSpacing = "14px";
      ctx.fillText("DIVYA", 1200, 640);

      // "arrived in this world on"
      ctx.fillStyle = "rgba(250, 247, 242, 0.75)";
      ctx.font = "italic 36px 'Cormorant Garamond', Georgia, serif";
      ctx.letterSpacing = "2px";
      ctx.fillText("arrived in this world on", 1200, 750);

      // "20 NOVEMBER 2007"
      ctx.fillStyle = "#FAF7F2";
      ctx.font = "bold 72px 'Cinzel', serif";
      ctx.letterSpacing = "8px";
      ctx.fillText("20 NOVEMBER 2007", 1200, 860);

      // "at 10:56 AM"
      ctx.fillStyle = "#DFC27A";
      ctx.font = "600 44px 'Cinzel', serif";
      ctx.letterSpacing = "6px";
      ctx.fillText("AT 10:56 AM IST", 1200, 950);

      // "BENGALURU, INDIA"
      ctx.fillStyle = "#FAF7F2";
      ctx.font = "500 52px 'Cinzel', serif";
      ctx.letterSpacing = "10px";
      ctx.fillText("BENGALURU, INDIA", 1200, 1040);

      // Astronomical Badges Bar
      ctx.fillStyle = "rgba(223, 194, 122, 0.85)";
      ctx.font = "24px 'Plus Jakarta Sans', sans-serif";
      ctx.letterSpacing = "3px";
      ctx.fillText(
        "LAT: 12.9716° N  •  LNG: 77.5946° E  •  MOON: WAXING GIBBOUS (81.4%)  •  ZODIAC: SCORPIO",
        1200,
        1160
      );

      // Seal & Signatures
      ctx.strokeStyle = "#DFC27A";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(1200, 1340, 75, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = "#DFC27A";
      ctx.font = "bold 16px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText("RECORD VERIFIED", 1200, 1335);
      ctx.font = "14px 'Plus Jakarta Sans', sans-serif";
      ctx.fillText("AUTHENTIC TIME CAPSULE", 1200, 1358);

      // Download triggered
      const link = document.createElement("a");
      link.download = "Divya-Certificate-of-Arrival-20Nov2007.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error("Export error", err);
    } finally {
      setDownloading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="space-y-8">
      {/* Action Toolbar */}
      <div className="no-print flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-midnight-900/60 border border-gold-400/20 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span className="text-xs uppercase tracking-wider font-semibold text-ivory-100">
            Collector's Edition Certificate
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-gold-500 to-rose-400 text-midnight-950 font-semibold text-xs tracking-wider uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(223,194,122,0.3)] hover:scale-105 active:scale-95 transition-all focus:outline-none"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{downloading ? "Generating..." : "Download High-Res PNG"}</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-ivory-100 font-medium text-xs tracking-wider uppercase flex items-center gap-2 transition-all focus:outline-none"
          >
            <Printer className="w-3.5 h-3.5 text-gold-300" />
            <span>Print</span>
          </button>

          <button
            onClick={handleShare}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-ivory-100 transition-all focus:outline-none"
            title="Share Capsule Link"
            aria-label="Share Link"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Share2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* The Printable Visual Certificate */}
      <div
        id="printable-certificate"
        ref={certRef}
        className="relative mx-auto max-w-4xl rounded-2xl bg-gradient-to-b from-[#0D1222] via-[#080B15] to-[#04060B] border-2 border-gold-400/40 p-8 sm:p-14 shadow-[0_25px_80px_rgba(0,0,0,0.8),inset_0_0_80px_rgba(223,194,122,0.06)] overflow-hidden text-center"
      >
        {/* Subtle Ornamental Corner Filigrees */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold-400/60 pointer-events-none" />
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold-400/60 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold-400/60 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold-400/60 pointer-events-none" />

        {/* Inner thin decorative framing */}
        <div className="absolute inset-3 sm:inset-5 border border-gold-400/20 pointer-events-none rounded-xl" />

        {/* Background Celestial Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full border border-gold-400" />
          <div className="absolute w-[350px] h-[350px] rounded-full border border-dashed border-gold-400" />
        </div>

        {/* Certificate Content */}
        <div className="relative z-10 space-y-6 sm:space-y-8">
          {/* Top Archive Emblem */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-gold-400">
              ✦ &nbsp; Official Time Capsule Archive &nbsp; ✦
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
          </div>

          {/* Certificate Title */}
          <div>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[0.18em] text-ivory-100 uppercase">
              Certificate of Arrival
            </h2>
            <p className="text-xs sm:text-sm font-mono text-gold-300/80 tracking-widest mt-2 uppercase">
              Permanent Cosmic Record • No. 2007-1120-1056-BLR
            </p>
          </div>

          {/* "This certifies that" */}
          <div className="pt-2">
            <p className="font-cormorant italic text-lg sm:text-2xl text-ivory-200/90 font-light">
              This certifies that
            </p>
          </div>

          {/* The Hero Name */}
          <div className="py-2">
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-[#FAF7F2] via-[#DFC27A] to-[#FAF7F2] drop-shadow-[0_5px_15px_rgba(223,194,122,0.3)]">
              DIVYA
            </h1>
          </div>

          {/* "arrived in this world on" */}
          <div>
            <p className="font-cormorant italic text-lg sm:text-2xl text-ivory-200/90 font-light">
              arrived in this world on
            </p>
          </div>

          {/* Exact Birth Date */}
          <div>
            <div className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-[0.15em] text-ivory-100 uppercase">
              20 November 2007
            </div>
            <div className="font-editorial text-lg sm:text-2xl font-medium tracking-[0.18em] text-gold-300 uppercase mt-2">
              at 10:56 AM IST
            </div>
          </div>

          {/* Birthplace */}
          <div>
            <div className="font-editorial text-xl sm:text-3xl font-semibold tracking-[0.2em] text-ivory-100 uppercase">
              Bengaluru, India
            </div>
            <div className="text-[11px] sm:text-xs font-mono text-white/50 tracking-widest mt-1">
              12.9716° N, 77.5946° E • The Garden City
            </div>
          </div>

          {/* Celestial & Astrological Metadata Badge Row */}
          <div className="pt-4 pb-2 border-t border-b border-gold-400/20 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div>
              <div className="text-[9px] uppercase tracking-wider text-white/40">Zodiac Sign</div>
              <div className="text-xs sm:text-sm font-semibold text-gold-300 font-editorial">Scorpio (Water)</div>
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-wider text-white/40">Lunar Phase</div>
              <div className="text-xs sm:text-sm font-semibold text-ivory-100 font-editorial">Waxing Gibbous 81%</div>
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-wider text-white/40">Birth Day</div>
              <div className="text-xs sm:text-sm font-semibold text-gold-300 font-editorial">Tuesday (Mars)</div>
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-wider text-white/40">Life Path</div>
              <div className="text-xs sm:text-sm font-semibold text-ivory-100 font-editorial">Number 4 (Builder)</div>
            </div>
          </div>

          {/* Embossed Seal Stamp */}
          <div className="pt-4 flex flex-col items-center justify-center">
            <div className="relative w-24 h-24 rounded-full border-2 border-gold-400/60 bg-gradient-to-tr from-gold-500/20 to-transparent flex flex-col items-center justify-center text-center p-2 shadow-[0_0_25px_rgba(223,194,122,0.15)]">
              <div className="w-20 h-20 rounded-full border border-dashed border-gold-400/40 flex flex-col items-center justify-center">
                <Sparkles className="w-5 h-5 text-gold-400 mb-0.5" />
                <span className="text-[7px] font-mono uppercase tracking-widest text-gold-300 font-bold">
                  VERIFIED
                </span>
                <span className="text-[6px] font-mono text-white/60">SEAL OF 2007</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
