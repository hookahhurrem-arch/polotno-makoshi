import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as isCardFilled, n as cardDisplayTitle } from "./types-BvDlfgVm.mjs";
import { C as tapPulse, _ as playRustle, a as IconCutBack, h as cn, v as playThud, w as useOracleStore } from "./store-okPazmL_.mjs";
import { a as saveLastReading, o as searchFromIds, r as idsFromSearch, t as AppShell } from "./app-shell-C-n3DXup.mjs";
import { t as Button } from "./button-Cmdjd3ge.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as weaveReading, c as spreadById, i as SPREADS, o as Route$5, s as CardBack } from "./router-7z9xZgdS.mjs";
import { t as LivingMedia } from "./living-media-BcSSF-SS.mjs";
import { t as addJournalEntry } from "./journal-DP38_61i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reading-Cox42LZE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SPREAD_PROP = {
	one: "/scenes/one.webp",
	three: "/scenes/three.webp",
	knot: "/scenes/knot.webp",
	foreign: "/scenes/foreign.webp",
	two: "/scenes/two.webp",
	krosna: "/scenes/krosna.webp"
};
function countLabel(n) {
	const ten = n % 10;
	const hundred = n % 100;
	if (ten === 1 && hundred !== 11) return `${n} карта`;
	if (ten >= 2 && ten <= 4 && (hundred < 12 || hundred > 14)) return `${n} карты`;
	return `${n} карт`;
}
function SpreadForm({ defaultQuestion = "", defaultSpread = "three" }) {
	const [picked, setPicked] = (0, import_react.useState)(defaultSpread);
	const active = SPREADS.find((s) => s.id === picked) ?? SPREADS[1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		action: "/reading",
		method: "get",
		className: "spread-form relative z-20 w-full min-w-0 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "hidden",
				name: "go",
				value: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "hidden",
				name: "s",
				value: picked
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "spread-rail",
				"aria-hidden": "true",
				children: SPREADS.map((spread, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: cn(picked === spread.id && "is-on"),
					children: String(index + 1).padStart(2, "0")
				}, spread.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "spread-head",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lead",
						children: "Нити, что связывают времена"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-title",
						children: "Выбери нить"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-sm leading-[1.65] text-muted-foreground",
						children: "Каждая нить — это путь. Здесь живут смыслы, вопросы и ответы."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-5 w-20" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-8 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Вопрос к колоде"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "q",
					required: true,
					minLength: 8,
					defaultValue: defaultQuestion,
					placeholder: "Вопрос прозвучит у кросен",
					autoComplete: "off",
					className: "field-ink h-12 w-full px-0 text-base text-sand"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "spread-bed mt-5",
				role: "radiogroup",
				"aria-label": "Расклад",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-2",
					children: SPREADS.map((spread, index) => {
						const on = picked === spread.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setPicked(spread.id),
							"aria-pressed": on,
							className: cn("spread-row", on && "is-on"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "spread-num",
									children: String(index + 1).padStart(2, "0")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: SPREAD_PROP[spread.id],
									alt: "",
									className: "spread-prop"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-display text-[1.45rem] leading-tight tracking-[0.06em]",
										children: spread.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "spread-hint mt-1 block text-sm",
										children: spread.hint
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "spread-count shrink-0 text-xs tracking-[0.12em]",
									children: countLabel(spread.count)
								})
							]
						}) }, spread.id);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "spread-roles mt-3 text-sm",
					children: active.roles.join(" · ")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "btn-cloth sticky bottom-[calc(4.6rem+env(safe-area-inset-bottom))] z-20 mt-8",
				children: "Сплести нити"
			})
		]
	});
}
function ClothField({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `pointer-events-none relative overflow-hidden ${className}`,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "size-full",
			viewBox: "0 0 320 220",
			fill: "none",
			preserveAspectRatio: "xMidYMid slice",
			children: [
				Array.from({ length: 9 }, (_, i) => {
					const x = 24 + i * 34;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M${x} 0 C${x + 6} 70 ${x - 8} 140 ${x} 220`,
						stroke: "rgb(201 191 181 / 0.18)",
						strokeWidth: "1",
						className: "cloth-warp",
						style: { animationDelay: `${i * .4}s` }
					}, `w-${i}`);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0 78 C 80 64, 160 96, 320 78",
					stroke: "#8e1c1c",
					strokeWidth: "1.4",
					className: "cloth-weft"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0 132 C 90 148, 170 118, 320 136",
					stroke: "rgb(142 28 28 / 0.55)",
					strokeWidth: "1",
					className: "cloth-weft",
					style: { animationDelay: "1.2s" }
				})
			]
		})
	});
}
var WARPS = [
	36,
	68,
	100,
	132,
	164,
	196,
	228,
	260,
	292
];
function WeaveRitual({ onDone }) {
	const [knot, setKnot] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const knotAt = window.setTimeout(() => setKnot(true), reduced ? 200 : 1500);
		const done = window.setTimeout(onDone, reduced ? 700 : 2100);
		return () => {
			window.clearTimeout(knotAt);
			window.clearTimeout(done);
		};
	}, [onDone]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ritual-veil",
		"aria-live": "polite",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClothField, { className: "absolute inset-0 opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "relative h-64 w-full max-w-lg",
				viewBox: "0 0 320 220",
				fill: "none",
				"aria-hidden": "true",
				children: [
					WARPS.map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						className: "draw-thread",
						d: `M${x} 8 C${x + 4} 70 ${x - 6} 130 ${x} 212`,
						stroke: "#2a211e",
						strokeWidth: "1.1",
						style: { animationDelay: `${i * 40}ms` }
					}, x)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						className: "weft-run",
						d: "M12 108 C 70 96, 120 120, 164 108 C 210 96, 260 118, 308 108",
						stroke: "#8e1c1c",
						strokeWidth: "2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						className: "weft-run",
						d: "M12 124 C 80 136, 130 112, 164 124 C 210 136, 250 114, 308 124",
						stroke: "#6d1414",
						strokeWidth: "1.2",
						style: { animationDelay: "1.05s" }
					}),
					knot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "164",
						cy: "116",
						r: "5",
						className: "knot-flash",
						fill: "#8e1c1c"
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative mt-6 text-center text-sm tracking-[0.18em] text-sand uppercase",
				children: "Плету"
			})
		]
	});
}
/** Brand yarn: diamond embroidery stitch-by-stitch. Not a spinner. */
function YarnStitch({ label = "Нить вышивает узор" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "yarn-stitch",
		role: "status",
		"aria-live": "polite",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 64 72",
			className: "yarn-stitch-svg",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "yarn-path",
				d: "M32 8 L56 32 L32 56 L8 32 Z M32 20 L44 32 L32 44 L20 32 Z",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.4",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				className: "yarn-knot",
				cx: "32",
				cy: "8",
				r: "2.2",
				fill: "currentColor"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm tracking-wide text-muted-foreground",
			children: label
		})]
	});
}
function plain(text) {
	return text.replace(/\*\*/g, "").replace(/^#{1,6}\s+/gm, "").trim();
}
function toWeaveCards(cards, roles) {
	return cards.map((card, i) => ({
		number: card.number,
		title: cardDisplayTitle(card),
		keywords: card.keywords,
		description: card.description.slice(0, 1400),
		role: roles[i] ?? `Нить ${i + 1}`
	}));
}
function cacheKey(question, cards) {
	return `makosh-weave-turns:${cards.map((c) => c.number).join("-")}:${question.trim()}`;
}
function readCache(key) {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.sessionStorage.getItem(key);
		if (!raw) return [];
		const data = JSON.parse(raw);
		return Array.isArray(data) ? data : [];
	} catch {
		return [];
	}
}
function writeCache(key, turns) {
	try {
		window.sessionStorage.setItem(key, JSON.stringify(turns));
	} catch {}
}
function isSilent(text) {
	const t = text.trim();
	return t === "Полотно не отозвалось. Потяни нить ещё раз." || t.startsWith("Нить оборвалась") || t.startsWith("Полотно не отозвалось");
}
function WeaverPanel({ question, cards, roles, spread, onWoven, autoStart }) {
	const key = cacheKey(question, cards);
	const [turns, setTurns] = (0, import_react.useState)(() => readCache(key));
	const [followUp, setFollowUp] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const started = (0, import_react.useRef)(false);
	const canFollow = turns.filter((t) => t.role === "seeker").length < 4;
	const lastWeaver = [...turns].reverse().find((t) => t.role === "weaver");
	const silent = Boolean(lastWeaver && isSilent(lastWeaver.text));
	const hasWeaver = Boolean(lastWeaver) && !silent;
	const commit = (woven, nextFollow) => {
		setTurns((prev) => {
			const next = silent ? prev.filter((t) => !isSilent(t.text)) : [...prev];
			if (nextFollow) next.push({
				role: "seeker",
				text: nextFollow
			});
			next.push({
				role: "weaver",
				text: woven
			});
			writeCache(key, next);
			return next;
		});
		if (!isSilent(woven)) onWoven(woven);
		setFollowUp("");
	};
	const run = async (nextFollow, force = false) => {
		if (busy) return;
		if (hasWeaver && !nextFollow && !force) return;
		setBusy(true);
		const payload = {
			question,
			spread,
			cards: toWeaveCards(cards, roles),
			history: turns.filter((t) => !isSilent(t.text)),
			followUp: nextFollow
		};
		const timer = window.setTimeout(() => setBusy(false), 28e3);
		try {
			const result = await (await fetch("/api/weave", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
				signal: AbortSignal.timeout(26e3)
			})).json();
			commit(plain(result.text || "") || "Нить оборвалась на полуслове. Потяни ещё раз.", nextFollow);
		} catch {
			try {
				const result = await weaveReading({ data: payload });
				commit(plain(result.text) || "Нить оборвалась на полуслове. Потяни ещё раз.", nextFollow);
			} catch {
				commit("Нить оборвалась на полуслове. Потяни ещё раз.", nextFollow);
			}
		} finally {
			window.clearTimeout(timer);
			setBusy(false);
		}
	};
	(0, import_react.useEffect)(() => {
		if (!autoStart || started.current || cards.length === 0) return;
		started.current = true;
		if (hasWeaver) {
			if (lastWeaver) onWoven(lastWeaver.text);
			return;
		}
		run();
	}, [autoStart, cards]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "gramota mt-10 p-6 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "overline",
				children: "Ткач"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl tracking-[0.08em] text-sand",
				children: "Прогноз"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-4 w-16" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 space-y-6",
				children: turns.map((turn, i) => turn.role === "seeker" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						"Уточнение: «",
						turn.text,
						"»"
					]
				}, `s-${i}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-0",
					children: turn.text.split(/\n{2,}/).map((para, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: j === 0 ? "weaver-para drop-cap lead" : "weaver-para text-base leading-[1.65]",
						style: { animationDelay: `${j * 180}ms` },
						children: para
					}, j))
				}, `w-${i}`))
			}),
			busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "weaver-loom mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/scenes/loom-close.webp",
						alt: "",
						className: "weaver-loom-bg"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/scenes/shuttle.webp",
						alt: "",
						className: "weaver-shuttle"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YarnStitch, { label: "Челнок ходит. Полотно нарастает." })
				]
			}) : null,
			silent && !busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				className: "mt-5",
				onClick: () => void run(void 0, true),
				children: "Потянуть нить ещё раз"
			}) : null,
			hasWeaver && canFollow ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-8 flex flex-col gap-2 sm:flex-row",
				onSubmit: (e) => {
					e.preventDefault();
					const q = followUp.trim();
					if (!q) return;
					run(q);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: followUp,
					onChange: (e) => setFollowUp(e.target.value),
					placeholder: "Уточнить: что делать? чего ждать?",
					disabled: busy,
					className: "field-ink h-11 w-full px-3 text-sm text-foreground placeholder:text-muted-foreground"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					variant: "outline",
					disabled: busy || !followUp.trim(),
					children: "Спросить"
				})]
			}) : null
		]
	});
}
function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
	const words = text.split(/\s+/);
	let line = "";
	let row = 0;
	let yy = y;
	for (const word of words) {
		const test = line ? `${line} ${word}` : word;
		if (ctx.measureText(test).width > maxWidth && line) {
			ctx.fillText(line, x, yy);
			line = word;
			yy += lineHeight;
			row += 1;
			if (row >= maxLines) {
				ctx.fillText("…", x, yy);
				return yy;
			}
		} else line = test;
	}
	if (line) ctx.fillText(line, x, yy);
	return yy + lineHeight;
}
function loadImage(src) {
	return new Promise((resolve) => {
		const img = new Image();
		img.onload = () => resolve(img);
		img.onerror = () => resolve(null);
		img.src = src;
	});
}
async function shareSpread(input) {
	const w = 1080;
	const h = 1920;
	const canvas = document.createElement("canvas");
	canvas.width = w;
	canvas.height = h;
	const ctx = canvas.getContext("2d");
	if (!ctx) return;
	const bg = ctx.createRadialGradient(w / 2, h * .32, 40, w / 2, h * .4, h * .8);
	bg.addColorStop(0, "#1A0F0F");
	bg.addColorStop(1, "#0E0A0A");
	ctx.fillStyle = bg;
	ctx.fillRect(0, 0, w, h);
	ctx.strokeStyle = "#D8C08A";
	ctx.lineWidth = 2;
	ctx.strokeRect(48, 48, 984, 1824);
	ctx.fillStyle = "#D8C08A";
	ctx.font = "28px Manrope, sans-serif";
	ctx.letterSpacing = "8px";
	ctx.textAlign = "center";
	ctx.fillText("ПОЛОТНО МАКОШИ", w / 2, 130);
	ctx.fillStyle = "#E4D4B8";
	ctx.font = "64px Devils, serif";
	ctx.letterSpacing = "4px";
	ctx.fillText(input.deck, w / 2, 210);
	ctx.fillStyle = "#C9BFB5";
	ctx.font = "32px Manrope, sans-serif";
	ctx.letterSpacing = "0px";
	const afterQ = wrapText(ctx, input.question ? `«${input.question}»` : "Без вопроса", w / 2, 280, 900, 44, 3);
	const count = input.cards.length;
	const cols = count <= 1 ? 1 : count <= 4 ? 2 : 3;
	const rows = Math.ceil(count / cols);
	const cardW = cols === 1 ? 360 : cols === 2 ? 300 : 240;
	const cardH = cardW * 3 / 2;
	const gap = 28;
	const startX = (w - (cols * cardW + (cols - 1) * gap)) / 2;
	let startY = afterQ + 40;
	const images = await Promise.all(input.cards.map((card) => card.imageData ? loadImage(card.imageData) : Promise.resolve(null)));
	input.cards.forEach((card, i) => {
		const col = i % cols;
		const row = Math.floor(i / cols);
		const x = startX + col * (cardW + gap);
		const y = startY + row * (cardH + 70);
		const img = images[i];
		if (img) ctx.drawImage(img, x, y, cardW, cardH);
		else {
			ctx.fillStyle = "#161010";
			ctx.fillRect(x, y, cardW, cardH);
		}
		ctx.strokeStyle = "rgba(216,192,138,0.7)";
		ctx.strokeRect(x, y, cardW, cardH);
		ctx.fillStyle = "#E4D4B8";
		ctx.font = "28px Devils, serif";
		ctx.textAlign = "center";
		ctx.fillText(cardDisplayTitle(card), x + cardW / 2, y + cardH + 36);
	});
	const textY = startY + rows * (cardH + 70) + 20;
	ctx.fillStyle = "#C9BFB5";
	ctx.font = "30px Manrope, sans-serif";
	ctx.textAlign = "left";
	wrapText(ctx, input.weaving.replace(/\s+/g, " ").trim(), 90, textY, 900, 42, 10);
	ctx.fillStyle = "#D8C08A";
	ctx.font = "22px Manrope, sans-serif";
	ctx.textAlign = "center";
	ctx.fillText("Темнояр · 108 нитей", w / 2, 1840);
	const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
	if (!blob) return;
	const file = new File([blob], "polotno-makoshi.png", { type: "image/png" });
	const nav = navigator;
	if (nav.share && nav.canShare?.({ files: [file] })) {
		await nav.share({
			files: [file],
			title: "Полотно Макоши"
		});
		return;
	}
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = "polotno-makoshi.png";
	a.click();
	URL.revokeObjectURL(url);
}
function shuffle(items) {
	const next = [...items];
	for (let i = next.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		const a = next[i];
		next[i] = next[j];
		next[j] = a;
	}
	return next;
}
function drawCards(all, count) {
	const filled = all.filter(isCardFilled);
	return shuffle(filled.length >= count ? filled : all).slice(0, count);
}
function ReadingPage() {
	const search = Route$5.useSearch();
	const navigate = Route$5.useNavigate();
	const cards = useOracleStore((s) => s.cards);
	const localVideoUrls = useOracleStore((s) => s.localVideoUrls);
	const def = spreadById(search.s);
	const count = def.count;
	const kind = def.id;
	const question = search.q?.trim() ?? "";
	const filledCount = cards.filter(isCardFilled).length;
	const urlIds = idsFromSearch(search).slice(0, count);
	const [localIds, setLocalIds] = (0, import_react.useState)(null);
	const [saved, setSaved] = (0, import_react.useState)(false);
	const [weaving, setWeaving] = (0, import_react.useState)("");
	const [round, setRound] = (0, import_react.useState)(0);
	const [ritual, setRitual] = (0, import_react.useState)(false);
	const [opened, setOpened] = (0, import_react.useState)(() => Array.from({ length: count }, () => false));
	const lockedIds = urlIds.length === count ? urlIds : localIds?.length === count ? localIds : [];
	const finishRitual = (0, import_react.useCallback)(() => setRitual(false), []);
	(0, import_react.useEffect)(() => {
		if (!search.go) return;
		if (lockedIds.length === count) {
			saveLastReading(searchFromIds(kind, question, lockedIds));
			if (urlIds.length !== count && localIds?.length === count) navigate({
				to: "/reading",
				search: searchFromIds(kind, question, localIds),
				replace: true
			});
			return;
		}
		if (filledCount < count && cards.length < count) return;
		const picked = drawCards(cards, count).map((card) => card.number);
		setLocalIds(picked);
		setRitual(true);
		setOpened(Array.from({ length: count }, () => false));
		playRustle();
		tapPulse(12);
		const next = searchFromIds(kind, question, picked);
		saveLastReading(next);
		navigate({
			to: "/reading",
			search: next,
			replace: true
		});
	}, [
		search.go,
		count,
		lockedIds.length,
		urlIds.length,
		localIds,
		filledCount,
		cards,
		question,
		navigate,
		kind
	]);
	const drawn = (0, import_react.useMemo)(() => {
		if (lockedIds.length !== count) return null;
		const found = lockedIds.map((id) => cards.find((card) => card.number === id)).filter((card) => Boolean(card));
		return found.length === count ? found : null;
	}, [
		lockedIds,
		cards,
		count
	]);
	const revealed = drawn ?? [];
	const allOpen = opened.length === count && opened.every(Boolean);
	const weaveKey = `${round}-${lockedIds.join("-")}`;
	(0, import_react.useEffect)(() => {
		setOpened(Array.from({ length: count }, () => false));
	}, [weaveKey, count]);
	const save = () => {
		if (!drawn?.length || saved) return;
		addJournalEntry({
			id: crypto.randomUUID(),
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			question,
			spread: kind,
			cards: drawn.map((card) => card.number),
			weaving: weaving || void 0
		});
		setSaved(true);
		toast("Расклад сохранён в дневник");
	};
	const share = async () => {
		if (!drawn?.length) return;
		try {
			await shareSpread({
				deck: "Полотно Макоши",
				question,
				cards: drawn,
				weaving
			});
		} catch {
			toast("Не удалось поделиться");
		}
	};
	const again = () => {
		const picked = drawCards(cards, count).map((card) => card.number);
		setLocalIds(picked);
		setSaved(false);
		setWeaving("");
		setRound((r) => r + 1);
		setRitual(true);
		setOpened(Array.from({ length: count }, () => false));
		playRustle();
		const next = searchFromIds(kind, question, picked);
		saveLastReading(next);
		navigate({
			to: "/reading",
			search: next,
			replace: true
		});
	};
	const openCard = (index) => {
		if (opened[index]) return;
		playThud();
		tapPulse(18);
		setOpened((prev) => prev.map((v, i) => i === index ? true : v));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		scene: "table",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl",
			children: [drawn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-sand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCutBack, {}), "Назад"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl text-sand",
					children: def.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-title mt-4 text-[2.4rem] sm:text-5xl",
					children: "Полотно отвечает"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-5 w-20" }),
				question ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 max-w-xl text-base leading-[1.6] text-muted-foreground",
					children: [
						"«",
						question,
						"»"
					]
				}) : null
			] }) : null, !search.go && !drawn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpreadForm, {
					defaultQuestion: question,
					defaultSpread: kind
				})
			}) : search.go && (!drawn || ritual) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeaveRitual, { onDone: finishRitual }) : drawn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("mx-auto grid justify-center gap-3", def.layout),
					children: revealed.map((card, i) => {
						const filled = isCardFilled(card);
						const isOpen = opened[i];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: cn("card-arrive w-full justify-self-center", count === 1 ? "max-w-[16.5rem]" : count <= 3 ? "max-w-[7.4rem] sm:max-w-[10rem]" : "max-w-[6.4rem] sm:max-w-[8.5rem]"),
							style: { animationDelay: `${i * 150}ms` },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-2 text-center text-[10px] tracking-[0.18em] text-gold uppercase",
									children: def.roles[i]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => openCard(i),
									className: "block w-full",
									"aria-label": isOpen ? cardDisplayTitle(card) : "Перевернуть карту",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flip-scene aspect-card w-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: cn("flip-card", isOpen && "is-open"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flip-face",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardBack, { className: "size-full" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flip-face flip-face-front",
												"aria-hidden": !isOpen,
												children: [filled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LivingMedia, {
													card,
													localVideoUrl: localVideoUrls[card.number],
													className: "size-full",
													autoPlay: false
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardBack, { className: "size-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gleam" })]
											})]
										})
									})
								}),
								isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/card/$number",
									params: { number: String(card.number) },
									className: "mt-2 block text-center font-display text-sm leading-tight text-sand",
									children: cardDisplayTitle(card)
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-center text-xs text-muted-foreground",
									children: "касанием"
								})
							]
						}, `${card.number}-${i}`);
					})
				}), allOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "slide-up mx-auto mt-4 max-w-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeaverPanel, {
						question,
						cards: revealed,
						roles: def.roles,
						spread: kind,
						autoStart: true,
						onWoven: setWeaving
					}, weaveKey), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: again,
								children: "Ещё раз"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: save,
								disabled: saved,
								children: saved ? "В дневнике" : "Сохранить в дневник"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => void share(),
								children: "Поделиться"
							})
						]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-center text-sm text-muted-foreground",
					children: "Переверните все карты — Ткач выйдет снизу."
				})]
			}) : null]
		})
	});
}
//#endregion
export { ReadingPage as component };
