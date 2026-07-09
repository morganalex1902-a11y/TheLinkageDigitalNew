import { useNavigate } from "react-router-dom";
import { OriginButton } from "../components/ui/origin-button";
import SiteHeader from "../components/SiteHeader";
import { useInView } from "../hooks/useInView";

export default function Testimonials() {
  const navigate = useNavigate();
  const testimonialsRef = useInView();
  const ctaRef = useInView();

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

  return (
    <div className="min-h-screen bg-white font-kanit">
      <SiteHeader />

      <main className="relative overflow-hidden">
        {/* ── HERO SECTION ── */}
        <section className="bg-white relative overflow-hidden min-h-[calc(100vh-87px)] flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 py-10 md:py-12 w-full">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="w-8 h-[2px] bg-[#8B0AB4]" />
                <span className="font-kanit font-semibold text-[#8B0AB4] text-[13px] md:text-[14px] uppercase tracking-wider">
                  Testimonials
                </span>
                <span className="w-8 h-[2px] bg-[#8B0AB4]" />
              </div>

              <h1 className="font-teko font-bold text-[#121212] uppercase leading-[0.9] text-[clamp(1.8rem,4vw,3.5rem)] mb-5">
                What Our Clients
                <br />
                <span className="text-[#8B0AB4]">Are Saying</span>
              </h1>

              <p className="font-kanit font-normal text-[#555] text-[14px] md:text-[15px] leading-[1.6] max-w-[480px] mx-auto mb-8">
                Discover why businesses trust The Linkage Digital to transform their digital presence and deliver exceptional results.
              </p>
            </div>

            {/* Bottom row — scroll indicator */}
            <div className="mt-14 md:mt-16 flex justify-center">
              <button
                onClick={() =>
                  testimonialsRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                aria-label="Scroll to testimonials"
                className="relative w-11 h-11 rounded-full border border-[#ECECEC] flex items-center justify-center text-[#121212] hover:border-[#8B0AB4] hover:text-[#8B0AB4] transition-colors overflow-hidden group"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="relative z-10">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS GRID SECTION ── */}
        <section ref={testimonialsRef as React.RefObject<HTMLElement>} className="bg-[#F9F9F9] py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {TESTIMONIALS.map((testimonial, i) => (
                <div
                  key={i}
                  className="bg-white p-6 md:p-8 rounded-lg border border-[#ECECEC] hover:border-[#8B0AB4] hover:shadow-lg transition-all duration-300"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-5">
                    {Array(Math.floor(testimonial.rating))
                      .fill(0)
                      .map((_, j) => (
                        <span key={j} className="text-[#8B0AB4] text-lg">
                          ★
                        </span>
                      ))}
                  </div>

                  {/* Review text */}
                  <p className="font-kanit font-normal text-[#555] text-[14px] md:text-[15px] leading-[1.6] mb-6 line-clamp-6">
                    "{testimonial.text}"
                  </p>

                  {/* Divider */}
                  <div className="border-t border-[#ECECEC] my-6" />

                  {/* Author info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-teko font-bold text-[#121212] uppercase text-[14px] md:text-[15px] leading-tight">
                        {testimonial.name}
                      </h4>
                      <p className="font-kanit font-normal text-[#999] text-[12px] md:text-[13px]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section ref={ctaRef as React.RefObject<HTMLElement>} className="bg-[#121212] py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 text-center">
            <h2 className="font-teko font-bold text-white uppercase leading-[0.92] text-[clamp(2rem,5.5vw,5rem)] mb-6">
              Ready to Work With Us?
            </h2>
            <p className="font-kanit font-normal text-white text-[15px] md:text-[18px] leading-[1.55] max-w-[450px] mx-auto mb-10">
              Join hundreds of satisfied clients. Let's transform your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <OriginButton
                onClick={() => navigate("/contact")}
                fillColor="#8B0AB4"
                className="bg-[#8B0AB4] text-white font-kanit font-medium text-[13px] md:text-[15px] uppercase px-8 py-4 hover:bg-[#7a0a94] transition-colors"
              >
                Get Started Today
              </OriginButton>
              <OriginButton
                onClick={() => navigate("/")}
                fillColor="#8B0AB4"
                className="border-2 border-white text-white font-kanit font-medium text-[13px] md:text-[15px] uppercase px-8 py-4 hover:bg-white hover:text-[#121212] transition-colors"
              >
                Back to Home
              </OriginButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
