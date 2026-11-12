import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as useRouter, Q as notFound, Y as redirect, _ as Outlet, b as createRootRoute, f as Scripts, g as createRouter, m as useRouterState, p as HeadContent, v as lazyRouteComponent, w as require_jsx_runtime, x as Link, y as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as __exportAll, i as getServerFnById, n as createServerFn, r as TSS_SERVER_FUNCTION } from "./ssr.mjs";
import { a as isCardFilled, i as emptyDeck, s as withDayFields, t as DEFAULT_SETTINGS } from "./types-BvDlfgVm.mjs";
import { a as number, c as union, i as literal, n as array, o as object, r as boolean, s as string, t as _enum } from "../_libs/zod.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { join } from "node:path";
import { mkdir, writeFile } from "node:fs/promises";
//#region node_modules/.nitro/vite/services/ssr/assets/router-tnNsNnK_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function BrandGlyph({ className, title, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		className: cn("size-4 shrink-0", className),
		"aria-hidden": title ? void 0 : true,
		role: title ? "img" : void 0,
		...props,
		children: [title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: title }) : null, children]
	});
}
var STROKE = {
	stroke: "currentColor",
	strokeWidth: 1.35,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
/** Нить с узлом */
function IconThreadKnot(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BrandGlyph, {
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M2 12h7.2",
				...STROKE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M14.8 12H22",
				...STROKE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "2.4",
				...STROKE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M11.2 10.2c1.6-.8 2.8.4 1.4 1.8",
				...STROKE
			})
		]
	});
}
/** Ножницы */
function IconScissors(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BrandGlyph, {
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "6.5",
				cy: "17.5",
				r: "2.2",
				...STROKE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "17.5",
				cy: "17.5",
				r: "2.2",
				...STROKE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8.2 16.2 14 4.5",
				...STROKE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M15.8 16.2 10 4.5",
				...STROKE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M10.6 12.2h2.8",
				...STROKE
			})
		]
	});
}
/** Ягода / капля */
function IconDrop(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandGlyph, {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12 4.5c2.8 3.4 5.2 6.2 5.2 9.1A5.2 5.2 0 0 1 12 18.8a5.2 5.2 0 0 1-5.2-5.2c0-2.9 2.4-5.7 5.2-9.1Z",
			...STROKE
		})
	});
}
/** Щель окна */
function IconWindow(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BrandGlyph, {
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "8",
			y: "4.5",
			width: "8",
			height: "15",
			...STROKE
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8 12h8",
			...STROKE
		})]
	});
}
/** Корень */
function IconRoot(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BrandGlyph, {
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 4v7.5",
				...STROKE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 11.5 7 19.5",
				...STROKE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 11.5 17 19.5",
				...STROKE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 15.2 9.2 20.5",
				...STROKE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 15.2 14.8 20.5",
				...STROKE
			})
		]
	});
}
/** Книга с застёжкой */
function IconBookClasp(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BrandGlyph, {
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M6 5.2h11.2v13.6H6Z",
				...STROKE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8.2 5.2v13.6",
				...STROKE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M14.6 11.2h3.6",
				...STROKE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "14.6",
				cy: "11.2",
				r: "1.1",
				...STROKE
			})
		]
	});
}
/** Веретено */
function IconSpindle(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BrandGlyph, {
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 3.5v17",
				...STROKE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 8.2c-2.4 0-3.6 1.4-3.6 3.2S9.6 14.6 12 14.6 15.6 13.2 15.6 11.4 14.4 8.2 12 8.2Z",
				...STROKE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M9.4 4.8h5.2M9.4 19.2h5.2",
				...STROKE
			})
		]
	});
}
/** Угли / очаг */
function IconHearth(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandGlyph, {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12 5.2c2.2 2.8 4.2 5.2 4.2 7.6A4.2 4.2 0 0 1 12 17a4.2 4.2 0 0 1-4.2-4.2c0-2.4 2-4.8 4.2-7.6Z",
			...STROKE
		})
	});
}
function IconCutBack(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BrandGlyph, {
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M20 12H7.5",
				...STROKE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M10.2 8.8 6.8 12l3.4 3.2",
				...STROKE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M5.2 9.5v5",
				...STROKE
			})
		]
	});
}
/** Вперёд — обрез нити вправо */
function IconCutForward(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BrandGlyph, {
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M4 12h12.5",
				...STROKE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M13.8 8.8 17.2 12l-3.4 3.2",
				...STROKE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M18.8 9.5v5",
				...STROKE
			})
		]
	});
}
var FALLBACK_MESSAGE = "Что-то пошло не так. Попробуйте обновить страницу.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-dvh flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconScissors, { className: "size-8" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl",
				children: "Ошибка"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-sm text-sm break-words text-muted-foreground",
				children: errorMessage(error)
			})
		]
	});
}
function fxTier() {
	if (typeof window === "undefined") return "lite";
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "min";
	const cores = navigator.hardwareConcurrency || 4;
	const mem = navigator.deviceMemory ?? 8;
	if (navigator.connection?.saveData || cores <= 4 || mem <= 4) return "lite";
	return "full";
}
function Atmosphere() {
	const [tier, setTier] = (0, import_react.useState)("lite");
	(0, import_react.useEffect)(() => {
		setTier(fxTier());
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": "true",
		className: "chamber-layers",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "archive-field" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "archive-depth" }),
			tier !== "min" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "archive-fiber" }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "archive-well" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "archive-vignette" })
		]
	});
}
function EmberField() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = ref.current;
		if (!canvas) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const count = fxTier() === "full" ? 26 : 14;
		let width = 0;
		let height = 0;
		let dpr = 1;
		let lift = 0;
		let raf = 0;
		const motes = [];
		const seed = () => {
			motes.length = 0;
			for (let i = 0; i < count; i += 1) motes.push({
				x: Math.random() * width,
				y: Math.random() * height,
				r: .5 + Math.random() * 1.15,
				vy: .12 + Math.random() * .28,
				phase: Math.random() * Math.PI * 2,
				wobble: .04 + Math.random() * .08,
				warm: Math.random(),
				alpha: .22 + Math.random() * .38
			});
		};
		const fit = () => {
			dpr = Math.min(window.devicePixelRatio || 1, 1.5);
			width = window.innerWidth;
			height = window.innerHeight;
			canvas.width = Math.round(width * dpr);
			canvas.height = Math.round(height * dpr);
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			if (motes.length === 0) seed();
		};
		const onScroll = () => {
			lift = Math.min(14, lift + 2.2);
		};
		const draw = (time) => {
			lift *= .92;
			ctx.clearRect(0, 0, width, height);
			for (const mote of motes) {
				mote.y -= mote.vy * (1 + lift * .09);
				mote.x += Math.sin(time * 35e-5 + mote.phase) * (mote.wobble + lift * .01);
				if (mote.y < -12) {
					mote.y = height + 8;
					mote.x = Math.random() * width;
				}
				if (mote.x < -12) mote.x = width + 8;
				if (mote.x > width + 12) mote.x = -8;
				const twinkle = .55 + .45 * Math.sin(time * .0016 + mote.phase);
				const alpha = mote.alpha * twinkle * (.72 + Math.min(lift, 8) * .05);
				const glow = mote.r * (6 + mote.warm * 3);
				const gradient = ctx.createRadialGradient(mote.x, mote.y, 0, mote.x, mote.y, glow);
				if (mote.warm > .82) {
					gradient.addColorStop(0, `rgba(255, 214, 176, ${alpha})`);
					gradient.addColorStop(.35, `rgba(166, 58, 42, ${alpha * .28})`);
				} else {
					gradient.addColorStop(0, `rgba(255, 236, 214, ${alpha})`);
					gradient.addColorStop(.4, `rgba(196, 165, 116, ${alpha * .32})`);
				}
				gradient.addColorStop(1, "rgba(196, 165, 116, 0)");
				ctx.fillStyle = gradient;
				ctx.beginPath();
				ctx.arc(mote.x, mote.y, glow, 0, Math.PI * 2);
				ctx.fill();
			}
			raf = window.requestAnimationFrame(draw);
		};
		fit();
		window.addEventListener("resize", fit);
		window.addEventListener("scroll", onScroll, { passive: true });
		raf = window.requestAnimationFrame(draw);
		return () => {
			window.cancelAnimationFrame(raf);
			window.removeEventListener("resize", fit);
			window.removeEventListener("scroll", onScroll);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		className: "ember-field",
		"aria-hidden": "true"
	});
}
function SceneStage({ name }) {
	const [tier, setTier] = (0, import_react.useState)("lite");
	const [shift, setShift] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		setTier(fxTier());
	}, []);
	(0, import_react.useEffect)(() => {
		if (tier === "min") return;
		const onMove = (event) => {
			setShift({
				x: event.clientX / window.innerWidth - .5,
				y: event.clientY / window.innerHeight - .5
			});
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		return () => window.removeEventListener("pointermove", onMove);
	}, [tier]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "scene-stage",
		"data-scene": name,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "scene-bg-inner",
			style: { transform: `translate3d(${shift.x * -8}px, ${shift.y * -5}px, 0) scale(1.06)` },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					media: "(orientation: portrait)",
					srcSet: `/scenes/${name}-tall.webp`,
					type: "image/webp"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					srcSet: `/scenes/${name}-wide.webp`,
					type: "image/webp"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: `/scenes/${name}-wide.jpg`,
					alt: "",
					className: "scene-photo"
				})
			] })
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "site-foot",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mx-auto w-24" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-center font-display text-2xl tracking-[0.12em] text-sand",
				children: "Полотно Макоши"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-center text-sm tracking-[0.16em] text-muted-foreground uppercase",
				children: "Темнояр · 108 нитей"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/learn",
						children: "Обучение"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/deck",
						children: "Гримуар"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/consult",
						children: "Консультация"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						children: "О Полотне"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://instagram.com/temnoiar",
						rel: "noreferrer",
						children: "Instagram"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contacts",
						children: "Контакты"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						children: "Конфиденциальность"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/oferta",
						children: "Условия"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-5 max-w-md text-center text-sm leading-relaxed text-muted-foreground",
				children: "Карта и расклад — символический фокус, не обещание события и не медицинский совет. Telegram для прямой связи: [УТОЧНИТЬ У ДМИТРИЯ]."
			})
		]
	});
}
var KEY = "makosh-sound";
var ctx = null;
var crackle = null;
function context() {
	if (typeof window === "undefined") return null;
	if (!ctx) ctx = new AudioContext();
	return ctx;
}
function soundEnabled() {
	if (typeof window === "undefined") return false;
	try {
		return window.localStorage.getItem(KEY) === "1";
	} catch {
		return false;
	}
}
function setSoundEnabled(on) {
	try {
		window.localStorage.setItem(KEY, on ? "1" : "0");
	} catch {}
	if (on) startCrackle();
	else stopCrackle();
}
function noiseBuffer(audio, seconds) {
	const buffer = audio.createBuffer(1, audio.sampleRate * seconds, audio.sampleRate);
	const data = buffer.getChannelData(0);
	for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;
	return buffer;
}
async function startCrackle() {
	if (!soundEnabled()) return;
	const audio = context();
	if (!audio) return;
	if (audio.state === "suspended") await audio.resume();
	stopCrackle();
	const src = audio.createBufferSource();
	src.buffer = noiseBuffer(audio, 2);
	src.loop = true;
	const filter = audio.createBiquadFilter();
	filter.type = "bandpass";
	filter.frequency.value = 900;
	filter.Q.value = .7;
	const gain = audio.createGain();
	gain.gain.value = .012;
	src.connect(filter);
	filter.connect(gain);
	gain.connect(audio.destination);
	src.start();
	crackle = {
		src,
		gain
	};
}
function stopCrackle() {
	try {
		crackle?.src.stop();
	} catch {}
	crackle = null;
}
function burst(kind) {
	if (!soundEnabled()) return;
	const audio = context();
	if (!audio) return;
	audio.resume();
	if (kind === "thud") {
		const osc = audio.createOscillator();
		const gain = audio.createGain();
		osc.type = "sine";
		osc.frequency.value = 90;
		gain.gain.setValueAtTime(.08, audio.currentTime);
		gain.gain.exponentialRampToValueAtTime(1e-4, audio.currentTime + .18);
		osc.connect(gain);
		gain.connect(audio.destination);
		osc.start();
		osc.stop(audio.currentTime + .2);
		return;
	}
	const src = audio.createBufferSource();
	src.buffer = noiseBuffer(audio, .2);
	const filter = audio.createBiquadFilter();
	filter.type = "highpass";
	filter.frequency.value = 1400;
	const gain = audio.createGain();
	gain.gain.setValueAtTime(.05, audio.currentTime);
	gain.gain.exponentialRampToValueAtTime(1e-4, audio.currentTime + .16);
	src.connect(filter);
	filter.connect(gain);
	gain.connect(audio.destination);
	src.start();
}
function playThud() {
	burst("thud");
}
function tapPulse(ms = 16) {
	try {
		window.navigator.vibrate?.(ms);
	} catch {}
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var fetchOracleState = createServerFn({ method: "GET" }).handler(createSsrRpc("cfd5decae55058b44b875528811315d769f42d21ae7915a93eedcc4dd80a28e6"));
var cardSchema = object({
	number: number().int().min(1).max(108),
	title: string(),
	keywords: string(),
	description: string(),
	imageData: string().nullable(),
	videoUrl: string(),
	dayLine: string().optional().default(""),
	dayLooks: string().optional().default(""),
	dayDo: string().optional().default(""),
	dayAvoid: string().optional().default(""),
	updatedAt: string()
});
var settingsSchema = object({
	name: string(),
	author: string(),
	tagline: string(),
	intro: string(),
	seeded: boolean(),
	updatedAt: string()
});
var saveOracleCard = createServerFn({ method: "POST" }).validator((input) => cardSchema.parse(input)).handler(createSsrRpc("5ccf290d7ea0620b7f445a41f58f4c53f1fc8d8288a2007450f3124685e40ecb"));
var saveOracleSettings = createServerFn({ method: "POST" }).validator((input) => settingsSchema.parse(input)).handler(createSsrRpc("98bc9c3983846639a9a378c9bd74e3a0e8457eeae953a5b71cd6c9590da661f7"));
var bulkSchema = object({
	cards: array(cardSchema),
	settings: settingsSchema
});
var saveOracleBulk = createServerFn({ method: "POST" }).validator((input) => bulkSchema.parse(input)).handler(createSsrRpc("5d5226869f98383f1aaeb098708a6c6970955bcb7d7e150e97005059f0ec2a13"));
var DB_NAME = "living-oracle";
var DB_VERSION = 1;
function openDb() {
	return new Promise((resolve, reject) => {
		const req = indexedDB.open(DB_NAME, DB_VERSION);
		req.onupgradeneeded = () => {
			const db = req.result;
			if (!db.objectStoreNames.contains("cards")) db.createObjectStore("cards", { keyPath: "number" });
			if (!db.objectStoreNames.contains("videos")) db.createObjectStore("videos");
			if (!db.objectStoreNames.contains("settings")) db.createObjectStore("settings");
		};
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error ?? /* @__PURE__ */ new Error("indexedDB open failed"));
	});
}
function reqAs(request) {
	return new Promise((resolve, reject) => {
		request.onsuccess = () => resolve(request.result);
		request.onerror = () => reject(request.error ?? /* @__PURE__ */ new Error("indexedDB request failed"));
	});
}
async function idbLoadCards() {
	const db = await openDb();
	try {
		const rows = await reqAs(db.transaction("cards", "readonly").objectStore("cards").getAll());
		return Array.isArray(rows) ? rows : [];
	} finally {
		db.close();
	}
}
async function idbSaveCards(cards) {
	const db = await openDb();
	try {
		const tx = db.transaction("cards", "readwrite");
		const store = tx.objectStore("cards");
		for (const card of cards) store.put(card);
		await new Promise((resolve, reject) => {
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error ?? /* @__PURE__ */ new Error("indexedDB save cards failed"));
		});
	} finally {
		db.close();
	}
}
async function idbSaveCard(card) {
	const db = await openDb();
	try {
		const tx = db.transaction("cards", "readwrite");
		tx.objectStore("cards").put(card);
		await new Promise((resolve, reject) => {
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error ?? /* @__PURE__ */ new Error("indexedDB save card failed"));
		});
	} finally {
		db.close();
	}
}
async function idbLoadSettings() {
	const db = await openDb();
	try {
		return await reqAs(db.transaction("settings", "readonly").objectStore("settings").get("default")) ?? null;
	} finally {
		db.close();
	}
}
async function idbSaveSettings(settings) {
	const db = await openDb();
	try {
		const tx = db.transaction("settings", "readwrite");
		tx.objectStore("settings").put(settings, "default");
		await new Promise((resolve, reject) => {
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error ?? /* @__PURE__ */ new Error("indexedDB save settings failed"));
		});
	} finally {
		db.close();
	}
}
async function idbGetVideo(number) {
	const db = await openDb();
	try {
		const row = await reqAs(db.transaction("videos", "readonly").objectStore("videos").get(number));
		return row instanceof Blob ? row : void 0;
	} finally {
		db.close();
	}
}
async function idbSetVideo(number, blob) {
	const db = await openDb();
	try {
		const tx = db.transaction("videos", "readwrite");
		tx.objectStore("videos").put(blob, number);
		await new Promise((resolve, reject) => {
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error ?? /* @__PURE__ */ new Error("indexedDB save video failed"));
		});
	} finally {
		db.close();
	}
}
async function idbDeleteVideo(number) {
	const db = await openDb();
	try {
		const tx = db.transaction("videos", "readwrite");
		tx.objectStore("videos").delete(number);
		await new Promise((resolve, reject) => {
			tx.oncomplete = () => resolve();
			tx.onerror = () => reject(tx.error ?? /* @__PURE__ */ new Error("indexedDB delete video failed"));
		});
	} finally {
		db.close();
	}
}
/** Официальная краткая МБК колоды «Полотно Макоши». */
var DECK_WELCOME = "Перед вами Полотно Макоши. Сто восемь нитей — и каждая о чём-то молчит.";
var DECK_ABOUT = "Кто такая Макошь и как она работает.\n\nВ славянской корневой традиции Макошь — это не строгий судья, который раз и навсегда высекает приговор на каменной скрижали. Она — великая пряха, богиня судьбы. Представьте, что она сидит за веретеном и непрерывно прядёт полотно человеческой жизни, которое сплетается из множества нитей. Макошь собирает его из всего, что есть под рукой: в него вплетаются нити наших предков, наши ежедневные действия, ошибки и победы. Иногда в узор грубо врезаются чужие поступки, желания и злые умыслы. Ниточка цепляется за ниточку, переплетается с другой — и постепенно из них складывается огромное, живое полотно нашей судьбы.\n\nКаждая карта показывает, как прямо сейчас переплелись нити вашей жизни. Вот здесь затянулся тугой узел, здесь вплелась чужая чёрная нитка, а вот куда потянется этот узор дальше, если ничего не менять.\n\nВ этом полотне есть светлые, шёлковые нити радости, но есть и тёмная, жёсткая пряжа. Тяжёлых образов в колоде не меньше, чем светлых, потому что наша жизнь не соткана из одних только праздников.";
var OFFICIAL_CARDS = [
	{
		number: 1,
		title: "Гонец",
		keywords: "Новости, известия, срочные сообщения",
		description: "Новости, известия, срочные сообщения. События срываются с места и несутся вдаль: планы меняются на ходу, времени на раздумья не остается. Часто карта показывает бумаги, документы, письмо или звонок, после которого всё приходится решать быстро. Может говорить о дороге, курьере, человеке, который вот-вот появится с известием. В деньгах — срочные переводы, неожиданное поступление или требование заплатить немедленно; средства в быстром обороте.\nВ отношениях — резкий разговор, признание, послание, которое встряхивает застоявшийся союз. Как человек — холерик, вечный двигатель: лёгкий на подъём, быстро решающий, но за скоростью упускающий детали.\nПо здоровью — суета, бессонница, скачки давления, травмы из-за спешки и нервное перенапряжение.",
		image: "/cards/001.jpg"
	},
	{
		number: 2,
		title: "Счастливый луг",
		keywords: "Удача, светлая полоса, благополучный исход",
		description: "Удача, светлая полоса, благополучный исход. Дело разрешается лучшим образом и чаще всего само собой: подворачивается случай, находится нужный человек, снимается то, что долго давило. Хороший знак почти в любом вопросе.\nВ деньгах — лёгкая прибыль, везение, доход из неожиданного источника.\nВ отношениях — тепло, взаимопонимание, примирение после ссор, для одиноких — реальный шанс встретить своего человека.\nЗдоровье крепкое, силы восстанавливаются быстро. Как человек — светлый, открытый, везучий, рядом с ним спокойно.",
		image: "/cards/002.jpg"
	},
	{
		number: 3,
		title: "Ладья в пути",
		keywords: "Движение, командировка, переезд",
		description: "Движение, командировка, переезд. Дело сдвинулось и идёт вперёд, но идти приходится против течения — своим упорством, а не по попутному ветру. Карта хорошо ложится на долгий путь, начатый проект, важный жизненный переход, а также на общие дела, где успех зависит от слаженности. В деньгах — оборот, расходы на поездки, логистику, расширение дела; средства не лежат, а работают.\nВ отношениях — испытание дорогой и расстоянием: разъезды, отдаление, но совместно пережитые трудности сближают.\nКак человек — выносливый, целеустремлённый, путник или руководитель, который не бросает начатое на полпути.\nПо здоровью — крепкий запас прочности, но возможны усталость в дороге, переохлаждение, временный упадок сил.",
		image: "/cards/003.jpg"
	},
	{
		number: 4,
		title: "Дом",
		keywords: "Дом, семья, родные стены, возвращение к своим корням",
		description: "Дом, семья, родные стены, возвращение к своим корням. Человек под защитой рода: есть надёжный тыл, куда можно отступить. Карта говорит о безопасности, стабильности, окончании скитаний, о родительском доме и о делах, связанных с жильём, — недвижимость, ремонт, переезд к своим, наследство. В отношениях — крепкая семья, доверие, примирение родни, общий быт на двоих. В деньгах — стабильность на накоплениях, имуществе, семейном деле. Как человек — хозяйственный, надёжный, привязанный к корням, для которого семья важнее всего. Здоровье крепкое, силы черпаются от семьи и рода.",
		image: "/cards/004.jpg"
	},
	{
		number: 5,
		title: "Древо",
		keywords: "Сила рода, корни, происхождение",
		description: "Сила рода, корни, происхождение. Всё, что построено, стоит прочно и будет расти дальше: дело, семья, репутация — не на один год. Карта говорит о долгих сроках, о том, что растёт медленно, но надёжно, и о том, что тянется из прошлого — родовые сценарии, наследство, фамильные дела.\nВ отношениях — зрелый союз, выдержавший время, общие ценности, готовность строить семью.\nВ деньгах — процветание на прочной базе, долгосрочные вложения, стабильный доход, а не разовая удача.\nКак человек — с крепким стержнем, спокойный, мудрый, способный кормить и защищать других.\nЗдоровье с большим запасом и хорошим восстановлением, долголетие.",
		image: "/cards/005.jpg"
	},
	{
		number: 6,
		title: "Свинцовые тучи",
		keywords: "Неясность, неопределённость, надвигающиеся сложности",
		description: "Неясность, неопределённость, надвигающиеся сложности. Обстановка накалена: достаточно мелкого повода, чтобы разразилась буря. Карта предупреждает о кризисе, который придёт извне и которого не избежать, — его можно только встретить подготовленным. В отношениях — накопившиеся обиды, тяжёлый разговор, вспышка эмоций или момент, когда уже невозможно делать вид, что всё хорошо.\nВ делах и деньгах — нестабильность, неожиданные препятствия, напряжённые переговоры.\nКак человек — тревожный, напряжённый, вспыльчивый.",
		image: "/cards/006.jpg"
	},
	{
		number: 7,
		title: "Змея подколодная",
		keywords: "Ложь, двуличие, скрытый враг рядом",
		description: "Ложь, двуличие, скрытый враг рядом. Вас предаёт тот, кому вы доверяете, и удар готовится тихо, из-под полы. Самое время проверить окружение и не выкладывать свои планы посторонним: сладкие речи здесь означают ровно обратное. Вред из-за личной неприязни и ненависти.\nВ отношениях — измена, двойная игра, интриги за спиной, соперница. Часто показывает женщину — хитрую, опытную, старше вас.\nВ делах — подложные бумаги, махинации, мелкие кражи, партнёры, которые скрывают главное; деньги теряются через доверие мошеннику.\nПо здоровью — скрытые, поздно замеченные болезни, отравления, стресс.",
		image: "/cards/007.jpg"
	},
	{
		number: 8,
		title: "Навий одр",
		keywords: "Конец, угасание, полное истощение",
		description: "Конец, угасание, полное истощение. Процесс исчерпан: то, что еще недавно жило, больше не развивается. Надежды рушатся, силы заканчиваются, ситуация приходит к остановке. Здесь уже нечего спасать в прежнем виде — остаётся принять завершение и отпустить.\nВ отношениях — чувства угасли, связь фактически мертва, осталась только привычка или формальность.\nВ делах и деньгах — закрытие проекта, исчерпание ресурсов, остановка, долги, безвыходная ситуация.\nКак человек — опустошенный, апатичный, выгоревший, потерявший силы и желание что-либо менять.\nПо здоровью — тяжёлое состояние, истощение, длительная болезнь, упадок жизненных сил.",
		image: "/cards/008.jpg"
	},
	{
		number: 9,
		title: "Праздничный дар",
		keywords: "Подарок, приятная новость, вознаграждение",
		description: "Подарок, приятная новость, вознаграждение. Что-то хорошее приходит к вам со стороны — премия, помощь, знак внимания, приятное предложение. Карта говорит о щедрости, гостеприимстве, застолье, празднике, о времени, когда можно принимать плоды своих трудов.\nВ отношениях — забота, ухаживания, сюрпризы, тёплые примирения; чувства проявляются делом, а не словами. В деньгах — поступления, удачные сделки, достаток.\nЗдоровье хорошее.\nКак человек — щедрый, открытый, лёгкий, с ним хочется иметь дело.",
		image: "/cards/009.jpg"
	},
	{
		number: 10,
		title: "Сор из избы",
		keywords: "Скандал, огласка, вынесенные на люди семейные дела",
		description: "Скандал, огласка, вынесенные на люди семейные дела. Скрывать больше не получается: тайное вылезает наружу, и происходит это громко и некрасиво. Ссоры с криком, вынесенные на ружу обиды, вмешательство родни и соседей в вашу личную жизнь.\nВ отношениях — измена или ложь всплывает на поверхность, разбирательства при свидетелях, потеря доверия.\nВ делах — публичные разборки, проверки, утечка того, что не предназначалось для чужих ушей, удар по репутации.\nКак человек — резкий, скандальный, не умеющий держать язык за зубами.\nПо здоровью — нервный срыв, бессонница, давление после потрясений. Иногда карта означает и обратное: с человека спадает морок и наружу выходит чужая тайная работа против него.",
		image: "/cards/010.jpg"
	},
	{
		number: 11,
		title: "Вещие совы",
		keywords: "Знание, информация, вещие сны и знаки",
		description: "Знание, информация, вещие сны и знаки. Время не действовать, а смотреть и слушать: пелена спадает, и становится видно, как обстоят дела на самом деле. Карта говорит о хорошем чутье, которому стоит довериться, а также о новостях, слухах, сплетнях и разговорах за спиной — рядом с плохими картами именно они и всплывают.\nВ отношениях — прозрение, конец розовых очков, тайные разговоры, сны про партнёра.\nВ делах — время анализировать, а не подписывать: проверяйте обещания, ищите скрытые мотивы.\nКак человек — умный, наблюдательный, скрытный, видит людей насквозь и держится в стороне; иногда серый кардинал. По здоровью — бессонница, тревожные ночи, перенапряжение глаз, головные боли от умственной работы.",
		image: "/cards/011.jpg"
	},
	{
		number: 12,
		title: "Младое дитя",
		keywords: "Начало, первые шаги, новое дело или новая жизнь",
		description: "Начало, первые шаги, новое дело или новая жизнь. Всё в самой хрупкой стадии: потенциал большой, но пока ничего не окрепло, и резкие движения могут навредить. В конкретном вопросе часто означает ребёнка — беременность, роды, важные события в жизни детей, работу с детьми.\nВ отношениях — первый этап, притирка, нежность, чистые чувства без опыта и защиты; иногда партнер моложе. В деньгах — стартовый капитал, первые небольшие доходы, вложения в то, что ещё нужно выхаживать.\nКак человек — искренний, доверчивый, наивный, ранимый, нуждающийся в опеке; рядом с плохими картами — инфантильность и неприятности из-за детей.\nЗдоровье требует бережного режима. Поле у такого человека чистое, но открытое: легко принимает и доброе, и дурное.",
		image: "/cards/012.jpg"
	},
	{
		number: 13,
		title: "Хитрая лиса",
		keywords: "Хитрость, скрытые намерения, чужая игра",
		description: "Хитрость, скрытые намерения, чужая игра. Кто-то действует в своих интересах, а вам показывает удобную картинку. Не верьте лёгким обещаниям и не подписывайте не читая: здесь ловушки, мелкая ложь, подвох в условиях. Общение ради личной выгоды.\nВ отношениях — неискренность, манипуляции, лесть с расчётом, тайный роман на стороне, попытка что-то утаить от вас.\nВ делах — мошенничество, спекуляции, договоры с двойным дном, деньги, которые приходят и уходят через махинации и серые схемы.\nКак человек — умный, обаятельный, изворотливый и ненадежный; умеет ждать своего момента и работает только на себя. По здоровью — нервы, паранойя, скрытые недуги, которые трудно обнаружить.",
		image: "/cards/013.jpg"
	},
	{
		number: 14,
		title: "Хозяин медведь",
		keywords: "Сила, влияние, защита, собственность",
		description: "Сила, влияние, защита, собственность. Человек или обстоятельство, обладающие большим весом и ресурсом. Здесь действует тот, кто привык быть хозяином положения, защищать своё и добиваться своего напором. Карта может указывать на покровителя, крупного человека, начальника или влиятельного старшего родственника.\n\nВ отношениях — сильная привязанность, собственничество, ревность, желание защищать и одновременно контролировать партнёра. Прочный союз, в котором один занимает доминирующее положение.\nВ делах и деньгах — крупные ресурсы, прибыль, имущество, сильный партнёр, материальная опора.\nКак человек — властный, основательный, упрямый, консервативный, территориальный. Надёжный защитник, но опасный противник, если задеть его интересы.\nПо здоровью — крепость, выносливость, большой запас сил; рядом с негативными картами — тяжелое течение болезни.",
		image: "/cards/014.jpg"
	},
	{
		number: 15,
		title: "Путеводные звезды",
		keywords: "Надежда, ориентир, большой замысел",
		description: "Надежда, ориентир, большой замысел. Цель, ради которой стоит идти дальше, и путь к ней освещен — даже если сейчас темно. Карта говорит о вдохновении, больших планах, о деле, рассчитанном не на месяц, а на годы, и о помощи, которая приходит от высших сил.\nВ отношениях — глубокая душевная близость, общие ценности, притяжение, которое не объяснить словами; союз, который идёт человеку на пользу.\nВ деньгах — долгая стратегия, успех в творчестве, в новом и креативном; доход приходит через предназначение, а не через метания.\nКак человек — мечтатель, философ, стратег с широким взглядом, иногда оторванный от земли.\nПо здоровью — состояние зависит от душевного равновесия; возможны сбитый режим и ночной образ жизни.",
		image: "/cards/015.jpg"
	},
	{
		number: 16,
		title: "Верный пес",
		keywords: "Верность, защита, надежный человек рядом",
		description: "Верность, защита, надежный человек рядом. Есть тот, кто прикроет и не предаст: друг, партнёр, союзник, старая проверенная связь. Карта также требует и от вас преданности делу и своим — стоять на страже, не бросать, не юлить.\nВ отношениях — честность, доверие, готовность разделить трудности; партнёр за вас горой.\nВ делах — надежные компаньоны, сохранность имущества, тыл прикрыт, убытков ждать неоткуда.\nКак человек — исполнительный, верный слову, бдительный, с чужими суровый, со своими мягкий; часто работает в охране, силовых структурах, на службе.\nЗдоровье крепкое.",
		image: "/cards/016.jpg"
	},
	{
		number: 17,
		title: "Твердыня нави",
		keywords: "Закрытость, глухая оборона, изоляция",
		description: "Закрытость, глухая оборона, изоляция. Человек ушёл в себя и никого не пускает — ни в дела, ни в чувства. Иногда это вынужденно: стены выше, чем хотелось бы, и выйти наружу пока не получается.\nВ отношениях — холод, отчуждение, молчание, одиночество вдвоём; один закрылся и не объясняет причин.\nВ делах — жёсткая экономия, закрытая информация, накопления «на чёрный день», минимум контактов с внешним миром; притока нет, но и старое цело.\nКак человек — замкнутый, гордый, недоверчивый одиночка, живущий по своим правилам.\nПо здоровью — усталость от изоляции, упадок сил, тяжесть в теле, затяжные скрытые недуги. Тревожные расстройства и фобии.",
		image: "/cards/017.jpg"
	},
	{
		number: 18,
		title: "Сад",
		keywords: "Люди, общение, встречи, открытое пространство",
		description: "Люди, общение, встречи, открытое пространство. Место, где всё происходит на виду: праздники, гуляния, застолья, ярмарки, встречи и новые знакомства.\nВ отношениях — знакомство, свидание, совместный выход в люди, приятное общение. Для одинокого человека карта часто приносит новые знакомства.\nВ делах и деньгах — полезные связи, клиенты, партнёры, приглашения и возможности через знакомых. Хорошее время для рекламы, публичности, работы с людьми и всего, что требует быть на виду.\nКак человек — общительный, приятный, заметный, умеющий располагать к себе. Любит людей, внимание и красивые места.\nПо здоровью — состояние во многом зависит от окружения и образа жизни. Полезны прогулки, свежий воздух, общение и смена обстановки.",
		image: "/cards/018.jpg"
	},
	{
		number: 19,
		title: "Гора",
		keywords: "Препятствие, тупик, стена",
		description: "Препятствие, тупик, стена.  перекрыта: то, что казалось простым, упирается в непроходимый завал.\nКарта также говорит, что вы неверно представляете общую картину: за горой происходит совсем не то, что вам кажется. Бывает и наоборот — мелкая проблема раздута до размеров скалы, отсюда уныние и упадок духа.\nВ отношениях — стена отчуждения, каждый уперся в свою правоту.\nВ делах — блокировка счетов, бюрократия, запреты, остановка бизнеса, деньги не идут.\nПо здоровью — истощение, защемления, тяжесть, вынужденная остановка.",
		image: "/cards/019.jpg"
	},
	{
		number: 20,
		title: "Сердечный жар",
		keywords: "Яркие чувства, любовь, азарт",
		description: "Яркие чувства, любовь, азарт. Человек горит своим делом или своей любовью, сил много и они бьют через край. Всё, во что вложена душа, идёт вперёд именно на этом огне.\nВ отношениях — страсть, тепло, искренность, яркие переживания, взаимное притяжение; отношения живые, а не по привычке.\nВ деньгах — прорыв на энтузиазме: доход идет оттуда, где вам по-настоящему интересно.\nКак человек — харизматичный, с горящими глазами, мотор любой компании, умеющий любить и вдохновлять.\nПо здоровью — крепкий тонус и хорошее кровообращение, но рядом с плохими картами — слабые сердце и сосуды, инфаркт.",
		image: "/cards/020.jpg"
	},
	{
		number: 21,
		title: "Чернокнижная тетрадь",
		keywords: "Тайное знание, закрытые записи, чужие секреты",
		description: "Тайное знание, закрытые записи, чужие секреты. Есть информация не для посторонних глаз: старые договорённости, архивы, бумаги, личные наработки.\nСитуация требует действовать по правилам, писанным до вас, — своевольничать здесь нельзя.\nКак человек — практик с большим опытом, скрытный, никого не пускающий в свою кухню; верит фактам и записям, а не словам.\nВ делах — строгий учёт, контракты, проверенные схемы, деньги через ремесло и экспертную работу.\nВ отношениях — негласный договор между парой, тайны, которые знают только они, связь, скрытая от чужих.",
		image: "/cards/021.jpg"
	},
	{
		number: 22,
		title: "Бес",
		keywords: "Искушение, зависимость, сильная привязанность",
		description: "Искушение, зависимость, сильная привязанность. Человек оказался связан тем, что трудно отпустить: страстью, деньгами, властью, удовольствием или другим человеком. Здесь есть то, что манит и обещает желаемое, но постепенно забирает свободу.\nВ отношениях — сильное притяжение, ревность, собственничество. Связь может быть настолько сильной, что человек уже не понимает, где любовь, а где зависимость. Манипуляции, абьюз.\nВ делах и деньгах — жажда выгоды, большие опасные деньги, рискованные сделки, или зависимость от материального. Можно получить желаемое, но цена окажется выше, чем казалось сначала.\n\nКак человек — обаятельный, сексуальный, властный, умеющий соблазнять и добиваться своего. Может легко находить слабое место другого человека.\n\nПо здоровью — переутомление, нарушения сна, зависимости и последствия излишеств.",
		image: "/cards/022.jpg"
	},
	{
		number: 23,
		title: "Распутье",
		keywords: "Выбор",
		description: "Выбор. Дорог несколько, и каждая ведет совсем в разные стороны; жить по-старому уже не выйдет. Решение принимайте не торопясь, взвесив все «за» и «против», а приняв — идите уверенно. Рядом с плохими картами карта предостерегает от поспешного и неверного шага.\nВ отношениях — момент истины: вместе или врозь, а иногда прямой выбор между двумя людьми, любовный треугольник.\nВ делах — куда вкладывать, менять ли работу и направление; ошибка на развилке загонит в тупик.\nКак человек — тот, кто застывает в нерешительности перед важным шагом. Неопределенный, мнительный.\nПо здоровью — необходимость выбрать способ лечения или восстановления, обратиться к другому специалисту, сменить подход.",
		image: "/cards/023.jpg"
	},
	{
		number: 24,
		title: "Подпольные крысы",
		keywords: "Мелкие потери, воровство, утечки и то, что постепенно отнимает силы",
		description: "Мелкие потери, воровство, утечки и то, что постепенно отнимает силы. Проблема не обязательно выглядит большой, но понемногу грызёт ситуацию изнутри. Это могут быть недосмотренные мелочи, чужая нечестность, сплетни или люди, которые пользуются вашей добротой.\nВ деньгах — скрытые траты, пропажа средств, мелкое мошенничество или человек, который понемногу тянет деньги на себя.\n\nВ отношениях — недоверие, мелкие обиды, зависть и вмешательство со стороны. Постепенно это может разрушать близость, даже если серьёзной ссоры пока нет.\nКак человек — хитрый, мелочный, завистливый, привыкший действовать исподтишка и искать выгоду для себя.\nПо здоровью — то, что постепенно истощает организм: затяжное недомогание, инфекции, проблемы с желудком, аутоиммунные заболевания,.",
		image: "/cards/024.jpg"
	},
	{
		number: 25,
		title: "Аистиное гнездо",
		keywords: "Семья, дом, дети",
		description: "Семья, дом, дети. На первом плане быт и продолжение рода: свадьба, совместная жизнь, беременность, рождение ребёнка, обустройство своего угла. Карта обещает стабильность и защищённость тем, кто внутри гнезда. В отношениях — прочный традиционный союз, нацеленный на семью, забота и преданность дому.\nВ деньгах — вложения в жильё, ремонт, строительство, семейный бюджет; траты идут на близких и на безопасность.\nКак человек — хозяйственный, заботливый, надёжный, готовый защищать своих до последнего, но консервативный.\nПо здоровью — женские и репродуктивные вопросы, беременность, роды, наследственность.",
		image: "/cards/025.jpg"
	},
	{
		number: 26,
		title: "Весть",
		keywords: "Сообщение, бумаги, официальное известие",
		description: "Сообщение, бумаги, официальное известие. Приходит письмо, ответ, справка или сообщение, которое проясняет положение дел и требует реакции.\nЧасто карта прямо указывает на переписку, договоры, отчеты, счета, повестки, любую бюрократию.\nВ отношениях — переписка на расстоянии, долгожданное сообщение, разговор, снимающий недомолвки; иногда бумаги о статусе — заявление в загс, брачный договор.\nВ делах — одобрение сделки, возврат долга, штраф, уведомление - зависит от соседних карт. По здоровью — анализы, заключения, рецепты, направления на обследование.\nКак человек — деловой, точный, пунктуальный, связанный с бумагами, текстами или официальными структурами.",
		image: "/cards/026.jpg"
	},
	{
		number: 27,
		title: "Молодец",
		keywords: "Мужчина, молодой парень, сын, муж или поклонник",
		description: "Мужчина, молодой парень, сын, муж или поклонник. Карта указывает на мужчину, который уже есть в вашей жизни или скоро появится в ней. Это может быть конкретный человек, весть от него, встреча или ситуация, связанная с мужчиной.\n\nВ отношениях — мужчина, его чувства и намерения. Для женщины карта часто показывает поклонника, партнёра или будущего мужчину. Для мужчины — его собственную мужскую позицию и поведение в отношениях.\n\nВ делах — мужчина, от которого зависит решение или помощь. Может указывать на начальника, коллегу, партнера, клиента или человека, который возьмет дело в свои руки.\nКак человек — молодой, активный, прямой, уверенный в себе. Действует открыто и обычно предпочитает не ждать, а делать.\nПо здоровью — хорошая физическая форма, крепость, выносливость, быстрое восстановление.",
		image: "/cards/027.jpg"
	},
	{
		number: 28,
		title: "Красна девица",
		keywords: "Женщина: молодая, красивая, притягательная, чаще всего та, о ком идёт речь в вопросе",
		description: "Женщина: молодая, красивая, притягательная, чаще всего та, о ком идёт речь в вопросе. Также — забота, хозяйственность, наведение порядка, умение обустроить жизнь вокруг себя.\nВ отношениях — тёплый зрелый союз на уважении и доверии, где обоим спокойно; для одинокого — появление такой женщины в жизни.\nВ деньгах — стабильность, разумный бюджет, траты на дом и близких, успех в делах, требующих терпения и системности.\nКак человек — мудрая, сильная духом хранительница очага, с хорошим чутьем и достоинством, умеющая и согреть, и поставить на место.\nПо здоровью — женские вопросы, плодородие, хороший ресурс.",
		image: "/cards/028.jpg"
	},
	{
		number: 29,
		title: "Блудница",
		keywords: "Соблазн, искушение, связь без обязательств",
		description: "Соблазн, искушение, связь без обязательств. Страсть яркая, но опоры под ней нет: за такие удовольствия потом приходится дорого платить. В отношениях — измена, треугольник, тайная интрижка, притяжение только телесное; человека держат чувствами и близостью, а не любовью.\nВ делах — расточительство, траты на развлечения и роскошь, азарт, сомнительные истории в красивой обертке.\nКак человек — обаятельный, манящий, эгоистичный манипулятор, который живёт ради удовольствия, обещает легко и не держит слова.\nПо здоровью — последствия излишеств: алкоголь, беспорядочный образ жизни, женские и мужские болезни, нервное истощение.",
		image: "/cards/029.jpg"
	},
	{
		number: 30,
		title: "Матушка",
		keywords: "Мать или женщина, которая занимает в вашей жизни материнское место",
		description: "Мать или женщина, которая занимает в вашей жизни материнское место. Забота, опека, надёжный тыл, куда всегда можно вернуться. Карта советует опереться на семью и родительский совет — там сейчас и защита, и здравый смысл.\nВ отношениях — тепло и принятие, но иногда и перекос: один опекает, другой позволяет себя опекать; гиперопека вместо равенства. Влияние матери на отношения.\nВ деньгах — помощь от матери или старших родственников, разумное хозяйствование, никаких рискованных долгов.\nКак человек — мудрая, заботливая, авторитетная женщина, стержень семьи, порой властная в своем желании защитить.\nПо здоровью — женские вопросы, наследственность, восстановление в спокойной домашней обстановке.",
		image: "/cards/030.jpg"
	},
	{
		number: 31,
		title: "Батюшка",
		keywords: "Отец, глава семьи, старший мужчина с правом решающего голоса",
		description: "Отец, глава семьи, старший мужчина с правом решающего голоса. Карта требует ответственности, дисциплины и уважения к правилам: своевольничать не время, лучше послушать того, кто опытнее. Часто прямо указывает на закон, инстанции, начальство.\nВ отношениях — надежный союз на уважении и защите, партнёр в роли добытчика; иногда сильное влияние отца на вашу личную жизнь и выбор человека. В деньгах — строгий контроль расходов, поддержка от влиятельного мужчины, долгие надёжные вложения.\nКак человек — строгий, справедливый, немногословный, всё держит под контролем и отвечает за своих. По здоровью — мужские вопросы, опорно-двигательный аппарат, наследственность по отцовской линии.",
		image: "/cards/031.jpg"
	},
	{
		number: 32,
		title: "Князь",
		keywords: "Власть, статус, руководство",
		description: "Власть, статус, руководство. Ситуация переходит на уровень, где решения принимает тот, кто обладает полномочиями и отвечает за последствия. Карта указывает на влиятельного мужчину, начальника, руководителя, чиновника, крупного партнера или официальное лицо.\nВ отношениях — зрелый союз, сильный ведущий партнер, чёткое распределение ролей. В негативе — авторитарность, холодность и подавление.\nВ делах и деньгах — руководство, высокий статус, крупные сделки, официальные решения, управление ресурсами и влияние через связи.\n\nКак человек — амбициозный, уверенный, стратегический, умеющий пользоваться своим положением. Привык распоряжаться, принимать решения и нести ответственность.\nПо здоровью — хороший тонус и выносливость; в негативе — давление, сердце, перегрузка от груза ответственности.",
		image: "/cards/032.jpg"
	},
	{
		number: 33,
		title: "Княгиня",
		keywords: "Женщина со статусом, влиянием и холодной головой",
		description: "Женщина со статусом, влиянием и холодной головой. Она управляет ситуацией изнутри — умом, расчётом и достоинством, а не криком. Карта говорит о признании, независимости, умении держать лицо и видеть на несколько шагов вперёд.\nВ отношениях — союз равных, где женщину уважают и с ней считаются; в тени — гордыня, холод, требовательность и манипуляция своим положением.\nВ делах — благополучие, крупные ресурсы, успех в переговорах и там, где нужен тонкий расчет.\nКак человек — умная, гордая, сдержанная, границы держит жестко и близко никого не подпускает.\nПо здоровью — состояние ровное, но копится напряжение от постоянного самоконтроля.",
		image: "/cards/033.jpg"
	},
	{
		number: 34,
		title: "Лилии",
		keywords: "Мир, чистота, прощение и связь с прошлым",
		description: "Мир, чистота, прощение и связь с прошлым. Карта приносит спокойствие после пережитого, помогает отпустить старые обиды и принять то, что уже нельзя изменить. Часто указывает на события, которые развиваются медленно, но приводят к внутреннему примирению.\nВ отношениях — нежность, верность, зрелые чувства, любовь на расстоянии, воспоминания о прошлом и возможность простить друг друга. Иногда — возвращение человека из прошлого.\nВ деньгах — спокойный период, помощь, возврат старых долгов или завершение давних финансовых дел.\nКак человек — мудрый, мягкий, благородный, тонко чувствующий, иногда живущий воспоминаниями.\nПо здоровью — восстановление, очищение, необходимость снять накопившееся напряжение. Помогают вода и баня.",
		image: "/cards/034.jpg"
	},
	{
		number: 35,
		title: "Жатва",
		keywords: "Итог, результат и отсечение",
		description: "Итог, результат и отсечение. Приходит время пожинать то, что было посеяно, а вместе с урожаем — убрать всё отжившее. Перемены могут быть резкими и болезненными, но они освобождают место для нового.\nВ отношениях — завершение старой истории, разрыв, развод или переход отношений в новое состояние. Иногда — окончательное решение после долгих сомнений.\nВ делах и деньгах — получение заработанного, подведение итогов, закрытие дел, расчёт по старым обязательствам. Ошибки прошлого тоже дают свой результат.\nКак человек — решительный, прямой, умеющий вовремя поставить точку и отсечь лишнее.\nПо здоровью — острые состояния, травмы, необходимость операции или другого решительного лечения.\n\nВ магии — обряды на отсечение, закрытие старого, снятие привязок и прекращение того, что больше не должно продолжаться.",
		image: "/cards/035.jpg"
	},
	{
		number: 36,
		title: "Ключ",
		keywords: "Решение найдено",
		description: "Решение найдено. То, что долго стояло, сдвинется: находится подход, разгадка, нужный человек или нужная бумага. Двери открываются, но к каждой — свой ключ, наугад дергать бесполезно.\nВ отношениях — примирение после отчуждения, откровенный разговор, который всё расставляет по местам, найденный подход к закрытому человеку. В делах — нестандартный выход из кризиса, доступ к новому источнику дохода, удачное завершение сложной комбинации.\nПо здоровью — верный диагноз и лечение, которое наконец сработает.\nКак человек — умный, проницательный, изобретательный, умеющий найти подход к кому угодно и не принимающий ничего на веру.",
		image: "/cards/036.jpg"
	},
	{
		number: 37,
		title: "Сокровище",
		keywords: "Ценность, награда, накопленное",
		description: "Ценность, награда, накопленное. Приходит то, ради чего работали: крупная сумма, наследство, премия, выплата, которую долго ждали. Иногда карта говорит о скрытом ресурсе — таланте, связях, имуществе, о котором вы забыли, — но взять его без усилий не получится. В деньгах — прорыв, богатство, надёжные накопления, успешное завершение денежного дела.\nВ отношениях — глубокая связь, в которой люди друг для друга по-настоящему ценны; союз даёт и чувство, и достаток.\nКак человек — состоятельный, знающий себе цену, с хваткой, бережно охраняющий своё и не любящий рассказывать о своих делах.\nПо здоровью — восстановление, приток сил.",
		image: "/cards/037.jpg"
	},
	{
		number: 38,
		title: "Якорь",
		keywords: "Стабильность, закрепление, остановка",
		description: "Стабильность, закрепление, остановка. Вы встали на своё место: надежно, предсказуемо, безопасно. Только у этой прочности есть обратная сторона — застой, если время уже требует двигаться дальше. Сдвинуться с якоря будет непросто.\nВ отношениях — проверенный временем союз, верность и порядок; в минусе — рутина, привычка вместо чувства, обязательства, которые держат крепче любви.\nВ деньгах — стабильное положение без скачков, консервативное ведение дел; резких поступлений ждать не стоит.\nКак человек — основательный, надёжный, упрямый, не любящий перемен и крепко держащийся за своё.\nПо здоровью — хроника, затяжные состояния, малоподвижность.",
		image: "/cards/038.jpg"
	},
	{
		number: 39,
		title: "Солнце",
		keywords: "Успех, ясность, всё выходит на свет",
		description: "Успех, ясность, всё выходит на свет. Скрытое становится явным, дело завершается победой, вас замечают и признают. Сил много, вы в центре внимания и событий.\nВ отношениях — яркая, открытая, страстная связь, где всё на виду;\nв тени — ревность, эгоизм и борьба за то, кто главный.\nВ деньгах — подъём, заслуженная прибыль, признание; но и соблазн спустить всё на блеск и авантюры.\nКак человек — харизматичный, энергичный лидер, притягивающий людей, но категоричный и вспыльчивый. По здоровью — избыток сил, при этом воспаления, температура, давление, ожоги, выгорание.",
		image: "/cards/039.jpg"
	},
	{
		number: 40,
		title: "Око соглядатое",
		keywords: "За вами наблюдают",
		description: "За вами наблюдают. Кто-то пристально следит за вашими делами: проверка, аудит, конкурент или тайный недоброжелатель. Правда спрятана глубоко, а вы — на виду. Не откровенничайте и перепроверьте окружение.\nВ отношениях — подозрительность, слежка, проверка телефона, контроль каждого шага, тайные переписки с обеих сторон.\nВ делах — утечка информации, чужой интерес к вашим деньгам и коммерческим тайнам, проверки.\nКак человек — наблюдательный, скрытный, подозрительный; о себе не рассказывает, зато собирает всё о других и дёргает за ниточки со стороны.\nПо здоровью — зрение, глазное давление, бессонница, фоби.",
		image: "/cards/040.jpg"
	},
	{
		number: 41,
		title: "Полотно времени",
		keywords: "Всему свой срок",
		description: "Всему свой срок. Ускорить или остановить происходящее не получится — процесс идёт по своим законам, и остается понимать его логику и не суетиться. Карта часто отвечает: рано, ждите, время ещё не пришло. Прошлое догоняет настоящее: то, что заложено давно, сейчас даёт плоды или убытки.\nВ отношениях — ощущение предопределенности, «судьба свела», связь, которая тянется годами и проверяется временем.\nВ деньгах — долгие процессы, зависимость от общей обстановки, отдача от старых вложений.\nКак человек — терпеливый, философского склада, живущий большими сроками и не дергаться по пустякам. По здоровью — возрастное, цикличное, зависимость самочувствия от сезона и ритмов. Хороша как карта сроков в раскладе.",
		image: "/cards/041.jpg"
	},
	{
		number: 42,
		title: "Молния",
		keywords: "Удар, внезапное событие, всё меняется в один момент",
		description: "Удар, внезапное событие, всё меняется в один момент. Жизнь делится на «до» и «после»: неожиданная новость, разрыв, увольнение, авария, озарение. Держать старый порядок больше не выйдет — его сносит внешней силой. Больно, но после такого удара становится видно правду.\nВ отношениях — взрыв накопленного, скандал, крушение иллюзий или внезапное понимание, что партнер на самом деле чувствует.\nВ деньгах — резкие потрясения: внезапная потеря или неожиданная прибыль, крах убыточного дела.\nКак человек — взрывной, резкий, импульсивный, несущий вокруг себя перемены и хаос.\nПо здоровью — травмы, давление, сердце, острые состояния, срочная операция.",
		image: "/cards/042.jpg"
	},
	{
		number: 43,
		title: "Сундук морены",
		keywords: "Если у греков существовал ящик Пандоры",
		description: "Если у греков существовал ящик Пандоры, то в славянской традиции его образ можно представить как сундук Морены — хранилище смерти, тайн и сил, которые лучше не трогать. Открылось то, что лучше было не трогать. Старое, спрятанное и забытое лезет наружу: скелеты в шкафу, чужие тайны, последствия давних поступков. Крышку обратно не закрыть — придётся разбираться с тем, что вырвалось.\nВ отношениях — вскрытие измен, давних обид и жесткой правды; либо союз это переживёт и очистится, либо развалится. В делах — внезапно всплывают долги, налоговые претензии, старые махинации, бюджет выходит из-под контроля.\nКак человек — закрытый, серьезный, задумчивый человек, привыкший многое держать внутри. Склонен к мрачному взгляду на жизнь, недоверию и постоянному прокручиванию прошлого.\nПо здоровью — резкое обострение хронического, тяжелые состояния.",
		image: "/cards/043.jpg"
	},
	{
		number: 44,
		title: "Тлен и лихоманка",
		keywords: "Гниль, застой, медленное угасание",
		description: "Гниль, застой, медленное угасание. Процесс не умер разом, а тлеет: дело не идёт, силы уходят, всё держится на одной привычке. Вы застряли в прошлом и не можете шагнуть вперёд.\nВ отношениях — чемодан без ручки: чужие люди рядом, эмоций нет, вместе только по инерции или из страха перемен. В делах — глухой застой, зависшие проекты, долги, перекрытый денежный канал.\nКак человек — выгоревший, пессимистичный, тяжёлый на подъём, ощущающий себя жертвой обстоятельств. По здоровью — затяжные болезни, кости и суставы, упадок сил, глубокая апатия; состояние ухудшается медленно, но неуклонно.",
		image: "/cards/044.jpg"
	},
	{
		number: 45,
		title: "Пустой кошель",
		keywords: "Нет денег",
		description: "Нет денег. Ресурсы кончились: потратили больше, чем могли, или доход просто иссяк. Приходится затягивать пояс, отказываться от планов и начинать заново почти с нуля. Карта также говорит о пустоте в более широком смысле — сил нет, отдавать нечего.\nВ делах — дыра в бюджете, убытки, долги, нечем платить по счетам.\nВ отношениях — кризис из-за безденежья и быта, холодность, ощущение, что всё хорошее между вами уже израсходовано. Как человек — расточительный или измотанный нуждой, уставший и разочарованный, не видящий выхода.\nПо здоровью — истощение, хроническая усталость, слабый иммунитет, нехватка самого необходимого организму.",
		image: "/cards/045.jpg"
	},
	{
		number: 46,
		title: "Медовый месяц",
		keywords: "Сладкое время: отдых, радость, покой после трудов",
		description: "Сладкое время: отдых, радость, покой после трудов. Можно расслабиться, съездить куда-то, побаловать себя и близких. Хорошая карта для отпуска, свадебного путешествия, романтики и любых приятных трат.\nВ отношениях — медовый период, свидания, нежность и возвращение страсти, даже если вы вместе давно; отношения приносят удовольствие, а не работу.\nВ деньгах — положение позволяет тратить на удовольствия, удачно идут дела в туризме, развлечениях, красоте.\nКак человек — романтичный, легкий, любящий комфорт и умеющий радоваться жизни, порой слишком расслабленный. По здоровью — восстановление через сон, отдых и снятие стресса.",
		image: "/cards/046.jpg"
	},
	{
		number: 47,
		title: "Купальский костер",
		keywords: "Праздник, риск, смелый шаг",
		description: "Праздник, риск, смелый шаг. Ситуация требует прыжка: помедлите — момент уйдет, а если решитесь, огонь спалит всё лишнее и сомнения вместе с ним. Хорошая карта для начинаний, шумных событий, свадеб, застолий, общих дел. В отношениях — проверка чувств на искренность: те, кто прошел через кризис не расцепляя рук, дальше идут вместе, и часто дело идет к свадьбе.\nВ деньгах — успех в рискованном замысле, приток на волне яркой идеи, траты на торжества и расширение дела. Как человек — смелый, открытый, энергичный, заряжающий других и не боящийся перемен.\nПо здоровью — прилив сил, быстрое восстановление.",
		image: "/cards/047.jpg"
	},
	{
		number: 48,
		title: "Лебединая верность",
		keywords: "Верность, чистые чувства, союз на всю жизнь",
		description: "Верность, чистые чувства, союз на всю жизнь. Никаких интриг и двойного дна: люди смотрят в одну сторону и держатся друг за друга в любых обстоятельствах. Одна из лучших карт в вопросах об отношениях — она говорит о любви, которая проверена и не предаст. В деньгах — полное доверие партнеру, общие накопления, честно разделённые обязательства, надежное сотрудничество. Как человек — однолюб: преданный, нежный, надежный, не приемлющий предательства и готовый на многое ради своего.\nПо здоровью — здоровое сердце, исцеление через заботу близкого.",
		image: "/cards/048.jpg"
	},
	{
		number: 49,
		title: "Полный кошель",
		keywords: "Деньги есть",
		description: "Деньги есть. Приходит прибыль, зарплата, оплата за сделанное — заслуженно и по расчёту. Карта требует порядка: считать, проверять, взвешивать; на эмоциях здесь решать нельзя, зато вложенное с умом окупится.\nВ делах — удачные сделки, выгодные контракты, торговля, стабильный доход.\nВ отношениях — практичный крепкий союз, где заботятся о достатке семьи и чётко делят обязанности; иногда брак по расчёту, перерос во что-то большее.\nКак человек — деловой, расчетливый, надежный, знающий цену своему труду и не витающий в облаках.\nПо здоровью — состояние стабильное, но требует ревизии и вложений: обследование, витамины, нормальное питание.",
		image: "/cards/049.jpg"
	},
	{
		number: 50,
		title: "Сделка",
		keywords: "Договор, соглашение, подписанные бумаги",
		description: "Договор, соглашение, подписанные бумаги. Дело решается через переговоры, и решается удачно: условия выполнят, слово сдержат. Хорошее время объединиться с кем-то — в одиночку сейчас не вытянуть.\nВ делах — контракты, оформление бизнеса, кредит, совместные вложения, всё в срок и по правилам.\nВ отношениях — компромисс, ясные договорённости, переход на официальный уровень: предложение, помолвка, свадьба, брачный договор. Как человек — надежный партнер, дипломат, человек слова, играющий по правилам и ценящий взаимную выгоду.\nПо здоровью — договоренность с врачом, четкий план лечения, которого стоит держаться. Рядом с тёмными картами меняет смысл: кабальное соглашение или договорная работа, за которую потом придётся расплачиваться.",
		image: "/cards/050.jpg"
	},
	{
		number: 51,
		title: "Горькие плоды",
		keywords: "Расплата за прошлые решения",
		description: "Расплата за прошлые решения. То, что казалось выгодным, обернулось петлёй: долги, обязательства, зависимость от чужой воли. Груз давит, и сбросить его быстро не выйдет — придётся тянуть. В деньгах — кредитная кабала, проценты, которые не закрыть, риск потерять имущество за долги.\nВ отношениях — ловушка: один подавляет другого деньгами, чувством вины или манипуляциями, равенства нет и выхода не видно.\nКак человек — загнанный в угол, измотанный, чувствующий себя жертвой обстоятельств.\nПо здоровью — нервные срывы, бессонница, мигрени, давление на фоне постоянного страха.",
		image: "/cards/051.jpg"
	},
	{
		number: 52,
		title: "Гордячка",
		keywords: "Гордыня и одиночество как её плата",
		description: "Гордыня и одиночество как её плата. Человек не гнётся, не просит, не признает ошибок — и остаётся один, отталкивая тех, кто протягивает руку. Пора снять корону: первый шаг придется сделать вам. В отношениях — холод, отчуждение, принципиальное нежелание мириться; союз трещит из-за амбиций, а не из-за отсутствия чувств.\nВ делах — потери из-за упрямства: не спросил совета, не взялся за «недостойную» работу, не пошёл на компромисс.\nКак человек — надменная, самолюбивая личность, болезненно реагирующая на критику; за бронёй превосходства обычно прячется уязвимость.\nПо здоровью — шея и спина, зажимы, напряжение от постоянной внутренней обороны.",
		image: "/cards/052.jpg"
	},
	{
		number: 53,
		title: "Ревность",
		keywords: "Ревность — и реальная, и надуманная",
		description: "Ревность — и реальная, и надуманная. Человек изводит себя догадками, следит, перепроверяет, ищет подтверждения худшему. Иногда повод есть, иногда его выдумали, но боль одинаковая. В отношениях — кризис доверия, слежка, упреки, скандалы на пустом месте или настоящий треугольник, где внимание партнера отдано другой.\nВ делах — зависть к более успешным, страх, что вас обойдут, подозрения к компаньонам, тревога за свои деньги.\nКак человек — мнительный, ревнивый, привязчивый, не умеющий доверять и накручивающий и себя, и других.\nПо здоровью — сердце, тахикардия, бессонница, нервное истощение.",
		image: "/cards/053.jpg"
	},
	{
		number: 54,
		title: "Пьянство",
		keywords: "Алкоголь, зависимость, потеря себя",
		description: "Алкоголь, зависимость, потеря себя. Человек уходит от жизни в бутылку или в другую привычку и тянет вниз всё: здоровье, работу, семью. Иногда карта показывает просто застолье, шумную компанию, праздник, но рядом с плохими картами речь именно о проблеме.\nВ отношениях — пьяные скандалы, созависимость, невозможность опереться на близкого, семья на грани.\nВ деньгах — деньги уходят на выпивку и азарт, долги, потеря работы.\nКак человек — слабовольный, оправдывающий себя, катящийся по наклонной; иногда это не спрашивающий, а его близкий.\nПо здоровью — тяжелая интоксикация, печень, психика, почки.",
		image: "/cards/054.jpg"
	},
	{
		number: 55,
		title: "Черный кот",
		keywords: "Знак, предупреждение, предчувствие",
		description: "Знак, предупреждение, предчувствие. Что-то важное уже приближается, но пока не проявилось полностью. Доверяйте чутью: карта показывает не столько саму опасность, сколько её приближение и необходимость присмотреться к происходящему. Истинное значение Чёрного кота раскрывают соседние карты — они покажут, к чему ведёт знак и чем закончится ситуация.\n\nВ отношениях — недоверие, скрытые мотивы, фальшь, тайная связь или необходимость прислушаться к внутреннему ощущению относительно партнёра. Иногда карта предупреждает о конфликте, который еще можно предотвратить.\n\nВ делах — осторожность с деньгами, документами и людьми. Возможны хитрость, обман, мелкие потери или препятствия, но соседние карты покажут, действительно ли грозит ущерб или предупреждение позволит его избежать.\n\nКак человек — независимый, скрытный, хитрый, интуитивный и непредсказуемый. Не любит раскрывать свои намерения, действует самостоятельно и умеет чувствовать опасность раньше других.\n\nВ здоровье — сигнал обратить внимание на то, что пока остается неочевидным: необъяснимое недомогание, тревожный сон, испуг или энергетическое воздействие. Окружающие карты уточняют характер проблемы.\n\nОсобенность карты: большое значение имеет направление движения. По народным поверьям, если черный кот перебегает дорогу справа налево, это считается более неблагоприятным знаком — к препятствиям, задержкам и невезению. Слева направо — знак мягче и может указывать на то, что неприятность обойдет стороной или будет преодолена.\n\nПоэтому Чёрный кот — одна из карт, значение которой особенно сильно зависит от соседних карт.",
		image: "/cards/055.jpg"
	},
	{
		number: 56,
		title: "Пучины нави",
		keywords: "Воронка, водоворот",
		description: "Воронка, водоворот. Затягивает всё глубже, не оставляя времени на остановку. События сыплются одно за другим, всё смешивается, привычный порядок рушится, а ситуация начинает жить по собственным законам. Чем сильнее сопротивление, тем больше сил уходит впустую. Сейчас важно не пытаться остановить поток лобовой атакой, а искать то, что поможет удержаться на поверхности и выбраться из течения.\n\nВ отношениях — бурная, нестабильная связь, в которой события повторяются по кругу. Скандалы, примирения, болезненная страсть, эмоциональная зависимость. Отношения могут затягивать всё глубже, лишая способности трезво оценивать происходящее.\n\nВ делах и деньгах — хаос, потеря контроля, внезапные обстоятельства, одно событие тянет за собой другое.\nКак человек — дезориентированный, эмоционально захваченный происходящим, не способный выбраться из собственного хаоса. В негативном проявлении — человек-«воронка», который втягивает окружающих в свои проблемы и разрушительные сценарии.\n\nВ здоровье — затяжной кризис, ухудшение состояния, череда проблем, когда одно нарушение тянет за собой другое. Организм или обстоятельства требуют времени для восстановления; карта указывает на состояние, из которого нельзя выйти одним резким движением.",
		image: "/cards/056.jpg"
	},
	{
		number: 57,
		title: "Расколотое колечко",
		keywords: "Разрыв",
		description: "Разрыв. Договор расторгнут, обещание нарушено, союз распался: развод, расставание, конец партнёрства. Склеить по-старому не выйдет — осколки не сходятся.\nВ отношениях — окончательный разрыв после долгого кризиса, доверие подорвано, назад дороги нет; иногда карта показывает саму процедуру: раздел, документы, суд.\nВ делах — расторжение контрактов, дележ имущества, судебные разбирательства, убытки после распада союза.\nКак человек — переживающий разрыв, свободный, но с болью внутри; либо, наоборот, тот, кто одним движением рвет старые связи и не оглядывается.\nПо здоровью — сердце, нервы, депрессия после расставания.",
		image: "/cards/057.jpg"
	},
	{
		number: 58,
		title: "Жадность",
		keywords: "Жадность, ненасытность, желание урвать побольше",
		description: "Жадность, ненасытность, желание урвать побольше. Человек гребёт всё под себя и не умеет делиться — ни деньгами, ни чувствами, ни вниманием. Там, где маячит лёгкая выгода, стоит ловушка: погоня за ней и разорит. В делах — сомнительные авантюры, пирамиды, слишком заманчивые предложения, вложения, которые сожрут бюджет.\nВ отношениях — расчет и корысть: партнёра рассматривают как кошелек или удобный ресурс, а не как человека.\nКак человек — алчный, скупой, зацикленный на накоплении, подозрительный, готовый на многое ради выгоды.\nПо здоровью — желудок, нервы, постоянный страх потерять нажитое. В магии — крадники, порча на разорение, привязки через вещи и деньги, программа «всё мало».",
		image: "/cards/058.jpg"
	},
	{
		number: 59,
		title: "Затмение",
		keywords: "Потеря ясности, искаженное восприятие, неспособность увидеть очевидное",
		description: "Потеря ясности, искаженное восприятие, неспособность увидеть очевидное. Глаза застилают иллюзии, чужое влияние или скрытые обстоятельства. Логика бессильна — важные решения лучше отложить.\nВ отношениях — слепая страсть, зависимость, измены, тайны, обман, подавление воли партнера.\nВ делах — опасность ошибиться из-за неполной информации, скрытых условий, интриг и махинаций. Не время для крупных сделок.\nКак человек — скрытный, непредсказуемый, находящийся под чужим влиянием или во власти собственных заблуждений.\nПо здоровью — головные боли, ухудшение самочувствия, повышенная чувствительность к лунным циклам.",
		image: "/cards/059.jpg"
	},
	{
		number: 60,
		title: "Ссора",
		keywords: "Открытый конфликт, крик, взаимные обвинения",
		description: "Открытый конфликт, крик, взаимные обвинения. Договориться уже не выходит: накопленное прорвало, и стороны бьют по самым больным местам. Слова, сказанные сейчас, сжигают мосты — потом их не вернуть. В отношениях — тяжёлый скандал, презрение, агрессия, разрушение остатков доверия; иногда разрыв прямо на этой ссоре.\nВ делах — жёсткие переговоры, перешедшие в разбирательство, споры о деньгах, разрыв договоренностей, дележ на повышенных тонах.\nКак человек — вспыльчивый, конфликтный, доказывающий свою правоту любой ценой и не умеющий слушать.\nПо здоровью — давление, мигрени, горло, нервные срывы после выброса адреналина.",
		image: "/cards/060.jpg"
	},
	{
		number: 61,
		title: "Учение",
		keywords: "Обучение, опыт, дисциплина",
		description: "Обучение, опыт, дисциплина. Ситуация, которая дана не случайно: здесь предстоит получить важный урок или освоить то, чего раньше не умели. Ошибки становятся частью обучения, а результат зависит от усердия и способности слушать наставника.\nВ отношениях — отношения-урок, где партнеры учатся друг через друга. Возможны строгие правила, испытания, повторение старых ошибок.\nВ делах — обучение, повышение квалификации, новая профессия, практика или период, когда придется доказывать свои способности. Успех через труд и накопление опыта.\nКак человек — ученик, наставник или человек с сильной дисциплиной. Может указывать на того, кто много знает и способен передавать знания другим.\nПо здоровью — необходимость учиться понимать свое тело, соблюдать режим и менять привычки.",
		image: "/cards/061.jpg"
	},
	{
		number: 62,
		title: "Заточение",
		keywords: "Несвобода, принуждение, закрытое пространство",
		description: "Несвобода, принуждение, закрытое пространство. Человек оказывается там, где его воля ограничена чужими правилами и обстоятельствами. Буквально — тюрьма, арест, суд, больница, закрытое учреждение или вынужденное пребывание в определенном месте.\n\nВ отношениях — тотальный контроль, зависимость, деспотичный партнёр, связь, из которой трудно выбраться.\nВ делах — запреты, блокировки, арест имущества или счетов, кабальные обязательства, зависимость от чужих решений.\nКак человек — подавленный, зависимый, запуганный; либо тот, кто сам привык держать других под контролем.\nПо здоровью — больница, постельный режим, ограничение подвижности или длительное вынужденное лечение.",
		image: "/cards/062.jpg"
	},
	{
		number: 63,
		title: "Сплетни",
		keywords: "Слухи, пересуды, разговоры за спиной",
		description: "Слухи, пересуды, разговоры за спиной. Ваши дела обсуждают, факты перевирают, и кто-то делает это намеренно. Оправдываться сейчас бесполезно — станет только хуже; шум утихнет сам, но окружение стоит пересмотреть.\nВ отношениях — вмешательство третьих лиц, нашептывания, завистники, которые хотят рассорить пару.\nВ делах — удар по репутации, козни конкурентов, ложные обвинения, из-за которых теряются заказы и доверие.\nКак человек — сплетник, завистливый, двуличный, живущий чужими скандалами.\nПо здоровью — истощение, головные боли, бессонница, нервные срывы, слабость, ухудшение общего состояния. Чужие разговоры и постоянное негативное внимание буквально забирают силы.",
		image: "/cards/063.jpg"
	},
	{
		number: 64,
		title: "Разлука",
		keywords: "Осознанное расставание",
		description: "Осознанное расставание. Люди сами выбирают идти разными ми, потому что между ними исчезли чувства, понимание и желание быть рядом. Здесь не обстоятельства разрывают связь — её разрывают сами люди.\nВ отношениях — охлаждение, неприязнь, потеря чувств, эмоциональная дистанция, расставание по собственному решению. Иногда — окончательный разрыв после долгого отчуждения.\nВ делах — сознательный отказ от сотрудничества, расхождение интересов, прекращение деловых отношений по инициативе одной или обеих сторон.\nКак человек — холодный, отстраненный, разочаровавшийся, не желающий продолжать прежнюю связь.\nПо здоровью — апатия, эмоциональное истощение, упадок сил, состояние внутренней пустоты.",
		image: "/cards/064.jpg"
	},
	{
		number: 65,
		title: "Затаенная обида",
		keywords: "Камень за пазухой",
		description: "Камень за пазухой. Человек носит в себе непрощенное: молчит, улыбается, а внутри давит и не отпускает. Эта тяжесть тянет силы и отравляет всё вокруг, пока её не вытащить наружу — разговором или прощением.\nВ отношениях — годами накопленные обиды, которые не проговариваются, но стоят между людьми стеной; внешне мир, внутри лёд.\nВ делах — застой из-за старых неудач: страх повторного обмана мешает браться за новое.\nКак человек — обидчивый, скрытный, злопамятный, помнящий всё и годами ждущий случая.\nПо здоровью — тяжесть в груди, зажимы, камни в почках и желчном, хронический стресс.",
		image: "/cards/065.jpg"
	},
	{
		number: 66,
		title: "Пряха судьбы",
		keywords: "Судьба, нити, причина и следствие",
		description: "Судьба, нити, причина и следствие. Полотно ткется прямо сейчас: то, что вы делаете и говорите сегодня, ложится в узор завтрашнего дня. Карта говорит о предопределенности, о родовых сценариях, которые тянутся из прошлого, и о том, что распутать узел можно, но не одним движением.\nВ отношениях — судьбоносная встреча, связь, завязанная крепко, люди, повязанные общим узором.\nВ делах — то, что вы закладывали раньше, сейчас разворачивается; решения принимайте вдолгую.\nКак человек — мудрый, видящий связи и последствия, либо фаталист, уверенный, что всё решено свыше.",
		image: "/cards/066.jpg"
	},
	{
		number: 67,
		title: "Внутренний палач",
		keywords: "Самоедство",
		description: "Самоедство. Человек грызет себя изнутри: прокручивает ошибки, винит во всём себя, наказывает за прошлое. Внешнего врага может и не быть — весь вред он наносит себе сам, и это отнимает последние силы. В отношениях — готовность терпеть унижение, брать всю вину на себя, бесконечно извиняться и оправдывать чужое поведение.\nВ делах — обесценивание своего труда, страх просить нормальные деньги, упущенные возможности из-за уверенности «я не потяну».\nКак человек — виноватый перед всеми, жёсткий к себе, мнительный, живущий с ощущением, что недостаточно хорош.\nПо здоровью — бессонница, сердечные боли, аутоиммунные болезни, когда организм бьет сам по себе.",
		image: "/cards/067.jpg"
	},
	{
		number: 68,
		title: "Оберег",
		keywords: "Защита",
		description: "Защита. Человек прикрыт: стоят обереги, работает родовая охрана, чужое зло до него не доходит и возвращается к тому, кто послал. Хорошая карта в вопросах о порче, сглазе и любом внешнем вредительстве — ответ будет отрицательным.\nВ отношениях — мир в доме, крепкая пара, защищённая от зависти и чужого вмешательства.\nВ делах — сохранность денег и имущества, устойчивое положение, надёжные партнёры, ничего не украдут и не уведут.\nКак человек — надежный, умеющий держать границы, хранить своё и отражать нападки.\nПо здоровью — крепкий иммунитет, хорошее восстановление, устойчивая психика.",
		image: "/cards/068.jpg"
	},
	{
		number: 69,
		title: "Надежда",
		keywords: "Вера в лучшее, ожидание чуда и уверенность, что всё ещё может измениться к лучшему",
		description: "Вера в лучшее, ожидание чуда и уверенность, что всё ещё может измениться к лучшему. Желаемое пока не произошло, но человек не теряет веры и продолжает ждать, надеяться и двигаться вперёд. Карта поддерживает позитивный настрой и показывает возможность благоприятного исхода.\nВ отношениях — вера в любовь, ожидание встречи, примирения или возвращения человека. Надежда на то, что чувства ещё можно сохранить.\nВ делах и деньгах — ожидание предложения, результата, помощи или возможности улучшить положение. Пока это перспектива, а не свершившийся факт.\nКак человек — оптимистичный, верящий в чудеса, умеющий видеть возможности даже в сложной ситуации.\nПо здоровью — надежда на выздоровление, вера в исцеление, ожидание улучшения и возвращения сил.",
		image: "/cards/069.jpg"
	},
	{
		number: 70,
		title: "Страсть",
		keywords: "Дикое влечение, плотская тяга, сексуальный интерес",
		description: "Дикое влечение, плотская тяга, сексуальный интерес. Желание, которое трудно контролировать разумом: тело тянется к человеку раньше, чем успевает вмешаться рассудок. Страсть может быть сладкой, мучительной и затягивающей — от сильного физического притяжения до зависимости от близости.\nВ отношениях — сильная сексуальная химия, физическое влечение, желание обладать партнером, ревность и бурные эмоции. Связь может держаться преимущественно на телесной тяге, даже если настоящей близости между людьми уже мало.\nВ делах — желание получить результат любой ценой, импульсивность, действия под влиянием сильного интереса.\nКак человек — чувственный, темпераментный, притягательный, инстинктивный, склонный следовать желаниям тела и легко становиться зависимым от объекта своего влечения.\nПо здоровью — избыток энергии, возбуждение, жар, воспалительные процессы, последствия перенапряжения.",
		image: "/cards/070.jpg"
	},
	{
		number: 71,
		title: "Волюшка",
		keywords: "Освобождение",
		description: "Освобождение. Клетка открыта: закончилась черная полоса, кабала, зависимость, долгая изоляция. Появляется воздух и право выбирать самому. Часто карта отвечает — да, отпустят, отпустит, выберетесь.\nВ отношениях — разрыв удушающей связи, выход из роли терпящего, возвращение независимости и облегчение после тяжёлого.\nВ делах — закрытие кредитов, снятие обязательств, удачное разрешение спора об имуществе, выход на самостоятельность.\nКак человек — свободный, легкий, скинувший чужие ожидания, готовый начинать заново.\nПо здоровью — снятие зажимов, отступление хронического, выздоровление, возвращение сил.",
		image: "/cards/071.jpg"
	},
	{
		number: 72,
		title: "Богатырская сила",
		keywords: "Борьба, в которой можно победить",
		description: "Борьба, в которой можно победить. Придётся выйти лицом к лицу с тем, от чего вы прятались, — и сил на это хватит. Побеждает не хитрость, а характер: кто не дрогнет, тот и возьмёт своё.\nВ отношениях — отстаивание пары от чужого вмешательства, борьба за человека, тяжелый, но честный разговор, после которого становится ясно, кто чего стоит.\nВ делах — защита имущества в кризис, жёсткие переговоры, отражение чужих посягательств, суды.\nКак человек — сильный духом боец, смелый, берущий ответственность и защищающий слабых.\nПо здоровью — крепкий иммунитет, организм справляется, восстановление после травм.",
		image: "/cards/072.jpg"
	},
	{
		number: 73,
		title: "Урожай",
		keywords: "Собрали то, что посеяли, и собрали хорошо",
		description: "Собрали то, что посеяли, и собрали хорошо. Труд окупился: полный дом, достаток, уверенность в завтрашнем дне. Хорошая карта в денежных вопросах и в любом деле, доведенным до конца.\nВ отношениях — тёплый союз, где обоим сытно и спокойно, взаимная поддержка, дом полная чаша.\nВ деньгах — пик благополучия, прибыльные проекты, вложения, которые дали отдачу, стабильность на долгий срок. Как человек — трудолюбивый, щедрый, состоявшийся, умеющий распорядиться нажитым и не жадный.\nПо здоровью — крепкое тело, хороший ресурс, плодородие и восстановление сил. Часто указывает на осень, конец сезона, срок, когда дело даст результат.",
		image: "/cards/073.jpg"
	},
	{
		number: 74,
		title: "Живая вода",
		keywords: "Исцеление и возвращение к жизни",
		description: "Исцеление и возвращение к жизни. То, что казалось загубленным, оживает: возвращаются силы, дела трогаются с места, человек приходит в себя после тяжелых событий. Хорошая карта в вопросах здоровья и в любой ситуации, где нужно чинить, а не строить с нуля.\nВ отношениях — прощение, обновление чувств, тепло вместо льда, второе дыхание у пары.\nВ деньгах — приток свежих средств, спасение проекта, латание дыр в бюджете, помощь вовремя.\nКак человек — целитель, заботливый, восстанавливающий других и себя; часто тот, кто работает с людьми и здоровьем. По здоровью — быстрое выздоровление, восстановление после болезни и операции.",
		image: "/cards/074.jpg"
	},
	{
		number: 75,
		title: "Окаянные топи",
		keywords: "Болото, в которое человек угодил сам",
		description: "Болото, в которое человек угодил сам. Не проверил путь, не заметил опасности, не попытался обойти — и теперь каждый шаг затягивает всё глубже. Чем сильнее он мечется и пытается выбраться напролом, тем быстрее тонет. Ситуация, люди или обстоятельства становятся ловушкой, из которой трудно выбраться привычными способами.\nВ отношениях — токсичная связь, из которой человек сам не может выбраться. Абьюз, созависимость. Чем больше попыток что-то исправить, тем сильнее всё запутывается.\nВ делах и деньгах — неверный выбор, неудачное решение, долговая яма, провальный проект. Попытки спасти положение могут привести к еще большим потерям.\nКак человек — абьюзер, который втягивает других в свое болото и в собственные проблемы. Также может указывать на того, кто идет напролом, не задумываясь о последствиях, и своими необдуманными действиями только сильнее усугубляет ситуацию.\nПо здоровью — состояние, которое ухудшается при игнорировании проблемы или неправильных попытках её решить. Затяжные нарушения, истощение, ощущение, что выбраться становится всё труднее.",
		image: "/cards/075.jpg"
	},
	{
		number: 76,
		title: "Ведьмина ворожба",
		keywords: "Внешнее вмешательство",
		description: "Внешнее вмешательство. В ситуацию намеренно вмешалась чужая воля: кто-то пытается изменить ход событий, повлиять на человека или подчинить обстоятельства своему желанию. В магических вопросах карта прямо указывает на использование магии, а соседние карты покажут, какое именно воздействие произведено и на что оно направлено.\nВ отношениях — вмешательство в чувства и отношения, попытка привязать, отдалить, подчинить или изменить волю человека. Возможны чужое влияние и манипуляции.\nВ делах — скрытое вмешательство, давление, манипуляции, действия за спиной, попытка незаметно изменить ситуацию в свою пользу.\nКак человек — сильный манипулятор, умеющий влиять на других, подавлять волю и добиваться своего. Может обладать магическими способностями или сознательно использовать магию для воздействия.\nПо здоровью — состояние, причина которого может быть связана с внешним влиянием; внезапное ухудшение самочувствия, нарушения сна, истощение.",
		image: "/cards/076.jpg"
	},
	{
		number: 77,
		title: "Жар-птица",
		keywords: "Возрождение после периода упадка",
		description: "Возрождение после периода упадка. Жар-птица проходит свой цикл: осенью угасает, чтобы весной вновь ожить вместе с пробуждением природы. Так и человек выходит из своей «осени» — периода застоя, потерь, усталости или неудач — и вступает в собственную весну. Возвращаются силы, возможности и желание жить. То, что казалось угасшим, снова начинает гореть.\nВ отношениях — возвращение чувств, новое дыхание, примирение, второй шанс.\nВ делах и деньгах — выход из застоя, новые возможности, удачный шанс, восстановление после потерь.\nКак человек — яркий, жизнелюбивый, способный восстанавливаться после тяжёлых периодов и начинать заново.\nПо здоровью — восстановление, возвращение энергии, постепенное улучшение после периода упадка.",
		image: "/cards/077.jpg"
	},
	{
		number: 78,
		title: "Щука",
		keywords: "Большой улов, крупная добыча, встреча с силой, которую невозможно недооценивать",
		description: "Большой улов, крупная добыча, встреча с силой, которую невозможно недооценивать. То, что долго не давалось, наконец оказывается в руках — но вместе с приобретением приходит испытание. Щука напоминает: не всякая добыча даётся человеку без последствий. Жадность, гордыня и попытка присвоить больше дозволенного могут обернуться против самого добытчика.\nВ отношениях — встреча с сильным человеком, зрелый союз, где есть уважение и равенство. Иногда — ситуация, в которой желание обладать партнером становится причиной конфликта.\n\nВ делах и деньгах — крупный шанс, большая прибыль, ценный ресурс, масштабный проект. Но карта предупреждает: не пытайтесь взять больше, чем способны удержать.\n\nКак человек — сильный, влиятельный, авторитетный, привыкший добиваться своего. Может быть щедрым и благородным, но в тени — властным, жадным и самоуверенным.\nПо здоровью — большой запас сил, выносливость, крепость, восстановление.",
		image: "/cards/078.jpg"
	},
	{
		number: 79,
		title: "Подсолнух",
		keywords: "Ясность, радость, тепло и движение к свету",
		description: "Ясность, радость, тепло и движение к свету. Проблемы разрешимы, а выбранное направление верно. Карта возвращает уверенность, оптимизм и способность видеть выход там, где раньше казался тупик. Свет раскрывает скрытое, приносит знания, понимание и новые возможности.\nВ отношениях — искренность, тепло, открытые чувства, счастливая любовь. Для новых отношений — прекрасная перспектива, для семьи — гармония и плодородие.\nВ делах и деньгах — успех, развитие, признание, хорошие возможности, идеи, которые приносят результат.\nКак человек — открытый, общительный, оптимистичный, знающий себе цену и умеющий вдохновлять других.\nПо здоровью — хорошее самочувствие, прилив сил, восстановление, жизненная энергия.",
		image: "/cards/079.jpg"
	},
	{
		number: 80,
		title: "Тайный союз",
		keywords: "Скрытая связь",
		description: "Скрытая связь. Двое держат отношения в стороне от чужих глаз — по своему желанию или потому, что иначе нельзя. Это может быть роман, о котором не знают, договоренность между близкими или просто нежелание выносить своё на люди.\nВ отношениях — тайная любовь, запретная связь, отношения, скрываемые от родни и знакомых, свой закрытый мирок на двоих.\nВ делах — конфиденциальные сделки, теневое партнёрство, дела без огласки, защита общего от чужого любопытства. Как человек — скрытный в личном, умеющий хранить секреты, оберегающий свой круг.\nПо здоровью — скрытые недомогания, нарушения сна, нервное истощение, упадок сил. Состояние может ухудшаться из-за подавленных переживаний и невозможности открыто проявлять себя.",
		image: "/cards/080.jpg"
	},
	{
		number: 81,
		title: "Река перемен",
		keywords: "Изменение, перелом, переход в новую фазу",
		description: "Изменение, перелом, переход в новую фазу. То, что долго оставалось прежним, начинает двигаться в другом направлении. Меняются обстоятельства, взгляды или внутреннее отношение к ситуации. Старый этап постепенно заканчивается, открывая совершенно иной.\nВ отношениях — изменение характера связи, переоценка чувств и ценностей, переход отношений на новый уровень или окончательное изменение прежнего формата.\nВ делах и деньгах — смена курса, новые условия, изменение планов, переход проекта в другую стадию.\nКак человек — тот, кто меняет взгляды, выходит из прежнего состояния и готов двигаться дальше.\nПо здоровью — изменение состояния, переход от одного периода к другому, смена самочувствия или подхода к восстановлению.",
		image: "/cards/081.jpg"
	},
	{
		number: 82,
		title: "Суд",
		keywords: "Закон, разбирательство, официальное решение",
		description: "Закон, разбирательство, официальное решение. Дело переходит в плоскость документов и инстанций: суд, договор, развод, раздел, проверка. Решение будет вынесено по факту, а не по чувствам, и оспорить его будет трудно. Карта также говорит о воздаянии — по счетам приходится платить, и не только в бытовом смысле.\nВ отношениях — прояснение всего спорного, официальное оформление союза или его законное расторжение.\nВ делах — юридически чистые сделки, решения в вашу пользу при вашей правоте, строгий учёт.\nКак человек — справедливый, принципиальный, суровый, опирающийся на факты.\nПо здоровью — точный диагноз и лечение по правилам.",
		image: "/cards/082.jpg"
	},
	{
		number: 83,
		title: "Ремесло",
		keywords: "Труд, работа руками, мастерство, дело, которое кормит",
		description: "Труд, работа руками, мастерство, дело, которое кормит. Само ничего не придет — нужно сесть и делать, и тогда результат будет прочным. Карта хорошо ложится на профессию, обучение ремеслу, заказы, практику и всё, что делается своими силами.\nВ деньгах — доход от навыка и труда, стабильность без рывков, вложения в инструмент и развитие своего дела.\nВ отношениях — союз, который строится буднями и заботой, надёжность и практичность вместо красивых слов.\nКак человек — работящий мастер, профессионал, упорный и надежный, ценящий сделанное, а не сказанное.\nПо здоровью — крепкое тело, но иногда усталость и износ от физической работы: спина, руки, суставы.",
		image: "/cards/083.jpg"
	},
	{
		number: 84,
		title: "Баня",
		keywords: "Очищение, восстановление, избавление от накопленного",
		description: "Очищение, восстановление, избавление от накопленного. Баня смывает лишнее, возвращает силы и помогает привести в порядок тело, мысли и дела. Но карта напоминает о мере: то, что полезно в правильном количестве, при чрезмерности может навредить.\nВ отношениях — очищение связи от старых обид, разговор начистоту, примирение, обновление отношений.\nВ делах и деньгах — избавление от лишнего, закрытие старых вопросов, расчистка завалов, восстановление порядка.\nКак человек — крепкий, выносливый, следящий за собой, умеющий вовремя отдыхать и восстанавливаться.\n\nПо здоровью — восстановление, очищение, снятие напряжения, прилив сил. Но чрезмерная нагрузка может привести к жару, повышению давления, слабости и обмороку.",
		image: "/cards/084.jpg"
	},
	{
		number: 85,
		title: "Колечко",
		keywords: "Договор, обещание, союз",
		description: "Договор, обещание, союз. В личном вопросе — предложение, помолвка, свадьба, серьезные намерения; в позиции прошлого брак уже состоялся, в позиции будущего — предстоит.\nС хорошими картами рядом союз удачный, с плохими — проблемный, хождение по кругу или распад.\nВ делах — долгосрочный контракт, крупная покупка, вложение, которое дает стабильный доход; слово скреплено и его будут держать. Может означать и ценный подарок, дорогую вещь, семейную реликвию.\nКак человек — верный, надёжный, держащий слово и умеющий хранить чужие тайны.\nПо здоровью — ровное состояние, восстановление рядом с близким.",
		image: "/cards/085.jpg"
	},
	{
		number: 86,
		title: "Крест",
		keywords: "Тяжёлое испытание, которое приходится нести",
		description: "Тяжёлое испытание, которое приходится нести. Путь сложный, но он ещё не закончен: обстоятельства давят, требуют сил, терпения и преодоления. Карта может указывать на роковые обстоятельства, долг, обязательства или последствия прошлого, от которых невозможно просто отвернуться.\nВ отношениях — мучительная связь, которую держат долг, обязательства, ответственность или сильная зависимость. Людям тяжело вместе, но разойтись тоже непросто.\nВ делах и деньгах — тяжелые обязательства, долги, большая ответственность, период, когда результат выдается через огромные усилия.\n\nКак человек — терпеливый, суровый, много вынесший, привыкший нести свой груз до конца.\nПо здоровью — длительное испытание, хронические состояния, истощение, необходимость долго восстанавливаться.",
		image: "/cards/086.jpg"
	},
	{
		number: 87,
		title: "Отъезд",
		keywords: "Отъезд, переезд, дальняя",
		description: "Отъезд, переезд, дальняя. Прежний этап закончился: пора собирать вещи и уходить с обжитого места — в другой город, другую страну, другую жизнь. Иногда карта означает командировку или долгую поездку, иногда — расставание, где один просто уезжает. В отношениях — разлука, расстояние, проверка чувств отъездом; либо совместный переезд на новое место.\nВ деньгах — траты на дорогу, билеты, обустройство; материальное положение меняется вместе со сменой места.\nКак человек — легкий на подъем, не привязанный к месту, странник, готовый всегда начать заново.\nПо здоровью — смена состояния, выход из затяжного недомогания, восстановление после перемены условий. Иногда карта указывает на необходимость сменить место, климат или привычный образ жизни для улучшения самочувствия.",
		image: "/cards/087.jpg"
	},
	{
		number: 88,
		title: "Благословение",
		keywords: "Одобрение и поддержка",
		description: "Одобрение и поддержка. Начинание получает зеленый свет: за вами стоят род, семья, наставник или тот, чьё слово здесь значимо. Дело пойдёт легче, чем вы думали, и помощь придёт вовремя.\nВ отношениях — родня принимает вашего человека, благословение на брак, тепло и согласие в семье.\nВ делах — удачный старт, поддержка старших, спонсор или начальник на вашей стороне, вложения оправдываются.\nКак человек — мудрый, уважаемый, тот, к кому идут за советом и чьё напутствие много значит.\nПо здоровью — выздоровление под защитой рода, спокойствие, прилив сил.",
		image: "/cards/088.jpg"
	},
	{
		number: 89,
		title: "Испытание",
		keywords: "Проверка на прочность",
		description: "Проверка на прочность.  не закрыта, но пройти её просто так не дадут: придётся выдержать давление, доказать серьёзность намерений и не свернуть. Результат зависит только от того, хватит ли выдержки. В отношениях — кризисный этап, проверка доверия и верности; крепкий союз после этого станет прочнее, формальный не выдержит. В делах — испытательный срок, конкуренция, временные трудности, задержка результата до определённого этапа; выдержите — выйдете на новый уровень.\nКак человек — стойкий, волевой, привыкший преодолевать; в минусе — тот, кто везде видит борьбу и не умеет жить спокойно.\nПо здоровью — тяжёлое состояние, обострение, длительное восстановление. Организм проходит испытание на прочность.",
		image: "/cards/089.jpg"
	},
	{
		number: 90,
		title: "Крепкая опора",
		keywords: "Надежность и фундамент",
		description: "Надежность и фундамент. Под ногами твёрдо: есть на кого положиться, есть что не рухнет в кризис. Ситуация устойчива, и никакие бури её не снесут.\nВ отношениях — партнёр, на которого можно опереться по-настоящему, крепкая семья, доверие и уверенность в общем будущем.\nВ делах — устойчивое положение, защищенные активы, вложения в недвижимость и в долгое; ничего не пропадёт.\nКак человек — основательный, солидный, верный своим правилам; такому доверяют деньги и детей.\nПо здоровью — крепкий костяк, выносливость, хороший иммунитет, устойчивая психика.\nИногда карта прямо советует укрепить то, что есть, а не гнаться за новым.",
		image: "/cards/090.jpg"
	},
	{
		number: 91,
		title: "Теплый прием",
		keywords: "Гости, встреча, радушие",
		description: "Гости, встреча, радушие. Вас ждут и вам рады: либо вы принимаете у себя, либо возвращаетесь туда, где вас любят. Атмосфера доверия и открытых дверей, преград нет.\nВ отношениях — примирение после разлуки, возвращение близкого человека домой, тепло и полное принятие; хороший знак для знакомства с роднёй.\nВ делах — довольные клиенты, удачный приём партнёров, дело растёт за счёт хорошей репутации и человеческого отношения.\nКак человек — гостеприимный, щедрый, лёгкий в общении, вокруг которого всегда люди.\nПо здоровью — спокойствие, хорошее самочувствие, отступает тоска и одиночество. В раскладе смягчает соседние карты и часто отвечает: примут, помогут, пустят на порог.",
		image: "/cards/091.jpg"
	},
	{
		number: 92,
		title: "Купеческий размах",
		keywords: "Торговля, оборот, прибыль",
		description: "Торговля, оборот, прибыль. Время покупать и продавать, договариваться и расширяться: чутье на выгоду сейчас работает как надо. Хорошая карта для бизнеса, сделок, посредничества и любой работы с деньгами. В делах — успешные сделки, выгодные закупки, рост дохода, оживление после застоя. В отношениях — практичный подход: партнёрство, где ценят взаимную выгоду, надёжность и уважение к интересам друг друга.\nКак человек — предприимчивый, деловой, отличный переговорщик, умеющий извлечь пользу из чего угодно. По здоровью — крепкое состояние и хороший тонус, подкрепленные достатком.",
		image: "/cards/092.jpg"
	},
	{
		number: 93,
		title: "Добрая встреча",
		keywords: "Встреча, возвращение, восстановленная связь",
		description: "Встреча, возвращение, восстановленная связь. Появляется человек, которого ждали, или находится тот, с кем окажется по пути. Разлука заканчивается, напряжение спадает, разговор наконец состоится. В отношениях — долгожданное свидание, примирение после затяжного конфликта, откровенный разговор, который сближает; для одинокого — знакомство, которое перерастет в большее. В делах — продуктивные переговоры, подписание договора, объединение с надёжным партнёром.\nКак человек — открытый, дружелюбный, верный товарищ, ценящий дружбу и держащий слово.\nПо здоровью - улучшение, восстановление сил, возвращение энергии; помощь приходит через другого человека или нужную встречу.",
		image: "/cards/093.jpg"
	},
	{
		number: 94,
		title: "Ожидание",
		keywords: "Пауза",
		description: "Пауза. Активный этап прошёл, а результата ещё нет: приходится ждать, и ускорить это невозможно. Ситуация зависла между «уже не так» и «ещё не так».\nВ отношениях — тоска в разлуке, ожидание весточки, неясный статус пары, когда человек не говорит ни да ни нет.\nВ делах — задержка денег, замороженные проекты, ответ, который зависит не от вас; финансовый штиль.\nКак человек — терпеливый, склонный к грусти, погружённый в свои переживания, ждущий чьего-то возвращения.\nПо здоровью — упадок сил на нервах, бессонница, изматывающая тревога. Как срок — «пока рано».",
		image: "/cards/094.jpg"
	},
	{
		number: 95,
		title: "Игры ладные",
		keywords: "Праздник и общее дело",
		description: "Праздник и общее дело. Люди сошлись, работают в лад, и от этого всем хорошо: складывается команда, компания, семья за общим столом. Хорошее время для коллективных начинаний и для того, чтобы перестать тянуть всё в одиночку. В отношениях — согласие в кругу близких, общие радости, поддержка родных и друзей, открытость в общении.\nВ делах — успех совместных предприятий, слаженная команда, доход в сезон праздников и торжеств.\nКак человек — общительный, душевный, умеющий объединять людей и находить общий язык с любым.\nПо здоровью — хороший тонус, силы возвращаются через общение и радость, уходит одиночество.",
		image: "/cards/095.jpg"
	},
	{
		number: 96,
		title: "Алатырь-камень",
		keywords: "Точка силы, опора, источник знания и ясности",
		description: "Точка силы, опора, источник знания и ясности. Как Алатырь-камень в центре мира, карта указывает на то, вокруг чего всё выстраивается. Человек находит основу, понимает главное и перестает метаться. Это верный ориентир, внутренняя опора и возможность получить ответ там, где раньше царила неопределенность.\nВ отношениях — прочный фундамент, надежный союз, восстановление доверия, понимание истинной сути связи.\nВ делах и деньгах — правильное решение, устойчивое положение, надёжная опора, человек или ресурс, на который можно положиться.\nКак человек — мудрый, устойчивый, сильный духом, знающий своё место и способный быть опорой для других.\nПо здоровью — восстановление, укрепление организма, возвращение внутреннего равновесия и сил.",
		image: "/cards/096.jpg"
	},
	{
		number: 97,
		title: "Сновидения",
		keywords: "Сны, догадки, иллюзии",
		description: "Сны, догадки, иллюзии. Человек видит не то, что есть, а то, что рисует воображение: желаемое выдается за действительное. При этом сны сейчас вещие, а чутье острое — важно только отличать подсказку от собственных выдумок.\nВ отношениях — идеализация партнера, розовые очки, жизнь фантазиями о человеке, которого толком не знают; страхи, которые мешают увидеть правду. В делах — воздушные замки, проекты, красивые только на словах, риски, которых вы не разглядели.\nКак человек — мечтательный, витающий в облаках, склонный к мистике и самообману.\nПо здоровью — бессонница, кошмары, тревожные сны, уход от реальности.",
		image: "/cards/097.jpg"
	},
	{
		number: 98,
		title: "Лихой знак",
		keywords: "Дурное предзнаменование, тревожный сигнал",
		description: "Дурное предзнаменование, тревожный сигнал. Что-то в ситуации уже указывает на неприятность, хотя само событие еще не произошло. Карта советует остановиться, присмотреться к деталям и не идти дальше по привычному пути. Предупреждение дано вовремя — его ещё можно услышать и избежать последствий.\nВ отношениях — тревожный сигнал, который нельзя игнорировать: ложь, скрытые мотивы, измена, назревающий конфликт или человек, рядом с которым стоит быть осторожнее.\nВ делах и деньгах — знак возможной ошибки, обмана, неудачной сделки или небезопасного решения. Лучше перепроверить всё до того, как сделать следующий шаг.\nКак человек — осторожный, наблюдательный, умеющий замечать опасность раньше других. В негативе — тот, кто постоянно ждет беды и видит плохие знаки во всём.\nПо здоровью — сигнал обратить внимание на тревожные симптомы, не откладывать обследование и не игнорировать ухудшение самочувствия.",
		image: "/cards/098.jpg"
	},
	{
		number: 99,
		title: "Морок",
		keywords: "Напущенная видимость, ложный образ, искажение истины",
		description: "Напущенная видимость, ложный образ, искажение истины. Человеку показывают не то, что есть на самом деле: его могут сознательно обманывать, вводить в заблуждение или затуманивать его восприятие. Здесь тьма не наступила сама — её кто-то создал.\nВ отношениях — обман, ложные чувства, манипуляции, двойная игра, ситуация, в которой человек видит партнера совсем не таким, каков он есть.\nВ делах и деньгах — мошенничество, подставы, непрозрачные схемы, ложные обещания и решения, основанные на искаженной информации.\n Как человек — хитрый, манипулятивный, умеющий водить других за нос; либо внушаемый и легко попадающий под чужое влияние. По здоровью — состояние, при котором трудно объективно оценить происходящее, нарушения сна, тревожность, спутанность восприятия.",
		image: "/cards/099.jpg"
	},
	{
		number: 100,
		title: "Лесной отшельник",
		keywords: "Уединение и осмысление",
		description: "Уединение и осмысление. Человеку нужно отойти в сторону от шума и чужих мнений, побыть одному и разобраться в себе. Это не наказание, а необходимая пауза, в которой приходит понимание. В отношениях — добровольное отстранение, чтобы разобраться в чувствах, охлаждение, одиночество вдвоём или сознательный отказ от случайных связей.\nВ делах — жизнь по средствам, тихое накопление, отказ от рискованных вложений и лишних контактов.\nКак человек — самодостаточный интроверт, мудрый, ищущий тайное знание, живущий по своим законам; иногда социофоб.\nПо здоровью — выгорание от работы, людей и суеты, потребность в тишине и отдыхе.",
		image: "/cards/100.jpg"
	},
	{
		number: 101,
		title: "Тяжелая булава",
		keywords: "Груз",
		description: "Груз. Человек тянет на себе больше, чем может: чужую ответственность, долги, обязательства, старые обиды. Сил еще хватает, но каждый шаг дается тяжело, и радости в этом нет.\nВ отношениях — связь, которую тяжело нести и жалко бросить: обязанности, контроль, невысказанное, всё вместе.\nВ делах — долги и кредиты, из-за которых приходится жестко экономить и работать без передышки. Как человек — уставший, угрюмый, взваливает на себя семью или дела и не умеющий просить помощи; при этом крепкий и выносливый.\nПо здоровью — шея и плечи, тяжесть в теле, хроническая усталость, сосуды, подавленное состояние.",
		image: "/cards/101.jpg"
	},
	{
		number: 102,
		title: "Чужая воля",
		keywords: "Вами управляют",
		description: "Вами управляют. Решения принимаете не вы: кто-то дёргает за ниточки, а вы идёте по чужому сценарию и даже не всегда это замечаете. Свободы выбора сейчас нет, и вернуть ее придется с боем.\nВ отношениях — подавление личности, полный контроль одного над другим, чувство вины как инструмент, зависимость вместо любви. В делах — кабальные условия, чужой контроль над вашими деньгами, невозможность распоряжаться своим.\nКак человек — ведомый, несамостоятельный, живущий под родителями или партнером; либо сам кукловод, который дергает других.\nПо здоровью — подавленность, зависимости, ощущение паралича.",
		image: "/cards/102.jpg"
	},
	{
		number: 103,
		title: "Злоба",
		keywords: "Ярость и желание сделать больно",
		description: "Ярость и желание сделать больно. Злость накопилась и рвётся наружу — конфликт вспыхивает на ровном месте, а разум отключается. Такие поступки потом дорого обходятся тому, кто их совершил. В отношениях — ненависть вместо любви, яростные скандалы, желание уязвить побольнее, разрушение связи до основания.\nВ делах — убытки от решений, принятых на эмоциях, война вместо конкуренции, разрыв партнёрства на взаимных обвинениях.\nКак человек — озлобленный, мстительный, живущий обидой, взрывной, разрушающий всё вокруг себя. По здоровью — сердце, давление, злокачественные опухоли, воспаления, травмы в драке или в гневе.",
		image: "/cards/103.jpg"
	},
	{
		number: 104,
		title: "Интуиция",
		keywords: "Чутьё",
		description: "Чутьё. Разумом ситуацию не разобрать, но внутри вы уже знаете ответ — и он верный. Карта советует слушать себя, обращать внимание на предчувствия, сны и знаки; логика сейчас подводит, а чутьё нет. В отношениях — понимание партнера без слов, способность чувствовать фальшь и искренность, ощущение неладного раньше, чем появятся доказательства.\nВ делах — вовремя почуять подвох или разглядеть выгоду там, где другие сомневаются. Как человек — тонко чувствующий, эмпат, с врожденным видением; часто такой человек предчувствует события и склонен к магической практике.\nПо здоровью — тело подает сигналы, которые нельзя игнорировать.",
		image: "/cards/104.jpg"
	},
	{
		number: 105,
		title: "Оборотень",
		keywords: "Волк в овечей шкуре",
		description: "Волк в овечей шкуре. Не тот, за кого себя выдаёт. Человек носит чужую личину: может казаться добрым, надежным и близким, но за этой оболочкой скрывается совершенно другая сущность. Оборотень — это двойная жизнь, скрытая сторона человека и внезапное раскрытие его истинного лица.\nВ отношениях — партнёр притворяется любящим и верным, скрывая измену, другую семью, жестокость или совершенно иные намерения.\nВ делах — человек с поддельной репутацией, ложным образом и скрытыми мотивами; выгодное предложение может исходить совсем не от того, кем кажется его автор. Как человек — двуличный, скрытный, способный долго играть чужую роль, пока не покажет настоящее лицо.\nПо здоровью — скрытые проблемы, состояние, которое долго не проявляется внешне.",
		image: "/cards/105.jpg"
	},
	{
		number: 106,
		title: "Страх",
		keywords: "Страх, тревога, паника",
		description: "Страх, тревога, паника. Человека держит не сама угроза, а ужас перед ней: он замирает, не может действовать и ждет худшего. Часто страх иррациональный, но от этого не легче.\nВ отношениях — панический страх потерять человека или, наоборот, раствориться в нём; жизнь с оглядкой, а иногда и с реальными основаниями бояться.\nВ деньгах — паника, страх остаться без средств, решения на нервах, потеря контроля над бюджетом.\nКак человек — запуганный, тревожный, с фобиями, ожидающий беды.\nПо здоровью — панические атаки, сонный паралич, бессонница, сердце и давление на фоне стресса.",
		image: "/cards/106.jpg"
	},
	{
		number: 107,
		title: "Зависть",
		keywords: "Чужой недобрый глаз",
		description: "Чужой недобрый глаз. На то, что у вас есть, смотрят с завистью и хотят если не отнять, то испортить. Карта прямо говорит о сглазе, злых языках и о том, что пора закрываться и не хвалиться своим.\nВ отношениях — зависть подруг и знакомых к вашей паре, попытки рассорить, сглаз на отношения.\nВ делах — завистливые коллеги и конкуренты, необъяснимые убытки и утечки.\nКак человек — завистливый, злобный, не умеющий радоваться чужому, считающий чужие деньги.\nПо здоровью — резкий упадок сил без причины, опустошение после общения с определённым человеком.",
		image: "/cards/107.jpg"
	},
	{
		number: 108,
		title: "Разочарование",
		keywords: "Разбитые ожидания и болезненное столкновение с реальностью",
		description: "Разбитые ожидания и болезненное столкновение с реальностью. То, на что надеялись, оказалось совсем не таким, как представлялось. Карта приносит обиду, грусть, слезы, ощущение поражения и эмоционального истощения. Это субъективная оценка происходящего: в какой именно сфере произошло разочарование — покажут соседние карты. После пережитого важно остановиться, принять правду и сделать выводы.\nВ отношениях — предательство, болезненный разрыв, охлаждение, обида на партнера, эмоциональные качели и постепенное отдаление друг от друга.\nВ делах и деньгах — неудача, потери, провал, застой, несбывшиеся ожидания. Вложенные силы или деньги не оправдывают себя.\nКак человек — чувствительный, обидчивый, склонный к унынию и апатии. Может быть разочарован в людях или обстоятельствах, но пережитый кризис способен заставить его увидеть правду и сделать важные выводы.\nПо здоровью — травмы, раны, последствия ударов и физических повреждений, болезненное или затяжное восстановление. Карта также может указывать на истощение ресурса после тяжёлого периода.",
		image: "/cards/108.jpg"
	}
];
var AUTHOR_IMAGE = "/author/temnoyar.jpg";
function applyOfficialDeck(deck) {
	const now = (/* @__PURE__ */ new Date()).toISOString();
	const prev = new Map(deck.map((card) => [card.number, card]));
	return OFFICIAL_CARDS.map((src) => {
		const old = prev.get(src.number);
		return {
			number: src.number,
			title: src.title,
			keywords: src.keywords,
			description: src.description,
			imageData: src.image,
			videoUrl: old?.videoUrl && !old.videoUrl.startsWith("blob:") ? old.videoUrl : "",
			dayLine: old?.dayLine || src.dayLine || "",
			dayLooks: old?.dayLooks || src.dayLooks || "",
			dayDo: old?.dayDo || src.dayDo || "",
			dayAvoid: old?.dayAvoid || src.dayAvoid || "",
			updatedAt: now
		};
	});
}
function applySeed(deck) {
	return applyOfficialDeck(deck.length === 108 ? deck : emptyDeck());
}
/** If an old session still has the placeholder «Макошь» as card 001, replace with the official МБК. */
function applyMakoshBrand(cards, settingsName) {
	const card1 = cards.find((c) => c.number === 1);
	const filled = cards.filter((c) => c.title.trim()).length;
	if (settingsName === "Полотно Макоши" && card1?.title === "Гонец" && filled >= 100) return {
		cards,
		changed: false
	};
	return {
		cards: applyOfficialDeck(cards),
		changed: true
	};
}
function newer(a, b) {
	return new Date(a).getTime() > new Date(b).getTime();
}
function mergeCards(primary, secondary) {
	const map = new Map(emptyDeck().map((card) => [card.number, card]));
	for (const card of secondary) map.set(card.number, withDayFields(card));
	for (const card of primary) {
		const prev = map.get(card.number);
		const incoming = withDayFields(card);
		if (!prev || newer(incoming.updatedAt, prev.updatedAt) || isCardFilled(incoming) && !isCardFilled(prev)) map.set(card.number, {
			...incoming,
			dayLine: incoming.dayLine || prev?.dayLine || "",
			dayLooks: incoming.dayLooks || prev?.dayLooks || "",
			dayDo: incoming.dayDo || prev?.dayDo || "",
			dayAvoid: incoming.dayAvoid || prev?.dayAvoid || ""
		});
		else map.set(card.number, {
			...prev,
			dayLine: prev.dayLine || incoming.dayLine,
			dayLooks: prev.dayLooks || incoming.dayLooks,
			dayDo: prev.dayDo || incoming.dayDo,
			dayAvoid: prev.dayAvoid || incoming.dayAvoid
		});
	}
	return Array.from({ length: 108 }, (_, i) => withDayFields(map.get(i + 1) ?? emptyCardFallback(i + 1)));
}
function emptyCardFallback(number) {
	return {
		number,
		title: "",
		keywords: "",
		description: "",
		imageData: null,
		videoUrl: "",
		dayLine: "",
		dayLooks: "",
		dayDo: "",
		dayAvoid: "",
		updatedAt: (/* @__PURE__ */ new Date(0)).toISOString()
	};
}
function revokeAll(urls) {
	for (const url of Object.values(urls)) URL.revokeObjectURL(url);
}
function withTimeout(promise, ms) {
	return new Promise((resolve, reject) => {
		const timer = setTimeout(() => reject(/* @__PURE__ */ new Error("timeout")), ms);
		promise.then((value) => {
			clearTimeout(timer);
			resolve(value);
		}, (err) => {
			clearTimeout(timer);
			reject(err);
		});
	});
}
var hydrating = null;
var useOracleStore = create((set, get) => ({
	hydrated: false,
	cards: applySeed(emptyDeck()),
	settings: {
		...DEFAULT_SETTINGS,
		seeded: true
	},
	localVideoUrls: {},
	hydrate: async () => {
		if (hydrating) return hydrating;
		hydrating = (async () => {
			revokeAll(get().localVideoUrls);
			const [localCards, localSettings] = await Promise.all([withTimeout(idbLoadCards(), 1500).catch(() => []), withTimeout(idbLoadSettings(), 1500).catch(() => null)]);
			const localFilled = localCards.some(isCardFilled);
			const now = (/* @__PURE__ */ new Date()).toISOString();
			let cards;
			let settings;
			let shouldPush = false;
			if (localFilled || localSettings?.seeded) {
				cards = mergeCards(localCards, []);
				settings = localSettings ?? {
					...DEFAULT_SETTINGS,
					seeded: true,
					updatedAt: now
				};
			} else {
				cards = applySeed(emptyDeck());
				settings = {
					...DEFAULT_SETTINGS,
					...localSettings ?? {},
					seeded: true,
					updatedAt: now
				};
				shouldPush = true;
			}
			const branded = applyMakoshBrand(cards, settings.name);
			cards = branded.cards;
			if (branded.changed || settings.name !== DEFAULT_SETTINGS.name || (settings.mbkVersion ?? 0) < 1) {
				settings = {
					...settings,
					name: DEFAULT_SETTINGS.name,
					author: DEFAULT_SETTINGS.author,
					tagline: DEFAULT_SETTINGS.tagline,
					intro: DEFAULT_SETTINGS.intro,
					mbkVersion: 1,
					seeded: true,
					updatedAt: now
				};
				shouldPush = true;
			}
			if (shouldPush) {
				withTimeout(idbSaveCards(cards), 1500).catch(() => void 0);
				withTimeout(idbSaveSettings(settings), 1500).catch(() => void 0);
			}
			set({
				cards,
				settings,
				hydrated: true
			});
			try {
				const remote = await withTimeout(fetchOracleState(), 2500);
				if (remote.cards.some(isCardFilled) || remote.settings.seeded) {
					let mergedCards = mergeCards(get().cards, remote.cards);
					let mergedSettings = newer(get().settings.updatedAt, remote.settings.updatedAt) ? get().settings : remote.settings;
					const brandedRemote = applyMakoshBrand(mergedCards, mergedSettings.name);
					mergedCards = brandedRemote.cards;
					if (brandedRemote.changed || mergedSettings.name !== DEFAULT_SETTINGS.name || (mergedSettings.mbkVersion ?? 0) < 1) {
						mergedSettings = {
							...mergedSettings,
							name: DEFAULT_SETTINGS.name,
							author: DEFAULT_SETTINGS.author,
							tagline: DEFAULT_SETTINGS.tagline,
							intro: DEFAULT_SETTINGS.intro,
							mbkVersion: 1,
							seeded: true,
							updatedAt: (/* @__PURE__ */ new Date()).toISOString()
						};
						saveOracleBulk({ data: {
							cards: mergedCards,
							settings: mergedSettings
						} }).catch(() => void 0);
					}
					set({
						cards: mergedCards,
						settings: mergedSettings
					});
					await idbSaveCards(mergedCards).catch(() => void 0);
					await idbSaveSettings(mergedSettings).catch(() => void 0);
				} else if (shouldPush || localFilled) saveOracleBulk({ data: {
					cards: get().cards,
					settings: get().settings
				} }).catch(() => void 0);
			} catch {
				if (shouldPush) saveOracleBulk({ data: {
					cards: get().cards,
					settings: get().settings
				} }).catch(() => void 0);
			}
		})();
		try {
			await hydrating;
		} finally {
			hydrating = null;
		}
	},
	ensureVideo: async (number) => {
		if (get().localVideoUrls[number]) return;
		const blob = await withTimeout(idbGetVideo(number), 4e3).catch(() => null);
		if (!blob) return;
		if (get().localVideoUrls[number]) return;
		const url = URL.createObjectURL(blob);
		set({ localVideoUrls: {
			...get().localVideoUrls,
			[number]: url
		} });
	},
	updateCard: async (card) => {
		set({ cards: get().cards.map((c) => c.number === card.number ? card : c) });
		await idbSaveCard(card);
		saveOracleCard({ data: card }).catch(() => void 0);
	},
	updateSettings: async (patch) => {
		const settings = {
			...get().settings,
			...patch,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		set({ settings });
		await idbSaveSettings(settings);
		saveOracleSettings({ data: settings }).catch(() => void 0);
	},
	setLocalVideo: async (number, file) => {
		await idbSetVideo(number, file);
		const prev = get().localVideoUrls[number];
		if (prev) URL.revokeObjectURL(prev);
		const localUrl = URL.createObjectURL(file);
		set({ localVideoUrls: {
			...get().localVideoUrls,
			[number]: localUrl
		} });
		let videoUrl = "";
		try {
			const form = new FormData();
			form.set("number", String(number));
			form.set("file", file);
			const res = await fetch("/api/card-video", {
				method: "POST",
				body: form
			});
			if (res.ok) {
				const body = await res.json();
				if (body.url) videoUrl = body.url;
			}
		} catch {}
		const card = get().cards.find((c) => c.number === number);
		if (card) {
			const next = {
				...card,
				videoUrl: videoUrl || card.videoUrl,
				updatedAt: (/* @__PURE__ */ new Date()).toISOString()
			};
			await get().updateCard(next);
		}
	},
	clearLocalVideo: async (number) => {
		await idbDeleteVideo(number);
		const prev = get().localVideoUrls[number];
		if (prev) URL.revokeObjectURL(prev);
		const nextUrls = { ...get().localVideoUrls };
		delete nextUrls[number];
		set({ localVideoUrls: nextUrls });
		const card = get().cards.find((c) => c.number === number);
		if (card?.videoUrl.startsWith("/videos/")) await get().updateCard({
			...card,
			videoUrl: "",
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
	}
}));
var ITEMS = [
	{
		to: "/",
		label: "Главная",
		icon: IconWindow
	},
	{
		to: "/learn",
		label: "Обучение",
		icon: IconThreadKnot
	},
	{
		to: "/deck",
		label: "Гримуар",
		icon: IconBookClasp
	},
	{
		to: "/about",
		label: "О Полотне",
		icon: IconSpindle
	}
];
function SiteNav() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const name = useOracleStore((s) => s.settings.name);
	const [sound, setSound] = (0, import_react.useState)(false);
	const [slim, setSlim] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setSound(soundEnabled());
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setSlim(window.scrollY > 18);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("site-mast sticky top-0 z-30", pathname === "/" && !slim && "is-clear", slim && "is-slim"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("mx-auto flex max-w-6xl items-center justify-between px-6 md:px-12", slim ? "h-14" : "h-16"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "brand-mark",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "brand-name",
					children: name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "brand-sub",
					children: "Колода смыслов"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/consult",
						className: "nav-consult",
						children: "Консультация"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							const next = !sound;
							setSound(next);
							setSoundEnabled(next);
							if (next) startCrackle();
							else stopCrackle();
						},
						className: "px-2 py-2 text-sand",
						"aria-pressed": sound,
						"aria-label": sound ? "Выключить звук" : "Включить звук",
						title: sound ? "Звук включён" : "Звук выключен",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("sound-mark", sound && "is-on"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconHearth, {})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 md:flex",
						children: ITEMS.map((item) => {
							const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								"data-active": active,
								className: cn("nav-thread px-3 py-2 text-sm", active ? "text-sand" : "text-muted-foreground hover:text-sand"),
								children: item.label
							}, item.to);
						})
					})
				]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "site-dock fixed inset-x-0 bottom-0 z-30 pb-[env(safe-area-inset-bottom)] md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid grid-cols-4",
			children: ITEMS.map((item) => {
				const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
				const Icon = item.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.to,
					"data-active": active,
					className: cn("dock-item flex min-h-14 flex-col items-center justify-center gap-1 font-[family-name:var(--font-ui)] text-xs tracking-[0.08em]", active ? "text-sand" : "text-muted-foreground"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}), item.label]
				}) }, item.to);
			})
		})
	})] });
}
var MOTES = [
	{
		x: 12,
		y: 28,
		d: 22,
		s: 1.2
	},
	{
		x: 28,
		y: 62,
		d: 28,
		s: .8
	},
	{
		x: 41,
		y: 18,
		d: 19,
		s: 1
	},
	{
		x: 53,
		y: 44,
		d: 31,
		s: .7
	},
	{
		x: 61,
		y: 72,
		d: 24,
		s: 1.1
	},
	{
		x: 73,
		y: 33,
		d: 27,
		s: .9
	},
	{
		x: 81,
		y: 58,
		d: 21,
		s: 1.3
	},
	{
		x: 18,
		y: 81,
		d: 26,
		s: .75
	},
	{
		x: 36,
		y: 47,
		d: 18,
		s: 1.05
	},
	{
		x: 88,
		y: 22,
		d: 29,
		s: .85
	}
];
function StillLife({ candle, yarn }) {
	const [tier, setTier] = (0, import_react.useState)("lite");
	(0, import_react.useEffect)(() => {
		setTier(fxTier());
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "still-life",
		"aria-hidden": "true",
		children: [
			candle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/scenes/candle.webp",
				alt: "",
				className: "still-candle"
			}) : null,
			yarn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/scenes/yarn-arc.webp",
				alt: "",
				className: "still-yarn"
			}) : null,
			tier !== "min" ? MOTES.map((mote, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "dust-mote",
				style: {
					left: `${mote.x}%`,
					top: `${mote.y}%`,
					animationDuration: `${mote.d}s`,
					animationDelay: `${i * -2.1}s`,
					width: mote.s + 1,
					height: mote.s + 1
				}
			}, i)) : null
		]
	});
}
function AppShell({ children, className, scene }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-10 min-h-dvh text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atmosphere, {}),
			scene ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneStage, { name: scene }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StillLife, {
				candle: scene === "table",
				yarn: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmberField, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("chamber-page relative z-10 mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-6xl flex-col px-6 pt-8 pb-[calc(8.5rem+env(safe-area-inset-bottom))] md:px-12 md:pt-12 md:pb-16", className),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})]
			})
		]
	});
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function Splash() {
	return null;
}
function Providers({ children }) {
	const hydrate = useOracleStore((s) => s.hydrate);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		if (soundEnabled()) startCrackle();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Splash, {}),
		children,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			theme: "dark",
			position: "bottom-center",
			toastOptions: { className: "bg-card text-foreground border-border font-sans" }
		})
	] });
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var styles_default = "/assets/styles-xPdIrhy7.css";
var APP_NAME = "Полотно Макоши";
var Route$15 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "theme-color",
				content: "#0B0908"
			},
			{
				name: "apple-mobile-web-app-title",
				content: APP_NAME
			},
			{
				name: "description",
				content: "Полотно Макоши — славянская колода из 108 нитей. Нить дня, обучение схемам, гримуар и консультация Темнояра."
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: Root,
	notFoundComponent: NotFound
});
function Root() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ru",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-background text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Providers, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "overline",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display-title mt-3",
				children: "Нить оборвалась"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "ink mt-5",
				children: "Такой страницы нет. Вернитесь к полотну."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "btn-cloth mt-8",
				children: "На главную"
			})
		]
	}) });
}
var $$splitComponentImporter$10 = () => import("./routes-HNQwFgyE.mjs");
var Route$14 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Полотно Макоши" }, {
		name: "description",
		content: "Славянская колода-оракул Полотно Макоши: 108 нитей, нить дня, обучение схемам и консультация Темнояра."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./about-Tf5hDJQk.mjs");
