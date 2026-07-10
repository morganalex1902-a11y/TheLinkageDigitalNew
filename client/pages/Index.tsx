import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import type React from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "../hooks/useInView";
import { OriginButton } from "../components/ui/origin-button";
import { AnimatedButton } from "../components/ui/animated-button";
import SiteHeader from "../components/SiteHeader";

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

const LOGO =
  "https://cdn.builder.io/api/v1/image/assets%2F37fe508629794307b44d873859aad7cf%2F2b1408065852494b93dd7445e38a5652?format=webp&width=800";
const AVATAR_IMG =
  "https://api.builder.io/api/v1/image/assets/TEMP/ccf757ecc570bad21be86586be9ed913626543a9?width=164";
const SCROLL_IMG =
  "https://api.builder.io/api/v1/image/assets/TEMP/606973b7a19e784fa309acebad1d2d62459e0d20?width=80";
const INTRO_SHAPE_1 =
  "https://api.builder.io/api/v1/image/assets/TEMP/146d714265786810fdd18a4fcf76b2fc19105251?width=200";
const PERSON_IMG =
  "https://api.builder.io/api/v1/image/assets/TEMP/16fdf4661237be3a6f0753facd7aa91bfa13ef50?width=418";
const GROUP_IMG =
  "https://api.builder.io/api/v1/image/assets/TEMP/9dcd1bb21880ba2e5bc600ed06cba837cc13bca1?width=500";
const ARROW_DOWN =
  "https://api.builder.io/api/v1/image/assets/TEMP/1685b8dc9de3e96d40e004a1cd5fa325c3f783d1?width=160";
const THUMB_IMG =
  "https://api.builder.io/api/v1/image/assets/TEMP/74ad161ce9ae79bedd3125e55a7036ba67285e6e?width=320";
const INTRO_SHAPE =
  "https://api.builder.io/api/v1/image/assets/TEMP/b1cd86f4ef199e2be3d9b85ebc88d5bf004fc2b8?width=820";
const BRAND_CORNER =
  "https://api.builder.io/api/v1/image/assets/TEMP/2f8efb74891ead64813feaafacd54fb4855ea528?width=312";

const BRAND_LOGOS = [
  "https://api.builder.io/api/v1/image/assets/TEMP/c879a0f5aebe016864bd1cd82e1d16c217116b3d?width=297",
  "https://api.builder.io/api/v1/image/assets/TEMP/957bf2587ffbe603681b88cad470b214d38cc216?width=344",
  "https://api.builder.io/api/v1/image/assets/TEMP/60abf8b538f518a80ab9a841924e64d10a9bf558?width=322",
  "https://api.builder.io/api/v1/image/assets/TEMP/2749008110e8a6883274172ecd2cd6d9176beffb?width=311",
  "https://api.builder.io/api/v1/image/assets/TEMP/01ab5c0799c8b4f3b758b1c8a878ec698c3fc843?width=344",
  "https://api.builder.io/api/v1/image/assets/TEMP/2df19b14c5298afc8c404d5f60b74c9c25a19679?width=336",
];

function MarqueeScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const logoWidth = container.scrollWidth / 2;
    const animate = () => {
      setOffset((prev) => {
        const next = (prev + 1) % logoWidth;
        return next;
      });
    };

    const interval = setInterval(animate, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 bg-[#FFE8F5] overflow-hidden flex items-center">
      <div
        ref={containerRef}
        className="flex"
        style={{ transform: `translateX(-${offset}px)`, willChange: "transform" }}
      >
        {[...BRAND_LOGOS, ...BRAND_LOGOS].map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="h-[50px] md:h-[60px] lg:h-[70px] w-auto flex-shrink-0 object-contain mx-8 md:mx-12 lg:mx-16"
          />
        ))}
      </div>
    </div>
  );
}

