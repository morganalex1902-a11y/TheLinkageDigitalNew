import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { OriginButton } from "./ui/origin-button";

const LOGO =
  "https://cdn.builder.io/api/v1/image/assets%2F37fe508629794307b44d873859aad7cf%2F2b1408065852494b93dd7445e38a5652?format=webp&width=800";

function ChevronDown() {
  return (
    <svg
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <path
        d="M4.19092 5.84619L0.206543 1.86182C-0.0688477 1.58643 -0.0688477 1.14111 0.206543 0.868652L0.868652 0.206543C1.14404 -0.0688476 1.58936 -0.0688476 1.86182 0.206543L4.68604 3.03076L7.51025 0.206543C7.78564 -0.0688476 8.23096 -0.0688476 8.50342 0.206543L9.16553 0.868652C9.44092 1.14404 9.44092 1.58936 9.16553 1.86182L5.18115 5.84619C4.91162 6.12158 4.46631 6.12158 4.19092 5.84619Z"
        fill="#121212"
      />
    </svg>
  );
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all duration-500"
    >
      {/* Top line - rotates to diagonal */}
      <path
        d="M3 6H21"
        stroke="#121212"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transformOrigin: "12px 12px",
          transform: isOpen ? "rotate(45deg) translateY(6px)" : "rotate(0deg) translateY(0px)",
          transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
      {/* Middle line - fades out */}
      <path
        d="M3 12H21"
        stroke="#121212"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          opacity: isOpen ? 0 : 1,
          transition: "opacity 300ms ease-in-out",
        }}
      />
      {/* Bottom line - rotates to diagonal */}
      <path
        d="M3 18H21"
        stroke="#121212"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transformOrigin: "12px 12px",
          transform: isOpen ? "rotate(-45deg) translateY(-6px)" : "rotate(0deg) translateY(0px)",
          transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
    </svg>
  );
}

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const header = document.getElementById("site-header");
    const onScroll = () => {
      if (header) header.classList.toggle("shadow-md", window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Blog", path: "/blog" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contact", path: "/contact" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const services = [
    { label: "Web Design & Development", path: "/services/web-design-development" },
    { label: "Branding & Logo Design", path: "/services/branding-logo-design" },
    { label: "Digital Marketing", path: "/services/digital-marketing" },
    { label: "SEO Optimization", path: "/services/seo-optimization" },
    { label: "Video Editing & Motion", path: "/services/video-editing-motion" },
  ];

  return (
    <header id="site-header" className="border-b border-[#ECECEC] relative z-50 bg-white sticky top-0 transition-shadow duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[70px] sm:h-[87px]">
        <Link to="/">
          <img
            src={LOGO}
            alt="The Linkage Digital - Web Design and Digital Services"
            className="h-[48px] sm:h-[56px] md:h-[68px] lg:h-[78px] w-auto flex-shrink-0"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main navigation">
          <Link
            to="/"
            className="font-teko text-[20px] lg:text-[22px] uppercase text-[#121212] hover:text-[#8B0AB4] leading-none transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-teko text-[20px] lg:text-[22px] uppercase text-[#121212] hover:text-[#8B0AB4] leading-none transition-colors"
          >
            About
          </Link>
          <div className="relative group">
            <Link
              to="/services"
              className="flex items-center gap-1 font-teko text-[20px] lg:text-[22px] uppercase text-[#121212] hover:text-[#8B0AB4] leading-none transition-colors"
            >
              Services
              <ChevronDown />
            </Link>

            {/* Desktop dropdown */}
            <div className="absolute left-0 mt-0 w-56 bg-white border border-[#ECECEC] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out pt-2">
              {services.map((service) => (
                <Link
                  key={service.label}
                  to={service.path}
                  className="block w-full text-left px-5 py-3 font-kanit text-[14px] text-[#121212] hover:text-white hover:bg-[#8B0AB4] first:rounded-t-lg last:rounded-b-lg transition-colors"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            to="/portfolio"
            className="font-teko text-[20px] lg:text-[22px] uppercase text-[#121212] hover:text-[#8B0AB4] leading-none transition-colors"
          >
            Portfolio
          </Link>
          <Link
            to="/blog"
            className="font-teko text-[20px] lg:text-[22px] uppercase text-[#121212] hover:text-[#8B0AB4] leading-none transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/testimonials"
            className="font-teko text-[20px] lg:text-[22px] uppercase text-[#121212] hover:text-[#8B0AB4] leading-none transition-colors"
          >
            Testimonials
          </Link>
          <Link
            to="/contact"
            className="font-teko text-[20px] lg:text-[22px] uppercase text-[#121212] hover:text-[#8B0AB4] leading-none transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <MenuIcon isOpen={mobileMenuOpen} />
        </button>

        {/* Contact Us button - Hidden on mobile when menu is open */}
        <div className={`hidden md:block transition-opacity duration-300 ${mobileMenuOpen ? "md:block" : ""}`}>
          <Link
            to="/contact"
            className="inline-block bg-[#262629] text-white font-kanit font-medium text-[13px] md:text-[15px] lg:text-[17px] uppercase px-5 md:px-7 lg:px-9 py-3 lg:py-4 whitespace-nowrap tracking-wide hover:bg-[#8B0AB4] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
        style={{ background: "white" }}
      >
        <nav className="px-4 py-4 space-y-2 border-t border-[#ECECEC]" aria-label="Mobile navigation">
          {navItems.map((item) => {
            if (item.label === "Services") {
              return (
                <div key={item.path}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full text-left px-4 py-3 rounded-lg font-teko text-[16px] uppercase text-[#121212] hover:text-[#8B0AB4] flex items-center justify-between transition-colors"
                  >
                    {item.label}
                    <span className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 space-y-1 bg-[#FFE8F5]/30 rounded-lg mt-1 mb-2">
                      {services.map((service) => (
                        <Link
                          key={service.label}
                          to={service.path}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 font-kanit text-[13px] text-[#555] hover:text-[#8B0AB4] rounded-lg transition-colors"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className="block w-full text-left px-4 py-3 rounded-lg font-teko text-[16px] uppercase text-[#121212] hover:text-[#8B0AB4] transition-colors"
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="block w-full mt-4 bg-[#262629] text-white font-kanit font-medium text-[13px] uppercase px-4 py-3 rounded-lg tracking-wide hover:bg-[#8B0AB4] text-center transition-colors"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
