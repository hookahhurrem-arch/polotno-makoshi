import { n as createServerFn } from "./ssr.mjs";
import { i as literal, o as object, s as string, t as _enum } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-CN-evIEF.mjs";
import { appendFile, mkdir } from "node:fs/promises";
//#region node_modules/.nitro/vite/services/ssr/assets/consult-C92_6ceC.js
var consultSchema = object({
	name: string().trim().min(1).max(80),
	contact: string().trim().min(3).max(120),
	request: string().trim().min(4).max(2e3),
	topic: _enum(["consult", "deck"]),
	consent: literal(true),
	website: string().max(120).optional()
});
var submitConsult_createServerFn_handler = createServerRpc({
	id: "cdd975f2a7033105b56954dcad6ac76962b3984a2b658ade02048ed99bcf3b95",
	name: "submitConsult",
	filename: "src/lib/consult.ts"
}, (opts) => submitConsult.__executeServer(opts));
var submitConsult = createServerFn({ method: "POST" }).validator((input) => consultSchema.parse(input)).handler(submitConsult_createServerFn_handler, async ({ data }) => {
	if (data.website) return {
		ok: true,
		stored: false
	};
	const line = JSON.stringify({
		at: (/* @__PURE__ */ new Date()).toISOString(),
		name: data.name,
		contact: data.contact,
		topic: data.topic,
		request: data.request
	}) + "\n";
	try {
		const dir = "/data/temnoiar";
		await mkdir(dir, { recursive: true });
		await appendFile(`${dir}/consults.jsonl`, line, "utf8");
		return {
			ok: true,
			stored: true
		};
	} catch {
		return {
			ok: false,
			stored: false
		};
	}
});
//#endregion
export { submitConsult_createServerFn_handler };
