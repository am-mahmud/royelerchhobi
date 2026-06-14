"use client";

import { useRef } from "react";
import { useScrollReveal } from "@/app/hooks/useGsapAnimations";

const SubHero = () => {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, ".reveal", {
    mobileY: 24,
    desktopY: 56,
    stagger: 0.14,
    duration: 1,
  });

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 sm:px-6 md:px-16 lg:px-20 py-20 sm:py-28 md:py-36 bg-white"
    >
      <div className="max-w-6xl">
        <p className="reveal font-body text-[10px] sm:text-[11px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-black/35 mb-8 sm:mb-10">
          Creative agency — Dhaka
        </p>

        <h2 className="font-display text-[clamp(2.75rem,10vw,8rem)] uppercase leading-[0.88] tracking-tight text-black">
          <span className="reveal block">Where ideas</span>
          <span className="reveal block text-accent">take shape</span>
        </h2>

        <p className="reveal font-body mt-8 sm:mt-10 md:mt-12 text-base sm:text-lg md:text-xl text-black/50 tracking-wide max-w-md leading-relaxed">
          Say less.{" "}
          <span className="text-black">Mean more.</span>{" "}
          We chase clarity over noise — building brands that don&apos;t need to shout to be remembered.
        </p>
      </div>
    </section>
  );
};

export default SubHero;
