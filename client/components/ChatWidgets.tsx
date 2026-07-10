import { useEffect } from "react";
import { MessageCircle } from "lucide-react";

export default function ChatWidgets() {
  useEffect(() => {
    // Load Tawk.to script
    const Tawk_API: any = {};
    const Tawk_LoadStart = new Date();
    
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/684ad4edc3b32f1912961f53/1itiaadft";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.head.appendChild(s1);
  }, []);

  return (
    <>
      {/* WhatsApp Widget Button - Left on mobile, Right on desktop */}
      <div className="fixed bottom-6 left-6 md:left-auto md:right-6 z-[9999] animate-bounce">
        <a
          href="https://wa.me/15123259923"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 transition-all duration-300 hover:scale-110 hover:bg-green-600"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={28} className="text-white" />
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
