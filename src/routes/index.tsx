import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { ThreadOfDay } from "@/components/thread-of-day";
import { WeaverHero } from "@/components/weaver-hero";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <AppShell className="home-shell !max-w-none !px-0 !pt-0">
      <WeaverHero />
      <div className="px-6 md:px-12">
        <ThreadOfDay />
      </div>
    </AppShell>
  );
}
