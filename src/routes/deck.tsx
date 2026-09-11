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
      <div className="book-ink flex flex-col gap-8">
        <header className="max-w-xl">
          <h1 className="display-title text-[2.6rem] sm:text-5xl">Гримуар</h1>
          <p className="mt-4 max-w-sm text-sm leading-[1.6]">
            Сто восемь нитей. Нажмите карту, чтобы прочитать её.
          </p>
        </header>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Название, номер, ключевые слова"
            className="field-ink h-11 w-full max-w-sm px-0 text-sm"
          />
          <div className="flex gap-4">
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
                className={cn("text-sm", filter === id ? "text-[#6d1414]" : "opacity-60")}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 md:gap-6">
          {visible.map((card) => (
            <CardTile key={card.number} card={card} className="card-on-page" />
          ))}
        </div>
        {visible.length === 0 ? (
          <p className="py-10 text-sm">Нить не нашлась.</p>
        ) : null}
      </div>
    </AppShell>
  );
}
