// Koneksi ke database Supabase.
// Kalau .env.local belum diisi, fungsi ini mengembalikan null
// dan website otomatis memakai data bawaan dari lib/data.ts.

import { createClient, SupabaseClient } from "@supabase/supabase-js";

export function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key || url.includes("xxxxx")) return null;
  return createClient(url, key);
}
