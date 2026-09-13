import { cardDisplayTitle, type OracleCard } from "./types";

function wrapText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number, maxLines: number) {
  const words = text.split(/\s+/);
  let line = "";
  let row = 0;
  let yy = y;
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, yy);
      line = word;
      yy += lineHeight;
      row += 1;
      if (row >= maxLines) {
        ctx.fillText("…", x, yy);
        return yy;
      }
    } else {
      line = test;
    }
  }
  if (line) ctx.fillText(line, x, yy);
  return yy + lineHeight;
}

function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

export async function shareSpread(input: {
  deck: string;
  question: string;
  cards: OracleCard[];
  weaving: string;
}): Promise<void> {
  const w = 1080;
  const h = 1920;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const bg = ctx.createRadialGradient(w / 2, h * 0.32, 40, w / 2, h * 0.4, h * 0.8);
  bg.addColorStop(0, "#1A0F0F");
  bg.addColorStop(1, "#0E0A0A");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = "#D8C08A";
  ctx.lineWidth = 2;
  ctx.strokeRect(48, 48, w - 96, h - 96);

  ctx.fillStyle = "#D8C08A";
  ctx.font = "28px Manrope, sans-serif";
  ctx.letterSpacing = "8px";
  ctx.textAlign = "center";
  ctx.fillText("ПОЛОТНО МАКОШИ", w / 2, 130);

  ctx.fillStyle = "#E4D4B8";
  ctx.font = "64px Devils, serif";
  ctx.letterSpacing = "4px";
  ctx.fillText(input.deck, w / 2, 210);

  ctx.fillStyle = "#C9BFB5";
  ctx.font = "32px Manrope, sans-serif";
  ctx.letterSpacing = "0px";
  const afterQ = wrapText(
    ctx,
    input.question ? `«${input.question}»` : "Без вопроса",
    w / 2,
    280,
    w - 180,
    44,
    3,
  );

  const count = input.cards.length;
  const cols = count <= 1 ? 1 : count <= 4 ? 2 : 3;
  const rows = Math.ceil(count / cols);
  const cardW = cols === 1 ? 360 : cols === 2 ? 300 : 240;
  const cardH = (cardW * 3) / 2;
  const gap = 28;
  const gridW = cols * cardW + (cols - 1) * gap;
  const startX = (w - gridW) / 2;
  let startY = afterQ + 40;

  const images = await Promise.all(input.cards.map((card) => (card.imageData ? loadImage(card.imageData) : Promise.resolve(null))));

  input.cards.forEach((card, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = startX + col * (cardW + gap);
    const y = startY + row * (cardH + 70);
    const img = images[i];
    if (img) ctx.drawImage(img, x, y, cardW, cardH);
    else {
      ctx.fillStyle = "#161010";
      ctx.fillRect(x, y, cardW, cardH);
    }
    ctx.strokeStyle = "rgba(216,192,138,0.7)";
    ctx.strokeRect(x, y, cardW, cardH);
    ctx.fillStyle = "#E4D4B8";
    ctx.font = "28px Devils, serif";
    ctx.textAlign = "center";
    ctx.fillText(cardDisplayTitle(card), x + cardW / 2, y + cardH + 36);
  });

  const textY = startY + rows * (cardH + 70) + 20;
  ctx.fillStyle = "#C9BFB5";
  ctx.font = "30px Manrope, sans-serif";
  ctx.textAlign = "left";
  wrapText(ctx, input.weaving.replace(/\s+/g, " ").trim(), 90, textY, w - 180, 42, 10);

  ctx.fillStyle = "#D8C08A";
  ctx.font = "22px Manrope, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Темнояр · 108 нитей", w / 2, h - 80);

  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) return;
  const file = new File([blob], "polotno-makoshi.png", { type: "image/png" });
  const nav = navigator as Navigator & { share?: (data: ShareData & { files?: File[] }) => Promise<void>; canShare?: (data: { files: File[] }) => boolean };
  if (nav.share && nav.canShare?.({ files: [file] })) {
    await nav.share({ files: [file], title: "Полотно Макоши" });
    return;
  }
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "polotno-makoshi.png";
  a.click();
  URL.revokeObjectURL(url);
}
