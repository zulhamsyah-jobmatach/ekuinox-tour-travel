// Fungsi pengambil data: coba dari Supabase dulu,
// kalau gagal / belum disetel, pakai data bawaan.

import { getSupabase } from "./supabase";
import { CITIES, DESTINATIONS, City, Destination } from "./data";

export async function getCities(): Promise<City[]> {
  const supabase = getSupabase();
  if (!supabase) return CITIES;

  const { data, error } = await supabase
    .from("cities")
    .select("slug, name, tag, description, active, photo")
    .order("name");

  if (error || !data || data.length === 0) return CITIES;
  return data as City[];
}

export async function getCity(slug: string): Promise<City | undefined> {
  const cities = await getCities();
  return cities.find((c) => c.slug === slug);
}

export async function getDestinations(citySlug: string): Promise<Destination[]> {
  const supabase = getSupabase();
  if (!supabase) return DESTINATIONS.filter((d) => d.city_slug === citySlug);

  const { data, error } = await supabase
    .from("destinations")
    .select("id, city_slug, kind, name, description, tip")
    .eq("city_slug", citySlug)
    .order("id");

  if (error || !data || data.length === 0) {
    return DESTINATIONS.filter((d) => d.city_slug === citySlug);
  }
  return data as Destination[];
}
