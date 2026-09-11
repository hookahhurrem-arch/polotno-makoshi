import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Atmosphere } from "@/components/atmosphere";
import { SiteNav } from "@/components/site-nav";
import { cn } from "@/lib/utils";

export function AppShell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className="relative z-10 min-h-dvh text-foreground">
      <Atmosphere />
      <SiteNav />
      <div className={cn("chamber-page relative z-10 mx-auto max-w-6xl px-7 pb-32 pt-10 md:px-12 md:pb-16 md:pt-14", className)}>
        {children}
        <footer className="mt-24 max-w-xl pb-4">
          <div className="gold-rule w-16" />
          <p className="mt-4 text-xs tracking-wide text-muted-foreground">
            Полотно Макоши · Темнояр · 108 нитей
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <Link to="/about" className="hover:text-sand">
              О колоде
            </Link>
            <Link to="/journal" className="hover:text-sand">
              Дневник
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
