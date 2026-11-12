import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { ConsultForm } from "@/components/consult-form";

export const Route = createFileRoute("/consult")({
  head: () => ({
    meta: [
      { title: "Консультация — Полотно Макоши" },
      {
        name: "description",
        content: "Личный разбор ситуации у Темнояра. Без гарантии исхода и без медицинских обещаний.",
      },
    ],
  }),
  component: ConsultPage,
});

function ConsultPage() {
  return (
    <AppShell scene="wall">
      <article className="max-w-xl" id="consult">
        <p className="overline">Консультация</p>
        <h1 className="display-title mt-3">Живой разбор</h1>
        <p className="ink mt-5">
          Темнояр смотрит конкретный запрос. Это разговор о ситуации, не обещание события и не лечение. Стоимость и время согласуются в переписке. [УТОЧНИТЬ У ДМИТРИЯ]
        </p>
        <div className="gold-rule mt-5 w-16" />
        <ConsultForm />
      </article>
    </AppShell>
  );
}
