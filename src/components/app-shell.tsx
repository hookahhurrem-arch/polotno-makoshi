import type { ReactNode } from "react";
import { Atmosphere } from "@/components/atmosphere";
import { SceneStage } from "@/components/scene-stage";
import { SiteNav } from "@/components/site-nav";
import { StillLife } from "@/components/still-life";
import type { SceneName } from "@/lib/scenes";
import { cn } from "@/lib/utils";

export function AppShell({
  children,
  className,
  scene,
}: {
  children: ReactNode;
  className?: string;
  scene?: SceneName;
}) {
  return (
    <div className="relative z-10 min-h-dvh text-foreground">
      <Atmosphere />
      {scene ? <SceneStage name={scene} /> : null}
      <StillLife candle={scene === "table"} yarn={scene === "chamber"} />
      <SiteNav />
      <div className={cn("chamber-page relative z-10 mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-6xl flex-col px-6 pb-32 pt-8 md:px-12 md:pb-16 md:pt-12", className)}>
        <div className="flex-1">{children}</div>
        <footer className="mt-16 pb-2">
          <div className="gold-rule mx-auto w-24" />
          <p className="mt-3 text-center text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
            Темнояр · 108 нитей
          </p>
        </footer>
      </div>
    </div>
  );
}
