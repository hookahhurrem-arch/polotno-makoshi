import { withDayFields, type OracleCard } from "./types";
import type { DayReading } from "./day-weaver";

const STORAGE = "makosh-thread-of-day-v4";
const SEED_KEY = "makosh-thread-person";

export type DayThreadState = {
  date: string;
  number: number;
  flipped: boolean;
  dayLine?: string;
  dayLooks?: string;
  dayDo?: string;
  dayAvoid?: string;
};

export function localDateKey(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function hashString(key: string): number {
  let hash = 2166136261;
  for (let i = 0; i < key.length; i += 1) {
    hash ^= key.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash) >>> 0;
}

function newSeed(): string {
  const bytes = new Uint8Array(16);
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < bytes.length; i += 1) bytes[i] = Math.floor(Math.random() * 256);
  }
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

export function personSeed(): string {
  if (typeof window === "undefined") return "server";
  try {
    const existing = window.localStorage.getItem(SEED_KEY);
    if (existing) return existing;
    const seed = newSeed();
    window.localStorage.setItem(SEED_KEY, seed);
    return seed;
  } catch {
    return "local";
  }
}

export function pickCardForDate(cards: OracleCard[], date: string, person = personSeed()): OracleCard | null {
  if (!cards.length) return null;
  const n = (hashString(`${date}::${person}`) % 108) + 1;
  return cards.find((card) => card.number === n) ?? cards[n - 1] ?? cards[0] ?? null;
}

export function officialDayReading(card: OracleCard): DayReading | null {
  const day = withDayFields(card);
  if (!day.dayLine.trim() || !day.dayLooks.trim() || !day.dayDo.trim() || !day.dayAvoid.trim()) return null;
  return {
    dayLine: day.dayLine.trim(),
    dayLooks: day.dayLooks.trim(),
    dayDo: day.dayDo.trim(),
    dayAvoid: day.dayAvoid.trim(),
  };
}

export function readingFromState(state: DayThreadState | null): DayReading | null {
  if (!state?.dayLine?.trim() || !state.dayLooks?.trim() || !state.dayDo?.trim() || !state.dayAvoid?.trim()) {
    return null;
  }
  return {
    dayLine: state.dayLine.trim(),
    dayLooks: state.dayLooks.trim(),
    dayDo: state.dayDo.trim(),
    dayAvoid: state.dayAvoid.trim(),
  };
}

export function loadDayThread(cards: OracleCard[]): DayThreadState | null {
  if (typeof window === "undefined") return null;
  const today = localDateKey();
  const picked = pickCardForDate(cards, today);
  if (!picked) return null;
  try {
    const raw = window.localStorage.getItem(STORAGE);
    if (raw) {
      const saved = JSON.parse(raw) as DayThreadState;
      if (saved?.date === today && saved.number >= 1 && saved.number <= 108) {
        return {
          date: today,
          number: saved.number,
          flipped: Boolean(saved.flipped),
          dayLine: saved.dayLine,
          dayLooks: saved.dayLooks,
          dayDo: saved.dayDo,
          dayAvoid: saved.dayAvoid,
        };
      }
    }
    return { date: today, number: picked.number, flipped: false };
  } catch {
    return { date: today, number: picked.number, flipped: false };
  }
}

export function saveDayThread(state: DayThreadState): void {
  try {
    window.localStorage.setItem(STORAGE, JSON.stringify(state));
  } catch {
    /* ignore */
  }
}
