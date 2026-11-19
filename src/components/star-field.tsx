"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  active: boolean;
}

export const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("resize", handleResize);

    const stars: Star[] = [];
    const starCount = Math.floor((width * height) / 4500); // Responsive star count
    const starColors = ["#FAF7F2", "#DFC27A", "#CFC2E3", "#DFBCC1", "#EAE0CF"];

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.6 + 0.5,
          baseAlpha: Math.random() * 0.6 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }
    };

    initStars();

    const shootingStar: ShootingStar = {
      x: 0,
      y: 0,
      length: 120,
      speed: 12,
      angle: Math.PI / 4,
      alpha: 0,
      active: false,
    };

    const triggerShootingStar = () => {
      if (shootingStar.active) return;
      shootingStar.x = Math.random() * width * 0.8;
      shootingStar.y = Math.random() * (height * 0.4);
      shootingStar.alpha = 1;
      shootingStar.speed = Math.random() * 8 + 10;
      shootingStar.length = Math.random() * 80 + 90;
      shootingStar.active = true;
    };

    let shootingStarTimer = setInterval(() => {
      if (Math.random() > 0.4) {
        triggerShootingStar();
      }
    }, 7000);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render static / twinkling stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.twinklePhase += star.twinkleSpeed;
        const alpha = star.baseAlpha + Math.sin(star.twinklePhase) * 0.25;
        const currentAlpha = Math.max(0.08, Math.min(1, alpha));

        ctx.fillStyle = star.color;
        ctx.globalAlpha = currentAlpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow for larger stars
        if (star.size > 1.4) {
          ctx.beginPath();
          ctx.fillStyle = star.color;
          ctx.globalAlpha = currentAlpha * 0.2;
          ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Render shooting star if active
      if (shootingStar.active) {
        ctx.save();
        ctx.globalAlpha = shootingStar.alpha;
        const tailX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
        const tailY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;

        const grad = ctx.createLinearGradient(tailX, tailY, shootingStar.x, shootingStar.y);
        grad.addColorStop(0, "rgba(223, 194, 122, 0)");
        grad.addColorStop(0.7, "rgba(207, 194, 227, 0.4)");
        grad.addColorStop(1, "rgba(255, 255, 255, 0.95)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(shootingStar.x, shootingStar.y);
        ctx.stroke();

        // Bright head
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(shootingStar.x, shootingStar.y, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        // Advance shooting star
        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.alpha -= 0.015;

        if (shootingStar.alpha <= 0 || shootingStar.x > width || shootingStar.y > height) {
          shootingStar.active = false;
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(shootingStarTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.85 }}
      aria-hidden="true"
    />
  );
};