var Route$13 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./consult-DGX0nkKR.mjs");
var Route$12 = createFileRoute("/consult")({
	head: () => ({ meta: [{ title: "Консультация — Полотно Макоши" }, {
		name: "description",
		content: "Личный разбор ситуации у Темнояра. Без гарантии исхода и без медицинских обещаний."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./contacts-BqgK5hxK.mjs");
var Route$11 = createFileRoute("/contacts")({
	head: () => ({ meta: [{ title: "Контакты — Полотно Макоши" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./deck-CmN1TmZ0.mjs");
var Route$10 = createFileRoute("/deck")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var Route$9 = createFileRoute("/journal")({ beforeLoad: () => {
	throw redirect({ to: "/" });
} });
var $$splitComponentImporter$5 = () => import("./learn-CXMgCNIA.mjs");
var Route$8 = createFileRoute("/learn")({
	head: () => ({ meta: [{ title: "Обучение — Полотно Макоши" }, {
		name: "description",
		content: "Шесть схем колоды Полотно Макоши: когда какая уместна и что значит каждая позиция. Без запуска расклада."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./oferta-CH-j7YBd.mjs");
var Route$7 = createFileRoute("/oferta")({
	head: () => ({ meta: [{ title: "Условия — Полотно Макоши" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./privacy-CuzxajyH.mjs");
var Route$6 = createFileRoute("/privacy")({
	head: () => ({ meta: [{ title: "Конфиденциальность — Полотно Макоши" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var Route$5 = createFileRoute("/reading")({ beforeLoad: () => {
	throw redirect({ to: "/learn" });
} });
var MAX = 50331648;
var TYPES = {
	"video/mp4": "mp4",
	"video/webm": "webm",
	"video/quicktime": "mov",
	"video/x-m4v": "m4v"
};
var Route$4 = createFileRoute("/api/card-video")({ server: { handlers: { POST: async ({ request }) => {
	const form = await request.formData();
	const number = Number(form.get("number"));
	const file = form.get("file");
	if (!Number.isInteger(number) || number < 1 || number > 108) return Response.json({ error: "number" }, { status: 400 });
	if (!(file instanceof File) || file.size < 1) return Response.json({ error: "file" }, { status: 400 });
	if (file.size > MAX) return Response.json({ error: "too-large" }, { status: 413 });
	const fromType = TYPES[file.type];
	const fromName = file.name.split(".").pop()?.toLowerCase();
	const ext = fromType || (fromName && [
		"mp4",
		"webm",
		"mov",
		"m4v"
	].includes(fromName) ? fromName : "mp4");
	const dir = join(process.cwd(), "public", "videos");
	await mkdir(dir, { recursive: true });
	const name = `${String(number).padStart(3, "0")}.${ext}`;
	const bytes = Buffer.from(await file.arrayBuffer());
	await writeFile(join(dir, name), bytes);
	return Response.json({ url: `/videos/${name}` });
} } } });
function splitParagraphs(text) {
	return text.split(/\n+/).map((s) => s.trim()).filter(Boolean);
}
function isCatalog(text) {
	const t = text.trim();
	if (!t) return true;
	return (t.match(/,/g) ?? []).length >= 2 && t.length < 90 && !/[а-яё]{4,}(?:ет|ит|ут|ют|ает|яет)\b/i.test(t);
}
function sentences(text) {
	return text.match(/[^.!?]+[.!?]+/g)?.map((s) => s.trim()) ?? (text.trim() ? [text.trim()] : []);
}
function namedSection(description, labels) {
	const lower = description.toLowerCase();
	for (const label of labels) {
		const idx = lower.indexOf(label.toLowerCase());
		if (idx < 0) continue;
		const from = description.slice(idx);
		const cut = from.search(/\n(?=В |По |Как |Здоровье)/);
		return (cut >= 0 ? from.slice(0, cut) : from).replace(/^(В отношениях|В делах и деньгах|В делах|В деньгах|По здоровью|Здоровье|Как человек)\s*[-—:]*\s*/i, "").trim() || null;
	}
	return null;
}
function coreFromDescription(description, keywords) {
	const parts = splitParagraphs(description);
	const first = parts[0] || keywords.trim();
	const bits = sentences(first);
	if (bits.length === 0) return keywords.trim();
	if (isCatalog(bits[0]) && bits.length > 1) return bits.slice(1, 3).join(" ");
	if (isCatalog(first) && parts[1]) return parts[1];
	return bits.slice(0, 2).join(" ");
}
function keysFrom(keywords, core) {
	const fromKeys = keywords.split(/[,;]/).map((s) => s.trim()).filter(Boolean);
	if (fromKeys.length >= 3) return fromKeys.slice(0, 7);
	const extra = core.split(/[,.]/).map((s) => s.trim()).filter((s) => s.length > 2 && s.length < 28);
	return [.../* @__PURE__ */ new Set([...fromKeys, ...extra])].slice(0, 7);
}
function tempoFrom(text) {
	const t = text.toLowerCase();
	if (/срочн|быстр|гонец|молни|вспыш|спешк/.test(t)) return "быстро";
	if (/якорь|медлен|долго|застой|пауз|останов/.test(t)) return "медленно";
	return "средне";
}
function yesNoFrom(text) {
	const t = text.toLowerCase();
	if (/удач|светл|да,\s|союз|дар|крепк/.test(t) && !/нет|разрыв|потер|разруш/.test(t)) return "да";
	if (/гроб|разруш|отказ|конец|нет пути/.test(t)) return "нет";
	return "условно";
}
function meaningFromCard(card) {
	const core = coreFromDescription(card.description, card.keywords);
	const love = namedSection(card.description, ["В отношениях"]);
	const work = namedSection(card.description, [
		"В делах и деньгах",
		"В делах",
		"В деньгах"
	]) || namedSection(card.description, ["В деньгах"]);
	const health = namedSection(card.description, ["По здоровью", "Здоровье"]);
	const self = namedSection(card.description, ["Как человек"]);
	const actionBits = sentences(work || love || core);
	const action = (actionBits[actionBits.length - 1] || core).slice(0, 180);
	return {
		core: core.slice(0, 400),
		keys: keysFrom(card.keywords, core),
		spheres: {
			love: love?.slice(0, 320) || void 0,
			work: work?.slice(0, 320) || void 0,
			health: health?.slice(0, 280) || void 0,
			self: self?.slice(0, 280) || void 0
		},
		action,
		yesNo: yesNoFrom(`${core} ${card.keywords}`),
		tempo: tempoFrom(`${core} ${card.keywords} ${card.description}`)
	};
}
function sphereOfQuestion(question) {
	const q = question.toLowerCase();
	if (/маги|ритуал|сглаз|порч|эгрегор|приворот|защит|сущност/.test(q)) return "magic";
	if (/собран|совеща|работ|карьер|начальник|коллег|офис|проект|доклад|переговоры|должност/.test(q)) return "work";
	if (/суд|враг|конфликт|ссор|борьб/.test(q)) return "conflict";
	if (/деньг|денег|бизнес|долг|доход|прибыл|куп|продаж|зарплат|сделк/.test(q) && !/чувств|люб/.test(q)) return "work";
	if (/здоров|болез|самочув/.test(q)) return "health";
	if (/люб|отнош|партн|муж|жен|брак|измен|чувств|свидан|семь|роман/.test(q)) return "love";
	return "self";
}
function sphereLabel(sphere) {
	switch (sphere) {
		case "love": return "отношения";
		case "work": return "работа и дело";
		case "health": return "здоровье и состояние";
		case "conflict": return "конфликт";
		case "magic": return "воздействие и порча";
		default: return "внутренний путь";
	}
}
function isConflictQuestion(question) {
	return /конфликт|ссор[аыу]|измен|предат|обман|вред|обвинен|виноват|кто прав|кто виноват|утечк|наруш|ударил|бросил|развёл|развел|расстал|обид|месть|сплетн|скандал|драка|угроз|шантаж/.test(question.toLowerCase());
}
function oneCardKind(question) {
	const s = question.toLowerCase();
	if (/почему|отчего|из[- ]за чего|причина/.test(s)) return "причина";
	if (/зачем|намерен|хочет ли|что хочет/.test(s)) return "намерение";
	if (/что делать|как поступить|как себя вести|совет/.test(s)) return "совет";
	if (/чем законч|к чему привед|итог|результат/.test(s)) return "результат";
	if (/вероятн|шанс|насколько|получится ли|стоит ли|да или нет/.test(s)) return "вероятность";
	if (/что сделал|что произошло|факт|было ли|кто/.test(s)) return "факт";
	if (/как действовать/.test(s)) return "действие";
	return "факт";
}
function spreadGuide(spread) {
	switch (spread) {
		case "one": return `РАСКЛАД «ОДНА НИТЬ»
Одна карта отвечает на один вопрос. Не превращай её в психологический портрет всей жизни.
1. Определи тип: факт / причина / намерение / действие / результат / совет / вероятность.
2. Сформулируй, на что именно отвечает карта.
3. Толкуй строго относительно вопроса.
4. Не расширяй за пределы спрошенного.
5. Если это выбор — сначала направление, потом почему.
6. Если конфликт или ответственность — не говори «оба виноваты» по умолчанию. Если карта указывает на конкретного человека — назови прямо.
Формула ответа: Ответ → значение карты (смыслом, не названием) → почему → ключевой вывод.`;
		case "three": return `РАСКЛАД «ТРИ КАРТЫ» — начало, поворот, исход
Позиции: 1 Начало (с чего началось) → 2 Поворот (что изменило ход) → 3 Исход (к чему ведёт нынешняя линия).
Карты не равны по причинности. Сначала каждая сама, потом связка 1→2→3.
В конфликте: 1 — первоначальный триггер; 2 — кто/что изменило ситуацию; 3 — последствия.
Не путай инициатора с тем, кто позже сильнее отреагировал.`;
		case "knot": return `РАСКЛАД «УЗЕЛ» — главная диагностика
Позиции: 1 Что завязало узел (первопричина) → 2 Что удерживает (почему живёт) → 3 Где перепутана нить (ошибка понимания, скрытое смешение) → 4 Как развязать (действие/понимание, которое выводит).
Порядок: сначала 1→2, затем 3 (ищи ложную интерпретацию спрашивающего), только потом 4. Решение строится на уже установленной причине, не наоборот.
В конфликте спроси себя: не смешиваю ли первопричину с последующей реакцией? Кто создал узел, а кто лишь ответил?`;
		case "foreign": return `РАСКЛАД «ЧУЖАЯ НИТКА»
Позиции: 1 Есть ли отдельное внешнее вмешательство? → 2 Как именно влияет (действие, не «энергия») → 3 К чему это ведёт.
Карта 1 решает факт. Если внешнего фактора нет — не выдумывай третьего человека, скажи это прямо и толкуй 2–3 как внутреннюю динамику пары/ситуации.
Не считай любое скрытое «третьим человеком». Не объясняй конфликт двоих чужой ниткой, если карты держат причину внутри их взаимодействия.`;
		case "two": return `РАСКЛАД «ДВЕ НИТИ» — два человека
Нить А (карты 1–3): что А думает/понимает; что А делает; к чему ведут действия А.
Нить Б (карты 4–6): то же про Б.
Сначала полностью разбери А: 1→2→3. Затем Б: 4→5→6. Только потом сравни.
Определи: кто инициирует; кто реагирует; кто усиливает; кто пытается изменить; где ответственность А; где ответственность Б; равна ли ответственность.
Наличие двух активных сторон ≠ равная ответственность. Восстанови последовательность действий, не перечисляй эмоции.`;
		case "krosna": return `РАСКЛАД «КРОСНА» — полный разбор
Позиции: 1 Суть; 2 Исток; 3 Скрытая причина; 4 Действие А; 5 Действие Б; 6 Скрытый фактор; 7 Точка перелома; 8 Ближайшее развитие; 9 Итоговая нить.
Не читай девять карт подряд как словарь.
Этап 1, факты: 2 → 4 → 5 → 7 (откуда началось, что сделал А, что сделал Б, что изменило).
Этап 2, скрытое: 3 → 6.
Этап 3, суть: 1.
Этап 4, динамика: 8 → 9.
Только после этого пиши связный текст.`;
		default: return "";
	}
}
var CONFLICT_PROTOCOL = `ПРОТОКОЛ КОНФЛИКТА (включается, если в вопросе конфликт, ссора, обвинение, обман, вред, нарушение договорённости и т.п.)
Шаг 1. Найти конкретное действие, которое породило проблему — не «кто эмоционально неправ».
Шаг 2. Кто это сделал.
Шаг 3. Отделить факт от реакции: кто совершил действие, кто ответил.
Шаг 4. Разделить ответственность: за возникновение / за эскалацию / за продолжение / за последствия.
Шаг 5. Только потом оценить обе стороны. Возможные честные выводы:
— А ответственен за возникновение, Б — за эскалацию;
— А за начало и продолжение, Б лишь реагирует;
— вклад обоих, но ответственность неравная;
— ответственность преимущественно на одной стороне;
— виновника среди участников нет — внешнее обстоятельство.
«Нет виновника» — только вывод после анализа, никогда дефолт.
Двух активных сторон недостаточно, чтобы сказать «оба одинаково виноваты».`;
var INTERNAL_TABLE = `ВНУТРЕННЯЯ СХЕМА (заполни про себя, пользователю НЕ показывай таблицу, списки и эти вопросы)
Что произошло первым?
Кто совершил первое значимое действие?
Что именно было сделано?
Кто отреагировал?
Кто изменил ситуацию?
Кто усилил конфликт?
Кто пытался его прекратить?
Ответственность А
Ответственность Б
Равна ли ответственность? да/нет
Кто несёт основную ответственность?
После заполнения пиши только красивую интерпретацию: сначала установить нить → увидеть узел → кто какую нить тянул → интерпретация.`;
function systemPrompt() {
	return `Ты — Ткач, голос оракула «Нити Макоши». Читаешь расклад славянской колоды и отвечаешь на вопрос человека.

Ты не гадалка. Ты показываешь причинно-следственную картину: на чём держится ситуация, кто какую нить тянул, куда она идёт и где рычаг. Тон спокойный, взрослый, образный, без сюсюканья и без эзотерического жаргона. Глубина речи сохраняется. Логика жёсткая: сначала факты, потом смысл.

════════════════════════════
РАЗДЕЛ 1. АБСОЛЮТНЫЕ ЗАПРЕТЫ
════════════════════════════
1. Не перечисляй карты по позициям. Никаких «В начале — Молния». Расклад — одна ситуация.
2. Не подставляй название карты вместо смысла.
3. Названия карт запрещены в первых двух абзацах; дальше — не больше двух-трёх, и только если образ работает.
4. Не уходи от вопроса.
5. Не путай субъект. Вопрос про третье лицо — весь текст про него.
6. Нет диагнозов, сроков смерти, гарантий суда, беременности, денег. Здоровье — только состояние и нагрузка + к врачу.
7. Нет «энергий», «вселенной», «потока», «прислушайся к себе».
8. Тяжёлое называй тяжёлым, но со шагом.
9. Перевёрнутых значений нет.
10. Не вываливай ключи через запятую.
11. Не тащи секс и измену в рабочий вопрос, если вопрос и карты этого не держат.
12. Не копируй шаблон «Сейчас тебе тяжело, и это не иллюзия». Не растворяй виновника в философии «сложной природы отношений».
13. Не печатай внутреннюю таблицу, заголовки разделов и списки. Только связная речь.

════════════════════════════
РАЗДЕЛ 2. ПОРЯДОК РАБОТЫ
════════════════════════════
Про себя: разбор вопроса → перевод карт в смысл по сфере → алгоритм ЭТОГО расклада (ниже в пользовательском сообщении) → если конфликт, протокол конфликта и внутренняя схема → одна формулировка сути → готовый текст.

Карта звучит по сфере. «Страсть» в работе — накал, не секс. «Лебединая верность» в работе — лояльность.

${CONFLICT_PROTOCOL}

${INTERNAL_TABLE}

════════════════════════════
РАЗДЕЛ 3. СТРУКТУРА ОТВЕТА
════════════════════════════
Без заголовков, без списков, без markdown.

Одна нить: 4 коротких абзаца по формуле Ответ → смысл → почему → вывод. 900–1400 знаков.
Три карты / Узел / Чужая нитка: 5 абзацев, 1300–2000 знаков.
1 прямой ответ; 2 почему / исток; 3 что путает и скрыто; 4 один ход на завтра; 5 к чему приходит.
Две нити / Кросна: 6–7 абзацев, 1800–2600 знаков. Сначала линия А, затем Б (или факты, затем скрытое), затем сравнение ответственности, затем ход и исход.

В конфликте первый абзац обязан назвать действие и, если карты указывают, исполнителя. Не прячь это в конец.

════════════════════════════
РАЗДЕЛ 4. ЯЗЫК
════════════════════════════
Говори событиями и людьми. Имена из вопроса повторяй. Короткие фразы. Образы колоды (нить, узел, кромка) можно, названия карт — почти нельзя.

ПРИМЕР ТОНА
«Собрание пройдёт напряжённо, но не впустую… Руслану стоит идти с одним пунктом и назвать условия первым.»

Неверно: «Оба виноваты, отношения — сложная ткань, прислушайтесь друг к другу.»

════════════════════════════
РАЗДЕЛ 5. САМОПРОВЕРКА
════════════════════════════
1. Первый абзац отвечает на вопрос?
2. Субъект верен?
3. Нет названий карт в первых двух абзацах?
4. Если конфликт — названы действие и исполнитель, ответственность не растворена?
5. Есть один конкретный шаг?
6. Текст нельзя перенести на любой другой вопрос?
7. Таблица и списки не попали в ответ?

Эти границы важнее образности. Не подтверждай диагноз, порчу, приворот, заговор, чужие мысли и гарантированный исход. Карта — авторский символ, не доказательство события. При симптомах — к врачу, при прямой угрозе жизни — в экстренную помощь. Не предлагай платное снятие негатива. Не обещай дат, свадьбы, измены и выгоды. Если вопрос требует да или нет, назови допущение, не симулируй точность.`;
}
var weaveSchema = object({
	question: string().max(400),
	spread: _enum([
		"one",
		"two",
		"three",
		"knot",
		"foreign",
		"krosna"
	]),
	cards: array(object({
		number: number().int().min(1).max(108),
		title: string().max(120),
		keywords: string().max(240),
		description: string().max(4e3),
		role: string().max(80)
	})).min(1).max(9),
	history: array(object({
		role: _enum(["weaver", "seeker"]),
		text: string().max(4e3)
	})).max(8),
	followUp: string().max(400).optional()
});
function namesInQuestion(question) {
	const stop = /* @__PURE__ */ new Set([
		"Что",
		"Как",
		"Когда",
		"Где",
		"Кто",
		"Чем",
		"Почему",
		"Какой",
		"Какая",
		"Какие",
		"Будет",
		"Буду",
		"Будем",
		"Любит",
		"Люблю",
		"Можно",
		"Скажи",
		"Будущее",
		"Завтра",
		"Сегодня",
		"Если",
		"Этот",
		"Эта",
		"Прогноз",
		"Собрание",
		"Встреча"
	]);
	const found = question.match(/(?<![А-Яа-яЁёA-Za-z])[А-ЯЁ][а-яё]{2,}(?:\s+[А-ЯЁ][а-яё]+)?/g) ?? [];
	return [...new Set(found.filter((name) => !stop.has(name.split(" ")[0] ?? "")))];
}
function subjectOf(question) {
	const names = namesInQuestion(question);
	const q = question.toLowerCase();
	if (names[0] && /(у |про |для |как .*у |собран.*у )/.test(q)) return {
		subject: "third_person",
		name: names[0]
	};
	if (names[0] && /(он|она|ему|ей|него|неё)/.test(q)) return {
		subject: "third_person",
		name: names[0]
	};
	if (names[0]) return {
		subject: "third_person",
		name: names[0]
	};
	if (!q.trim()) return {
		subject: "situation",
		name: ""
	};
	return {
		subject: "self",
		name: ""
	};
}
function questionType(question) {
	const s = question.toLowerCase();
	if (/стоит ли|получится ли|выйдет ли|да или нет|удастся/.test(s)) return "да/нет";
	if (/а или|или .*или|выбрать|что лучше/.test(s)) return "выбор";
	if (/что делать|как поступить|как себя вести|совет/.test(s)) return "совет";
	if (/что он|что она|как .*относ|что чувств|что думает/.test(s)) return "отношение";
	if (/почему|что происходит|что творится/.test(s)) return "диагностика";
	if (/когда|срок|как скоро/.test(s)) return "сроки";
	if (/как пройд|чем законч|что будет|прогноз|завтра|как пройдет/.test(s)) return "прогноз";
	return "прогноз";
}
function sphereMeaningFor(sphere, meaning) {
	if (sphere === "love") return meaning.spheres.love ?? null;
	if (sphere === "work" || sphere === "conflict") return meaning.spheres.work ?? meaning.spheres.conflict ?? null;
	if (sphere === "health") return meaning.spheres.health ?? null;
	if (sphere === "magic") return meaning.spheres.magic ?? null;
	return meaning.spheres.self ?? null;
}
function stripCatalogLine(text) {
	const t = text.trim();
	const bits = t.match(/[^.!?]+[.!?]+/g)?.map((s) => s.trim()) ?? [t];
	return (bits.filter((s) => !isCatalogish(s))[0] || bits.slice(1).join(" ") || t).replace(/\.+$/, "");
}
function isCatalogish(text) {
	return (text.match(/,/g) ?? []).length >= 2 && text.length < 90 && !/[а-яё]{4,}(?:ет|ит|ут|ют|ает|яет)\b/i.test(text);
}
function composeLive(input) {
	const q = input.question.trim();
	const sphere = sphereOfQuestion(q);
	const sub = subjectOf(q);
	const names = namesInQuestion(q);
	const who = names.length >= 2 ? `${names[0]} и ${names[1]}` : names[0] || (sub.subject === "self" ? "ты" : "");
	const cards = input.cards;
	const facets = cards.map((card) => {
		const meaning = meaningFromCard(card);
		return stripCatalogLine(sphereMeaningFor(sphere, meaning) || meaning.core) || meaning.action || card.title;
	});
	const actions = cards.map((card) => meaningFromCard(card).action);
	const last = facets[facets.length - 1] || "ситуация требует ясного шага";
	const first = facets[0] || "уже есть основание";
	const mid = facets[Math.min(1, facets.length - 1)] || first;
	const love = sphere === "love";
	const work = sphere === "work" || sphere === "conflict";
	const you = sub.subject === "third_person" && who ? who : "ты";
	return [
		q ? love && who ? `У ${who} сейчас не спокойная пауза, а живой перелом. ${capFirst(first)}. Итог при нынешнем ходе — ${last.charAt(0).toLowerCase() + last.slice(1)}.` : work && who ? `Для ${who} это не общий разговор «о жизни», а конкретный ход дела. ${capFirst(first)}. К чему приходит: ${last.charAt(0).toLowerCase() + last.slice(1)}.` : `Прямой ответ: ${first}. Дальше нить идёт к тому, что ${last.charAt(0).toLowerCase() + last.slice(1)}.` : `Картина дня такая: ${first}.`,
		`Почему так. В основании уже лежит ${first.charAt(0).toLowerCase() + first.slice(1)}. Это не фон, а причина, из которой растёт всё остальное.`,
		cards.length > 1 ? `Что мешает и что скрыто. Следующий слой: ${mid.charAt(0).toLowerCase() + mid.slice(1)}. Здесь не абстракция — здесь конкретное напряжение, которое ${you === "ты" ? "ты уже чувствуешь" : "уже видно со стороны"}.` : `Скрытое в том же: ${first.charAt(0).toLowerCase() + first.slice(1)}.`,
		`Что делать. ${capFirst(stripCatalogLine(actions[actions.length - 2] || actions[actions.length - 1] || "сделать один ясный шаг и не чинить всё сразу"))}. Один ход, который можно сделать завтра, а не вся жизнь разом.`,
		`К чему приходит. Если идти как сейчас — ${last.charAt(0).toLowerCase() + last.slice(1)}. Если сделать шаг из предыдущего абзаца, итог можно сдвинуть. Без лозунгов: цена есть, рычаг тоже.`
	].join("\n\n");
}
function capFirst(text) {
	const t = text.trim();
	if (!t) return t;
	return t[0].toUpperCase() + t.slice(1);
}
function userPrompt(input) {
	const q = input.question.trim() || "вопроса нет — общая картина дня";
	const sphere = sphereOfQuestion(q);
	const sub = subjectOf(q);
	const kind = input.spread === "one" ? oneCardKind(q) : questionType(q);
	const follow = input.followUp?.trim();
	const conflict = isConflictQuestion(q);
	const names = namesInQuestion(q);
	const partyA = names[0] || "спрашивающий";
	const partyB = names[1] || "другая сторона";
	const lines = input.cards.map((card, i) => {
		const meaning = meaningFromCard(card);
		const facet = sphereMeaningFor(sphere, meaning);
		return [
			`${i + 1}. ${card.role} — ${card.title}`,
			`   ядро: ${meaning.core}`,
			`   ключи: ${meaning.keys.join(", ") || "—"}`,
			`   в сфере «${sphereLabel(sphere)}»: ${facet || "null — выведи грань из ядра, не выходя за него"}`,
			`   действие: ${meaning.action}`,
			`   да/нет: ${meaning.yesNo}; темп: ${meaning.tempo}`
		].join("\n");
	});
	if (follow) return [
		`Уточнение к уже сделанному раскладу: ${follow}`,
		`Исходный вопрос: ${q}`,
		"Ответь только на уточнение, 3–5 предложений, по уже выпавшим картам. Не повторяй предыдущий текст. Новых карт не вводи."
	].join("\n");
	return [
		`РАСКЛАД: ${input.spread}`,
		`ВОПРОС: ${q}`,
		`СУБЪЕКТ: ${sub.subject}${sub.name ? ` ${sub.name}` : ""}`,
		`СТОРОНЫ: А = ${partyA}; Б = ${partyB}`,
		`СФЕРА: ${sphereLabel(sphere)}`,
		`ТИП ВОПРОСА: ${kind}`,
		`КОНФЛИКТ: ${conflict ? "да — включи протокол конфликта и внутреннюю схему" : "нет"}`,
		"",
		spreadGuide(input.spread),
		"",
		"КАРТЫ РАСКЛАДА:",
		"",
		lines.join("\n\n"),
		"",
		"Сначала про себя заполни схему и алгоритм расклада. В ответ отдай только связное толкование, без таблицы и без заголовков."
	].join("\n");
}
function looksLikeDump(text, question = "") {
	const t = text.trim();
	if (t.length < 180) return true;
	if (/^(Карта показывает|Эта карта говорит|В вашей ситуации|Вам выпала|На вопрос)/i.test(t)) return true;
	if (/Сейчас тебе тяжело, и это не иллюзия/i.test(t)) return true;
	if (/ящик Пандоры|сундук Морены/i.test(t)) return true;
	if (/Ситуация держится на том, что [А-ЯЁ][а-яё]+(?:\s+[А-ЯЁ][а-яё]+)?\./.test(t)) return true;
	const first = t.split(/\n\n/)[0] ?? "";
	if (first.length < 140 && (first.match(/,/g) ?? []).length >= 2 && !/[а-яё]{4,}(?:ет|ит|ут|ют|ает|яет|ётся)\b/i.test(first)) return true;
	const { subject, name } = subjectOf(question);
	if (subject === "third_person" && name && /^Сейчас тебе /i.test(t)) return true;
	const sphere = sphereOfQuestion(question);
	if ((sphere === "work" || sphere === "conflict") && /сексуальн|плотск|союз на всю жизнь|дикое влечение/.test(t.toLowerCase())) return true;
	if ((t.match(/(?:^|[.!?]\s)(?:Корни|Основа|Чужая нить|Узел|Сердце|Скрытое|Совет|Ход|Кромка|Начало|Поворот|Исход|Суть|Исток)\.\s/g) ?? []).length >= 2) return true;
	if (/Что произошло первым\?|Ответственность А|Равна ли ответственность/.test(t)) return true;
	return false;
}
async function askGrok(apiKey, messages, maxTokens) {
	for (const model of ["grok-4.20-0309-non-reasoning", "grok-4.5"]) try {
		const res = await fetch("https://api.x.ai/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`
			},
			signal: AbortSignal.timeout(22e3),
			body: JSON.stringify({
				model,
				temperature: .7,
				max_tokens: maxTokens,
				messages
			})
		});
		if (!res.ok) continue;
		const text = (await res.json()).choices?.[0]?.message?.content?.trim() || "";
		if (text) return text;
	} catch {
		continue;
	}
	return null;
}
async function runWeave(data) {
	const fallback = composeLive(data);
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: true,
		text: fallback,
		source: "local"
	};
	const messages = [{
		role: "system",
		content: systemPrompt()
	}];
	for (const turn of data.history) messages.push({
		role: turn.role === "weaver" ? "assistant" : "user",
		content: turn.text.slice(0, 2e3)
	});
	messages.push({
		role: "user",
		content: userPrompt(data)
	});
	const tokens = data.followUp ? 400 : 900;
	try {
		let text = await askGrok(apiKey, messages, tokens);
		if (text && looksLikeDump(text, data.question) && text.length < 800) {
			messages.push({
				role: "assistant",
				content: text.slice(0, 800)
			});
			messages.push({
				role: "user",
				content: "Перепиши: прямой ответ на вопрос, пять абзацев, без словаря карт."
			});
			const rewritten = await askGrok(apiKey, messages, tokens);
			if (rewritten) text = rewritten;
		}
		if (!text) return {
			ok: true,
			text: fallback,
			source: "local"
		};
		return {
			ok: true,
			text,
			source: "grok"
		};
	} catch {
		return {
			ok: true,
			text: fallback,
			source: "local"
		};
	}
}
createServerFn({ method: "POST" }).validator((input) => weaveSchema.parse(input)).handler(createSsrRpc("1dc9218764120d87088736012bb82985ddd14c90927c02739313fd18578f1798"));
var Route$3 = createFileRoute("/api/weave")({ server: { handlers: { POST: async ({ request }) => {
	const body = await request.json();
	try {
		const result = await runWeave(body);
		return Response.json(result);
	} catch (err) {
		console.error("[weave]", err);
		return Response.json({
			ok: true,
			text: composeLive(body),
			source: "local"
		});
	}
} } } });
var $$splitComponentImporter$2 = () => import("./card._number-Cu3syTo7.mjs");
var Route$2 = createFileRoute("/card/$number")({
	beforeLoad: ({ params }) => {
		const n = Number(params.number);
		if (!Number.isInteger(n) || n < 1 || n > 108) throw notFound();
	},
	head: ({ params }) => {
		const n = Number(params.number);
		const title = `Карта ${String(n).padStart(3, "0")} | Полотно Макоши`;
		const description = `Авторское значение карты ${n} колоды Полотно Макоши.`;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:url",
					content: `https://temnoiar.ru/card/${n}`
				}
			],
			links: [{
				rel: "canonical",
				href: `https://temnoiar.ru/card/${n}`
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./studio.index-lRib_bvD.mjs");
var Route$1 = createFileRoute("/studio/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./studio._number-CtSZptLu.mjs");
var Route = createFileRoute("/studio/$number")({
	beforeLoad: ({ params }) => {
		const n = Number(params.number);
		if (!Number.isInteger(n) || n < 1 || n > 108) throw notFound();
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$14.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$15
});
var AboutRoute = Route$13.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$15
});
var ConsultRoute = Route$12.update({
	id: "/consult",
	path: "/consult",
	getParentRoute: () => Route$15
});
var ContactsRoute = Route$11.update({
	id: "/contacts",
	path: "/contacts",
	getParentRoute: () => Route$15
});
var DeckRoute = Route$10.update({
	id: "/deck",
	path: "/deck",
	getParentRoute: () => Route$15
});
var JournalRoute = Route$9.update({
	id: "/journal",
	path: "/journal",
	getParentRoute: () => Route$15
});
var LearnRoute = Route$8.update({
	id: "/learn",
	path: "/learn",
	getParentRoute: () => Route$15
});
var OfertaRoute = Route$7.update({
	id: "/oferta",
	path: "/oferta",
	getParentRoute: () => Route$15
});
var PrivacyRoute = Route$6.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$15
});
var ReadingRoute = Route$5.update({
	id: "/reading",
	path: "/reading",
	getParentRoute: () => Route$15
});
var ApiCardVideoRoute = Route$4.update({
	id: "/api/card-video",
	path: "/api/card-video",
	getParentRoute: () => Route$15
});
var ApiWeaveRoute = Route$3.update({
	id: "/api/weave",
	path: "/api/weave",
	getParentRoute: () => Route$15
});
var CardNumberRoute = Route$2.update({
	id: "/card/$number",
	path: "/card/$number",
	getParentRoute: () => Route$15
});
var StudioIndexRoute = Route$1.update({
	id: "/studio/",
	path: "/studio/",
	getParentRoute: () => Route$15
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ConsultRoute,
	ContactsRoute,
	DeckRoute,
	JournalRoute,
	LearnRoute,
	OfertaRoute,
	PrivacyRoute,
	ReadingRoute,
	ApiCardVideoRoute,
	ApiWeaveRoute,
	CardNumberRoute,
	StudioNumberRoute: Route.update({
		id: "/studio/$number",
		path: "/studio/$number",
		getParentRoute: () => Route$15
	}),
	StudioIndexRoute
};
var routeTree = Route$15._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { IconThreadKnot as _, useOracleStore as a, DECK_WELCOME as c, tapPulse as d, fxTier as f, IconRoot as g, IconDrop as h, AppShell as i, createSsrRpc as l, IconCutForward as m, Route as n, AUTHOR_IMAGE as o, IconCutBack as p, Route$2 as r, DECK_ABOUT as s, router_exports as t, playThud as u, cn as v };
