"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useScrollReveal(ref, selector, options = {}) {
  const {
    trigger,
    start = "top 85%",
    end,
    scrub,
    mobileY = 28,
    tabletY = 40,
    desktopY = 56,
    duration = 0.75,
    stagger = 0.1,
    delay = 0,
    deps = [],
  } = options;

  useGSAP(
    () => {
      if (!ref.current) return;

      const elements = ref.current.querySelectorAll(selector);
      if (!elements.length) return;

      if (prefersReducedMotion()) {
        gsap.set(elements, { opacity: 1, y: 0 });
        return;
      }

      const triggerEl = trigger
        ? ref.current.querySelector(trigger) ?? ref.current
        : ref.current;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 639px)",
          isTablet: "(min-width: 640px) and (max-width: 1023px)",
          isDesktop: "(min-width: 1024px)",
        },
        (context) => {
          const { isMobile, isTablet } = context.conditions;
          const y = isMobile ? mobileY : isTablet ? tabletY : desktopY;

          gsap.set(elements, { opacity: 0, y });

          gsap.fromTo(
            elements,
            { opacity: 0, y },
            {
              opacity: 1,
              y: 0,
              duration: isMobile ? duration * 0.85 : duration,
              stagger: isMobile ? stagger * 0.6 : stagger,
              delay,
              ease: "power3.out",
              scrollTrigger: {
                trigger: triggerEl,
                start,
                end,
                scrub,
                toggleActions: scrub ? undefined : "play none none none",
              },
            }
          );
        }
      );

      return () => mm.revert();
    },
    { scope: ref, dependencies: deps }
  );
}

export function useMountReveal(ref, selector, options = {}) {
  const { delay = 0, duration = 0.8, stagger = 0.12, y = 20 } = options;

  useGSAP(
    () => {
      if (!ref.current) return;

      const elements = ref.current.querySelectorAll(selector);
      if (!elements.length) return;

      if (prefersReducedMotion()) {
        gsap.set(elements, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(elements, { opacity: 0, y });

      gsap.fromTo(
        elements,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          delay,
          ease: "power3.out",
        }
      );
    },
    { scope: ref }
  );
}

export function useParallax(ref, selector, options = {}) {
  const { speed = 40, start = "top bottom", end = "bottom top" } = options;

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;

      const el = ref.current.querySelector(selector);
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 639px)",
          isDesktop: "(min-width: 640px)",
        },
        (context) => {
          const { isMobile } = context.conditions;

          gsap.to(el, {
            y: isMobile ? speed * 0.4 : speed,
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              start,
              end,
              scrub: true,
            },
          });
        }
      );

      return () => mm.revert();
    },
    { scope: ref }
  );
}
