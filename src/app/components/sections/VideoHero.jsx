"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import gsap from "gsap";
import { FaYoutube } from "react-icons/fa";
import { useMountReveal } from "@/app/hooks/useGsapAnimations";

const FALLBACK_VIDEOS = [
  { id: "A-T2QYeqy2U", title: "Hero video 1" },
  { id: "9g36i3bgKZk", title: "Hero video 2" },
];
const ROTATE_INTERVAL_MS = 12000;

const parseVideosFromXml = (xmlText) => {
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlText, "text/xml");
  const entries = Array.from(xml.querySelectorAll("entry"));

  return entries
    .map((entry) => ({
      id: entry.querySelector("videoId")?.textContent,
      title: entry.querySelector("title")?.textContent ?? "Video",
    }))
    .filter((v) => v.id);
};

const VideoHero = () => {
  const [videos, setVideos] = useState(FALLBACK_VIDEOS);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const heroRef = useRef(null);
  const iframeRef = useRef(null);

  useMountReveal(heroRef, ".hero-dot, .hero-youtube", { delay: 0.5, stagger: 0.08, y: 12 });

  const startRotation = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, ROTATE_INTERVAL_MS);
  }, [videos.length]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch("/api/videos");
        if (!res.ok) throw new Error("Failed to load videos");

        const text = await res.text();
        const parsed = parseVideosFromXml(text);

        if (parsed.length > 0) {
          setVideos(parsed);
          setCurrent(0);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    if (videos.length === 0) return;
    startRotation();
    return () => clearInterval(intervalRef.current);
  }, [videos.length, startRotation]);

  useEffect(() => {
    if (!iframeRef.current) return;
    gsap.fromTo(
      iframeRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "power2.out" }
    );
  }, [current, videos]);

  const goTo = (i) => {
    setCurrent(i);
    startRotation();
  };

  const active = videos[current] ?? videos[0];

  if (!active) return null;

  return (
    <div
      ref={heroRef}
      className="relative h-svh min-h-120 w-full overflow-hidden bg-black"
    >
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-white/40">
            Loading...
          </p>
        </div>
      )}

      <div className="absolute inset-0 overflow-hidden">
        <iframe
          ref={iframeRef}
          key={active.id}
          src={`https://www.youtube.com/embed/${active.id}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          title={active.title}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none scale-[1.18] sm:scale-[1.22] md:scale-[1.25]"
          style={{
            width: "100vw",
            height: "56.25vw",
            minHeight: "100svh",
            minWidth: "177.78svh",
          }}
        />
      </div>

      <div className="hero-dot absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex max-w-[90vw] items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar px-2">
        {videos.map((video, i) => (
          <button
            key={video.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={video.title}
            className={`hero-dot h-1 shrink-0 rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 sm:w-10 bg-accent"
                : "w-3 sm:w-4 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      <div className="hero-youtube absolute bottom-6 sm:bottom-8 right-4 sm:right-6 md:right-16 lg:right-20 z-20">
        <a
          href={`https://www.youtube.com/watch?v=${active.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-youtube inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 font-body text-[10px] sm:text-xs uppercase tracking-[0.15em] text-white transition-all hover:bg-accent hover:text-black"
        >
          <FaYoutube className="h-4 w-4 shrink-0" />
          Watch on YouTube
        </a>
      </div>
    </div>
  );
};

export default VideoHero;
