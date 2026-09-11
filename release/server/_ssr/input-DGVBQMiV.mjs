import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as cn } from "./sound-BzWTQRwe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/input-DGVBQMiV.js
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("field-ink flex h-12 w-full px-4 text-sm text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
//#endregion
export { Input as t };
