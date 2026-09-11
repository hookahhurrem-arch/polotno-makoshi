import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, f as useRouterState, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as stopCrackle, a as IconCutBack, b as soundEnabled, c as IconHasp, f as IconSpindle, h as cn, i as IconBookClasp, l as IconHearth, m as IconWindow, p as IconThreadKnot, w as useOracleStore, x as startCrackle, y as setSoundEnabled } from "./store-okPazmL_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-shell-Hnc25Xyv.js
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
			tier === "full" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "chamber-video",
				src: "/videos/makosh-loom.mp4",
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				preload: "metadata"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hearth hearth-breathe" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "twill" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grain" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette" }),
			tier !== "min" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: lamp,
				className: "chamber-lamp"
			}) : null,
			tier === "full" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dust, {}) : null
		]
	});
}
function Dust() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = ref.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let frame = 0;
		const dots = Array.from({ length: 28 }, () => ({
			x: Math.random(),
			y: Math.random(),
			r: .4 + Math.random() * .8,
			s: 12e-5 + Math.random() * 25e-5
		}));
		const draw = () => {
			const { innerWidth: w, innerHeight: h } = window;
			if (canvas.width !== w) canvas.width = w;
			if (canvas.height !== h) canvas.height = h;
			ctx.clearRect(0, 0, w, h);
			ctx.fillStyle = "rgba(228,212,184,0.18)";
			for (const d of dots) {
				d.y -= d.s;
				if (d.y < 0) d.y = 1;
				ctx.beginPath();
				ctx.arc(d.x * w, d.y * h * .55 + h * .08, d.r, 0, Math.PI * 2);
				ctx.fill();
			}
			frame = window.requestAnimationFrame(draw);
		};
		frame = window.requestAnimationFrame(draw);
		return () => window.cancelAnimationFrame(frame);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		className: "chamber-dust"
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
					children: sound ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconHearth, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCutBack, {})
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
function AppShell({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-10 min-h-dvh text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atmosphere, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("chamber-page relative z-10 mx-auto max-w-6xl px-7 pb-32 pt-10 md:px-12 md:pb-16 md:pt-14", className),
				children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "mt-24 max-w-xl pb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule w-16" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs tracking-wide text-muted-foreground",
							children: "Полотно Макоши · Темнояр · 108 нитей"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "hover:text-sand",
								children: "О колоде"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/journal",
								className: "hover:text-sand",
								children: "Дневник"
							})]
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { searchFromIds as a, saveLastReading as i, idsFromSearch as n, loadLastReading as r, AppShell as t };
