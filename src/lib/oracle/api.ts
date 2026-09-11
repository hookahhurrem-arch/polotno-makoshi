import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getSql } from "@/lib/db";
import {
  DECK_SIZE,
  DEFAULT_SETTINGS,
  emptyDeck,
  type DeckSettings,
  type OracleCard,
} from "./types";

type CardRow = {
  number: number;
  title: string;
  keywords: string;
  description: string;
  image_data: string | null;
  video_url: string;
  day_line?: string;
  day_looks?: string;
  day_do?: string;
  day_avoid?: string;
  updated_at: unknown;
};

type SettingsRow = {
  id: string;
  name: string;
  author: string;
  tagline: string;
  intro: string;
  seeded: boolean;
  updated_at: unknown;
};

function asIso(value: unknown): string {
  if (value instanceof Date) return value.toISOString();
  if (typeof value === "string" && value) return value;
  return new Date().toISOString();
}

function asBool(value: unknown): boolean {
  return value === true || value === "t" || value === "true" || value === 1;
}

function mapCard(row: CardRow): OracleCard {
  return {
    number: Number(row.number),
    title: row.title ?? "",
    keywords: row.keywords ?? "",
    description: row.description ?? "",
    imageData: row.image_data || null,
    videoUrl: row.video_url ?? "",
    dayLine: row.day_line ?? "",
    dayLooks: row.day_looks ?? "",
    dayDo: row.day_do ?? "",
    dayAvoid: row.day_avoid ?? "",
    updatedAt: asIso(row.updated_at),
  };
}

function mapSettings(row: SettingsRow | undefined): DeckSettings {
  if (!row) return { ...DEFAULT_SETTINGS };
  return {
    name: row.name || DEFAULT_SETTINGS.name,
    author: row.author ?? "",
    tagline: row.tagline ?? "",
    intro: row.intro ?? "",
    seeded: asBool(row.seeded),
    updatedAt: asIso(row.updated_at),
  };
}

let deckReady = false;

async function ensureDeck(): Promise<void> {
  if (deckReady) return;
  const sql = await getSql();
  await sql`
    insert into deck_settings (id, name, tagline, intro)
    values (
      'default',
      ${DEFAULT_SETTINGS.name},
      ${DEFAULT_SETTINGS.tagline},
      ${DEFAULT_SETTINGS.intro}
    )
    on conflict (id) do nothing
  `;
  await sql`
    insert into oracle_cards (number)
    select g from generate_series(1, ${DECK_SIZE}) as g
    on conflict (number) do nothing
  `;
  await sql`alter table oracle_cards add column if not exists day_line text not null default ''`;
  await sql`alter table oracle_cards add column if not exists day_looks text not null default ''`;
  await sql`alter table oracle_cards add column if not exists day_do text not null default ''`;
  await sql`alter table oracle_cards add column if not exists day_avoid text not null default ''`;
  deckReady = true;
}

export const fetchOracleState = createServerFn({ method: "GET" }).handler(
  async () => {
    try {
      await ensureDeck();
      const sql = await getSql();
      const settingsRows = await sql<SettingsRow>`
        select id, name, author, tagline, intro, seeded, updated_at
        from deck_settings
        where id = 'default'
        limit 1
      `;
      const cardRows = await sql<CardRow>`
        select number, title, keywords, description, image_data, video_url,
               day_line, day_looks, day_do, day_avoid, updated_at
        from oracle_cards
        order by number asc
      `;
      const byNumber = new Map(cardRows.map((row) => [Number(row.number), mapCard(row)]));
      const cards = emptyDeck().map((slot) => byNumber.get(slot.number) ?? slot);
      return {
        settings: mapSettings(settingsRows[0]),
        cards,
      };
    } catch {
      return {
        settings: { ...DEFAULT_SETTINGS, seeded: true },
        cards: emptyDeck(),
      };
    }
  },
);

const cardSchema = z.object({
  number: z.number().int().min(1).max(DECK_SIZE),
  title: z.string(),
  keywords: z.string(),
  description: z.string(),
  imageData: z.string().nullable(),
  videoUrl: z.string(),
  dayLine: z.string().optional().default(""),
  dayLooks: z.string().optional().default(""),
  dayDo: z.string().optional().default(""),
  dayAvoid: z.string().optional().default(""),
  updatedAt: z.string(),
});

