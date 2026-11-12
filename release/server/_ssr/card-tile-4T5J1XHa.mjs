import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as isCardFilled } from "./types-BvDlfgVm.mjs";
import { v as cn } from "./router-tnNsNnK_.mjs";
import { t as CardFace } from "./card-face-CNd00xVd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/card-tile-4T5J1XHa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
function CardTile({ card, mode = "view", className, showEmptyAsBack = true }) {
	const filled = isCardFilled(card);
	const [tilt, setTilt] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: mode === "edit" ? "/studio/$number" : "/card/$number",
		params: { number: String(card.number) },
		id: `card-${card.number}`,
		onPointerMove: (event) => {
			if (event.pointerType !== "mouse") return;
			const box = event.currentTarget.getBoundingClientRect();
			const px = (event.clientX - box.left) / box.width - .5;
			const py = (event.clientY - box.top) / box.height - .5;
			setTilt({
				x: py * -6,
				y: px * 6
			});
		},
		onPointerLeave: () => setTilt({
			x: 0,
			y: 0
		}),
		className: cn("emerge group relative block aspect-card overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-ring/70", className),
		style: tilt.x || tilt.y ? { transform: `perspective(720px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` } : void 0,
		children: [filled || !showEmptyAsBack ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFace, {
			card,
			className: "size-full"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardBack, {
			number: card.number,
			className: "size-full"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "gleam",
			style: { animationDelay: `${card.number % 7 * .85}s` }
		})]
	});
}
//#endregion
export { CardTile as n, CardBack as t };
