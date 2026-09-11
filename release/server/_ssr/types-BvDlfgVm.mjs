//#region node_modules/.nitro/vite/services/ssr/assets/types-BvDlfgVm.js
function padCardNumber(n) {
	return String(n).padStart(3, "0");
}
function cardDisplayTitle(card) {
	return card.title.trim() || `Карта ${padCardNumber(card.number)}`;
}
function isCardFilled(card) {
	return Boolean(card.title.trim() || card.keywords.trim() || card.description.trim() || card.imageData || card.videoUrl.trim());
}
function emptyCard(number) {
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
function withDayFields(card) {
	return {
		...emptyCard(card.number),
		...card,
		dayLine: card.dayLine ?? "",
		dayLooks: card.dayLooks ?? "",
		dayDo: card.dayDo ?? "",
		dayAvoid: card.dayAvoid ?? ""
	};
}
function emptyDeck() {
	return Array.from({ length: 108 }, (_, i) => emptyCard(i + 1));
}
var DEFAULT_SETTINGS = {
	name: "Полотно Макоши",
	author: "Темнояр",
	tagline: "108 нитей. Одна ткань судьбы.",
	intro: "Макошь — великая пряха, не судья на камне. Каждая карта показывает, как прямо сейчас переплелись нити вашей жизни: где затянулся узел, где вплелась чужая нитка, куда пойдёт узор, если ничего не менять.",
	seeded: false,
	mbkVersion: 0,
	updatedAt: (/* @__PURE__ */ new Date(0)).toISOString()
};
//#endregion
export { isCardFilled as a, emptyDeck as i, cardDisplayTitle as n, padCardNumber as o, emptyCard as r, withDayFields as s, DEFAULT_SETTINGS as t };
