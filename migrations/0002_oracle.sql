create table if not exists deck_settings (
  id text primary key,
  name text not null default 'Живая колода',
  author text not null default '',
  tagline text not null default '',
  intro text not null default '',
  seeded boolean not null default false,
  updated_at timestamptz not null default now()
);

create table if not exists oracle_cards (
  number integer primary key,
  title text not null default '',
  keywords text not null default '',
  description text not null default '',
  image_data text,
  video_url text not null default '',
  updated_at timestamptz not null default now(),
  constraint oracle_cards_number_range check (number >= 1 and number <= 108)
);

insert into deck_settings (id, name, tagline, intro)
values (
  'default',
  'Живая колода',
  '108 карт. Каждая может ожить.',
  'Это пространство вашей оракульной колоды. Вытяните карту — или откройте студию и вдохните в каждую из 108 карт слово, образ и короткое видео.'
)
on conflict (id) do nothing;

insert into oracle_cards (number)
select g from generate_series(1, 108) as g
on conflict (number) do nothing;
