import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [{ title: "Контакты — Полотно Макоши" }],
  }),
  component: ContactsPage,
});

function ContactsPage() {
  return (
    <AppShell>
      <article className="legal max-w-xl">
        <p className="overline">Связь</p>
        <h1 className="display-title mt-3">Контакты</h1>
        <p className="ink mt-5">Сайт ведёт Дмитрий, псевдоним Темнояр, бренд amid_dark.</p>
        <p className="mt-4">
          Instagram:{" "}
          <a href="https://instagram.com/temnoiar" rel="noreferrer">
            temnoiar
          </a>
        </p>
        <p className="mt-3">Telegram: [УТОЧНИТЬ У ДМИТРИЯ]</p>
        <p className="mt-3">Почта: [УТОЧНИТЬ У ДМИТРИЯ]</p>
        <p className="mt-3">Юридический статус, ИНН и адрес для связи: [УТОЧНИТЬ У ДМИТРИЯ]</p>
      </article>
    </AppShell>
  );
}
