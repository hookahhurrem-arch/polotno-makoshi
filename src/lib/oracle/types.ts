export const DECK_SIZE = 108;

export type OracleCard = {
  number: number;
  title: string;
  keywords: string;
  description: string;
  imageData: string | null;
  videoUrl: string;
  dayLine: string;
  dayLooks: string;
  dayDo: string;
  dayAvoid: string;
  updatedAt: string;
};

export type DeckSettings = {
  name: string;
  author: string;
  tagline: string;
  intro: string;
  seeded: boolean;
  mbkVersion?: number;
  updatedAt: string;
};

export type SpreadKind = "one" | "two" | "three" | "knot" | "foreign" | "krosna";

export type JournalEntry = {
  id: string;
  createdAt: string;
  question: string;
  spread: SpreadKind;
  cards: number[];
  weaving?: string;
  note?: string;
  kind?: "reading" | "day";
  dayLine?: string;
};

export function padCardNumber(n: number): string {
  return String(n).padStart(3, "0");
}

export function cardDisplayTitle(card: OracleCard): string {
  const title = card.title.trim();
  return title || `Карта ${padCardNumber(card.number)}`;
}

export function isCardFilled(card: OracleCard): boolean {
  return Boolean(
    card.title.trim() ||
      card.keywords.trim() ||
      card.description.trim() ||
      card.imageData ||
      card.videoUrl.trim(),
  );
}

export function emptyCard(number: number): OracleCard {
  return {
    number,
    title: "",
    keywords: "",
    description: "",
    imageData: null,
    videoUrl: "",
    dayLine: "",
    dayLooks: "",
    dayDo: "",
    dayAvoid: "",
    updatedAt: new Date(0).toISOString(),
  };
}

export function withDayFields(card: OracleCard): OracleCard {
  return {
    ...emptyCard(card.number),
    ...card,
    dayLine: card.dayLine ?? "",
    dayLooks: card.dayLooks ?? "",
    dayDo: card.dayDo ?? "",
    dayAvoid: card.dayAvoid ?? "",
  };
}

export function emptyDeck(): OracleCard[] {
  return Array.from({ length: DECK_SIZE }, (_, i) => emptyCard(i + 1));
}

export const DEFAULT_SETTINGS: DeckSettings = {
  name: "Полотно Макоши",
  author: "Темнояр",
  tagline: "108 нитей. Одна ткань судьбы.",
  intro:
    "Макошь — великая пряха, не судья на камне. Каждая карта показывает, как прямо сейчас переплелись нити вашей жизни: где затянулся узел, где вплелась чужая нитка, куда пойдёт узор, если ничего не менять.",
  seeded: false,
  mbkVersion: 0,
  updatedAt: new Date(0).toISOString(),
};
