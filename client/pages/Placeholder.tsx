import { Link, useLocation } from "react-router-dom";

const LOGO = "/images/logo-header.webp";

export default function Placeholder() {
  const { pathname } = useLocation();
  const pageName = pathname.replace("/", "").replace(/-/g, " ") || "Page";
  const title = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <div className="min-h-screen bg-white font-kanit flex flex-col">
      <header className="border-b border-[#ECECEC] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-[87px]">
          <Link to="/">
            <img src={LOGO} alt="The Linkage Digital" className="h-[60px] w-auto" />
          </Link>
          <Link
            to="/contact"
            className="bg-[#262629] text-white font-kanit font-medium text-sm uppercase px-7 py-3 hover:bg-[#3a3a3e] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6 py-24">
        <h1 className="font-teko font-bold text-black uppercase text-[3rem] md:text-[5rem] leading-none">
          {title}
        </h1>
        <p className="text-[#555] text-lg max-w-md text-center">
          This page is coming soon. Continue prompting to fill in this page's content.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-kanit font-medium text-[13px] uppercase text-[#1C1D20] border-b border-[#1C1D20] hover:text-[#8B0AB4] hover:border-[#8B0AB4] transition-colors tracking-wider"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
