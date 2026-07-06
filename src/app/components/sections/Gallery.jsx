// "use client";

// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Observer } from "gsap/Observer";
// import heroPhotos from "@/app/lib/heroPhotos";
// import Image from "next/image";
// import { useScrollReveal } from "@/app/hooks/useGsapAnimations";

// gsap.registerPlugin(ScrollTrigger, Observer);

// const galleryLayout = [
//   { w: "w-[68vw] sm:w-[380px] md:w-[420px]", h: "h-[300px] sm:h-[380px] md:h-[400px]" },
//   { w: "w-[52vw] sm:w-[260px] md:w-[300px]", h: "h-[380px] sm:h-[480px] md:h-[520px]" },
//   { w: "w-[75vw] sm:w-[460px] md:w-[520px]", h: "h-[280px] sm:h-[320px] md:h-[360px]" },
//   { w: "w-[50vw] sm:w-[250px] md:w-[280px]", h: "h-[340px] sm:h-[420px] md:h-[460px]" },
//   { w: "w-[60vw] sm:w-[320px] md:w-[360px]", h: "h-[290px] sm:h-[340px] md:h-[380px]" },
//   { w: "w-[72vw] sm:w-[440px] md:w-[480px]", h: "h-[320px] sm:h-[380px] md:h-[420px]" },
//   { w: "w-[48vw] sm:w-[240px] md:w-[260px]", h: "h-[400px] sm:h-[500px] md:h-[540px]" },
//   { w: "w-[65vw] sm:w-[360px] md:w-[400px]", h: "h-[280px] sm:h-[330px] md:h-[370px]" },
//   { w: "w-[58vw] sm:w-[300px] md:w-[340px]", h: "h-[350px] sm:h-[410px] md:h-[450px]" },
//   { w: "w-[74vw] sm:w-[460px] md:w-[500px]", h: "h-[300px] sm:h-[350px] md:h-[390px]" },
//   { w: "w-[54vw] sm:w-[280px] md:w-[320px]", h: "h-[370px] sm:h-[450px] md:h-[490px]" },
// ];

// const Gallery = () => {
//   const sectionRef = useRef(null);
//   const trackRef = useRef(null);
//   const innerRef = useRef(null);

//   useScrollReveal(sectionRef, ".gallery-title", {
//     mobileY: 20,
//     desktopY: 32,
//     duration: 0.8,
//   });

//   useGSAP(
//     () => {
//       if (!sectionRef.current || !innerRef.current || !trackRef.current) return;

//       const reducedMotion = window.matchMedia(
//         "(prefers-reduced-motion: reduce)"
//       ).matches;

//       const items = gsap.utils.toArray(
//         innerRef.current.querySelectorAll(".gallery-item")
//       );

//       if (reducedMotion) {
//         gsap.set(items, { opacity: 1, y: 0 });
//         return;
//       }

//       gsap.set(items, { opacity: 0, y: 32 });

//       gsap.to(items, {
//         opacity: 1,
//         y: 0,
//         duration: 0.75,
//         stagger: 0.05,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 85%",
//           toggleActions: "play none none none",
//         },
//       });

//       const mm = gsap.matchMedia();

//       mm.add("(min-width: 768px)", () => {
//         const getScrollDistance = () => {
//           const inner = innerRef.current;
//           const padding = 80;
//           return Math.max(0, inner.scrollWidth - window.innerWidth + padding);
//         };

//         const tween = gsap.to(innerRef.current, {
//           x: () => -getScrollDistance(),
//           ease: "none",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             pin: true,
//             scrub: 0.8,
//             start: "top top",
//             end: () => `+=${getScrollDistance()}`,
//             invalidateOnRefresh: true,
//             anticipatePin: 1,
//           },
//         });

//         return () => tween.kill();
//       });

//       mm.add("(max-width: 767px)", () => {
//         const track = trackRef.current;

//         const observer = Observer.create({
//           target: track,
//           type: "pointer,touch,wheel",
//           onDrag: (self) => {
//             track.scrollLeft -= self.deltaX;
//           },
//           onChange: (self) => {
//             if (Math.abs(self.deltaY) > Math.abs(self.deltaX)) {
//               track.scrollLeft += self.deltaY * 0.6;
//             }
//           },
//           tolerance: 10,
//         });

//         return () => observer.kill();
//       });

