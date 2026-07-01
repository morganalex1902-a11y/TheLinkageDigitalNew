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
              A modern agency template to showcase your brand, services, and
              portfolio with a clean, responsive design.
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
                27 Design Avenue, New York, NY
                <br />
                10001, USA
              </p>
              <p className="font-poppins font-normal text-white text-[14px] md:text-[15px] leading-[1.5] tracking-[0.32px]">
                +1(512)200-3815
              </p>
              <p className="font-poppins font-normal text-white text-[14px] md:text-[15px] leading-[1.5] tracking-[0.32px]">
                contact@blackie.com
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[0.08]">
        <div className="max-w-[1320px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">

          {/* Copyright */}
          <span className="font-teko font-normal text-white uppercase text-[17px] md:text-[20px] lg:text-[22px]">
            © 2024-25 Crowdyflow Agency
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
            <a href="#" aria-label="Facebook" className="text-white hover:text-[#8B0AB4] transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.375 9.6875C19.375 4.33594 15.0391 0 9.6875 0C4.33594 0 0 4.33594 0 9.6875C0 14.5227 3.54258 18.5305 8.17383 19.2578V12.4879H5.71289V9.6875H8.17383V7.55313C8.17383 5.12539 9.61914 3.78437 11.8328 3.78437C12.893 3.78437 14.0016 3.97344 14.0016 3.97344V6.35625H12.7797C11.5766 6.35625 11.2012 7.10312 11.2012 7.86914V9.6875H13.8879L13.4582 12.4879H11.2012V19.2578C15.8324 18.5305 19.375 14.5227 19.375 9.6875Z" fill="currentColor"/>
              </svg>
            </a>
            {/* Twitter / X */}
            <a href="#" aria-label="Twitter" className="text-white hover:text-[#8B0AB4] transition-colors">
              <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9441 4.0482C17.9568 4.22586 17.9568 4.40355 17.9568 4.58121C17.9568 9.99996 13.8325 16.2436 6.29441 16.2436C3.97207 16.2436 1.81473 15.571 0 14.4036C0.329961 14.4416 0.647187 14.4543 0.989844 14.4543C2.90605 14.4543 4.67004 13.8071 6.07867 12.703C4.27664 12.665 2.76648 11.4848 2.24617 9.86039C2.5 9.89844 2.75379 9.92383 3.02031 9.92383C3.38832 9.92383 3.75637 9.87305 4.09898 9.78426C2.22082 9.40352 0.812148 7.75379 0.812148 5.76141V5.71066C1.35781 6.01523 1.99238 6.20559 2.66492 6.23094C1.56086 5.49488 0.837539 4.23855 0.837539 2.81723C0.837539 2.05582 1.04055 1.35785 1.3959 0.748711C3.41367 3.23602 6.44668 4.86035 9.84766 5.03805C9.78422 4.73348 9.74613 4.41625 9.74613 4.09898C9.74613 1.84008 11.5736 0 13.8451 0C15.0253 0 16.0913 0.494922 16.84 1.29441C17.7664 1.11676 18.6547 0.774102 19.4416 0.30457C19.137 1.25637 18.4898 2.05586 17.6395 2.56344C18.4644 2.47465 19.2639 2.24617 19.9999 1.92895C19.4416 2.74109 18.7436 3.46441 17.9441 4.0482Z" fill="currentColor"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube" className="text-white hover:text-[#8B0AB4] transition-colors">
              <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5667 2.08622C18.3486 1.26503 17.7061 0.618299 16.8902 0.398819C15.4114 0 9.48149 0 9.48149 0C9.48149 0 3.55163 0 2.07278 0.398819C1.25691 0.618333 0.61434 1.26503 0.39625 2.08622C0 3.57465 0 6.68014 0 6.68014C0 6.68014 0 9.78563 0.39625 11.2741C0.61434 12.0952 1.25691 12.715 2.07278 12.9345C3.55163 13.3333 9.48149 13.3333 9.48149 13.3333C9.48149 13.3333 15.4114 13.3333 16.8902 12.9345C17.7061 12.715 18.3486 12.0952 18.5667 11.2741C18.963 9.78563 18.963 6.68014 18.963 6.68014C18.963 6.68014 18.963 3.57465 18.5667 2.08622ZM7.54208 9.49969V3.86059L12.4983 6.68021L7.54208 9.49969Z" fill="currentColor"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-[#8B0AB4] transition-colors">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.25 0H1.24609C0.558594 0 0 0.566406 0 1.26172V16.2383C0 16.9336 0.558594 17.5 1.24609 17.5H16.25C16.9375 17.5 17.5 16.9336 17.5 16.2383V1.26172C17.5 0.566406 16.9375 0 16.25 0ZM5.28906 15H2.69531V6.64844H5.29297V15H5.28906ZM3.99219 5.50781C3.16016 5.50781 2.48828 4.83203 2.48828 4.00391C2.48828 3.17578 3.16016 2.5 3.99219 2.5C4.82031 2.5 5.49609 3.17578 5.49609 4.00391C5.49609 4.83594 4.82422 5.50781 3.99219 5.50781ZM15.0117 15H12.418V10.9375C12.418 9.96875 12.3984 8.72266 11.0703 8.72266C9.71875 8.72266 9.51172 9.77734 9.51172 10.8672V15H6.91797V6.64844H9.40625V7.78906H9.44141C9.78906 7.13281 10.6367 6.44141 11.8984 6.44141C14.5234 6.44141 15.0117 8.17187 15.0117 10.4219V15Z" fill="currentColor"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
