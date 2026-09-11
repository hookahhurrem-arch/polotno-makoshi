import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cardDisplayTitle } from "./types-BvDlfgVm.mjs";
import { h as cn, w as useOracleStore } from "./store-okPazmL_.mjs";
import { t as CardFace } from "./card-face-CYlRq-G0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/living-media-BcSSF-SS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function youtubeId(url) {
	try {
		const parsed = new URL(url);
		const host = parsed.hostname.replace(/^www\./, "");
		if (host === "youtu.be") return parsed.pathname.split("/").filter(Boolean)[0] || null;
		if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
			if (parsed.searchParams.get("v")) return parsed.searchParams.get("v");
			const parts = parsed.pathname.split("/").filter(Boolean);
			if (parts[0] === "embed" || parts[0] === "shorts" || parts[0] === "live") return parts[1] || null;
		}
	} catch {
		return null;
	}
	return null;
}
function vimeoId(url) {
	try {
		const parsed = new URL(url);
		const host = parsed.hostname.replace(/^www\./, "");
		if (host !== "vimeo.com" && host !== "player.vimeo.com") return null;
		const parts = parsed.pathname.split("/").filter(Boolean);
		const id = parts[0] === "video" ? parts[1] : parts[0];
		return id && /^\d+$/.test(id) ? id : null;
	} catch {
		return null;
	}
}
function rutubeId(url) {
	try {
		const parsed = new URL(url);
		if (!parsed.hostname.replace(/^www\./, "").endsWith("rutube.ru")) return null;
		const parts = parsed.pathname.split("/").filter(Boolean);
		const idx = parts[0] === "video" || parts[0] === "play" ? 1 : -1;
		return (idx >= 0 ? parts[idx] : null) || null;
	} catch {
		return null;
	}
}
function parseVideoUrl(raw) {
	const url = raw.trim();
	if (!url) return null;
	const yt = youtubeId(url);
	if (yt) return {
		kind: "youtube",
		embedUrl: `https://www.youtube-nocookie.com/embed/${yt}?rel=0&modestbranding=1`
	};
	const vim = vimeoId(url);
	if (vim) return {
		kind: "vimeo",
		embedUrl: `https://player.vimeo.com/video/${vim}`
	};
	const rt = rutubeId(url);
	if (rt) return {
		kind: "rutube",
		embedUrl: `https://rutube.ru/play/embed/${rt}`
	};
	if (/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(url) || url.startsWith("blob:") || url.startsWith("/videos/")) return {
		kind: "file",
		fileUrl: url
	};
	if (/^https?:\/\//i.test(url)) return {
		kind: "unknown",
		fileUrl: url
	};
	return null;
}
function compressImageFile(file, maxEdge = 720, quality = .74) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		const objectUrl = URL.createObjectURL(file);
		img.onload = () => {
			try {
				const scale = Math.min(1, maxEdge / Math.max(img.width, img.height));
				const canvas = document.createElement("canvas");
				canvas.width = Math.max(1, Math.round(img.width * scale));
				canvas.height = Math.max(1, Math.round(img.height * scale));
				const ctx = canvas.getContext("2d");
				if (!ctx) {
					reject(/* @__PURE__ */ new Error("canvas"));
					return;
				}
				ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
				resolve(canvas.toDataURL("image/jpeg", quality));
			} catch (err) {
				reject(err);
			} finally {
				URL.revokeObjectURL(objectUrl);
			}
		};
		img.onerror = () => {
			URL.revokeObjectURL(objectUrl);
			reject(/* @__PURE__ */ new Error("image"));
		};
		img.src = objectUrl;
	});
}
function LivingMedia({ card, localVideoUrl, className, autoPlay = true }) {
	const ensureVideo = useOracleStore((s) => s.ensureVideo);
	const storedUrl = useOracleStore((s) => s.localVideoUrls[card.number]);
	const parsed = parseVideoUrl(card.videoUrl);
	const fileSrc = localVideoUrl || storedUrl || (parsed?.kind === "file" || parsed?.kind === "unknown" ? parsed.fileUrl : void 0);
	const videoRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (fileSrc) return;
		ensureVideo(card.number);
	}, [
		card.number,
		fileSrc,
		ensureVideo
	]);
	(0, import_react.useEffect)(() => {
		const el = videoRef.current;
		if (!el || !fileSrc || !autoPlay) return;
		el.muted = true;
		const play = () => {
			el.play().catch(() => void 0);
		};
		play();
		el.addEventListener("canplay", play);
		el.addEventListener("loadeddata", play);
		return () => {
			el.removeEventListener("canplay", play);
			el.removeEventListener("loadeddata", play);
		};
	}, [fileSrc, autoPlay]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative overflow-hidden rounded-none bg-card", className),
		children: fileSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
			ref: videoRef,
			src: fileSrc,
			className: "size-full object-cover",
			autoPlay,
			loop: true,
			muted: true,
			playsInline: true,
			preload: "auto",
			poster: card.imageData ?? void 0
		}, fileSrc) : parsed?.embedUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			src: `${parsed.embedUrl}${parsed.embedUrl.includes("?") ? "&" : "?"}autoplay=${autoPlay ? 1 : 0}&mute=1`,
			title: cardDisplayTitle(card),
			className: "size-full border-0",
			allow: "autoplay; encrypted-media; picture-in-picture",
			allowFullScreen: true
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFace, {
			card,
			className: "size-full rounded-none"
		})
	});
}
//#endregion
export { compressImageFile as n, LivingMedia as t };
