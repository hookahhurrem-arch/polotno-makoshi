import { useState } from "react";
import { SPREADS } from "@/lib/oracle/spreads";
import { SPREAD_PROP } from "@/lib/scenes";
import { cn } from "@/lib/utils";

function countLabel(n: number): string {
  const ten = n % 10;
  const hundred = n % 100;
  if (ten === 1 && hundred !== 11) return `${n} карта`;
  if (ten >= 2 && ten <= 4 && (hundred < 12 || hundred > 14)) return `${n} карты`;
  return `${n} карт`;
}

type SpreadFormProps = {
  defaultQuestion?: string;
  defaultSpread?: string;
};

export function SpreadForm({ defaultQuestion = "", defaultSpread = "three" }: SpreadFormProps) {
  const [picked, setPicked] = useState(defaultSpread);
  const active = SPREADS.find((s) => s.id === picked) ?? SPREADS[1]!;

  return (
    <form action="/reading" method="get" className="reading-ink relative z-20 w-full min-w-0 pb-8">
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

      <div className="rushnyk-bed mt-4" role="radiogroup" aria-label="Расклад">
        <ul>
          {SPREADS.map((spread) => {
            const on = picked === spread.id;
            return (
              <li key={spread.id}>
                <button
                  type="button"
                  onClick={() => setPicked(spread.id)}
                  aria-pressed={on}
                  className={cn("spread-row", on && "is-on")}
                >
                  <img src={SPREAD_PROP[spread.id]} alt="" className="spread-prop" />
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[1.45rem] leading-tight">{spread.title}</span>
                    <span className="spread-hint mt-1 block text-sm">{spread.hint}</span>
                  </span>
                  <span className="spread-count shrink-0 text-xs">{countLabel(spread.count)}</span>
                </button>
              </li>
            );
          })}
        </ul>
        <p className="spread-roles mt-3 text-sm">{active.roles.join(" · ")}</p>
      </div>

      <button type="submit" className="btn-cloth sticky bottom-[calc(4.6rem+env(safe-area-inset-bottom))] z-20 mt-8">
        Сплести нити
      </button>
    </form>
  );
}
