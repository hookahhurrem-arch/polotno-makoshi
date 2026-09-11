import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { IconCutBack, IconDrop } from "@/components/brand-icons";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { AppShell } from "@/components/app-shell";
import { StudioGate } from "@/components/studio-gate";
import { LivingMedia } from "@/components/living-media";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { compressImageFile, MAX_VIDEO_BYTES } from "@/lib/oracle/media";
import {
  DECK_SIZE,
  cardDisplayTitle,
  emptyCard,
  padCardNumber,
  withDayFields,
  type OracleCard,
} from "@/lib/oracle/types";
import { useOracleStore } from "@/lib/oracle/store";

export const Route = createFileRoute("/studio/$number")({
  beforeLoad: ({ params }) => {
    const n = Number(params.number);
    if (!Number.isInteger(n) || n < 1 || n > DECK_SIZE) throw notFound();
  },
  component: StudioCardPage,
});

function StudioCardPage() {
  return (
    <StudioGate>
      <StudioCardInner />
    </StudioGate>
  );
}

function StudioCardInner() {
  const { number: raw } = Route.useParams();
  const n = Number(raw);
  if (!Number.isInteger(n) || n < 1 || n > DECK_SIZE) throw notFound();

  const navigate = useNavigate();
  const stored = withDayFields(useOracleStore((s) => s.cards.find((c) => c.number === n)) ?? emptyCard(n));
  const updateCard = useOracleStore((s) => s.updateCard);
  const setLocalVideo = useOracleStore((s) => s.setLocalVideo);
  const clearLocalVideo = useOracleStore((s) => s.clearLocalVideo);
  const localVideoUrl = useOracleStore((s) => s.localVideoUrls[n]);

  const [draft, setDraft] = useState<OracleCard>(stored);
  const [busy, setBusy] = useState(false);
  const imageRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const current = useOracleStore.getState().cards.find((c) => c.number === n) ?? emptyCard(n);
    setDraft(withDayFields(current));
  }, [n]);

  const go = (num: number) => {
    void navigate({ to: "/studio/$number", params: { number: String(num) } });
  };

  const save = async (next: OracleCard = draft) => {
    const card = { ...next, updatedAt: new Date().toISOString() };
    setDraft(card);
    await updateCard(card);
    toast("Карта сохранена");
  };

  const onImage = async (file: File | undefined) => {
    if (!file) return;
    setBusy(true);
    try {
      const imageData = await compressImageFile(file);
      const next = { ...draft, imageData, updatedAt: new Date().toISOString() };
      setDraft(next);
      await updateCard(next);
      toast("Фото загружено");
    } catch {
      toast("Не удалось прочитать фото");
    } finally {
      setBusy(false);
    }
  };

  const onVideo = async (file: File | undefined) => {
    if (!file) return;
    if (file.size > MAX_VIDEO_BYTES) {
      toast("Видео больше 48 МБ — сожмите его или вставьте ссылку");
      return;
    }
    setBusy(true);
    try {
      await setLocalVideo(n, file);
      toast("Видео загружено");
    } catch {
      toast("Не удалось сохранить видео");
    } finally {
      setBusy(false);
    }
  };

  const prev = n === 1 ? DECK_SIZE : n - 1;
  const next = n === DECK_SIZE ? 1 : n + 1;
  const preview = { ...stored, ...draft };

  return (
    <AppShell>
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,18rem)_1fr] lg:items-start">
        <div className="mx-auto w-full max-w-xs self-start lg:max-w-none">
          <LivingMedia
            card={preview}
            localVideoUrl={localVideoUrl}
            className="aspect-card w-full"
            autoPlay={false}
          />
          <p className="mt-3 text-center text-xs text-muted-foreground">Так карта выглядит в раскладе</p>
        </div>

        <div>
          <p className="text-xs tracking-card text-muted-foreground tabular-nums">
            Карта {padCardNumber(n)}
          </p>
          <h1 className="mt-2 font-display text-4xl leading-tight">{cardDisplayTitle(preview)}</h1>

          <form
            className="mt-8 grid gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              void save();
            }}
          >
            <div className="grid gap-2">
              <Label htmlFor="title">Название</Label>
              <Input
                id="title"
                value={draft.title}
                onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                placeholder="Имя карты"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="keywords">Ключевые слова</Label>
              <Input
                id="keywords"
                value={draft.keywords}
                onChange={(e) => setDraft({ ...draft, keywords: e.target.value })}
                placeholder="через запятую"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Описание в книге</Label>
              <Textarea
                id="description"
                value={draft.description}
                onChange={(e) => setDraft({ ...draft, description: e.target.value })}
                placeholder="Смысл карты, послание, как её читать"
              />
            </div>

            <div className="grid gap-4 border border-gold/20 p-4">
              <p className="text-[10px] tracking-[0.22em] text-gold uppercase">Нить дня — отдельные поля</p>
              <div className="grid gap-2">
                <Label htmlFor="dayLine">Строка дня</Label>
                <Input
                  id="dayLine"
                  value={draft.dayLine ?? ""}
                  onChange={(e) => setDraft({ ...draft, dayLine: e.target.value })}
                  placeholder="Одна фраза"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="dayLooks">Как выглядит день</Label>
                <Textarea
                  id="dayLooks"
                  value={draft.dayLooks ?? ""}
                  onChange={(e) => setDraft({ ...draft, dayLooks: e.target.value })}
                  placeholder="Два–три предложения"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="dayDo">Сегодня</Label>
                <Input
                  id="dayDo"
                  value={draft.dayDo ?? ""}
                  onChange={(e) => setDraft({ ...draft, dayDo: e.target.value })}
                  placeholder="Одно действие"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="dayAvoid">Не сегодня</Label>
                <Input
                  id="dayAvoid"
                  value={draft.dayAvoid ?? ""}
                  onChange={(e) => setDraft({ ...draft, dayAvoid: e.target.value })}
                  placeholder="Одна ловушка"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label>Фото карты</Label>
              <div className="flex flex-wrap gap-2">
                <Button type="button" variant="outline" disabled={busy} onClick={() => imageRef.current?.click()}>
                  Загрузить фото
                </Button>
                {draft.imageData ? (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => {
                      const nextCard = { ...draft, imageData: null };
                      setDraft(nextCard);
                      void save(nextCard);
                    }}
                  >
                    Убрать фото
                  </Button>
                ) : null}
              </div>
              <input
                ref={imageRef}
                type="file"
                accept="image/*"
                className="hidden"
                tabIndex={-1}
                onChange={(e) => void onImage(e.target.files?.[0])}
              />
            </div>

            <div className="grid gap-2">
              <Label>Живое видео</Label>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Короткий ролик сохраняется в колоде и оживляет карту. Ссылка YouTube / Rutube / Vimeo тоже
                подойдёт, если файл большой.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button type="button" variant="outline" disabled={busy} onClick={() => videoRef.current?.click()}>
                  Загрузить видео
                </Button>
                {localVideoUrl ? (
                  <Button type="button" variant="ghost" onClick={() => void clearLocalVideo(n)}>
                    Убрать файл
                  </Button>
                ) : null}
              </div>
              <input
                ref={videoRef}
                type="file"
                accept="video/*"
                className="hidden"
                tabIndex={-1}
                onChange={(e) => void onVideo(e.target.files?.[0])}
              />
              <Input
                value={draft.videoUrl}
                onChange={(e) => setDraft({ ...draft, videoUrl: e.target.value })}
                placeholder="https://youtu.be/… или прямая ссылка на файл"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <Button type="submit" disabled={busy}>
                Сохранить
              </Button>
              <Button type="button" variant="outline" asChild>
                <Link to="/card/$number" params={{ number: String(n) }}>
                  Открыть как гость
                </Link>
              </Button>
            </div>
          </form>

          <div className="mt-12 flex justify-between">
            <Button variant="ghost" onClick={() => go(prev)}>
              <IconCutBack />
              {padCardNumber(prev)}
            </Button>
            <Button variant="ghost" onClick={() => go(next)}>
              {padCardNumber(next)}
              <IconDrop />
            </Button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
