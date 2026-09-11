export type SceneName = "chamber" | "table" | "book" | "casket" | "wall";

export const SCENE_VIDEO: Partial<Record<SceneName, string>> = {
  chamber: "/videos/chamber.mp4",
  table: "/videos/table.mp4",
};

export const SPREAD_PROP: Record<string, string> = {
  one: "/scenes/one.webp",
  three: "/scenes/three.webp",
  knot: "/scenes/knot.webp",
  foreign: "/scenes/foreign.webp",
  two: "/scenes/two.webp",
  krosna: "/scenes/krosna.webp",
};
