import type { ErrorComponentProps } from "@tanstack/react-router";
import { IconScissors } from "@/components/brand-icons";

const FALLBACK_MESSAGE = "Что-то пошло не так. Попробуйте обновить страницу.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground">
      <span className="text-primary" aria-hidden="true">
        <IconScissors className="size-8" />
      </span>
      <h1 className="font-display text-2xl">Ошибка</h1>
      <p className="max-w-sm text-sm break-words text-muted-foreground">{errorMessage(error)}</p>
    </main>
  );
}
