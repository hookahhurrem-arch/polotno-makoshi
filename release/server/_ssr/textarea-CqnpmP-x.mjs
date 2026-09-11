import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as createServerFn } from "./ssr.mjs";
import { o as object, s as string } from "../_libs/zod.mjs";
import { g as createSsrRpc, h as cn } from "./store-okPazmL_.mjs";
import { t as AppShell } from "./app-shell-BSyGZXbT.mjs";
import { t as Button } from "./button-Cmdjd3ge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/textarea-CqnpmP-x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var loginStudio = createServerFn({ method: "POST" }).validator((input) => object({ password: string().min(1).max(80) }).parse(input)).handler(createSsrRpc("6f97e1772b0eeea273dec8a8561c60a502e145a8c6603fb5956ea69b783f6165"));
var studioStatus = createServerFn({ method: "GET" }).handler(createSsrRpc("45a8c2c978ea35732119a5a574a54f782114a24d170897a22ea1cf1e1acd1fd4"));
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("field-ink flex h-12 w-full px-4 text-sm text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function StudioGate({ children }) {
	const [state, setState] = (0, import_react.useState)("check");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		studioStatus().then((res) => setState(res.ok ? "open" : "lock"));
	}, []);
	if (state === "check") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted-foreground",
		children: "Дверь ещё на засове…"
	}) });
	if (state === "lock") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "max-w-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "overline",
				children: "Мастерская"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display-title mt-4 text-4xl",
				children: "Студия закрыта"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-5 w-16" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-sm leading-relaxed text-muted-foreground",
				children: "Сюда входит только тот, кто ткёт полотно. Гостям здесь делать нечего."
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "mt-8 max-w-sm space-y-4",
		onSubmit: (e) => {
			e.preventDefault();
			setError("");
			loginStudio({ data: { password } }).then((res) => {
				if (res.ok) setState("open");
				else setError("Нить не подошла.");
			});
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				type: "password",
				value: password,
				onChange: (e) => setPassword(e.target.value),
				placeholder: "Слово к двери",
				autoComplete: "current-password"
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-primary",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				children: "Отомкнуть"
			})
		]
	})] });
	return children;
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-xs font-medium tracking-wide text-muted-foreground", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("field-ink flex min-h-28 w-full px-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
//#endregion
export { Textarea as i, Label as n, StudioGate as r, Input as t };
