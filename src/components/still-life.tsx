import { useEffect, useState } from "react";
import { fxTier, type FxTier } from "@/lib/fx/quality";

const MOTES = [
  { x: 12, y: 28, d: 22, s: 1.2 },
  { x: 28, y: 62, d: 28, s: 0.8 },
  { x: 41, y: 18, d: 19, s: 1 },
  { x: 53, y: 44, d: 31, s: 0.7 },
  { x: 61, y: 72, d: 24, s: 1.1 },
  { x: 73, y: 33, d: 27, s: 0.9 },
  { x: 81, y: 58, d: 21, s: 1.3 },
  { x: 18, y: 81, d: 26, s: 0.75 },
  { x: 36, y: 47, d: 18, s: 1.05 },
  { x: 88, y: 22, d: 29, s: 0.85 },
];

export function StillLife({ candle, yarn }: { candle?: boolean; yarn?: boolean }) {
  const [tier, setTier] = useState<FxTier>("lite");
  useEffect(() => {
    setTier(fxTier());
  }, []);

  return (
    <div className="still-life" aria-hidden="true">
      {candle ? <img src="/scenes/candle.webp" alt="" className="still-candle" /> : null}
      {yarn ? <img src="/scenes/yarn-arc.webp" alt="" className="still-yarn" /> : null}
      {tier !== "min"
        ? MOTES.map((mote, i) => (
            <span
              key={i}
              className="dust-mote"
              style={{
                left: `${mote.x}%`,
                top: `${mote.y}%`,
                animationDuration: `${mote.d}s`,
                animationDelay: `${i * -2.1}s`,
                width: mote.s + 1,
                height: mote.s + 1,
              }}
            />
          ))
        : null}
    </div>
  );
}
