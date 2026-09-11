import type { SpreadKind } from "./types";

const KEY = "makosh-last-reading";

export type LastReading = {
  s: SpreadKind;
  q?: string;
  go: true;
  c1?: number;
  c2?: number;
  c3?: number;
  c4?: number;
  c5?: number;
  c6?: number;
  c7?: number;
  c8?: number;
  c9?: number;
};

export function saveLastReading(value: LastReading) {
  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(value));
  } catch {
    /* ignore */
  }
}

export function loadLastReading(): LastReading | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as LastReading;
    if (!data?.go || !data.c1) return null;
    return data;
  } catch {
    return null;
  }
}

export function searchFromIds(kind: SpreadKind, question: string, ids: number[]): LastReading {
  return {
    s: kind,
    q: question || undefined,
    go: true,
    c1: ids[0],
    c2: ids[1],
    c3: ids[2],
    c4: ids[3],
    c5: ids[4],
    c6: ids[5],
    c7: ids[6],
    c8: ids[7],
    c9: ids[8],
  };
}

export function idsFromSearch(search: {
  c1?: number;
  c2?: number;
  c3?: number;
  c4?: number;
  c5?: number;
  c6?: number;
  c7?: number;
  c8?: number;
  c9?: number;
}): number[] {
  return [search.c1, search.c2, search.c3, search.c4, search.c5, search.c6, search.c7, search.c8, search.c9].filter(
    (n): n is number => typeof n === "number",
  );
}
