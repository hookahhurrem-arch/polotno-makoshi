import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { fxTier, type FxTier } from "@/lib/fx/quality";
import { cn } from "@/lib/utils";

const VIEW = "0 0 1500 2195";
const FATE =
  "M752 1008 C 748 1050, 728 1082, 736 1118 C 748 1162, 786 1190, 774 1232 C 760 1274, 716 1308, 740 1352 C 768 1400, 808 1438, 780 1484 C 750 1532, 796 1574, 770 1618 C 744 1664, 708 1708, 736 1752 C 764 1792, 798 1828, 754 1864 C 726 1888, 742 1904, 750 1912";
const HAND =
  "M708 870 C 748 856, 786 846, 812 840 C 804 878, 782 922, 768 962 C 758 986, 752 1000, 752 1008";

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
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    setTier(fxTier());
  }, []);

  const live = tier !== "min";

  const runPulse = () => {
    if (!live || pulse) return;
    setPulse(true);
    window.setTimeout(() => setPulse(false), 780);
  };

  return (
    <section className="weaver-hero">
      <svg className="weaver-scene" viewBox={VIEW} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="fateGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8c07a" />
            <stop offset="45%" stopColor="#c45a4a" />
            <stop offset="100%" stopColor="#6b1c1c" />
          </linearGradient>
          <filter id="fateBlur" x="-20%" y="-8%" width="140%" height="116%">
            <feGaussianBlur stdDeviation={tier === "full" ? 3.2 : 1.6} />
          </filter>
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

        <g className={cn("weaver-fate", live && "is-live", pulse && "is-pulse")}>
          <path d={FATE} pathLength={1} fill="none" stroke="url(#fateGlow)" strokeWidth="14" strokeLinecap="round" filter={tier === "full" ? "url(#fateBlur)" : undefined} className="fate-glow" />
          <path d={FATE} pathLength={1} fill="none" stroke="url(#fateGlow)" strokeWidth="3.2" strokeLinecap="round" className="fate-core" />
        </g>

        <g className={cn("weaver-hand", live && "is-live")}>
          <path d={HAND} fill="none" stroke="#8b2a2a" strokeWidth="2.4" strokeLinecap="round" />
        </g>

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

        <rect
          x="560"
          y="990"
          width="390"
          height="930"
          fill="transparent"
          className="cloth-hit"
          onPointerDown={runPulse}
        />
      </svg>

      <div className="weaver-copy weaver-copy-top">
        <p className="home-aside">Сто восемь нитей. Одна ткань судьбы.</p>
        <Link to="/reading" className="hero-title weaver-cta">
          Сплести нити
        </Link>
      </div>
      <div className="weaver-copy weaver-copy-bot">
        <p className="hero-caption">Коснитесь полотна — нить пройдёт от колыбели до холма.</p>
      </div>
    </section>
  );
}
