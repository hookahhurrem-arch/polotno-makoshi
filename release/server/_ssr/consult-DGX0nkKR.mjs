import { w as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as AppShell } from "./router-tnNsNnK_.mjs";
import { t as ConsultForm } from "./consult-form-BZaD4KQa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/consult-DGX0nkKR.js
var import_jsx_runtime = require_jsx_runtime();
function ConsultPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		scene: "wall",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "max-w-xl",
			id: "consult",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "overline",
					children: "Консультация"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-title mt-3",
					children: "Живой разбор"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "ink mt-5",
					children: "Темнояр смотрит конкретный запрос. Это разговор о ситуации, не обещание события и не лечение. Стоимость и время согласуются в переписке. [УТОЧНИТЬ У ДМИТРИЯ]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-5 w-16" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultForm, {})
			]
		})
	});
}
//#endregion
export { ConsultPage as component };
