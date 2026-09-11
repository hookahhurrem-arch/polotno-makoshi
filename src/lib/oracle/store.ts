import { create } from "zustand";
import { fetchOracleState, saveOracleBulk, saveOracleCard, saveOracleSettings } from "./api";
import {
  idbDeleteVideo,
  idbGetVideo,
  idbLoadCards,
  idbLoadSettings,
  idbSaveCard,
  idbSaveCards,
  idbSaveSettings,
  idbSetVideo,
} from "./idb";
import { applyMakoshBrand, applySeed, MBK_VERSION } from "./seed";
import {
  DEFAULT_SETTINGS,
  DECK_SIZE,
  emptyDeck,
  isCardFilled,
  withDayFields,
  type DeckSettings,
  type OracleCard,
} from "./types";

type OracleState = {
  hydrated: boolean;
  cards: OracleCard[];
  settings: DeckSettings;
  localVideoUrls: Record<number, string>;
  hydrate: () => Promise<void>;
  ensureVideo: (number: number) => Promise<void>;
  updateCard: (card: OracleCard) => Promise<void>;
  updateSettings: (patch: Partial<DeckSettings>) => Promise<void>;
  setLocalVideo: (number: number, file: Blob) => Promise<void>;
  clearLocalVideo: (number: number) => Promise<void>;
};

function newer(a: string, b: string): boolean {
  return new Date(a).getTime() > new Date(b).getTime();
}

function mergeCards(primary: OracleCard[], secondary: OracleCard[]): OracleCard[] {
  const map = new Map(emptyDeck().map((card) => [card.number, card]));
  for (const card of secondary) map.set(card.number, withDayFields(card));
  for (const card of primary) {
    const prev = map.get(card.number);
    const incoming = withDayFields(card);
    if (!prev || newer(incoming.updatedAt, prev.updatedAt) || (isCardFilled(incoming) && !isCardFilled(prev))) {
      map.set(card.number, {
        ...incoming,
        dayLine: incoming.dayLine || prev?.dayLine || "",
        dayLooks: incoming.dayLooks || prev?.dayLooks || "",
        dayDo: incoming.dayDo || prev?.dayDo || "",
        dayAvoid: incoming.dayAvoid || prev?.dayAvoid || "",
      });
    } else {
      map.set(card.number, {
        ...prev,
        dayLine: prev.dayLine || incoming.dayLine,
        dayLooks: prev.dayLooks || incoming.dayLooks,
        dayDo: prev.dayDo || incoming.dayDo,
        dayAvoid: prev.dayAvoid || incoming.dayAvoid,
      });
    }
  }
  return Array.from({ length: DECK_SIZE }, (_, i) => withDayFields(map.get(i + 1) ?? emptyCardFallback(i + 1)));
}

function emptyCardFallback(number: number): OracleCard {
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

function revokeAll(urls: Record<number, string>) {
  for (const url of Object.values(urls)) URL.revokeObjectURL(url);
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("timeout")), ms);
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (err) => {
        clearTimeout(timer);
        reject(err);
      },
    );
  });
}

let hydrating: Promise<void> | null = null;

