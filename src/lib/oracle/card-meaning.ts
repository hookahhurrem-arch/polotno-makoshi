export type LifeSphere = "love" | "work" | "health" | "conflict" | "magic" | "self";

export type CardMeaning = {
  core: string;
  keys: string[];
  spheres: Partial<Record<LifeSphere, string>>;
  action: string;
  yesNo: "да" | "нет" | "условно";
  tempo: "быстро" | "средне" | "медленно";
};

function splitParagraphs(text: string): string[] {
  return text.split(/\n+/).map((s) => s.trim()).filter(Boolean);
}

function isCatalog(text: string): boolean {
  const t = text.trim();
  if (!t) return true;
  return (t.match(/,/g) ?? []).length >= 2 && t.length < 90 && !/[а-яё]{4,}(?:ет|ит|ут|ют|ает|яет)\b/i.test(t);
}

function sentences(text: string): string[] {
  return text.match(/[^.!?]+[.!?]+/g)?.map((s) => s.trim()) ?? (text.trim() ? [text.trim()] : []);
}

function namedSection(description: string, labels: string[]): string | null {
  const lower = description.toLowerCase();
  for (const label of labels) {
    const idx = lower.indexOf(label.toLowerCase());
    if (idx < 0) continue;
    const from = description.slice(idx);
    const cut = from.search(/\n(?=В |По |Как |Здоровье)/);
    const chunk = (cut >= 0 ? from.slice(0, cut) : from)
      .replace(/^(В отношениях|В делах и деньгах|В делах|В деньгах|По здоровью|Здоровье|Как человек)\s*[-—:]*\s*/i, "")
      .trim();
    return chunk || null;
  }
  return null;
}

function coreFromDescription(description: string, keywords: string): string {
  const parts = splitParagraphs(description);
  const first = parts[0] || keywords.trim();
  const bits = sentences(first);
  if (bits.length === 0) return keywords.trim();
  if (isCatalog(bits[0]!) && bits.length > 1) return bits.slice(1, 3).join(" ");
  if (isCatalog(first) && parts[1]) return parts[1];
  return bits.slice(0, 2).join(" ");
}

function keysFrom(keywords: string, core: string): string[] {
  const fromKeys = keywords
    .split(/[,;]/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (fromKeys.length >= 3) return fromKeys.slice(0, 7);
  const extra = core
    .split(/[,.]/)
    .map((s) => s.trim())
    .filter((s) => s.length > 2 && s.length < 28);
  return [...new Set([...fromKeys, ...extra])].slice(0, 7);
}

function tempoFrom(text: string): CardMeaning["tempo"] {
  const t = text.toLowerCase();
  if (/срочн|быстр|гонец|молни|вспыш|спешк/.test(t)) return "быстро";
  if (/якорь|медлен|долго|застой|пауз|останов/.test(t)) return "медленно";
  return "средне";
}

function yesNoFrom(text: string): CardMeaning["yesNo"] {
  const t = text.toLowerCase();
  if (/удач|светл|да,\s|союз|дар|крепк/.test(t) && !/нет|разрыв|потер|разруш/.test(t)) return "да";
  if (/гроб|разруш|отказ|конец|нет пути/.test(t)) return "нет";
  return "условно";
}

export function meaningFromCard(card: { keywords: string; description: string }): CardMeaning {
  const core = coreFromDescription(card.description, card.keywords);
  const love = namedSection(card.description, ["В отношениях"]);
  const work =
    namedSection(card.description, ["В делах и деньгах", "В делах", "В деньгах"]) ||
    namedSection(card.description, ["В деньгах"]);
  const health = namedSection(card.description, ["По здоровью", "Здоровье"]);
  const self = namedSection(card.description, ["Как человек"]);
  const actionSource = work || love || core;
  const actionBits = sentences(actionSource);
  const action = (actionBits[actionBits.length - 1] || core).slice(0, 180);
  return {
    core: core.slice(0, 400),
    keys: keysFrom(card.keywords, core),
    spheres: {
      love: love?.slice(0, 320) || undefined,
      work: work?.slice(0, 320) || undefined,
      health: health?.slice(0, 280) || undefined,
      self: self?.slice(0, 280) || undefined,
    },
    action,
    yesNo: yesNoFrom(`${core} ${card.keywords}`),
    tempo: tempoFrom(`${core} ${card.keywords} ${card.description}`),
  };
}

export function sphereOfQuestion(question: string): LifeSphere {
  const q = question.toLowerCase();
  if (/маги|ритуал|сглаз|порч|эгрегор|приворот|защит|сущност/.test(q)) return "magic";
  if (/собран|совеща|работ|карьер|начальник|коллег|офис|проект|доклад|переговоры|должност/.test(q))
    return "work";
  if (/суд|враг|конфликт|ссор|борьб/.test(q)) return "conflict";
  if (/деньг|денег|бизнес|долг|доход|прибыл|куп|продаж|зарплат|сделк/.test(q) && !/чувств|люб/.test(q))
    return "work";
  if (/здоров|болез|самочув/.test(q)) return "health";
  if (/люб|отнош|партн|муж|жен|брак|измен|чувств|свидан|семь|роман/.test(q)) return "love";
  return "self";
}

export function sphereLabel(sphere: LifeSphere): string {
  switch (sphere) {
    case "love":
      return "отношения";
    case "work":
      return "работа и дело";
    case "health":
      return "здоровье и состояние";
    case "conflict":
      return "конфликт";
    case "magic":
      return "воздействие и порча";
    default:
      return "внутренний путь";
  }
}
