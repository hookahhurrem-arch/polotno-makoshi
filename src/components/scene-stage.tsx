import { type SceneName } from "@/lib/scenes";

export function SceneStage({ name }: { name: SceneName }) {
  return (
    <div className="scene-stage" data-scene={name} aria-hidden="true">
      <div className="scene-bg-inner">
        <picture>
          <source media="(orientation: portrait)" srcSet={`/scenes/${name}-tall.webp`} type="image/webp" />
          <source srcSet={`/scenes/${name}-wide.webp`} type="image/webp" />
          <img src={`/scenes/${name}-wide.jpg`} alt="" className="scene-photo" />
        </picture>
      </div>
    </div>
  );
}
