import { useEffect, useState } from "react";
import { ClothField } from "@/components/cloth-field";

const WARPS = [36, 68, 100, 132, 164, 196, 228, 260, 292];

export function WeaveRitual({ onDone }: { onDone: () => void }) {
  const [knot, setKnot] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const knotAt = window.setTimeout(() => setKnot(true), reduced ? 200 : 1500);
    const done = window.setTimeout(onDone, reduced ? 700 : 2100);
    return () => {
      window.clearTimeout(knotAt);
      window.clearTimeout(done);
    };
  }, [onDone]);

  return (
    <div className="ritual-veil" aria-live="polite">
      <ClothField className="absolute inset-0 opacity-40" />
      <svg className="relative h-64 w-full max-w-lg" viewBox="0 0 320 220" fill="none" aria-hidden="true">
        {WARPS.map((x, i) => (
          <path
            key={x}
            className="draw-thread"
            d={`M${x} 8 C${x + 4} 70 ${x - 6} 130 ${x} 212`}
            stroke="#2a211e"
            strokeWidth="1.1"
            style={{ animationDelay: `${i * 40}ms` }}
          />
        ))}
        <path
          className="weft-run"
          d="M12 108 C 70 96, 120 120, 164 108 C 210 96, 260 118, 308 108"
          stroke="#8e1c1c"
          strokeWidth="2"
        />
        <path
          className="weft-run"
          d="M12 124 C 80 136, 130 112, 164 124 C 210 136, 250 114, 308 124"
          stroke="#6d1414"
          strokeWidth="1.2"
          style={{ animationDelay: "1.05s" }}
        />
        {knot ? <circle cx="164" cy="116" r="5" className="knot-flash" fill="#8e1c1c" /> : null}
      </svg>
      <p className="relative mt-6 text-center text-sm tracking-[0.18em] text-sand uppercase">Плету</p>
    </div>
  );
}
