import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { meaningFromCard, sphereLabel, sphereOfQuestion, type LifeSphere } from "./card-meaning";
import { isConflictQuestion, oneCardKind, spreadGuide, systemPrompt } from "./weaver-prompt";

export type WeaveCard = {
  number: number;
  title: string;
  keywords: string;
  description: string;
  role: string;
};

export type WeaveTurn = {
  role: "weaver" | "seeker";
  text: string;
};

export const SILENT_FALLBACK = "Полотно не отозвалось. Потяни нить ещё раз.";

const weaveSchema = z.object({
  question: z.string().max(400),
  spread: z.enum(["one", "two", "three", "knot", "foreign", "krosna"]),
  cards: z
    .array(
      z.object({
        number: z.number().int().min(1).max(108),
        title: z.string().max(120),
        keywords: z.string().max(240),
        description: z.string().max(4000),
        role: z.string().max(80),
      }),
    )
    .min(1)
    .max(9),
  history: z
    .array(
      z.object({
        role: z.enum(["weaver", "seeker"]),
        text: z.string().max(4000),
      }),
    )
    .max(8),
  followUp: z.string().max(400).optional(),
});

export type WeaveInput = z.infer<typeof weaveSchema>;

export function questionLens(question: string): string {
  return sphereLabel(sphereOfQuestion(question));
}

function namesInQuestion(question: string): string[] {
  const stop = new Set([
    "Что",
    "Как",
    "Когда",
    "Где",
    "Кто",
    "Чем",
    "Почему",
    "Какой",
    "Какая",
    "Какие",
    "Будет",
    "Буду",
    "Будем",
    "Любит",
    "Люблю",
    "Можно",
    "Скажи",
    "Будущее",
    "Завтра",
    "Сегодня",
    "Если",
    "Этот",
    "Эта",
    "Прогноз",
    "Собрание",
    "Встреча",
  ]);
  const found = question.match(/(?<![А-Яа-яЁёA-Za-z])[А-ЯЁ][а-яё]{2,}(?:\s+[А-ЯЁ][а-яё]+)?/g) ?? [];
  return [...new Set(found.filter((name) => !stop.has(name.split(" ")[0] ?? "")))];
}

function subjectOf(question: string): { subject: "self" | "third_person" | "situation"; name: string } {
  const names = namesInQuestion(question);
  const q = question.toLowerCase();
  if (names[0] && /(у |про |для |как .*у |собран.*у )/.test(q)) {
    return { subject: "third_person", name: names[0] };
  }
  if (names[0] && /(он|она|ему|ей|него|неё)/.test(q)) {
    return { subject: "third_person", name: names[0] };
  }
  if (names[0]) return { subject: "third_person", name: names[0] };
  if (!q.trim()) return { subject: "situation", name: "" };
  return { subject: "self", name: "" };
}

function questionType(question: string): string {
  const s = question.toLowerCase();
  if (/стоит ли|получится ли|выйдет ли|да или нет|удастся/.test(s)) return "да/нет";
  if (/а или|или .*или|выбрать|что лучше/.test(s)) return "выбор";
  if (/что делать|как поступить|как себя вести|совет/.test(s)) return "совет";
  if (/что он|что она|как .*относ|что чувств|что думает/.test(s)) return "отношение";
  if (/почему|что происходит|что творится/.test(s)) return "диагностика";
  if (/когда|срок|как скоро/.test(s)) return "сроки";
  if (/как пройд|чем законч|что будет|прогноз|завтра|как пройдет/.test(s)) return "прогноз";
  return "прогноз";
}

function sphereMeaningFor(sphere: LifeSphere, meaning: ReturnType<typeof meaningFromCard>): string | null {
  if (sphere === "love") return meaning.spheres.love ?? null;
  if (sphere === "work" || sphere === "conflict") return meaning.spheres.work ?? meaning.spheres.conflict ?? null;
  if (sphere === "health") return meaning.spheres.health ?? null;
  if (sphere === "magic") return meaning.spheres.magic ?? null;
  return meaning.spheres.self ?? null;
}

function stripCatalogLine(text: string): string {
  const t = text.trim();
  const bits = t.match(/[^.!?]+[.!?]+/g)?.map((s) => s.trim()) ?? [t];
  const useful = bits.filter((s) => !isCatalogish(s));
  return (useful[0] || bits.slice(1).join(" ") || t).replace(/\.+$/, "");
}

function isCatalogish(text: string): boolean {
  return (text.match(/,/g) ?? []).length >= 2 && text.length < 90 && !/[а-яё]{4,}(?:ет|ит|ут|ют|ает|яет)\b/i.test(text);
}

