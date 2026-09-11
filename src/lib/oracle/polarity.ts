import type { OracleCard } from "./types";

const LIGHT =
  /удач|светл|благ|любов|урожа|жив(ая|ой) вод|счастлив|дар|плод|луг|мир|радост|свадьб|мёд|мёд|тепло|исцел|удачн/i;
const DARK =
  /гроб|смерть|боль|яд|чёрн|черн|чуж|узел|болезн|разочар|страх|ночь|мор\b|кров|враг|лож|тоска|гнев|порч|проклят|тёмн|темн/i;

export type ThreadTone = "light" | "dark" | "plain";

export function threadTone(card: OracleCard): ThreadTone {
  const blob = `${card.title} ${card.keywords} ${card.description.slice(0, 280)}`;
  const dark = DARK.test(blob);
  const light = LIGHT.test(blob);
  if (dark && !light) return "dark";
  if (light && !dark) return "light";
  if (dark) return "dark";
  if (light) return "light";
  return "plain";
}
