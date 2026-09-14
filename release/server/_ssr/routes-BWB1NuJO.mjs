import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as createServerFn } from "./ssr.mjs";
import { n as cardDisplayTitle, s as withDayFields } from "./types-BvDlfgVm.mjs";
import { a as number, o as object, s as string } from "../_libs/zod.mjs";
import { C as tapPulse, g as createSsrRpc, h as cn, p as IconThreadKnot, v as playThud, w as useOracleStore } from "./store-okPazmL_.mjs";
import { t as AppShell } from "./app-shell-XizQNRfG.mjs";
import { s as CardBack } from "./router-Ypy5BRdx.mjs";
import { t as CardFace } from "./card-face-CYlRq-G0.mjs";
import { r as rememberDayThread } from "./journal-DP38_61i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BWB1NuJO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SpindleButton({ to = "/reading", label = "Сплести нити" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "hero-weave",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/scenes/spindle.webp",
				alt: "",
				className: "hero-spindle"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hero-title",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hero-caption",
				children: "Коснитесь веретена — нить размотается к кроснам."
			})
		]
	});
}
var STORAGE = "makosh-thread-of-day-v4";
var SEED_KEY = "makosh-thread-person";
function localDateKey(date = /* @__PURE__ */ new Date()) {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function hashString(key) {
	let hash = 2166136261;
	for (let i = 0; i < key.length; i += 1) {
		hash ^= key.charCodeAt(i);
		hash = Math.imul(hash, 16777619);
	}
	return Math.abs(hash) >>> 0;
}
function newSeed() {
	const bytes = /* @__PURE__ */ new Uint8Array(16);
	if (typeof crypto !== "undefined" && crypto.getRandomValues) crypto.getRandomValues(bytes);
	else for (let i = 0; i < bytes.length; i += 1) bytes[i] = Math.floor(Math.random() * 256);
	return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}
function personSeed() {
	if (typeof window === "undefined") return "server";
	try {
		const existing = window.localStorage.getItem(SEED_KEY);
		if (existing) return existing;
		const seed = newSeed();
		window.localStorage.setItem(SEED_KEY, seed);
		return seed;
	} catch {
		return "local";
	}
}
function pickCardForDate(cards, date, person = personSeed()) {
	if (!cards.length) return null;
	const n = hashString(`${date}::${person}`) % 108 + 1;
	return cards.find((card) => card.number === n) ?? cards[n - 1] ?? cards[0] ?? null;
}
function officialDayReading(card) {
	const day = withDayFields(card);
	if (!day.dayLine.trim() || !day.dayLooks.trim() || !day.dayDo.trim() || !day.dayAvoid.trim()) return null;
	return {
		dayLine: day.dayLine.trim(),
		dayLooks: day.dayLooks.trim(),
		dayDo: day.dayDo.trim(),
		dayAvoid: day.dayAvoid.trim()
	};
}
function readingFromState(state) {
	if (!state?.dayLine?.trim() || !state.dayLooks?.trim() || !state.dayDo?.trim() || !state.dayAvoid?.trim()) return null;
	return {
		dayLine: state.dayLine.trim(),
		dayLooks: state.dayLooks.trim(),
		dayDo: state.dayDo.trim(),
		dayAvoid: state.dayAvoid.trim()
	};
}
function loadDayThread(cards) {
	if (typeof window === "undefined") return null;
	const today = localDateKey();
	const picked = pickCardForDate(cards, today);
	if (!picked) return null;
	try {
		const raw = window.localStorage.getItem(STORAGE);
		if (raw) {
			const saved = JSON.parse(raw);
			if (saved?.date === today && saved.number >= 1 && saved.number <= 108) return {
				date: today,
				number: saved.number,
				flipped: Boolean(saved.flipped),
				dayLine: saved.dayLine,
				dayLooks: saved.dayLooks,
				dayDo: saved.dayDo,
				dayAvoid: saved.dayAvoid
			};
		}
		return {
			date: today,
			number: picked.number,
			flipped: false
		};
	} catch {
		return {
			date: today,
			number: picked.number,
			flipped: false
		};
	}
}
function saveDayThread(state) {
	try {
		window.localStorage.setItem(STORAGE, JSON.stringify(state));
	} catch {}
}
var inputSchema = object({
	number: number().int().min(1).max(108),
	title: string().max(120),
	keywords: string().max(240),
	description: string().max(800)
});
function composeDayLocal(input) {
	const title = input.title.trim() || "эта нить";
	const mood = `${title} ${input.keywords} ${input.description}`.toLowerCase();
	if (/закрыт|изол|оборон|крепост|твердын|стен/.test(mood)) return {
		dayLine: "Сегодня Твердыня Нави приглашает к тишине.",
		dayLooks: "День может пройти спокойнее, если не распыляться на чужие разговоры, требования и лишнюю суету. Может появиться желание отстраниться от людей и побыть наедине с собой — и сегодня в этом есть своя сила. Не обязательно отвечать на всё сразу. Иногда лучшее действие дня — сохранить внутреннее пространство и не отдавать энергию тому, что её не заслуживает. К вечеру станет понятнее, что действительно требовало твоего внимания, а что можно было оставить за стенами.",
		dayDo: "Позволь себе тишину, но оставь дверь открытой для тех, кому действительно доверяешь.",
		dayAvoid: "Чужие требования, лишняя суета и разговоры, которые тебя не кормят."
	};
	if (/змей|лож|измен|враг|предат|двулич/.test(mood)) return {
		dayLine: "Сегодня ясность дороже сладких слов.",
		dayLooks: "День просит смотреть не на речи, а на руки. Это не значит, что вокруг враги. Это значит, что твоя внимательность сегодня — защита, а не подозрительность. Правда проявится в мелочах, если не торопиться открывать всё сразу. К вечеру станет видно, кому можно доверять дальше.",
		dayDo: "Оставь при себе одно важное. Проверь один факт сам — спокойно, без сцены.",
		dayAvoid: "Выкладывать планы тем, чьи слова сегодня слишком гладкие."
	};
	if (/удач|светл|дар|праздн|луг|счаст/.test(mood)) return {
		dayLine: "Сегодня окно открыто — можно принимать, не ожидая подвоха.",
		dayLooks: "Воздух легче, чем вчера: что-то само складывается, кто-то отвечает, дверь не заклинивает. Это не обещание, что так будет всегда. Это щедрость дня, которой стоит воспользоваться, пока она здесь. Радость сегодня — не наивность, а точность: увидеть, что тебе дают, и не отмахнуться.",
		dayDo: "Скажи да одному доброму предложению или сам сделай маленький тёплый жест.",
		dayAvoid: "Обесценивать удачу и откладывать радость «на потом»."
	};
	if (/труд|работ|мастер|рук/.test(mood)) return {
		dayLine: "Сегодня сила — в руках, не в ожидании.",
		dayLooks: "День кормит тем, что можно сделать. Не героизмом, а земным трудом: сесть и довести одно дело до понятного края. Усталость здесь рабочая — она значит, что нить живая. К вечеру будет не пустота, а вещь, которая стоит.",
		dayDo: "Выбери одно дело и проведи его до ясного края.",
		dayAvoid: "Десять новых начал вместо одной законченной нити."
	};
	if (/конец|угас|потер|разруш|разоча|навий одр/.test(mood)) return {
		dayLine: "Сегодня что-то отпускает — и в этом появляется воздух.",
		dayLooks: "День может быть тихим и жёстким одновременно: хочется отпустить то, что больше не живёт. Это не конец тебя. Это конец старой формы. Разочарование снимает иллюзию; потеря освобождает место; разрушение открывает переход. Не прячь это и не делай из этого приговора всей жизни.",
		dayDo: "Закрой одну маленькую петлю честно, без драмы — и оставь место тому, что может прийти.",
		dayAvoid: "Спасать оболочку и решать, что «всё кончено навсегда»."
	};
	if (/новост|гонец|срочн|извес|дорог/.test(mood)) return {
		dayLine: "Сегодня день едет быстро — и в скорости есть ясность.",
		dayLooks: "Сообщения, сдвиги, кто-то пишет или приезжает. Планы могут сломаться на ходу. Это не катастрофа: скорость сегодня — инструмент. Успевает не тот, кто суетится, а тот, кто выбирает одно важное движение и отпускает десять мелких.",
		dayDo: "Ответь на одно настоящее. Остальное подождёт.",
		dayAvoid: "Большие решения в спешке и обещания, которые сегодня не успеешь сдержать."
	};
	if (/один|тишин|уедин|пауз/.test(mood)) return {
		dayLine: "Сегодня одиночество — не дыра, а пространство.",
		dayLooks: "Может захотеться меньше людей. В этом нет поломки. День даёт комнату, чтобы услышать себя. Тишина сегодня восстанавливает, если не превращать её в обиду на мир.",
		dayDo: "Возьми час без объяснений — и одно живое касание тому, кто свой.",
		dayAvoid: "Путать покой с тем, будто тебя оставили."
	};
	return {
		dayLine: `Сегодня ${title} — не ярлык, а сила, которой можно воспользоваться.`,
		dayLooks: "День просит заметить эту нить в обычных часах: в разговоре, в паузе, в том, куда тянет. Смысл карты не в приговоре, а в направлении: что беречь, чему не отдавать себя, где сегодня твоя опора. К вечеру станет яснее, что было шумом, а что — настоящим.",
		dayDo: "Сделай один спокойный шаг в сторону этой нити — маленький, но свой.",
		dayAvoid: "Раздавать день всему подряд и делать вид, что карты нет."
	};
}
var weaveDayThread = createServerFn({ method: "POST" }).validator((input) => inputSchema.parse(input)).handler(createSsrRpc("3c5f31336d46197db53890c5199976876134652da4bce22153d894b512ff7ce3"));
var FLIP_MS = 500;
var STAGGER_MS = 120;
function DayBlock({ reading, reveal }) {
	const delay = (index) => ({ animationDelay: reveal ? `${index * STAGGER_MS}ms` : "0ms" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 flex flex-col items-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("max-w-sm text-center font-display text-[1.85rem] leading-[1.15] tracking-[0.06em] text-sand sm:text-[2.15rem]", reveal && "day-rise"),
				style: delay(0),
				children: reading.dayLine
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("gold-rule mt-5 w-16", reveal && "day-rise"),
				style: delay(1)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-5 max-w-sm text-center text-base leading-[1.6]", reveal && "day-rise"),
				style: delay(2),
				children: reading.dayLooks
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("day-do mt-7 w-full max-w-sm pl-4", reveal && "day-rise"),
				style: delay(3),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] tracking-[0.22em] text-gold uppercase",
					children: "Сегодня"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-[1.6]",
					children: reading.dayDo
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("day-avoid mt-5 w-full max-w-sm pl-4", reveal && "day-rise"),
				style: delay(4),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] tracking-[0.22em] text-gold uppercase",
					children: "Не сегодня"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-[1.6]",
					children: reading.dayAvoid
				})]
			})
		]
	});
}
function ThreadOfDay() {
	const cards = useOracleStore((s) => s.cards);
	const seed = pickCardForDate(cards, localDateKey());
	const [date, setDate] = (0, import_react.useState)(localDateKey);
	const [number, setNumber] = (0, import_react.useState)(seed?.number ?? null);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [settled, setSettled] = (0, import_react.useState)(false);
	const [textOn, setTextOn] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [reading, setReading] = (0, import_react.useState)(null);
	const weaving = (0, import_react.useRef)(false);
	const persist = (cardNumber, flipped, next) => {
		saveDayThread({
			date: localDateKey(),
			number: cardNumber,
			flipped,
			dayLine: next?.dayLine,
			dayLooks: next?.dayLooks,
			dayDo: next?.dayDo,
			dayAvoid: next?.dayAvoid
		});
		if (flipped && next?.dayLine) rememberDayThread({
			date: localDateKey(),
			number: cardNumber,
			dayLine: next.dayLine
		});
	};
	const weave = async (card) => {
		if (weaving.current) return;
		const already = readingFromState(loadDayThread([card]));
		if (already) {
			setReading(already);
			persist(card.number, true, already);
			return;
		}
		weaving.current = true;
		const official = officialDayReading(card);
		if (official) {
			setReading(official);
			persist(card.number, true, official);
			weaving.current = false;
			return;
		}
		const cached = readingFromState(loadDayThread(cards));
		if (cached) {
			setReading(cached);
			persist(card.number, true, cached);
			weaving.current = false;
			return;
		}
		setBusy(true);
		const payload = {
			number: card.number,
			title: card.title,
			keywords: card.keywords,
			description: card.description.split(/\n+/)[0]?.slice(0, 500) ?? ""
		};
		try {
			const next = (await weaveDayThread({ data: payload })).reading;
			setReading(next);
			persist(card.number, true, next);
		} catch {
			const next = composeDayLocal(payload);
			setReading(next);
			persist(card.number, true, next);
		} finally {
			weaving.current = false;
			setBusy(false);
		}
	};
	(0, import_react.useEffect)(() => {
		const apply = () => {
			const today = localDateKey();
			const state = loadDayThread(cards);
			if (!state) return;
			setDate(state.date);
			setNumber(state.number);
			setOpen(state.flipped);
			setSettled(state.flipped);
			const cached = readingFromState(state);
			const card = cards.find((item) => item.number === state.number);
			const ready = (card ? officialDayReading(card) : null) ?? cached;
			if (state.flipped && ready) {
				setReading(ready);
				setTextOn(true);
			} else {
				setReading(ready);
				setTextOn(false);
			}
			if (state.date !== today) saveDayThread({
				date: today,
				number: state.number,
				flipped: false
			});
		};
		apply();
		const onTick = () => {
			if (localDateKey() === date) return;
			const state = loadDayThread(cards);
			if (!state) return;
			setDate(state.date);
			setNumber(state.number);
			setOpen(false);
			setSettled(false);
			setTextOn(false);
			setReading(null);
			weaving.current = false;
			saveDayThread({
				date: state.date,
				number: state.number,
				flipped: false
			});
		};
		const id = window.setInterval(onTick, 3e4);
		document.addEventListener("visibilitychange", onTick);
		return () => {
			window.clearInterval(id);
			document.removeEventListener("visibilitychange", onTick);
		};
	}, [cards, date]);
	const card = number ? cards.find((item) => item.number === number) : null;
	(0, import_react.useEffect)(() => {
		if (!open || reading || !card || weaving.current) return;
		setTextOn(true);
		weave(card);
	}, [
		open,
		reading,
		card
	]);
	if (!card) return null;
	const flip = () => {
		if (open) return;
		setOpen(true);
		playThud();
		tapPulse(18);
		persist(card.number, true, reading);
		weave(card);
		window.setTimeout(() => setSettled(true), FLIP_MS);
		window.setTimeout(() => setTextOn(true), 800);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "still-panel relative isolate z-10 mt-10 p-6 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xl tracking-[0.08em] text-gold",
				children: "Нить дня"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl tracking-[0.08em] text-sand sm:text-4xl",
				children: "Одна карта на сутки"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-4 w-16" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground",
				children: "Касанием откройте карту дня. Полотно скажет, чего ждать, что сделать и чего не делать до полуночи."
			}),
			settled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bind-stage mx-auto mt-6 w-36 sm:w-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-card overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFace, {
						card,
						className: "size-full",
						showTitle: false
					}, card.number)
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: flip,
				className: "bind-stage mx-auto mt-6 block w-36 sm:w-40",
				"aria-label": "Открыть карту дня",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flip-scene aspect-card w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("flip-card", open && "is-open"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flip-face",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardBack, { className: "size-full" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flip-face flip-face-front",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFace, {
								card,
								className: "size-full",
								showTitle: false
							}, card.number)
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: cn("bind-thread", open && "is-loose"),
					viewBox: "0 0 100 150",
					fill: "none",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M12 18 C 38 8, 62 28, 88 16 S 92 70, 78 92 S 28 128, 18 142",
						stroke: "#6B1C1C",
						strokeWidth: "3.2"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M22 8 C 8 52, 90 58, 70 148",
						stroke: "#8B2A2A",
						strokeWidth: "2.2"
					})]
				})]
			}),
			!open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: flip,
				className: "btn-cloth mt-7",
				children: "Открыть карту"
			}) : null,
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-center font-display text-2xl tracking-[0.08em] text-sand",
				children: cardDisplayTitle(card)
			}) : null,
			open && busy && !reading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconThreadKnot, { className: "text-primary" }), "Нить дня тянется…"]
			}) : null,
			textOn && reading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayBlock, {
				reading,
				reveal: true
			}) : null,
			textOn && reading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/card/$number",
				params: { number: String(card.number) },
				className: "mt-8 block text-center text-sm tracking-[0.14em] text-gold uppercase",
				children: "Читать полное значение"
			}) : null
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		className: "home-shell !pt-2",
		scene: "chamber",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "home-stage",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "home-aside",
					children: "Сто восемь нитей. Одна ткань судьбы."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpindleButton, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreadOfDay, {})
			]
		})
	});
}
//#endregion
export { Home as component };
