import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as AppShell } from "./router-tnNsNnK_.mjs";
import { t as Rise } from "./rise-1DOrJT_S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn-CXMgCNIA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SPREADS = [
	{
		id: "one",
		count: 1,
		title: "Одна нить",
		hint: "Один ясный ответ",
		roles: ["Ответ"],
		layout: "grid-cols-1 max-w-[16.5rem]"
	},
	{
		id: "three",
		count: 3,
		title: "Три карты",
		hint: "Начало, поворот, исход",
		roles: [
			"Начало",
			"Поворот",
			"Исход"
		],
		layout: "grid-cols-3"
	},
	{
		id: "knot",
		count: 4,
		title: "Узел",
		hint: "Что завязалось и как развязать",
		roles: [
			"Что завязало",
			"Что держит",
			"Где путаница",
			"Как развязать"
		],
		layout: "grid-cols-2 max-w-md"
	},
	{
		id: "foreign",
		count: 3,
		title: "Чужая нитка",
		hint: "Есть ли вмешательство извне",
		roles: [
			"Есть ли чужое",
			"Как влияет",
			"К чему ведёт"
		],
		layout: "grid-cols-3"
	},
	{
		id: "two",
		count: 6,
		title: "Две нити",
		hint: "Два человека — две линии",
		roles: [
			"А думает",
			"А делает",
			"Куда ведёт А",
			"Б думает",
			"Б делает",
			"Куда ведёт Б"
		],
		layout: "grid-cols-3"
	},
	{
		id: "krosna",
		count: 9,
		title: "Кросна",
		hint: "Полный разбор полотна",
		roles: [
			"Суть",
			"Исток",
			"Скрытая причина",
			"Действие А",
			"Действие Б",
			"Скрытый фактор",
			"Перелом",
			"Ближайшее",
			"Итоговая нить"
		],
		layout: "grid-cols-3"
	}
];
var LESSONS = {
	one: {
		when: "Вопрос один и узкий. Не портрет всей жизни, а одна нить.",
		ask: "Стоит ли завтра поднимать этот разговор?",
		notes: ["Карта отвечает на спрошенное, а не на соседние темы."]
	},
	three: {
		when: "Нужно увидеть ход: откуда началось, что повернуло и куда тянет сейчас.",
		ask: "Как пройдёт завтрашнее собрание?",
		notes: [
			"С чего ситуация сдвинулась.",
			"Что изменило направление.",
			"К чему ведёт нынешняя линия, если её не трогать."
		]
	},
	knot: {
		when: "Ситуация застряла, и непонятно, что её держит.",
		ask: "Почему это никак не заканчивается?",
		notes: [
			"Первопричина узла.",
			"Что не даёт ему развязаться.",
			"Где смысл перепутан.",
			"Какое действие выводит из узла."
		]
	},
	foreign: {
		when: "Кажется, что в дело вошёл кто-то третий или чужое намерение.",
		ask: "Есть ли здесь чужая рука?",
		notes: [
			"Есть ли вмешательство.",
			"Как оно действует.",
			"К чему тянет, если его не замечать."
		]
	},
	two: {
		when: "В вопросе двое, и их линии нельзя склеивать в одну.",
		ask: "Что сейчас происходит между нами?",
		notes: [
			"Что думает первая сторона.",
			"Что она делает.",
			"Куда ведёт её линия.",
			"Что думает вторая сторона.",
			"Что она делает.",
			"Куда ведёт её линия."
		]
	},
	krosna: {
		when: "Нужен обзор всего полотна, а не один короткий ответ.",
		ask: "Как устроена эта ситуация целиком?",
		notes: [
			"Суть.",
			"Исток.",
			"Скрытая причина.",
			"Действие первой стороны.",
			"Действие второй.",
			"Скрытый фактор.",
			"Перелом.",
			"Ближайшее.",
			"Итоговая нить."
		]
	}
};
function LearnPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		scene: "table",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "learn-page",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "overline",
							children: "Обучение"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "display-title mt-3",
							children: "Как читать ткань"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "ink mt-5",
							children: "Колода читается как полотно. Разные схемы — разные вопросы. Здесь только устройство раскладов: живой разбор своей ситуации делается на консультации, а не кнопкой на сайте."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 flex flex-col gap-10",
					children: SPREADS.map((spread) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rise, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lesson, {
						id: spread.id,
						title: spread.title,
						roles: spread.roles
					}) }, spread.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rise, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "loom-note mt-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "ink",
						children: "Учебная схема не заменяет личный разбор. Если нужен ответ именно по вашей ситуации — запишитесь к Темнояру. Когда колода будет в руках, эти схемы вы соберёте сами."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/consult",
						className: "btn-cloth mt-6",
						children: "Записаться на консультацию"
					})]
				}) })
			]
		})
	});
}
function Lesson({ id, title, roles }) {
	const lesson = LESSONS[id];
	const [active, setActive] = (0, import_react.useState)(0);
	if (!lesson) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "lesson",
		id,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "ink mt-3",
				children: lesson.when
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-base text-gold",
				children: [
					"Пример вопроса: «",
					lesson.ask,
					"»"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lesson-loom",
				role: "list",
				children: roles.map((role, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					role: "listitem",
					className: active === index ? "is-on" : "",
					onMouseEnter: () => setActive(index),
					onFocus: () => setActive(index),
					onClick: () => setActive(index),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: index + 1 }), role]
				}, role))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "ink mt-4",
				children: lesson.notes[active] ?? lesson.notes[0]
			})
		]
	});
}
//#endregion
export { LearnPage as component };
