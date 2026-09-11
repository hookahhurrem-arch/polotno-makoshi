import type { ReactNode } from "react";
import { Atmosphere } from "@/components/atmosphere";
import { SceneStage } from "@/components/scene-stage";
import { SiteNav } from "@/components/site-nav";
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
      <SiteNav />
      <div className={cn("chamber-page relative z-10 mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-6xl flex-col px-7 pb-32 pt-10 md:px-12 md:pb-16 md:pt-14", className)}>
        <div className="flex-1">{children}</div>
        <footer className="mt-20 max-w-xl pb-2">
          <div className="gold-rule w-10" />
          <p className="mt-3 text-[11px] text-muted-foreground">Темнояр · 108 нитей</p>
        </footer>
      </div>
    </div>
  );
}
