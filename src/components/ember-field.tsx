import { useEffect, useRef } from "react";
import { fxTier } from "@/lib/fx/quality";

type Mote = {
  x: number;
  y: number;
  r: number;
  vy: number;
  phase: number;
  wobble: number;
  warm: number;
  alpha: number;
};

export function EmberField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const count = fxTier() === "full" ? 26 : 14;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let lift = 0;
    let raf = 0;
    const motes: Mote[] = [];

    const seed = () => {
      motes.length = 0;
      for (let i = 0; i < count; i += 1) {
        motes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 0.5 + Math.random() * 1.15,
          vy: 0.12 + Math.random() * 0.28,
          phase: Math.random() * Math.PI * 2,
          wobble: 0.04 + Math.random() * 0.08,
          warm: Math.random(),
          alpha: 0.22 + Math.random() * 0.38,
        });
      }
    };

    const fit = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (motes.length === 0) seed();
    };

    const onScroll = () => {
      lift = Math.min(14, lift + 2.2);
    };

    const draw = (time: number) => {
      lift *= 0.92;
      ctx.clearRect(0, 0, width, height);
      for (const mote of motes) {
        mote.y -= mote.vy * (1 + lift * 0.09);
        mote.x += Math.sin(time * 0.00035 + mote.phase) * (mote.wobble + lift * 0.01);
        if (mote.y < -12) {
          mote.y = height + 8;
          mote.x = Math.random() * width;
        }
        if (mote.x < -12) mote.x = width + 8;
        if (mote.x > width + 12) mote.x = -8;
        const twinkle = 0.55 + 0.45 * Math.sin(time * 0.0016 + mote.phase);
        const alpha = mote.alpha * twinkle * (0.72 + Math.min(lift, 8) * 0.05);
        const glow = mote.r * (6 + mote.warm * 3);
        const gradient = ctx.createRadialGradient(mote.x, mote.y, 0, mote.x, mote.y, glow);
        if (mote.warm > 0.82) {
          gradient.addColorStop(0, `rgba(255, 214, 176, ${alpha})`);
          gradient.addColorStop(0.35, `rgba(166, 58, 42, ${alpha * 0.28})`);
        } else {
          gradient.addColorStop(0, `rgba(255, 236, 214, ${alpha})`);
          gradient.addColorStop(0.4, `rgba(196, 165, 116, ${alpha * 0.32})`);
        }
        gradient.addColorStop(1, "rgba(196, 165, 116, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mote.x, mote.y, glow, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = window.requestAnimationFrame(draw);
    };

    fit();
    window.addEventListener("resize", fit);
    window.addEventListener("scroll", onScroll, { passive: true });
    raf = window.requestAnimationFrame(draw);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", fit);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <canvas ref={ref} className="ember-field" aria-hidden="true" />;
}
