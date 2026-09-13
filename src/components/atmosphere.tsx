import { useEffect, useState } from "react";
import { fxTier, type FxTier } from "@/lib/fx/quality";

export function Atmosphere() {
  const [tier, setTier] = useState<FxTier>("lite");

  useEffect(() => {
    setTier(fxTier());
  }, []);

  return (
    <div aria-hidden="true" className="chamber-layers">
      <div className="archive-field" />
      <div className="archive-depth" />
      {tier !== "min" ? <div className="archive-fiber" /> : null}
      <div className="archive-grid" />
      <div className="archive-well" />
      <div className="archive-vignette" />
    </div>
  );
}
