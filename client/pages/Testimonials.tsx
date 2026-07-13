import { useNavigate } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";
import { OriginButton } from "../components/ui/origin-button";
import SiteHeader from "../components/SiteHeader";
import { useInView } from "../hooks/useInView";

export default function Testimonials() {
  const navigate = useNavigate();
  const testimonialsRef = useInView();
  const ctaRef = useInView();

  useSEO({
    title: "Client Testimonials - Reviews from USA Businesses | The Linkage Digital",
    description: "Read what our clients say about our web design, app development, and digital marketing services. 5-star reviews from successful businesses across the USA.",
    keywords: "client testimonials, reviews, web design reviews, app development reviews, digital marketing feedback, client success stories",
    ogTitle: "Client Testimonials - The Linkage Digital",
    ogDescription: "See what satisfied clients from across the USA say about our digital services and solutions.",
    canonicalUrl: "https://thelinkagedigital.com/testimonials",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Testimonials",
        "description": "Client testimonials and reviews for The Linkage Digital services",
        "url": "https://thelinkagedigital.com/testimonials",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://thelinkagedigital.com" },
          { "@type": "ListItem", "position": 2, "name": "Testimonials", "item": "https://thelinkagedigital.com/testimonials" }
        ]
      }
    ]
  });

  const TESTIMONIALS = [
    {
      rating: 5.0,
      text: "Great job!!!",
      name: "Nicholas Bellavia",
      role: "8 hours ago",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "Bryan Davis was able to convert a logo, and a couple banners to printable files for me so I can send them off to be used for signage and marketing material. This was incredibly helpful and will be a big part of helping grow my business. Great guy to work with, prompt communication, and very helpful with the revision process. Thanks Bryan!",
      name: "William Baudendistel",
      role: "A day ago",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "Great service at a great price. I would recommend to anyone who wants work done the right way. Bryan Davis was great!",
      name: "Jayson Lupian",
      role: "2 days ago",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "Very quick responses with awesome editing skills, would highly recommend 👌 👏 👍",
      name: "DebriCo LLC",
      role: "Jul 1, 2026",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "Linkage Digital is awesome. My mockup on canvas was awesome and their speed was great to which they delivered the product.",
      name: "Chris M Cartmill",
      role: "Jul 1, 2026",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "Very responsive",
      name: "MCPS",
      role: "Jun 29, 2026",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "Thank you for helping out",
      name: "Evan",
      role: "Jun 25, 2026",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "Worked with me step by step and responded to all my questions really good work",
      name: "Helmer Castaneda",
      role: "Jun 25, 2026",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "Very helpful and answered all my questions.",
      name: "Joaquin Cruz",
      role: "Jun 25, 2026",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "Not going to lie at first I was a little skeptical but Bryan Davis and the guys at linkage digital have really proved me wrong. They have been building my website and adding new features, finally making it show up when people search junk removal! I couldn't be happier with this service. I would recommend this service to family and friends.",
      name: "Robert Lee",
      role: "Jun 23, 2026",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "Walked me through every step of the way and explained every detail thoroughly! Couldn't be happier!",
      name: "brenton clay",
      role: "Jun 23, 2026",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "Did an amazing job on my website is a quick responder made everything look professional and is very professional I'd highly recommend him for all website needs and is also very affordable",
      name: "Chance Jeffery",
      role: "Jun 23, 2026",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "Exceptional service, was helped from beginning to end. Made it very easy",
      name: "David Patrick",
      role: "Jun 19, 2026",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "Thelinkagedigital did wonderful with my website I was worried at first and thought these guys were going to scam me but no these guys are legit people helping small businesses create there own website, I would 100% recommend them for websites thank yall guys",
      name: "Cris Rental",
      role: "Jun 19, 2026",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "Did a great job setting up website for me. Easy to work with!",
      name: "Hadyn Whisenhunt",
      role: "Jun 18, 2026",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "I had a great experience working with him on my website. He was professional, responsive, and easy to communicate with throughout the entire process. He listened to what I wanted, made changes quickly, and created a website that looks clean and professional. I'm very happy with the final result and would highly recommend him to anyone needing a website for their business. Thank you for your hard work!",
      name: "Stella Chaney",
      role: "Jun 18, 2026",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "Very good communication patient and extremely helpful made everything perfect and efficient amazing service would definitely recommend",
      name: "Jeremiah Perez",
      role: "Jun 6, 2026",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "Bryan Davis at The Linkage Digital reached out to us noticing we did not have a running website after we began running ads. I was skeptical at first but he offered to do a demo site for us at no cost. Once he showed us his work we just could not say no. It did an amazing job with very little info but it turned out better than I could have thought. He was very responsive throughout the entire process and always made sure we knew the next steps before we even got there. Definitely recommend The Linkage Digital for any web projects you may have. I will continue to use them for any future projects or additions needed.",
      name: "David Burgess",
      role: "Jun 4, 2026",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "Bryan came to me offering to build me a website for my pressure washing business, i've had countless others come to me before but his pricing was actually fair and understandable. He was very helpful and made sure all my questions and concerns were fulfilled!",
      name: "SJ",
      role: "Jun 3, 2026",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
    {
      rating: 5.0,
      text: "Absolutely wonderful helped me with so much very knowledgeable great customer service and very fast response times with any questions you may need answers for my website looks better then I could have ever imagined use this company you won't be sorry.",
      name: "William Martin",
      role: "May 26, 2026",
      avatar: "https://www.gstatic.com/images/branding/product/1x/avatar_square_grey_48dp.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-kanit">
      <SiteHeader />

      <main className="relative overflow-hidden">
        {/* ── HERO SECTION ── */}
        <section className="bg-white relative overflow-hidden py-8 md:py-12">
          <div className="max-w-[1400px] mx-auto px-6 w-full">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-[#8B0AB4]" />
                <span className="font-kanit font-semibold text-[#8B0AB4] text-[12px] md:text-[13px] uppercase tracking-wider">
                  Testimonials
                </span>
                <span className="w-8 h-[2px] bg-[#8B0AB4]" />
              </div>

              <h1 className="font-teko font-bold text-[#121212] uppercase leading-[0.9] text-[clamp(1.6rem,3.5vw,2.8rem)] mb-3">
                What Our Clients <span className="text-[#8B0AB4]">Are Saying</span>
              </h1>

              <p className="font-kanit font-bold text-[#555] text-[15px] md:text-[17px] leading-[1.5] max-w-[450px] mx-auto mb-3">
                Real clients. Real growth. Real stories.
              </p>

              <p className="font-kanit font-normal text-[#555] text-[15px] md:text-[17px] leading-[1.5] max-w-[450px] mx-auto">
                Discover why businesses trust The Linkage Digital to transform their digital presence.
              </p>
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
