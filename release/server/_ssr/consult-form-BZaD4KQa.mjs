import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as createServerFn } from "./ssr.mjs";
import { i as literal, o as object, s as string, t as _enum } from "../_libs/zod.mjs";
import { l as createSsrRpc } from "./router-tnNsNnK_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/consult-form-BZaD4KQa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var consultSchema = object({
	name: string().trim().min(1).max(80),
	contact: string().trim().min(3).max(120),
	request: string().trim().min(4).max(2e3),
	topic: _enum(["consult", "deck"]),
	consent: literal(true),
	website: string().max(120).optional()
});
var submitConsult = createServerFn({ method: "POST" }).validator((input) => consultSchema.parse(input)).handler(createSsrRpc("cdd975f2a7033105b56954dcad6ac76962b3984a2b658ade02048ed99bcf3b95"));
function ConsultForm() {
	const [pending, setPending] = (0, import_react.useState)(false);
	const [note, setNote] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "consult-form",
		onSubmit: (event) => {
			event.preventDefault();
			const form = event.currentTarget;
			const body = new FormData(form);
			if (!(body.get("consent") === "on")) {
				setNote("Нужно согласие на обработку данных.");
				return;
			}
			setPending(true);
			setNote("");
			submitConsult({ data: {
				name: String(body.get("name") || ""),
				contact: String(body.get("contact") || ""),
				request: String(body.get("request") || ""),
				topic: body.get("topic") === "deck" ? "deck" : "consult",
				consent: true,
				website: String(body.get("website") || "")
			} }).then((result) => {
				if (result.ok && result.stored) {
					form.reset();
					setNote("Заявка сохранена. Темнояр ответит, когда увидит её.");
					return;
				}
				if (result.ok) return;
				setNote("Сохранить заявку пока некуда: адрес приёма не подключён. [УТОЧНИТЬ У ДМИТРИЯ] — Telegram или почта.");
			}).catch(() => {
				setNote("Заявка не ушла. Напишите напрямую, когда появится контакт.");
			}).finally(() => setPending(false));
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "consult-honeypot",
				"aria-hidden": "true",
				children: ["Сайт", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "website",
					tabIndex: -1,
					autoComplete: "off"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Как к вам обращаться", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				name: "name",
				required: true,
				maxLength: 80,
				className: "field-ink"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Telegram или другой контакт", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				name: "contact",
				required: true,
				maxLength: 120,
				className: "field-ink",
				placeholder: "@имя"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["О чём заявка", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				name: "topic",
				className: "field-ink",
				defaultValue: "consult",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "consult",
					children: "Консультация"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "deck",
					children: "Интерес к колоде"
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Запрос", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				name: "request",
				required: true,
				maxLength: 2e3,
				rows: 5,
				className: "field-ink"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted-foreground",
				children: "Фото в форму не загружается: файла некуда принять, пока нет адреса. При необходимости Темнояр попросит снимок уже в переписке."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "consult-check",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "consent",
					type: "checkbox",
					required: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"Согласен на обработку данных из этой формы.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						children: "Политика"
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "btn-cloth",
				disabled: pending,
				children: pending ? "Отправляется" : "Оставить заявку"
			}),
			note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-sand",
				children: note
			}) : null
		]
	});
}
//#endregion
export { ConsultForm as t };
