import { cn } from "@/lib/utils";
import { cardDisplayTitle, padCardNumber, type OracleCard } from "@/lib/oracle/types";

type CardFaceProps = {
  card: OracleCard;
  className?: string;
  showTitle?: boolean;
};

export function CardFace({ card, className, showTitle = true }: CardFaceProps) {
  if (card.imageData) {
    return (
      <div className={cn("relative overflow-hidden rounded-none bg-card", className)}>
        <img
          src={card.imageData}
          alt={cardDisplayTitle(card)}
          className="size-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
        {showTitle ? (
          <div className="title-bar absolute inset-x-0 bottom-0 px-3 py-2.5">
            <p className="font-display text-lg leading-tight text-foreground">{cardDisplayTitle(card)}</p>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "cloth-nap relative flex flex-col justify-between overflow-hidden rounded-none px-4 py-5",
        className,
      )}
    >
      <span className="font-display text-xs tracking-card text-muted-foreground tabular-nums">
        {padCardNumber(card.number)}
      </span>
      <div>
        <p className="font-display text-2xl leading-tight text-foreground">{cardDisplayTitle(card)}</p>
        {card.keywords ? (
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{card.keywords}</p>
        ) : null}
      </div>
    </div>
  );
}
