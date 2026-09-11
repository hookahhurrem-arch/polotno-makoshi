import { useEffect, useState, type ReactNode } from "react";
import { loginStudio, studioStatus } from "@/lib/oracle/studio-api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AppShell } from "@/components/app-shell";

export function StudioGate({ children }: { children: ReactNode }) {
  const [state, setState] = useState<"check" | "lock" | "open">("check");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    void studioStatus().then((res) => setState(res.ok ? "open" : "lock"));
  }, []);

  if (state === "check") {
    return (
      <AppShell>
        <p className="text-sm text-muted-foreground">Дверь ещё на засове…</p>
      </AppShell>
    );
  }

  if (state === "lock") {
    return (
      <AppShell>
        <header className="max-w-md">
          <p className="overline">Мастерская</p>
          <h1 className="display-title mt-4 text-4xl">Студия закрыта</h1>
          <div className="gold-rule mt-5 w-16" />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Сюда входит только тот, кто ткёт полотно. Гостям здесь делать нечего.
          </p>
        </header>
        <form
          className="mt-8 max-w-sm space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setError("");
            void loginStudio({ data: { password } }).then((res) => {
              if (res.ok) setState("open");
              else setError("Нить не подошла.");
            });
          }}
        >
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Слово к двери"
            autoComplete="current-password"
          />
          {error ? <p className="text-sm text-primary">{error}</p> : null}
          <Button type="submit">Отомкнуть</Button>
        </form>
      </AppShell>
    );
  }

  return children;
}