const settingsSchema = z.object({
  name: z.string(),
  author: z.string(),
  tagline: z.string(),
  intro: z.string(),
  seeded: z.boolean(),
  updatedAt: z.string(),
});

export const saveOracleCard = createServerFn({ method: "POST" })
  .validator((input: unknown) => cardSchema.parse(input))
  .handler(async ({ data }) => {
    const sql = await getSql();
    await sql`
      insert into oracle_cards (
        number, title, keywords, description, image_data, video_url,
        day_line, day_looks, day_do, day_avoid, updated_at
      )
      values (
        ${data.number},
        ${data.title},
        ${data.keywords},
        ${data.description},
        ${data.imageData},
        ${data.videoUrl},
        ${data.dayLine ?? ""},
        ${data.dayLooks ?? ""},
        ${data.dayDo ?? ""},
        ${data.dayAvoid ?? ""},
        ${data.updatedAt}
      )
      on conflict (number) do update set
        title = excluded.title,
        keywords = excluded.keywords,
        description = excluded.description,
        image_data = excluded.image_data,
        video_url = excluded.video_url,
        day_line = excluded.day_line,
        day_looks = excluded.day_looks,
        day_do = excluded.day_do,
        day_avoid = excluded.day_avoid,
        updated_at = excluded.updated_at
    `;
    return { ok: true as const };
  });

export const saveOracleSettings = createServerFn({ method: "POST" })
  .validator((input: unknown) => settingsSchema.parse(input))
  .handler(async ({ data }) => {
    const sql = await getSql();
    await sql`
      insert into deck_settings (id, name, author, tagline, intro, seeded, updated_at)
      values (
        'default',
        ${data.name},
        ${data.author},
        ${data.tagline},
        ${data.intro},
        ${data.seeded},
        ${data.updatedAt}
      )
      on conflict (id) do update set
        name = excluded.name,
        author = excluded.author,
        tagline = excluded.tagline,
        intro = excluded.intro,
        seeded = excluded.seeded,
        updated_at = excluded.updated_at
    `;
    return { ok: true as const };
  });

const bulkSchema = z.object({
  cards: z.array(cardSchema),
  settings: settingsSchema,
});

export const saveOracleBulk = createServerFn({ method: "POST" })
  .validator((input: unknown) => bulkSchema.parse(input))
  .handler(async ({ data }) => {
    const sql = await getSql();
    await sql`
      insert into deck_settings (id, name, author, tagline, intro, seeded, updated_at)
      values (
        'default',
        ${data.settings.name},
        ${data.settings.author},
        ${data.settings.tagline},
        ${data.settings.intro},
        ${data.settings.seeded},
        ${data.settings.updatedAt}
      )
      on conflict (id) do update set
        name = excluded.name,
        author = excluded.author,
        tagline = excluded.tagline,
        intro = excluded.intro,
        seeded = excluded.seeded,
        updated_at = excluded.updated_at
    `;
    for (const card of data.cards) {
      await sql`
        insert into oracle_cards (
          number, title, keywords, description, image_data, video_url,
          day_line, day_looks, day_do, day_avoid, updated_at
        )
        values (
          ${card.number},
          ${card.title},
          ${card.keywords},
          ${card.description},
          ${card.imageData},
          ${card.videoUrl},
          ${card.dayLine ?? ""},
          ${card.dayLooks ?? ""},
          ${card.dayDo ?? ""},
          ${card.dayAvoid ?? ""},
          ${card.updatedAt}
        )
        on conflict (number) do update set
          title = excluded.title,
          keywords = excluded.keywords,
          description = excluded.description,
          image_data = excluded.image_data,
          video_url = excluded.video_url,
          day_line = excluded.day_line,
          day_looks = excluded.day_looks,
          day_do = excluded.day_do,
          day_avoid = excluded.day_avoid,
          updated_at = excluded.updated_at
      `;
    }
    return { ok: true as const };
  });
