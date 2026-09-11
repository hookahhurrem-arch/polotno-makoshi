import { i as emptyDeck, t as DEFAULT_SETTINGS } from "./types-BvDlfgVm.mjs";
import { t as createServerFn } from "./ssr.mjs";
import { a as number, n as array, o as object, r as boolean, s as string } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-A6pJPYTF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-DWphElb9.js
var _0002_oracle_default = "create table if not exists deck_settings (\n  id text primary key,\n  name text not null default 'Живая колода',\n  author text not null default '',\n  tagline text not null default '',\n  intro text not null default '',\n  seeded boolean not null default false,\n  updated_at timestamptz not null default now()\n);\n\ncreate table if not exists oracle_cards (\n  number integer primary key,\n  title text not null default '',\n  keywords text not null default '',\n  description text not null default '',\n  image_data text,\n  video_url text not null default '',\n  updated_at timestamptz not null default now(),\n  constraint oracle_cards_number_range check (number >= 1 and number <= 108)\n);\n\ninsert into deck_settings (id, name, tagline, intro)\nvalues (\n  'default',\n  'Живая колода',\n  '108 карт. Каждая может ожить.',\n  'Это пространство вашей оракульной колоды. Вытяните карту — или откройте студию и вдохните в каждую из 108 карт слово, образ и короткое видео.'\n)\non conflict (id) do nothing;\n\ninsert into oracle_cards (number)\nselect g from generate_series(1, 108) as g\non conflict (number) do nothing;\n";
var _0003_day_thread_default = "alter table oracle_cards add column if not exists day_line text not null default '';\nalter table oracle_cards add column if not exists day_looks text not null default '';\nalter table oracle_cards add column if not exists day_do text not null default '';\nalter table oracle_cards add column if not exists day_avoid text not null default '';\n";
/**
* Migration bookkeeping shared by the two appliers — `scripts/migrate.mjs`
* (deploy, `readdir`) and `src/lib/db.ts` (PGLite preview, `import.meta.glob`).
*
* Applied files are keyed by BASENAME, so the same file applies once no matter
* which directory it is globbed from. That is what makes the auth schema safe to
* copy from `migrations/auth/` into `migrations/` when an app turns sign-in on:
* a database that already has `0001_auth.sql` will not re-run it.
*
* Neither applier descends into subdirectories, so `migrations/auth/*.sql` is
* out of scope for both until it is copied up.
*/
/**
* The `_migrations` key for a migration path (or bare filename).
* @param {string} path
* @returns {string}
*/
function migrationName(path) {
	return path.split("/").pop() ?? path;
}
/**
* @param {string} path
* @returns {boolean}
*/
function isMigrationFile(path) {
	return path.endsWith(".sql");
}
/**
* Migrations in `paths` that are not yet in `applied`, in apply order.
* Non-`.sql` entries (a `readdir` also yields `migrations/auth/`) are dropped.
* @param {Iterable<string>} paths
* @param {Iterable<string>} applied
* @returns {Array<{ name: string, path: string }>}
*/
function pendingMigrations(paths, applied) {
	const done = new Set(applied);
	return [...paths].filter(isMigrationFile).map((path) => ({
		name: migrationName(path),
		path
	})).sort((a, b) => a.name.localeCompare(b.name)).filter(({ name }) => !done.has(name));
}
var rawDatabaseUrl = typeof process !== "undefined" ? process.env.DATABASE_URL : void 0;
var databaseUrl = rawDatabaseUrl && rawDatabaseUrl.trim() ? rawDatabaseUrl : void 0;
/**
* Active backend: real **Neon** when `DATABASE_URL` is set (deployed / configured
* sandbox), otherwise a local embedded **PGLite** (Postgres compiled to WASM) so
* the app has a working database even with nothing configured — the live preview
* included. Swap in Neon later by just setting `DATABASE_URL`; no code changes.
*/
var dbSource = databaseUrl ? "neon" : "pglite";
/**
* Init state lives on globalThis as promises: dev HMR creates new instances of
* this module, and two instances racing module-level state would open a second
* pool or run two concurrent PGLite migration passes (whose duplicate
* `_migrations` insert rejects — and would get memoized, poisoning every later
* `getSql()`). A failed init clears its slot so the next call retries.
*/
var globalRef = globalThis;
/**
* Result-type parity: Postgres sends every value as text plus a type OID — the
* JS value is the DRIVER's parsing choice, and pg and PGLite disagree (pg:
* int8 -> string, date -> local-midnight Date; PGLite: int8 -> BigInt, which
* JSON.stringify rejects, date -> UTC Date). Normalize both so preview and
* production return identical, JSON-safe shapes:
*   int8/bigint (incl. count(*)) -> number (past 2^53 loses precision — cast
*                                   `::text` if you ever need huge integers)
*   date                         -> 'YYYY-MM-DD' string
*   interval                     -> Postgres interval text
* numeric already comes back as a string on both (arbitrary precision).
*/
var OID_INT8 = 20;
var OID_DATE = 1082;
var OID_INTERVAL = 1186;
var identity = (v) => v;
/** Wrap a query runner in the tagged-template + `.query()` `Sql` surface. */
function toSql(run) {
	const sql = (async (strings, ...values) => {
		let text = strings[0];
		for (let i = 0; i < values.length; i += 1) text += `$${i + 1}${strings[i + 1]}`;
		return run(text, values);
	});
	sql.query = (text, params = []) => run(text, params);
	return sql;
}
function createNeonSql() {
	globalRef.__pgSqlPromise__ ??= (async () => {
		const { Pool, types } = await import("../_libs/pg.mjs").then((n) => n.t);
		types.setTypeParser(OID_INT8, Number);
		types.setTypeParser(OID_DATE, identity);
		types.setTypeParser(OID_INTERVAL, identity);
		const pool = new Pool({ connectionString: databaseUrl });
		return toSql(async (text, params) => {
			return (await pool.query(text, params)).rows;
		});
	})().catch((err) => {
		globalRef.__pgSqlPromise__ = void 0;
		throw err;
	});
	return globalRef.__pgSqlPromise__;
}
async function createPgliteSql() {
	globalRef.__pgliteInstance__ ??= (async () => {
		const { PGlite } = await import("../_libs/electric-sql__pglite.mjs").then((n) => n.t);
		const pg = new PGlite({ parsers: {
			[OID_INT8]: Number,
			[OID_DATE]: identity,
			[OID_INTERVAL]: identity
		} });
		await pg.waitReady;
		await pg.exec("create table if not exists _migrations (name text primary key, applied_at timestamptz not null default now())");
		return pg;
	})().catch((err) => {
		globalRef.__pgliteInstance__ = void 0;
		throw err;
	});
	const pg = await globalRef.__pgliteInstance__;
	const migrate = async () => {
		const migrations = /* #__PURE__ */ Object.assign({
			"/migrations/0002_oracle.sql": _0002_oracle_default,
			"/migrations/0003_day_thread.sql": _0003_day_thread_default
		});
		const done = (await pg.query("select name from _migrations")).rows.map((r) => r.name);
		for (const { name, path } of pendingMigrations(Object.keys(migrations), done)) await pg.transaction(async (tx) => {
			await tx.exec(migrations[path]);
			await tx.query("insert into _migrations (name) values ($1)", [name]);
		});
	};
	const pass = (globalRef.__pgliteMigrateChain__ ?? Promise.resolve()).catch(() => void 0).then(migrate);
	globalRef.__pgliteMigrateChain__ = pass;
	await pass;
	return toSql(async (text, params) => {
		return (await pg.query(text, params)).rows;
	});
}
var sqlPromise = null;
async function createSql() {
	if (typeof window !== "undefined") throw new Error("@/lib/db is server-only — call getSql() from a createServerFn handler or a server route loader, never from client code.");
	return dbSource === "neon" ? createNeonSql() : createPgliteSql();
}
/**
* Get the shared, **server-only** SQL client. Neon when `DATABASE_URL` is set,
* otherwise the local PGLite fallback. Memoized — safe to call per request.
*
* Schema comes from `migrations/*.sql`, auto-applied before the first query on
* both backends — define tables there, never inline in server functions.
*/
function getSql() {
	sqlPromise ??= createSql().catch((err) => {
		sqlPromise = null;
		throw err;
	});
	return sqlPromise;
}
/**
* Finish DB bootstrap before the server handles traffic.
*
* - **PGLite** (preview / no `DATABASE_URL`): open the in-memory DB and apply
*   `migrations/*.sql`. Idempotent — concurrent callers share one promise.
* - **Neon**: no-op (pool is created lazily on first query).
*
* Vite `configureServer` awaits this at dev startup; production imports of this
* module kick it off immediately (see bottom of file).
*/
function ensureDbReady() {
	if (dbSource !== "pglite") return Promise.resolve();
	return getSql().then(() => void 0);
}
var globalBoot = globalThis;
if (typeof window === "undefined" && dbSource === "pglite") globalBoot.__pgBootstrapPromise__ ??= ensureDbReady().catch((err) => {
	globalBoot.__pgBootstrapPromise__ = void 0;
	console.error("[db] PGLite bootstrap failed:", err);
	throw err;
});
function asIso(value) {
	if (value instanceof Date) return value.toISOString();
	if (typeof value === "string" && value) return value;
	return (/* @__PURE__ */ new Date()).toISOString();
}
function asBool(value) {
	return value === true || value === "t" || value === "true" || value === 1;
}
function mapCard(row) {
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
		updatedAt: asIso(row.updated_at)
	};
}
function mapSettings(row) {
	if (!row) return { ...DEFAULT_SETTINGS };
	return {
		name: row.name || DEFAULT_SETTINGS.name,
		author: row.author ?? "",
		tagline: row.tagline ?? "",
		intro: row.intro ?? "",
		seeded: asBool(row.seeded),
		updatedAt: asIso(row.updated_at)
	};
}
var deckReady = false;
async function ensureDeck() {
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
    select g from generate_series(1, ${108}) as g
    on conflict (number) do nothing
  `;
	await sql`alter table oracle_cards add column if not exists day_line text not null default ''`;
	await sql`alter table oracle_cards add column if not exists day_looks text not null default ''`;
	await sql`alter table oracle_cards add column if not exists day_do text not null default ''`;
	await sql`alter table oracle_cards add column if not exists day_avoid text not null default ''`;
	deckReady = true;
}
var fetchOracleState_createServerFn_handler = createServerRpc({
	id: "cfd5decae55058b44b875528811315d769f42d21ae7915a93eedcc4dd80a28e6",
	name: "fetchOracleState",
	filename: "src/lib/oracle/api.ts"
}, (opts) => fetchOracleState.__executeServer(opts));
var fetchOracleState = createServerFn({ method: "GET" }).handler(fetchOracleState_createServerFn_handler, async () => {
	try {
		await ensureDeck();
		const sql = await getSql();
		const settingsRows = await sql`
        select id, name, author, tagline, intro, seeded, updated_at
        from deck_settings
        where id = 'default'
        limit 1
      `;
		const cardRows = await sql`
        select number, title, keywords, description, image_data, video_url,
               day_line, day_looks, day_do, day_avoid, updated_at
        from oracle_cards
        order by number asc
      `;
		const byNumber = new Map(cardRows.map((row) => [Number(row.number), mapCard(row)]));
		const cards = emptyDeck().map((slot) => byNumber.get(slot.number) ?? slot);
		return {
			settings: mapSettings(settingsRows[0]),
			cards
		};
	} catch {
		return {
			settings: {
				...DEFAULT_SETTINGS,
				seeded: true
			},
			cards: emptyDeck()
		};
	}
});
var cardSchema = object({
	number: number().int().min(1).max(108),
	title: string(),
	keywords: string(),
	description: string(),
	imageData: string().nullable(),
	videoUrl: string(),
	dayLine: string().optional().default(""),
	dayLooks: string().optional().default(""),
	dayDo: string().optional().default(""),
	dayAvoid: string().optional().default(""),
	updatedAt: string()
});
var settingsSchema = object({
	name: string(),
	author: string(),
	tagline: string(),
	intro: string(),
	seeded: boolean(),
	updatedAt: string()
});
var saveOracleCard_createServerFn_handler = createServerRpc({
	id: "5ccf290d7ea0620b7f445a41f58f4c53f1fc8d8288a2007450f3124685e40ecb",
	name: "saveOracleCard",
	filename: "src/lib/oracle/api.ts"
}, (opts) => saveOracleCard.__executeServer(opts));
var saveOracleCard = createServerFn({ method: "POST" }).validator((input) => cardSchema.parse(input)).handler(saveOracleCard_createServerFn_handler, async ({ data }) => {
	await (await getSql())`
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
	return { ok: true };
});
var saveOracleSettings_createServerFn_handler = createServerRpc({
	id: "98bc9c3983846639a9a378c9bd74e3a0e8457eeae953a5b71cd6c9590da661f7",
	name: "saveOracleSettings",
	filename: "src/lib/oracle/api.ts"
}, (opts) => saveOracleSettings.__executeServer(opts));
var saveOracleSettings = createServerFn({ method: "POST" }).validator((input) => settingsSchema.parse(input)).handler(saveOracleSettings_createServerFn_handler, async ({ data }) => {
	await (await getSql())`
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
	return { ok: true };
});
var bulkSchema = object({
	cards: array(cardSchema),
	settings: settingsSchema
});
var saveOracleBulk_createServerFn_handler = createServerRpc({
	id: "5d5226869f98383f1aaeb098708a6c6970955bcb7d7e150e97005059f0ec2a13",
	name: "saveOracleBulk",
	filename: "src/lib/oracle/api.ts"
}, (opts) => saveOracleBulk.__executeServer(opts));
var saveOracleBulk = createServerFn({ method: "POST" }).validator((input) => bulkSchema.parse(input)).handler(saveOracleBulk_createServerFn_handler, async ({ data }) => {
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
	for (const card of data.cards) await sql`
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
	return { ok: true };
});
//#endregion
export { fetchOracleState_createServerFn_handler, saveOracleBulk_createServerFn_handler, saveOracleCard_createServerFn_handler, saveOracleSettings_createServerFn_handler };
