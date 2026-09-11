import { useEffect, useState } from "react";
import { fxTier, type FxTier } from "@/lib/fx/quality";
import { SCENE_VIDEO, type SceneName } from "@/lib/scenes";

export function SceneStage({ name }: { name: SceneName }) {
  const [tier, setTier] = useState<FxTier>("lite");
  const [shift, setShift] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTier(fxTier());
  }, []);

  useEffect(() => {
    if (tier === "min") return;
    const onMove = (event: PointerEvent) => {
      setShift({
        x: event.clientX / window.innerWidth - 0.5,
        y: event.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [tier]);

  const video = tier === "full" ? SCENE_VIDEO[name] : undefined;

  return (
    <div className="scene-stage" data-scene={name} aria-hidden="true">
      <div
        className="scene-bg-inner"
        style={{ transform: `translate3d(${shift.x * -10}px, ${shift.y * -7}px, 0) scale(1.1)` }}
      >
        <picture>
          <source media="(orientation: portrait)" srcSet={`/scenes/${name}-tall.webp`} type="image/webp" />
          <source srcSet={`/scenes/${name}-wide.webp`} type="image/webp" />
          <img src={`/scenes/${name}-wide.jpg`} alt="" className="scene-photo" />
        </picture>
        {video ? (
          <video className="scene-video" src={video} autoPlay muted loop playsInline preload="metadata" />
        ) : null}
      </div>
      {tier !== "min" ? (
        <div
          className="scene-dust"
          style={{ transform: `translate3d(${shift.x * -26}px, ${shift.y * -16}px, 0)` }}
        />
      ) : null}
    </div>
  );
}
