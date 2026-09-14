import { Link } from "@tanstack/react-router";

export function SpindleButton({ to = "/reading", label = "Сплести нити" }: { to?: "/reading"; label?: string }) {
  return (
    <Link to={to} className="hero-weave">
      <img src="/scenes/spindle.webp" alt="" className="hero-spindle" />
      <span className="hero-title">{label}</span>
      <span className="hero-caption">Коснитесь веретена — нить размотается к кроснам.</span>
    </Link>
  );
}
