import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ChatWidgets() {
  useEffect(() => {
    if (document.querySelector('script[data-tawk-widget="true"]')) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/684ad4edc3b32f1912961f53/1itiaadft";
    script.charset = "UTF-8";
    script.dataset.tawkWidget = "true";
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <>
      <div className="fixed bottom-6 left-6 z-[9999] animate-bounce md:hidden">
        <a
          href="https://wa.me/15123259923"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 transition-all duration-300 hover:scale-110 hover:bg-green-600"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp size={28} className="text-white" aria-hidden="true" />
        </a>
      </div>

      {/* Tawk.to Widget - Left side */}
      {/* The Tawk.to widget will be injected by their script on the left side */}
      <style>{`
        /* Reposition Tawk.to iframe to the left side */
        iframe[src*="tawk.to"] {
          left: 24px !important;
          right: auto !important;
        }
      `}</style>
    </>
  );
}
