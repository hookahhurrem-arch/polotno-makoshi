import type { ReactNode } from "react";
import { Atmosphere } from "@/components/atmosphere";
import { EmberField } from "@/components/ember-field";
import { SceneStage } from "@/components/scene-stage";
import { SiteFooter } from "@/components/site-footer";
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
      <StillLife candle={scene === "table"} yarn={false} />
      <SiteNav />
      <EmberField />
      <div className={cn("chamber-page relative z-10 mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-6xl flex-col px-6 pt-8 pb-[calc(8.5rem+env(safe-area-inset-bottom))] md:px-12 md:pt-12 md:pb-16", className)}>
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </div>
    </div>
  );
}
