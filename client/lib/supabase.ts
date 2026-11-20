import { createClient } from "@supabase/supabase-js";

const environment = (import.meta as unknown as { env?: Record<string, string | undefined> }).env ?? {};

export const supabase = createClient(
  environment.VITE_SUPABASE_URL ?? "https://placeholder.supabase.co",
  environment.VITE_SUPABASE_PUBLISHABLE_KEY ?? "placeholder-publishable-key",
);
