import { n as cardDisplayTitle, o as padCardNumber } from "./types-BvDlfgVm.mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as cn } from "./sound-BzWTQRwe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/card-face-DsdLZoHw.js
var import_jsx_runtime = require_jsx_runtime();
function CardFace({ card, className, showTitle = true }) {
	if (card.imageData) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative overflow-hidden rounded-none bg-card", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: card.imageData,
			alt: cardDisplayTitle(card),
			className: "size-full object-cover object-center",
			loading: "lazy",
			decoding: "async"
		}), showTitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "title-bar absolute inset-x-0 bottom-0 px-3 py-2.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-lg leading-tight text-foreground",
				children: cardDisplayTitle(card)
			})
		}) : null]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("cloth-nap relative flex flex-col justify-between overflow-hidden rounded-none px-4 py-5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-xs tracking-card text-muted-foreground tabular-nums",
			children: padCardNumber(card.number)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl leading-tight text-foreground",
			children: cardDisplayTitle(card)
		}), card.keywords ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-xs leading-relaxed text-muted-foreground",
			children: card.keywords
		}) : null] })]
	});
}
//#endregion
export { CardFace as t };
