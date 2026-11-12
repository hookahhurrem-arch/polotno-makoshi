import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { IconBookClasp, IconHearth, IconSpindle, IconThreadKnot, IconWindow } from "@/components/brand-icons";
import { setSoundEnabled, soundEnabled, startCrackle, stopCrackle } from "@/lib/oracle/sound";
import { useOracleStore } from "@/lib/oracle/store";
import { cn } from "@/lib/utils";

const ITEMS = [
  { to: "/", label: "Главная", icon: IconWindow },
  { to: "/learn", label: "Обучение", icon: IconThreadKnot },
  { to: "/deck", label: "Гримуар", icon: IconBookClasp },
  { to: "/about", label: "О Полотне", icon: IconSpindle },
] as const;

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const name = useOracleStore((s) => s.settings.name);
  const [sound, setSound] = useState(false);
  const [slim, setSlim] = useState(false);

  useEffect(() => {
    setSound(soundEnabled());
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setSlim(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={cn("site-mast sticky top-0 z-30", pathname === "/" && !slim && "is-clear", slim && "is-slim")}>
        <div className={cn("mx-auto flex max-w-6xl items-center justify-between px-6 md:px-12", slim ? "h-14" : "h-16")}>
          <Link to="/" className="brand-mark">
            <span className="brand-name">{name}</span>
            <span className="brand-sub">Колода смыслов</span>
          </Link>
          <div className="flex items-center gap-1">
            <Link to="/consult" className="nav-consult">
              Консультация
            </Link>
            <button
              type="button"
              onClick={() => {
                const next = !sound;
                setSound(next);
                setSoundEnabled(next);
                if (next) void startCrackle();
                else stopCrackle();
              }}
              className="px-2 py-2 text-sand"
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
                const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    data-active={active}
                    className={cn("nav-thread px-3 py-2 text-sm", active ? "text-sand" : "text-muted-foreground hover:text-sand")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      <nav className="site-dock fixed inset-x-0 bottom-0 z-30 pb-[env(safe-area-inset-bottom)] md:hidden">
        <ul className="grid grid-cols-4">
          {ITEMS.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  data-active={active}
                  className={cn(
                    "dock-item flex min-h-14 flex-col items-center justify-center gap-1 font-[family-name:var(--font-ui)] text-xs tracking-[0.08em]",
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
