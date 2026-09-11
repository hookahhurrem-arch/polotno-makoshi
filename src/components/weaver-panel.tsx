import { useEffect, useRef, useState } from "react";
import { YarnStitch } from "@/components/yarn-stitch";
import { Button } from "@/components/ui/button";
import { SILENT_FALLBACK, weaveReading, type WeaveCard, type WeaveTurn } from "@/lib/oracle/weaver";
import { cardDisplayTitle, type OracleCard, type SpreadKind } from "@/lib/oracle/types";

function plain(text: string): string {
  return text.replace(/\*\*/g, "").replace(/^#{1,6}\s+/gm, "").trim();
}

function toWeaveCards(cards: OracleCard[], roles: string[]): WeaveCard[] {
  return cards.map((card, i) => ({
    number: card.number,
    title: cardDisplayTitle(card),
    keywords: card.keywords,
    description: card.description.slice(0, 1400),
    role: roles[i] ?? `Нить ${i + 1}`,
  }));
}

function cacheKey(question: string, cards: OracleCard[]): string {
  return `makosh-weave-turns:${cards.map((c) => c.number).join("-")}:${question.trim()}`;
}

function readCache(key: string): WeaveTurn[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.sessionStorage.getItem(key);
    if (!raw) return [];
    const data = JSON.parse(raw) as WeaveTurn[];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function writeCache(key: string, turns: WeaveTurn[]) {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(turns));
  } catch {
    /* ignore */
  }
}

function isSilent(text: string): boolean {
  const t = text.trim();
  return t === SILENT_FALLBACK || t.startsWith("Нить оборвалась") || t.startsWith("Полотно не отозвалось");
}

type WeaverPanelProps = {
  question: string;
  cards: OracleCard[];
  roles: string[];
  spread: SpreadKind;
  onWoven: (text: string) => void;
  autoStart?: boolean;
};

export function WeaverPanel({ question, cards, roles, spread, onWoven, autoStart }: WeaverPanelProps) {
  const key = cacheKey(question, cards);
  const [turns, setTurns] = useState<WeaveTurn[]>(() => readCache(key));
  const [followUp, setFollowUp] = useState("");
  const [busy, setBusy] = useState(false);
  const started = useRef(false);
  const canFollow = turns.filter((t) => t.role === "seeker").length < 4;
  const lastWeaver = [...turns].reverse().find((t) => t.role === "weaver");
  const silent = Boolean(lastWeaver && isSilent(lastWeaver.text));
  const hasWeaver = Boolean(lastWeaver) && !silent;

  const commit = (woven: string, nextFollow?: string) => {
    setTurns((prev) => {
      const next: WeaveTurn[] = silent ? prev.filter((t) => !isSilent(t.text)) : [...prev];
      if (nextFollow) next.push({ role: "seeker", text: nextFollow });
      next.push({ role: "weaver", text: woven });
      writeCache(key, next);
      return next;
    });
    if (!isSilent(woven)) onWoven(woven);
    setFollowUp("");
  };

  const run = async (nextFollow?: string, force = false) => {
    if (busy) return;
    if (hasWeaver && !nextFollow && !force) return;
    setBusy(true);
    const payload = {
      question,
      spread,
      cards: toWeaveCards(cards, roles),
      history: turns.filter((t) => !isSilent(t.text)),
      followUp: nextFollow,
    };
    const timer = window.setTimeout(() => setBusy(false), 28000);
    try {
      const res = await fetch("/api/weave", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(26000),
      });
      const result = (await res.json()) as { text?: string };
      commit(plain(result.text || "") || "Нить оборвалась на полуслове. Потяни ещё раз.", nextFollow);
    } catch {
      try {
        const result = await weaveReading({ data: payload });
        commit(plain(result.text) || "Нить оборвалась на полуслове. Потяни ещё раз.", nextFollow);
      } catch {
        commit("Нить оборвалась на полуслове. Потяни ещё раз.", nextFollow);
      }
    } finally {
      window.clearTimeout(timer);
      setBusy(false);
    }
  };

  useEffect(() => {
    if (!autoStart || started.current || cards.length === 0) return;
    started.current = true;
    if (hasWeaver) {
      if (lastWeaver) onWoven(lastWeaver.text);
      return;
    }
    void run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoStart, cards]);

  return (
    <section className="gramota mt-10 p-6 sm:p-8">
      <p className="overline">Ткач</p>
      <h2 className="mt-3 font-display text-3xl tracking-[0.08em] text-sand">Прогноз</h2>
      <div className="gold-rule mt-4 w-16" />

      <div className="mt-6 space-y-6">
        {turns.map((turn, i) =>
          turn.role === "seeker" ? (
            <p key={`s-${i}`} className="text-sm text-muted-foreground">
              Уточнение: «{turn.text}»
            </p>
          ) : (
            <div key={`w-${i}`} className="space-y-0">
              {turn.text.split(/\n{2,}/).map((para, j) => (
                <p
                  key={j}
                  className={j === 0 ? "weaver-para drop-cap lead" : "weaver-para text-base leading-[1.65]"}
                  style={{ animationDelay: `${j * 180}ms` }}
                >
                  {para}
                </p>
              ))}
            </div>
          ),
        )}
      </div>

      {busy ? <YarnStitch label="Челнок ходит. Полотно нарастает." /> : null}

      {silent && !busy ? (
        <Button type="button" className="mt-5" onClick={() => void run(undefined, true)}>
          Потянуть нить ещё раз
        </Button>
      ) : null}

      {hasWeaver && canFollow ? (
        <form
          className="mt-8 flex flex-col gap-2 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            const q = followUp.trim();
            if (!q) return;
            void run(q);
          }}
        >
          <input
            value={followUp}
            onChange={(e) => setFollowUp(e.target.value)}
            placeholder="Уточнить: что делать? чего ждать?"
            disabled={busy}
            className="field-ink h-11 w-full px-3 text-sm text-foreground placeholder:text-muted-foreground"
          />
          <Button type="submit" variant="outline" disabled={busy || !followUp.trim()}>
            Спросить
          </Button>
        </form>
      ) : null}
    </section>
  );
}
