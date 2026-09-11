import { useEffect, useId, useRef, useState } from "react";

type Stitch = { id: number; x: number; y: number };

function reducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function ThreadSide({ side }: { side: "left" | "right" }) {
  const uid = useId().replace(/:/g, "");
  const plyA = useRef<SVGPathElement>(null);
  const plyB = useRef<SVGPathElement>(null);

  useEffect(() => {
    const a = plyA.current;
    const b = plyB.current;
    if (!a || !b) return;
    const lenA = a.getTotalLength();
    const lenB = b.getTotalLength();
    a.style.strokeDasharray = `${lenA}`;
    b.style.strokeDasharray = `${lenB}`;

    const paint = (t: number) => {
      const shown = 0.4 + t * 0.6;
      a.style.strokeDashoffset = `${lenA * (1 - shown)}`;
      b.style.strokeDashoffset = `${lenB * (1 - shown)}`;
    };

    if (reducedMotion()) {
      paint(1);
      return;
    }

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      paint(max <= 0 ? 0.45 : Math.min(1, window.scrollY / max));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <svg
      className={
        side === "left"
          ? "absolute top-14 left-0 h-[calc(100dvh-4.5rem)] w-1.5 md:left-1"
          : "absolute top-14 right-0 h-[calc(100dvh-4.5rem)] w-1.5 scale-x-[-1] md:right-1"
      }
      viewBox="0 0 16 820"
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id={`wool-${uid}`} x="-80%" y="-3%" width="260%" height="106%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed={side === "left" ? 4 : 9} result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="0.4" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <path
        ref={plyA}
        filter={`url(#wool-${uid})`}
        d="M8 8C10 70 6 130 9 190C12 250 5 310 8 370C11 430 6 490 9 550C12 610 6 670 8 812"
        stroke="#8B1E1E"
        strokeWidth="0.85"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        ref={plyB}
        filter={`url(#wool-${uid})`}
        d="M7 14C9 74 6 134 8 194C10 254 5 314 7 374C10 434 6 494 8 554C10 614 6 674 7 812"
        stroke="#6E1212"
        strokeWidth="0.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="8" cy="10" r="1.7" stroke="#8B1E1E" strokeWidth="1" />
    </svg>
  );
}

/** Обережная нить по двум кромкам: тонкая, марена, не перекрывает текст. */
export function LoomThread() {
  const [stitches, setStitches] = useState<Stitch[]>([]);

  useEffect(() => {
    if (reducedMotion()) return;
    const onPointer = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, button, a, label")) return;
      const id = Date.now() + Math.random();
      setStitches((prev) => [...prev.slice(-3), { id, x: event.clientX, y: event.clientY }]);
      window.setTimeout(() => {
        setStitches((prev) => prev.filter((item) => item.id !== id));
      }, 700);
    };
    window.addEventListener("pointerdown", onPointer);
    return () => window.removeEventListener("pointerdown", onPointer);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
      <ThreadSide side="left" />
      <ThreadSide side="right" />
      {stitches.map((stitch) => (
        <svg
          key={stitch.id}
          className="thread-knot-pop absolute"
          style={{ left: stitch.x - 14, top: stitch.y - 10 }}
          width="28"
          height="20"
          viewBox="0 0 28 20"
          fill="none"
        >
          <path d="M2 10h8.2" stroke="#8B1E1E" strokeWidth="1.15" strokeLinecap="round" />
          <circle cx="14" cy="10" r="2" stroke="#8B1E1E" strokeWidth="1.1" />
          <path d="M17.8 10H26" stroke="#6E1212" strokeWidth="1" strokeLinecap="round" />
        </svg>
      ))}
    </div>
  );
}
