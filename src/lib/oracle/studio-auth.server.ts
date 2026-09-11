import { createHash, timingSafeEqual } from "node:crypto";
import { env } from "@/lib/env.server";

export const STUDIO_COOKIE = "makosh_studio";

function secret(): string {
  return env("STUDIO_PASSWORD") || "темнояр";
}

export function studioToken(): string {
  return createHash("sha256").update(`polotno:${secret()}`).digest("hex").slice(0, 32);
}

export function passwordsMatch(input: string): boolean {
  const a = Buffer.from(input.normalize("NFC"));
  const b = Buffer.from(secret().normalize("NFC"));
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function requireStudio(): Promise<void> {
  const { getCookie } = await import("@tanstack/react-start/server");
  if (getCookie(STUDIO_COOKIE) !== studioToken()) {
    throw new Error("studio-locked");
  }
}
