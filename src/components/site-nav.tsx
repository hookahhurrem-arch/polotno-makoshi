import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  IconBookClasp,
  IconHasp,
  IconHearth,
  IconSpindle,
  IconThreadKnot,
  IconWindow,
} from "@/components/brand-icons";
import { loadLastReading, type LastReading } from "@/lib/oracle/last-reading";
import { setSoundEnabled, soundEnabled, startCrackle, stopCrackle } from "@/lib/oracle/sound";
import { useOracleStore } from "@/lib/oracle/store";
import { cn } from "@/lib/utils";

const ITEMS = [
  { to: "/", label: "Главная", icon: IconWindow },
  { to: "/reading", label: "Расклад", icon: IconThreadKnot },
  { to: "/deck", label: "Гримуар", icon: IconBookClasp },
  { to: "/journal", label: "Дневник", icon: IconHasp },
  { to: "/about", label: "О Полотне", icon: IconSpindle },
] as const;

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const name = useOracleStore((s) => s.settings.name);
  const [last, setLast] = useState<LastReading | null>(null);
  const [sound, setSound] = useState(false);

  useEffect(() => {
    setLast(loadLastReading());
    setSound(soundEnabled());
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-[#2a211e] bg-[#0b0908]/94 backdrop-blur-[16px]">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-7 md:px-12">
          <Link to="/" className="font-display text-lg tracking-[0.08em] text-sand">
            {name}
          </Link>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                const next = !sound;
                setSound(next);
                setSoundEnabled(next);
                if (next) void startCrackle();
                else stopCrackle();
              }}
              className="px-2 py-1 text-sand"
              aria-pressed={sound}
              aria-label={sound ? "Выключить звук" : "Включить звук"}
              title={sound ? "Звук включён" : "Звук выключен"}
            >
              <span className={cn("sound-mark", sound && "is-on")}>
                <IconHearth />
              </span>
            </button>
            <nav className="hidden items-center gap-1 md:flex">
              {ITEMS.map((item) => {
                const active =
                  item.to === "/"
                    ? pathname === "/"
                    : pathname === item.to || pathname.startsWith(`${item.to}/`);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    search={item.to === "/reading" && last ? last : undefined}
                    data-active={active}
                    className={cn(
                      "nav-thread px-3 py-2 text-sm",
                      active ? "text-sand" : "text-muted-foreground hover:text-sand",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      <nav className="site-dock fixed inset-x-0 bottom-0 z-30 border-t border-[#2a211e] pb-[env(safe-area-inset-bottom)] md:hidden">
        <ul className="grid grid-cols-5">
          {ITEMS.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  search={item.to === "/reading" && last ? last : undefined}
                  className={cn(
                    "flex min-h-14 flex-col items-center justify-center gap-1 font-[family-name:var(--font-ui)] text-[10px] tracking-[0.12em]",
                    active ? "text-sand" : "text-muted-foreground",
                  )}
                >
                  <Icon />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