export const useOracleStore = create<OracleState>((set, get) => ({
  hydrated: false,
  cards: applySeed(emptyDeck()),
  settings: { ...DEFAULT_SETTINGS, seeded: true },
  localVideoUrls: {},

  hydrate: async () => {
    if (hydrating) return hydrating;
    hydrating = (async () => {
      revokeAll(get().localVideoUrls);

      const [localCards, localSettings] = await Promise.all([
        withTimeout(idbLoadCards(), 1500).catch(() => [] as OracleCard[]),
        withTimeout(idbLoadSettings(), 1500).catch(() => null),
      ]);

      const localFilled = localCards.some(isCardFilled);
      const now = new Date().toISOString();

      let cards: OracleCard[];
      let settings: DeckSettings;
      let shouldPush = false;

      if (localFilled || localSettings?.seeded) {
        cards = mergeCards(localCards, []);
        settings = localSettings ?? { ...DEFAULT_SETTINGS, seeded: true, updatedAt: now };
      } else {
        cards = applySeed(emptyDeck());
        settings = {
          ...DEFAULT_SETTINGS,
          ...(localSettings ?? {}),
          seeded: true,
          updatedAt: now,
        };
        shouldPush = true;
      }

      const branded = applyMakoshBrand(cards, settings.name);
      cards = branded.cards;
      if (branded.changed || settings.name !== DEFAULT_SETTINGS.name || (settings.mbkVersion ?? 0) < MBK_VERSION) {
        settings = {
          ...settings,
          name: DEFAULT_SETTINGS.name,
          author: DEFAULT_SETTINGS.author,
          tagline: DEFAULT_SETTINGS.tagline,
          intro: DEFAULT_SETTINGS.intro,
          mbkVersion: MBK_VERSION,
          seeded: true,
          updatedAt: now,
        };
        shouldPush = true;
      }

      if (shouldPush) {
        void withTimeout(idbSaveCards(cards), 1500).catch(() => undefined);
        void withTimeout(idbSaveSettings(settings), 1500).catch(() => undefined);
      }

      set({ cards, settings, hydrated: true });

      try {
        const remote = await withTimeout(fetchOracleState(), 2500);
        const serverFilled = remote.cards.some(isCardFilled);
        if (serverFilled || remote.settings.seeded) {
          let mergedCards = mergeCards(get().cards, remote.cards);
          let mergedSettings = newer(get().settings.updatedAt, remote.settings.updatedAt)
            ? get().settings
            : remote.settings;
          const brandedRemote = applyMakoshBrand(mergedCards, mergedSettings.name);
          mergedCards = brandedRemote.cards;
          if (brandedRemote.changed || mergedSettings.name !== DEFAULT_SETTINGS.name || (mergedSettings.mbkVersion ?? 0) < MBK_VERSION) {
            mergedSettings = {
              ...mergedSettings,
              name: DEFAULT_SETTINGS.name,
              author: DEFAULT_SETTINGS.author,
              tagline: DEFAULT_SETTINGS.tagline,
              intro: DEFAULT_SETTINGS.intro,
              mbkVersion: MBK_VERSION,
              seeded: true,
              updatedAt: new Date().toISOString(),
            };
            void saveOracleBulk({ data: { cards: mergedCards, settings: mergedSettings } }).catch(
              () => undefined,
            );
          }
          set({ cards: mergedCards, settings: mergedSettings });
          await idbSaveCards(mergedCards).catch(() => undefined);
          await idbSaveSettings(mergedSettings).catch(() => undefined);
        } else if (shouldPush || localFilled) {
          void saveOracleBulk({ data: { cards: get().cards, settings: get().settings } }).catch(
            () => undefined,
          );
        }
      } catch {
        if (shouldPush) {
          void saveOracleBulk({ data: { cards: get().cards, settings: get().settings } }).catch(
            () => undefined,
          );
        }
      }
    })();

    try {
      await hydrating;
    } finally {
      hydrating = null;
    }
  },

  ensureVideo: async (number) => {
    if (get().localVideoUrls[number]) return;
    const blob = await withTimeout(idbGetVideo(number), 4000).catch(() => null);
    if (!blob) return;
    const prev = get().localVideoUrls[number];
    if (prev) return;
    const url = URL.createObjectURL(blob);
    set({ localVideoUrls: { ...get().localVideoUrls, [number]: url } });
  },

  updateCard: async (card) => {
    const next = get().cards.map((c) => (c.number === card.number ? card : c));
    set({ cards: next });
    await idbSaveCard(card);
    void saveOracleCard({ data: card }).catch(() => undefined);
  },

  updateSettings: async (patch) => {
    const settings: DeckSettings = {
      ...get().settings,
      ...patch,
      updatedAt: new Date().toISOString(),
    };
    set({ settings });
    await idbSaveSettings(settings);
    void saveOracleSettings({ data: settings }).catch(() => undefined);
  },

  setLocalVideo: async (number, file) => {
    await idbSetVideo(number, file);
    const prev = get().localVideoUrls[number];
    if (prev) URL.revokeObjectURL(prev);
    const localUrl = URL.createObjectURL(file);
    set({ localVideoUrls: { ...get().localVideoUrls, [number]: localUrl } });

    let videoUrl = "";
    try {
      const form = new FormData();
      form.set("number", String(number));
      form.set("file", file);
      const res = await fetch("/api/card-video", { method: "POST", body: form });
      if (res.ok) {
        const body = (await res.json()) as { url?: string };
        if (body.url) videoUrl = body.url;
      }
    } catch {
      /* preview may still play from IndexedDB */
    }

    const card = get().cards.find((c) => c.number === number);
    if (card) {
      const next = {
        ...card,
        videoUrl: videoUrl || card.videoUrl,
        updatedAt: new Date().toISOString(),
      };
      await get().updateCard(next);
    }
  },

  clearLocalVideo: async (number) => {
    await idbDeleteVideo(number);
    const prev = get().localVideoUrls[number];
    if (prev) URL.revokeObjectURL(prev);
    const nextUrls = { ...get().localVideoUrls };
    delete nextUrls[number];
    set({ localVideoUrls: nextUrls });
    const card = get().cards.find((c) => c.number === number);
    if (card?.videoUrl.startsWith("/videos/")) {
      await get().updateCard({ ...card, videoUrl: "", updatedAt: new Date().toISOString() });
    }
  },
}));
