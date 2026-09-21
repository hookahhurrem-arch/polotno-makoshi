import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { H as notFound, S as require_jsx_runtime, _ as createFileRoute, d as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, u as Scripts, v as createRootRoute, x as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as __exportAll, n as createServerFn } from "./ssr.mjs";
import { a as number, c as union, i as literal, n as array, o as object, s as string, t as _enum } from "../_libs/zod.mjs";
import { b as soundEnabled, d as IconScissors, g as createSsrRpc, h as cn, w as useOracleStore, x as startCrackle, y as setSoundEnabled } from "./store-okPazmL_.mjs";
import { a as sphereOfQuestion, i as sphereLabel, n as meaningFromCard, o as spreadGuide, r as oneCardKind, s as systemPrompt, t as isConflictQuestion } from "./weaver-prompt-DuF81d6c.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { join } from "node:path";
import { mkdir, writeFile } from "node:fs/promises";
//#region node_modules/.nitro/vite/services/ssr/assets/spreads-C-ZkAZ10.js
var SPREADS = [
	{
		id: "one",
		count: 1,
		title: "Одна нить",
		hint: "Один ясный ответ",
		roles: ["Ответ"],
		layout: "grid-cols-1 max-w-[16.5rem]"
	},
	{
		id: "three",
		count: 3,
		title: "Три карты",
		hint: "Начало, поворот, исход",
		roles: [
			"Начало",
			"Поворот",
			"Исход"
		],
		layout: "grid-cols-3"
	},
	{
		id: "knot",
		count: 4,
		title: "Узел",
		hint: "Что завязалось и как развязать",
		roles: [
			"Что завязало",
			"Что держит",
			"Где путаница",
			"Как развязать"
		],
		layout: "grid-cols-2 max-w-md"
	},
	{
		id: "foreign",
		count: 3,
		title: "Чужая нитка",
		hint: "Есть ли вмешательство извне",
		roles: [
			"Есть ли чужое",
			"Как влияет",
			"К чему ведёт"
		],
		layout: "grid-cols-3"
	},
	{
		id: "two",
		count: 6,
		title: "Две нити",
		hint: "Два человека — две линии",
		roles: [
			"А думает",
			"А делает",
			"Куда ведёт А",
			"Б думает",
			"Б делает",
			"Куда ведёт Б"
		],
		layout: "grid-cols-3"
	},
	{
		id: "krosna",
		count: 9,
		title: "Кросна",
		hint: "Полный разбор полотна",
		roles: [
			"Суть",
			"Исток",
			"Скрытая причина",
			"Действие А",
			"Действие Б",
			"Скрытый фактор",
			"Перелом",
			"Ближайшее",
			"Итоговая нить"
		],
		layout: "grid-cols-3"
	}
];
function spreadById(id) {
	return SPREADS.find((s) => s.id === id) ?? SPREADS[0];
}
function parseSpreadId(raw, n) {
	const id = typeof raw === "string" ? raw : "";
	if (SPREADS.some((s) => s.id === id)) return id;
	if (n === 3 || n === "3") return "three";
	if (n === 4 || n === "4") return "knot";
	if (n === 6 || n === "6") return "two";
	if (n === 9 || n === "9") return "krosna";
	return "one";
}
function spreadTitle(kind, count = 0) {
	const found = SPREADS.find((s) => s.id === kind);
	if (found) return found.title;
	if (count === 1) return "Одна нить";
	if (count === 3) return "Три карты";
	return "Расклад";
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-7z9xZgdS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FALLBACK_MESSAGE = "Что-то пошло не так. Попробуйте обновить страницу.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-dvh flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconScissors, { className: "size-8" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl",
				children: "Ошибка"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-sm text-sm break-words text-muted-foreground",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
/** Рубашка: чёрное поле, красная гладь, мировое древо, ромбовая кайма. */
function CardBack({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative isolate overflow-hidden bg-[#140c0c]", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 80 120",
			className: "absolute inset-0 size-full",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: "none",
				stroke: "#8e1c1c",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				children: [
					Array.from({ length: 11 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M${8 + i * 6.4} 8 l2.2 2.2 -2.2 2.2 -2.2 -2.2 z`,
						strokeWidth: "0.7"
					}, `t-${i}`)),
					Array.from({ length: 11 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M${8 + i * 6.4} 107.6 l2.2 2.2 -2.2 2.2 -2.2 -2.2 z`,
						strokeWidth: "0.7"
					}, `b-${i}`)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "10",
						y: "16",
						width: "60",
						height: "88",
						strokeWidth: "0.7"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M40 92 V46",
						strokeWidth: "1.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M40 92 C30 102 26 106 20 108",
						strokeWidth: "1.1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M40 92 C50 102 54 106 60 108",
						strokeWidth: "1.1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M40 46 C28 40 24 30 30 22",
						strokeWidth: "1.2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M40 46 C52 40 56 30 50 22",
						strokeWidth: "1.2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M40 40 C33 32 32 24 36 20",
						strokeWidth: "1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M40 40 C47 32 48 24 44 20",
						strokeWidth: "1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M40 30 V18",
						strokeWidth: "1.1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "30",
						cy: "24",
						r: "1.3",
						fill: "#8e1c1c",
						stroke: "none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "50",
						cy: "24",
						r: "1.3",
						fill: "#8e1c1c",
						stroke: "none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "40",
						cy: "17",
						r: "1.4",
						fill: "#8e1c1c",
						stroke: "none"
					})
				]
			})
		})
	});
}
var KEY = "makosh-threshold";
function Splash() {
	const [phase, setPhase] = (0, import_react.useState)("full");
	(0, import_react.useEffect)(() => {
		try {
			if (window.sessionStorage.getItem(KEY) === "1") {
				setPhase("short");
				const t = window.setTimeout(() => setPhase("done"), 900);
				return () => window.clearTimeout(t);
			}
		} catch {}
	}, []);
	const enter = (withSound) => {
		setSoundEnabled(withSound);
		if (withSound) startCrackle();
		try {
			window.sessionStorage.setItem(KEY, "1");
		} catch {}
		setPhase("leave");
		window.setTimeout(() => setPhase("done"), 900);
	};
	if (phase === "done") return null;
	const short = phase === "short";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `threshold ${phase === "leave" ? "splash-leave" : ""}`,
		role: "dialog",
		"aria-label": "Порог горницы",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "threshold-veil" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 flex flex-col items-center px-8 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex size-36 items-center justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "splash-glow absolute size-48" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative size-28 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardBack, { className: "size-full" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "overline relative mt-8",
					children: "Порог"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl tracking-[0.08em] text-sand",
					children: "Горница Пряхи"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground",
					children: short ? "Свет ещё держится." : "За занавесью ткётся полотно. Войдите со звуком или в тишине."
				}),
				short ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "btn-carmine min-h-12 px-6",
						onClick: () => enter(true),
						children: "Войти со звуком"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-12 border border-[#2a211e] px-6 text-sm text-sand",
						onClick: () => enter(false),
						children: "Войти в тишине"
					})]
				})
			]
		})]
	});
}
function Providers({ children }) {
	const hydrate = useOracleStore((s) => s.hydrate);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		if (soundEnabled()) startCrackle();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Splash, {}),
		children,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			theme: "dark",
			position: "bottom-center",
			toastOptions: { className: "bg-card text-foreground border-border font-sans" }
		})
	] });
}
var styles_default = "/assets/styles-DQDwy2F7.css";
var APP_NAME = "Полотно Макоши";
var Route$10 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "theme-color",
				content: "#0B0908"
			},
			{
				name: "description",
				content: "Полотно Макоши — оракульная колода из 108 карт. Расклады, описания и живое видео каждой нити."
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ru",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-background text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Providers, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitComponentImporter$7 = () => import("./routes--xr_SNxl.mjs");
var Route$9 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./about-C_ghnwip.mjs");
var Route$8 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./deck-DHKqtw-A.mjs");
var Route$7 = createFileRoute("/deck")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./journal-BX-KxdMn.mjs");
var Route$6 = createFileRoute("/journal")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./reading-Cox42LZE.mjs");
var Route$5 = createFileRoute("/reading")({
	validateSearch: (search) => ({
		s: parseSpreadId(search.s, search.n),
		n: typeof search.n === "number" ? search.n : void 0,
		q: typeof search.q === "string" ? search.q : void 0,
		go: search.go === true || search.go === "true" || search.go === 1 || search.go === "1",
		c1: parseCardNum(search.c1 ?? search.c),
		c2: parseCardNum(search.c2),
		c3: parseCardNum(search.c3),
		c4: parseCardNum(search.c4),
		c5: parseCardNum(search.c5),
		c6: parseCardNum(search.c6),
		c7: parseCardNum(search.c7),
		c8: parseCardNum(search.c8),
		c9: parseCardNum(search.c9)
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
function parseCardNum(value) {
	const raw = Array.isArray(value) ? value[0] : value;
	const n = typeof raw === "number" ? raw : typeof raw === "string" ? Number(String(raw).replace(/[^\d]/g, "")) : NaN;
	if (Number.isInteger(n) && n >= 1 && n <= 108) return n;
}
var MAX = 50331648;
var TYPES = {
	"video/mp4": "mp4",
	"video/webm": "webm",
	"video/quicktime": "mov",
	"video/x-m4v": "m4v"
};
var Route$4 = createFileRoute("/api/card-video")({ server: { handlers: { POST: async ({ request }) => {
	const form = await request.formData();
	const number = Number(form.get("number"));
	const file = form.get("file");
	if (!Number.isInteger(number) || number < 1 || number > 108) return Response.json({ error: "number" }, { status: 400 });
	if (!(file instanceof File) || file.size < 1) return Response.json({ error: "file" }, { status: 400 });
	if (file.size > MAX) return Response.json({ error: "too-large" }, { status: 413 });
	const fromType = TYPES[file.type];
	const fromName = file.name.split(".").pop()?.toLowerCase();
	const ext = fromType || (fromName && [
		"mp4",
		"webm",
		"mov",
		"m4v"
	].includes(fromName) ? fromName : "mp4");
	const dir = join(process.cwd(), "public", "videos");
	await mkdir(dir, { recursive: true });
	const name = `${String(number).padStart(3, "0")}.${ext}`;
	const bytes = Buffer.from(await file.arrayBuffer());
	await writeFile(join(dir, name), bytes);
	return Response.json({ url: `/videos/${name}` });
} } } });
var weaveSchema = object({
	question: string().max(400),
	spread: _enum([
		"one",
		"two",
		"three",
		"knot",
		"foreign",
		"krosna"
	]),
	cards: array(object({
		number: number().int().min(1).max(108),
		title: string().max(120),
		keywords: string().max(240),
		description: string().max(4e3),
		role: string().max(80)
	})).min(1).max(9),
	history: array(object({
		role: _enum(["weaver", "seeker"]),
		text: string().max(4e3)
	})).max(8),
	followUp: string().max(400).optional()
});
function namesInQuestion(question) {
	const stop = /* @__PURE__ */ new Set([
		"Что",
		"Как",
		"Когда",
		"Где",
		"Кто",
		"Чем",
		"Почему",
		"Какой",
		"Какая",
		"Какие",
		"Будет",
		"Буду",
		"Будем",
		"Любит",
		"Люблю",
		"Можно",
		"Скажи",
		"Будущее",
		"Завтра",
		"Сегодня",
		"Если",
		"Этот",
		"Эта",
		"Прогноз",
		"Собрание",
		"Встреча"
	]);
	const found = question.match(/(?<![А-Яа-яЁёA-Za-z])[А-ЯЁ][а-яё]{2,}(?:\s+[А-ЯЁ][а-яё]+)?/g) ?? [];
	return [...new Set(found.filter((name) => !stop.has(name.split(" ")[0] ?? "")))];
}
function subjectOf(question) {
	const names = namesInQuestion(question);
	const q = question.toLowerCase();
	if (names[0] && /(у |про |для |как .*у |собран.*у )/.test(q)) return {
		subject: "third_person",
		name: names[0]
	};
	if (names[0] && /(он|она|ему|ей|него|неё)/.test(q)) return {
		subject: "third_person",
		name: names[0]
	};
	if (names[0]) return {
		subject: "third_person",
		name: names[0]
	};
	if (!q.trim()) return {
		subject: "situation",
		name: ""
	};
	return {
		subject: "self",
		name: ""
	};
}
function questionType(question) {
	const s = question.toLowerCase();
	if (/стоит ли|получится ли|выйдет ли|да или нет|удастся/.test(s)) return "да/нет";
	if (/а или|или .*или|выбрать|что лучше/.test(s)) return "выбор";
	if (/что делать|как поступить|как себя вести|совет/.test(s)) return "совет";
	if (/что он|что она|как .*относ|что чувств|что думает/.test(s)) return "отношение";
	if (/почему|что происходит|что творится/.test(s)) return "диагностика";
	if (/когда|срок|как скоро/.test(s)) return "сроки";
	if (/как пройд|чем законч|что будет|прогноз|завтра|как пройдет/.test(s)) return "прогноз";
	return "прогноз";
}
function sphereMeaningFor(sphere, meaning) {
	if (sphere === "love") return meaning.spheres.love ?? null;
	if (sphere === "work" || sphere === "conflict") return meaning.spheres.work ?? meaning.spheres.conflict ?? null;
	if (sphere === "health") return meaning.spheres.health ?? null;
	if (sphere === "magic") return meaning.spheres.magic ?? null;
	return meaning.spheres.self ?? null;
}
function stripCatalogLine(text) {
	const t = text.trim();
	const bits = t.match(/[^.!?]+[.!?]+/g)?.map((s) => s.trim()) ?? [t];
	return (bits.filter((s) => !isCatalogish(s))[0] || bits.slice(1).join(" ") || t).replace(/\.+$/, "");
}
function isCatalogish(text) {
	return (text.match(/,/g) ?? []).length >= 2 && text.length < 90 && !/[а-яё]{4,}(?:ет|ит|ут|ют|ает|яет)\b/i.test(text);
}
function composeLive(input) {
	const q = input.question.trim();
	const sphere = sphereOfQuestion(q);
	const sub = subjectOf(q);
	const names = namesInQuestion(q);
	const who = names.length >= 2 ? `${names[0]} и ${names[1]}` : names[0] || (sub.subject === "self" ? "ты" : "");
	const cards = input.cards;
	const facets = cards.map((card) => {
		const meaning = meaningFromCard(card);
		return stripCatalogLine(sphereMeaningFor(sphere, meaning) || meaning.core) || meaning.action || card.title;
	});
	const actions = cards.map((card) => meaningFromCard(card).action);
	const last = facets[facets.length - 1] || "ситуация требует ясного шага";
	const first = facets[0] || "уже есть основание";
	const mid = facets[Math.min(1, facets.length - 1)] || first;
	const love = sphere === "love";
	const work = sphere === "work" || sphere === "conflict";
	const you = sub.subject === "third_person" && who ? who : "ты";
	return [
		q ? love && who ? `У ${who} сейчас не спокойная пауза, а живой перелом. ${capFirst(first)}. Итог при нынешнем ходе — ${last.charAt(0).toLowerCase() + last.slice(1)}.` : work && who ? `Для ${who} это не общий разговор «о жизни», а конкретный ход дела. ${capFirst(first)}. К чему приходит: ${last.charAt(0).toLowerCase() + last.slice(1)}.` : `Прямой ответ: ${first}. Дальше нить идёт к тому, что ${last.charAt(0).toLowerCase() + last.slice(1)}.` : `Картина дня такая: ${first}.`,
		`Почему так. В основании уже лежит ${first.charAt(0).toLowerCase() + first.slice(1)}. Это не фон, а причина, из которой растёт всё остальное.`,
		cards.length > 1 ? `Что мешает и что скрыто. Следующий слой: ${mid.charAt(0).toLowerCase() + mid.slice(1)}. Здесь не абстракция — здесь конкретное напряжение, которое ${you === "ты" ? "ты уже чувствуешь" : "уже видно со стороны"}.` : `Скрытое в том же: ${first.charAt(0).toLowerCase() + first.slice(1)}.`,
		`Что делать. ${capFirst(stripCatalogLine(actions[actions.length - 2] || actions[actions.length - 1] || "сделать один ясный шаг и не чинить всё сразу"))}. Один ход, который можно сделать завтра, а не вся жизнь разом.`,
		`К чему приходит. Если идти как сейчас — ${last.charAt(0).toLowerCase() + last.slice(1)}. Если сделать шаг из предыдущего абзаца, итог можно сдвинуть. Без лозунгов: цена есть, рычаг тоже.`
	].join("\n\n");
}
function capFirst(text) {
	const t = text.trim();
	if (!t) return t;
	return t[0].toUpperCase() + t.slice(1);
}
function userPrompt(input) {
	const q = input.question.trim() || "вопроса нет — общая картина дня";
	const sphere = sphereOfQuestion(q);
	const sub = subjectOf(q);
	const kind = input.spread === "one" ? oneCardKind(q) : questionType(q);
	const follow = input.followUp?.trim();
	const conflict = isConflictQuestion(q);
	const names = namesInQuestion(q);
	const partyA = names[0] || "спрашивающий";
	const partyB = names[1] || "другая сторона";
	const lines = input.cards.map((card, i) => {
		const meaning = meaningFromCard(card);
		const facet = sphereMeaningFor(sphere, meaning);
		return [
			`${i + 1}. ${card.role} — ${card.title}`,
			`   ядро: ${meaning.core}`,
			`   ключи: ${meaning.keys.join(", ") || "—"}`,
			`   в сфере «${sphereLabel(sphere)}»: ${facet || "null — выведи грань из ядра, не выходя за него"}`,
			`   действие: ${meaning.action}`,
			`   да/нет: ${meaning.yesNo}; темп: ${meaning.tempo}`
		].join("\n");
	});
	if (follow) return [
		`Уточнение к уже сделанному раскладу: ${follow}`,
		`Исходный вопрос: ${q}`,
		"Ответь только на уточнение, 3–5 предложений, по уже выпавшим картам. Не повторяй предыдущий текст. Новых карт не вводи."
	].join("\n");
	return [
		`РАСКЛАД: ${input.spread}`,
		`ВОПРОС: ${q}`,
		`СУБЪЕКТ: ${sub.subject}${sub.name ? ` ${sub.name}` : ""}`,
		`СТОРОНЫ: А = ${partyA}; Б = ${partyB}`,
		`СФЕРА: ${sphereLabel(sphere)}`,
		`ТИП ВОПРОСА: ${kind}`,
		`КОНФЛИКТ: ${conflict ? "да — включи протокол конфликта и внутреннюю схему" : "нет"}`,
		"",
		spreadGuide(input.spread),
		"",
		"КАРТЫ РАСКЛАДА:",
		"",
		lines.join("\n\n"),
		"",
		"Сначала про себя заполни схему и алгоритм расклада. В ответ отдай только связное толкование, без таблицы и без заголовков."
	].join("\n");
}
function looksLikeDump(text, question = "") {
	const t = text.trim();
	if (t.length < 180) return true;
	if (/^(Карта показывает|Эта карта говорит|В вашей ситуации|Вам выпала|На вопрос)/i.test(t)) return true;
	if (/Сейчас тебе тяжело, и это не иллюзия/i.test(t)) return true;
	if (/ящик Пандоры|сундук Морены/i.test(t)) return true;
	if (/Ситуация держится на том, что [А-ЯЁ][а-яё]+(?:\s+[А-ЯЁ][а-яё]+)?\./.test(t)) return true;
	const first = t.split(/\n\n/)[0] ?? "";
	if (first.length < 140 && (first.match(/,/g) ?? []).length >= 2 && !/[а-яё]{4,}(?:ет|ит|ут|ют|ает|яет|ётся)\b/i.test(first)) return true;
	const { subject, name } = subjectOf(question);
	if (subject === "third_person" && name && /^Сейчас тебе /i.test(t)) return true;
	const sphere = sphereOfQuestion(question);
	if ((sphere === "work" || sphere === "conflict") && /сексуальн|плотск|союз на всю жизнь|дикое влечение/.test(t.toLowerCase())) return true;
	if ((t.match(/(?:^|[.!?]\s)(?:Корни|Основа|Чужая нить|Узел|Сердце|Скрытое|Совет|Ход|Кромка|Начало|Поворот|Исход|Суть|Исток)\.\s/g) ?? []).length >= 2) return true;
	if (/Что произошло первым\?|Ответственность А|Равна ли ответственность/.test(t)) return true;
	return false;
}
async function askGrok(apiKey, messages, maxTokens) {
	for (const model of ["grok-4.20-0309-non-reasoning", "grok-4.5"]) try {
		const res = await fetch("https://api.x.ai/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`
			},
			signal: AbortSignal.timeout(22e3),
			body: JSON.stringify({
				model,
				temperature: .7,
				max_tokens: maxTokens,
				messages
			})
		});
		if (!res.ok) continue;
		const text = (await res.json()).choices?.[0]?.message?.content?.trim() || "";
		if (text) return text;
	} catch {
		continue;
	}
	return null;
}
async function runWeave(data) {
	const fallback = composeLive(data);
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: true,
		text: fallback,
		source: "local"
	};
	const messages = [{
		role: "system",
		content: systemPrompt()
	}];
	for (const turn of data.history) messages.push({
		role: turn.role === "weaver" ? "assistant" : "user",
		content: turn.text.slice(0, 2e3)
	});
	messages.push({
		role: "user",
		content: userPrompt(data)
	});
	const tokens = data.followUp ? 400 : 900;
	try {
		let text = await askGrok(apiKey, messages, tokens);
		if (text && looksLikeDump(text, data.question) && text.length < 800) {
			messages.push({
				role: "assistant",
				content: text.slice(0, 800)
			});
			messages.push({
				role: "user",
				content: "Перепиши: прямой ответ на вопрос, пять абзацев, без словаря карт."
			});
			const rewritten = await askGrok(apiKey, messages, tokens);
			if (rewritten) text = rewritten;
		}
		if (!text) return {
			ok: true,
			text: fallback,
			source: "local"
		};
		return {
			ok: true,
			text,
			source: "grok"
		};
	} catch {
		return {
			ok: true,
			text: fallback,
			source: "local"
		};
	}
}
var weaveReading = createServerFn({ method: "POST" }).validator((input) => weaveSchema.parse(input)).handler(createSsrRpc("1dc9218764120d87088736012bb82985ddd14c90927c02739313fd18578f1798"));
var Route$3 = createFileRoute("/api/weave")({ server: { handlers: { POST: async ({ request }) => {
	const body = await request.json();
	try {
		const result = await runWeave(body);
		return Response.json(result);
	} catch (err) {
		console.error("[weave]", err);
		return Response.json({
			ok: true,
			text: composeLive(body),
			source: "local"
		});
	}
} } } });
var $$splitComponentImporter$2 = () => import("./card._number-8aMHXc_m.mjs");
var Route$2 = createFileRoute("/card/$number")({
	beforeLoad: ({ params }) => {
		const n = Number(params.number);
		if (!Number.isInteger(n) || n < 1 || n > 108) throw notFound();
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./studio.index-DwFwqBxw.mjs");
var Route$1 = createFileRoute("/studio/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./studio._number-BMRm5v9a.mjs");
var Route = createFileRoute("/studio/$number")({
	beforeLoad: ({ params }) => {
		const n = Number(params.number);
		if (!Number.isInteger(n) || n < 1 || n > 108) throw notFound();
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$9.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$10
});
var AboutRoute = Route$8.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$10
});
var DeckRoute = Route$7.update({
	id: "/deck",
	path: "/deck",
	getParentRoute: () => Route$10
});
var JournalRoute = Route$6.update({
	id: "/journal",
	path: "/journal",
	getParentRoute: () => Route$10
});
var ReadingRoute = Route$5.update({
	id: "/reading",
	path: "/reading",
	getParentRoute: () => Route$10
});
var ApiCardVideoRoute = Route$4.update({
	id: "/api/card-video",
	path: "/api/card-video",
	getParentRoute: () => Route$10
});
var ApiWeaveRoute = Route$3.update({
	id: "/api/weave",
	path: "/api/weave",
	getParentRoute: () => Route$10
});
var CardNumberRoute = Route$2.update({
	id: "/card/$number",
	path: "/card/$number",
	getParentRoute: () => Route$10
});
var StudioIndexRoute = Route$1.update({
	id: "/studio/",
	path: "/studio/",
	getParentRoute: () => Route$10
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	DeckRoute,
	JournalRoute,
	ReadingRoute,
	ApiCardVideoRoute,
	ApiWeaveRoute,
	CardNumberRoute,
	StudioNumberRoute: Route.update({
		id: "/studio/$number",
		path: "/studio/$number",
		getParentRoute: () => Route$10
	}),
	StudioIndexRoute
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { weaveReading as a, spreadById as c, SPREADS as i, spreadTitle as l, Route as n, Route$5 as o, Route$2 as r, CardBack as s, router_exports as t };
