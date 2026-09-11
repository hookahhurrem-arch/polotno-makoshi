import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { H as notFound, S as require_jsx_runtime, b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cardDisplayTitle, o as padCardNumber, r as emptyCard } from "./types-BvDlfgVm.mjs";
import { a as IconCutBack, h as cn, o as IconCutForward, w as useOracleStore } from "./store-okPazmL_.mjs";
import { i as loadLastReading, t as AppShell } from "./app-shell-DVIIYE3U.mjs";
import { t as Button } from "./button-Cmdjd3ge.mjs";
import { r as Route$2 } from "./router-D27DC4Q6.mjs";
import { t as LivingMedia } from "./living-media-BcSSF-SS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/card._number-Bokr8Xbo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function wrap(n) {
	if (n < 1) return 108;
	if (n > 108) return 1;
	return n;
}
function CardSwipe({ number, children, className }) {
	const navigate = useNavigate();
	const start = (0, import_react.useRef)(null);
	const [dx, setDx] = (0, import_react.useState)(0);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const go = (target) => {
		navigate({
			to: "/card/$number",
			params: { number: String(target) },
			replace: true
		});
	};
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key === "ArrowLeft") go(wrap(number - 1));
			if (event.key === "ArrowRight") go(wrap(number + 1));
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [number]);
	const onDown = (event) => {
		if (event.target.closest("a, button, input, textarea, label")) return;
		start.current = {
			x: event.clientX,
			y: event.clientY,
			locked: false
		};
	};
	const onMove = (event) => {
		if (!start.current) return;
		const mx = event.clientX - start.current.x;
		const my = event.clientY - start.current.y;
		if (!start.current.locked) {
			if (Math.abs(mx) < 12 && Math.abs(my) < 12) return;
			if (Math.abs(my) > Math.abs(mx)) {
				start.current = null;
				setDx(0);
				setDragging(false);
				return;
			}
			start.current.locked = true;
			setDragging(true);
		}
		event.preventDefault();
		setDx(mx);
	};
	const onUp = () => {
		if (!start.current) return;
		const delta = dx;
		start.current = null;
		setDragging(false);
		setDx(0);
		if (delta < -64) go(wrap(number + 1));
		if (delta > 64) go(wrap(number - 1));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("touch-pan-y", className),
		onPointerDown: onDown,
		onPointerMove: onMove,
		onPointerUp: onUp,
		onPointerCancel: onUp,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: dragging ? "will-change-transform" : "transition-transform duration-200",
			style: { transform: `translateX(${Math.max(-80, Math.min(80, dx * .35))}px)` },
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-center text-xs text-muted-foreground",
			children: "Стрелки или свайп — соседняя карта"
		})]
	});
}
function rememberCard(n) {
	try {
		window.sessionStorage.setItem("makosh-last-card", String(n));
	} catch {}
}
function CardPage() {
	const { number: raw } = Route$2.useParams();
	const n = Number(raw);
	if (!Number.isInteger(n) || n < 1 || n > 108) throw notFound();
	const card = useOracleStore((s) => s.cards.find((c) => c.number === n)) ?? emptyCard(n);
	const localVideoUrl = useOracleStore((s) => s.localVideoUrls[n]);
	const ensureVideo = useOracleStore((s) => s.ensureVideo);
	const prev = n === 1 ? 108 : n - 1;
	const next = n === 108 ? 1 : n + 1;
	const [last, setLast] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setLast(loadLastReading());
		rememberCard(n);
		ensureVideo(n);
	}, [n, ensureVideo]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardSwipe, {
		number: n,
		className: "mx-auto max-w-4xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "grid gap-10 md:grid-cols-[minmax(0,22rem)_1fr] md:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/card/$number",
						params: { number: String(prev) },
						replace: true,
						"aria-label": "Предыдущая карта",
						className: "flex size-12 shrink-0 items-center justify-center text-foreground hover-stitch",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCutBack, { className: "size-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LivingMedia, {
						card,
						localVideoUrl,
						className: "aspect-card min-w-0 flex-1 self-start"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/card/$number",
						params: { number: String(next) },
						replace: true,
						"aria-label": "Следующая карта",
						className: "flex size-12 shrink-0 items-center justify-center text-foreground hover-stitch",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCutForward, { className: "size-6" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl",
				children: [
					last ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/reading",
						search: last,
						className: "mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCutBack, {}), "Назад к раскладу"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/deck",
						hash: `card-${n}`,
						className: "mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCutBack, {}), "Назад к книге"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "overline tabular-nums",
						children: padCardNumber(card.number)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-5xl tracking-[0.08em] text-sand sm:text-6xl",
						children: cardDisplayTitle(card)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-5 w-16" }),
					card.keywords ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 flex flex-wrap gap-2",
						children: card.keywords.split(/[,;]/).map((tag) => tag.trim()).filter(Boolean).map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border border-gold/40 px-2 py-1 text-[11px] tracking-wide text-gold",
							children: tag
						}, tag))
					}) : null,
					card.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 whitespace-pre-line text-base leading-relaxed",
						children: card.description
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm leading-relaxed text-muted-foreground",
						children: "Эта нить ещё молчит. Текст придёт, когда Пряха вплетёт её в полотно."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 flex flex-wrap gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/deck",
								hash: `card-${n}`,
								children: "К книге"
							})
						})
					})
				]
			})]
		})
	}) });
}
//#endregion
export { CardPage as component };
