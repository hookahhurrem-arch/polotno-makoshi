import { Link } from "@tanstack/react-router";

export function SpindleButton({ to = "/reading", label = "Сплести нити" }: { to?: "/reading"; label?: string }) {
  return (
    <Link to={to} className="spindle-hit group">
      <span className="spindle-glow" />
      <img src="/scenes/spindle.webp" alt="" className="spindle-img" />
      <span className="spindle-label">{label}</span>
    </Link>
  );
}
