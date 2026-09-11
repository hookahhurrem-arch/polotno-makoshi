import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { IconThreadKnot } from "@/components/brand-icons";
import { AppShell } from "@/components/app-shell";
import { loadJournal, removeJournalEntry, updateJournalNote } from "@/lib/oracle/journal";
import { spreadTitle } from "@/lib/oracle/spreads";
import { cardDisplayTitle, padCardNumber } from "@/lib/oracle/types";
import { useOracleStore } from "@/lib/oracle/store";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/journal")({ component: JournalPage });

function formatDate(iso: string, dayOnly = false): string {
  try {
    return new Intl.DateTimeFormat("ru", {
      day: "numeric",
      month: "long",
      ...(dayOnly ? {} : { hour: "2-digit", minute: "2-digit" }),
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function JournalPage() {
  const cards = useOracleStore((s) => s.cards);
  const [entries, setEntries] = useState(() => loadJournal());
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter(
      (entry) =>
        entry.question.toLowerCase().includes(q) ||
        (entry.note ?? "").toLowerCase().includes(q) ||
        (entry.dayLine ?? "").toLowerCase().includes(q),
    );
  }, [entries, query]);

  return (
    <AppShell scene="casket">
      <header className="max-w-xl">
        <p className="overline">Прошлые нити</p>
        <h1 className="display-title mt-4 text-[2.8rem] tracking-[0.12em] sm:text-6xl">Архив Полотна</h1>
        <div className="gold-rule mt-5 w-20" />
        <p className="mt-5 text-sm leading-[1.6] text-muted-foreground">
          Сохранённые расклады остаются на этом устройстве.
        </p>
        {entries.length ? (
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск по вопросу"
            className="field-ink mt-6 h-12 w-full max-w-sm px-4 text-sm"
          />
        ) : null}
      </header>

      {visible.length === 0 ? (
        <div className="mt-16 flex max-w-sm flex-col items-start gap-4">
          <IconThreadKnot className="text-primary" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            {entries.length ? "Нить не нашлась." : "Пока пусто. Вытяните нить и сохраните расклад."}
          </p>
          <Button asChild>
            <Link to="/reading">Вытянуть карту</Link>
          </Button>
        </div>
      ) : (
        <ul className="mt-16 max-w-xl space-y-16">
          {visible.map((entry) => (
            <li key={entry.id} className="knot-entry">
              <img src="/scenes/knot.webp" alt="" className="knot-prop" />
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="overline">{formatDate(entry.createdAt, entry.kind === "day")}</p>
                  <p className="mt-2 font-display text-2xl text-sand">
                    {entry.kind === "day" ? "Нить дня" : spreadTitle(entry.spread, entry.cards.length)}
                  </p>
                  {entry.kind === "day" && entry.dayLine ? (
                    <p className="mt-2 font-display text-xl text-sand">{entry.dayLine}</p>
                  ) : entry.question && entry.kind !== "day" ? (
                    <p className="mt-2 text-sm text-muted-foreground">«{entry.question}»</p>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={() => setEntries(removeJournalEntry(entry.id))}
                  className="text-xs text-muted-foreground hover:text-sand"
                >
                  Удалить
                </button>
              </div>
              <ol className="mt-5 flex flex-wrap gap-2">
                {entry.cards.map((num) => {
                  const card = cards.find((c) => c.number === num);
                  return (
                    <li key={`${entry.id}-${num}`}>
                      <Link to="/card/$number" params={{ number: String(num) }} className="block w-16">
                        {card?.imageData ? (
                          <img src={card.imageData} alt="" className="aspect-card w-full object-cover" />
                        ) : (
                          <span className="flex aspect-card items-center justify-center bg-card text-[10px] text-muted-foreground">
                            {padCardNumber(num)}
                          </span>
                        )}
                        <span className="mt-1 block truncate text-[10px] text-sand">
                          {card ? cardDisplayTitle(card) : `Карта ${num}`}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
              {entry.weaving ? <p className="mt-5 text-sm leading-[1.6]">{entry.weaving}</p> : null}
              <textarea
                defaultValue={entry.note ?? ""}
                placeholder="Своя заметка к раскладу"
                onBlur={(e) => setEntries(updateJournalNote(entry.id, e.target.value))}
                className="field-ink mt-5 min-h-20 w-full px-3 py-2 text-sm"
              />
            </li>
          ))}
        </ul>
      )}
    </AppShell>
  );
}
