"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useMountReveal } from "@/app/hooks/useGsapAnimations";

const VIDEO_IDS = ["A-T2QYeqy2U", "9g36i3bgKZk"];
const ROTATE_INTERVAL_MS = 12000;

const VideoHero = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const heroRef = useRef(null);
  const iframeRef = useRef(null);

  useMountReveal(heroRef, ".hero-dot", { delay: 0.6, stagger: 0.1, y: 12 });

  const startRotation = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % VIDEO_IDS.length);
    }, ROTATE_INTERVAL_MS);
  };

  useEffect(() => {
    startRotation();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (!iframeRef.current) return;
    gsap.fromTo(
      iframeRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "power2.out" }
    );
  }, [current]);

  const goTo = (i) => {
    setCurrent(i);
    startRotation();
  };

  const activeId = VIDEO_IDS[current];

  return (
    <div
      ref={heroRef}
      className="relative h-svh min-h-120 w-full overflow-hidden bg-black"
    >
      <iframe
        ref={iframeRef}
        key={activeId}
        src={`https://www.youtube.com/embed/${activeId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        title={`Hero video ${current + 1}`}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw+120px)] h-[calc(100svh+120px)] sm:w-[calc(100vw+160px)] sm:h-[calc(100svh+160px)] md:w-[calc(100vw+200px)] md:h-[calc(100svh+200px)] pointer-events-none border-0"
      />

      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3">
        {VIDEO_IDS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to video ${i + 1}`}
            className={`hero-dot h-1 rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 sm:w-10 bg-accent"
                : "w-3 sm:w-4 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoHero;
