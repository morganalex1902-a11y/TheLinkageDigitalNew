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
  if (accessError || !isAdmin) {
    res.status(403).json({ error: "Portfolio admin access is required." });
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
