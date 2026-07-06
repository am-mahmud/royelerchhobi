"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useScrollReveal } from "@/app/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    year: "2025",
    category: "Store Opening",
    disciplines: ["Launch Campaign", "Visual Identity", "On-ground Creative"],
    image: "/assest/project_1.jpeg",
    alt: "Aarong Dhanmondi Opening",
    title: "Aarong Dhanmondi",
    description:
      "The world's largest craft store — now in Dhanmondi. Launch campaign for Aarong's new branch opening at 23, Road 2, March 7, 2025.",
  },
  {
    year: "2025",
    category: "Retail Campaign",
    disciplines: ["Brand Identity", "Ambient Design", "Visual Direction"],
    image: "/assest/porject_5.jpg",
    alt: "Aarong Winter Wonderland 2025",
    title: "Aarong Winter Wonderland",
    description:
      "A celebration fair of crafts — bringing Aarong's winter collection to life through immersive visuals, festive branding, and a space designed to make heritage feel exciting again.",
  },
  {
    year: "2024",
    category: "Store Launch",
    disciplines: ["Launch Campaign", "On-ground Creative", "Visual Identity"],
    image: "/assest/porject_4.jpg",
    alt: "Aarong Shyamoli Opening",
    title: "Aarong Shyamoli Opening",
    description:
      "Launch campaign for Aarong's new Shyamoli outlet — visual identity and on-ground creatives designed to turn a store opening into a neighborhood event.",
  },
  {
    year: "2024",
    category: "Product Campaign",
    disciplines: ["Packaging", "Visual Design", "Brand Communication"],
    image: "/assest/porject_3.jpg",
    alt: "Bashundhara Tissue",
    title: "Bashundhara Tissue",
    description:
      "Visual identity and campaign creatives for Bashundhara Tissue — clean, confident design built for shelf presence and everyday trust.",
  },
  {
    year: "2024",
    category: "Festival Branding",
    disciplines: ["Festival Visuals", "Social Creative", "Brand Design"],
    image: "/assest/porject_2.jpg",
    alt: "Shilpokola Mishti Mela 2024",
    title: "Shilpokola Mishti Mela",
    description:
      "Brand visuals for Shilpokola's Mishti Mela 2024 — a festival celebrating Bangladesh's sweets, captured through warm, inviting design that matched the energy of the fair itself.",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, ".work-header", {
    mobileY: 20,
    desktopY: 40,
    duration: 0.8,
  });

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const items = gsap.utils.toArray(
        sectionRef.current.querySelectorAll(".project-item")
      );

      items.forEach((item) => {
        const image = item.querySelector(".project-image");
        const content = item.querySelectorAll(".project-content > *");

        if (reducedMotion) {
          gsap.set([image, ...content], { opacity: 1, y: 0, scale: 1 });
          return;
        }

        gsap.set(image, { opacity: 0, scale: 0.94 });
        gsap.set(content, { opacity: 0, y: 32 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          })
          .to(image, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          })
          .to(
            content,
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: "power3.out",
            },
            "-=0.6"
          );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="work"
      ref={sectionRef}
      className="px-4 sm:px-10 py-14 sm:py-18 md:px-20 md:py-24 bg-white"
    >
      <div className="work-header mb-16 sm:mb-20 md:mb-20 pb-8 sm:pb-10">
        <h2 className="font-display text-[clamp(3rem,9vw,7.5rem)] uppercase leading-[0.88] tracking-tight text-black">
          Created Crafts
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-col sm:gap-20 md:gap-40">
        {projects.map((project, i) => {
          const isReversed = i % 2 === 1;

          return (
            <article
              key={project.title}
              className={`project-item grid grid-cols-1 gap-3 sm:gap-8 lg:gap-20 items-center ${
                isReversed
                  ? "lg:grid-cols-[0.9fr_1.1fr]"
                  : "lg:grid-cols-[1.1fr_0.9fr]"
              }`}
            >
              <div
                className={`project-image relative flex items-center justify-center min-h-32 sm:min-h-90 md:min-h-115 order-1 ${
                  isReversed ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="relative w-full h-32 sm:h-90 md:h-115">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, 50vw"
                    priority={i === 0}
                  />
                </div>
              </div>

              <div
                className={`project-content flex flex-col gap-1.5 sm:gap-6 order-2 ${
                  isReversed ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-body text-[9px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-black/40 font-bold">
                  <span>{project.year}</span>
                  <span className="hidden sm:inline text-black/20">/</span>
                  <span>{project.category}</span>
                </div>

                <h3 className="font-display text-[clamp(1rem,4vw,4rem)] uppercase leading-[0.95] tracking-tight text-black">
                  {project.title}
                </h3>

                <p className="font-body text-xs sm:text-base md:text-lg leading-relaxed text-black/55 max-w-lg line-clamp-3 sm:line-clamp-none">
                  {project.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;