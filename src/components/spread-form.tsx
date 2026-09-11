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

      <div className="rushnyk-bed mt-8" role="radiogroup" aria-label="Расклад">
        <img src="/scenes/rushnyk.webp" alt="" className="rushnyk-cloth" />
        <p className="relative z-10 font-display text-xl text-sand">Расклад</p>
        <ul className="relative z-10 mt-4">
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
                    <span className="block font-display text-xl leading-tight">{spread.title}</span>
                    <span className="mt-1 block text-sm">{spread.hint}</span>
                  </span>
                  <span className="shrink-0 text-[11px] text-muted-foreground">{countLabel(spread.count)}</span>
                </button>
              </li>
            );
          })}
        </ul>
        <p className="relative z-10 mt-4 text-sm text-muted-foreground">{active.roles.join(" · ")}</p>
      </div>

      <button type="submit" className="btn-cloth sticky bottom-[calc(4.6rem+env(safe-area-inset-bottom))] z-20 mt-8">
        Сплести нити
      </button>
    </form>
  );
}
