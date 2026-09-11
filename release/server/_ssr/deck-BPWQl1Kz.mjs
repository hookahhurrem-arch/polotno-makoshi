import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as IconScissors, h as cn, w as useOracleStore } from "./store-okPazmL_.mjs";
import { t as AppShell } from "./app-shell-DVIIYE3U.mjs";
import { t as CardTile } from "./card-tile-CQcReW_d.mjs";
import { t as Input } from "./input-Dbmkx0p7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/deck-BPWQl1Kz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LIGHT = /удач|светл|благ|любов|урожа|жив(ая|ой) вод|счастлив|дар|плод|луг|мир|радост|свадьб|мёд|мёд|тепло|исцел|удачн/i;
var DARK = /гроб|смерть|боль|яд|чёрн|черн|чуж|узел|болезн|разочар|страх|ночь|мор\b|кров|враг|лож|тоска|гнев|порч|проклят|тёмн|темн/i;
function threadTone(card) {
	const blob = `${card.title} ${card.keywords} ${card.description.slice(0, 280)}`;
	const dark = DARK.test(blob);
	const light = LIGHT.test(blob);
	if (dark && !light) return "dark";
	if (light && !dark) return "light";
	if (dark) return "dark";
	if (light) return "light";
	return "plain";
}
function DeckPage() {
	const cards = useOracleStore((s) => s.cards);
	const [query, setQuery] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)("all");
	(0, import_react.useEffect)(() => {
		const fromHash = window.location.hash.replace("#", "");
		const fromMemory = (() => {
			try {
				const n = window.sessionStorage.getItem("makosh-last-card");
				return n ? `card-${n}` : "";
			} catch {
				return "";
			}
		})();
		const id = fromHash || fromMemory;
		if (!id) return;
		document.getElementById(id)?.scrollIntoView({ block: "center" });
	}, [cards]);
	const visible = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return cards.filter((card) => {
			const tone = threadTone(card);
			if (filter === "light" && tone !== "light") return false;
			if (filter === "dark" && tone !== "dark") return false;
			if (!q) return true;
			return card.title.toLowerCase().includes(q) || card.keywords.toLowerCase().includes(q) || String(card.number).includes(q);
		});
	}, [
		cards,
		filter,
		query
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		scene: "book",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "overline",
							children: "Сто восемь нитей"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "display-title mt-4 text-[2.8rem] tracking-[0.12em] sm:text-6xl",
							children: "Гримуар"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-5 w-20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm leading-[1.6] text-muted-foreground",
							children: "Сто восемь нитей полотна. Нажмите карту, чтобы прочитать её."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 sm:flex-row sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Название, номер, ключевые слова",
						className: "sm:max-w-sm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1",
						children: [
							["all", "Все"],
							["light", "Светлые нити"],
							["dark", "Тёмные нити"]
						].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setFilter(id),
							className: cn("h-11 px-3 text-sm transition-colors duration-150", filter === id ? "btn-carmine" : "text-muted-foreground hover:text-sand"),
							children: label
						}, id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-5 md:gap-6",
					children: visible.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTile, { card }, card.number))
				}),
				visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start gap-3 py-16 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconScissors, { className: "text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Нить не нашлась." })]
				}) : null
			]
		})
	});
}
//#endregion
export { DeckPage as component };
