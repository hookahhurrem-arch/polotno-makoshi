import { createHash, timingSafeEqual } from "node:crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/studio-auth.server-CJ6A6CDF.js
function env(key) {
	return process.env[key]?.trim() || void 0;
}
var STUDIO_COOKIE = "makosh_studio";
function secret() {
	return env("STUDIO_PASSWORD") || "темнояр";
}
function studioToken() {
	return createHash("sha256").update(`polotno:${secret()}`).digest("hex").slice(0, 32);
}
function passwordsMatch(input) {
	const a = Buffer.from(input.normalize("NFC"));
	const b = Buffer.from(secret().normalize("NFC"));
	if (a.length !== b.length) return false;
	return timingSafeEqual(a, b);
}
async function requireStudio() {
	const { getCookie } = await import("./ssr.mjs").then((n) => n.o).then((n) => n.t);
	if (getCookie("makosh_studio") !== studioToken()) throw new Error("studio-locked");
}
//#endregion
export { STUDIO_COOKIE, passwordsMatch, requireStudio, studioToken };
