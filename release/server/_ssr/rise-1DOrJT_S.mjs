import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as cn } from "./router-tnNsNnK_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rise-1DOrJT_S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Rise({ children, className }) {
	const ref = (0, import_react.useRef)(null);
	const [on, setOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setOn(true);
			return;
		}
		const observer = new IntersectionObserver(([entry]) => {
			if (!entry?.isIntersecting) return;
			setOn(true);
			observer.disconnect();
		}, { threshold: .16 });
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("rise", on && "is-in", className),
		children
	});
}
//#endregion
export { Rise as t };
