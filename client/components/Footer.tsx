import { Link } from "react-router-dom";

const FOOTER_LOGO =
  "https://api.builder.io/api/v1/image/assets/TEMP/f6b0535e5973547e6cfe0dd5821532366a17ac51?width=416";

const DISCOVER_LINKS = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/portfolio" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
  { label: "Resume", to: "/about" },
];

const COMPANY_LINKS = [
  { label: "About us", to: "/about" },
  { label: "FAQs", to: "/contact" },
  { label: "Blogs", to: "/blog" },
  { label: "Pricing", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
];

export default function Footer() {
  return (
    <footer className="bg-[#171717]">

      {/* ── Main footer columns ── */}
      <div className="max-w-[1320px] mx-auto px-6 pt-14 md:pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 lg:gap-6">

          {/* Col 1: Logo + description */}
          <div>
            <img
              src={FOOTER_LOGO}
              alt="The Linkage Digital"
              className="h-[65px] md:h-[80px] lg:h-[90px] w-auto mb-6"
            />
            <p className="font-poppins font-light text-white text-[14px] md:text-[15px] leading-[1.85] tracking-[0.32px] max-w-[380px]">
              A full-service digital agency that builds fascinating user experiences.
            </p>
          </div>

          {/* Col 2: Discover */}
          <div>
            <h4 className="font-quicksand font-normal text-white text-[17px] md:text-[19px] mb-5 tracking-[0.16px]">
              Discover
            </h4>
            <ul className="space-y-4">
              {DISCOVER_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="font-poppins font-light text-white text-[14px] md:text-[15px] leading-[1.5] tracking-[0.32px] hover:text-[#8B0AB4] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="font-quicksand font-normal text-white text-[17px] md:text-[19px] mb-5 tracking-[0.16px]">
              Company
            </h4>
            <ul className="space-y-4">
              {COMPANY_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="font-poppins font-light text-white text-[14px] md:text-[15px] leading-[1.5] tracking-[0.32px] hover:text-[#8B0AB4] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-quicksand font-normal text-white text-[17px] md:text-[19px] mb-5 tracking-[0.16px]">
              Contact
            </h4>
            <div className="space-y-4">
              <p className="font-poppins font-light text-white text-[14px] md:text-[15px] leading-[1.7] tracking-[0.32px]">
                5900 Balcones Dr Ste 10429,
                <br />
                Austin, TX 78731, United States
              </p>
              <a href="tel:+15122003815" className="block font-poppins font-normal text-white text-[14px] md:text-[15px] leading-[1.5] tracking-[0.32px] hover:text-[#8B0AB4] transition-colors">
                (512) 200-3815
              </a>
              <div className="space-y-2">
                <a href="mailto:sales@thelinkagedigital.com" className="block font-poppins font-normal text-white text-[14px] md:text-[15px] leading-[1.5] tracking-[0.32px] hover:text-[#8B0AB4] transition-colors">
                  sales@thelinkagedigital.com
                </a>
                <a href="mailto:info@linkagedigital.com" className="block font-poppins font-normal text-white text-[14px] md:text-[15px] leading-[1.5] tracking-[0.32px] hover:text-[#8B0AB4] transition-colors">
                  info@linkagedigital.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[0.08]">
        <div className="max-w-[1320px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">

          {/* Copyright */}
          <span className="font-teko font-normal text-white uppercase text-[17px] md:text-[20px] lg:text-[22px]">
            © 2024-25 The Linkage Digital
          </span>

          {/* Center links */}
          <div className="flex items-center gap-5 md:gap-7 lg:gap-9">
            {["Career", "Privacy", "Terms & Condition"].map((label) => (
              <Link
                key={label}
                to="/contact"
                className="font-teko font-normal text-white uppercase text-[17px] md:text-[20px] lg:text-[22px] hover:text-[#8B0AB4] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a href="https://www.facebook.com/thelinkagedigital/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-[#8B0AB4] transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.375 9.6875C19.375 4.33594 15.0391 0 9.6875 0C4.33594 0 0 4.33594 0 9.6875C0 14.5227 3.54258 18.5305 8.17383 19.2578V12.4879H5.71289V9.6875H8.17383V7.55313C8.17383 5.12539 9.61914 3.78437 11.8328 3.78437C12.893 3.78437 14.0016 3.97344 14.0016 3.97344V6.35625H12.7797C11.5766 6.35625 11.2012 7.10312 11.2012 7.86914V9.6875H13.8879L13.4582 12.4879H11.2012V19.2578C15.8324 18.5305 19.375 14.5227 19.375 9.6875Z" fill="currentColor"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/thelinkagedigital/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-[#8B0AB4] transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C5.31 0 0 5.31 0 10C0 15.15 5.07 20 10 20C14.93 20 20 15.15 20 10C20 5.31 14.69 0 10 0ZM15 10.5C15 12.98 12.98 15 10.5 15C8.02 15 6 12.98 6 10.5C6 8.02 8.02 6 10.5 6C12.98 6 15 8.02 15 10.5ZM13.5 10.5C13.5 9.12 12.38 8 11 8C9.62 8 8.5 9.12 8.5 10.5C8.5 11.88 9.62 13 11 13C12.38 13 13.5 11.88 13.5 10.5Z" fill="currentColor"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
