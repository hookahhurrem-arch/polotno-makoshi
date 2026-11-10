import { useEffect, useState } from "react";
import { fxTier, type FxTier } from "@/lib/fx/quality";
import { cn } from "@/lib/utils";

const VIEW = "0 0 1500 2195";

const DUST = [
  [180, 240, 19, 0.9],
  [320, 480, 24, 0.7],
  [1280, 300, 21, 1.1],
  [1180, 620, 27, 0.8],
  [210, 900, 22, 1],
  [1340, 980, 25, 0.75],
  [90, 1280, 20, 1.2],
  [1400, 1400, 28, 0.85],
  [260, 1600, 23, 0.95],
  [1220, 1720, 26, 0.7],
  [400, 200, 18, 1.05],
  [1100, 180, 22, 0.8],
  [160, 700, 21, 1.15],
  [1360, 760, 19, 0.9],
  [80, 1750, 24, 0.78],
  [1420, 1900, 20, 1],
  [980, 120, 17, 0.88],
  [520, 160, 23, 0.72],
] as const;

export function WeaverHero() {
  const [tier, setTier] = useState<FxTier>("lite");

  useEffect(() => {
    setTier(fxTier());
  }, []);

  const live = tier !== "min";

  return (
    <section className="weaver-hero">
      <svg className="weaver-scene" viewBox={VIEW} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <radialGradient id="candleCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e8c07a" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#c45a4a" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#e8c07a" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="topVeil" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#070605" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#070605" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="botVeil" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#070605" stopOpacity="0" />
            <stop offset="100%" stopColor="#070605" stopOpacity="0.82" />
          </linearGradient>
        </defs>

        <image href="/scenes/weaver.webp" width="1500" height="2195" />
        <rect x="0" y="0" width="1500" height="320" fill="url(#topVeil)" />
        <rect x="0" y="1860" width="1500" height="335" fill="url(#botVeil)" />

        <g className={cn("weaver-candle", live && "is-live")}>
          <circle cx="1036" cy="758" r="54" fill="url(#candleCore)" className="candle-halo" />
          <circle cx="1036" cy="758" r="7" fill="#e8c07a" className="candle-wick" />
        </g>

        {live
          ? DUST.map(([x, y, dur, s], i) => (
              <circle
                key={i}
                className="weaver-dust"
                cx={x}
                cy={y}
                r={s}
                fill="#e8c07a"
                style={{ animationDuration: `${dur}s`, animationDelay: `${-i * 1.3}s` }}
              />
            ))
          : null}
      </svg>

      <div className="weaver-copy weaver-copy-top">
        <h1 className="hero-title">Полотно Макоши</h1>
      </div>
    </section>
  );
}
