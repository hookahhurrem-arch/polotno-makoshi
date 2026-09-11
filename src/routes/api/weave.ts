import { createFileRoute } from "@tanstack/react-router";
import { composeLive, runWeave, type WeaveInput } from "@/lib/oracle/weaver";

export const Route = createFileRoute("/api/weave")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as WeaveInput;
        try {
          const result = await runWeave(body);
          return Response.json(result);
        } catch (err) {
          console.error("[weave]", err);
          return Response.json({ ok: true, text: composeLive(body), source: "local" });
        }
      },
    },
  },
});
