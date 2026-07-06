"use client";

import { useRef } from "react";
import { useScrollReveal } from "@/app/hooks/useGsapAnimations";

const SubHero = () => {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, ".reveal", {
    mobileY: 24,
    desktopY: 56,
    stagger: 0.12,
    duration: 1,
  });

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 sm:px-6 md:px-16 lg:px-20 py-14 sm:py-16 md:py-24 bg-white"
    >
      <div className="max-w-6xl">
        <h2 className="font-display text-[clamp(2.75rem,10vw,8rem)] uppercase leading-[0.88] tracking-tight text-black">
          <span className="reveal block">Where ideas</span>
          <span className="reveal block text-accent">take shape</span>
        </h2>

        <p className="reveal font-body mt-8 sm:mt-10 text-lg sm:text-lg md:text-xl text-black/50 tracking-wide max-w-xl leading-relaxed">
          Say less.{" "}
          <span className="text-black">Mean more.</span>{" "}
          We chase clarity over noise building brands that don&apos;t need to shout to be remembered.
        </p>

        <p className="reveal font-body mt-6 sm:mt-8 text-base sm:text-base md:text-lg text-black/45 leading-relaxed max-w-2xl">
          We don&apos;t just design for brands we build the language they speak in.
          From a single logo mark to a full campaign rollout, every project starts with
          one question: what does this brand want people to feel?
        </p>

        <p className="reveal font-body mt-4 sm:mt-6 text-base sm:text-base text-black/40 leading-relaxed max-w-2xl">
          Some studios chase trends. We chase clarity. A logo isn&apos;t just a mark
          it&apos;s a single thought, distilled until nothing unnecessary remains. A
          campaign isn&apos;t a wall of messages it&apos;s one idea, repeated with
          intention.
        </p>
      </div>
    </section>
  );
};

export default SubHero;