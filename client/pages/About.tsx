import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { OriginButton } from "../components/ui/origin-button";
import SiteHeader from "../components/SiteHeader";
import { useInView } from "../hooks/useInView";

export default function About() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const storyRef = useInView();
  const valuesRef = useInView();
  const teamRef = useInView();
  const valuesGridRef = useInView();
  const teamGridRef = useInView();

  const VALUES = [
    {
      title: "Innovation",
      desc: "We constantly push boundaries to deliver cutting-edge solutions that set industry standards.",
      icon: "🚀",
    },
    {
      title: "Integrity",
      desc: "We operate with transparency and honesty in every client relationship and project we undertake.",
      icon: "🎯",
    },
    {
      title: "Excellence",
      desc: "We maintain the highest quality standards in everything we create and deliver.",
      icon: "⭐",
    },
    {
      title: "Collaboration",
      desc: "We believe in the power of teamwork and open communication with our clients and teams.",
      icon: "🤝",
    },
  ];

  const TEAM_MEMBERS = [
    {
      name: "Saadi J.",
      role: "Creative Director",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fd262aa17ef624b1d94677905217b9bcb%2F14452e3d04e648af85a019469720ed5c?format=webp&width=800&height=1200",
    },
    {
      name: "Wasif R.",
      role: "Lead Developer",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fd262aa17ef624b1d94677905217b9bcb%2F4897094158eb40fbb8b283c78b40fed2?format=webp&width=800&height=1200",
    },
    {
      name: "Davis Bryan",
      role: "Manager",
      image: "https://cdn.builder.io/api/v1/image/assets%2Fd262aa17ef624b1d94677905217b9bcb%2Fff642e5bc08b45e0834a84d65c6771f9?format=webp&width=800&height=1200",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-kanit">
      <SiteHeader />

      <main className="relative overflow-hidden">
        {/* ── HERO SECTION ── */}
        <div className="max-w-[1400px] mx-auto px-6 pt-10 md:pt-14 lg:pt-20 pb-16 lg:pb-28">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-20">
            <div className="flex-1">
              <h1 className="hero-heading font-teko font-bold text-black uppercase">
                <span className="hero-line block">About</span>
                <span className="hero-line block">The Linkage</span>
                <span className="hero-line block">Digital</span>
              </h1>
              <div className="w-[282px] max-w-full h-px bg-[#8B0AB4] mt-3" />
              <div className="w-[282px] max-w-full h-px bg-[#8B0AB4] mt-[3px]" />
              
              <div className="mt-10 md:mt-14">
                <p className="text-[#555] font-kanit font-normal text-base md:text-[18px] lg:text-[20px] leading-[1.55] max-w-[420px]">
                  We're a team of passionate designers, developers, and strategists dedicated to creating exceptional digital experiences that drive real business results.
                </p>
                <OriginButton
                  onClick={() => navigate("/contact")}
                  fillColor="#8B0AB4"
                  className="group mt-8 font-kanit font-medium text-[13px] md:text-[14px] uppercase text-[#1C1D20] border-b border-[#1C1D20] pb-0.5 tracking-wider hover:text-white hover:border-[#8B0AB4] px-3 py-2 transition-colors"
                >
                  Let's Talk
                </OriginButton>
              </div>
            </div>

            <div className="flex-shrink-0 mt-10 lg:mt-0 lg:w-[400px] xl:w-[500px] hero-images-enter">
              <img
                src="https://images.pexels.com/photos/3865639/pexels-photo-3865639.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Team working"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>

      {/* ── OUR STORY SECTION ── */}
      <section ref={storyRef as React.RefObject<HTMLElement>} className="bg-[#F9F9F9] py-16 md:py-24 lg:py-32 overflow-hidden reveal">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/36765663/pexels-photo-36765663.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Our journey"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-kanit font-bold text-[13px] md:text-[16px] uppercase text-[#121212] block mb-4">
                Our Story
              </span>
              <h2 className="font-teko font-bold text-[#121212] uppercase leading-[0.92] text-[clamp(1.8rem,4.5vw,5rem)] mb-6">
                Built on Passion & Purpose
              </h2>
              <p className="font-kanit font-normal text-[#555] text-[15px] md:text-[18px] leading-[1.6] mb-5">
                Founded in 2015, The Linkage Digital started with a simple vision: to create digital experiences that matter. Over the years, we've grown from a small team of three to an award-winning agency of over 50 professionals across multiple disciplines.
              </p>
              <p className="font-kanit font-normal text-[#555] text-[15px] md:text-[18px] leading-[1.6] mb-8">
                Our journey has been marked by incredible client partnerships, groundbreaking projects, and a relentless commitment to excellence. We've helped startups scale and enterprises transform their digital presence.
              </p>
              <div className="flex items-center gap-8 flex-wrap">
                <div>
                  <div className="font-teko font-bold text-[48px] md:text-[56px] text-[#8B0AB4] leading-none">
                    250+
                  </div>
                  <p className="font-kanit text-[#555] text-[14px] mt-2">Projects Delivered</p>
                </div>
                <div>
                  <div className="font-teko font-bold text-[48px] md:text-[56px] text-[#8B0AB4] leading-none">
                    98%
                  </div>
                  <p className="font-kanit text-[#555] text-[14px] mt-2">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES SECTION ── */}
      <section ref={valuesRef as React.RefObject<HTMLElement>} className="bg-white py-16 md:py-24 lg:py-32 overflow-hidden reveal">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14 md:mb-20">
            <span className="font-kanit font-bold text-[13px] md:text-[16px] uppercase text-[#121212] block mb-4">
              Our Values
            </span>
            <h2 className="font-teko font-bold text-[#121212] uppercase leading-[0.92] text-[clamp(1.8rem,4.5vw,5rem)]">
              What Drives Us Forward
            </h2>
          </div>

          <div ref={valuesGridRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 reveal-stagger">
            {VALUES.map((value, i) => (
              <div key={i} className="bg-[#F9F9F9] p-8 md:p-10 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-teko font-bold text-[#121212] uppercase text-[24px] md:text-[28px] leading-[1.1] mb-3">
                  {value.title}
                </h3>
                <p className="font-kanit font-normal text-[#555] text-[15px] md:text-[16px] leading-[1.6]">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM SECTION ── */}
      <section ref={teamRef as React.RefObject<HTMLElement>} className="bg-[#F9F9F9] py-16 md:py-24 lg:py-32 overflow-hidden reveal">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14 md:mb-20">
            <span className="font-kanit font-bold text-[13px] md:text-[16px] uppercase text-[#121212] block mb-4">
              Our Team
            </span>
            <h2 className="font-teko font-bold text-[#121212] uppercase leading-[0.92] text-[clamp(1.8rem,4.5vw,5rem)]">
              Exceptional Talent
            </h2>
          </div>

          <div ref={teamGridRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 reveal-stagger">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={i} className="group cursor-pointer text-center">
                <div className="overflow-hidden rounded-lg mb-5 h-[280px] md:h-[320px] flex items-center justify-center bg-[#f5f5f5]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-teko font-bold text-[#121212] uppercase text-[20px] md:text-[22px] leading-[1.1] mb-1">
                  {member.name}
                </h3>
                <p className="font-kanit text-[#555] text-[14px] md:text-[15px]">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="bg-[#121212] py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="font-teko font-bold text-white uppercase leading-[0.92] text-[clamp(2rem,5.5vw,5rem)] mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="font-kanit font-normal text-white text-[15px] md:text-[18px] leading-[1.55] max-w-[400px] mx-auto mb-10">
            Let's work together to create something extraordinary.
          </p>
          <OriginButton
            onClick={() => navigate("/contact")}
            fillColor="#8B0AB4"
            className="bg-[#8B0AB4] text-white font-kanit font-medium text-[13px] md:text-[15px] uppercase px-8 py-4 hover:bg-[#7a0a94] transition-colors"
          >
            Get In Touch
          </OriginButton>
        </div>
      </section>
    </div>
  );
}
