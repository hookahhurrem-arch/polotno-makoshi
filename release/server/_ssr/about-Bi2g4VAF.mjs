import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as DECK_ABOUT, r as DECK_WELCOME, t as AUTHOR_IMAGE, w as useOracleStore } from "./store-okPazmL_.mjs";
import { t as AppShell } from "./app-shell-CNkh6CD4.mjs";
import { t as Button } from "./button-Cmdjd3ge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Bi2g4VAF.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const settings = useOracleStore((s) => s.settings);
	const aboutBlocks = DECK_ABOUT.split("\n\n");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		scene: "wall",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "max-w-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "overline",
					children: "О Полотне"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-title mt-4 text-[2.8rem] sm:text-6xl",
					children: "О Полотне"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-5 w-20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-base leading-[1.6] text-muted-foreground",
					children: settings.tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "drop-cap mt-10 text-base leading-[1.65]",
					children: DECK_WELCOME
				}),
				aboutBlocks.map((para, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [i > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-split" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0 text-base leading-[1.65]",
					children: para
				})] }, para.slice(0, 24))),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-split" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-[1.6] text-muted-foreground",
					children: "Ткач читает ядро карт и плетёт один сюжет под вопрос — одна нить, узел, чужая нитка, две нити или кросна."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "overline",
							children: "Автор"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl tracking-[0.08em] text-sand",
							children: "Темнояр"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-4 w-16" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "author-frame mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: AUTHOR_IMAGE,
								alt: "Темнояр — Дмитрий",
								className: "author-photo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/scenes/frame.webp",
								alt: "",
								className: "author-carved"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "drop-cap mt-8 text-base leading-[1.65]",
							children: "Колоду издаёт Дмитрий. Ведёт её и блог как Темнояр."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-split" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base leading-[1.65]",
							children: "Дмитрий — земля и плодородие, хтоническое начало Деметры: то, что всходит из тьмы почвы. Отсюда Митя, Митрей — короткое, домашнее, своё."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-split" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base leading-[1.65]",
							children: "Темнояр читается иначе: яркая сила из тьмы; тот, в ком тёмное начало соединено с огненной силой. Это уже не перевод имени, а магическое имя-отражение."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-base leading-[1.6] text-muted-foreground",
							children: "Нить имени: Дмитрий → Митя → Митрей → земное, плодородное → Темнояр."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/reading",
							children: "Вытянуть нить"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/deck",
							children: "Открыть книгу"
						})
					})]
				})
			]
		})
	});
}
//#endregion
export { AboutPage as component };