function PortfolioRow({ direction, images, stagger = 0 }: { direction: "left" | "right"; images: (string | { type: "iframe"; url: string })[]; stagger?: number }) {
  const animationName = direction === "right" ? "portfolioRight" : "portfolioLeft";
  const allImages = [...images, ...images];
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const [mobileIndex, setMobileIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile, images.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        // Swiped left - next item
        setMobileIndex((prev) => (prev + 1) % images.length);
      } else {
        // Swiped right - previous item
        setMobileIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    }
  };

  if (isMobile) {
    return (
      <div className="relative overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div
          className="flex gap-[0.53vw]"
          style={{
            transform: `translateX(-${mobileIndex * 100}%)`,
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          {images.map((item, i) => (
            <div key={i} className="relative flex-shrink-0 overflow-hidden w-full h-[clamp(150px,45vw,400px)]">
              {typeof item === "string" ? (
                <>
                  <img src={item} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30" />
                </>
              ) : (
                <>
                  <iframe
                    src={item.url}
                    className="w-full h-full border-0"
                    loading="eager"
                    title="Portfolio website"
                    scrolling="no"
                    style={{ overflow: "hidden" }}
                  />
                  <div className="absolute inset-0 bg-black/30 pointer-events-none" />
                </>
              )}
            </div>
          ))}
        </div>
        {/* Pagination dots with progress animation */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setMobileIndex(i)}
              className={`relative h-2 rounded-full transition-all ${i === mobileIndex ? "bg-[#8B0AB4] w-8" : "bg-[#ECECEC] w-2"}`}
            >
              {i === mobileIndex && (
                <div
                  className="absolute inset-0 rounded-full bg-[#8B0AB4] opacity-30"
                  style={{
                    animation: "pulse 5s ease-in-out infinite"
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden" style={{ marginLeft: `${stagger}vw` }}>
      <div
        className="flex gap-[0.53vw]"
        style={{
          animation: `${animationName} 80s linear infinite`,
          willChange: "transform",
        }}
      >
        {allImages.map((item, i) => (
          <div key={i} className="relative flex-shrink-0 overflow-hidden group cursor-pointer w-[clamp(150px,45vw,400px)] h-[clamp(150px,45vw,400px)]">
            {typeof item === "string" ? (
              <>
                <img src={item} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </>
            ) : (
              <>
                <iframe
                  src={item.url}
                  className="w-full h-full border-0"
                  loading="eager"
                  title="Portfolio website"
                  scrolling="no"
                  style={{ overflow: "hidden" }}
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

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

function ArrowPointerButton({ onClick, direction = "right" }: { onClick?: () => void; direction?: "left" | "right" }) {
  return (
    <OriginButton
      onClick={onClick}
      fillColor="#8B0AB4"
      className="w-10 h-10 sm:w-9 sm:h-9 rounded-full border border-[#ECECEC] hover:border-[#8B0AB4] text-[#121212] hover:text-white flex items-center justify-center"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        style={{ transform: direction === "left" ? "scaleX(-1)" : "none" }}
      >
        <g clipPath="url(#clip-arrow-ptr)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.81733 4.91128C8.05053 4.62631 8.47053 4.58431 8.75547 4.81746L13.8676 9.0001H0.666667C0.298477 9.0001 0 8.70162 0 8.33343C0 7.96525 0.298477 7.66677 0.666667 7.66677H10.1324L7.9112 5.84941C7.6262 5.61625 7.5842 5.19624 7.81733 4.91128Z"
            fill="currentColor"
            className="text-[#121212] group-hover:text-white transition-colors"
          />
        </g>
        <defs>
          <clipPath id="clip-arrow-ptr">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </OriginButton>
  );
}

function PlayIcon() {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.6309 6.06836L0.738281 11.9971V0.152344L11.6309 6.06836Z" fill="white" />
    </svg>
  );
}

function ExploreCircleButton({ onClick, clipId }: { onClick: () => void; clipId: string }) {
  return (
    <OriginButton
      onClick={onClick}
      fillColor="#8B0AB4"
      className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full border border-[#ECECEC] flex-shrink-0 hover:border-[#8B0AB4] group"
    >
      <span className="flex flex-col items-center justify-center gap-1">
        <span className="font-kanit font-semibold text-[13px] md:text-[14px] uppercase text-[#121212] group-hover:text-white transition-colors tracking-wide">
          Explore
        </span>
        <svg width="10" height="14" viewBox="0 0 11 16" fill="none" className="group-hover:translate-y-0.5 transition-transform">
          <g clipPath={`url(#${clipId})`}>
            <path d="M2.74301 2.69653V3.7475H9.05901L0.736328 12.4653L1.44368 13.2062L9.76638 4.48844V11.1043H10.7697V2.69653H2.74301Z" fill="currentColor" className="text-[#121212] group-hover:text-white transition-colors" />
          </g>
          <defs><clipPath id={clipId}><rect width="11" height="16" fill="white" /></clipPath></defs>
        </svg>
      </span>
    </OriginButton>
  );
}

const TABS = [
  {
    title: "Creativity",
    desc: "Add the best talent on the market, an agile skilled management & seamless involvement",
    icon: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip-tab-1)">
          <path fillRule="evenodd" clipRule="evenodd" d="M24.1667 6.66667H19.1667C18.7083 6.66667 18.3333 6.29167 18.3333 5.425V0.833333C18.3333 0.61232 18.4211 0.400358 18.5774 0.244078C18.7337 0.0877973 18.9457 0 19.1667 0C20.7138 0 22.1975 0.614582 23.2915 1.70854C24.3854 2.80251 25 4.28624 25 5.83333C25 6.05435 24.9122 6.26631 24.7559 6.42259C24.5996 6.57887 24.3877 6.66667 24.1667 6.66667ZM10.25 10.9C10.527 11.8218 11.0306 12.6594 11.7148 13.3363C12.399 14.0133 13.242 14.5079 14.1667 14.775C14.7095 14.925 15.2702 15.0006 15.8333 15C17.3804 15 18.8642 14.3854 19.9581 13.2915C21.0521 12.1975 21.6667 10.7138 21.6667 9.16668C21.6667 8.94566 21.5789 8.7337 21.4226 8.57742C21.2663 8.42114 21.0543 8.33335 20.8333 8.33335H17.9167C17.5851 8.33335 17.2672 8.20165 17.0328 7.96723C16.7984 7.73281 16.6667 7.41487 16.6667 7.08334V4.16668C16.6667 3.94566 16.5789 3.7337 16.4226 3.57742C16.2663 3.42114 16.0543 3.33334 15.8333 3.33334C14.9633 3.33163 14.1038 3.52456 13.318 3.89802C12.5322 4.27147 11.8398 4.81599 11.2917 5.49168C10.6912 6.24044 10.2825 7.12438 10.101 8.06684C9.9195 9.00929 9.97064 9.9818 10.25 10.9ZM2.86612 9.53278C3.10054 9.29836 3.41848 9.16667 3.75 9.16667H6.25C6.58152 9.16667 6.89946 9.29836 7.13388 9.53278C7.3683 9.7672 7.5 10.0851 7.5 10.4167V21.6667H2.5V10.4167C2.5 10.0851 2.6317 9.7672 2.86612 9.53278ZM25 23.3333H0V25H25V23.3333ZM11.25 15.8333C10.9185 15.8333 10.6005 15.965 10.3661 16.1994C10.1317 16.4339 10 16.7518 10 17.0833V21.6667H15V17.0833C15 16.7518 14.8683 16.4339 14.6339 16.1994C14.3995 15.965 14.0815 15.8333 13.75 15.8333H11.25ZM17.8661 18.6994C18.1005 18.465 18.4185 18.3333 18.75 18.3333H21.25C21.5815 18.3333 21.8995 18.465 22.1339 18.6994C22.3683 18.9339 22.5 19.2518 22.5 19.5833V21.6667H17.5V19.5833C17.5 19.2518 17.6317 18.9339 17.8661 18.6994ZM0 0H11.6667V1.66667H0V0ZM7.5 3.33333H0V5H7.5V3.33333Z" fill="currentColor"/>
        </g>
        <defs><clipPath id="clip-tab-1"><rect width="25" height="25" fill="white"/></clipPath></defs>
      </svg>
    ),
  },
  {
    title: "Relationships",
    desc: "Add the best talent on the market, an agile skilled management & seamless involvement",
    icon: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip-tab-2)">
          <path d="M21.1538 14.4231C21.1538 20.2645 16.4184 25 10.5769 25C4.73545 25 0 20.2645 0 14.4231C0 8.58161 4.73545 3.84615 10.5769 3.84615C11.108 3.84615 11.5385 4.27665 11.5385 4.80769V13.4615H20.1923C20.7234 13.4615 21.1538 13.892 21.1538 14.4231ZM14.4231 0C13.892 0 13.4615 0.430496 13.4615 0.961539V10.5769C13.4615 11.108 13.892 11.5385 14.4231 11.5385H24.0385C24.5695 11.5385 25 11.108 25 10.5769C24.9934 4.7382 20.2618 0.00662368 14.4231 0Z" fill="currentColor"/>
        </g>
        <defs><clipPath id="clip-tab-2"><rect width="25" height="25" fill="white"/></clipPath></defs>
      </svg>
    ),
  },
  {
    title: "Responsibility",
    desc: "Add the best talent on the market, an agile skilled management & seamless involvement",
    icon: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip-tab-3)">
          <path d="M17.8374 9.89764C18.2918 9.02899 19.0793 8.37591 20.0586 8.06069C20.4684 7.92844 20.8908 7.87772 21.3112 7.87591V2.71739C21.3112 1.2192 20.0073 0 18.4051 0H2.90607C1.30386 0 0 1.2192 0 2.71739V20.8333C0 22.3315 1.30386 23.5507 2.90607 23.5507H12.5436L12.4389 23.2663C12.0176 22.1168 12.0999 20.8886 12.6685 19.8025L17.8374 9.89764ZM3.87476 5.43478H15.499C16.0347 5.43478 16.4677 5.84058 16.4677 6.34058C16.4677 6.84058 16.0347 7.24638 15.499 7.24638H3.87476C3.33907 7.24638 2.90607 6.84058 2.90607 6.34058C2.90607 5.84058 3.33907 5.43478 3.87476 5.43478ZM3.87476 9.05797H14.5303C15.066 9.05797 15.499 9.46377 15.499 9.96377C15.499 10.4638 15.066 10.8696 14.5303 10.8696H3.87476C3.33907 10.8696 2.90607 10.4638 2.90607 9.96377C2.90607 9.46377 3.33907 9.05797 3.87476 9.05797ZM10.6556 18.1159H3.87476C3.33907 18.1159 2.90607 17.7101 2.90607 17.2101C2.90607 16.7101 3.33907 16.3043 3.87476 16.3043H10.6556C11.1913 16.3043 11.6243 16.7101 11.6243 17.2101C11.6243 17.7101 11.1913 18.1159 10.6556 18.1159ZM3.87476 14.4928C3.33907 14.4928 2.90607 14.087 2.90607 13.587C2.90607 13.087 3.33907 12.6812 3.87476 12.6812H12.593C13.1286 12.6812 13.5616 13.087 13.5616 13.587C13.5616 14.087 13.1286 14.4928 12.593 14.4928H3.87476ZM24.8023 13.0752L19.6315 22.9837C19.2895 23.6368 18.6976 24.1259 17.9643 24.3614L16.1326 24.9502C16.0289 24.9837 15.9214 25 15.8177 25C15.4157 25 15.0399 24.7645 14.9023 24.3886L14.2717 22.6757C14.0189 21.9873 14.0683 21.25 14.4093 20.5987L19.5801 10.692C19.8058 10.2572 20.201 9.93116 20.6902 9.77355C21.1785 9.61594 21.7045 9.64493 22.1694 9.8587L23.9111 10.6531C24.3761 10.865 24.7248 11.2346 24.8934 11.692C25.0619 12.1495 25.03 12.6404 24.8023 13.0752Z" fill="currentColor"/>
        </g>
        <defs><clipPath id="clip-tab-3"><rect width="25" height="25" fill="white"/></clipPath></defs>
      </svg>
    ),
  },
  {
    title: "Cost effective",
    desc: "Add the best talent on the market, an agile skilled management & seamless involvement",
    icon: (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip-tab-4)">
          <path fillRule="evenodd" clipRule="evenodd" d="M6.31223 17.3046C5.4716 16.9473 4.68721 16.4719 3.99553 15.8724C2.11737 14.2464 1.04132 11.9138 1.04132 9.47226C1.04132 4.74159 5.01326 0.893066 9.89563 0.893066C14.7779 0.893066 18.7499 4.74159 18.7499 9.47226C18.7499 12.2357 17.353 14.7823 15.1248 16.374L13.6384 14.9337C12.8728 14.1878 11.6478 14.0556 10.7331 14.6148L6.31223 17.3046ZM7.29141 8.0895C7.29141 9.26939 8.28205 10.2292 9.49982 10.2292H10.2914C10.6477 10.2292 10.9373 10.5099 10.9373 10.8651C10.9373 11.2103 10.6477 11.4909 10.2914 11.4909H8.07268C7.64142 11.4909 7.29141 11.83 7.29141 12.2479C7.29141 12.6657 7.64142 13.0049 8.07268 13.0049H9.11438V13.7608C9.11438 14.1787 9.46438 14.5178 9.89563 14.5178C10.3269 14.5178 10.6769 14.1787 10.6769 13.7608V12.9665C11.7103 12.7889 12.4998 11.9158 12.4998 10.855C12.4998 9.67513 11.5092 8.71527 10.2914 8.71527H9.49982C9.14348 8.71527 8.85394 8.43468 8.85394 8.07941C8.85394 7.73422 9.14348 7.45363 9.49982 7.45363H11.7186C12.1498 7.45363 12.4998 7.11449 12.4998 6.69664C12.4998 6.27878 12.1498 5.93965 11.7186 5.93965H10.6769V5.18266C10.6769 4.76481 10.3269 4.42567 9.89563 4.42567C9.46438 4.42567 9.11438 4.76481 9.11438 5.18266V5.978C8.08101 6.15565 7.29141 7.0287 7.29141 8.0895ZM19.7916 11.9956H23.9583C24.5344 11.9956 25 12.4477 25 13.0049V17.0422C25 17.4499 24.7469 17.8183 24.3573 17.9748C24.2281 18.0262 24.0927 18.0515 23.9583 18.0515C23.6875 18.0515 23.4208 17.9485 23.2219 17.7557L21.8749 16.4507L16.8812 21.2883C16.4738 21.683 15.8154 21.683 15.4082 21.2883L11.8248 17.8163L1.58923 23.9559C1.41839 24.0589 1.22985 24.1074 1.04235 24.1074C0.693381 24.1074 0.352751 23.9378 0.155873 23.629C-0.146214 23.1556 0.00378756 22.5338 0.493378 22.2401L11.4311 15.6796C11.8394 15.4343 12.3748 15.4918 12.7154 15.8239L16.1457 19.1475L20.4021 15.0235L19.0551 13.7184C18.7572 13.4298 18.6676 12.9957 18.8291 12.6183C18.9895 12.2418 19.3707 11.9956 19.7916 11.9956Z" fill="currentColor"/>
        </g>
        <defs><clipPath id="clip-tab-4"><rect width="25" height="25" fill="white"/></clipPath></defs>
      </svg>
    ),
  },
];

const TECH_ITEMS = [
  { name: "WordPress", src: "https://api.builder.io/api/v1/image/assets/TEMP/cff6b7ef129c522b03ad0aaf693172c53c4eeacf?width=200" },
  { name: "React.js",  src: "https://api.builder.io/api/v1/image/assets/TEMP/c9918d860144666cf53a02a3c0a645deaf4ad1b1?width=200" },
  { name: "Node.js",   src: "https://api.builder.io/api/v1/image/assets/TEMP/69d15ec1de37aea7268ec7aa8ea08e7445728784?width=200" },
  { name: "Flutter",   src: "https://api.builder.io/api/v1/image/assets/TEMP/0d4faef2a9ab37ad34ad69931fee4bac497056ac?width=160" },
  { name: "Redux",     src: null },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [testimonialDir, setTestimonialDir] = useState<"left" | "right">("right");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  const TESTIMONIALS = [
    {
      rating: 5.0,
      text: "Alex and Saadi did an excellent job building my website design. The process was smooth, professional, and creative from start to finish. He really listened to my ideas, offered great suggestions, and delivered a clean, modern site that perfectly reflects my vision. Highly recommend his work!",
      name: "Jeriece Lovelace",
      role: "9 months ago",
      avatar: "https://cdn.builder.io/api/v1/image/assets%2Fc70ebb3e5225486399c19406cd27bb43%2F49cf2d55e7154c8e825da8cbaa58313f?format=webp&width=800&height=1200",
    },
    {
      rating: 5.0,
      text: "Thomas Randall reached out to me on Facebook he was very good about answering my questions and after receiving the information he requested the website was prepared quick time. I would definitely do business with and recommend their services to anyone who is in need of a website.",
      name: "orlando patterson",
      role: "4 months ago",
      avatar: "https://cdn.builder.io/api/v1/image/assets%2Fc70ebb3e5225486399c19406cd27bb43%2F11ee54a04aaf4028b2d95687da7116be?format=webp&width=800&height=1200",
    },
    {
      rating: 5.0,
      text: "Did a great job setting up my Website. Was super easy to work with!",
      name: "Hadyn Whisenhunt",
      role: "3 weeks ago",
      avatar: "https://cdn.builder.io/api/v1/image/assets%2Fc70ebb3e5225486399c19406cd27bb43%2Fa993cba5ba76428987452eaa14a075fd?format=webp&width=800&height=1200",
    },
    {
      rating: 5.0,
      text: "Amazing and professional work honest people most of all they work with great passion!",
      name: "German Valle",
      role: "9 months ago",
      avatar: "https://cdn.builder.io/api/v1/image/assets%2Fc70ebb3e5225486399c19406cd27bb43%2Fadad46230e704738b7eacdefca5cc2d1?format=webp&width=800&height=1200",
    },
    {
      rating: 5.0,
      text: "Great experience made my website really well really appreciate the hard work",
      name: "Paxley",
      role: "8 months ago",
      avatar: "https://cdn.builder.io/api/v1/image/assets%2Fc70ebb3e5225486399c19406cd27bb43%2Fda8953551ec54f8f9815eb5d31176953?format=webp&width=800&height=1200",
    },
    {
      rating: 5.0,
      text: "I had an awesome experience working with Bryan Davis. He built my website and completely exceeded my expectations. Bryan was easy to communicate with, quick to respond, and really cared about making sure everything looked and worked exactly how I wanted. The whole process was simple and the final website turned out amazing. If you need a great programmer, I highly recommend Bryan Davis at Linkage Digital.",
      name: "Shay Veach",
      role: "3 months ago",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "I highly recommend Bryan Davis at The Linkage Digital. Professional, responsive, and extremely knowledgeable, Bryan made the entire process smooth and effective. His attention to detail and commitment to delivering real results truly set The Linkage Digital apart. Great experience from start to finish!",
      name: "Tyler Murray",
      role: "6 months ago",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "They did an amazing job for my business logo. Highly recommended!",
      name: "Emanya khan",
      role: "11 months ago",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "Great job!!!!",
      name: "Lucky Luciano",
      role: "6 hours ago",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "Bryan reached out to me on Facebook and helped me get an awesome website built for my business. Great communication, easy process, and a professional-looking result. Highly recommend working with him!",
      name: "Blaze Chaney",
      role: "3 weeks ago",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
  ];
  const navigate = useNavigate();

  useEffect(() => {
    const header = document.getElementById("site-header");
    const onScroll = () => {
      if (header) header.classList.toggle("shadow-md", window.scrollY > 60);
      const portfolioSection = document.getElementById("portfolio-section");
      if (portfolioSection) {
        const rect = portfolioSection.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const viewportHeight = window.innerHeight;
        if (sectionTop < viewportHeight && sectionTop + sectionHeight > 0) {
          const progress = (viewportHeight - sectionTop) / (viewportHeight + sectionHeight);
          setParallaxOffset(Math.max(0, progress));
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whoRef = useInView();
  const takeChargeRef = useInView();
  const empowerRef = useInView();
  const techRef = useInView();
  const portfolioRef = useInView();
  const servicesRef = useInView();
  const testimonialsRef = useInView();
  const faqRef = useInView();
  const blogRef = useInView();


  return (
    <div className="min-h-screen bg-white font-kanit">
      <SiteHeader />

      {/* ── HERO ── */}
      <main className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-8 md:pt-14 lg:pt-16 pb-12 md:pb-16 lg:pb-28">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12 xl:gap-20">

            {/* LEFT: text */}
            <div className="flex-1 min-w-0 text-center lg:text-left">
              <div className="flex items-end gap-2 md:gap-3 lg:justify-start justify-center">
                <h1 className="hero-heading font-teko font-bold text-black uppercase">
                  <span className="hero-line block">Linking</span>
                  <span className="hero-line block" style={{ color: "#8B0AB4" }}>Brands</span>
                  <span className="hero-line block">To The</span>
                </h1>

                {/* Purple pill with "NEW AGE" text */}
                <div
                  className="flex-shrink-0 relative bg-[#8B0AB4] overflow-visible z-10 animate-float"
                  style={{ borderRadius: "3rem", width: "clamp(3.8rem,6.2vw,7rem)", height: "clamp(4.5rem,7.5vw,8.5rem)" }}
                >
                  <span className="success-text font-teko font-normal text-black uppercase absolute left-1/2 top-1/2">
                    New Age
                  </span>
                </div>
              </div>

              {/* Purple underlines */}
              <div className="w-[282px] max-w-full h-px bg-[#8B0AB4] mt-3 mx-auto lg:mx-0" />
              <div className="w-[282px] max-w-full h-px bg-[#8B0AB4] mt-[3px] mx-auto lg:mx-0" />

              {/* Scroll icon + description + CTA */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 mt-10 md:mt-14 lg:mt-16 relative z-10">
                <OriginButton
                  fillColor="#8B0AB4"
                  className="w-8 h-14 md:w-10 md:h-16 rounded-full border border-[#ECECEC] hover:border-[#8B0AB4] text-[#121212] hover:text-white hidden sm:flex items-center justify-center flex-shrink-0"
                >
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 animate-bounce">
                    <path d="M4 0V10M0.5 7.5L4 11L7.5 7.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#121212] group-hover:text-white transition-colors" />
                  </svg>
                </OriginButton>
                <div className="text-center lg:text-left">
                  <p className="text-[#555] font-kanit font-normal text-base md:text-[18px] lg:text-[20px] leading-[1.55] max-w-[360px]">
                    We are a full-service digital agency that builds fascinating user
                    experiences. our team creates and exceptional UI design and
                    functionality.
                  </p>
                  <div className="flex items-center gap-2">
                    <OriginButton
                      onClick={() => navigate("/contact")}
                      fillColor="#8B0AB4"
                      className="group mt-6 md:mt-8 font-kanit font-medium text-[13px] md:text-[14px] uppercase text-[#1C1D20] border-b border-[#1C1D20] pb-0.5 tracking-wider hover:text-white hover:border-[#8B0AB4] px-3 py-2 transition-colors"
                    >
                      Get Started Now
                    </OriginButton>
                    <ArrowPointerButton onClick={() => navigate("/contact")} direction="right" />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: images + video + customers */}
            <div className="relative flex-shrink-0 mt-10 lg:mt-0 lg:w-[430px] xl:w-[500px]">
              {/* Pill images */}
              <div className="flex items-center justify-center pt-6 lg:pt-4 hero-images-enter">
                {/* Left: red duotone shape — positioned lower, behind */}
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/37fe508629794307b44d873859aad7cf/ec7816648020414088a761bd92dfb350?format=webp&width=800&height=1200"
                  alt="Our team"
                  className="flex-shrink-0 relative z-0 object-contain"
                  style={{
                    width: "clamp(80px,15vw,210px)",
                    height: "clamp(160px,30vw,420px)",
                    top: "clamp(10px,1.5vw,42px)",
                  }}
                />

                {/* Right: photo shape + Watch Video anchored to it */}
                <div
                  className="relative flex-shrink-0 z-10"
                  style={{
                    width: "clamp(80px,15vw,210px)",
                    height: "clamp(160px,30vw,420px)",
                    top: "clamp(-10px,-1.5vw,-42px)",
                  }}
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/37fe508629794307b44d873859aad7cf/37ff1df5edad4ccc800ecabb937bd016?format=webp&width=800&height=1200"
                    alt="Team member"
                    className="w-full h-full object-contain"
                  />
                  {/* Play button sits just outside the bottom-right curve */}
                  <div className="absolute -right-7 sm:-right-10 bottom-[38%] flex flex-col items-center gap-1">
                    <button className="w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] md:w-[52px] md:h-[52px] rounded-full bg-black border-[3px] border-white flex items-center justify-center hover:bg-[#8B0AB4] hover:scale-110 transition-all shadow-2xl animate-pulse-ring">
                      <PlayIcon />
                    </button>
                    <span className="font-kanit font-medium text-[8px] sm:text-[9px] md:text-[10px] uppercase text-[#121212] text-center leading-tight tracking-wide">
                      Watch
                      <br />
                      Video
                    </span>
                  </div>
                </div>
              </div>

              {/* Arrow + customers */}
              <div className="mt-4 md:mt-6 pl-2 md:pl-4 hero-bottom-enter">
                <OriginButton
                  fillColor="#8B0AB4"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#ECECEC] hover:border-[#8B0AB4] text-[#121212] hover:text-white mb-2 md:mb-3 flex items-center justify-center"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <path d="M5 0V8.5M5 8.5L1.25 4.75M5 8.5L8.75 4.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#121212] group-hover:text-white transition-colors" />
                  </svg>
                </OriginButton>
                <img src={THUMB_IMG} alt="Customers" className="h-12 md:h-14 mb-2 md:mb-3 max-w-full" />
                <p className="font-kanit text-[15px] md:text-[17px] lg:text-[18px] leading-[1.4]">
                  <span className="text-[#121212] underline underline-offset-2">
                    We have 18k+
                  </span>
                  <span className="text-[#999]"> customers</span>
                  <br />
                  <span className="text-[#999]">word-wide</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom-left blob decoration */}
        <img
          src={INTRO_SHAPE}
          alt=""
          className="hidden lg:block absolute bottom-0 left-0 w-[410px] pointer-events-none select-none"
        />
      </main>

      {/* ── WHO WE ARE SECTION ── */}
      <section ref={whoRef as React.RefObject<HTMLElement>} className="bg-white py-10 md:py-20 lg:py-24 overflow-hidden reveal">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

          {/* Heading row */}
          <div className="flex items-start justify-between mb-10 lg:mb-14">
            <div className="flex-1 min-w-0">
              {/* Line 1: label + "Have a brilliant" */}
              <div className="flex items-baseline gap-2 sm:gap-4 md:gap-8 flex-wrap">
                <span className="font-kanit font-bold text-[11px] sm:text-[13px] md:text-[16px] uppercase text-[#121212] whitespace-nowrap">
                  01 Who We Are
                </span>
                <h2 className="font-teko font-bold text-[#121212] uppercase leading-[0.92] text-[clamp(1.5rem,4vw,5rem)]">
                  Have a brilliant
                </h2>
              </div>
              {/* Lines 2-4 */}
              <h2 className="font-teko font-bold uppercase leading-[0.92] text-[clamp(1.8rem,4.5vw,5rem)] mt-0">
                idea boost the{" "}
                <span className="text-[#8B0AB4]">
                  Growth
                  <br />
                  Development
                </span>{" "}
                Agency
                <br />
                your branding!
              </h2>
            </div>
            {/* Decorative react-shape (top-right) */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/1804a4d3e15f8c2216251a890d0be577b72d7c89?width=284"
              alt=""
              className="hidden lg:block w-[130px] xl:w-[142px] flex-shrink-0 mt-6"
            />
          </div>

          {/* Content grid: Stats | Description | Office */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.3fr_1.5fr] gap-8 lg:gap-10 items-start">

            {/* ── LEFT: Stats + team photo ── */}
            <div className="flex flex-col gap-8">
              {/* Customer stat widget */}
              <div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2ac29ce1c1c25b4a7061cf388b087767fd7967d8?width=240"
                  alt="Happy clients"
                  className="h-[50px] w-auto mb-5"
                />
                <div className="flex items-center gap-3">
                  {/* Rotated "32k+" label */}
                  <div className="flex-shrink-0 w-[30px] h-[52px] flex items-center justify-center overflow-visible">
                    <span className="font-teko font-semibold text-[22px] md:text-[24px] tracking-[2.5px] uppercase text-[#121212] -rotate-90 whitespace-nowrap">
                      32k+
                    </span>
                  </div>
                  <p className="font-kanit font-normal text-[15px] md:text-[16px] text-[#555] leading-[1.4]">
                    happy
                    <br />
                    clients of
                    <br />
                    our Services
                  </p>
                </div>
              </div>
              {/* Team photo */}
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/cebf100cfa2f8b5cd61f8901babba182a2278871?width=660"
                alt="Team working"
                className="w-full max-w-[330px] h-[180px] md:h-[209px] object-cover"
              />
            </div>

            {/* ── MIDDLE: Description + Explore button ── */}
            <div className="md:border-l border-[#ECECEC] pl-0 md:pl-10 lg:pl-12 flex flex-col justify-between gap-8 min-h-[280px] md:min-h-[305px] mt-6 md:mt-0">
              <p className="font-kanit font-normal text-[#555] text-[15px] md:text-[18px] leading-[1.6]">
                Consumers today rely heavily on digital means to research
                products. We help brands build engaging digital experiences that
                connect with your audience and drive meaningful results.
              </p>
              {/* Circle "Explore Us More" button */}
              <ExploreCircleButton onClick={() => navigate("/about")} clipId="clip-explore" />
            </div>

            {/* ── RIGHT: Office image + stat card ── */}
            <div className="md:col-span-2 lg:col-span-1 relative overflow-visible">
              {/* Office image */}
              <div className="overflow-hidden h-[300px] md:h-[380px] lg:h-[455px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/53a7e1e500fa7f5bf705363b6c052995e6bca45a?width=910"
                  alt="Office"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* White stat card – overlaps right portion of image on desktop */}
              <div className="relative lg:absolute lg:right-0 lg:-top-10 bg-[#F9F9F9] p-6 md:p-8 lg:p-10 lg:w-[65%] z-10">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/29d2818d5b277ff727f65d90516ef514b52db1c9?width=54"
                  alt=""
                  className="w-7 h-6 mb-4"
                />
                <p className="font-kanit font-normal text-[#555] text-[15px] md:text-[18px] leading-[1.5] mb-4">
                  Make your business prosper with our great team of experts.
                  We'll accelerate your growth and success.
                </p>
                {/* 1.8x stat */}
                <div className="flex items-end leading-none">
                  <span className="font-teko font-semibold text-[80px] md:text-[100px] lg:text-[120px] text-[#121212] leading-none">
                    1.8
                  </span>
                  <span className="font-teko font-semibold text-[32px] md:text-[40px] lg:text-[48px] text-[#121212] leading-none mb-1 md:mb-2">
                    x
                  </span>
                </div>
                <span className="font-teko font-semibold text-[18px] md:text-[20px] lg:text-[21px] uppercase text-[#121212] tracking-wide">
                  Faster Service
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── BRAND BAR ── */}
      <div className="flex h-[100px] sm:h-[130px] md:h-[158px] overflow-hidden">
        {/* Dark left square with decorative image */}
        <div className="w-[100px] sm:w-[120px] md:w-[156px] flex-shrink-0 bg-[#121212] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-16 md:w-20 h-16 md:h-20 bg-[#8B0AB4]" />
          <img
            src={BRAND_CORNER}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Pink marquee area */}
        <MarqueeScroll />
      </div>

      {/* ── TAKE CHARGE STEERING SECTION ── */}
      <section ref={takeChargeRef as React.RefObject<HTMLElement>} className="bg-[#171717] py-12 md:py-20 lg:py-24 overflow-hidden reveal">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

          {/* Top: character + heading + description */}
          <div className="flex flex-col items-center text-center mb-14 md:mb-20">
            {/* 3D character peeking above the heading */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a03b2a33c768d1dfef5dfb6f28f1b06f4587f107?width=186"
              alt=""
              className="w-[70px] md:w-[93px] h-auto -mb-3 md:-mb-4 relative z-10"
            />
            {/* Heading */}
            <h2 className="font-teko font-bold text-white uppercase leading-[0.93] text-[clamp(1.8rem,5vw,5rem)]">
              Take Charge Steering
              <br />
              Your Product
            </h2>
            {/* Description – right-aligned on desktop */}
            <div className="w-full flex justify-center lg:justify-end mt-5 md:mt-7">
              <p className="font-kanit font-normal text-white text-[15px] md:text-[18px] leading-[1.55] max-w-[280px] md:max-w-[301px] text-left">
                Our ability to combine expertise and systems thinking is what
                fuels us as a team.
              </p>
            </div>
          </div>

          {/* Feature cards: 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 reveal-stagger in-view">

            {/* Card 1: Dedicated Team */}
            <div className="md:border-r border-white/[0.08] pb-10 md:pb-0 md:pr-8 lg:pr-14">
              <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip-icon-1)">
                  <path d="M29.5113 7.11739e-06C24.3109 -0.00361165 19.2026 1.37277 14.708 3.98874C14.0226 4.3981 13.3468 4.82658 12.6995 5.27401C7.31783 8.99757 3.32897 14.4067 1.36217 20.6484C-0.604619 26.89 -0.437553 33.609 1.83724 39.7452C1.93244 40.0307 2.04676 40.3067 2.16099 40.5828C2.35139 41.0524 2.55143 41.5096 2.76086 41.9538C2.83702 42.1251 2.91317 42.2966 2.99885 42.4679C5.79915 48.1862 10.3736 52.8454 16.0395 55.7501C21.7055 58.6548 28.159 59.6491 34.4365 58.5846C40.714 57.5202 46.4788 54.4541 50.8705 49.8439C55.2622 45.2337 58.0451 39.3268 58.8037 33.0051C58.8895 32.3291 58.956 31.6439 58.9846 30.9584C58.9846 30.4729 58.9846 30.0064 58.9846 29.5114C58.9846 21.6911 55.8807 14.1904 50.3545 8.65707C44.8283 3.12371 37.3317 0.0100979 29.5113 7.11739e-06ZM1.90394 29.5114C1.90684 24.8452 3.09253 20.256 5.34998 16.1723C7.60743 12.0885 10.863 8.6436 14.8128 6.15929C17.9755 7.70922 20.621 10.1431 22.4287 13.1659C21.6474 13.7476 21.0635 14.5547 20.7555 15.4787C20.4475 16.4027 20.4304 17.399 20.7064 18.3331C20.9826 19.267 21.5384 20.0939 22.2992 20.7021C23.0601 21.3102 23.9889 21.6703 24.9608 21.7337C24.9608 21.9623 24.9608 22.1811 24.9608 22.4097C24.957 24.1146 24.7102 25.8103 24.2279 27.4456C16.4861 29.5728 9.39411 33.5899 3.58896 39.136C2.45394 36.055 1.88314 32.7947 1.90394 29.5114ZM23.4854 29.6445C22.0772 32.8663 19.7603 35.608 16.8183 37.5337C13.8765 39.4595 10.437 40.486 6.92089 40.4878C6.30084 40.4897 5.68118 40.4579 5.06458 40.3924C10.2915 35.432 16.5967 31.7499 23.4854 29.635V29.6445ZM29.5113 57.1188C24.4701 57.1165 19.5258 55.734 15.2144 53.1209C10.9032 50.508 7.38968 46.7645 5.05505 42.2964C5.67383 42.3535 6.29263 42.3917 6.95901 42.3917C11.0974 42.3865 15.1321 41.0968 18.5066 38.7012C21.8811 36.3054 24.429 32.9215 25.7987 29.0163C36.2522 26.3933 47.2919 27.48 57.0332 32.0912C56.3901 38.9425 53.2116 45.3067 48.1205 49.9364C43.0294 54.5661 36.3927 57.1275 29.5113 57.1188ZM57.1188 30.0541C47.499 25.6699 36.7049 24.5695 26.3984 26.922C26.7459 25.4396 26.9247 23.9227 26.9315 22.4001C26.9315 22.086 26.9315 21.7718 26.9315 21.4482C27.9705 21.0576 28.8405 20.3164 29.3908 19.3524C29.941 18.3884 30.137 17.2625 29.9451 16.1692C29.753 15.076 29.185 14.0842 28.3393 13.3654C27.4935 12.6466 26.4231 12.2461 25.3132 12.2331C24.9537 12.2334 24.5954 12.278 24.2468 12.3662C22.4588 9.31352 19.9019 6.78288 16.8309 5.02649C21.0383 2.83847 25.7385 1.77116 30.4782 1.92744C35.218 2.08372 39.8378 3.45831 43.8919 5.91873C47.9461 8.37915 51.2978 11.8424 53.6246 15.9747C55.9514 20.107 57.1744 24.7691 57.1759 29.5114C57.1188 29.6827 57.1092 29.8636 57.0997 30.0446L57.1188 30.0541Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip-icon-1"><rect width="59" height="59" fill="white"/></clipPath>
                </defs>
              </svg>
              <h3 className="font-teko font-semibold text-white uppercase text-[32px] md:text-[36px] leading-[0.88] mt-5 mb-4">
                Dedicated
                <br />
                Team
              </h3>
              <p className="font-kanit font-normal text-white text-[15px] md:text-[18px] leading-[1.55] max-w-[260px]">
                Find the best fit engineers led by senior, seasoned, and skilled
                our tech- lead.
              </p>
            </div>

            {/* Card 2: Product Team */}
            <div className="md:border-r border-white/[0.08] py-10 md:py-0 md:px-8 lg:px-14">
              <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip-icon-2)">
                  <path d="M29.5113 7.11739e-06C24.3109 -0.00361165 19.2026 1.37277 14.708 3.98874C14.0226 4.3981 13.3468 4.82658 12.6995 5.27401C7.31783 8.99757 3.32897 14.4067 1.36217 20.6484C-0.604619 26.89 -0.437553 33.609 1.83724 39.7452C1.93244 40.0307 2.04676 40.3067 2.16099 40.5828C2.35139 41.0524 2.55143 41.5096 2.76086 41.9538C2.83702 42.1251 2.91317 42.2966 2.99885 42.4679C5.79915 48.1862 10.3736 52.8454 16.0395 55.7501C21.7055 58.6548 28.159 59.6491 34.4365 58.5846C40.714 57.5202 46.4788 54.4541 50.8705 49.8439C55.2622 45.2337 58.0451 39.3268 58.8037 33.0051C58.8895 32.3291 58.956 31.6439 58.9846 30.9584C58.9846 30.4729 58.9846 30.0064 58.9846 29.5114C58.9846 21.6911 55.8807 14.1904 50.3545 8.65707C44.8283 3.12371 37.3317 0.0100979 29.5113 7.11739e-06ZM1.90394 29.5114C1.90684 24.8452 3.09253 20.256 5.34998 16.1723C7.60743 12.0885 10.863 8.6436 14.8128 6.15929C17.9755 7.70922 20.621 10.1431 22.4287 13.1659C21.6474 13.7476 21.0635 14.5547 20.7555 15.4787C20.4475 16.4027 20.4304 17.399 20.7064 18.3331C20.9826 19.267 21.5384 20.0939 22.2992 20.7021C23.0601 21.3102 23.9889 21.6703 24.9608 21.7337C24.9608 21.9623 24.9608 22.1811 24.9608 22.4097C24.957 24.1146 24.7102 25.8103 24.2279 27.4456C16.4861 29.5728 9.39411 33.5899 3.58896 39.136C2.45394 36.055 1.88314 32.7947 1.90394 29.5114ZM23.4854 29.6445C22.0772 32.8663 19.7603 35.608 16.8183 37.5337C13.8765 39.4595 10.437 40.486 6.92089 40.4878C6.30084 40.4897 5.68118 40.4579 5.06458 40.3924C10.2915 35.432 16.5967 31.7499 23.4854 29.635V29.6445ZM29.5113 57.1188C24.4701 57.1165 19.5258 55.734 15.2144 53.1209C10.9032 50.508 7.38968 46.7645 5.05505 42.2964C5.67383 42.3535 6.29263 42.3917 6.95901 42.3917C11.0974 42.3865 15.1321 41.0968 18.5066 38.7012C21.8811 36.3054 24.429 32.9215 25.7987 29.0163C36.2522 26.3933 47.2919 27.48 57.0332 32.0912C56.3901 38.9425 53.2116 45.3067 48.1205 49.9364C43.0294 54.5661 36.3927 57.1275 29.5113 57.1188ZM57.1188 30.0541C47.499 25.6699 36.7049 24.5695 26.3984 26.922C26.7459 25.4396 26.9247 23.9227 26.9315 22.4001C26.9315 22.086 26.9315 21.7718 26.9315 21.4482C27.9705 21.0576 28.8405 20.3164 29.3908 19.3524C29.941 18.3884 30.137 17.2625 29.9451 16.1692C29.753 15.076 29.185 14.0842 28.3393 13.3654C27.4935 12.6466 26.4231 12.2461 25.3132 12.2331C24.9537 12.2334 24.5954 12.278 24.2468 12.3662C22.4588 9.31352 19.9019 6.78288 16.8309 5.02649C21.0383 2.83847 25.7385 1.77116 30.4782 1.92744C35.218 2.08372 39.8378 3.45831 43.8919 5.91873C47.9461 8.37915 51.2978 11.8424 53.6246 15.9747C55.9514 20.107 57.1744 24.7691 57.1759 29.5114C57.1188 29.6827 57.1092 29.8636 57.0997 30.0446L57.1188 30.0541Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip-icon-2"><rect width="59" height="59" fill="white"/></clipPath>
                </defs>
              </svg>
              <h3 className="font-teko font-semibold text-white uppercase text-[32px] md:text-[36px] leading-[0.88] mt-5 mb-4">
                Product
                <br />
                Team
              </h3>
              <p className="font-kanit font-normal text-white text-[15px] md:text-[18px] leading-[1.55] max-w-[240px]">
                Get top-notch service from an experienced Product Designer
                Manager team.
              </p>
            </div>

            {/* Card 3: End-to-End Team */}
            <div className="pt-10 md:pt-0 md:pl-8 lg:pl-14">
              <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip-icon-3)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M25.6935 8.5643V25.6933C25.6935 29.1094 22.9243 31.8788 19.5081 31.8788C16.092 31.8788 13.3226 29.1095 13.3226 25.6933V8.5643C13.3226 5.14815 16.092 2.37881 19.5081 2.37881C22.9243 2.37881 25.6935 5.14815 25.6935 8.5643ZM11.4194 8.5643C11.4194 4.09703 15.0408 0.475586 19.5081 0.475586C23.9753 0.475586 27.5968 4.09703 27.5968 8.5643V25.6933C27.5968 30.1606 23.9753 33.782 19.5081 33.782C15.0408 33.782 11.4194 30.1606 11.4194 25.6933V8.5643ZM39.4919 21.4111C42.3826 21.4111 44.7258 19.0678 44.7258 16.1772C44.7258 13.2866 42.3826 10.9433 39.4919 10.9433C36.6013 10.9433 34.2581 13.2866 34.2581 16.1772C34.2581 19.0678 36.6013 21.4111 39.4919 21.4111ZM39.4919 23.3143C43.4336 23.3143 46.629 20.1189 46.629 16.1772C46.629 12.2355 43.4336 9.0401 39.4919 9.0401C35.5503 9.0401 32.3548 12.2355 32.3548 16.1772C32.3548 20.1189 35.5503 23.3143 39.4919 23.3143ZM40.7892 56.2785C37.2101 57.761 33.374 58.524 29.5 58.524C25.626 58.524 21.7899 57.761 18.2108 56.2785C14.6317 54.7959 11.3797 52.6229 8.64034 49.8836C5.90102 47.1443 3.72807 43.8923 2.24555 40.3131C0.763037 36.734 0 32.898 0 29.024V28.0724H0.951612H7.1371V29.9756H1.91964C2.03347 33.275 2.73854 36.5299 4.0039 39.5848C5.39076 42.933 7.42353 45.9752 9.98613 48.5378C12.5487 51.1004 15.5909 53.1332 18.9392 54.5201C22.2873 55.9069 25.876 56.6207 29.5 56.6207C33.124 56.6207 36.7127 55.9069 40.0608 54.5201C43.4091 53.1332 46.4513 51.1004 49.0139 48.5378C51.5765 45.9752 53.6092 42.933 54.9961 39.5848C56.2614 36.53 56.9665 33.275 57.0804 29.9756H31.879V28.0724H58.0484H59V29.024C59 32.898 58.237 36.734 56.7545 40.3131C55.272 43.8923 53.099 47.1443 50.3596 49.8836C47.6203 52.6229 44.3683 54.7959 40.7892 56.2785Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip-icon-3"><rect width="59" height="59" fill="white"/></clipPath>
                </defs>
              </svg>
              <h3 className="font-teko font-semibold text-white uppercase text-[32px] md:text-[36px] leading-[0.88] mt-5 mb-4">
                End-to-End
                <br />
                Team
              </h3>
              <p className="font-kanit font-normal text-white text-[15px] md:text-[18px] leading-[1.55] max-w-[278px]">
                Hire an elite squad of leading have professionals to turn idea
                into an ready-to-market product
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── EMPOWERING SKILLS SECTION ── */}
      <section ref={empowerRef as React.RefObject<HTMLElement>} className="bg-white py-10 md:py-20 lg:py-24 reveal">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

          {/* Heading + description row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-10 lg:mb-14">
            <h2 className="font-teko font-bold text-[#121212] uppercase leading-[0.93] text-[clamp(2rem,5.5vw,5rem)]">
              Empowering Skills
              <br />
              To Help You!
            </h2>
            <p className="font-kanit font-normal text-[#555] text-[15px] md:text-[18px] leading-[1.55] max-w-[300px] lg:mt-3">
              Add the best talent on the market, an agile skilled management &amp;
              seamless involvement
            </p>
          </div>

          {/* Tabs + image grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8 lg:gap-12 items-start">

            {/* Tab list */}
            <div className="flex flex-col">
              {TABS.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`relative border-l-2 pl-8 py-4 text-left transition-colors overflow-hidden ${
                    activeTab === i
                      ? "border-[#8B0AB4]"
                      : "border-[#ECECEC] hover:border-[#8B0AB4]/40"
                  }`}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute rounded-full"
                    style={{
                      width: 0,
                      height: 0,
                      left: 0,
                      top: 0,
                      backgroundColor: "#8B0AB4",
                      opacity: activeTab === i ? 0.05 : 0,
                      transform: "translate(-50%, -50%) scale(0)",
                      transition: "opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                      zIndex: 0,
                    }}
                  />
                  <div className="relative z-10 flex items-start gap-5">
                    {/* Icon circle */}
                    <div
                      className={`w-[55px] h-[55px] md:w-[65px] md:h-[65px] rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        activeTab === i ? "bg-[#8B0AB4] text-white" : "bg-[#DDD] text-[#121212]"
                      }`}
                    >
                      {tab.icon}
                    </div>
                    {/* Content */}
                    <div>
                      <h3 className="font-teko font-semibold text-[#000] uppercase text-[28px] md:text-[36px] leading-[1.1]">
                        {tab.title}
                      </h3>
                      <p className="font-kanit font-normal text-[#555] text-[14px] md:text-[18px] leading-[1.55] mt-1 max-w-[300px]">
                        {tab.desc}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Tab panel image */}
            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Feaa719c761d64fc58dbfe871f4fb5f8e%2Fe6c2f37c15ae41b5b4880182ef260f71?format=webp&width=800&height=1200"
                alt="Dashboard and team"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Technology expertise */}
          <div className="mt-20 md:mt-28 lg:mt-32">
            <p className="font-kanit font-normal text-[#121212] text-[18px] md:text-[21px] text-center mb-10 md:mb-14">
              Our Technology Expertise Includes
            </p>

            {/* Tech circles – overlapping on desktop */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-0">
              {TECH_ITEMS.map((tech, i) => (
                <div
                  key={tech.name}
                  className={`flex-shrink-0 w-[130px] h-[130px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] lg:w-[260px] lg:h-[260px] xl:w-[298px] xl:h-[298px] rounded-full border border-[#ECECEC] bg-white flex flex-col items-center justify-center gap-1 sm:gap-2 lg:gap-3 ${
                    i > 0 ? "sm:-ml-4 md:-ml-6 lg:-ml-10 xl:-ml-12" : ""
                  }`}
                >
                  {tech.src ? (
                    <img
                      src={tech.src}
                      alt={tech.name}
                      className="h-[50px] sm:h-[65px] lg:h-[85px] xl:h-[100px] w-auto object-contain"
                    />
                  ) : (
                    /* Redux inline SVG */
                    <svg height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[50px] sm:h-[65px] lg:h-[85px] xl:h-[100px] w-auto">
                      <path d="M65.6 46.6c1.5-7.3.4-13.1-3.4-15.3l-.1-.1c-1.8-1-3.9-1.3-6.3-.8-2.3.5-4.7 1.7-7.1 3.6-1.6-3.4-3.5-5.9-5.7-7.3-2.6-1.7-5.4-1.9-8-.7l-.2.1c-2.5 1.4-4.1 3.9-4.7 7.4-.5 3-0.3 6.6.8 10.4-3.4 1-6 2.4-7.7 4.2-2 2.1-2.7 4.7-2 7.4l.1.2c1.3 4.8 6 7.2 13.4 6.6l.4-.1c-.1.4-.1.8-.2 1.2-1.5 7.3-.4 13.1 3.4 15.3l.1.1c1.1.6 2.3.9 3.5.9 4.3 0 9-3 13-8.6 1.6 3.3 3.5 5.8 5.7 7.2 2.6 1.7 5.4 1.9 8 .7l.2-.1c2.6-1.4 4.2-3.9 4.7-7.4.5-3 .3-6.6-.8-10.4 3.3-1 5.9-2.4 7.7-4.2 2-2.1 2.7-4.7 2-7.4l-.1-.2c-1.2-4.7-5.8-7.1-13.2-6.6l-.5.1zm-1.3 3.5c5.9-.4 9.4 1.3 10.2 4.2.5 2-.1 4-1.8 5.7-1.4 1.5-3.5 2.6-6.3 3.4-.9-2.9-2-5.8-3.3-8.5 1-1.7 1-3.2.1-4.5l1.1-.3zm-14.5-13c1.7-2.4 3.5-4.2 5.3-5.3 1.7-1 3.2-1.3 4.4-.7 2.1 1.2 3.1 5.2 2.3 10.5-.1.7-.3 1.4-.5 2.1a36.7 36.7 0 00-4.7-.3 36.7 36.7 0 00-4.7.3c-1.3-2.5-2.4-4.8-3.3-6.9l1.2.3zm-10 0c.4-2.9 1.4-4.8 2.8-5.7 2.2-1.2 5.2.3 8.1 4l.1.1c-1.1 2.2-2.2 4.5-3.2 7-.9.2-1.8.5-2.5.8-2.8-1.8-4.9-4.1-5.3-6.2zm-7.4 14.7c-5.9.4-9.4-1.3-10.2-4.2-.5-2 .1-4 1.8-5.7 1.4-1.5 3.5-2.6 6.3-3.4.9 2.9 2 5.8 3.3 8.5-1 1.7-1 3.2-.1 4.5l-1.1.3zm14.6 20.6c-3.7 5.4-7.7 7.8-10.4 6.4-2.1-1.2-3.1-5.2-2.3-10.5.1-.7.3-1.4.5-2.1 1.5.2 3 .3 4.7.3 1.7 0 3.2-.1 4.7-.3 1.3 2.5 2.4 4.8 3.3 6.9l-.5.3zm2.5-6.8c-1.6.3-3.2.5-4.7.5-1.5 0-3.1-.2-4.7-.5-.7-1.7-1.3-3.3-1.9-5-.5-1.5-1-3-1.4-4.5.5-1.5 1-3 1.4-4.5.6-1.7 1.2-3.3 1.9-5 1.6-.3 3.2-.5 4.7-.5 1.5 0 3.1.2 4.7.5.7 1.7 1.3 3.3 1.9 5 .5 1.5 1 3 1.4 4.5-.5 1.5-1 3-1.4 4.5-.6 1.7-1.2 3.3-1.9 5zm4.3 2.8c-.4 2.9-1.4 4.8-2.8 5.7l-.1.1c-2.2 1.2-5.2-.3-8.1-4-.1-.1-.2-.2-.3-.4 1.1-2.2 2.2-4.5 3.2-7 .9-.2 1.8-.5 2.5-.8 2.8 1.8 4.9 4.1 5.6 6.4zm5.7-7.8c-1.1-2.9-2.5-5.7-3.3-8.5.9-1.3.9-2.8.1-4.5l1.1-.3c5.9-.4 9.4 1.3 10.2 4.2.5 2-.1 4-1.8 5.7-1.4 1.5-3.5 2.6-6.3 3.4z" fill="#121212"/>
                    </svg>
                  )}
                  <span className="font-teko font-semibold text-[#121212] uppercase text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[26px]">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO SECTION ── */}
      <section ref={portfolioRef as React.RefObject<HTMLElement>} id="portfolio-section" className="bg-white overflow-hidden reveal py-6 md:py-0">
        {/* Staggered mosaic grid with infinite scroll
            Each image = 29.6vw wide (555/1875×100) so 4 fill ~120vw total
            Row 2 shifted left by 19.9vw (373/1875×100) → last image reaches exactly 100vw */}
        <div className="relative">

          {/* Row 1 — infinite scroll right */}
          <PortfolioRow direction="right" images={[
            { type: "iframe", url: "https://www.buscandoamoreterno.com/" },
            { type: "iframe", url: "https://www.riveras-autodetailingllc.com/" },
            { type: "iframe", url: "https://mindstrivewellness.com/" },
            { type: "iframe", url: "https://tivo-auto-detailingg.vercel.app/services" },
          ]} />

          {/* Row gap */}
          <div className="h-[0.53vw]" />

          {/* Row 2 — infinite scroll left with stagger */}
          <PortfolioRow direction="left" images={[
            { type: "iframe", url: "https://v-i-p-mobile-detailing-llc.vercel.app/" },
            { type: "iframe", url: "https://www.sarajianlandscapingandlawncarellc.online/" },
            { type: "iframe", url: "https://next-level-excavation-land-manageme.vercel.app/" },
            { type: "iframe", url: "https://elite-lawn-rangers.vercel.app/" },
          ]} stagger={-19.9} />

          {/* Center "PORTFOLIO" circle overlay */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       rounded-full bg-white flex items-center justify-center pointer-events-none"
            style={{
              width: "clamp(100px, 22.4vw, 420px)",
              height: "clamp(100px, 22.4vw, 420px)",
            }}
          >
            <span
              className="font-teko font-bold text-[#8B0AB4] uppercase"
              style={{ fontSize: "clamp(0.85rem, 2.13vw, 2.5rem)" }}
            >
              Portfolio
            </span>
          </div>
        </div>
      </section>

      {/* ── PREMIUM SERVICES SECTION ── */}
      <section ref={servicesRef as React.RefObject<HTMLElement>} className="bg-white py-10 md:py-20 lg:py-24 reveal">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="text-center mb-14 md:mb-20">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a03b2a33c768d1dfef5dfb6f28f1b06f4587f107?width=186"
              alt=""
              className="w-[60px] md:w-[80px] h-auto mx-auto -mb-2 relative z-10"
            />
            <h2 className="font-teko font-bold uppercase leading-[0.92] text-[clamp(2rem,5.5vw,5rem)] text-[#121212]">
              We <span className="text-[#8B0AB4]">Provide</span> Premium
              <br />
              Services
            </h2>
            <p className="font-kanit font-normal text-[#555] text-[15px] md:text-[18px] leading-[1.55] mt-5 max-w-[480px] mx-auto">
              "Our ability to combine expertise and systems thinking is what
              fuels us as a team."
            </p>
          </div>

          {/* Services list */}
          {[
            {
              num: "01.",
              name: "Website Design\n& Development",
              desc: "Modern, responsive, high-converting websites tailored to your business goals.",
              features: ["Web Design", "Interation Design", "UX Research & Plan"],
              icon: (
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 3L39 12.5V31.5L22 41L5 31.5V12.5L22 3Z" stroke="#121212" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M22 3V41M5 12.5L39 12.5M5 31.5L39 31.5" stroke="#121212" strokeWidth="1.5"/>
                  <path d="M22 3L39 12.5M5 12.5L22 3M5 31.5L22 41M39 31.5L22 41" stroke="#121212" strokeWidth="1.5"/>
                  <circle cx="22" cy="22" r="8" stroke="#121212" strokeWidth="1.5"/>
                </svg>
              ),
            },
            {
              num: "02.",
              name: "Branding &\nLogo Design",
              desc: "Build a memorable brand identity that stands out in your market.",
              features: ["Brand & Logo", "Interation Design", "Branding"],
              icon: (
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22" cy="22" r="18" stroke="#121212" strokeWidth="1.5"/>
                  <line x1="10" y1="17" x2="34" y2="17" stroke="#121212" strokeWidth="1.5"/>
                  <line x1="10" y1="22" x2="34" y2="22" stroke="#121212" strokeWidth="1.5"/>
                  <line x1="10" y1="27" x2="34" y2="27" stroke="#121212" strokeWidth="1.5"/>
                  <path d="M14 10C14 10 22 6 30 10" stroke="#121212" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M14 34C14 34 22 38 30 34" stroke="#121212" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
            },
            {
              num: "03.",
              name: "Digital\nMarketing",
              desc: "Reach the right audience with strategic social and online campaigns.",
              features: ["Digital Marketing", "Social Media Managment", "Ads Campaign"],
              icon: (
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22" cy="22" r="18" stroke="#121212" strokeWidth="1.5"/>
                  <ellipse cx="22" cy="22" rx="8" ry="18" stroke="#121212" strokeWidth="1.5"/>
                  <line x1="4" y1="22" x2="40" y2="22" stroke="#121212" strokeWidth="1.5"/>
                  <path d="M6 14h32M6 30h32" stroke="#121212" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
            },
            {
              num: "04.",
              name: "SEO\nOptimization",
              desc: "Improve search rankings and drive organic traffic to your business.",
              features: ["Rank on Google", "Traffic", "Optimization"],
              icon: (
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17" cy="8" r="5" stroke="#121212" strokeWidth="1.5"/>
                  <circle cx="27" cy="8" r="5" stroke="#121212" strokeWidth="1.5"/>
                  <path d="M8 36V26C8 23.8 9.8 22 12 22H32C34.2 22 36 23.8 36 26V36" stroke="#121212" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M8 36H36" stroke="#121212" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="22" y1="14" x2="22" y2="22" stroke="#121212" strokeWidth="1.5"/>
                </svg>
              ),
            },
            {
              num: "05.",
              name: "Video Editing\n& Motion",
              desc: "Engaging visual content that captures attention and converts.",
              features: ["Video editing", "Motion Graphics", "Engagement"],
              icon: (
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="12" width="28" height="20" rx="2" stroke="#121212" strokeWidth="1.5"/>
                  <path d="M32 18L40 14V30L32 26V18Z" stroke="#121212" strokeWidth="1.5" strokeLinejoin="round"/>
                  <line x1="4" y1="20" x2="32" y2="20" stroke="#121212" strokeWidth="1.5"/>
                  <line x1="14" y1="12" x2="14" y2="32" stroke="#121212" strokeWidth="1.5"/>
                </svg>
              ),
            },
          ].map((service, i, arr) => (
            <div key={i}>
              <div className="grid grid-cols-[50px_1fr] md:grid-cols-[70px_220px_1fr_60px] gap-4 md:gap-8 py-8 md:py-10 items-start">

                {/* Number */}
                <span className="font-teko font-bold text-[#121212] text-[22px] md:text-[28px] leading-none pt-1">
                  {service.num}
                </span>

                {/* Service name */}
                <h3 className="font-teko font-bold text-[#000] uppercase text-[22px] md:text-[30px] lg:text-[34px] leading-[1.1]">
                  {service.name.split("\n").map((line, li) => (
                    <span key={li}>
                      {line}
                      {li < service.name.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </h3>

                {/* Description + bullets — full-width on mobile */}
                <div className="col-span-2 md:col-span-1 md:max-w-[460px]">
                  <p className="font-kanit font-normal text-[#555] text-[13px] md:text-[15px] leading-[1.55] mb-3">
                    {service.desc}
                  </p>
                  <ul className="space-y-1">
                    {service.features.map((f, j) => (
                      <li
                        key={j}
                        className="font-kanit font-normal text-[#555] text-[13px] md:text-[15px] leading-[1.4]"
                      >
                        + &nbsp;{f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Icon — hidden on mobile */}
                <div className="hidden md:flex items-center justify-end opacity-80 mt-1">
                  {service.icon}
                </div>
              </div>

              {/* Divider */}
              {i < arr.length - 1 && (
                <div className="w-full h-px bg-[#ECECEC]" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIAL SECTION ── */}
      <section ref={testimonialsRef as React.RefObject<HTMLElement>} className="bg-white reveal">

        {/* Full-width banner image */}
        <div className="w-full h-[240px] md:h-[380px] lg:h-[560px] overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content below banner */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">

            {/* Left: Heading + description + explore */}
            <div>
              <h2 className="font-teko font-bold text-[#121212] uppercase leading-[0.92] text-[clamp(2rem,5.5vw,4.5rem)] mb-6">
                Trusted Clients
                <br />
                Testimonial
              </h2>
              <p className="font-kanit font-normal text-[#555] text-[15px] md:text-[18px] leading-[1.55] mb-10 max-w-[380px]">
                Our clients trust us to deliver exceptional results and outstanding
                service. See what they have to say about working with our team and
                the impact we've made on their business.
              </p>
              {/* Explore circle button */}
              <ExploreCircleButton onClick={() => navigate("/about")} clipId="clip-explore-testi" />
            </div>

            {/* Right: Testimonial card stack + navigation */}
            <div>
              {/* Card stack with stacked-paper effect */}
              <div className="relative max-w-[480px]">

                {/* Shadow / back card */}
                <div className="absolute top-2 right-0 left-6 bottom-0 bg-[#f0f0f0] border border-[#E0E0E0]" />

                {/* Main testimonial card */}
                <div
                  key={activeTestimonial}
                  className="relative bg-white border border-[#ECECEC] shadow-sm overflow-hidden"
                  style={{ animation: `${testimonialDir === 'left' ? 'testimonialEnterLeft' : 'testimonialEnterRight'} 0.45s cubic-bezier(0.16,1,0.3,1) both` }}
                >

                  {/* Card body */}
                  <div className="p-7 md:p-9 lg:p-10">
                    {/* Rating */}
                    <div className="flex items-end gap-2 mb-1">
                      <span className="font-teko font-bold text-[#121212] text-[42px] md:text-[52px] leading-none">
                        {TESTIMONIALS[activeTestimonial].rating}
                      </span>
                      <span className="text-yellow-400 text-[28px] leading-none mb-1">★</span>
                    </div>
                    <p className="font-kanit font-normal text-[#999] text-[13px] mb-7">
                      (out of 5 stars)
                    </p>
                    <p className="font-kanit font-normal text-[#444] text-[15px] md:text-[18px] leading-[1.6] mb-6">
                      {TESTIMONIALS[activeTestimonial].text}
                    </p>
                    {/* Quote marks */}
                    <div className="flex justify-end">
                      <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 22V14.667C0 6.592 4.444 1.926 13.333 0L14.667 3.2C10.8 4.267 8.4 6.667 7.467 10.333H12V22H0ZM16 22V14.667C16 6.592 20.444 1.926 29.333 0L30.667 3.2C26.8 4.267 24.4 6.667 23.467 10.333H28V22H16Z" fill="#121212"/>
                      </svg>
                    </div>
                  </div>

                  {/* Card footer – dark */}
                  <div className="bg-[#121212] px-7 md:px-9 lg:px-10 py-4 md:py-5 flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0 bg-[#333]">
                      <img
                        src={TESTIMONIALS[activeTestimonial].avatar}
                        alt={TESTIMONIALS[activeTestimonial].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-kanit font-semibold text-white text-[13px] md:text-[15px] uppercase tracking-wider leading-tight">
                        {TESTIMONIALS[activeTestimonial].name}
                      </p>
                      <p className="font-kanit font-normal text-[#888] text-[12px] md:text-[13px]">
                        {TESTIMONIALS[activeTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation controls */}
              <div className="flex items-center gap-3 mt-6 md:mt-8 max-w-[480px] justify-end">
                <div className="w-8 h-0.5 bg-[#121212] mr-1" />
                <ArrowPointerButton
                  onClick={() => {
                    setTestimonialDir("left");
                    setActiveTestimonial((p) => p === 0 ? TESTIMONIALS.length - 1 : p - 1);
                  }}
                  direction="left"
                />
                <ArrowPointerButton
                  onClick={() => {
                    setTestimonialDir("right");
                    setActiveTestimonial((p) => p === TESTIMONIALS.length - 1 ? 0 : p + 1);
                  }}
                  direction="right"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section ref={faqRef as React.RefObject<HTMLElement>} className="bg-white py-10 md:py-20 lg:py-24 reveal">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-20 items-start">

            {/* Left: heading + description */}
            <div className="lg:sticky lg:top-24">
              <h2 className="font-teko font-bold text-[#121212] uppercase leading-[0.88] text-[clamp(2rem,5.5vw,5.5rem)] mb-6">
                Frequently
                <br />
                Asked
                <br />
                Questions
              </h2>
              <p className="font-kanit font-normal text-[#555] text-[14px] md:text-[16px] leading-[1.55] max-w-[280px]">
              </p>
            </div>

            {/* Right: accordion */}
            <div>
              {[
                {
                  q: "How can professional web design improve my online visibility?",
                  a: "A well-designed website with proper SEO foundation increases organic search rankings and builds credibility. The Linkage Digital creates responsive, fast-loading websites optimized for search engines, helping you rank higher for local and national searches.",
                },
                {
                  q: "What's included in your digital marketing services?",
                  a: "We offer PPC advertising, social media management, email marketing, content strategy, and video marketing. These services integrate seamlessly with your website to create a comprehensive online presence that drives qualified leads and converts visitors into customers.",
                },
                {
                  q: "How does local SEO help my business?",
                  a: "Local SEO optimization includes Google Business Profile setup, location-specific keywords, local link building, and location-based content. This is essential for service businesses looking to attract customers in their geographic area and dominate local search results.",
                },
                {
                  q: "Can you design a custom logo and complete branding package?",
                  a: "Yes, we specialize in logo design and full brand identity development including color palettes, typography, brand guidelines, and cohesive visual assets. Strong branding builds customer recognition, trust, and differentiates you from competitors.",
                },
                {
                  q: "How long does a typical web design project take?",
                  a: "Most web design projects take 1 week, while custom full-stack applications range from 4-6 months. Timeline depends on scope and complexity. We use agile methodology to keep you informed at every stage with regular updates and feedback opportunities.",
                },
                {
                  q: "What makes The Linkage Digital different from other agencies?",
                  a: "We combine strategic design, technical expertise, and SEO knowledge to deliver results. We focus on user experience, performance, and conversions—not just aesthetics. Our team has proven experience with startups and enterprise clients, backed by verifiable case studies and client testimonials.",
                },
                {
                  q: "Do you offer ongoing support and maintenance?",
                  a: "Absolutely. We provide flexible support packages including security updates, performance monitoring, content updates, and feature enhancements. Our retainer plans start at $200/month, ensuring your website stays secure, fast, and competitive.",
                },
                {
                  q: "What's your typical project cost range?",
                  a: "Web design costs vary based on complexity. Simple 5-page websites start around $300-$500, while e-commerce and custom applications range $8,000-$25,000+. We offer transparent pricing with no hidden fees and custom quotes for your specific needs.",
                },
              ].map((item, i) => (
                <div key={i} className="border-t border-[#ECECEC]">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="relative w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left group overflow-hidden"
                  >
                    <span
                      aria-hidden
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
                          openFaq === i ? "text-[#121212]" : "text-[#333] group-hover:text-[#8B0AB4]"
                        }`}
                      >
                        {item.q}
                      </span>
                    </span>
                    <span
                      className={`flex-shrink-0 relative z-10 w-6 h-6 flex items-center justify-center font-kanit font-light text-xl leading-none transition-colors ${
                        openFaq === i ? "text-[#121212]" : "text-[#555] group-hover:text-[#8B0AB4]"
                      }`}
                    >
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>

                  {/* Answer (animated open/close) */}
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: openFaq === i ? "200px" : "0px", opacity: openFaq === i ? 1 : 0 }}
                  >
                    <div className="pb-6 pr-8">
                      <p className="font-kanit font-normal text-[#555] text-[13px] md:text-[15px] leading-[1.7]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Bottom border */}
              <div className="border-t border-[#ECECEC]" />
            </div>

          </div>
        </div>
      </section>


      {/* ── JOURNAL / BLOG SECTION ── */}
      <section ref={blogRef as React.RefObject<HTMLElement>} className="bg-white py-10 md:py-20 lg:py-24 reveal">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

          {/* Heading row */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-10 md:mb-14">
            <h2 className="font-teko font-bold text-[#121212] uppercase leading-[0.92] text-[clamp(1.8rem,5vw,4.5rem)]">
              Journal Insight
              <br />
              By The Linkage Digital
            </h2>
            <div className="max-w-[280px]">
              <p className="font-kanit font-normal text-[#555] text-[14px] md:text-[16px] leading-[1.55] mb-4">
                Our ability to combine expertise and systems thinking is what
                fuels us as a team.
              </p>
              <AnimatedButton
                onClick={() => navigate("/blog")}
                fillColor="#8B0AB4"
                className="inline-flex font-kanit font-medium text-[13px] uppercase text-[#121212] border-b border-[#121212] pb-0.5 hover:text-white hover:border-white transition-colors"
              >
                All Blog →
              </AnimatedButton>
            </div>
          </div>

          {/* Blog cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                title: "Web Design Trends 2024: Building Websites That Convert",
                excerpt: "Discover the latest web design trends transforming digital experiences. From AI-powered personalization to mobile-first design, learn what's driving conversions.",
              },
              {
                title: "The Complete Guide to Local SEO for Service Businesses",
                excerpt: "Master local SEO and dominate your geographic market. We break down Google Business optimization, local citations, and ranking strategies.",
              },
              {
                title: "Branding Essentials: Building a Memorable Digital Identity",
                excerpt: "Your brand is more than a logo. Learn how strategic branding, consistent messaging, and visual identity create lasting customer connections.",
              },
            ].map((post, i) => (
              <Link
                to="/blog"
                key={i}
                className="bg-[#1e2029] p-6 md:p-7 lg:p-8 flex flex-col justify-between min-h-[270px] md:min-h-[300px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                {/* Author */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-[#333] flex-shrink-0">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/a03b2a33c768d1dfef5dfb6f28f1b06f4587f107?width=186"
                      alt="Admin"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-kanit font-normal text-[#888] text-[11px] leading-tight">
                      Written by
                    </p>
                    <p className="font-kanit font-medium text-white text-[13px] leading-tight">
                      Admin
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-teko font-bold text-white uppercase text-[20px] md:text-[22px] lg:text-[24px] leading-[1.1] mb-3">
                    {post.title}
                  </h3>
                  <p className="font-kanit font-normal text-[#888] text-[13px] md:text-[14px] leading-[1.5]">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="bg-[#FFE8F5] py-14 md:py-28 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT — Contact Form */}
            <div className="bg-white/30 backdrop-blur-md rounded-xl p-8 md:p-10 lg:p-12">
              <h3 className="font-teko font-bold text-[#121212] uppercase text-[24px] md:text-[28px] mb-2">
                Send us a Message
              </h3>
              <p className="font-kanit text-[#555] text-[14px] md:text-[15px] mb-8">
                We'd love to hear from you. Fill out the form below and we'll get back to you shortly.
              </p>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 md:py-4 font-kanit text-[14px] md:text-[15px] bg-white border border-[#DDD] rounded-lg focus:outline-none focus:border-[#8B0AB4] focus:ring-1 focus:ring-[#8B0AB4]/20 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 md:py-4 font-kanit text-[14px] md:text-[15px] bg-white border border-[#DDD] rounded-lg focus:outline-none focus:border-[#8B0AB4] focus:ring-1 focus:ring-[#8B0AB4]/20 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 md:py-4 font-kanit text-[14px] md:text-[15px] bg-white border border-[#DDD] rounded-lg focus:outline-none focus:border-[#8B0AB4] focus:ring-1 focus:ring-[#8B0AB4]/20 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your project"
                    rows={5}
                    className="w-full px-4 py-3 md:py-4 font-kanit text-[14px] md:text-[15px] bg-white border border-[#DDD] rounded-lg focus:outline-none focus:border-[#8B0AB4] focus:ring-1 focus:ring-[#8B0AB4]/20 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#8B0AB4] text-white font-kanit font-semibold text-[14px] md:text-[15px] uppercase px-6 py-3 md:py-4 rounded-lg hover:bg-[#7a0a94] transition-colors mt-2"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* RIGHT — Contact Info */}
            <div className="text-center lg:text-left">
              <p className="font-kanit font-semibold text-[#8B0AB4] text-[14px] md:text-[16px] uppercase tracking-[4px] mb-4 md:mb-6">
                👋&nbsp; Hello !
              </p>
              <h2 className="font-teko font-bold text-[#121212] uppercase leading-[0.88] text-[clamp(2.5rem,10vw,5rem)] mb-6 md:mb-8">
                Let's Talk
                <br />
                With Us
              </h2>
              <div className="space-y-3">
                <a
                  href="mailto:sales@thelinkagedigital.com"
                  className="block font-kanit font-normal text-[#121212] text-[16px] md:text-[18px] lg:text-[20px] hover:text-[#8B0AB4] transition-colors"
                >
                  sales@thelinkagedigital.com
                </a>
                <a
                  href="mailto:info@linkagedigital.com"
                  className="block font-kanit font-normal text-[#121212] text-[16px] md:text-[18px] lg:text-[20px] hover:text-[#8B0AB4] transition-colors"
                >
                  info@linkagedigital.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
