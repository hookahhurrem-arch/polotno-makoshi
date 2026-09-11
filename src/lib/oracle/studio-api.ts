import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const loginStudio = createServerFn({ method: "POST" })
  .validator((input: unknown) => z.object({ password: z.string().min(1).max(80) }).parse(input))
  .handler(async ({ data }) => {
    const { passwordsMatch, STUDIO_COOKIE, studioToken } = await import("./studio-auth.server");
    if (!passwordsMatch(data.password)) {
      return { ok: false as const };
    }
    const { setCookie } = await import("@tanstack/react-start/server");
    setCookie(STUDIO_COOKIE, studioToken(), {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
    return { ok: true as const };
  });

export const studioStatus = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const { STUDIO_COOKIE, studioToken } = await import("./studio-auth.server");
    const { getCookie } = await import("@tanstack/react-start/server");
    return { ok: getCookie(STUDIO_COOKIE) === studioToken() };
  } catch {
    return { ok: false };
  }
});
