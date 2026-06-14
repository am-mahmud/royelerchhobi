"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScrollReveal, useParallax } from "@/app/hooks/useGsapAnimations";

const Campaign = () => {
  const sectionRef = useRef(null);

  useParallax(sectionRef, ".campaign-watermark", { speed: 60 });

  useScrollReveal(sectionRef, ".campaign-reveal", {
    mobileY: 24,
    desktopY: 48,
    stagger: 0.12,
    duration: 0.85,
  });

  useScrollReveal(sectionRef, ".campaign-image", {
    mobileY: 40,
    desktopY: 56,
    duration: 1,
    start: "top 88%",
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#0a0a0a] text-white px-4 sm:px-6 md:px-20 py-20 sm:py-24 md:py-36"
    >
      <p
        aria-hidden
        className="campaign-watermark font-display pointer-events-none absolute -top-2 sm:-top-4 right-0 select-none text-[clamp(3rem,16vw,14rem)] uppercase leading-none tracking-tighter text-white/[0.04]"
      >
        Sound
      </p>

      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="campaign-reveal font-body mb-4 sm:mb-6 text-[10px] sm:text-[11px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-white/40">
          Social campaign
        </p>

        <h2 className="campaign-reveal font-display mb-8 sm:mb-12 max-w-3xl text-[clamp(2.25rem,6.5vw,5.5rem)] uppercase leading-[0.9] tracking-tight">
          City of
          <br />
          <span className="text-accent">Sound</span>
        </h2>

        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 md:grid-cols-2 md:gap-16">
          <div className="campaign-image relative mx-auto md:mx-0 aspect-[4/5] w-full max-w-xs sm:max-w-sm md:max-w-md overflow-hidden rounded-sm">
            <Image
              src="/assest/campaign-1.jpeg"
              alt="City of Sound campaign"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 400px"
            />
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            <blockquote className="campaign-reveal font-display border-l-2 border-accent pl-4 sm:pl-6 text-xl sm:text-2xl md:text-3xl uppercase leading-snug tracking-tight text-white">
              Only fools honk without reason.
            </blockquote>

            <p className="campaign-reveal font-body max-w-md text-sm sm:text-base leading-relaxed text-white/55 md:text-lg">
              In a city where horns scream louder than concerts, one man stood
              still — yellow placard in hand, asking Dhaka to listen before it
              reacts.
            </p>

            <p className="campaign-reveal font-body text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-accent">
              This isn&apos;t a campaign we designed. It&apos;s one we live.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaign;
