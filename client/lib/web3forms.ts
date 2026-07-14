const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "04fd7c41-1d3a-4f8a-90d5-dadb90d2bc2d";

export async function submitToWeb3Forms(data: FormData): Promise<boolean> {
  data.set("access_key", WEB3FORMS_ACCESS_KEY);

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    body: data,
  });

  if (!response.ok) return false;

  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}
