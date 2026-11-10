import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cardDisplayTitle, o as padCardNumber } from "./types-BvDlfgVm.mjs";
import { w as useOracleStore } from "./sound-7Pi6hGxL.mjs";
import { t as AppShell } from "./app-shell-CPrj1ZqK.mjs";
import { l as spreadTitle } from "./router-_j2bSlSF.mjs";
import { a as mergeJournal, c as saveJournal, i as loadJournal, l as updateJournalNote, n as journalOverSoftLimit, r as journalSaveStatus, s as removeJournalEntry } from "./journal-BqmxmrV3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journal-BTWqk3iD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function formatDate(iso, dayOnly = false) {
	try {
		return new Intl.DateTimeFormat("ru", {
			day: "numeric",
			month: "long",
			...dayOnly ? {} : {
				hour: "2-digit",
				minute: "2-digit"
			}
		}).format(new Date(iso));
	} catch {
		return iso;
	}
}
function JournalPage() {
	const cards = useOracleStore((s) => s.cards);
	const [entries, setEntries] = (0, import_react.useState)(() => loadJournal());
	const [query, setQuery] = (0, import_react.useState)("");
	const visible = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (!q) return entries;
		return entries.filter((entry) => entry.question.toLowerCase().includes(q) || (entry.note ?? "").toLowerCase().includes(q) || (entry.dayLine ?? "").toLowerCase().includes(q));
	}, [entries, query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, {
		scene: "casket",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "max-w-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-title text-[2.6rem] sm:text-5xl",
					children: "Архив"
				}),
				journalOverSoftLimit(entries) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-md text-sm text-sand",
					children: [
						"Записей уже ",
						entries.length,
						". Старые не удаляются. Сохраните копию, если телефон начнёт отказывать в записи."
					]
				}) : null,
				journalSaveStatus() !== "ok" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-sand",
					children: "Не удалось записать на это устройство. Экспортируйте архив, пока он открыт."
				}) : null,
				entries.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-sm text-sand",
						onClick: () => {
							const blob = new Blob([JSON.stringify(entries, null, 2)], { type: "application/json" });
							const url = URL.createObjectURL(blob);
							const link = document.createElement("a");
							link.href = url;
							link.download = "polotno-dnevnik.json";
							link.click();
							URL.revokeObjectURL(url);
						},
						children: "Скачать JSON"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "cursor-pointer text-sm text-sand",
						children: ["Вставить копию", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: "application/json",
							className: "sr-only",
							onChange: (event) => {
								const file = event.target.files?.[0];
								event.target.value = "";
								if (!file) return;
								file.text().then((raw) => {
									const parsed = JSON.parse(raw);
									if (!Array.isArray(parsed)) return;
									const { entries: next, added } = mergeJournal(entries, parsed);
									if (saveJournal(next)) setEntries(next);
									else setEntries(loadJournal());
									window.alert(added ? `Добавлено записей: ${added}. Существующие не перезаписаны.` : "Новых записей нет.");
								}).catch(() => window.alert("Файл не прочитался."));
							}
						})]
					})]
				}) : null,
				entries.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-6 block text-sm text-muted-foreground",
					children: ["Поиск по вопросу", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						className: "field-ink mt-2 h-12 w-full max-w-sm px-1 text-sm"
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground",
					children: [
						"Ларец ещё пуст.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/reading",
							className: "text-sand",
							children: "Сплести нить"
						})
					]
				})
			]
		}), entries.length && visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-10 text-sm text-muted-foreground",
			children: "Нить не нашлась."
		}) : visible.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-16 max-w-xl space-y-16",
			children: visible.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "knot-entry",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/scenes/knot.webp",
						alt: "",
						className: "knot-prop"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: formatDate(entry.createdAt, entry.kind === "day")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-2xl text-sand",
								children: entry.kind === "day" ? "Нить дня" : spreadTitle(entry.spread, entry.cards.length)
							}),
							entry.kind === "day" && entry.dayLine ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-xl text-sand",
								children: entry.dayLine
							}) : entry.question && entry.kind !== "day" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: [
									"«",
									entry.question,
									"»"
								]
							}) : null
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								if (!window.confirm("Удалить эту запись?")) return;
								setEntries(removeJournalEntry(entry.id));
							},
							className: "text-xs text-muted-foreground hover:text-sand",
							children: "Удалить"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-5 flex flex-wrap gap-2",
						children: entry.cards.map((num) => {
							const card = cards.find((c) => c.number === num);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/card/$number",
								params: { number: String(num) },
								className: "block w-16",
								children: [card?.imageData ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: card.imageData,
									alt: "",
									className: "card-on-page aspect-card w-full object-cover"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex aspect-card items-center justify-center bg-card text-[10px] text-muted-foreground",
									children: padCardNumber(num)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block truncate text-[10px] text-sand",
									children: card ? cardDisplayTitle(card) : `Карта ${num}`
								})]
							}) }, `${entry.id}-${num}`);
						})
					}),
					entry.weaving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm leading-[1.6]",
						children: entry.weaving
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						defaultValue: entry.note ?? "",
						placeholder: "Своя заметка к раскладу",
						onBlur: (e) => setEntries(updateJournalNote(entry.id, e.target.value)),
						className: "field-ink mt-5 min-h-20 w-full px-0 py-2 text-sm"
					})
				]
			}, entry.id))
		}) : null]
	});
}
//#endregion
export { JournalPage as component };
