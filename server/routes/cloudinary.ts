import { createHash } from "node:crypto";
import type { RequestHandler } from "express";
import { createClient } from "@supabase/supabase-js";

export const handleCloudinarySignature: RequestHandler = async (req, res) => {
  const authorization = req.headers.authorization;
  const token = authorization?.startsWith("Bearer ") ? authorization.slice(7) : "";
  if (!token) {
    res.status(401).json({ error: "Sign in to upload portfolio media." });
    return;
  }

  const resourceType = req.body?.resourceType;
  if (resourceType !== "image" && resourceType !== "video") {
    res.status(400).json({ error: "Choose an image or video upload." });
    return;
  }

  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY ?? process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  const cloudinaryUrl = process.env.CLOUDINARY_URL;
  if (!supabaseUrl || !supabaseKey || !cloudinaryUrl) {
    res.status(503).json({ error: "Media uploads are not configured on the server." });
    return;
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    accessToken: async () => token,
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
  const { data: isAdmin, error: accessError } = await supabase.rpc("is_portfolio_admin");
  if (accessError) {
    console.error("Supabase rejected the Clerk token for Cloudinary signing:", accessError.code);
    res.status(502).json({ error: "Supabase could not verify this Clerk session. Configure Clerk under Supabase Authentication → Third-Party Auth, and include role: authenticated and the user's email in Clerk session tokens." });
    return;
  }
  if (!isAdmin) {
    res.status(403).json({ error: "This Clerk account does not have portfolio admin access." });
    return;
  }

  try {
    const cloudinary = new URL(cloudinaryUrl);
    const cloudName = cloudinary.hostname;
    const apiKey = decodeURIComponent(cloudinary.username);
    const apiSecret = decodeURIComponent(cloudinary.password);
    if (cloudinary.protocol !== "cloudinary:" || !cloudName || !apiKey || !apiSecret) {
      throw new Error("Invalid Cloudinary configuration");
    }

    const timestamp = Math.floor(Date.now() / 1000);
    const folder = `portfolio/${resourceType}`;
    const signature = createHash("sha1")
      .update(`folder=${folder}&timestamp=${timestamp}${apiSecret}`)
      .digest("hex");

    res.json({ cloudName, apiKey, timestamp, folder, signature });
  } catch {
    res.status(503).json({ error: "Cloudinary is not configured correctly on the server." });
  }
};
