import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, f as useRouterState, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as stopCrackle, b as soundEnabled, c as IconHasp, f as IconSpindle, h as cn, i as IconBookClasp, l as IconHearth, m as IconWindow, p as IconThreadKnot, w as useOracleStore, x as startCrackle, y as setSoundEnabled } from "./store-okPazmL_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-shell-BSyGZXbT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function fxTier() {
	if (typeof window === "undefined") return "lite";
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "min";
	const cores = navigator.hardwareConcurrency || 4;
	const mem = navigator.deviceMemory ?? 8;
	if (navigator.connection?.saveData || cores <= 4 || mem <= 4) return "lite";
	return "full";
}
function Atmosphere() {
	const [tier, setTier] = (0, import_react.useState)("lite");
	const lamp = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setTier(fxTier());
	}, []);
	(0, import_react.useEffect)(() => {
		if (tier === "min") return;
		const node = lamp.current;
		if (!node) return;
		const move = (event) => {
			node.style.setProperty("--lamp-x", `${event.clientX}px`);
			node.style.setProperty("--lamp-y", `${event.clientY}px`);
		};
		window.addEventListener("pointermove", move, { passive: true });
		return () => window.removeEventListener("pointermove", move);
	}, [tier]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": "true",
		className: "chamber-layers",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hearth hearth-breathe" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "twill" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grain" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette" }),
			tier !== "min" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: lamp,
				className: "chamber-lamp"
			}) : null
		]
	});
}
var SCENE_VIDEO = {
	chamber: "/videos/chamber.mp4",
	table: "/videos/table.mp4"
};
var SPREAD_PROP = {
	one: "/scenes/one.webp",
	three: "/scenes/three.webp",
	knot: "/scenes/knot.webp",
	foreign: "/scenes/foreign.webp",
	two: "/scenes/two.webp",
	krosna: "/scenes/krosna.webp"
};
function SceneStage({ name }) {
	const [tier, setTier] = (0, import_react.useState)("lite");
	const [shift, setShift] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		setTier(fxTier());
	}, []);
	(0, import_react.useEffect)(() => {
		if (tier === "min") return;
		const onMove = (event) => {
			setShift({
				x: event.clientX / window.innerWidth - .5,
				y: event.clientY / window.innerHeight - .5
			});
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		return () => window.removeEventListener("pointermove", onMove);
	}, [tier]);
	const video = tier === "full" ? SCENE_VIDEO[name] : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "scene-stage",
		"data-scene": name,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "scene-bg-inner",
			style: { transform: `translate3d(${shift.x * -10}px, ${shift.y * -7}px, 0) scale(1.1)` },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					media: "(orientation: portrait)",
					srcSet: `/scenes/${name}-tall.webp`,
					type: "image/webp"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					srcSet: `/scenes/${name}-wide.webp`,
					type: "image/webp"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: `/scenes/${name}-wide.jpg`,
					alt: "",
					className: "scene-photo"
				})
			] }), video ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "scene-video",
				src: video,
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				preload: "metadata"
			}) : null]
		}), tier !== "min" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "scene-dust",
			style: { transform: `translate3d(${shift.x * -26}px, ${shift.y * -16}px, 0)` }
		}) : null]
	});
}
var KEY = "makosh-last-reading";
function saveLastReading(value) {
	try {
		window.sessionStorage.setItem(KEY, JSON.stringify(value));
	} catch {}
}
function loadLastReading() {
	if (typeof window === "undefined") return null;
	try {
		const raw = window.sessionStorage.getItem(KEY);
		if (!raw) return null;
		const data = JSON.parse(raw);
		if (!data?.go || !data.c1) return null;
		return data;
	} catch {
		return null;
	}
}
function searchFromIds(kind, question, ids) {
	return {
		s: kind,
		q: question || void 0,
		go: true,
		c1: ids[0],
		c2: ids[1],
		c3: ids[2],
		c4: ids[3],
		c5: ids[4],
		c6: ids[5],
		c7: ids[6],
		c8: ids[7],
		c9: ids[8]
	};
}
function idsFromSearch(search) {
	return [
		search.c1,
		search.c2,
		search.c3,
		search.c4,
		search.c5,
		search.c6,
		search.c7,
		search.c8,
		search.c9
	].filter((n) => typeof n === "number");
}
var ITEMS = [
	{
		to: "/",
		label: "Главная",
		icon: IconWindow
	},
	{
		to: "/reading",
		label: "Расклад",
		icon: IconThreadKnot
	},
	{
		to: "/deck",
		label: "Гримуар",
		icon: IconBookClasp
	},
	{
		to: "/journal",
		label: "Дневник",
		icon: IconHasp
	},
	{
		to: "/about",
		label: "О Полотне",
		icon: IconSpindle
	}
];
function SiteNav() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const name = useOracleStore((s) => s.settings.name);
	const [last, setLast] = (0, import_react.useState)(null);
	const [sound, setSound] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setLast(loadLastReading());
		setSound(soundEnabled());
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-30 border-b border-[#2a211e] bg-[#0b0908]/94 backdrop-blur-[16px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-7 md:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "font-display text-lg tracking-[0.16em] text-sand",
				children: name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						const next = !sound;
						setSound(next);
						setSoundEnabled(next);
						if (next) startCrackle();
						else stopCrackle();
					},
					className: "px-2 py-1 text-sand",
					"aria-pressed": sound,
					"aria-label": sound ? "Выключить звук" : "Включить звук",
					title: sound ? "Звук включён" : "Звук выключен",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("sound-mark", sound && "is-on"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconHearth, {})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: ITEMS.map((item) => {
						const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							search: item.to === "/reading" && last ? last : void 0,
							"data-active": active,
							className: cn("nav-thread px-3 py-2 text-sm", active ? "text-sand" : "text-muted-foreground hover:text-sand"),
							children: item.label
						}, item.to);
					})
				})]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "site-dock fixed inset-x-0 bottom-0 z-30 border-t border-[#2a211e] pb-[env(safe-area-inset-bottom)] md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid grid-cols-5",
			children: ITEMS.map((item) => {
				const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
				const Icon = item.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.to,
					search: item.to === "/reading" && last ? last : void 0,
					className: cn("flex min-h-14 flex-col items-center justify-center gap-1 font-[family-name:var(--font-ui)] text-[10px] tracking-[0.12em]", active ? "text-sand" : "text-muted-foreground"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}), item.label]
				}) }, item.to);
			})
		})
	})] });
}
function AppShell({ children, className, scene }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-10 min-h-dvh text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atmosphere, {}),
			scene ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneStage, { name: scene }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("chamber-page relative z-10 mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-6xl flex-col px-7 pb-32 pt-10 md:px-12 md:pb-16 md:pt-14", className),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "mt-20 max-w-xl pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule w-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[11px] text-muted-foreground",
						children: "Темнояр · 108 нитей"
					})]
				})]
			})
		]
	});
}
//#endregion
export { saveLastReading as a, loadLastReading as i, SPREAD_PROP as n, searchFromIds as o, idsFromSearch as r, AppShell as t };
