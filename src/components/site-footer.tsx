import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="site-foot">
      <div className="gold-rule mx-auto w-24" />
      <p className="mt-6 text-center font-display text-2xl tracking-[0.12em] text-sand">Полотно Макоши</p>
      <p className="mt-2 text-center text-sm tracking-[0.16em] text-muted-foreground uppercase">Темнояр · 108 нитей</p>
      <nav className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
        <Link to="/learn">Обучение</Link>
        <Link to="/deck">Гримуар</Link>
        <Link to="/consult">Консультация</Link>
        <Link to="/about">О Полотне</Link>
        <a href="https://instagram.com/temnoiar" rel="noreferrer">
          Instagram
        </a>
      </nav>
      <nav className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
        <Link to="/contacts">Контакты</Link>
        <Link to="/privacy">Конфиденциальность</Link>
        <Link to="/oferta">Условия</Link>
      </nav>
      <p className="mx-auto mt-5 max-w-md text-center text-sm leading-relaxed text-muted-foreground">
        Карта и расклад — символический фокус, не обещание события и не медицинский совет. Telegram для прямой связи: [УТОЧНИТЬ У ДМИТРИЯ].
      </p>
    </footer>
  );
}
