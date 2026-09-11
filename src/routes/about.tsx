import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { DECK_ABOUT, DECK_WELCOME } from "@/lib/oracle/deck-data";
import { AUTHOR_IMAGE } from "@/lib/oracle/seed";
import { isCardFilled } from "@/lib/oracle/types";
import { useOracleStore } from "@/lib/oracle/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  const settings = useOracleStore((s) => s.settings);
  const cards = useOracleStore((s) => s.cards);
  const filled = cards.filter(isCardFilled).length;
  const aboutBlocks = DECK_ABOUT.split("\n\n");

  return (
    <AppShell>
      <article className="max-w-xl">
        <p className="overline">О Полотне</p>
        <h1 className="display-title mt-4 text-[2.8rem] sm:text-6xl">О Полотне</h1>
        <div className="gold-rule mt-5 w-20" />
        <p className="mt-5 text-base leading-[1.6] text-muted-foreground">{settings.tagline}</p>
        <p className="drop-cap mt-10 text-base leading-[1.65]">{DECK_WELCOME}</p>
        {aboutBlocks.map((para, i) => (
          <div key={para.slice(0, 24)}>
            {i > 0 ? <div className="gold-split" /> : null}
            <p className={cn("mt-0 text-base leading-[1.65]", i === 0 && "drop-cap")}>{para}</p>
          </div>
        ))}

        <div className="gold-split" />

        <p className="text-sm leading-[1.6] text-muted-foreground">
          Сто восемь карт. Вплетено {filled} из 108. Ткач читает ядро карт и плетёт один сюжет под вопрос — одна нить,
          узел, чужая нитка, две нити или кросна.
        </p>

        <section className="mt-16">
          <p className="overline">Автор</p>
          <h2 className="mt-3 font-display text-4xl tracking-[0.1em] text-sand">Темнояр</h2>
          <div className="gold-rule mt-4 w-16" />
          <div className="gramota mt-8 overflow-hidden">
            <img
              src={AUTHOR_IMAGE}
              alt="Темнояр — Дмитрий"
              className="aspect-[2/3] w-full max-w-sm object-cover object-[center_20%]"
            />
          </div>
          <p className="drop-cap mt-8 text-base leading-[1.65]">
            Колоду издаёт Дмитрий. Ведёт её и блог как Темнояр.
          </p>
          <div className="gold-split" />
          <p className="text-base leading-[1.65]">
            Дмитрий — земля и плодородие, хтоническое начало Деметры: то, что всходит из тьмы почвы. Отсюда Митя,
            Митрей — короткое, домашнее, своё.
          </p>
          <div className="gold-split" />
          <p className="text-base leading-[1.65]">
            Темнояр читается иначе: яркая сила из тьмы; тот, в ком тёмное начало соединено с огненной силой. Это уже не
            перевод имени, а магическое имя-отражение.
          </p>
          <p className="mt-8 text-base leading-[1.6] text-muted-foreground">
            Нить имени: Дмитрий → Митя → Митрей → земное, плодородное → Темнояр.
          </p>
        </section>

        <div className="mt-16 flex flex-wrap gap-2">
          <Button asChild>
            <Link to="/reading">Вытянуть нить</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/deck">Открыть книгу</Link>
          </Button>
        </div>
      </article>
    </AppShell>
  );
}
