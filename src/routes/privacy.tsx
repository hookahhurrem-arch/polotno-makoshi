import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [{ title: "Конфиденциальность — Полотно Макоши" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <AppShell>
      <article className="legal max-w-xl">
        <p className="overline">Документ</p>
        <h1 className="display-title mt-3">Конфиденциальность</h1>
        <p className="ink mt-5">
          Каркас политики. Юридический текст, оператор и реквизиты сюда не подставлены. [УТОЧНИТЬ У ДМИТРИЯ]
        </p>
        <h2>Что может собираться</h2>
        <p>Имя или обращение, контакт, текст заявки. Фото через форму сайта не принимается.</p>
        <h2>Зачем</h2>
        <p>Чтобы ответить на заявку о консультации или об интересе к колоде. Не для рекламной рассылки.</p>
        <h2>Срок и оператор</h2>
        <p>[УТОЧНИТЬ У ДМИТРИЯ]: кто оператор, сколько хранить заявку, куда писать, чтобы отозвать согласие.</p>
      </article>
    </AppShell>
  );
}
