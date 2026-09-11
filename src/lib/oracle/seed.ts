import { emptyDeck, type OracleCard } from "./types";
import { OFFICIAL_CARDS } from "./deck-data";

export const MAKOSH_IMAGE = "/cards/makosh.jpg";
export const AUTHOR_IMAGE = "/author/temnoyar.jpg";
export const MBK_VERSION = 1;

export function applyOfficialDeck(deck: OracleCard[]): OracleCard[] {
  const now = new Date().toISOString();
  const prev = new Map(deck.map((card) => [card.number, card]));
  return OFFICIAL_CARDS.map((src) => {
    const old = prev.get(src.number);
    return {
      number: src.number,
      title: src.title,
      keywords: src.keywords,
      description: src.description,
      imageData: src.image,
      videoUrl: old?.videoUrl && !old.videoUrl.startsWith("blob:") ? old.videoUrl : "",
      dayLine: old?.dayLine || src.dayLine || "",
      dayLooks: old?.dayLooks || src.dayLooks || "",
      dayDo: old?.dayDo || src.dayDo || "",
      dayAvoid: old?.dayAvoid || src.dayAvoid || "",
      updatedAt: now,
    };
  });
}

export function applySeed(deck: OracleCard[]): OracleCard[] {
  return applyOfficialDeck(deck.length === 108 ? deck : emptyDeck());
}

/** If an old session still has the placeholder «Макошь» as card 001, replace with the official МБК. */
export function applyMakoshBrand(
  cards: OracleCard[],
  settingsName: string,
): { cards: OracleCard[]; changed: boolean } {
  const card1 = cards.find((c) => c.number === 1);
  const filled = cards.filter((c) => c.title.trim()).length;
  const already = settingsName === "Полотно Макоши" && card1?.title === "Гонец" && filled >= 100;
  if (already) return { cards, changed: false };
  return { cards: applyOfficialDeck(cards), changed: true };
}
