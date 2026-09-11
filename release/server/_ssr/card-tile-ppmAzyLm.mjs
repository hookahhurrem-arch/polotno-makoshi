import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as isCardFilled } from "./types-BvDlfgVm.mjs";
import { h as cn } from "./store-okPazmL_.mjs";
import { s as CardBack } from "./router-Bicaqtts.mjs";
import { t as CardFace } from "./card-face-CYlRq-G0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/card-tile-ppmAzyLm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
				y: px * 8
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
export { CardTile as t };
