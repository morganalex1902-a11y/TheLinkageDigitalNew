import { createClient } from "@supabase/supabase-js";

const environment = (import.meta as unknown as { env?: Record<string, string | undefined> }).env ?? {};
const supabaseUrl = environment.VITE_SUPABASE_URL ?? "https://placeholder.supabase.co";
const supabasePublishableKey = environment.VITE_SUPABASE_PUBLISHABLE_KEY ?? "placeholder-publishable-key";

export const supabase = createClient(supabaseUrl, supabasePublishableKey);

export function createSupabaseClient(getClerkToken: () => Promise<string | null>) {
  return createClient(supabaseUrl, supabasePublishableKey, {
    accessToken: getClerkToken,
  });
}
