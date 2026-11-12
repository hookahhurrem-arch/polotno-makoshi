import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { CardTile } from "@/components/card-tile";
import { ConsultForm } from "@/components/consult-form";
import { Rise } from "@/components/rise";
import { ThreadOfDay } from "@/components/thread-of-day";
import { WeaverHero } from "@/components/weaver-hero";
import { AUTHOR_IMAGE } from "@/lib/oracle/seed";
import { useOracleStore } from "@/lib/oracle/store";
import { isCardFilled } from "@/lib/oracle/types";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Полотно Макоши" },
      {
        name: "description",
        content: "Славянская колода-оракул Полотно Макоши: 108 нитей, нить дня, обучение схемам и консультация Темнояра.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const cards = useOracleStore((s) => s.cards);
  const preview = cards.filter(isCardFilled).slice(0, 6);

  return (
    <AppShell className="home-shell !max-w-none !px-0 !pt-0">
      <WeaverHero />
      <div className="home-loom">
        <Rise>
          <ThreadOfDay />
        </Rise>

        <Rise>
          <section className="loom-block">
            <p className="overline">Колода</p>
            <h2>Что такое Полотно Макоши</h2>
            <p className="ink">Сто восемь нитей. Одна ткань судьбы. Каждая карта показывает, как сейчас переплелись нити, а не приговор на камне.</p>
            <Link to="/about" className="text-link">
              Читать о Полотне
            </Link>
          </section>
        </Rise>

        <Rise>
          <section className="loom-block">
            <p className="overline">Три шага</p>
            <h2>Как работать с колодой</h2>
            <ol className="step-list">
              <li>
                <span>01</span>
                Откройте нить дня. Это один символ суток, не прогноз до полуночи.
              </li>
              <li>
                <span>02</span>
                В обучении посмотрите, какая схема под какой вопрос.
              </li>
              <li>
                <span>03</span>
                Личный узел разбирается на консультации, не общей кнопкой.
              </li>
            </ol>
            <Link to="/learn" className="btn-cloth">
              Открыть обучение
            </Link>
          </section>
        </Rise>

        <Rise>
          <section className="loom-block">
            <p className="overline">108 нитей</p>
            <h2>Карты колоды</h2>
            <div className="card-rail">
              {preview.map((card) => (
                <CardTile key={card.number} card={card} />
              ))}
            </div>
            <Link to="/deck" className="btn-cloth">
              Открыть гримуар
            </Link>
          </section>
        </Rise>

        <Rise>
          <section className="loom-block author-band">
            <img src={AUTHOR_IMAGE} alt="Темнояр — Дмитрий" className="author-portrait" />
            <div>
              <p className="overline">Автор</p>
              <h2>Темнояр</h2>
              <p className="ink">
                Колоду издаёт Дмитрий. Ведёт её и блог как Темнояр: яркая сила из тьмы, тёмное начало, соединённое с огненной силой.
              </p>
              <Link to="/about" className="text-link">
                Об авторе
              </Link>
            </div>
          </section>
        </Rise>

        <Rise>
          <section className="loom-block" id="consult">
            <p className="overline">Консультация</p>
            <h2>Разобрать свою ситуацию</h2>
            <p className="ink">
              Живой разбор запроса и, если нужно, фото — уже в переписке. Без гарантии исхода и без лечения. Стоимость согласуется лично. [УТОЧНИТЬ У ДМИТРИЯ]
            </p>
            <ConsultForm />
          </section>
        </Rise>

        <Rise>
          <section className="loom-block">
            <p className="overline">Предмет</p>
            <h2>108 нитей в руках</h2>
            <p className="ink">Тираж готовится. Цены и даты выхода на сайте нет: их назовёт Темнояр. Можно оставить интерес через заявку.</p>
            <Link to="/consult" className="btn-ghost">
              Сообщить об интересе к колоде
            </Link>
          </section>
        </Rise>

        <Rise>
          <section className="loom-block">
            <p className="overline">Миф</p>
            <h2>Как прядётся судьба</h2>
            <ol className="myth-list">
              <li>Макошь не высекает приговор. Она прядёт полотно.</li>
              <li>В нить входят предки, поступки, ошибки и чужие вмешательства.</li>
              <li>Где-то затягивается узел, где-то вплетается чужая нитка.</li>
              <li>В полотне есть и шёлк радости, и жёсткая тёмная пряжа.</li>
            </ol>
          </section>
        </Rise>

        <Rise>
          <section className="loom-block">
            <p className="overline">Вопрос</p>
            <h2>Как задавать вопрос</h2>
            <p className="ink">
              Один вопрос — одна схема. Формулируйте событие, а не «всю жизнь». Карта дня не обещает, что случится до полуночи. Она держит внимание на одном образе.
            </p>
          </section>
        </Rise>
      </div>
    </AppShell>
  );
}
