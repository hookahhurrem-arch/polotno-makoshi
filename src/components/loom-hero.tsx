import { useEffect, useRef, useState } from "react";

export function LoomHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [motion, setMotion] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMotion(!reduced);
    const video = videoRef.current;
    if (!video || reduced) return;
    const play = () => {
      video.playbackRate = 0.7;
      void video.play().catch(() => undefined);
    };
    play();
    const onTouch = () => play();
    document.addEventListener("touchstart", onTouch, { once: true, passive: true });
    return () => document.removeEventListener("touchstart", onTouch);
  }, []);

  return (
    <div className="loom-hero" aria-hidden="true">
      {motion ? (
        <video
          ref={videoRef}
          className="loom-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/makosh-loom.jpg"
        >
          <source src="/videos/makosh-loom.mp4" type="video/mp4" />
        </video>
      ) : (
        <img src="/videos/makosh-loom.jpg" alt="" className="loom-hero-video" />
      )}
      <div className="loom-hero-veil" />
    </div>
  );
}
