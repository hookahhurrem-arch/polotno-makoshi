import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as cn } from "./sound-BzWTQRwe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/textarea-B-RM4rOY.js
var import_jsx_runtime = require_jsx_runtime();
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-xs font-medium tracking-wide text-muted-foreground", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("field-ink flex min-h-28 w-full px-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
//#endregion
export { Textarea as n, Label as t };
