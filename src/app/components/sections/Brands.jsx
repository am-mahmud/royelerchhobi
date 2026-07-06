"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useScrollReveal } from "@/app/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const brands = [
  { name: "Brand 1", image: "/assest/brand-1.png" },
  { name: "Brand 2", image: "/assest/brand-2.png" },
  { name: "Brand 3", image: "/assest/brand-3.png" },
  { name: "Brand 4", image: "/assest/brand-4.png" },
  { name: "Brand 5", image: "/assest/brand-5.png" },
];

const Brands = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useScrollReveal(sectionRef, ".brands-title", {
    mobileY: 20,
    desktopY: 40,
    duration: 0.8,
  });

  useGSAP(
    () => {
      if (!sectionRef.current || !trackRef.current) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const items = gsap.utils.toArray(
        sectionRef.current.querySelectorAll(".brand-item")
      );

      if (reducedMotion) {
        gsap.set(items, { opacity: 1, y: 0, scale: 1 });
        return;
      }

      gsap.set(items, { opacity: 0, y: 40, scale: 0.92 });

      gsap.to(items, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: trackRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });

      const track = trackRef.current;
      const totalWidth = track.scrollWidth / 2;

      const tween = gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        duration: 20,
        repeat: -1,
      });

      const pause = () => tween.pause();
      const play = () => tween.play();

      sectionRef.current.addEventListener("mouseenter", pause);
      sectionRef.current.addEventListener("mouseleave", play);

      return () => {
        sectionRef.current?.removeEventListener("mouseenter", pause);
        sectionRef.current?.removeEventListener("mouseleave", play);
      };
    },
    { scope: sectionRef }
  );

  const marqueeBrands = [...brands, ...brands];

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white py-20 sm:py-28 md:py-32"
    >
      <div className="px-4 sm:px-6 md:px-16 lg:px-20 mb-12 sm:mb-16">
        <h2 className="brands-title font-display text-[clamp(2rem,5.5vw,4.5rem)] uppercase leading-[0.88] tracking-tight text-black">
          We work with
        </h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 sm:w-24 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 sm:w-24 bg-linear-to-l from-white to-transparent" />

        <div ref={trackRef} className="flex w-max items-center gap-12 sm:gap-16 md:gap-24 px-6 sm:px-10">
          {marqueeBrands.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="brand-item group relative flex h-20 w-36 sm:h-24 sm:w-44 md:h-28 md:w-52 shrink-0 items-center justify-center"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                width={200}
                height={120}
                className="max-h-full w-auto object-contain grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
