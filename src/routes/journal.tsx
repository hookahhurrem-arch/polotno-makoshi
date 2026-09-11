import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { loadJournal, removeJournalEntry, updateJournalNote } from "@/lib/oracle/journal";
import { spreadTitle } from "@/lib/oracle/spreads";
import { cardDisplayTitle, padCardNumber } from "@/lib/oracle/types";
import { useOracleStore } from "@/lib/oracle/store";

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
        <h1 className="display-title text-[2.6rem] sm:text-5xl">Архив</h1>
        {entries.length ? (
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск по вопросу"
            className="field-ink mt-6 h-12 w-full max-w-sm px-0 text-sm"
          />
        ) : (
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Ларец ещё пуст.{" "}
            <Link to="/reading" className="text-sand">
              Сплести нить
            </Link>
          </p>
        )}
      </header>

      {entries.length && visible.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">Нить не нашлась.</p>
      ) : visible.length ? (
        <ul className="mt-16 max-w-xl space-y-16">
          {visible.map((entry) => (
            <li key={entry.id} className="knot-entry">
              <img src="/scenes/knot.webp" alt="" className="knot-prop" />
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs text-muted-foreground">
                    {formatDate(entry.createdAt, entry.kind === "day")}
                  </p>
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
                          <img src={card.imageData} alt="" className="card-on-page aspect-card w-full object-cover" />
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
                className="field-ink mt-5 min-h-20 w-full px-0 py-2 text-sm"
              />
            </li>
          ))}
        </ul>
      ) : null}
    </AppShell>
  );
}
