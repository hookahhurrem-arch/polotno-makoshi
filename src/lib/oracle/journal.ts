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

const SOFT_LIMIT = 80;
let lastSave: "ok" | "quota" | "blocked" = "ok";

export function journalSaveStatus(): "ok" | "quota" | "blocked" {
  return lastSave;
}

export function saveJournal(entries: JournalEntry[]): boolean {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(entries));
    lastSave = "ok";
    return true;
  } catch (error) {
    const quota =
      error instanceof DOMException && (error.name === "QuotaExceededError" || error.name === "NS_ERROR_DOM_QUOTA_REACHED");
    lastSave = quota ? "quota" : "blocked";
    return false;
  }
}

export function journalOverSoftLimit(entries: JournalEntry[]): boolean {
  return entries.length >= SOFT_LIMIT;
}

export function addJournalEntry(entry: JournalEntry): JournalEntry[] {
  const next = [entry, ...loadJournal().filter((item) => item.id !== entry.id)];
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

export function mergeJournal(current: JournalEntry[], incoming: JournalEntry[]): { entries: JournalEntry[]; added: number } {
  const seen = new Set(current.map((entry) => entry.id));
  const fresh = incoming.filter((entry) => entry && typeof entry.id === "string" && entry.id && !seen.has(entry.id));
  const entries = [...fresh, ...current].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  return { entries, added: fresh.length };
}
