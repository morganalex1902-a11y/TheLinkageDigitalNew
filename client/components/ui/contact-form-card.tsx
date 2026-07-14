import { useState } from "react";
import { cn } from "@/lib/utils";
import { submitToWeb3Forms } from "@/lib/web3forms";

const styles = `
  @keyframes slideUpIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fieldFocus {
    from {
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 4px 12px rgba(139, 10, 180, 0.12), 0 8px 20px rgba(139, 10, 180, 0.15), 0 2px 6px rgba(0, 0, 0, 0.08);
    }
    to {
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 4px 12px rgba(139, 10, 180, 0.2), 0 12px 28px rgba(139, 10, 180, 0.25), 0 4px 8px rgba(0, 0, 0, 0.12);
    }
  }

  .contact-form-card {
    animation: slideUpIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .contact-field {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .contact-field:focus-within {
    animation: fieldFocus 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  .contact-field input,
  .contact-field textarea {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .contact-field input:focus,
  .contact-field textarea:focus {
    transform: translateY(-2px);
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export function ContactFormCard() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const sent = await submitToWeb3Forms(new FormData(e.currentTarget));
      if (sent) setFormData({ email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full max-w-md contact-form-card">
      {/* Glossy 3D card with shadow and depth */}
      <div
        className="relative p-8 md:p-10 rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(255, 232, 245, 0.98) 0%, rgba(248, 220, 240, 0.98) 100%)",
          backdropFilter: "blur(20px)",
          boxShadow: `
            0 0 60px rgba(139, 10, 180, 0.2),
            0 20px 60px rgba(139, 10, 180, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.9),
            inset 0 -1px 20px rgba(139, 10, 180, 0.12)
          `,
          border: "1px solid rgba(139, 10, 180, 0.25)",
        }}
      >
        {/* Top shine overlay for 3D effect */}
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-60"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="mb-2">
            <span className="text-[#8B0AB4] font-kanit font-medium text-sm">✨ HELLO!</span>
          </div>

          <h2 className="font-teko font-bold text-black uppercase text-3xl md:text-4xl mb-6">
            Let's Talk<br />With Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div
              className="contact-field relative rounded-xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #FFE8F5 0%, #F8DCF0 100%)",
                boxShadow: `
                  inset 0 1px 0 rgba(255, 255, 255, 0.8),
                  inset 0 4px 12px rgba(139, 10, 180, 0.12),
                  0 8px 20px rgba(139, 10, 180, 0.15),
                  0 2px 6px rgba(0, 0, 0, 0.08)
                `,
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="sales@thelinkagedigital.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent px-4 py-4 font-kanit text-sm text-[#333] placeholder-[#999] outline-none transition-all focus:placeholder-[#8B0AB4]"
                required
              />
            </div>

            <div
              className="contact-field relative rounded-xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #FFE8F5 0%, #F8DCF0 100%)",
                boxShadow: `
                  inset 0 1px 0 rgba(255, 255, 255, 0.8),
                  inset 0 4px 12px rgba(139, 10, 180, 0.12),
                  0 8px 20px rgba(139, 10, 180, 0.15),
                  0 2px 6px rgba(0, 0, 0, 0.08)
                `,
              }}
            >
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent px-4 py-4 font-kanit text-sm text-[#333] placeholder-[#999] outline-none transition-all resize-none focus:placeholder-[#8B0AB4]"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-6 bg-[#262629] text-white font-kanit font-medium text-sm uppercase px-6 py-3 rounded-lg relative overflow-hidden group transition-all disabled:opacity-50"
              style={{
                boxShadow: "0 10px 30px rgba(139, 10, 180, 0.2)",
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? "Sending..." : "Let's Get In Touch"}
                <span>→</span>
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: "linear-gradient(135deg, #8B0AB4, #6B0894)",
                }}
              />
            </button>
          </form>
        </div>

        {/* Bottom accent glow */}
        <div
          className="absolute bottom-0 right-0 w-32 h-32 opacity-30 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #8B0AB4, transparent)",
            filter: "blur(40px)",
          }}
        />
      </div>
    </div>
  );
}
