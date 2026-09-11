import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { LoomHero } from "@/components/loom-hero";
import { ThreadOfDay } from "@/components/thread-of-day";
import { IconThreadKnot } from "@/components/brand-icons";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <AppShell className="!pt-0">
      <section className="relative mx-auto max-w-2xl">
        <div className="-mx-7 md:-mx-12">
          <LoomHero />
        </div>
        <p className="lead mt-8 max-w-md">108 нитей. Одна ткань судьбы.</p>
        <Link
          to="/reading"
          className="btn-carmine mt-10 inline-flex h-14 w-full max-w-sm items-center justify-center gap-2 text-sm"
        >
          <IconThreadKnot />
          Сплести нити
        </Link>
        <p className="mt-4 max-w-sm text-sm text-muted-foreground">Вопрос прозвучит у кросен.</p>
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
