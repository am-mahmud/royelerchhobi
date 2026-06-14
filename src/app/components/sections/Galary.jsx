"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { useScrollReveal } from "@/app/hooks/useGsapAnimations";
import heroPhotos from "@/app/lib/heroPhotos";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, Observer);

const galleryLayout = [
  { w: "w-[72vw] sm:w-[420px]", h: "h-[340px] sm:h-[400px]" },
  { w: "w-[58vw] sm:w-[300px]", h: "h-[420px] sm:h-[520px]" },
  { w: "w-[80vw] sm:w-[520px]", h: "h-[300px] sm:h-[360px]" },
  { w: "w-[55vw] sm:w-[280px]", h: "h-[380px] sm:h-[460px]" },
  { w: "w-[65vw] sm:w-[360px]", h: "h-[320px] sm:h-[380px]" },
  { w: "w-[75vw] sm:w-[480px]", h: "h-[360px] sm:h-[420px]" },
  { w: "w-[50vw] sm:w-[260px]", h: "h-[440px] sm:h-[540px]" },
  { w: "w-[70vw] sm:w-[400px]", h: "h-[310px] sm:h-[370px]" },
  { w: "w-[62vw] sm:w-[340px]", h: "h-[390px] sm:h-[450px]" },
  { w: "w-[78vw] sm:w-[500px]", h: "h-[330px] sm:h-[390px]" },
  { w: "w-[56vw] sm:w-[320px]", h: "h-[410px] sm:h-[490px]" },
];

const Galary = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const innerRef = useRef(null);

  useScrollReveal(sectionRef, ".gallery-title", {
    mobileY: 20,
    desktopY: 36,
    duration: 0.8,
  });

  useGSAP(
    () => {
      if (!sectionRef.current || !innerRef.current || !trackRef.current) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const items = gsap.utils.toArray(
        innerRef.current.querySelectorAll(".gallery-item")
      );

      if (reducedMotion) {
        gsap.set(items, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(items, { opacity: 0, y: 40 });

      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const tween = gsap.to(innerRef.current, {
          x: () =>
            -(innerRef.current.scrollWidth - window.innerWidth + 80),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${innerRef.current.scrollWidth}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        return () => tween.kill();
      });

      mm.add("(max-width: 767px)", () => {
        const track = trackRef.current;

        const observer = Observer.create({
          target: track,
          type: "pointer,touch,wheel",
          onDrag: (self) => {
            track.scrollLeft -= self.deltaX;
          },
          onChange: (self) => {
            if (Math.abs(self.deltaY) > Math.abs(self.deltaX)) {
              track.scrollLeft += self.deltaY * 0.8;
            }
          },
          tolerance: 10,
        });

        return () => observer.kill();
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white py-16 sm:py-24 md:py-28"
    >
      <h2 className="gallery-title font-display text-center text-[clamp(2rem,6vw,4.5rem)] uppercase leading-[0.92] tracking-tight text-black mb-12 sm:mb-16 md:mb-20 px-4">
        A Fair of Living Art
      </h2>

      <div
        ref={trackRef}
        className="no-scrollbar overflow-x-auto md:overflow-hidden cursor-grab active:cursor-grabbing"
      >
        <div
          ref={innerRef}
          className="gallery-inner flex w-max items-end gap-4 sm:gap-6 px-4 sm:px-6 md:px-16 lg:px-20 pb-4"
        >
          {heroPhotos.map((photo, i) => {
            const layout = galleryLayout[i % galleryLayout.length];

            return (
              <div
                key={photo.id}
                className={`gallery-item relative shrink-0 ${layout.w} ${layout.h}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 70vw, 420px"
                  draggable={false}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Galary;
