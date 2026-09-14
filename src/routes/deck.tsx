import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { CardTile } from "@/components/card-tile";
import { threadTone } from "@/lib/oracle/polarity";
import { useOracleStore } from "@/lib/oracle/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/deck")({ component: DeckPage });

type Filter = "all" | "light" | "dark";

function DeckPage() {
  const cards = useOracleStore((s) => s.cards);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    const fromHash = window.location.hash.replace("#", "");
    const fromMemory = (() => {
      try {
        const n = window.sessionStorage.getItem("makosh-last-card");
        return n ? `card-${n}` : "";
      } catch {
        return "";
      }
    })();
    const id = fromHash || fromMemory;
    if (!id) return;
    const node = document.getElementById(id);
    node?.scrollIntoView({ block: "center" });
  }, [cards]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return cards.filter((card) => {
      const tone = threadTone(card);
      if (filter === "light" && tone !== "light") return false;
      if (filter === "dark" && tone !== "dark") return false;
      if (!q) return true;
      return (
        card.title.toLowerCase().includes(q) ||
        card.keywords.toLowerCase().includes(q) ||
        String(card.number).includes(q)
      );
    });
  }, [cards, filter, query]);

  return (
    <AppShell scene="book">
      <div className="flex flex-col gap-8">
        <header className="grim-head max-w-xl">
          <p className="font-display text-xl tracking-[0.14em] text-gold">Гримуар</p>
          <h1 className="display-title mt-2">Слово. Образ. Знание.</h1>
          <p className="mt-4 max-w-sm text-sm leading-[1.65] text-muted-foreground">
            Сто восемь нитей. Нажмите карту, чтобы прочитать её.
          </p>
          <div className="gold-rule mt-5 w-16" />
        </header>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-5">
            {(
              [
                ["all", "Все"],
                ["light", "Светлые"],
                ["dark", "Тёмные"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setFilter(id)}
                className={cn("filter-thread text-sm", filter === id && "is-on")}
              >
                {label}
              </button>
            ))}
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск"
            className="field-ink h-11 w-full max-w-xs px-0 text-sm text-sand"
          />
        </div>

        <div className="grid grid-cols-2 gap-5 md:gap-6">
          {visible.map((card) => (
            <CardTile key={card.number} card={card} className="card-frame" />
          ))}
        </div>
        {visible.length === 0 ? (
          <p className="py-10 text-sm text-muted-foreground">Нить не нашлась.</p>
        ) : null}
      </div>
    </AppShell>
  );
}
