import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { DECK_SIZE } from "@/lib/oracle/types";
import { cn } from "@/lib/utils";

function wrap(n: number): number {
  if (n < 1) return DECK_SIZE;
  if (n > DECK_SIZE) return 1;
  return n;
}

type CardSwipeProps = {
  number: number;
  children: ReactNode;
  className?: string;
};

export function CardSwipe({ number, children, className }: CardSwipeProps) {
  const navigate = useNavigate();
  const start = useRef<{ x: number; y: number; locked: boolean } | null>(null);
  const [dx, setDx] = useState(0);
  const [dragging, setDragging] = useState(false);

  const go = (target: number) => {
    void navigate({
      to: "/card/$number",
      params: { number: String(target) },
      replace: true,
    });
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") go(wrap(number - 1));
      if (event.key === "ArrowRight") go(wrap(number + 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [number]);

  const onDown = (event: PointerEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest("a, button, input, textarea, label")) return;
    start.current = { x: event.clientX, y: event.clientY, locked: false };
  };

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!start.current) return;
    const mx = event.clientX - start.current.x;
    const my = event.clientY - start.current.y;
    if (!start.current.locked) {
      if (Math.abs(mx) < 12 && Math.abs(my) < 12) return;
      if (Math.abs(my) > Math.abs(mx)) {
        start.current = null;
        setDx(0);
        setDragging(false);
        return;
      }
      start.current.locked = true;
      setDragging(true);
    }
    event.preventDefault();
    setDx(mx);
  };

  const onUp = () => {
    if (!start.current) return;
    const delta = dx;
    start.current = null;
    setDragging(false);
    setDx(0);
    if (delta < -64) go(wrap(number + 1));
    if (delta > 64) go(wrap(number - 1));
  };

  return (
    <div
      className={cn("touch-pan-y", className)}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
    >
      <div
        className={dragging ? "will-change-transform" : "transition-transform duration-200"}
        style={{ transform: `translateX(${Math.max(-80, Math.min(80, dx * 0.35))}px)` }}
      >
        {children}
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">Стрелки или свайп — соседняя карта</p>
    </div>
  );
}
