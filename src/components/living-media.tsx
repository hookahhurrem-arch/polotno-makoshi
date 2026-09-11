import { useEffect, useRef } from "react";
import { CardFace } from "@/components/card-face";
import { parseVideoUrl } from "@/lib/oracle/media";
import { useOracleStore } from "@/lib/oracle/store";
import { cardDisplayTitle, type OracleCard } from "@/lib/oracle/types";
import { cn } from "@/lib/utils";

type LivingMediaProps = {
  card: OracleCard;
  localVideoUrl?: string;
  className?: string;
  autoPlay?: boolean;
};

export function LivingMedia({ card, localVideoUrl, className, autoPlay = true }: LivingMediaProps) {
  const ensureVideo = useOracleStore((s) => s.ensureVideo);
  const storedUrl = useOracleStore((s) => s.localVideoUrls[card.number]);
  const parsed = parseVideoUrl(card.videoUrl);
  const fileSrc =
    localVideoUrl ||
    storedUrl ||
    (parsed?.kind === "file" || parsed?.kind === "unknown" ? parsed.fileUrl : undefined);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (fileSrc) return;
    void ensureVideo(card.number);
  }, [card.number, fileSrc, ensureVideo]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !fileSrc || !autoPlay) return;
    el.muted = true;
    const play = () => {
      void el.play().catch(() => undefined);
    };
    play();
    el.addEventListener("canplay", play);
    el.addEventListener("loadeddata", play);
    return () => {
      el.removeEventListener("canplay", play);
      el.removeEventListener("loadeddata", play);
    };
  }, [fileSrc, autoPlay]);

  return (
    <div className={cn("relative overflow-hidden rounded-none bg-card", className)}>
      {fileSrc ? (
        <video
          key={fileSrc}
          ref={videoRef}
          src={fileSrc}
          className="size-full object-cover"
          autoPlay={autoPlay}
          loop
          muted
          playsInline
          preload="auto"
          poster={card.imageData ?? undefined}
        />
      ) : parsed?.embedUrl ? (
        <iframe
          src={`${parsed.embedUrl}${parsed.embedUrl.includes("?") ? "&" : "?"}autoplay=${autoPlay ? 1 : 0}&mute=1`}
          title={cardDisplayTitle(card)}
          className="size-full border-0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <CardFace card={card} className="size-full rounded-none" />
      )}
    </div>
  );
}
