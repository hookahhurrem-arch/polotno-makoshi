export function ClothField({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none relative overflow-hidden ${className}`} aria-hidden="true">
      <svg className="size-full" viewBox="0 0 320 220" fill="none" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 9 }, (_, i) => {
          const x = 24 + i * 34;
          return (
            <path
              key={`w-${i}`}
              d={`M${x} 0 C${x + 6} 70 ${x - 8} 140 ${x} 220`}
              stroke="rgb(201 191 181 / 0.18)"
              strokeWidth="1"
              className="cloth-warp"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          );
        })}
        <path
          d="M0 78 C 80 64, 160 96, 320 78"
          stroke="#8e1c1c"
          strokeWidth="1.4"
          className="cloth-weft"
        />
        <path
          d="M0 132 C 90 148, 170 118, 320 136"
          stroke="rgb(142 28 28 / 0.55)"
          strokeWidth="1"
          className="cloth-weft"
          style={{ animationDelay: "1.2s" }}
        />
      </svg>
    </div>
  );
}
