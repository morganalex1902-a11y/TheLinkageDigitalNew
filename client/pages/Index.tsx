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

      {/* ── WHO WE ARE SECTION ── */}
      <section className="bg-white py-14 md:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">

          {/* Heading row */}
          <div className="flex items-start justify-between mb-10 lg:mb-14">
            <div className="flex-1 min-w-0">
              {/* Line 1: label + "Have a brilliant" */}
              <div className="flex items-baseline gap-4 md:gap-8 flex-wrap">
                <span className="font-kanit font-bold text-[13px] md:text-[16px] uppercase text-[#121212] whitespace-nowrap">
                  01 Who We Are
                </span>
                <h2 className="font-teko font-bold text-[#121212] uppercase leading-[0.92] text-[clamp(1.8rem,4.5vw,5rem)]">
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
            <div className="border-l border-[#ECECEC] pl-6 md:pl-10 lg:pl-12 flex flex-col justify-between gap-8 min-h-[280px] md:min-h-[305px]">
              <p className="font-kanit font-normal text-[#555] text-[15px] md:text-[18px] leading-[1.6]">
                Consumers today rely heavily on digital means to research
                products. We research a brand of bldend engaging with it,
                according to the meanwhile, 51% of consumers.
              </p>
              {/* Circle "Explore Us More" button */}
              <Link
                to="/about"
                className="relative w-[130px] h-[130px] md:w-[150px] md:h-[150px] lg:w-[170px] lg:h-[170px] rounded-full border border-[#EFEFEF] flex items-center justify-start pl-6 overflow-hidden hover:border-[#8B0AB4] transition-colors group flex-shrink-0"
              >
                {/* Arrow – positioned top-right */}
                <svg
                  className="absolute top-[22%] right-[14%] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  width="11"
                  height="16"
                  viewBox="0 0 11 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip-explore)">
                    <path
                      d="M2.74301 2.69653V3.7475H9.05901L0.736328 12.4653L1.44368 13.2062L9.76638 4.48844V11.1043H10.7697V2.69653H2.74301Z"
                      fill="#121212"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip-explore">
                      <rect width="11" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {/* Text */}
                <span className="font-kanit font-semibold text-[13px] md:text-[15px] lg:text-[16px] uppercase text-[#121212] leading-snug">
                  Explore Us
                  <br />
                  More
                </span>
              </Link>
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
                  We'll make your.
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
