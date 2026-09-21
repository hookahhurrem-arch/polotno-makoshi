import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, f as useRouterState, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as stopCrackle, b as soundEnabled, c as IconHasp, f as IconSpindle, h as cn, i as IconBookClasp, l as IconHearth, m as IconWindow, p as IconThreadKnot, w as useOracleStore, x as startCrackle, y as setSoundEnabled } from "./store-okPazmL_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-shell-C-n3DXup.js
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
	(0, import_react.useEffect)(() => {
		setTier(fxTier());
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": "true",
		className: "chamber-layers",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "archive-field" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "archive-depth" }),
			tier !== "min" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "archive-fiber" }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "archive-well" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "archive-vignette" })
		]
	});
}
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "scene-stage",
		"data-scene": name,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "scene-bg-inner",
			style: { transform: `translate3d(${shift.x * -8}px, ${shift.y * -5}px, 0) scale(1.06)` },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", { children: [
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
			] })
		})
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
		className: "site-mast sticky top-0 z-30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "brand-mark",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "brand-name",
					children: name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "brand-sub",
					children: "Колода смыслов"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						const next = !sound;
						setSound(next);
						setSoundEnabled(next);
						if (next) startCrackle();
						else stopCrackle();
					},
					className: "px-2 py-2 text-sand",
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
		className: "site-dock fixed inset-x-0 bottom-0 z-30 pb-[env(safe-area-inset-bottom)] md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid grid-cols-5",
			children: ITEMS.map((item) => {
				const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
				const Icon = item.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.to,
					search: item.to === "/reading" && last ? last : void 0,
					"data-active": active,
					className: cn("dock-item flex min-h-14 flex-col items-center justify-center gap-1 font-[family-name:var(--font-ui)] text-[10px] tracking-[0.12em]", active ? "text-sand" : "text-muted-foreground"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}), item.label]
				}) }, item.to);
			})
		})
	})] });
}
var MOTES = [
	{
		x: 12,
		y: 28,
		d: 22,
		s: 1.2
	},
	{
		x: 28,
		y: 62,
		d: 28,
		s: .8
	},
	{
		x: 41,
		y: 18,
		d: 19,
		s: 1
	},
	{
		x: 53,
		y: 44,
		d: 31,
		s: .7
	},
	{
		x: 61,
		y: 72,
		d: 24,
		s: 1.1
	},
	{
		x: 73,
		y: 33,
		d: 27,
		s: .9
	},
	{
		x: 81,
		y: 58,
		d: 21,
		s: 1.3
	},
	{
		x: 18,
		y: 81,
		d: 26,
		s: .75
	},
	{
		x: 36,
		y: 47,
		d: 18,
		s: 1.05
	},
	{
		x: 88,
		y: 22,
		d: 29,
		s: .85
	}
];
function StillLife({ candle, yarn }) {
	const [tier, setTier] = (0, import_react.useState)("lite");
	(0, import_react.useEffect)(() => {
		setTier(fxTier());
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "still-life",
		"aria-hidden": "true",
		children: [
			candle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/scenes/candle.webp",
				alt: "",
				className: "still-candle"
			}) : null,
			yarn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/scenes/yarn-arc.webp",
				alt: "",
				className: "still-yarn"
			}) : null,
			tier !== "min" ? MOTES.map((mote, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "dust-mote",
				style: {
					left: `${mote.x}%`,
					top: `${mote.y}%`,
					animationDuration: `${mote.d}s`,
					animationDelay: `${i * -2.1}s`,
					width: mote.s + 1,
					height: mote.s + 1
				}
			}, i)) : null
		]
	});
}
function AppShell({ children, className, scene }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-10 min-h-dvh text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atmosphere, {}),
			scene ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneStage, { name: scene }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StillLife, {
				candle: scene === "table",
				yarn: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("chamber-page relative z-10 mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-6xl flex-col px-6 pb-32 pt-8 md:px-12 md:pb-16 md:pt-12", className),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "mt-16 pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mx-auto w-24" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-center text-[11px] tracking-[0.16em] text-muted-foreground uppercase",
						children: "Темнояр · 108 нитей"
					})]
				})]
			})
		]
	});
}
//#endregion
export { saveLastReading as a, loadLastReading as i, fxTier as n, searchFromIds as o, idsFromSearch as r, AppShell as t };
