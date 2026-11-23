import { useEffect } from "react";

const SCRIPT_URL = "https://api.blootrue.com/api/widgets/platform.js";

export default function TrustpilotWidget({ compact = false }: { compact?: boolean }) {
  useEffect(() => {
    if (document.querySelector(`script[src="${SCRIPT_URL}"]`)) return;

    const script = document.createElement("script");
    script.src = SCRIPT_URL;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div
      className={`blootrue-widget-gRuIm9QNGZMz ${compact ? "h-[145px] overflow-hidden [&>iframe]:!h-[410px] [&>iframe]:!max-h-none [&>iframe]:!-translate-y-32" : ""}`}
    />
  );
}
