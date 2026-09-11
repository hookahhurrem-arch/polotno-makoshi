/** Brand yarn: diamond embroidery stitch-by-stitch. Not a spinner. */
export function YarnStitch({ label = "Нить вышивает узор" }: { label?: string }) {
  return (
    <div className="yarn-stitch" role="status" aria-live="polite">
      <svg viewBox="0 0 64 72" className="yarn-stitch-svg" aria-hidden="true">
        <path
          className="yarn-path"
          d="M32 8 L56 32 L32 56 L8 32 Z M32 20 L44 32 L32 44 L20 32 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle className="yarn-knot" cx="32" cy="8" r="2.2" fill="currentColor" />
      </svg>
      <p className="mt-3 text-sm tracking-wide text-muted-foreground">{label}</p>
    </div>
  );
}
