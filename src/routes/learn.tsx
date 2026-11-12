import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Rise } from "@/components/rise";
import { SPREADS } from "@/lib/oracle/spreads";

export const Route = createFileRoute("/learn")({
  head: () => ({
    meta: [
      { title: "Обучение — Полотно Макоши" },
      {
        name: "description",
        content: "Шесть схем колоды Полотно Макоши: когда какая уместна и что значит каждая позиция. Без запуска расклада.",
      },
    ],
  }),
  component: LearnPage,
});

const LESSONS: Record<string, { when: string; ask: string; notes: string[] }> = {
  one: {
    when: "Вопрос один и узкий. Не портрет всей жизни, а одна нить.",
    ask: "Стоит ли завтра поднимать этот разговор?",
    notes: ["Карта отвечает на спрошенное, а не на соседние темы."],
  },
  three: {
    when: "Нужно увидеть ход: откуда началось, что повернуло и куда тянет сейчас.",
    ask: "Как пройдёт завтрашнее собрание?",
    notes: [
      "С чего ситуация сдвинулась.",
      "Что изменило направление.",
      "К чему ведёт нынешняя линия, если её не трогать.",
    ],
  },
  knot: {
    when: "Ситуация застряла, и непонятно, что её держит.",
    ask: "Почему это никак не заканчивается?",
    notes: [
      "Первопричина узла.",
      "Что не даёт ему развязаться.",
      "Где смысл перепутан.",
      "Какое действие выводит из узла.",
    ],
  },
  foreign: {
    when: "Кажется, что в дело вошёл кто-то третий или чужое намерение.",
    ask: "Есть ли здесь чужая рука?",
    notes: ["Есть ли вмешательство.", "Как оно действует.", "К чему тянет, если его не замечать."],
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
      "Куда ведёт её линия.",
    ],
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
      "Итоговая нить.",
    ],
  },
};

function LearnPage() {
  return (
    <AppShell scene="table">
      <article className="learn-page">
        <header className="max-w-xl">
          <p className="overline">Обучение</p>
          <h1 className="display-title mt-3">Как читать ткань</h1>
          <p className="ink mt-5">
            Колода читается как полотно. Разные схемы — разные вопросы. Здесь только устройство раскладов: живой разбор своей ситуации делается на консультации, а не кнопкой на сайте.
          </p>
        </header>
        <div className="mt-12 flex flex-col gap-10">
          {SPREADS.map((spread) => (
            <Rise key={spread.id}>
              <Lesson id={spread.id} title={spread.title} roles={spread.roles} />
            </Rise>
          ))}
        </div>
        <Rise>
          <aside className="loom-note mt-14">
            <p className="ink">
              Учебная схема не заменяет личный разбор. Если нужен ответ именно по вашей ситуации — запишитесь к Темнояру. Когда колода будет в руках, эти схемы вы соберёте сами.
            </p>
            <Link to="/consult" className="btn-cloth mt-6">
              Записаться на консультацию
            </Link>
          </aside>
        </Rise>
      </article>
    </AppShell>
  );
}

function Lesson({ id, title, roles }: { id: string; title: string; roles: string[] }) {
  const lesson = LESSONS[id];
  const [active, setActive] = useState(0);
  if (!lesson) return null;
  return (
    <section className="lesson" id={id}>
      <h2>{title}</h2>
      <p className="ink mt-3">{lesson.when}</p>
      <p className="mt-2 text-base text-gold">Пример вопроса: «{lesson.ask}»</p>
      <div className="lesson-loom" role="list">
        {roles.map((role, index) => (
          <button
            key={role}
            type="button"
            role="listitem"
            className={active === index ? "is-on" : ""}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
          >
            <span>{index + 1}</span>
            {role}
          </button>
        ))}
      </div>
      <p className="ink mt-4">{lesson.notes[active] ?? lesson.notes[0]}</p>
    </section>
  );
}
