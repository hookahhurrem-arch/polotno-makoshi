/**
 * Бренд-иконки колоды «Полотно Макоши».
 * Рисованы вручную под колоду: лён или марена на чёрном, линия 1.35px.
 * Не Lucide, не emoji, не Font Awesome.
 */
import type { ReactNode, SVGProps } from "react";
import { cn } from "@/lib/utils";

type BrandIconProps = SVGProps<SVGSVGElement> & {
  title?: string;
};

function BrandGlyph({ className, title, children, ...props }: BrandIconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn("size-4 shrink-0", className)}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

const STROKE = {
  stroke: "currentColor",
  strokeWidth: 1.35,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Нить с узлом */
export function IconThreadKnot(props: BrandIconProps) {
  return (
    <BrandGlyph {...props}>
      <path d="M2 12h7.2" {...STROKE} />
      <path d="M14.8 12H22" {...STROKE} />
      <circle cx="12" cy="12" r="2.4" {...STROKE} />
      <path d="M11.2 10.2c1.6-.8 2.8.4 1.4 1.8" {...STROKE} />
    </BrandGlyph>
  );
}

/** Ножницы */
export function IconScissors(props: BrandIconProps) {
  return (
    <BrandGlyph {...props}>
      <circle cx="6.5" cy="17.5" r="2.2" {...STROKE} />
      <circle cx="17.5" cy="17.5" r="2.2" {...STROKE} />
      <path d="M8.2 16.2 14 4.5" {...STROKE} />
      <path d="M15.8 16.2 10 4.5" {...STROKE} />
      <path d="M10.6 12.2h2.8" {...STROKE} />
    </BrandGlyph>
  );
}

/** Ряд стежков */
export function IconStitches(props: BrandIconProps) {
  return (
    <BrandGlyph {...props}>
      <path d="M3 12h3.2" {...STROKE} />
      <path d="M10.4 12h3.2" {...STROKE} />
      <path d="M17.8 12H21" {...STROKE} />
    </BrandGlyph>
  );
}

/** Ключ */
export function IconKey(props: BrandIconProps) {
  return (
    <BrandGlyph {...props}>
      <circle cx="8" cy="12" r="3.2" {...STROKE} />
      <path d="M11.2 12H21v2.2" {...STROKE} />
      <path d="M17.2 12v2.4" {...STROKE} />
    </BrandGlyph>
  );
}

/** Колосок */
export function IconGrain(props: BrandIconProps) {
  return (
    <BrandGlyph {...props}>
      <path d="M12 21V8" {...STROKE} />
      <path d="M12 9.2c-1.8-1.2-3.4-1-3.4.6 0 1.4 1.6 2 3.4 2.6" {...STROKE} />
      <path d="M12 9.2c1.8-1.2 3.4-1 3.4.6 0 1.4-1.6 2-3.4 2.6" {...STROKE} />
      <path d="M12 13c-1.8-1-3.2-.7-3.2.8 0 1.2 1.5 1.8 3.2 2.3" {...STROKE} />
      <path d="M12 13c1.8-1 3.2-.7 3.2.8 0 1.2-1.5 1.8-3.2 2.3" {...STROKE} />
      <path d="M12 6.2 12 4.8" {...STROKE} />
    </BrandGlyph>
  );
}

/** Ягода / капля */
export function IconDrop(props: BrandIconProps) {
  return (
    <BrandGlyph {...props}>
      <path d="M12 4.5c2.8 3.4 5.2 6.2 5.2 9.1A5.2 5.2 0 0 1 12 18.8a5.2 5.2 0 0 1-5.2-5.2c0-2.9 2.4-5.7 5.2-9.1Z" {...STROKE} />
    </BrandGlyph>
  );
}

/** Щель окна */
export function IconWindow(props: BrandIconProps) {
  return (
    <BrandGlyph {...props}>
      <rect x="8" y="4.5" width="8" height="15" {...STROKE} />
      <path d="M8 12h8" {...STROKE} />
    </BrandGlyph>
  );
}

/** Скоба двери */
export function IconHasp(props: BrandIconProps) {
  return (
    <BrandGlyph {...props}>
      <path d="M7 8.5h10v9H7Z" {...STROKE} />
      <path d="M7 8.5V6.8A2.8 2.8 0 0 1 12 6.8V8.5" {...STROKE} />
      <circle cx="12" cy="13.5" r="1.1" {...STROKE} />
    </BrandGlyph>
  );
}

/** Колесо телеги нарочно не рисуем: спицы читаются как солнце / коловрат. */

/** Два круга — не сердце */
export function IconCircles(props: BrandIconProps) {
  return (
    <BrandGlyph {...props}>
      <circle cx="8.2" cy="12" r="3.4" {...STROKE} />
      <circle cx="15.8" cy="12" r="3.4" {...STROKE} />
    </BrandGlyph>
  );
}

/** Корень */
export function IconRoot(props: BrandIconProps) {
  return (
    <BrandGlyph {...props}>
      <path d="M12 4v7.5" {...STROKE} />
      <path d="M12 11.5 7 19.5" {...STROKE} />
      <path d="M12 11.5 17 19.5" {...STROKE} />
      <path d="M12 15.2 9.2 20.5" {...STROKE} />
      <path d="M12 15.2 14.8 20.5" {...STROKE} />
    </BrandGlyph>
  );
}

/** Открытая ладонь */
export function IconPalm(props: BrandIconProps) {
  return (
    <BrandGlyph {...props}>
      <path
        d="M8.2 11.2V7.4a1.2 1.2 0 0 1 2.4 0v3.2M10.6 10.2V6.2a1.2 1.2 0 1 1 2.4 0v4.4M13 10.4V6.8a1.2 1.2 0 1 1 2.4 0v4.8M15.4 11.2v-2a1.2 1.2 0 1 1 2.4 0v4.4c0 3-2 5.4-5.8 5.4-3.2 0-5.2-1.8-5.2-4.6V13"
        {...STROKE}
      />
    </BrandGlyph>
  );
}

/** Книга с застёжкой */
export function IconBookClasp(props: BrandIconProps) {
  return (
    <BrandGlyph {...props}>
      <path d="M6 5.2h11.2v13.6H6Z" {...STROKE} />
      <path d="M8.2 5.2v13.6" {...STROKE} />
      <path d="M14.6 11.2h3.6" {...STROKE} />
      <circle cx="14.6" cy="11.2" r="1.1" {...STROKE} />
    </BrandGlyph>
  );
}

/** Веретено */
export function IconSpindle(props: BrandIconProps) {
  return (
    <BrandGlyph {...props}>
      <path d="M12 3.5v17" {...STROKE} />
      <path d="M12 8.2c-2.4 0-3.6 1.4-3.6 3.2S9.6 14.6 12 14.6 15.6 13.2 15.6 11.4 14.4 8.2 12 8.2Z" {...STROKE} />
      <path d="M9.4 4.8h5.2M9.4 19.2h5.2" {...STROKE} />
    </BrandGlyph>
  );
}

/** Угли / очаг */
export function IconHearth(props: BrandIconProps) {
  return (
    <BrandGlyph {...props}>
      <path d="M12 5.2c2.2 2.8 4.2 5.2 4.2 7.6A4.2 4.2 0 0 1 12 17a4.2 4.2 0 0 1-4.2-4.2c0-2.4 2-4.8 4.2-7.6Z" {...STROKE} />
    </BrandGlyph>
  );
}
export function IconCutBack(props: BrandIconProps) {
  return (
    <BrandGlyph {...props}>
      <path d="M20 12H7.5" {...STROKE} />
      <path d="M10.2 8.8 6.8 12l3.4 3.2" {...STROKE} />
      <path d="M5.2 9.5v5" {...STROKE} />
    </BrandGlyph>
  );
}

/** Вперёд — обрез нити вправо */
export function IconCutForward(props: BrandIconProps) {
  return (
    <BrandGlyph {...props}>
      <path d="M4 12h12.5" {...STROKE} />
      <path d="M13.8 8.8 17.2 12l-3.4 3.2" {...STROKE} />
      <path d="M18.8 9.5v5" {...STROKE} />
    </BrandGlyph>
  );
}
