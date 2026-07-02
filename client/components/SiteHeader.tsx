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

export default function SiteHeader() {
  const navigate = useNavigate();

  return (
    <header id="site-header" className="border-b border-[#ECECEC] relative z-50 bg-white sticky top-0 transition-shadow duration-300">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-[87px]">
        <Link to="/">
          <img
            src={LOGO}
            alt="The Linkage Digital"
            className="h-[56px] md:h-[68px] lg:h-[78px] w-auto flex-shrink-0 hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            to="/"
            className="font-teko text-[20px] lg:text-[22px] uppercase text-[#121212] hover:text-[#8B0AB4] transition-colors leading-none"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-teko text-[20px] lg:text-[22px] uppercase text-[#121212] hover:text-[#8B0AB4] transition-colors leading-none"
          >
            About
          </Link>
          <div className="flex items-center gap-1">
            <Link
              to="/services"
              className="font-teko text-[20px] lg:text-[22px] uppercase text-[#121212] hover:text-[#8B0AB4] transition-colors leading-none"
            >
              Services
            </Link>
            <ChevronDown />
          </div>
          <Link
            to="/portfolio"
            className="font-teko text-[20px] lg:text-[22px] uppercase text-[#121212] hover:text-[#8B0AB4] transition-colors leading-none"
          >
            Portfolio
          </Link>
          <Link
            to="/blog"
            className="font-teko text-[20px] lg:text-[22px] uppercase text-[#121212] hover:text-[#8B0AB4] transition-colors leading-none"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="font-teko text-[20px] lg:text-[22px] uppercase text-[#121212] hover:text-[#8B0AB4] transition-colors leading-none"
          >
            Contact
          </Link>
        </nav>

        {/* Contact Us button */}
        <OriginButton
          onClick={() => navigate("/contact")}
          fillColor="#8B0AB4"
          className="bg-[#262629] text-white font-kanit font-medium text-[13px] md:text-[15px] lg:text-[17px] uppercase px-5 md:px-7 lg:px-9 py-3 lg:py-4 whitespace-nowrap tracking-wide hover:text-white"
        >
          Contact Us
        </OriginButton>
      </div>
    </header>
  );
}
