import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";

export const Route = createFileRoute("/oferta")({
  head: () => ({
    meta: [{ title: "Условия — Полотно Макоши" }],
  }),
  component: OfferPage,
});

function OfferPage() {
  return (
    <AppShell>
      <article className="legal max-w-xl">
        <p className="overline">Документ</p>
        <h1 className="display-title mt-3">Условия</h1>
        <p className="ink mt-5">Каркас. Оплата, доставка и возврат не описаны, потому что продажи на сайте нет. [УТОЧНИТЬ У ДМИТРИЯ]</p>
        <h2>Консультация</h2>
        <p>
          Это личный разбор запроса. Карты — авторский символ, не доказательство события, не медицина и не гарантия исхода. Цена и срок называются в переписке.
        </p>
        <h2>Колода</h2>
        <p>Тираж и цена на сайте не объявлены. Условия покупки появятся, когда появится продажа.</p>
      </article>
    </AppShell>
  );
}
