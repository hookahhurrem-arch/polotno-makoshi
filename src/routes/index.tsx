import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { SpindleButton } from "@/components/spindle-button";
import { ThreadOfDay } from "@/components/thread-of-day";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <AppShell className="!pt-8" scene="chamber">
      <section className="relative mx-auto max-w-2xl">
        <p className="lead mt-6 max-w-md">Сто восемь нитей. Одна ткань судьбы.</p>
        <SpindleButton />
        <p className="mt-3 max-w-sm text-sm text-muted-foreground">Коснитесь веретена — нить размотается к кроснам.</p>
        <ThreadOfDay />
        <nav className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <Link to="/deck" className="text-sand">
            Гримуар
          </Link>
          <Link to="/journal" className="text-sand">
            Архив
          </Link>
          <Link to="/about" className="text-muted-foreground">
            О Полотне
          </Link>
        </nav>
      </section>
    </AppShell>
  );
}