//       return () => mm.revert();
//     },
//     { scope: sectionRef, dependencies: [heroPhotos.length] }
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full overflow-hidden bg-white"
//     >
//       <div className="px-4 sm:px-6 md:px-16 lg:px-20 pt-16 sm:pt-20 md:pt-24 pb-4 sm:pb-5 md:pb-6">
//         <h2 className="gallery-title font-display text-center text-[clamp(2rem,5.5vw,4.5rem)] uppercase leading-[0.92] tracking-tight text-black">
//           A Fair of Living Art
//         </h2>
//       </div>

//       <div
//         ref={trackRef}
//         className="no-scrollbar overflow-x-auto md:overflow-hidden cursor-grab active:cursor-grabbing pb-24 sm:pb-28 md:pb-36"
//       >
//         <div
//           ref={innerRef}
//           className="flex w-max items-end gap-5 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-16 lg:px-20"
//         >
//           {heroPhotos.map((photo, i) => {
//             const layout = galleryLayout[i % galleryLayout.length];

//             return (
//               <div
//                 key={photo.id}
//                 className={`gallery-item relative shrink-0 ${layout.w} ${layout.h}`}
//               >
//                 <Image
//                   src={photo.src}
//                   alt={photo.alt}
//                   fill
//                   className="object-contain"
//                   sizes="(max-width: 768px) 70vw, 420px"
//                   draggable={false}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;

"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroPhotos from "@/app/lib/heroPhotos";
import Image from "next/image";
import { useScrollReveal } from "@/app/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const galleryLayout = [
  { w: "w-[68vw] sm:w-[380px] md:w-[420px]", h: "h-[300px] sm:h-[380px] md:h-[400px]" },
  { w: "w-[52vw] sm:w-[260px] md:w-[300px]", h: "h-[380px] sm:h-[480px] md:h-[520px]" },
  { w: "w-[75vw] sm:w-[460px] md:w-[520px]", h: "h-[280px] sm:h-[320px] md:h-[360px]" },
  { w: "w-[50vw] sm:w-[250px] md:w-[280px]", h: "h-[340px] sm:h-[420px] md:h-[460px]" },
  { w: "w-[60vw] sm:w-[320px] md:w-[360px]", h: "h-[290px] sm:h-[340px] md:h-[380px]" },
  { w: "w-[72vw] sm:w-[440px] md:w-[480px]", h: "h-[320px] sm:h-[380px] md:h-[420px]" },
  { w: "w-[48vw] sm:w-[240px] md:w-[260px]", h: "h-[400px] sm:h-[500px] md:h-[540px]" },
  { w: "w-[65vw] sm:w-[360px] md:w-[400px]", h: "h-[280px] sm:h-[330px] md:h-[370px]" },
  { w: "w-[58vw] sm:w-[300px] md:w-[340px]", h: "h-[350px] sm:h-[410px] md:h-[450px]" },
  { w: "w-[74vw] sm:w-[460px] md:w-[500px]", h: "h-[300px] sm:h-[350px] md:h-[390px]" },
  { w: "w-[54vw] sm:w-[280px] md:w-[320px]", h: "h-[370px] sm:h-[450px] md:h-[490px]" },
];

const Gallery = () => {
  const sectionRef = useRef(null);
  const innerRef = useRef(null);

  useScrollReveal(sectionRef, ".gallery-title", {
    mobileY: 20,
    desktopY: 32,
    duration: 0.8,
  });

  useGSAP(
    () => {
      if (!sectionRef.current || !innerRef.current) return;

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

      gsap.set(items, { opacity: 0, y: 32 });

      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Single pinned horizontal-scrub animation for ALL screen sizes.
      // ScrollTrigger handles touch scroll natively, so a vertical swipe
      // on mobile drives this exactly the way mouse-wheel scroll does on
      // desktop — no separate drag/Observer logic needed.
      const getScrollDistance = () => {
        const inner = innerRef.current;
        const padding = 80;
        return Math.max(0, inner.scrollWidth - window.innerWidth + padding);
      };

      const tween = gsap.to(innerRef.current, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 0.8,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      return () => tween.kill();
    },
    { scope: sectionRef, dependencies: [heroPhotos.length] }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white"
    >
      <div className="px-4 sm:px-6 md:px-16 lg:px-20 pt-16 sm:pt-20 md:pt-24 pb-4 sm:pb-5 md:pb-6">
        <h2 className="gallery-title font-display text-center text-[clamp(2rem,5.5vw,4.5rem)] uppercase leading-[0.92] tracking-tight text-black">
          A Fair of Living Art
        </h2>
      </div>

      <div className="overflow-hidden pb-24 sm:pb-28 md:pb-36">
        <div
          ref={innerRef}
          className="flex w-max items-end gap-5 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-16 lg:px-20"
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

export default Gallery;