import { n as createServerFn } from "./ssr.mjs";
import { o as object, s as string } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-CN-evIEF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio-api-DOvJdI-A.js
var loginStudio_createServerFn_handler = createServerRpc({
	id: "6f97e1772b0eeea273dec8a8561c60a502e145a8c6603fb5956ea69b783f6165",
	name: "loginStudio",
	filename: "src/lib/oracle/studio-api.ts"
}, (opts) => loginStudio.__executeServer(opts));
var loginStudio = createServerFn({ method: "POST" }).validator((input) => object({ password: string().min(1).max(80) }).parse(input)).handler(loginStudio_createServerFn_handler, async ({ data }) => {
	const { passwordsMatch, STUDIO_COOKIE, studioToken } = await import("./studio-auth.server-CJ6A6CDF.mjs");
	if (!passwordsMatch(data.password)) return { ok: false };
	const { setCookie } = await import("./ssr.mjs").then((n) => n.o).then((n) => n.t);
	setCookie(STUDIO_COOKIE, studioToken(), {
		httpOnly: true,
		sameSite: "lax",
		path: "/",
		maxAge: 2592e3
	});
	return { ok: true };
});
var studioStatus_createServerFn_handler = createServerRpc({
	id: "45a8c2c978ea35732119a5a574a54f782114a24d170897a22ea1cf1e1acd1fd4",
	name: "studioStatus",
	filename: "src/lib/oracle/studio-api.ts"
}, (opts) => studioStatus.__executeServer(opts));
var studioStatus = createServerFn({ method: "GET" }).handler(studioStatus_createServerFn_handler, async () => {
	try {
		const { STUDIO_COOKIE, studioToken } = await import("./studio-auth.server-CJ6A6CDF.mjs");
		const { getCookie } = await import("./ssr.mjs").then((n) => n.o).then((n) => n.t);
		return { ok: getCookie(STUDIO_COOKIE) === studioToken() };
	} catch {
		return { ok: false };
	}
});
//#endregion
export { loginStudio_createServerFn_handler, studioStatus_createServerFn_handler };
