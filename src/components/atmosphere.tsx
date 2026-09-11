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
      <div className="hearth hearth-breathe" />
      <div className="twill" />
      <div className="grain" />
      <div className="vignette" />
      {tier !== "min" ? <div ref={lamp} className="chamber-lamp" /> : null}
    </div>
  );
}
