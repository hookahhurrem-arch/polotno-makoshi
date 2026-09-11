export type FxTier = "full" | "lite" | "min";

export function fxTier(): FxTier {
  if (typeof window === "undefined") return "lite";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return "min";
  const cores = navigator.hardwareConcurrency || 4;
  const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
  const save = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  if (save || cores <= 4 || mem <= 4) return "lite";
  return "full";
}
