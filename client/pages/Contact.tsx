import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { OriginButton } from "../components/ui/origin-button";
import { useInView } from "../hooks/useInView";

const LOGO =
  "https://cdn.builder.io/api/v1/image/assets%2F37fe508629794307b44d873859aad7cf%2F2b1408065852494b93dd7445e38a5652?format=webp&width=800";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const contactRef = useInView();

  const CONTACT_INFO = [
    {
      title: "Email",
      value: "hello@thelinkagedigital.com",
      icon: "✉️",
    },
    {
      title: "Phone",
      value: "+1 (555) 123-4567",
      icon: "📞",
    },
    {
      title: "Office",
      value: "123 Digital Street, Tech City, TC 12345",
      icon: "📍",
    },
    {
      title: "Hours",
      value: "Monday - Friday, 9:00 AM - 6:00 PM EST",
      icon: "🕐",
    },
  ];

  const SOCIAL_LINKS = [
    { name: "Twitter", icon: "𝕏", link: "#" },
    { name: "LinkedIn", icon: "in", link: "#" },
    { name: "Facebook", icon: "f", link: "#" },
    { name: "Instagram", icon: "📷", link: "#" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white font-kanit">
      {/* ── NAVBAR ── */}
      <header className="border-b border-[#ECECEC] relative z-50 bg-white sticky top-0 transition-shadow duration-300">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-[87px]">
          <img
            src={LOGO}
            alt="The Linkage Digital"
            className="h-[56px] md:h-[68px] lg:h-[78px] w-auto flex-shrink-0"
          />
          <button
            onClick={() => navigate("/")}
            className="font-kanit font-medium text-[13px] md:text-[15px] uppercase px-6 py-3 text-[#121212] hover:text-[#8B0AB4] transition-colors"
          >
            Back
          </button>
        </div>
      </header>

      <main className="relative overflow-hidden">
        {/* ── HERO SECTION ── */}
        <div className="max-w-[1400px] mx-auto px-6 pt-10 md:pt-14 lg:pt-20 pb-16 lg:pb-28">
          <div className="flex flex-col lg:items-center lg:gap-12">
            <div className="flex-1">
              <h1 className="hero-heading font-teko font-bold text-black uppercase">
                <span className="hero-line block">Let's</span>
                <span className="hero-line block">Work</span>
                <span className="hero-line block">Together</span>
              </h1>
              <div className="w-[282px] max-w-full h-px bg-[#8B0AB4] mt-3" />
              <div className="w-[282px] max-w-full h-px bg-[#8B0AB4] mt-[3px]" />
              
              <div className="mt-10 md:mt-14">
                <p className="text-[#555] font-kanit font-normal text-base md:text-[18px] lg:text-[20px] leading-[1.55] max-w-[460px]">
                  Have a project in mind or want to discuss how we can help? Get in touch with our team today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ── CONTACT SECTION ── */}
      <section ref={contactRef as React.RefObject<HTMLElement>} className="bg-[#F9F9F9] py-16 md:py-24 lg:py-32 overflow-hidden reveal">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact form */}
            <div>
              <h2 className="font-teko font-bold text-[#121212] uppercase text-[28px] md:text-[32px] leading-[1.1] mb-2">
                Send us a Message
              </h2>
              <p className="font-kanit text-[#555] text-[15px] md:text-[16px] mb-10">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-kanit font-semibold text-[#121212] text-[13px] uppercase mb-2 tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-6 py-4 font-kanit text-[14px] md:text-[15px] border border-[#ECECEC] rounded-lg focus:outline-none focus:border-[#8B0AB4] focus:ring-1 focus:ring-[#8B0AB4]/20 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block font-kanit font-semibold text-[#121212] text-[13px] uppercase mb-2 tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 font-kanit text-[14px] md:text-[15px] border border-[#ECECEC] rounded-lg focus:outline-none focus:border-[#8B0AB4] focus:ring-1 focus:ring-[#8B0AB4]/20 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block font-kanit font-semibold text-[#121212] text-[13px] uppercase mb-2 tracking-wider">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full px-6 py-4 font-kanit text-[14px] md:text-[15px] border border-[#ECECEC] rounded-lg focus:outline-none focus:border-[#8B0AB4] focus:ring-1 focus:ring-[#8B0AB4]/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-kanit font-semibold text-[#121212] text-[13px] uppercase mb-2 tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="w-full px-6 py-4 font-kanit text-[14px] md:text-[15px] border border-[#ECECEC] rounded-lg focus:outline-none focus:border-[#8B0AB4] focus:ring-1 focus:ring-[#8B0AB4]/20 transition-colors resize-none"
                    required
                  />
                </div>

                <OriginButton
                  fillColor="#8B0AB4"
                  type="submit"
                  className="w-full bg-[#8B0AB4] text-white font-kanit font-medium text-[13px] md:text-[14px] uppercase px-8 py-4 rounded-lg hover:bg-[#7a0a94] transition-colors"
                >
                  {submitted ? "Message Sent! ✓" : "Send Message"}
                </OriginButton>
              </form>
            </div>

            {/* Contact info */}
            <div>
              <h2 className="font-teko font-bold text-[#121212] uppercase text-[28px] md:text-[32px] leading-[1.1] mb-10">
                Get In Touch
              </h2>

              <div className="space-y-8 mb-14">
                {CONTACT_INFO.map((info, i) => (
                  <div key={i} className="reveal-stagger">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0">{info.icon}</div>
                      <div>
                        <h3 className="font-teko font-bold text-[#121212] uppercase text-[18px] md:text-[20px] leading-[1.1] mb-2">
                          {info.title}
                        </h3>
                        <p className="font-kanit text-[#555] text-[15px] md:text-[16px] leading-[1.6]">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div>
                <h3 className="font-kanit font-semibold text-[#121212] text-[13px] uppercase mb-6 tracking-wider">
                  Follow us
                </h3>
                <div className="flex gap-4 flex-wrap">
                  {SOCIAL_LINKS.map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      className="w-12 h-12 rounded-full border border-[#ECECEC] flex items-center justify-center hover:bg-[#8B0AB4] hover:border-[#8B0AB4] hover:text-white transition-all text-[#121212] font-medium"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP SECTION (Optional) ── */}
      <section className="h-[400px] md:h-[500px] bg-[#ECECEC] overflow-hidden">
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#F9F9F9] to-[#E8E8E8]">
          <div className="text-center">
            <div className="text-6xl mb-4">🌍</div>
            <p className="font-kanit text-[#555] text-[16px] md:text-[18px]">
              Map integration coming soon
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14 md:mb-20">
            <span className="font-kanit font-bold text-[13px] md:text-[16px] uppercase text-[#121212] block mb-4">
              FAQs
            </span>
            <h2 className="font-teko font-bold text-[#121212] uppercase leading-[0.92] text-[clamp(1.8rem,4.5vw,5rem)]">
              Common Questions
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-4 md:space-y-6">
            {[
              {
                q: "What is the typical project timeline?",
                a: "Project timelines vary depending on scope and complexity. Most projects take between 2-4 months from discovery to launch.",
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes, we provide ongoing support and maintenance packages for all our projects. We're with you long after launch.",
              },
              {
                q: "What's your process for starting a new project?",
                a: "We start with a discovery call to understand your goals, then create a detailed proposal with timeline and pricing.",
              },
              {
                q: "Can you help with existing projects?",
                a: "Absolutely! We offer audits, improvements, and redesigns for existing websites and applications.",
              },
            ].map((faq, i) => (
              <div key={i} className="reveal-stagger border border-[#ECECEC] rounded-lg p-6 md:p-8 hover:border-[#8B0AB4] transition-colors">
                <h3 className="font-teko font-bold text-[#121212] uppercase text-[16px] md:text-[18px] leading-[1.2] mb-3">
                  {faq.q}
                </h3>
                <p className="font-kanit text-[#555] text-[14px] md:text-[15px] leading-[1.6]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
