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

      {/* ── TAKE CHARGE STEERING SECTION ── */}
      <section className="bg-[#171717] py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">

          {/* Top: character + heading + description */}
          <div className="flex flex-col items-center text-center mb-14 md:mb-20">
            {/* 3D character peeking above the heading */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a03b2a33c768d1dfef5dfb6f28f1b06f4587f107?width=186"
              alt=""
              className="w-[70px] md:w-[93px] h-auto -mb-3 md:-mb-4 relative z-10"
            />
            {/* Heading */}
            <h2 className="font-teko font-bold text-white uppercase leading-[0.93] text-[clamp(2.2rem,5.5vw,5rem)]">
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
          <div className="grid grid-cols-1 md:grid-cols-3">

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
    </div>
  );
}
