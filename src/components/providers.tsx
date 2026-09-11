import { useEffect, type ReactNode } from "react";
import { Toaster } from "sonner";
import { Splash } from "@/components/splash";
import { useOracleStore } from "@/lib/oracle/store";
import { soundEnabled, startCrackle } from "@/lib/oracle/sound";

export function Providers({ children }: { children: ReactNode }) {
  const hydrate = useOracleStore((s) => s.hydrate);

  useEffect(() => {
    void hydrate();
  }, [hydrate]);

  useEffect(() => {
    if (soundEnabled()) void startCrackle();
  }, []);

  return (
    <>
      <Splash />
      {children}
      <Toaster
        theme="dark"
        position="bottom-center"
        toastOptions={{
          className: "bg-card text-foreground border-border font-sans",
        }}
      />
    </>
  );
}
