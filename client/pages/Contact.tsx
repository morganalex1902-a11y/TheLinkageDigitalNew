import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { OriginButton } from "../components/ui/origin-button";
import SiteHeader from "../components/SiteHeader";
import { useInView } from "../hooks/useInView";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    services: [] as string[],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const formRef = useInView();
  const whyRef = useInView();
  const processRef = useInView();
  const testimonialsRef = useInView();
  const faqRef = useInView();

  const SERVICES_CHECKBOX = [
    "Web Design",
    "Web Development",
    "Mobile App",
    "E-Commerce",
    "Branding",
    "Digital Marketing",
  ];

  const WHY_CHOOSE_US = [
    {
      title: "Expert Team",
      desc: "50+ talented professionals with years of experience across multiple disciplines.",
      icon: "👥",
    },
    {
      title: "Proven Track Record",
      desc: "250+ successful projects delivered with 98% client satisfaction rate.",
      icon: "🏆",
    },
    {
      title: "Custom Solutions",
      desc: "We don't believe in one-size-fits-all. Every project is tailored to your needs.",
      icon: "⚙️",
    },
    {
      title: "Ongoing Support",
      desc: "We're with you every step of the way with comprehensive support packages.",
      icon: "🤝",
    },
    {
      title: "Latest Technology",
      desc: "We use cutting-edge tools and frameworks to build future-proof solutions.",
      icon: "⚡",
    },
    {
      title: "Results-Driven",
      desc: "Our focus is on delivering measurable results that impact your bottom line.",
      icon: "📈",
    },
  ];

  const PROCESS_STEPS = [
    {
      step: "01",
      title: "Initial Consultation",
      desc: "We'll schedule a call to understand your project, goals, timeline, and budget.",
    },
    {
      step: "02",
      title: "Proposal & Quote",
      desc: "We'll create a detailed proposal outlining scope, timeline, deliverables, and pricing.",
    },
    {
      step: "03",
      title: "Project Kick-off",
      desc: "Once approved, we'll assemble your dedicated team and begin the project.",
    },
    {
      step: "04",
      title: "Regular Updates",
      desc: "You'll receive weekly updates, demos, and have direct access to your project lead.",
    },
    {
      step: "05",
      title: "Launch & Testing",
      desc: "Comprehensive testing, final revisions, and a smooth launch to production.",
    },
    {
      step: "06",
      title: "Ongoing Support",
      desc: "Post-launch support, maintenance, and optimization to ensure continued success.",
    },
  ];

  const TESTIMONIALS = [
    {
      name: "John Smith",
      company: "TechStartup Inc.",
      role: "CEO",
      text: "The Linkage Digital completely transformed our digital presence. Their team was professional, responsive, and delivered beyond our expectations.",
      initial: "JS",
      rating: 5,
    },
    {
      name: "Sarah Mitchell",
      company: "E-Commerce Solutions",
      role: "Founder",
      text: "Working with them was fantastic. They understood our vision immediately and delivered a platform that increased our sales by 45%.",
      initial: "SM",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      company: "Digital Marketing Co.",
      role: "Director",
      text: "Exceptional service from start to finish. The attention to detail and commitment to quality is unmatched. Highly recommend!",
      initial: "MJ",
      rating: 5,
    },
  ];

  const FAQ = [
    {
      q: "What is your typical project timeline?",
      a: "Project timelines vary based on scope and complexity. Most web design projects take 8-12 weeks, while full-stack applications range from 4-6 months. We provide detailed timelines in our proposal.",
    },
    {
      q: "Do you work with startups and large enterprises?",
      a: "Yes! We work with everyone from early-stage startups to established enterprises. Our flexible approach means we can scale our team and resources to match your needs.",
    },
    {
      q: "What's included in your support packages?",
      a: "Our support packages include bug fixes, security updates, performance optimization, content updates, and feature enhancements. We offer plans ranging from basic (emergency support) to comprehensive (24/7 support).",
    },
    {
      q: "Do you offer retainer-based services?",
      a: "Absolutely. Many clients prefer retainer arrangements for ongoing work. We can structure custom retainer packages based on your monthly needs.",
    },
    {
      q: "Can you help with existing projects or migrations?",
      a: "Yes, we specialize in audits, improvements, redesigns, and migrations. Whether you need to migrate from an old platform or improve an existing site, we can help.",
    },
    {
      q: "What's your process for handling project changes?",
      a: "We use an agile approach that accommodates changes. Scope changes are tracked, and we discuss impact on timeline and budget before implementing.",
    },
    {
      q: "Do you provide training on the platforms you build?",
      a: "Yes, we provide comprehensive training to your team on how to manage and update your new platform. We also create detailed documentation.",
    },
    {
      q: "What are your payment terms?",
      a: "Typically we work on 50% upfront, 50% on completion. For larger projects, we can structure milestone-based payments. We accept all major payment methods.",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        services: [],
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white font-kanit">
      <SiteHeader />

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
                <p className="text-[#555] font-kanit font-normal text-base md:text-[18px] lg:text-[20px] leading-[1.55] max-w-[480px]">
                  Have a project in mind? We'd love to hear about it. Get in touch with our team today and let's create something amazing together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ── CONTACT FORM & INFO SECTION ── */}
      <section ref={formRef as React.RefObject<HTMLElement>} className="bg-[#F9F9F9] py-16 md:py-24 lg:py-32 overflow-hidden reveal">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact form */}
            <div>
              <h2 className="font-teko font-bold text-[#121212] uppercase text-[28px] md:text-[36px] leading-[1.1] mb-2">
                Tell Us About Your Project
              </h2>
              <p className="font-kanit text-[#555] text-[15px] md:text-[16px] mb-10">
                Fill out the form below with details about your project. We'll review it and get back to you within 24 business hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-kanit font-semibold text-[#121212] text-[13px] uppercase mb-3 tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-6 py-4 font-kanit text-[14px] md:text-[15px] border border-[#ECECEC] rounded-lg focus:outline-none focus:border-[#8B0AB4] focus:ring-1 focus:ring-[#8B0AB4]/20 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-kanit font-semibold text-[#121212] text-[13px] uppercase mb-3 tracking-wider">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 font-kanit text-[14px] md:text-[15px] border border-[#ECECEC] rounded-lg focus:outline-none focus:border-[#8B0AB4] focus:ring-1 focus:ring-[#8B0AB4]/20 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-kanit font-semibold text-[#121212] text-[13px] uppercase mb-3 tracking-wider">
                      Company Name
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
                    <label className="block font-kanit font-semibold text-[#121212] text-[13px] uppercase mb-3 tracking-wider">
                      Project Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-6 py-4 font-kanit text-[14px] md:text-[15px] border border-[#ECECEC] rounded-lg focus:outline-none focus:border-[#8B0AB4] focus:ring-1 focus:ring-[#8B0AB4]/20 transition-colors bg-white"
                    >
                      <option value="">Select a range</option>
                      <option value="5-10k">$5,000 - $10,000</option>
                      <option value="10-25k">$10,000 - $25,000</option>
                      <option value="25-50k">$25,000 - $50,000</option>
                      <option value="50-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-kanit font-semibold text-[#121212] text-[13px] uppercase mb-4 tracking-wider">
                    What services interest you?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {SERVICES_CHECKBOX.map((service) => (
                      <label key={service} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="w-5 h-5 border border-[#ECECEC] rounded accent-[#8B0AB4]"
                        />
                        <span className="font-kanit text-[14px] text-[#555]">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-kanit font-semibold text-[#121212] text-[13px] uppercase mb-3 tracking-wider">
                    Project Description *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, your goals, and any specific requirements..."
                    rows={6}
                    className="w-full px-6 py-4 font-kanit text-[14px] md:text-[15px] border border-[#ECECEC] rounded-lg focus:outline-none focus:border-[#8B0AB4] focus:ring-1 focus:ring-[#8B0AB4]/20 transition-colors resize-none"
                    required
                  />
                </div>

                <OriginButton
                  fillColor="#8B0AB4"
                  type="submit"
                  className="w-full bg-[#8B0AB4] text-white font-kanit font-medium text-[13px] md:text-[14px] uppercase px-8 py-4 rounded-lg hover:bg-[#7a0a94] transition-colors"
                >
                  {submitted ? "Message Sent! ✓" : "Send Project Details"}
                </OriginButton>
              </form>
            </div>

            {/* Quick info cards */}
            <div className="space-y-8">
              <div>
                <h3 className="font-teko font-bold text-[#121212] uppercase text-[24px] md:text-[28px] leading-[1.1] mb-8">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  <div className="bg-white p-6 md:p-7 rounded-lg border border-[#ECECEC] hover:border-[#8B0AB4] transition-colors">
                    <div className="text-4xl mb-3">✉️</div>
                    <h4 className="font-teko font-bold text-[#121212] uppercase text-[16px] mb-2">
                      Email
                    </h4>
                    <a href="mailto:hello@thelinkagedigital.com" className="font-kanit text-[#8B0AB4] hover:text-[#7a0a94] transition-colors">
                      hello@thelinkagedigital.com
                    </a>
                  </div>

                  <div className="bg-white p-6 md:p-7 rounded-lg border border-[#ECECEC] hover:border-[#8B0AB4] transition-colors">
                    <div className="text-4xl mb-3">📞</div>
                    <h4 className="font-teko font-bold text-[#121212] uppercase text-[16px] mb-2">
                      Phone
                    </h4>
                    <a href="tel:+15551234567" className="font-kanit text-[#8B0AB4] hover:text-[#7a0a94] transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>

                  <div className="bg-white p-6 md:p-7 rounded-lg border border-[#ECECEC] hover:border-[#8B0AB4] transition-colors">
                    <div className="text-4xl mb-3">📍</div>
                    <h4 className="font-teko font-bold text-[#121212] uppercase text-[16px] mb-2">
                      Office
                    </h4>
                    <p className="font-kanit text-[#555]">
                      123 Digital Street<br />
                      Tech City, TC 12345<br />
                      United States
                    </p>
                  </div>

                  <div className="bg-white p-6 md:p-7 rounded-lg border border-[#ECECEC] hover:border-[#8B0AB4] transition-colors">
                    <div className="text-4xl mb-3">🕐</div>
                    <h4 className="font-teko font-bold text-[#121212] uppercase text-[16px] mb-2">
                      Business Hours
                    </h4>
                    <p className="font-kanit text-[#555]">
                      Monday - Friday<br />
                      9:00 AM - 6:00 PM EST<br />
                      <span className="text-[#999]">Closed on weekends</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h4 className="font-kanit font-semibold text-[#121212] text-[13px] uppercase mb-5 tracking-wider">
                  Follow Us On Social
                </h4>
                <div className="flex gap-4 flex-wrap">
                  {[
                    { name: "Twitter", icon: "𝕏" },
                    { name: "LinkedIn", icon: "in" },
                    { name: "Facebook", icon: "f" },
                    { name: "Instagram", icon: "📷" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-12 h-12 rounded-full border border-[#ECECEC] flex items-center justify-center hover:bg-[#8B0AB4] hover:border-[#8B0AB4] hover:text-white transition-all text-[#121212] font-medium text-[14px]"
                      title={social.name}
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

      {/* ── WHY CHOOSE US SECTION ── */}
      <section ref={whyRef as React.RefObject<HTMLElement>} className="bg-white py-16 md:py-24 lg:py-32 overflow-hidden reveal">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14 md:mb-20">
            <span className="font-kanit font-bold text-[13px] md:text-[16px] uppercase text-[#121212] block mb-4">
              Why Choose Us
            </span>
            <h2 className="font-teko font-bold text-[#121212] uppercase leading-[0.92] text-[clamp(1.8rem,4.5vw,5rem)]">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {WHY_CHOOSE_US.map((item, i) => (
              <div key={i} className="reveal-stagger bg-[#F9F9F9] p-8 md:p-10 rounded-lg hover:shadow-lg hover:border-[#8B0AB4] border border-transparent transition-all">
                <div className="text-5xl md:text-6xl mb-5">{item.icon}</div>
                <h3 className="font-teko font-bold text-[#121212] uppercase text-[20px] md:text-[24px] leading-[1.1] mb-3">
                  {item.title}
                </h3>
                <p className="font-kanit font-normal text-[#555] text-[15px] md:text-[16px] leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS SECTION ── */}
      <section ref={processRef as React.RefObject<HTMLElement>} className="bg-[#F9F9F9] py-16 md:py-24 lg:py-32 overflow-hidden reveal">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14 md:mb-20">
            <span className="font-kanit font-bold text-[13px] md:text-[16px] uppercase text-[#121212] block mb-4">
              Our Process
            </span>
            <h2 className="font-teko font-bold text-[#121212] uppercase leading-[0.92] text-[clamp(1.8rem,4.5vw,5rem)]">
              How We Work With You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((item, i) => (
              <div key={i} className="reveal-stagger">
                <div className="flex items-start gap-6 mb-5">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#8B0AB4] border-4 border-white flex-shrink-0">
                    <span className="font-teko font-bold text-white text-[18px]">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-teko font-bold text-[#121212] uppercase text-[18px] md:text-[22px] leading-[1.1]">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="font-kanit font-normal text-[#555] text-[14px] md:text-[15px] leading-[1.6] md:ml-22">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS SECTION ── */}
      <section ref={testimonialsRef as React.RefObject<HTMLElement>} className="bg-white py-16 md:py-24 lg:py-32 overflow-hidden reveal">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14 md:mb-20">
            <span className="font-kanit font-bold text-[13px] md:text-[16px] uppercase text-[#121212] block mb-4">
              Client Feedback
            </span>
            <h2 className="font-teko font-bold text-[#121212] uppercase leading-[0.92] text-[clamp(1.8rem,4.5vw,5rem)]">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="reveal-stagger bg-[#F9F9F9] p-8 md:p-10 rounded-lg border border-[#ECECEC] hover:border-[#8B0AB4] transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#8B0AB4] flex items-center justify-center flex-shrink-0">
                    <span className="font-teko font-bold text-white text-[16px]">
                      {testimonial.initial}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-teko font-bold text-[#121212] uppercase text-[14px]">
                      {testimonial.name}
                    </h4>
                    <p className="font-kanit text-[#555] text-[12px]">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, j) => (
                      <span key={j} className="text-[#8B0AB4]">★</span>
                    ))}
                </div>
                <p className="font-kanit text-[#555] text-[15px] leading-[1.6]">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section ref={faqRef as React.RefObject<HTMLElement>} className="bg-[#F9F9F9] py-16 md:py-24 lg:py-32 overflow-hidden reveal">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14 md:mb-20">
            <span className="font-kanit font-bold text-[13px] md:text-[16px] uppercase text-[#121212] block mb-4">
              FAQs
            </span>
            <h2 className="font-teko font-bold text-[#121212] uppercase leading-[0.92] text-[clamp(1.8rem,4.5vw,5rem)]">
              Common Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ.map((faq, i) => (
              <div key={i} className="reveal-stagger bg-white border border-[#ECECEC] rounded-lg p-6 md:p-8 hover:border-[#8B0AB4] transition-colors">
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

      {/* ── FINAL CTA SECTION ── */}
      <section className="bg-[#121212] py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="font-teko font-bold text-white uppercase leading-[0.92] text-[clamp(2rem,5.5vw,5rem)] mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-kanit font-normal text-white text-[15px] md:text-[18px] leading-[1.55] max-w-[450px] mx-auto mb-10">
            Don't wait to transform your digital presence. Reach out today and let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <OriginButton
              onClick={() => {
                document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              fillColor="#8B0AB4"
              className="bg-[#8B0AB4] text-white font-kanit font-medium text-[13px] md:text-[15px] uppercase px-8 py-4 hover:bg-[#7a0a94] transition-colors"
            >
              Start Your Project
            </OriginButton>
            <OriginButton
              onClick={() => navigate("/")}
              fillColor="#8B0AB4"
              className="border-2 border-white text-white font-kanit font-medium text-[13px] md:text-[15px] uppercase px-8 py-4 hover:bg-white hover:text-[#121212] transition-colors"
            >
              Back to Home
            </OriginButton>
          </div>
        </div>
      </section>
    </div>
  );
}
