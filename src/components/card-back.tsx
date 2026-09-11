import { cn } from "@/lib/utils";

type CardBackProps = {
  number?: number;
  className?: string;
};

/** Рубашка: чёрное поле, красная гладь, мировое древо, ромбовая кайма. */
export function CardBack({ className }: CardBackProps) {
  return (
    <div className={cn("relative isolate overflow-hidden bg-[#140c0c]", className)}>
      <svg viewBox="0 0 80 120" className="absolute inset-0 size-full" aria-hidden="true">
        <g fill="none" stroke="#8e1c1c" strokeLinecap="round" strokeLinejoin="round">
          {Array.from({ length: 11 }, (_, i) => (
            <path key={`t-${i}`} d={`M${8 + i * 6.4} 8 l2.2 2.2 -2.2 2.2 -2.2 -2.2 z`} strokeWidth="0.7" />
          ))}
          {Array.from({ length: 11 }, (_, i) => (
            <path key={`b-${i}`} d={`M${8 + i * 6.4} 107.6 l2.2 2.2 -2.2 2.2 -2.2 -2.2 z`} strokeWidth="0.7" />
          ))}
          <rect x="10" y="16" width="60" height="88" strokeWidth="0.7" />
          <path d="M40 92 V46" strokeWidth="1.5" />
          <path d="M40 92 C30 102 26 106 20 108" strokeWidth="1.1" />
          <path d="M40 92 C50 102 54 106 60 108" strokeWidth="1.1" />
          <path d="M40 46 C28 40 24 30 30 22" strokeWidth="1.2" />
          <path d="M40 46 C52 40 56 30 50 22" strokeWidth="1.2" />
          <path d="M40 40 C33 32 32 24 36 20" strokeWidth="1" />
          <path d="M40 40 C47 32 48 24 44 20" strokeWidth="1" />
          <path d="M40 30 V18" strokeWidth="1.1" />
          <circle cx="30" cy="24" r="1.3" fill="#8e1c1c" stroke="none" />
          <circle cx="50" cy="24" r="1.3" fill="#8e1c1c" stroke="none" />
          <circle cx="40" cy="17" r="1.4" fill="#8e1c1c" stroke="none" />
        </g>
      </svg>
    </div>
  );
}
