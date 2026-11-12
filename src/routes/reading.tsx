import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/reading")({
  beforeLoad: () => {
    throw redirect({ to: "/learn" });
  },
});