export function composeLive(input: WeaveInput): string {
  const q = input.question.trim();
  const sphere = sphereOfQuestion(q);
  const sub = subjectOf(q);
  const names = namesInQuestion(q);
  const who =
    names.length >= 2 ? `${names[0]} и ${names[1]}` : names[0] || (sub.subject === "self" ? "ты" : "");
  const cards = input.cards;
  const facets = cards.map((card) => {
    const meaning = meaningFromCard(card);
    const facet = sphereMeaningFor(sphere, meaning) || meaning.core;
    return stripCatalogLine(facet) || meaning.action || card.title;
  });
  const actions = cards.map((card) => meaningFromCard(card).action);
  const last = facets[facets.length - 1] || "ситуация требует ясного шага";
  const first = facets[0] || "уже есть основание";
  const mid = facets[Math.min(1, facets.length - 1)] || first;
  const love = sphere === "love";
  const work = sphere === "work" || sphere === "conflict";
  const you = sub.subject === "third_person" && who ? who : "ты";

  const p1 = q
    ? love && who
      ? `У ${who} сейчас не спокойная пауза, а живой перелом. ${capFirst(first)}. Итог при нынешнем ходе — ${last.charAt(0).toLowerCase() + last.slice(1)}.`
      : work && who
        ? `Для ${who} это не общий разговор «о жизни», а конкретный ход дела. ${capFirst(first)}. К чему приходит: ${last.charAt(0).toLowerCase() + last.slice(1)}.`
        : `Прямой ответ: ${first}. Дальше нить идёт к тому, что ${last.charAt(0).toLowerCase() + last.slice(1)}.`
    : `Картина дня такая: ${first}.`;

  const p2 = `Почему так. В основании уже лежит ${first.charAt(0).toLowerCase() + first.slice(1)}. Это не фон, а причина, из которой растёт всё остальное.`;

  const p3 =
    cards.length > 1
      ? `Что мешает и что скрыто. Следующий слой: ${mid.charAt(0).toLowerCase() + mid.slice(1)}. Здесь не абстракция — здесь конкретное напряжение, которое ${you === "ты" ? "ты уже чувствуешь" : "уже видно со стороны"}.`
      : `Скрытое в том же: ${first.charAt(0).toLowerCase() + first.slice(1)}.`;

  const doWhat = stripCatalogLine(actions[actions.length - 2] || actions[actions.length - 1] || "сделать один ясный шаг и не чинить всё сразу");
  const p4 = `Что делать. ${capFirst(doWhat)}. Один ход, который можно сделать завтра, а не вся жизнь разом.`;

  const p5 = `К чему приходит. Если идти как сейчас — ${last.charAt(0).toLowerCase() + last.slice(1)}. Если сделать шаг из предыдущего абзаца, итог можно сдвинуть. Без лозунгов: цена есть, рычаг тоже.`;

  return [p1, p2, p3, p4, p5].join("\n\n");
}

function capFirst(text: string): string {
  const t = text.trim();
  if (!t) return t;
  return t[0]!.toUpperCase() + t.slice(1);
}

export function composeLocal(input: WeaveInput): string {
  return composeLive(input);
}

function userPrompt(input: WeaveInput): string {
  const q = input.question.trim() || "вопроса нет — общая картина дня";
  const sphere = sphereOfQuestion(q);
  const sub = subjectOf(q);
  const kind = input.spread === "one" ? oneCardKind(q) : questionType(q);
  const follow = input.followUp?.trim();
  const conflict = isConflictQuestion(q);
  const names = namesInQuestion(q);
  const partyA = names[0] || "спрашивающий";
  const partyB = names[1] || "другая сторона";
  const lines = input.cards.map((card, i) => {
    const meaning = meaningFromCard(card);
    const facet = sphereMeaningFor(sphere, meaning);
    return [
      `${i + 1}. ${card.role} — ${card.title}`,
      `   ядро: ${meaning.core}`,
      `   ключи: ${meaning.keys.join(", ") || "—"}`,
      `   в сфере «${sphereLabel(sphere)}»: ${facet || "null — выведи грань из ядра, не выходя за него"}`,
      `   действие: ${meaning.action}`,
      `   да/нет: ${meaning.yesNo}; темп: ${meaning.tempo}`,
    ].join("\n");
  });
  if (follow) {
    return [
      `Уточнение к уже сделанному раскладу: ${follow}`,
      `Исходный вопрос: ${q}`,
      "Ответь только на уточнение, 3–5 предложений, по уже выпавшим картам. Не повторяй предыдущий текст. Новых карт не вводи.",
    ].join("\n");
  }
  return [
    `РАСКЛАД: ${input.spread}`,
    `ВОПРОС: ${q}`,
    `СУБЪЕКТ: ${sub.subject}${sub.name ? ` ${sub.name}` : ""}`,
    `СТОРОНЫ: А = ${partyA}; Б = ${partyB}`,
    `СФЕРА: ${sphereLabel(sphere)}`,
    `ТИП ВОПРОСА: ${kind}`,
    `КОНФЛИКТ: ${conflict ? "да — включи протокол конфликта и внутреннюю схему" : "нет"}`,
    "",
    spreadGuide(input.spread),
    "",
    "КАРТЫ РАСКЛАДА:",
    "",
    lines.join("\n\n"),
    "",
    "Сначала про себя заполни схему и алгоритм расклада. В ответ отдай только связное толкование, без таблицы и без заголовков.",
  ].join("\n");
}

