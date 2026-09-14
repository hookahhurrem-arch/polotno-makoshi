import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { SpindleButton } from "@/components/spindle-button";
import { ThreadOfDay } from "@/components/thread-of-day";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <AppShell className="home-shell !pt-2" scene="chamber">
      <section className="home-stage">
        <p className="home-aside">Сто восемь нитей. Одна ткань судьбы.</p>
        <SpindleButton />
        <ThreadOfDay />
      </section>
    </AppShell>
  );
}
