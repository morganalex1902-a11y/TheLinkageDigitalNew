import { useState } from "react";
import { cn } from "@/lib/utils";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // API call would go here
      console.log("Form submitted:", formData);
      setFormData({ email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full max-w-md">
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

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                name="email"
                placeholder="sales@thelinkagedigital.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#E0E0E0] focus:border-[#8B0AB4] py-3 font-kanit text-sm text-[#333] placeholder-[#999] outline-none transition-colors"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full bg-transparent border-b border-[#E0E0E0] focus:border-[#8B0AB4] py-3 font-kanit text-sm text-[#333] placeholder-[#999] outline-none transition-colors resize-none"
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
