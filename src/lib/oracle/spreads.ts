import type { SpreadKind } from "./types";

export type SpreadDef = {
  id: SpreadKind;
  count: number;
  title: string;
  hint: string;
  roles: string[];
  layout: string;
};

export const SPREADS: SpreadDef[] = [
  {
    id: "one",
    count: 1,
    title: "Одна нить",
    hint: "Один ясный ответ",
    roles: ["Ответ"],
    layout: "grid-cols-1 max-w-[16.5rem]",
  },
  {
    id: "three",
    count: 3,
    title: "Три карты",
    hint: "Начало, поворот, исход",
    roles: ["Начало", "Поворот", "Исход"],
    layout: "grid-cols-3",
  },
  {
    id: "knot",
    count: 4,
    title: "Узел",
    hint: "Что завязалось и как развязать",
    roles: ["Что завязало", "Что держит", "Где путаница", "Как развязать"],
    layout: "grid-cols-2 max-w-md",
  },
  {
    id: "foreign",
    count: 3,
    title: "Чужая нитка",
    hint: "Есть ли вмешательство извне",
    roles: ["Есть ли чужое", "Как влияет", "К чему ведёт"],
    layout: "grid-cols-3",
  },
  {
    id: "two",
    count: 6,
    title: "Две нити",
    hint: "Два человека — две линии",
    roles: [
      "А думает",
      "А делает",
      "Куда ведёт А",
      "Б думает",
      "Б делает",
      "Куда ведёт Б",
    ],
    layout: "grid-cols-3",
  },
  {
    id: "krosna",
    count: 9,
    title: "Кросна",
    hint: "Полный разбор полотна",
    roles: [
      "Суть",
      "Исток",
      "Скрытая причина",
      "Действие А",
      "Действие Б",
      "Скрытый фактор",
      "Перелом",
      "Ближайшее",
      "Итоговая нить",
    ],
    layout: "grid-cols-3",
  },
];

export function spreadById(id: string | undefined): SpreadDef {
  return SPREADS.find((s) => s.id === id) ?? SPREADS[0]!;
}

export function parseSpreadId(raw: unknown, n?: unknown): SpreadKind {
  const id = typeof raw === "string" ? raw : "";
  if (SPREADS.some((s) => s.id === id)) return id as SpreadKind;
  if (n === 3 || n === "3") return "three";
  if (n === 4 || n === "4") return "knot";
  if (n === 6 || n === "6") return "two";
  if (n === 9 || n === "9") return "krosna";
  return "one";
}

export function spreadTitle(kind: SpreadKind, count = 0): string {
  const found = SPREADS.find((s) => s.id === kind);
  if (found) return found.title;
  if (count === 1) return "Одна нить";
  if (count === 3) return "Три карты";
  return "Расклад";
}
