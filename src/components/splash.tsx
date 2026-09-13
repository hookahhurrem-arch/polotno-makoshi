import { useEffect, useState } from "react";
import { CardBack } from "@/components/card-back";
import { setSoundEnabled, startCrackle } from "@/lib/oracle/sound";

const KEY = "makosh-threshold";

export function Splash() {
  const [phase, setPhase] = useState<"full" | "short" | "leave" | "done">("full");

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(KEY) === "1") {
        setPhase("short");
        const t = window.setTimeout(() => setPhase("done"), 900);
        return () => window.clearTimeout(t);
      }
    } catch {
      /* ignore */
    }
    return undefined;
  }, []);

  const enter = (withSound: boolean) => {
    setSoundEnabled(withSound);
    if (withSound) void startCrackle();
    try {
      window.sessionStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    setPhase("leave");
    window.setTimeout(() => setPhase("done"), 900);
  };

  if (phase === "done") return null;

  const short = phase === "short";

  return (
    <div
      className={`threshold ${phase === "leave" ? "splash-leave" : ""}`}
      role="dialog"
      aria-label="Порог горницы"
    >
      <div className="threshold-veil" />
      <div className="relative z-10 flex flex-col items-center px-8 text-center">
        <div className="relative flex size-36 items-center justify-center">
          <div className="splash-glow absolute size-48" />
          <div className="relative size-28 overflow-hidden">
            <CardBack className="size-full" />
          </div>
        </div>
        <p className="overline relative mt-8">Порог</p>
        <h1 className="mt-3 font-display text-4xl tracking-[0.08em] text-sand">Горница Пряхи</h1>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
          {short ? "Свет ещё держится." : "За занавесью ткётся полотно. Войдите со звуком или в тишине."}
        </p>
        {short ? null : (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" className="btn-carmine min-h-12 px-6" onClick={() => enter(true)}>
              Войти со звуком
            </button>
            <button
              type="button"
              className="min-h-12 border border-[#2a211e] px-6 text-sm text-sand"
              onClick={() => enter(false)}
            >
              Войти в тишине
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
