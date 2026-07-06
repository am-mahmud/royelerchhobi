"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useScrollReveal } from "@/app/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Md. Mominur Rahman",
    role: "Founder",
    image: "/assest/team-1.png",
  },
  {
    name: "A F Rabbi",
    role: "Visualizer",
    image: "/assest/team-2.png",
  },
  {
    name: "A B M Ehesanul Haque",
    role: "Brand Executive",
    image: "/assest/team-3.png",
  },
];

const About = () => {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, ".about-intro > *", {
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

      const members = gsap.utils.toArray(
        sectionRef.current.querySelectorAll(".team-member")
      );

      members.forEach((member, i) => {
        const photo = member.querySelector(".team-photo-wrap");
        const name = member.querySelector(".team-name");
        const role = member.querySelector(".team-role");

        if (reducedMotion) {
          gsap.set([photo, name, role], { opacity: 1, y: 0, scale: 1 });
          return;
        }

        gsap.set(photo, { opacity: 0, y: 60, scale: 0.9 });
        gsap.set([name, role], { opacity: 0, y: 24 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: member,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            delay: i * 0.06,
          })
          .to(photo, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          })
          .to(
            [name, role],
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: "power3.out",
            },
            "-=0.6"
          );

        gsap.to(photo, {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: member,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-label="About Us"
      className="px-6 sm:px-10 py-14 sm:py-16 md:px-20 md:py-20 bg-white"
    >
      <div className="about-intro grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20 mb-14 sm:mb-16 md:mb-20 pb-14 sm:pb-16">
        <div>
          <h2 className="font-display text-[clamp(3rem,9vw,7.5rem)] uppercase leading-[0.88] tracking-tight text-black">
            The people behind the work
          </h2>
        </div>

        <div className="flex flex-col justify-end gap-6">
          <p className="font-body text-base sm:text-base md:text-lg leading-relaxed text-black/55">
            We don&apos;t just design for brands we build the language they
            speak in. From a single logo mark to a full campaign rollout, every
            project starts with one question: what does this brand want people
            to feel?
          </p>
          <p className="font-body text-base sm:text-base leading-relaxed text-black/40">
            Founded in Dhaka by Mominur Rahman Royal a designer and art
            thinker who believes restraint isn&apos;t a limitation, it&apos;s the
            whole point. Small team. Sharp ideas. Work that earns its place.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16">
        {team.map((member) => (
          <div key={member.name} className="team-member group">
            <div className="team-photo-wrap relative mb-6 sm:mb-8 flex items-end justify-center min-h-75 sm:min-h-95 md:min-h-105">
              <div className="relative w-full h-70 sm:h-85 md:h-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>

            <h3 className="team-name font-display text-xl sm:text-2xl md:text-[1.85rem] uppercase leading-tight tracking-tight text-black">
              {member.name}
            </h3>
            <p className="team-role font-body mt-2 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-black/40 font-bold">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;