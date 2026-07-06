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
    titleAlign: "sm:text-left",
    descAlign: "sm:text-left sm:ml-0 sm:max-w-md",
    offset: "sm:pl-0",
  },
  {
    title: "Web Design & Development",
    description:
      "Fast, modern websites from one-page brand sites to full custom builds designed to convert visitors into clients.",
    titleAlign: "sm:text-center",
    descAlign: "sm:text-center sm:mx-auto sm:max-w-lg",
    offset: "sm:px-4 sm:sm:px-8",
  },
  {
    title: "Ad Creatives & Campaigns",
    description:
      "Static and dynamic ad campaigns, social strategy, and content calendars across every platform designed to stop the scroll.",
    titleAlign: "sm:text-right",
    descAlign: "sm:text-right sm:ml-auto sm:max-w-md",
    offset: "sm:pr-0",
  },
  {
    title: "Packaging Design",
    description:
      "Shelf-ready packaging that captures attention and tells your product's story at a glance.",
    titleAlign: "sm:text-left",
    descAlign: "sm:text-left sm:max-w-sm",
    offset: "sm:pl-[8%] md:pl-[14%] lg:pl-[18%]",
  },
  {
    title: "Film, Video & Photography",
    description:
      "TVC and OVC production alongside conceptual photo art visual storytelling from concept to final cut.",
    titleAlign: "sm:text-right",
    descAlign: "sm:text-right sm:max-w-lg",
    offset: "sm:pr-[6%] md:pr-[12%] lg:pr-[22%] sm:ml-auto",
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
      aria-label="Our Services"
      className="bg-white px-4 sm:px-6 py-20 sm:py-28 md:px-16 lg:px-20 md:py-36"
    >
      <div className="services-intro mb-10 sm:mb-12 md:mb-16 max-w-4xl">
        <h2 className="font-display text-[clamp(3rem,9vw,7.5rem)] uppercase leading-[0.88] tracking-tight text-black">
          Services
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 place-items-center sm:flex sm:flex-col sm:gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className={`service-card relative py-6 sm:py-16 md:py-20 border-b border-black/6 sm:last:border-b-0 w-full flex flex-col items-center sm:block ${service.offset}`}
          >
            <h3
              className={`service-title font-display text-[clamp(1.75rem,4.5vw,3.5rem)] uppercase leading-[0.95] tracking-tight text-black text-center ${service.titleAlign}`}
            >
              {service.title}
            </h3>
            <p
              className={`service-desc font-body mt-2 sm:mt-6 text-sm sm:text-lg md:text-xl leading-relaxed text-black/50 text-center max-w-xs mx-auto sm:mx-0 sm:max-w-none ${service.descAlign}`}
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