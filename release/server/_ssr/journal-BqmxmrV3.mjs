//#region node_modules/.nitro/vite/services/ssr/assets/journal-BqmxmrV3.js
var KEY = "living-oracle-journal-v1";
function loadJournal() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
var SOFT_LIMIT = 80;
var lastSave = "ok";
function journalSaveStatus() {
	return lastSave;
}
function saveJournal(entries) {
	try {
		window.localStorage.setItem(KEY, JSON.stringify(entries));
		lastSave = "ok";
		return true;
	} catch (error) {
		lastSave = error instanceof DOMException && (error.name === "QuotaExceededError" || error.name === "NS_ERROR_DOM_QUOTA_REACHED") ? "quota" : "blocked";
		return false;
	}
}
function journalOverSoftLimit(entries) {
	return entries.length >= SOFT_LIMIT;
}
function addJournalEntry(entry) {
	const next = [entry, ...loadJournal().filter((item) => item.id !== entry.id)];
	saveJournal(next);
	return next;
}
function rememberDayThread(input) {
	return addJournalEntry({
		id: `day-${input.date}`,
		createdAt: `${input.date}T12:00:00`,
		question: "Нить дня",
		spread: "one",
		cards: [input.number],
		kind: "day",
		dayLine: input.dayLine
	});
}
function removeJournalEntry(id) {
	const next = loadJournal().filter((entry) => entry.id !== id);
	saveJournal(next);
	return next;
}
function updateJournalNote(id, note) {
	const next = loadJournal().map((entry) => entry.id === id ? {
		...entry,
		note
	} : entry);
	saveJournal(next);
	return next;
}
function mergeJournal(current, incoming) {
	const seen = new Set(current.map((entry) => entry.id));
	const fresh = incoming.filter((entry) => entry && typeof entry.id === "string" && entry.id && !seen.has(entry.id));
	return {
		entries: [...fresh, ...current].sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
		added: fresh.length
	};
}
//#endregion
export { mergeJournal as a, saveJournal as c, loadJournal as i, updateJournalNote as l, journalOverSoftLimit as n, rememberDayThread as o, journalSaveStatus as r, removeJournalEntry as s, addJournalEntry as t };
