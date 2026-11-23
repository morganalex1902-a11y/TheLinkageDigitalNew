import { useState } from "react";

type FAQAccordionProps = {
  items: readonly { q: string; a: string }[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, index) => (
        <div key={item.q} className="border-t border-[#ECECEC]">
          <button
            type="button"
            aria-expanded={openFaq === index}
            aria-controls={`faq-answer-${index}`}
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
            className="relative w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left group overflow-hidden"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute rounded-full"
              style={{
                width: 0,
                height: 0,
                left: 0,
                top: 0,
                backgroundColor: "#8B0AB4",
                opacity: 0.05,
                transform: "translate(-50%, -50%) scale(0)",
                transition: "opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                zIndex: 0,
              }}
            />
            <span className="relative z-10">
              <span
                className={`font-kanit font-bold uppercase text-[12px] md:text-[14px] tracking-wider leading-snug transition-colors ${
                  openFaq === index ? "text-[#121212]" : "text-[#333] group-hover:text-[#8B0AB4]"
                }`}
              >
                {item.q}
              </span>
            </span>
            <span
              aria-hidden="true"
              className={`flex-shrink-0 relative z-10 w-6 h-6 flex items-center justify-center font-kanit font-light text-xl leading-none transition-colors ${
                openFaq === index ? "text-[#121212]" : "text-[#555] group-hover:text-[#8B0AB4]"
              }`}
            >
              {openFaq === index ? "−" : "+"}
            </span>
          </button>
          <div
            id={`faq-answer-${index}`}
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: openFaq === index ? "1000px" : "0px", opacity: openFaq === index ? 1 : 0 }}
          >
            <div className="pb-6 pr-8">
              <p className="font-kanit font-normal text-[#555] text-[13px] md:text-[15px] leading-[1.7]">
                {item.a}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="border-t border-[#ECECEC]" />
    </div>
  );
}
