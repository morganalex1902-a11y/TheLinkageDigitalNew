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
      {/* WhatsApp Widget Button - Right side */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <a
          href="https://wa.me/15123259923"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110"
          title="Chat on WhatsApp"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.768.966-.941 1.159-.173.193-.347.217-.644.05-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.052 0-2.082.398-2.847 1.12-.735.707-1.143 1.649-1.143 2.678 0 1.029.408 2.001 1.143 2.708.765.722 1.795 1.12 2.847 1.12h.004c1.052 0 2.082-.398 2.847-1.12.735-.707 1.143-1.679 1.143-2.708 0-1.029-.408-1.971-1.143-2.678-.765-.722-1.795-1.12-2.847-1.12M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 23.25C5.9 23.25.75 18.1.75 12S5.9.75 12 .75 23.25 5.9 23.25 12 18.1 23.25 12 23.25"
              fill="currentColor"
            />
          </svg>
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
