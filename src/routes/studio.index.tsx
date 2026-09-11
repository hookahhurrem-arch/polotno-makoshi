import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { IconRoot } from "@/components/brand-icons";
import { AppShell } from "@/components/app-shell";
import { CardTile } from "@/components/card-tile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { isCardFilled } from "@/lib/oracle/types";
import { useOracleStore } from "@/lib/oracle/store";

export const Route = createFileRoute("/studio/")({ component: StudioPage });

function StudioPage() {
  const cards = useOracleStore((s) => s.cards);
  const settings = useOracleStore((s) => s.settings);
  const updateSettings = useOracleStore((s) => s.updateSettings);
  const localVideoUrls = useOracleStore((s) => s.localVideoUrls);
  const filled = cards.filter(isCardFilled).length;
  const withVideo = cards.filter((c) => c.videoUrl || localVideoUrls[c.number]).length;

  return (
    <AppShell>
      <header className="max-w-2xl">
        <p className="text-xs font-medium tracking-card text-primary uppercase">Мастерская</p>
        <h1 className="mt-3 flex items-center gap-3 font-display text-4xl leading-tight">
          <IconRoot className="text-primary" />
          Студия
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Здесь вы вплетаете карты в полотно. У каждой — имя, текст, фото и короткое видео.
          Первая карта уже стоит: Макошь. Остальные 107 ждут ваши изображения и расшифровки.
          Эти тексты — обучение Ткача: он будет сочетать карты и давать людям прогноз.
        </p>
      </header>

      <div className="mt-8 bg-card p-5 md:p-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-display text-2xl tabular-nums">{filled} / 108</p>
            <p className="text-sm text-muted-foreground">карт с описанием · {withVideo} с видео</p>
          </div>
          <div className="h-px w-full max-w-xs overflow-hidden bg-border">
            <div
              className="h-px bg-primary transition-[width] duration-300"
              style={{ width: `${Math.round((filled / 108) * 100)}%` }}
            />
          </div>
        </div>
      </div>

      <form
        className="mt-8 grid max-w-2xl gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          const form = new FormData(e.currentTarget);
          void updateSettings({
            name: String(form.get("name") ?? ""),
            author: String(form.get("author") ?? ""),
            tagline: String(form.get("tagline") ?? ""),
            intro: String(form.get("intro") ?? ""),
          }).then(() => toast("Сохранено"));
        }}
      >
        <div className="grid gap-2">
          <Label htmlFor="name">Название колоды</Label>
          <Input id="name" name="name" defaultValue={settings.name} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="author">Автор</Label>
          <Input id="author" name="author" defaultValue={settings.author} placeholder="Ваше имя" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="tagline">Короткая строка</Label>
          <Input id="tagline" name="tagline" defaultValue={settings.tagline} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="intro">О колоде</Label>
          <Textarea id="intro" name="intro" defaultValue={settings.intro} />
        </div>
        <div>
          <Button type="submit">Сохранить колоду</Button>
        </div>
      </form>

      <div className="mt-12">
        <h2 className="font-display text-2xl">Карты</h2>
        <p className="mt-1 text-sm text-muted-foreground">Нажмите карту, чтобы загрузить текст и видео.</p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {cards.map((card) => (
            <CardTile
              key={card.number}
              card={card}
              mode="edit"
              showEmptyAsBack
            />
          ))}
        </div>
      </div>

      <p className="mt-10 max-w-xl text-xs leading-relaxed text-muted-foreground">
        Фото сохраняется вместе с картой. Видео с телефона остаётся на этом устройстве. Чтобы гости сайта тоже
        видели ролик, вставьте ссылку на YouTube, Rutube или Vimeo.
      </p>
      <p className="mt-2">
        <Link to="/deck" className="text-sm underline-offset-4 hover:underline">
          Посмотреть как посетитель
        </Link>
      </p>
    </AppShell>
  );
}
