import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { IconScissors } from "@/components/brand-icons";
import { AppShell } from "@/components/app-shell";
import { CardTile } from "@/components/card-tile";
import { Input } from "@/components/ui/input";
import { isCardFilled } from "@/lib/oracle/types";
import { useOracleStore } from "@/lib/oracle/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/deck")({ component: DeckPage });

type Filter = "all" | "filled" | "empty";

function DeckPage() {
  const cards = useOracleStore((s) => s.cards);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const filledCount = cards.filter(isCardFilled).length;

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
      const filled = isCardFilled(card);
      if (filter === "filled" && !filled) return false;
      if (filter === "empty" && filled) return false;
      if (!q) return true;
      return (
        card.title.toLowerCase().includes(q) ||
        card.keywords.toLowerCase().includes(q) ||
        String(card.number).includes(q)
      );
    });
  }, [cards, filter, query]);

  return (
    <AppShell>
      <div className="flex flex-col gap-8">
        <header className="max-w-xl">
          <p className="overline">{filledCount} из 108</p>
          <h1 className="display-title mt-4 text-[2.8rem] tracking-[0.12em] sm:text-6xl">Гримуар</h1>
          <div className="gold-rule mt-5 w-20" />
          <p className="mt-5 text-sm leading-[1.6] text-muted-foreground">
            Сто восемь нитей полотна. Нажмите карту, чтобы прочитать её.
          </p>
        </header>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Название, номер, ключевые слова"
            className="sm:max-w-sm"
          />
          <div className="flex gap-1">
            {(
              [
                ["all", "Все"],
                ["filled", "Вплетены"],
                ["empty", "Пустые"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setFilter(id)}
                className={cn(
                  "h-11 px-3 text-sm transition-colors duration-150",
                  filter === id
                    ? "btn-carmine"
                    : "text-muted-foreground hover:text-sand",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 md:gap-6">
          {visible.map((card) => (
            <CardTile key={card.number} card={card} />
          ))}
        </div>
        {visible.length === 0 ? (
          <div className="flex flex-col items-start gap-3 py-16 text-sm text-muted-foreground">
            <IconScissors className="text-primary" />
            <p>Нить не нашлась.</p>
          </div>
        ) : null}
      </div>
    </AppShell>
  );
}
