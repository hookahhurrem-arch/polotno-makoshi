import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CardBack } from "@/components/card-back";
import { CardFace } from "@/components/card-face";
import { isCardFilled, type OracleCard } from "@/lib/oracle/types";
import { cn } from "@/lib/utils";

type CardTileProps = {
  card: OracleCard;
  mode?: "view" | "edit";
  className?: string;
  showEmptyAsBack?: boolean;
};

export function CardTile({ card, mode = "view", className, showEmptyAsBack = true }: CardTileProps) {
  const filled = isCardFilled(card);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <Link
      to={mode === "edit" ? "/studio/$number" : "/card/$number"}
      params={{ number: String(card.number) }}
      id={`card-${card.number}`}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const box = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - box.left) / box.width - 0.5;
        const py = (event.clientY - box.top) / box.height - 0.5;
        setTilt({ x: py * -6, y: px * 6 });
      }}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
      className={cn(
        "emerge group relative block aspect-card overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-ring/70",
        className,
      )}
      style={
        tilt.x || tilt.y
          ? {
              transform: `perspective(720px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }
          : undefined
      }
    >
      {filled || !showEmptyAsBack ? (
        <CardFace card={card} className="size-full" />
      ) : (
        <CardBack number={card.number} className="size-full" />
      )}
      <span className="gleam" style={{ animationDelay: `${(card.number % 7) * 0.85}s` }} />
    </Link>
  );
}
