import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { IconThreadKnot } from "@/components/brand-icons";
import { CardBack } from "@/components/card-back";
import { CardFace } from "@/components/card-face";
import {
  loadDayThread,
  localDateKey,
  officialDayReading,
  pickCardForDate,
  readingFromState,
  saveDayThread,
} from "@/lib/oracle/day-thread";
import { composeDayLocal, weaveDayThread, type DayReading } from "@/lib/oracle/day-weaver";
import { rememberDayThread } from "@/lib/oracle/journal";
import { playThud, tapPulse } from "@/lib/oracle/sound";
import { cardDisplayTitle, type OracleCard } from "@/lib/oracle/types";
import { useOracleStore } from "@/lib/oracle/store";
import { cn } from "@/lib/utils";

const FLIP_MS = 500;
const AFTER_FLIP_MS = 300;
const STAGGER_MS = 120;

function DayBlock({ reading, reveal }: { reading: DayReading; reveal: boolean }) {
  const delay = (index: number) => ({ animationDelay: reveal ? `${index * STAGGER_MS}ms` : "0ms" });
  return (
    <div className="mt-6 flex flex-col items-center">
      <p
        className={cn(
          "max-w-sm text-center font-display text-[1.85rem] leading-[1.15] tracking-[0.06em] text-sand sm:text-[2.15rem]",
          reveal && "day-rise",
        )}
        style={delay(0)}
      >
        {reading.dayLine}
      </p>
      <div className={cn("gold-rule mt-5 w-16", reveal && "day-rise")} style={delay(1)} />
      <p className={cn("mt-5 max-w-sm text-center text-base leading-[1.6]", reveal && "day-rise")} style={delay(2)}>
        {reading.dayLooks}
      </p>
      <div className={cn("day-do mt-7 w-full max-w-sm pl-4", reveal && "day-rise")} style={delay(3)}>
        <p className="text-[10px] tracking-[0.22em] text-gold uppercase">Сегодня</p>
        <p className="mt-2 text-sm leading-[1.6]">{reading.dayDo}</p>
      </div>
      <div className={cn("day-avoid mt-5 w-full max-w-sm pl-4", reveal && "day-rise")} style={delay(4)}>
        <p className="text-[10px] tracking-[0.22em] text-gold uppercase">Не сегодня</p>
        <p className="mt-2 text-sm leading-[1.6]">{reading.dayAvoid}</p>
      </div>
    </div>
  );
}

