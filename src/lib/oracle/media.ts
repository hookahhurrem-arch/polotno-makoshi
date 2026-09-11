export type VideoKind = "file" | "youtube" | "vimeo" | "rutube" | "unknown";

export type ParsedVideo = {
  kind: VideoKind;
  embedUrl?: string;
  fileUrl?: string;
};

function youtubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    if (host === "youtu.be") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      return id || null;
    }
    if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
      if (parsed.searchParams.get("v")) return parsed.searchParams.get("v");
      const parts = parsed.pathname.split("/").filter(Boolean);
      if (parts[0] === "embed" || parts[0] === "shorts" || parts[0] === "live") {
        return parts[1] || null;
      }
    }
  } catch {
    return null;
  }
  return null;
}

function vimeoId(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    if (host !== "vimeo.com" && host !== "player.vimeo.com") return null;
    const parts = parsed.pathname.split("/").filter(Boolean);
    const id = parts[0] === "video" ? parts[1] : parts[0];
    return id && /^\d+$/.test(id) ? id : null;
  } catch {
    return null;
  }
}

function rutubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    if (!host.endsWith("rutube.ru")) return null;
    const parts = parsed.pathname.split("/").filter(Boolean);
    const idx = parts[0] === "video" || parts[0] === "play" ? 1 : -1;
    const id = idx >= 0 ? parts[idx] : null;
    return id || null;
  } catch {
    return null;
  }
}

export function parseVideoUrl(raw: string): ParsedVideo | null {
  const url = raw.trim();
  if (!url) return null;

  const yt = youtubeId(url);
  if (yt) {
    return {
      kind: "youtube",
      embedUrl: `https://www.youtube-nocookie.com/embed/${yt}?rel=0&modestbranding=1`,
    };
  }

  const vim = vimeoId(url);
  if (vim) {
    return {
      kind: "vimeo",
      embedUrl: `https://player.vimeo.com/video/${vim}`,
    };
  }

  const rt = rutubeId(url);
  if (rt) {
    return {
      kind: "rutube",
      embedUrl: `https://rutube.ru/play/embed/${rt}`,
    };
  }

  if (
    /\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(url) ||
    url.startsWith("blob:") ||
    url.startsWith("/videos/")
  ) {
    return { kind: "file", fileUrl: url };
  }

  if (/^https?:\/\//i.test(url)) {
    return { kind: "unknown", fileUrl: url };
  }

  return null;
}

export function compressImageFile(file: File, maxEdge = 720, quality = 0.74): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    img.onload = () => {
      try {
        const scale = Math.min(1, maxEdge / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("canvas"));
          return;
        }
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      } catch (err) {
        reject(err);
      } finally {
        URL.revokeObjectURL(objectUrl);
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("image"));
    };
    img.src = objectUrl;
  });
}

export const MAX_VIDEO_BYTES = 48 * 1024 * 1024;
