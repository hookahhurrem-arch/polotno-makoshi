import { useEffect, useState } from "react";
import { CardBack } from "@/components/card-back";

const KEY = "makosh-splash";

export function Splash() {
  const [phase, setPhase] = useState<"show" | "leave" | "done">("show");

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(KEY) === "1") {
        setPhase("done");
        return;
      }
    } catch {
      /* ignore */
    }
    const title = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem(KEY, "1");
      } catch {
        /* ignore */
      }
    }, 400);
    const leave = window.setTimeout(() => setPhase("leave"), 900);
    const done = window.setTimeout(() => setPhase("done"), 1400);
    return () => {
      window.clearTimeout(title);
      window.clearTimeout(leave);
      window.clearTimeout(done);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[80] flex flex-col items-center justify-center bg-[#0b0908] ${phase === "leave" ? "splash-leave" : ""}`}
    >
      <div className="relative flex size-40 items-center justify-center">
        <div className="splash-glow absolute size-52" />
        <div className="relative size-36 overflow-hidden">
          <CardBack className="size-full" />
        </div>
      </div>
      <p className="overline relative mt-8">Темнояр</p>
    </div>
  );
}
