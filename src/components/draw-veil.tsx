import { IconThreadKnot } from "@/components/brand-icons";

export function DrawVeil({ count }: { count: number }) {
  return (
    <div className="mt-10 flex flex-col items-center" aria-live="polite">
      <svg className="h-10 w-56" viewBox="0 0 224 40" fill="none" aria-hidden="true">
        <path
          className="draw-thread"
          d="M8 20c24-12 40 12 56 0s40 12 56 0 40 12 56 0 24 8 40 0"
          stroke="#8B1E1E"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <circle cx="8" cy="20" r="2.4" stroke="#8B1E1E" strokeWidth="1.2" />
      </svg>
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: count }, (_, i) => (
          <div
            key={i}
            className="card-wait cloth-nap aspect-card w-[4.6rem] rounded-none sm:w-24"
            style={{ animationDelay: `${i * 160}ms` }}
          />
        ))}
      </div>
      <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <IconThreadKnot className="text-primary" />
        Нить тянется…
      </p>
    </div>
  );
}
