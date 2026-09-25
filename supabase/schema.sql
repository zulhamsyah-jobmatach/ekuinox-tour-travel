-- Skema database untuk website Ekuinox Tour & Travel.
-- Jalankan di Supabase: Dashboard -> SQL Editor -> tempel -> Run.

create table if not exists cities (
  slug text primary key,
  name text not null,
  tag text not null,
  description text not null,
  active boolean not null default true
);

create table if not exists destinations (
  id bigint generated always as identity primary key,
  city_slug text not null references cities(slug),
  kind text not null,
  name text not null,
  description text not null,
  tip text not null
);

alter table cities enable row level security;
alter table destinations enable row level security;

create policy "Cities boleh dibaca publik" on cities
  for select using (true);

create policy "Destinations boleh dibaca publik" on destinations
  for select using (true);
