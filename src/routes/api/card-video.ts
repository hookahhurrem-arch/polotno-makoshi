import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { createFileRoute } from "@tanstack/react-router";

const MAX = 48 * 1024 * 1024;
const TYPES: Record<string, string> = {
  "video/mp4": "mp4",
  "video/webm": "webm",
  "video/quicktime": "mov",
  "video/x-m4v": "m4v",
};

export const Route = createFileRoute("/api/card-video")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const form = await request.formData();
        const number = Number(form.get("number"));
        const file = form.get("file");
        if (!Number.isInteger(number) || number < 1 || number > 108) {
          return Response.json({ error: "number" }, { status: 400 });
        }
        if (!(file instanceof File) || file.size < 1) {
          return Response.json({ error: "file" }, { status: 400 });
        }
        if (file.size > MAX) {
          return Response.json({ error: "too-large" }, { status: 413 });
        }
        const fromType = TYPES[file.type];
        const fromName = file.name.split(".").pop()?.toLowerCase();
        const ext =
          fromType ||
          (fromName && ["mp4", "webm", "mov", "m4v"].includes(fromName) ? fromName : "mp4");
        const dir = join(process.cwd(), "public", "videos");
        await mkdir(dir, { recursive: true });
        const name = `${String(number).padStart(3, "0")}.${ext}`;
        const bytes = Buffer.from(await file.arrayBuffer());
        await writeFile(join(dir, name), bytes);
        return Response.json({ url: `/videos/${name}` });
      },
    },
  },
});
