import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as isCardFilled } from "./types-BvDlfgVm.mjs";
import { u as IconRoot, w as useOracleStore } from "./store-okPazmL_.mjs";
import { t as AppShell } from "./app-shell-DVIIYE3U.mjs";
import { t as Button } from "./button-Cmdjd3ge.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as CardTile } from "./card-tile-CQcReW_d.mjs";
import { t as Input } from "./input-Dbmkx0p7.mjs";
import { n as StudioGate, r as Textarea, t as Label } from "./textarea-DDVGY8WL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio.index-D82mejPq.js
var import_jsx_runtime = require_jsx_runtime();
function StudioPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioInner, {}) });
}
function StudioInner() {
	const cards = useOracleStore((s) => s.cards);
	const settings = useOracleStore((s) => s.settings);
	const updateSettings = useOracleStore((s) => s.updateSettings);
	const localVideoUrls = useOracleStore((s) => s.localVideoUrls);
	const filled = cards.filter(isCardFilled).length;
	const withVideo = cards.filter((c) => c.videoUrl || localVideoUrls[c.number]).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-card text-primary uppercase",
					children: "Мастерская"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-3 flex items-center gap-3 font-display text-4xl leading-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconRoot, { className: "text-primary" }), "Студия"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted-foreground",
					children: "Здесь вы вплетаете карты в полотно. У каждой — имя, текст, фото и короткое видео. Первая карта уже стоит: Макошь. Остальные 107 ждут ваши изображения и расшифровки. Эти тексты — обучение Ткача: он будет сочетать карты и давать людям прогноз."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 bg-card p-5 md:p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-2xl tabular-nums",
					children: [filled, " / 108"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						"карт с описанием · ",
						withVideo,
						" с видео"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-px w-full max-w-xs overflow-hidden bg-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-px bg-primary transition-[width] duration-300",
						style: { width: `${Math.round(filled / 108 * 100)}%` }
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-8 grid max-w-2xl gap-4",
			onSubmit: (e) => {
				e.preventDefault();
				const form = new FormData(e.currentTarget);
				updateSettings({
					name: String(form.get("name") ?? ""),
					author: String(form.get("author") ?? ""),
					tagline: String(form.get("tagline") ?? ""),
					intro: String(form.get("intro") ?? "")
				}).then(() => toast("Сохранено"));
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "name",
						children: "Название колоды"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "name",
						name: "name",
						defaultValue: settings.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "author",
						children: "Автор"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "author",
						name: "author",
						defaultValue: settings.author,
						placeholder: "Ваше имя"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "tagline",
						children: "Короткая строка"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "tagline",
						name: "tagline",
						defaultValue: settings.tagline
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "intro",
						children: "О колоде"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "intro",
						name: "intro",
						defaultValue: settings.intro
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					children: "Сохранить колоду"
				}) })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Карты"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Нажмите карту, чтобы загрузить текст и видео."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
					children: cards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTile, {
						card,
						mode: "edit",
						showEmptyAsBack: true
					}, card.number))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-10 max-w-xl text-xs leading-relaxed text-muted-foreground",
			children: "Фото сохраняется вместе с картой. Видео с телефона остаётся на этом устройстве. Чтобы гости сайта тоже видели ролик, вставьте ссылку на YouTube, Rutube или Vimeo."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/deck",
				className: "text-sm underline-offset-4 hover:underline",
				children: "Посмотреть как посетитель"
			})
		})
	] });
}
//#endregion
export { StudioPage as component };