function looksLikeDump(text: string, question = ""): boolean {
  const t = text.trim();
  if (t.length < 180) return true;
  if (/^(Карта показывает|Эта карта говорит|В вашей ситуации|Вам выпала|На вопрос)/i.test(t)) return true;
  if (/Сейчас тебе тяжело, и это не иллюзия/i.test(t)) return true;
  if (/ящик Пандоры|сундук Морены/i.test(t)) return true;
  if (/Ситуация держится на том, что [А-ЯЁ][а-яё]+(?:\s+[А-ЯЁ][а-яё]+)?\./.test(t)) return true;
  const first = t.split(/\n\n/)[0] ?? "";
  if (
    first.length < 140 &&
    (first.match(/,/g) ?? []).length >= 2 &&
    !/[а-яё]{4,}(?:ет|ит|ут|ют|ает|яет|ётся)\b/i.test(first)
  )
    return true;
  const { subject, name } = subjectOf(question);
  if (subject === "third_person" && name && /^Сейчас тебе /i.test(t)) return true;
  const sphere = sphereOfQuestion(question);
  if (
    (sphere === "work" || sphere === "conflict") &&
    /сексуальн|плотск|союз на всю жизнь|дикое влечение/.test(t.toLowerCase())
  )
    return true;
  if (
    (t.match(
      /(?:^|[.!?]\s)(?:Корни|Основа|Чужая нить|Узел|Сердце|Скрытое|Совет|Ход|Кромка|Начало|Поворот|Исход|Суть|Исток)\.\s/g,
    ) ?? []
    ).length >= 2
  )
    return true;
  if (/Что произошло первым\?|Ответственность А|Равна ли ответственность/.test(t)) return true;
  return false;
}

async function askGrok(
  apiKey: string,
  messages: { role: "system" | "user" | "assistant"; content: string }[],
  maxTokens: number,
): Promise<string | null> {
  const models = ["grok-4.20-0309-non-reasoning", "grok-4.5"];
  for (const model of models) {
    try {
      const res = await fetch("https://api.x.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        signal: AbortSignal.timeout(22000),
        body: JSON.stringify({
          model,
          temperature: 0.7,
          max_tokens: maxTokens,
          messages,
        }),
      });
      if (!res.ok) {
        continue;
      }
      const body = (await res.json()) as {
        choices?: { message?: { content?: string } }[];
      };
      const text = body.choices?.[0]?.message?.content?.trim() || "";
      if (text) return text;
    } catch {
      continue;
    }
  }
  return null;
}

export async function runWeave(data: WeaveInput): Promise<{ ok: true; text: string; source: "grok" | "local" }> {
  const fallback = composeLive(data);
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) return { ok: true, text: fallback, source: "local" };

  const messages: { role: "system" | "user" | "assistant"; content: string }[] = [
    { role: "system", content: systemPrompt() },
  ];
  for (const turn of data.history) {
    messages.push({
      role: turn.role === "weaver" ? "assistant" : "user",
      content: turn.text.slice(0, 2000),
    });
  }
  messages.push({ role: "user", content: userPrompt(data) });

  const tokens = data.followUp ? 400 : 900;

  try {
    let text = await askGrok(apiKey, messages, tokens);
    if (text && looksLikeDump(text, data.question) && text.length < 800) {
      messages.push({ role: "assistant", content: text.slice(0, 800) });
      messages.push({
        role: "user",
        content: "Перепиши: прямой ответ на вопрос, пять абзацев, без словаря карт.",
      });
      const rewritten = await askGrok(apiKey, messages, tokens);
      if (rewritten) text = rewritten;
    }
    if (!text) return { ok: true, text: fallback, source: "local" };
    return { ok: true, text, source: "grok" };
  } catch {
    return { ok: true, text: fallback, source: "local" };
  }
}

export const weaveReading = createServerFn({ method: "POST" })
  .validator((input: unknown) => weaveSchema.parse(input))
  .handler(async ({ data }) => runWeave(data));
