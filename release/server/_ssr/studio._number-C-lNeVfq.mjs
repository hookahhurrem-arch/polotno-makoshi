import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { H as notFound, S as require_jsx_runtime, b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cardDisplayTitle, o as padCardNumber, r as emptyCard, s as withDayFields } from "./types-BvDlfgVm.mjs";
import { a as IconCutBack, s as IconDrop, w as useOracleStore } from "./store-okPazmL_.mjs";
import { t as AppShell } from "./app-shell-Hnc25Xyv.mjs";
import { t as Button } from "./button-Cmdjd3ge.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Route } from "./router-DfOQn3SG.mjs";
import { n as compressImageFile, t as LivingMedia } from "./living-media-BcSSF-SS.mjs";
import { t as Input } from "./input-Dbmkx0p7.mjs";
import { n as StudioGate, r as Textarea, t as Label } from "./textarea-CO-_EMLM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio._number-C-lNeVfq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StudioCardPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioCardInner, {}) });
}
function StudioCardInner() {
	const { number: raw } = Route.useParams();
	const n = Number(raw);
	if (!Number.isInteger(n) || n < 1 || n > 108) throw notFound();
	const navigate = useNavigate();
	const stored = withDayFields(useOracleStore((s) => s.cards.find((c) => c.number === n)) ?? emptyCard(n));
	const updateCard = useOracleStore((s) => s.updateCard);
	const setLocalVideo = useOracleStore((s) => s.setLocalVideo);
	const clearLocalVideo = useOracleStore((s) => s.clearLocalVideo);
	const localVideoUrl = useOracleStore((s) => s.localVideoUrls[n]);
	const [draft, setDraft] = (0, import_react.useState)(stored);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const imageRef = (0, import_react.useRef)(null);
	const videoRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const current = useOracleStore.getState().cards.find((c) => c.number === n) ?? emptyCard(n);
		setDraft(withDayFields(current));
	}, [n]);
	const go = (num) => {
		navigate({
			to: "/studio/$number",
			params: { number: String(num) }
		});
	};
	const save = async (next = draft) => {
		const card = {
			...next,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		setDraft(card);
		await updateCard(card);
		toast("Карта сохранена");
	};
	const onImage = async (file) => {
		if (!file) return;
		setBusy(true);
		try {
			const imageData = await compressImageFile(file);
			const next = {
				...draft,
				imageData,
				updatedAt: (/* @__PURE__ */ new Date()).toISOString()
			};
			setDraft(next);
			await updateCard(next);
			toast("Фото загружено");
		} catch {
			toast("Не удалось прочитать фото");
		} finally {
			setBusy(false);
		}
	};
	const onVideo = async (file) => {
		if (!file) return;
		if (file.size > 50331648) {
			toast("Видео больше 48 МБ — сожмите его или вставьте ссылку");
			return;
		}
		setBusy(true);
		try {
			await setLocalVideo(n, file);
			toast("Видео загружено");
		} catch {
			toast("Не удалось сохранить видео");
		} finally {
			setBusy(false);
		}
	};
	const prev = n === 1 ? 108 : n - 1;
	const next = n === 108 ? 1 : n + 1;
	const preview = {
		...stored,
		...draft
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,18rem)_1fr] lg:items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-xs self-start lg:max-w-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LivingMedia, {
				card: preview,
				localVideoUrl,
				className: "aspect-card w-full",
				autoPlay: false
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-center text-xs text-muted-foreground",
				children: "Так карта выглядит в раскладе"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs tracking-card text-muted-foreground tabular-nums",
				children: ["Карта ", padCardNumber(n)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl leading-tight",
				children: cardDisplayTitle(preview)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-8 grid gap-5",
				onSubmit: (e) => {
					e.preventDefault();
					save();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "title",
							children: "Название"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "title",
							value: draft.title,
							onChange: (e) => setDraft({
								...draft,
								title: e.target.value
							}),
							placeholder: "Имя карты"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "keywords",
							children: "Ключевые слова"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "keywords",
							value: draft.keywords,
							onChange: (e) => setDraft({
								...draft,
								keywords: e.target.value
							}),
							placeholder: "через запятую"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "description",
							children: "Описание в книге"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "description",
							value: draft.description,
							onChange: (e) => setDraft({
								...draft,
								description: e.target.value
							}),
							placeholder: "Смысл карты, послание, как её читать"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 border border-gold/20 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] tracking-[0.22em] text-gold uppercase",
								children: "Нить дня — отдельные поля"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "dayLine",
									children: "Строка дня"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "dayLine",
									value: draft.dayLine ?? "",
									onChange: (e) => setDraft({
										...draft,
										dayLine: e.target.value
									}),
									placeholder: "Одна фраза"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "dayLooks",
									children: "Как выглядит день"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "dayLooks",
									value: draft.dayLooks ?? "",
									onChange: (e) => setDraft({
										...draft,
										dayLooks: e.target.value
									}),
									placeholder: "Два–три предложения"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "dayDo",
									children: "Сегодня"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "dayDo",
									value: draft.dayDo ?? "",
									onChange: (e) => setDraft({
										...draft,
										dayDo: e.target.value
									}),
									placeholder: "Одно действие"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "dayAvoid",
									children: "Не сегодня"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "dayAvoid",
									value: draft.dayAvoid ?? "",
									onChange: (e) => setDraft({
										...draft,
										dayAvoid: e.target.value
									}),
									placeholder: "Одна ловушка"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Фото карты" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "outline",
									disabled: busy,
									onClick: () => imageRef.current?.click(),
									children: "Загрузить фото"
								}), draft.imageData ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "ghost",
									onClick: () => {
										const nextCard = {
											...draft,
											imageData: null
										};
										setDraft(nextCard);
										save(nextCard);
									},
									children: "Убрать фото"
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: imageRef,
								type: "file",
								accept: "image/*",
								className: "hidden",
								tabIndex: -1,
								onChange: (e) => void onImage(e.target.files?.[0])
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Живое видео" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-relaxed text-muted-foreground",
								children: "Короткий ролик сохраняется в колоде и оживляет карту. Ссылка YouTube / Rutube / Vimeo тоже подойдёт, если файл большой."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "outline",
									disabled: busy,
									onClick: () => videoRef.current?.click(),
									children: "Загрузить видео"
								}), localVideoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "ghost",
									onClick: () => void clearLocalVideo(n),
									children: "Убрать файл"
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: videoRef,
								type: "file",
								accept: "video/*",
								className: "hidden",
								tabIndex: -1,
								onChange: (e) => void onVideo(e.target.files?.[0])
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: draft.videoUrl,
								onChange: (e) => setDraft({
									...draft,
									videoUrl: e.target.value
								}),
								placeholder: "https://youtu.be/… или прямая ссылка на файл"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: busy,
							children: "Сохранить"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/card/$number",
								params: { number: String(n) },
								children: "Открыть как гость"
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					onClick: () => go(prev),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCutBack, {}), padCardNumber(prev)]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					onClick: () => go(next),
					children: [padCardNumber(next), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconDrop, {})]
				})]
			})
		] })]
	}) });
}
//#endregion
export { StudioCardPage as component };
