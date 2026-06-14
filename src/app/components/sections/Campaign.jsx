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
    stagger: 0.1,
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
        className="campaign-watermark font-display pointer-events-none absolute -top-2 sm:-top-4 right-0 select-none text-[clamp(3rem,16vw,14rem)] uppercase leading-none tracking-tighter text-white/4"
      >
        Sound
      </p>

      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="campaign-reveal font-display mb-8 sm:mb-12 max-w-3xl text-[clamp(2.25rem,6.5vw,5.5rem)] uppercase leading-[0.9] tracking-tight">
          City of
          <br />
          <span className="text-accent">Sound</span>
        </h2>

        <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 md:grid-cols-2 md:gap-16">
          <div className="campaign-image relative mx-auto md:mx-0 aspect-[4/5] w-full max-w-xs sm:max-w-sm md:max-w-md overflow-hidden rounded-sm">
            <Image
              src="/assest/campaign-1.jpeg"
              alt="City of Sound campaign"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 400px"
            />
          </div>

          <div className="flex flex-col gap-6 sm:gap-7">
            <blockquote className="campaign-reveal font-display border-l-2 border-accent pl-4 sm:pl-6 text-xl sm:text-2xl md:text-3xl uppercase leading-snug tracking-tight text-white">
              Horn Hudai, Bajay Bhudai
            </blockquote>

            <p className="campaign-reveal font-body text-sm sm:text-base leading-relaxed text-white/55 md:text-lg">
              On weekends, Mominur Rahman Royal stands at a busy Dhaka
              intersection holding a yellow placard — a silent protest against a
              city where horns can roar as loud as a rock concert. His message is
              simple: only an idiot honks without reason.
            </p>

            <p className="campaign-reveal font-body text-sm sm:text-base leading-relaxed text-white/45">
              For years, this one-man crusade has drawn strangers off the street to
              stand beside him in quiet solidarity. Photos of his protest have been
              shared thousands of times — a small sign of change in one of the
              world&apos;s noisiest cities, where peak-hour honking can hit 110
              decibels and hearing loss has become a public health concern.
            </p>

            <p className="campaign-reveal font-body text-sm sm:text-base leading-relaxed text-white/45">
              He keeps going, taking the noise so future generations might inherit a
              Dhaka that listens before it reacts. This isn&apos;t a campaign we
              designed. It&apos;s one we live.
            </p>

            <p className="campaign-reveal font-body text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/30">
              Story reported by AFP ·{" "}
              <a
                href="https://en.prothomalo.com/bangladesh/Silent-protest-against-loud-horns-sparks-noisy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-accent transition-colors"
              >
                Prothom Alo
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaign;
