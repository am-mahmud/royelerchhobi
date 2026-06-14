"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollReveal } from "@/app/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Branding & Identity",
    description:
      "Logos, visual identity systems, typography, and brand guidelines — a complete identity built to make your business unforgettable.",
  },
  {
    title: "Web Design & Development",
    description:
      "Fast, modern websites — from one-page brand sites to full custom builds — designed to convert visitors into clients.",
  },
  {
    title: "Ad Creatives & Campaigns",
    description:
      "Static and dynamic ad campaigns, social strategy, and content calendars across every platform — designed to stop the scroll.",
  },
  {
    title: "Packaging Design",
    description:
      "Shelf-ready packaging that captures attention and tells your product's story at a glance.",
  },
  {
    title: "Film, Video & Photography",
    description:
      "TVC and OVC production alongside conceptual photo art — visual storytelling from concept to final cut.",
  },
];

const Services = () => {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, ".services-intro > *", {
    mobileY: 20,
    desktopY: 40,
    stagger: 0.1,
    duration: 0.8,
  });

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const rows = gsap.utils.toArray(
        sectionRef.current.querySelectorAll(".service-row")
      );

      rows.forEach((row) => {
        const title = row.querySelector(".service-title");
        const desc = row.querySelector(".service-desc");

        if (reducedMotion) {
          gsap.set([title, desc], { opacity: 1, x: 0 });
          return;
        }

        gsap.set(title, { opacity: 0, x: -30 });
        gsap.set(desc, { opacity: 0, x: 30 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: row,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          })
          .to(title, { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" })
          .to(
            desc,
            { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" },
            "-=0.5"
          );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-white px-4 sm:px-6 py-20 sm:py-28 md:px-16 lg:px-20 md:py-36"
    >
      <div className="services-intro mb-14 sm:mb-16 md:mb-20 max-w-4xl">
        <p className="font-body text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-black/35 mb-4 sm:mb-6 font-bold">
          What we do
        </p>
        <h2 className="font-display text-[clamp(3rem,9vw,7.5rem)] uppercase leading-[0.88] tracking-tight text-black">
          Services
        </h2>
        <p className="font-body mt-6 sm:mt-8 text-sm sm:text-base md:text-lg leading-relaxed text-black/50 max-w-xl">
          From a single logo mark to a full campaign rollout — we build the
          language brands speak in, across every touchpoint.
        </p>
      </div>

      <div className="divide-y divide-black/8">
        {services.map((service) => (
          <div
            key={service.title}
            className="service-row grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-[1fr_1.15fr] md:gap-16 py-10 sm:py-12 md:py-14 items-start"
          >
            <h3 className="service-title font-display text-[clamp(1.5rem,3.5vw,2.75rem)] uppercase leading-[0.95] tracking-tight text-black">
              {service.title}
            </h3>
            <p className="service-desc font-body text-sm sm:text-base leading-relaxed text-black/50 max-w-lg md:pt-1">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
