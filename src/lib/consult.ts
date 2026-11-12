import { appendFile, mkdir } from "node:fs/promises";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const consultSchema = z.object({
  name: z.string().trim().min(1).max(80),
  contact: z.string().trim().min(3).max(120),
  request: z.string().trim().min(4).max(2000),
  topic: z.enum(["consult", "deck"]),
  consent: z.literal(true),
  website: z.string().max(120).optional(),
});

export const submitConsult = createServerFn({ method: "POST" })
  .validator((input: unknown) => consultSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.website) return { ok: true as const, stored: false };
    const line =
      JSON.stringify({
        at: new Date().toISOString(),
        name: data.name,
        contact: data.contact,
        topic: data.topic,
        request: data.request,
      }) + "\n";
    try {
      const dir = "/data/temnoiar";
      await mkdir(dir, { recursive: true });
      await appendFile(`${dir}/consults.jsonl`, line, "utf8");
      return { ok: true as const, stored: true };
    } catch {
      return { ok: false as const, stored: false };
    }
  });
