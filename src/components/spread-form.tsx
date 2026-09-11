import { useState } from "react";
import { IconThreadKnot } from "@/components/brand-icons";
import { SPREADS, type SpreadDef } from "@/lib/oracle/spreads";
import { cn } from "@/lib/utils";

function countLabel(n: number): string {
  const ten = n % 10;
  const hundred = n % 100;
  if (ten === 1 && hundred !== 11) return `${n} карта`;
  if (ten >= 2 && ten <= 4 && (hundred < 12 || hundred > 14)) return `${n} карты`;
  return `${n} карт`;
}

function Silhouette({ spread }: { spread: SpreadDef }) {
  const cols = spread.count === 1 ? 1 : spread.count === 4 ? 2 : 3;
  return (
    <div
      className="grid shrink-0 gap-[3px]"
      style={{ gridTemplateColumns: `repeat(${cols}, 7px)` }}
      aria-hidden="true"
    >
      {spread.roles.map((role) => (
        <span key={role} className="h-2.5 w-[7px] bg-current opacity-70" />
      ))}
    </div>
  );
}

type SpreadFormProps = {
  defaultQuestion?: string;
  defaultSpread?: string;
};

export function SpreadForm({ defaultQuestion = "", defaultSpread = "three" }: SpreadFormProps) {
  const [picked, setPicked] = useState(defaultSpread);
  const active = SPREADS.find((s) => s.id === picked) ?? SPREADS[1]!;

  return (
    <form action="/reading" method="get" className="relative z-20 w-full min-w-0 pb-8">
      <input type="hidden" name="go" value="1" />
      <input type="hidden" name="s" value={picked} />
      <label className="block">
        <span className="sr-only">Вопрос к колоде</span>
        <input
          name="q"
          required
          minLength={8}
          defaultValue={defaultQuestion}
          placeholder="Вопрос прозвучит у кросен"
          autoComplete="off"
          className="field-ink h-12 w-full px-0 text-base text-foreground"
        />
      </label>

      <div className="mt-8" role="radiogroup" aria-label="Расклад">
        <p className="overline">Расклад</p>
        <ul className="mt-4 divide-y divide-[#2a211e]">
          {SPREADS.map((spread) => {
            const on = picked === spread.id;
            return (
              <li key={spread.id}>
                <button
                  type="button"
                  onClick={() => setPicked(spread.id)}
                  aria-pressed={on}
                  className={cn(
                    "stitch-run flex w-full items-center gap-4 py-3 text-left",
                    on ? "text-sand" : "text-muted-foreground",
                  )}
                  data-active={on}
                >
                  <Silhouette spread={spread} />
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-xl leading-tight">{spread.title}</span>
                    <span className="mt-1 block text-sm">{spread.hint}</span>
                  </span>
                  <span className="shrink-0 font-[family-name:var(--font-ui)] text-[11px] tracking-[0.16em] uppercase">
                    {countLabel(spread.count)}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
          {active.roles.join(" · ")}
        </p>
      </div>

      <button
        type="submit"
        className="btn-carmine sticky bottom-[calc(4.6rem+env(safe-area-inset-bottom))] z-20 mt-8 inline-flex h-12 w-full items-center justify-center gap-2 text-sm md:static md:bottom-auto"
      >
        <IconThreadKnot />
        Сплести нити
      </button>
    </form>
  );
}
