import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { IconCutBack, IconCutForward } from "@/components/brand-icons";
import { AppShell } from "@/components/app-shell";
import { CardSwipe } from "@/components/card-swipe";
import { LivingMedia } from "@/components/living-media";
import { Button } from "@/components/ui/button";
import { DECK_SIZE, cardDisplayTitle, emptyCard, padCardNumber } from "@/lib/oracle/types";
import { useOracleStore } from "@/lib/oracle/store";

export const Route = createFileRoute("/card/$number")({
  beforeLoad: ({ params }) => {
    const n = Number(params.number);
    if (!Number.isInteger(n) || n < 1 || n > DECK_SIZE) throw notFound();
  },
  head: ({ params }) => {
    const n = Number(params.number);
    const title = `Карта ${String(n).padStart(3, "0")} | Полотно Макоши`;
    const description = `Авторское значение карты ${n} колоды Полотно Макоши.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `https://temnoiar.ru/card/${n}` },
      ],
      links: [{ rel: "canonical", href: `https://temnoiar.ru/card/${n}` }],
    };
  },
  component: CardPage,
});

function rememberCard(n: number) {
  try {
    window.sessionStorage.setItem("makosh-last-card", String(n));
  } catch {
    /* ignore */
  }
}

function CardPage() {
  const { number: raw } = Route.useParams();
  const n = Number(raw);
  if (!Number.isInteger(n) || n < 1 || n > DECK_SIZE) {
    throw notFound();
  }
  const card = useOracleStore((s) => s.cards.find((c) => c.number === n)) ?? emptyCard(n);
  const localVideoUrl = useOracleStore((s) => s.localVideoUrls[n]);
  const ensureVideo = useOracleStore((s) => s.ensureVideo);
  const prev = n === 1 ? DECK_SIZE : n - 1;
  const next = n === DECK_SIZE ? 1 : n + 1;

  useEffect(() => {
    rememberCard(n);
    void ensureVideo(n);
  }, [n, ensureVideo]);

  return (
    <AppShell>
      <CardSwipe number={n} className="mx-auto max-w-4xl">
        <article className="grid gap-10 md:grid-cols-[minmax(0,22rem)_1fr] md:items-start">
          <div className="flex items-center gap-1">
            <Link
              to="/card/$number"
              params={{ number: String(prev) }}
              replace
              aria-label="Предыдущая карта"
              className="flex size-12 shrink-0 items-center justify-center text-foreground hover-stitch"
            >
              <IconCutBack className="size-6" />
            </Link>
            <LivingMedia
              card={card}
              localVideoUrl={localVideoUrl}
              className="aspect-card min-w-0 flex-1 self-start"
            />
            <Link
              to="/card/$number"
              params={{ number: String(next) }}
              replace
              aria-label="Следующая карта"
              className="flex size-12 shrink-0 items-center justify-center text-foreground hover-stitch"
            >
              <IconCutForward className="size-6" />
            </Link>
          </div>
          <div className="max-w-xl">
            <Link to="/deck" hash={`card-${n}`} className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <IconCutBack />
              Назад к книге
            </Link>
            <p className="overline tabular-nums">{padCardNumber(card.number)}</p>
            <h1 className="mt-3 font-display text-5xl tracking-[0.08em] text-sand sm:text-6xl">{cardDisplayTitle(card)}</h1>
            <div className="gold-rule mt-5 w-16" />
            {card.keywords ? (
              <ul className="mt-5 flex flex-wrap gap-2">
                {card.keywords
                  .split(/[,;]/)
                  .map((tag) => tag.trim())
                  .filter(Boolean)
                  .map((tag) => (
                    <li key={tag} className="border border-gold/40 px-2 py-1 text-[11px] tracking-wide text-gold">
                      {tag}
                    </li>
                  ))}
              </ul>
            ) : null}
            {card.description ? (
              <>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  Авторская символическая интерпретация, не доказательство событий, диагноза или чужого воздействия.
                </p>
                <p className="mt-4 whitespace-pre-line text-base leading-relaxed">{card.description}</p>
              </>
            ) : (
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Эта нить ещё молчит. Текст придёт, когда Пряха вплетёт её в полотно.
              </p>
            )}
            <div className="mt-10 flex flex-wrap gap-2">
              <Button asChild variant="outline">
                <Link to="/deck" hash={`card-${n}`}>
                  К книге
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </CardSwipe>
    </AppShell>
  );
}
