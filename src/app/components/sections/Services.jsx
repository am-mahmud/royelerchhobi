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
      "Logos, visual identity systems, typography, and brand guidelines a complete identity built to make your business unforgettable.",
    titleAlign: "text-left",
    descAlign: "text-left ml-0 max-w-md",
    offset: "pl-0",
  },
  {
    title: "Web Design & Development",
    description:
      "Fast, modern websites from one-page brand sites to full custom builds designed to convert visitors into clients.",
    titleAlign: "text-center",
    descAlign: "text-center mx-auto max-w-lg",
    offset: "px-4 sm:px-8",
  },
  {
    title: "Ad Creatives & Campaigns",
    description:
      "Static and dynamic ad campaigns, social strategy, and content calendars across every platform designed to stop the scroll.",
    titleAlign: "text-right",
    descAlign: "text-right ml-auto max-w-md",
    offset: "pr-0",
  },
  {
    title: "Packaging Design",
    description:
      "Shelf-ready packaging that captures attention and tells your product's story at a glance.",
    titleAlign: "text-left",
    descAlign: "text-left max-w-sm",
    offset: "pl-[8%] sm:pl-[14%] md:pl-[18%]",
  },
  {
    title: "Film, Video & Photography",
    description:
      "TVC and OVC production alongside conceptual photo art visual storytelling from concept to final cut.",
    titleAlign: "text-right",
    descAlign: "text-right max-w-lg",
    offset: "pr-[6%] sm:pr-[12%] md:pr-[22%] ml-auto",
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

      const cards = gsap.utils.toArray(
        sectionRef.current.querySelectorAll(".service-card")
      );

      cards.forEach((card) => {
        const title = card.querySelector(".service-title");
        const desc = card.querySelector(".service-desc");

        if (reducedMotion) {
          gsap.set([title, desc], { opacity: 1, y: 0 });
          return;
        }

        gsap.set([title, desc], { opacity: 0, y: 36 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          })
          .to(title, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
          .to(
            desc,
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
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
      <div className="services-intro mb-10 sm:mb-12 md:mb-16 max-w-4xl">
        <h2 className="font-display text-[clamp(3rem,9vw,7.5rem)] uppercase leading-[0.88] tracking-tight text-black">
          Services
        </h2>
        {/* <p className="font-body mt-6 sm:mt-8 text-sm sm:text-base md:text-lg leading-relaxed text-black/50 max-w-xl">
          From a single logo mark to a full campaign rollout — we build the
          language brands speak in, across every touchpoint.
        </p> */}
      </div>

      <div className="flex flex-col gap-4 sm:gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className={`service-card relative py-14 sm:py-16 md:py-20 border-b border-black/6 last:border-b-0 ${service.offset}`}
          >
            <h3
              className={`service-title font-display text-[clamp(1.75rem,4.5vw,3.5rem)] uppercase leading-[0.92] tracking-tight text-black ${service.titleAlign}`}
            >
              {service.title}
            </h3>
            <p
              className={`service-desc font-body mt-5 sm:mt-6 text-sm sm:text-base leading-relaxed text-black/50 ${service.descAlign}`}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
