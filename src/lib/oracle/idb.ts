import type { DeckSettings, OracleCard } from "./types";

const DB_NAME = "living-oracle";
const DB_VERSION = 1;

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains("cards")) {
        db.createObjectStore("cards", { keyPath: "number" });
      }
      if (!db.objectStoreNames.contains("videos")) {
        db.createObjectStore("videos");
      }
      if (!db.objectStoreNames.contains("settings")) {
        db.createObjectStore("settings");
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error ?? new Error("indexedDB open failed"));
  });
}

function reqAs<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error("indexedDB request failed"));
  });
}

export async function idbLoadCards(): Promise<OracleCard[]> {
  const db = await openDb();
  try {
    const tx = db.transaction("cards", "readonly");
    const rows = await reqAs(tx.objectStore("cards").getAll());
    return Array.isArray(rows) ? (rows as OracleCard[]) : [];
  } finally {
    db.close();
  }
}

export async function idbSaveCards(cards: OracleCard[]): Promise<void> {
  const db = await openDb();
  try {
    const tx = db.transaction("cards", "readwrite");
    const store = tx.objectStore("cards");
    for (const card of cards) store.put(card);
    await new Promise<void>((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error ?? new Error("indexedDB save cards failed"));
    });
  } finally {
    db.close();
  }
}

export async function idbSaveCard(card: OracleCard): Promise<void> {
  const db = await openDb();
  try {
    const tx = db.transaction("cards", "readwrite");
    tx.objectStore("cards").put(card);
    await new Promise<void>((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error ?? new Error("indexedDB save card failed"));
    });
  } finally {
    db.close();
  }
}

export async function idbLoadSettings(): Promise<DeckSettings | null> {
  const db = await openDb();
  try {
    const tx = db.transaction("settings", "readonly");
    const row = await reqAs(tx.objectStore("settings").get("default"));
    return (row as DeckSettings | undefined) ?? null;
  } finally {
    db.close();
  }
}

export async function idbSaveSettings(settings: DeckSettings): Promise<void> {
  const db = await openDb();
  try {
    const tx = db.transaction("settings", "readwrite");
    tx.objectStore("settings").put(settings, "default");
    await new Promise<void>((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error ?? new Error("indexedDB save settings failed"));
    });
  } finally {
    db.close();
  }
}

export async function idbGetVideo(number: number): Promise<Blob | undefined> {
  const db = await openDb();
  try {
    const tx = db.transaction("videos", "readonly");
    const row = await reqAs(tx.objectStore("videos").get(number));
    return row instanceof Blob ? row : undefined;
  } finally {
    db.close();
  }
}

export async function idbHasVideoKeys(): Promise<number[]> {
  const db = await openDb();
  try {
    const tx = db.transaction("videos", "readonly");
    const keys = await reqAs(tx.objectStore("videos").getAllKeys());
    return keys.map((k) => Number(k)).filter((n) => Number.isInteger(n) && n >= 1 && n <= 108);
  } finally {
    db.close();
  }
}

export async function idbSetVideo(number: number, blob: Blob): Promise<void> {
  const db = await openDb();
  try {
    const tx = db.transaction("videos", "readwrite");
    tx.objectStore("videos").put(blob, number);
    await new Promise<void>((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error ?? new Error("indexedDB save video failed"));
    });
  } finally {
    db.close();
  }
}

export async function idbDeleteVideo(number: number): Promise<void> {
  const db = await openDb();
  try {
    const tx = db.transaction("videos", "readwrite");
    tx.objectStore("videos").delete(number);
    await new Promise<void>((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error ?? new Error("indexedDB delete video failed"));
    });
  } finally {
    db.close();
  }
}
