import { useEffect, useRef, useState } from "react";
import { fxTier, type FxTier } from "@/lib/fx/quality";

export function Atmosphere() {
  const [tier, setTier] = useState<FxTier>("lite");
  const lamp = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTier(fxTier());
  }, []);

  useEffect(() => {
    if (tier === "min") return;
    const node = lamp.current;
    if (!node) return;
    const move = (event: PointerEvent) => {
      node.style.setProperty("--lamp-x", `${event.clientX}px`);
      node.style.setProperty("--lamp-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [tier]);

  return (
    <div aria-hidden="true" className="chamber-layers">
      {tier === "full" ? (
        <video
          className="chamber-video"
          src="/videos/makosh-loom.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : null}
      <div className="hearth hearth-breathe" />
      <div className="twill" />
      <div className="grain" />
      <div className="vignette" />
      {tier !== "min" ? <div ref={lamp} className="chamber-lamp" /> : null}
      {tier === "full" ? <Dust /> : null}
    </div>
  );
}

function Dust() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let frame = 0;
    const dots = Array.from({ length: 28 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.4 + Math.random() * 0.8,
      s: 0.00012 + Math.random() * 0.00025,
    }));
    const draw = () => {
      const { innerWidth: w, innerHeight: h } = window;
      if (canvas.width !== w) canvas.width = w;
      if (canvas.height !== h) canvas.height = h;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(228,212,184,0.18)";
      for (const d of dots) {
        d.y -= d.s;
        if (d.y < 0) d.y = 1;
        ctx.beginPath();
        ctx.arc(d.x * w, d.y * h * 0.55 + h * 0.08, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
      frame = window.requestAnimationFrame(draw);
    };
    frame = window.requestAnimationFrame(draw);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return <canvas ref={ref} className="chamber-dust" />;
}
