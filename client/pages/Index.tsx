import { Link } from "react-router-dom";

const LOGO =
  "https://api.builder.io/api/v1/image/assets/TEMP/b574152e3abce375b7cc892901486aa74053d07c?width=328";
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

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <g clipPath="url(#clip-arrow)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.81733 4.91128C8.05053 4.62631 8.47053 4.58431 8.75547 4.81746L13.8676 9.0001H0.666667C0.298477 9.0001 0 8.70162 0 8.33343C0 7.96525 0.298477 7.66677 0.666667 7.66677H10.1324L7.9112 5.84941C7.6262 5.61625 7.5842 5.19624 7.81733 4.91128Z"
          fill="#121212"
        />
      </g>
      <defs>
        <clipPath id="clip-arrow">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
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

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-kanit">
      {/* ── NAVBAR ── */}
      <header className="border-b border-[#ECECEC] relative z-50 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-[87px]">
          <img
            src={LOGO}
            alt="The Linkage Digital"
            className="h-[56px] md:h-[68px] lg:h-[78px] w-auto flex-shrink-0"
          />

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
          <Link
            to="/contact"
            className="bg-[#262629] text-white font-kanit font-medium text-[13px] md:text-[15px] lg:text-[17px] uppercase px-5 md:px-7 lg:px-9 py-3 lg:py-4 hover:bg-[#3a3a3e] transition-colors whitespace-nowrap tracking-wide"
          >
            Contact Us
          </Link>
        </div>
      </header>

      {/* ── HERO ── */}
      <main className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 pt-10 md:pt-14 lg:pt-16 pb-16 lg:pb-28">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12 xl:gap-20">

            {/* LEFT: text */}
            <div className="flex-1 min-w-0">
              {/* "TURNING IDEAS INTO" */}
              <h1 className="hero-heading font-teko font-bold text-black uppercase">
                Turning
                <br />
                Ideas
                <br />
                Into
              </h1>

              {/* "DIGITAL" + SUCCESS pill + avatar */}
              <div className="flex items-end gap-2 md:gap-3 mt-1">
                <h1 className="hero-heading font-teko font-bold text-black uppercase flex-shrink-0">
                  Digital
                </h1>

                {/* Purple pill with vertical "SUCCESS" text */}
                <div className="flex-shrink-0 relative flex items-center justify-center bg-[#8B0AB4] overflow-visible"
                  style={{ borderRadius: "3rem", width: "clamp(3.8rem,6.2vw,7rem)", height: "clamp(4.5rem,7.5vw,8.5rem)" }}
                >
                  <span className="success-text font-teko font-normal text-black uppercase">
                    Success
                  </span>
                </div>

                {/* Avatar circle */}
                <div
                  className="flex-shrink-0 bg-[#121212] rounded-full overflow-hidden"
                  style={{ width: "clamp(3.5rem,6vw,7rem)", height: "clamp(3.5rem,6vw,7rem)" }}
                >
                  <img src={AVATAR_IMG} alt="" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Purple underlines */}
              <div className="w-[282px] max-w-full h-px bg-[#8B0AB4] mt-3" />
              <div className="w-[282px] max-w-full h-px bg-[#8B0AB4] mt-[3px]" />

              {/* Scroll icon + description + CTA */}
              <div className="flex items-start gap-6 mt-10 md:mt-14 lg:mt-16">
                <img
                  src={SCROLL_IMG}
                  alt=""
                  className="w-8 h-14 md:w-10 md:h-16 flex-shrink-0 hidden sm:block"
                />
                <div>
                  <p className="text-[#555] font-kanit font-normal text-base md:text-[18px] lg:text-[20px] leading-[1.55] max-w-[360px]">
                    We are a full-service digital agency that builds fascinating user
                    experiences. our team creates and exceptional UI design and
                    functionality.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 mt-6 md:mt-8 group"
                  >
                    <span className="font-kanit font-medium text-[13px] md:text-[14px] uppercase text-[#1C1D20] border-b border-[#1C1D20] pb-0.5 group-hover:text-[#8B0AB4] group-hover:border-[#8B0AB4] transition-colors tracking-wider">
                      Get Started Now
                    </span>
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT: images + video + customers */}
            <div className="relative flex-shrink-0 mt-10 lg:mt-0 lg:w-[430px] xl:w-[500px]">
              {/* Top-right decoration */}
              <img
                src={INTRO_SHAPE_1}
                alt=""
                className="absolute -top-6 right-0 w-20 md:w-24 pointer-events-none z-10"
              />

              {/* Pill images */}
              <div className="flex items-end justify-center gap-3 md:gap-5 pt-6 lg:pt-4">
                {/* Left: person (taller) */}
                <div
                  className="rounded-[9999px] overflow-hidden flex-shrink-0"
                  style={{
                    width: "clamp(120px,17vw,209px)",
                    height: "clamp(240px,34vw,418px)",
                  }}
                >
                  <img
                    src={PERSON_IMG}
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right: group (tallest) */}
                <div
                  className="rounded-[9999px] overflow-hidden flex-shrink-0"
                  style={{
                    width: "clamp(145px,20.5vw,250px)",
                    height: "clamp(285px,40vw,498px)",
                  }}
                >
                  <img
                    src={GROUP_IMG}
                    alt="Our team"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Play button + Watch Video — positioned to the right of images */}
                <div className="flex flex-col items-center justify-center gap-3 flex-shrink-0 pb-4">
                  <button className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] rounded-full bg-black border-[4px] md:border-[5px] border-white flex items-center justify-center hover:bg-[#8B0AB4] transition-colors shadow-2xl flex-shrink-0">
                    <PlayIcon />
                  </button>
                  <span className="font-kanit font-medium text-[11px] md:text-[13px] lg:text-[14px] uppercase text-[#121212] text-center leading-tight tracking-wide">
                    Watch
                    <br />
                    Video
                  </span>
                </div>
              </div>

              {/* Arrow + customers */}
              <div className="mt-4 md:mt-6 pl-2 md:pl-4">
                <img src={ARROW_DOWN} alt="" className="w-16 md:w-20 h-10 md:h-12 mb-2 md:mb-3" />
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
          className="absolute bottom-0 left-0 w-[220px] md:w-[310px] lg:w-[410px] pointer-events-none select-none"
        />
      </main>

      {/* ── BRAND BAR ── */}
      <div className="flex h-[130px] md:h-[158px] overflow-hidden">
        {/* Dark left square with decorative image */}
        <div className="w-[120px] md:w-[156px] flex-shrink-0 bg-[#121212] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-16 md:w-20 h-16 md:h-20 bg-[#8B0AB4]" />
          <img
            src={BRAND_CORNER}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Pink marquee area */}
        <div className="flex-1 bg-[#FFE8F5] overflow-hidden flex items-center">
          <div className="flex animate-marquee">
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
      </div>
    </div>
  );
}
