import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { submitConsult } from "@/lib/consult";

export function ConsultForm() {
  const [pending, setPending] = useState(false);
  const [note, setNote] = useState("");

  return (
    <form
      className="consult-form"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const body = new FormData(form);
        const consent = body.get("consent") === "on";
        if (!consent) {
          setNote("Нужно согласие на обработку данных.");
          return;
        }
        setPending(true);
        setNote("");
        void submitConsult({
          data: {
            name: String(body.get("name") || ""),
            contact: String(body.get("contact") || ""),
            request: String(body.get("request") || ""),
            topic: body.get("topic") === "deck" ? "deck" : "consult",
            consent: true,
            website: String(body.get("website") || ""),
          },
        })
          .then((result) => {
            if (result.ok && result.stored) {
              form.reset();
              setNote("Заявка сохранена. Темнояр ответит, когда увидит её.");
              return;
            }
            if (result.ok) return;
            setNote("Сохранить заявку пока некуда: адрес приёма не подключён. [УТОЧНИТЬ У ДМИТРИЯ] — Telegram или почта.");
          })
          .catch(() => {
            setNote("Заявка не ушла. Напишите напрямую, когда появится контакт.");
          })
          .finally(() => setPending(false));
      }}
    >
      <label className="consult-honeypot" aria-hidden="true">
        Сайт
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label>
        Как к вам обращаться
        <input name="name" required maxLength={80} className="field-ink" />
      </label>
      <label>
        Telegram или другой контакт
        <input name="contact" required maxLength={120} className="field-ink" placeholder="@имя" />
      </label>
      <label>
        О чём заявка
        <select name="topic" className="field-ink" defaultValue="consult">
          <option value="consult">Консультация</option>
          <option value="deck">Интерес к колоде</option>
        </select>
      </label>
      <label>
        Запрос
        <textarea name="request" required maxLength={2000} rows={5} className="field-ink" />
      </label>
      <p className="text-sm leading-relaxed text-muted-foreground">
        Фото в форму не загружается: файла некуда принять, пока нет адреса. При необходимости Темнояр попросит снимок уже в переписке.
      </p>
      <label className="consult-check">
        <input name="consent" type="checkbox" required />
        <span>
          Согласен на обработку данных из этой формы.{" "}
          <Link to="/privacy">Политика</Link>
        </span>
      </label>
      <button type="submit" className="btn-cloth" disabled={pending}>
        {pending ? "Отправляется" : "Оставить заявку"}
      </button>
      {note ? <p className="text-sm leading-relaxed text-sand">{note}</p> : null}
    </form>
  );
}