export function ThreadOfDay() {
  const cards = useOracleStore((s) => s.cards);
  const seed = pickCardForDate(cards, localDateKey());
  const [date, setDate] = useState(localDateKey);
  const [number, setNumber] = useState<number | null>(seed?.number ?? null);
  const [open, setOpen] = useState(false);
  const [settled, setSettled] = useState(false);
  const [textOn, setTextOn] = useState(false);
  const [busy, setBusy] = useState(false);
  const [reading, setReading] = useState<DayReading | null>(null);
  const weaving = useRef(false);

  const persist = (cardNumber: number, flipped: boolean, next: DayReading | null) => {
    saveDayThread({
      date: localDateKey(),
      number: cardNumber,
      flipped,
      dayLine: next?.dayLine,
      dayLooks: next?.dayLooks,
      dayDo: next?.dayDo,
      dayAvoid: next?.dayAvoid,
    });
    if (flipped && next?.dayLine) {
      rememberDayThread({ date: localDateKey(), number: cardNumber, dayLine: next.dayLine });
    }
  };

  const weave = async (card: OracleCard) => {
    if (weaving.current) return;
    const already = readingFromState(loadDayThread([card]));
    if (already) {
      setReading(already);
      persist(card.number, true, already);
      return;
    }
    weaving.current = true;
    const official = officialDayReading(card);
    if (official) {
      setReading(official);
      persist(card.number, true, official);
      weaving.current = false;
      return;
    }
    const cached = readingFromState(loadDayThread(cards));
    if (cached) {
      setReading(cached);
      persist(card.number, true, cached);
      weaving.current = false;
      return;
    }
    setBusy(true);
    const payload = {
      number: card.number,
      title: card.title,
      keywords: card.keywords,
      description: card.description.split(/\n+/)[0]?.slice(0, 500) ?? "",
    };
    try {
      const result = await weaveDayThread({ data: payload });
      const next = result.reading;
      setReading(next);
      persist(card.number, true, next);
    } catch {
      const next = composeDayLocal(payload);
      setReading(next);
      persist(card.number, true, next);
    } finally {
      weaving.current = false;
      setBusy(false);
    }
  };

  useEffect(() => {
    const apply = () => {
      const today = localDateKey();
      const state = loadDayThread(cards);
      if (!state) return;
      setDate(state.date);
      setNumber(state.number);
      setOpen(state.flipped);
      setSettled(state.flipped);
      const cached = readingFromState(state);
      const card = cards.find((item) => item.number === state.number);
      const official = card ? officialDayReading(card) : null;
      const ready = official ?? cached;
      if (state.flipped && ready) {
        setReading(ready);
        setTextOn(true);
      } else {
        setReading(ready);
        setTextOn(false);
      }
      if (state.date !== today) {
        saveDayThread({ date: today, number: state.number, flipped: false });
      }
    };
    apply();
    const onTick = () => {
      const today = localDateKey();
      if (today === date) return;
      const state = loadDayThread(cards);
      if (!state) return;
      setDate(state.date);
      setNumber(state.number);
      setOpen(false);
      setSettled(false);
      setTextOn(false);
      setReading(null);
      weaving.current = false;
      saveDayThread({ date: state.date, number: state.number, flipped: false });
    };
    const id = window.setInterval(onTick, 30000);
    document.addEventListener("visibilitychange", onTick);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", onTick);
    };
  }, [cards, date]);

  const card = number ? cards.find((item) => item.number === number) : null;

  useEffect(() => {
    if (!open || reading || !card || weaving.current) return;
    setTextOn(true);
    void weave(card);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, reading, card]);

  if (!card) return null;

  const flip = () => {
    if (open) return;
    setOpen(true);
    playThud();
    tapPulse(18);
    persist(card.number, true, reading);
    void weave(card);
    window.setTimeout(() => setSettled(true), FLIP_MS);
    window.setTimeout(() => setTextOn(true), FLIP_MS + AFTER_FLIP_MS);
  };

  return (
    <section className="still-panel relative isolate z-10 mt-10 p-6 sm:p-8">
      <p className="font-display text-xl tracking-[0.08em] text-gold">Нить дня</p>
      <h2 className="mt-3 font-display text-3xl tracking-[0.08em] text-sand sm:text-4xl">Одна карта на сутки</h2>
      <div className="gold-rule mt-4 w-16" />
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
        Касанием откройте карту дня. Полотно скажет, чего ждать, что сделать и чего не делать до полуночи.
      </p>
      {settled ? (
        <div className="bind-stage mx-auto mt-6 w-36 sm:w-40">
          <div className="aspect-card overflow-hidden">
            <CardFace key={card.number} card={card} className="size-full" showTitle={false} />
          </div>
        </div>
      ) : (
        <button type="button" onClick={flip} className="bind-stage mx-auto mt-6 block w-36 sm:w-40" aria-label="Открыть карту дня">
          <div className="flip-scene aspect-card w-full">
            <div className={cn("flip-card", open && "is-open")}>
              <div className="flip-face">
                <CardBack className="size-full" />
              </div>
              <div className="flip-face flip-face-front">
                <CardFace key={card.number} card={card} className="size-full" showTitle={false} />
              </div>
            </div>
          </div>
          <svg className={cn("bind-thread", open && "is-loose")} viewBox="0 0 100 150" fill="none" aria-hidden="true">
            <path d="M12 18 C 38 8, 62 28, 88 16 S 92 70, 78 92 S 28 128, 18 142" stroke="#6B1C1C" strokeWidth="3.2" />
            <path d="M22 8 C 8 52, 90 58, 70 148" stroke="#8B2A2A" strokeWidth="2.2" />
          </svg>
        </button>
      )}
      {!open ? (
        <button type="button" onClick={flip} className="btn-cloth mt-7">
          Открыть карту
        </button>
      ) : null}
      {open ? (
        <p className="mt-5 text-center font-display text-2xl tracking-[0.08em] text-sand">
          {cardDisplayTitle(card)}
        </p>
      ) : null}
      {open && busy && !reading ? (
        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <IconThreadKnot className="text-primary" />
          Нить дня тянется…
        </p>
      ) : null}
      {textOn && reading ? <DayBlock reading={reading} reveal /> : null}
      {textOn && reading ? (
        <Link
          to="/card/$number"
          params={{ number: String(card.number) }}
          className="mt-8 block text-center text-sm tracking-[0.14em] text-gold uppercase"
        >
          Читать полное значение
        </Link>
      ) : null}
    </section>
  );
}
