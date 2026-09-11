process.env.HOST = process.env.HOST || "0.0.0.0";
process.env.NITRO_HOST = process.env.NITRO_HOST || process.env.HOST;
process.env.PORT = process.env.PORT || "80";
process.env.NITRO_PORT = process.env.NITRO_PORT || process.env.PORT;

const { existsSync } = await import("node:fs");
const { pathToFileURL } = await import("node:url");
const { resolve } = await import("node:path");

const candidates = [
  "release/server/index.mjs",
  ".output/server/index.mjs",
  "output/server/index.mjs",
];

const found = candidates.map((p) => resolve(process.cwd(), p)).find((p) => existsSync(p));
if (!found) {
  console.error("Нет собранного сервера. Ожидался release/server/index.mjs");
  process.exit(1);
}

await import(pathToFileURL(found).href);
