"use client";

import { useEffect, useRef } from "react";

type TrustedBy = {
  headingPreview?: boolean;
};

const TrustedBy = ({ headingPreview = false }: TrustedBy) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Company logos data - you can replace these with your actual logos
  const logos = [
    { name: "CityMD", svg: <CityMDLogo /> },
    { name: "Gillette Children's", svg: <GilletteLogo /> },
    { name: "Optum", svg: <OptumLogo /> },
    { name: "CommonSpirit", svg: <CommonSpiritLogo /> },
    { name: "CityMD", svg: <CityMDLogo /> },
    { name: "Gillette Children's", svg: <GilletteLogo /> },
    { name: "Optum", svg: <OptumLogo /> },
    { name: "CommonSpirit", svg: <CommonSpiritLogo /> },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPosition += speed;

      // Reset position when we've scrolled half the content (since content is duplicated)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="bg-white py-14">
      <div className="mx-auto px-6">
        <div className="flex items-center gap-12">
          {/* Left side text */}
          {headingPreview && (
            <div className="flex-shrink-0">
              <p className="text-normalGray font-normal text-base whitespace-nowrap">
                Trusted by leading changemakers
              </p>
            </div>
          )}

          {/* Logo slider */}
          <div ref={scrollRef} className="flex-1 overflow-hidden">
            <div className="flex items-center gap-16">
              {/* Duplicate logos for infinite scroll effect */}
              {[...logos, ...logos].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex items-center justify-center h-12"
                >
                  {logo.svg}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gray divider section at bottom */}
      {/* <div className="bg-[#f5f6f8] h-16 mt-12" /> */}
    </section>
  );
};

// Logo Components - styled to match the muted purple/gray color from the image
const CityMDLogo = () => (
  <div className="flex items-center gap-2 text-normalGray opacity-60">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-6 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm12 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-6 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-6 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm12 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-6 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
    </svg>
    <span className="text-xl font-bold tracking-tight">
      City<span className="font-extrabold">MD</span>
    </span>
  </div>
);

const GilletteLogo = () => (
  <div className="flex items-center gap-1 text-normalGray opacity-60">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
    <div className="flex flex-col">
      <span className="text-lg font-bold tracking-tight leading-none">
        gillette
      </span>
      <span className="text-[10px] font-medium tracking-widest uppercase leading-none">
        Children&apos;s
      </span>
    </div>
  </div>
);

const OptumLogo = () => (
  <div className="text-normalGray opacity-60">
    <span className="text-2xl font-bold tracking-tight">Optum</span>
  </div>
);

const CommonSpiritLogo = () => (
  <div className="flex items-center gap-1 text-normalGray opacity-60">
    <span className="text-xl font-medium tracking-tight">CommonSpirit</span>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="opacity-60"
    >
      <path d="M10 2l2.5 5 5.5.8-4 3.9.9 5.5L10 14.7l-4.9 2.5.9-5.5-4-3.9 5.5-.8L10 2z" />
    </svg>
  </div>
);

export default TrustedBy;
