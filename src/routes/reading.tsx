import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { IconCutBack } from "@/components/brand-icons";
import { AppShell } from "@/components/app-shell";
import { CardBack } from "@/components/card-back";
import { LivingMedia } from "@/components/living-media";
import { SpreadForm } from "@/components/spread-form";
import { WeaveRitual } from "@/components/weave-ritual";
import { WeaverPanel } from "@/components/weaver-panel";
import { Button } from "@/components/ui/button";
import { addJournalEntry } from "@/lib/oracle/journal";
import { idsFromSearch, saveLastReading, searchFromIds } from "@/lib/oracle/last-reading";
import { shareSpread } from "@/lib/oracle/share";
import { playRustle, playThud, tapPulse } from "@/lib/oracle/sound";
import { parseSpreadId, spreadById } from "@/lib/oracle/spreads";
import {
  isCardFilled,
  cardDisplayTitle,
  type OracleCard,
  type SpreadKind,
} from "@/lib/oracle/types";
import { useOracleStore } from "@/lib/oracle/store";
import { cn } from "@/lib/utils";

type ReadingSearch = {
  s?: SpreadKind;
  n?: number;
  q?: string;
  go?: boolean;
  c1?: number;
  c2?: number;
  c3?: number;
  c4?: number;
  c5?: number;
  c6?: number;
  c7?: number;
  c8?: number;
  c9?: number;
};

export const Route = createFileRoute("/reading")({
  validateSearch: (search: Record<string, unknown>): ReadingSearch => ({
    s: parseSpreadId(search.s, search.n),
    n: typeof search.n === "number" ? search.n : undefined,
    q: typeof search.q === "string" ? search.q : undefined,
    go: search.go === true || search.go === "true" || search.go === 1 || search.go === "1",
    c1: parseCardNum(search.c1 ?? search.c),
    c2: parseCardNum(search.c2),
    c3: parseCardNum(search.c3),
    c4: parseCardNum(search.c4),
    c5: parseCardNum(search.c5),
    c6: parseCardNum(search.c6),
    c7: parseCardNum(search.c7),
    c8: parseCardNum(search.c8),
    c9: parseCardNum(search.c9),
  }),
  component: ReadingPage,
});

function shuffle<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const a = next[i]!;
    next[i] = next[j]!;
    next[j] = a;
  }
  return next;
}

function drawCards(all: OracleCard[], count: number): OracleCard[] {
  const filled = all.filter(isCardFilled);
  const source = filled.length >= count ? filled : all;
  return shuffle(source).slice(0, count);
}

function parseCardNum(value: unknown): number | undefined {
  const raw = Array.isArray(value) ? value[0] : value;
  const n = typeof raw === "number" ? raw : typeof raw === "string" ? Number(String(raw).replace(/[^\d]/g, "")) : NaN;
  if (Number.isInteger(n) && n >= 1 && n <= 108) return n;
  return undefined;
}

function ReadingPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const cards = useOracleStore((s) => s.cards);
  const localVideoUrls = useOracleStore((s) => s.localVideoUrls);
  const def = spreadById(search.s);
  const count = def.count;
  const kind = def.id;
  const question = search.q?.trim() ?? "";
  const filledCount = cards.filter(isCardFilled).length;
  const urlIds = idsFromSearch(search).slice(0, count);

  const [localIds, setLocalIds] = useState<number[] | null>(null);
  const [saved, setSaved] = useState(false);
  const [weaving, setWeaving] = useState("");
  const [round, setRound] = useState(0);
  const [ritual, setRitual] = useState(false);
  const [opened, setOpened] = useState<boolean[]>(() => Array.from({ length: count }, () => false));

  const lockedIds = urlIds.length === count ? urlIds : localIds?.length === count ? localIds : [];

  const finishRitual = useCallback(() => setRitual(false), []);

  useEffect(() => {
    if (!search.go) return;
    if (lockedIds.length === count) {
      saveLastReading(searchFromIds(kind, question, lockedIds));
      if (urlIds.length !== count && localIds?.length === count) {
        void navigate({ to: "/reading", search: searchFromIds(kind, question, localIds), replace: true });
      }
      return;
    }
    if (filledCount < count && cards.length < count) return;
    const picked = drawCards(cards, count).map((card) => card.number);
    setLocalIds(picked);
    setRitual(true);
    setOpened(Array.from({ length: count }, () => false));
    playRustle();
    tapPulse(12);
    const next = searchFromIds(kind, question, picked);
    saveLastReading(next);
    void navigate({ to: "/reading", search: next, replace: true });
  }, [search.go, count, lockedIds.length, urlIds.length, localIds, filledCount, cards, question, navigate, kind]);

  const drawn = useMemo(() => {
    if (lockedIds.length !== count) return null;
    const found = lockedIds
      .map((id) => cards.find((card) => card.number === id))
      .filter((card): card is OracleCard => Boolean(card));
    return found.length === count ? found : null;
  }, [lockedIds, cards, count]);

  const revealed = drawn ?? [];
  const allOpen = opened.length === count && opened.every(Boolean);
  const weaveKey = `${round}-${lockedIds.join("-")}`;

  useEffect(() => {
    setOpened(Array.from({ length: count }, () => false));
  }, [weaveKey, count]);

  const save = () => {
    if (!drawn?.length || saved) return;
    addJournalEntry({
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      question,
      spread: kind,
      cards: drawn.map((card) => card.number),
      weaving: weaving || undefined,
    });
    setSaved(true);
    toast("Расклад сохранён в дневник");
  };

  const share = async () => {
    if (!drawn?.length) return;
    try {
      await shareSpread({
        deck: "Полотно Макоши",
        question,
        cards: drawn,
        weaving,
      });
    } catch {
      toast("Не удалось поделиться");
    }
  };

  const again = () => {
    const picked = drawCards(cards, count).map((card) => card.number);
    setLocalIds(picked);
    setSaved(false);
    setWeaving("");
    setRound((r) => r + 1);
    setRitual(true);
    setOpened(Array.from({ length: count }, () => false));
    playRustle();
    const next = searchFromIds(kind, question, picked);
    saveLastReading(next);
    void navigate({ to: "/reading", search: next, replace: true });
  };

  const openCard = (index: number) => {
    if (opened[index]) return;
    playThud();
    tapPulse(18);
    setOpened((prev) => prev.map((v, i) => (i === index ? true : v)));
  };

  return (
    <AppShell>
      <div className="mx-auto max-w-4xl">
        {drawn ? (
          <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-sand">
            <IconCutBack />
            Назад
          </Link>
        ) : null}
        <p className="overline">{def.title}</p>
        {drawn ? <h1 className="display-title mt-4 text-[2.4rem] sm:text-5xl">Полотно отвечает</h1> : null}
        <div className="gold-rule mt-5 w-20" />
        {drawn && question ? (
          <p className="mt-5 max-w-xl text-base leading-[1.6] text-muted-foreground">«{question}»</p>
        ) : null}

        {!search.go && !drawn ? (
          <div className="mt-16">
            <SpreadForm defaultQuestion={question} defaultSpread={kind} />
          </div>
        ) : search.go && (!drawn || ritual) ? (
          <WeaveRitual onDone={finishRitual} />
        ) : drawn ? (
          <div className="mt-16">
            <div className={cn("mx-auto grid justify-center gap-3", def.layout)}>
              {revealed.map((card, i) => {
                const filled = isCardFilled(card);
                const isOpen = opened[i];
                return (
                  <article
                    key={`${card.number}-${i}`}
                    className={cn(
                      "card-arrive w-full justify-self-center",
                      count === 1 ? "max-w-[16.5rem]" : count <= 3 ? "max-w-[7.4rem] sm:max-w-[10rem]" : "max-w-[6.4rem] sm:max-w-[8.5rem]",
                    )}
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <p className="mb-2 text-center text-[10px] tracking-[0.18em] text-gold uppercase">
                      {def.roles[i]}
                    </p>
                    <button type="button" onClick={() => openCard(i)} className="block w-full" aria-label={isOpen ? cardDisplayTitle(card) : "Перевернуть карту"}>
                      <div className="flip-scene aspect-card w-full">
                        <div className={cn("flip-card", isOpen && "is-open")}>
                          <div className="flip-face">
                            <CardBack className="size-full" />
                          </div>
                          <div className="flip-face flip-face-front" aria-hidden={!isOpen}>
                            {filled ? (
                              <LivingMedia
                                card={card}
                                localVideoUrl={localVideoUrls[card.number]}
                                className="size-full"
                                autoPlay={false}
                              />
                            ) : (
                              <CardBack className="size-full" />
                            )}
                            <span className="gleam" />
                          </div>
                        </div>
                      </div>
                    </button>
                    {isOpen ? (
                      <Link
                        to="/card/$number"
                        params={{ number: String(card.number) }}
                        className="mt-2 block text-center font-display text-sm leading-tight text-sand"
                      >
                        {cardDisplayTitle(card)}
                      </Link>
                    ) : (
                      <p className="mt-2 text-center text-xs text-muted-foreground">касанием</p>
                    )}
                  </article>
                );
              })}
            </div>

            {allOpen ? (
              <div className="slide-up mx-auto mt-4 max-w-xl">
                <WeaverPanel
                  key={weaveKey}
                  question={question}
                  cards={revealed}
                  roles={def.roles}
                  spread={kind}
                  autoStart
                  onWoven={setWeaving}
                />
                <div className="mt-10 flex flex-wrap gap-2">
                  <Button variant="outline" onClick={again}>
                    Ещё раз
                  </Button>
                  <Button onClick={save} disabled={saved}>
                    {saved ? "В дневнике" : "Сохранить в дневник"}
                  </Button>
                  <Button variant="outline" onClick={() => void share()}>
                    Поделиться
                  </Button>
                </div>
              </div>
            ) : (
              <p className="mt-8 text-center text-sm text-muted-foreground">Переверните все карты — Ткач выйдет снизу.</p>
            )}
          </div>
        ) : null}
      </div>
    </AppShell>
  );
}
