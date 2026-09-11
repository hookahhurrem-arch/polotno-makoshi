import type { JournalEntry } from "./types";

const KEY = "living-oracle-journal-v1";

export function loadJournal(): JournalEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as JournalEntry[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveJournal(entries: JournalEntry[]): void {
  window.localStorage.setItem(KEY, JSON.stringify(entries.slice(0, 80)));
}

export function addJournalEntry(entry: JournalEntry): JournalEntry[] {
  const next = [entry, ...loadJournal().filter((item) => item.id !== entry.id)].slice(0, 80);
  saveJournal(next);
  return next;
}

export function rememberDayThread(input: {
  date: string;
  number: number;
  dayLine: string;
}): JournalEntry[] {
  return addJournalEntry({
    id: `day-${input.date}`,
    createdAt: `${input.date}T12:00:00`,
    question: "Нить дня",
    spread: "one",
    cards: [input.number],
    kind: "day",
    dayLine: input.dayLine,
  });
}

export function removeJournalEntry(id: string): JournalEntry[] {
  const next = loadJournal().filter((entry) => entry.id !== id);
  saveJournal(next);
  return next;
}

export function updateJournalNote(id: string, note: string): JournalEntry[] {
  const next = loadJournal().map((entry) => (entry.id === id ? { ...entry, note } : entry));
  saveJournal(next);
  return next;
}
