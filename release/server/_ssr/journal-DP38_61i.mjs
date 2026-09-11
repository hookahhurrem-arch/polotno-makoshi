//#region node_modules/.nitro/vite/services/ssr/assets/journal-DP38_61i.js
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
function saveJournal(entries) {
	window.localStorage.setItem(KEY, JSON.stringify(entries.slice(0, 80)));
}
function addJournalEntry(entry) {
	const next = [entry, ...loadJournal().filter((item) => item.id !== entry.id)].slice(0, 80);
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
//#endregion
export { updateJournalNote as a, removeJournalEntry as i, loadJournal as n, rememberDayThread as r, addJournalEntry as t };
