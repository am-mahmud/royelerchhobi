// "use client";

// import { useEffect, useState, useRef, useCallback } from "react";
// import gsap from "gsap";
// import { useMountReveal } from "@/app/hooks/useGsapAnimations";

// const LOCAL_VIDEO = { id: "undp-local", title: "UNDP Video", type: "local", src: "/assest/undp-video.mp4" };

// const FALLBACK_VIDEOS = [
//   { id: "A-T2QYeqy2U", title: "Hero video 1", type: "youtube" },
//   { id: "9g36i3bgKZk", title: "Hero video 2", type: "youtube" },
// ];
// const ROTATE_INTERVAL_MS = 12000;

// const parseVideosFromXml = (xmlText) => {
//   const parser = new DOMParser();
//   const xml = parser.parseFromString(xmlText, "text/xml");
//   const entries = Array.from(xml.querySelectorAll("entry"));

//   return entries
//     .map((entry) => ({
//       id: entry.querySelector("videoId")?.textContent,
//       title: entry.querySelector("title")?.textContent ?? "Video",
//       type: "youtube",
//     }))
//     .filter((v) => v.id);
// };

// const VideoHero = () => {
//   const [videos, setVideos] = useState(FALLBACK_VIDEOS);
//   const [loading, setLoading] = useState(true);
//   const [current, setCurrent] = useState(0);
//   const intervalRef = useRef(null);
//   const heroRef = useRef(null);
//   const mediaRef = useRef(null);

//   useMountReveal(heroRef, ".hero-dot", { delay: 0.5, stagger: 0.08, y: 12 });

//   const startRotation = useCallback(() => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % videos.length);
//     }, ROTATE_INTERVAL_MS);
//   }, [videos.length]);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const res = await fetch("/api/videos");
//         if (!res.ok) throw new Error("Failed to load videos");

//         const text = await res.text();
//         const parsed = parseVideosFromXml(text);

//         if (parsed.length > 0) {
//           // Append local video at the end
//           setVideos([...parsed, LOCAL_VIDEO]);
//           setCurrent(0);
//         }
//       } catch (err) {
//         console.error(err);
//         // Append local video to fallback too
//         setVideos([...FALLBACK_VIDEOS, LOCAL_VIDEO]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVideos();
//   }, []);

//   useEffect(() => {
//     if (videos.length === 0) return;
//     startRotation();
//     return () => clearInterval(intervalRef.current);
//   }, [videos.length, startRotation]);

//   useEffect(() => {
//     if (!mediaRef.current) return;
//     gsap.fromTo(
//       mediaRef.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 1.2, ease: "power2.out" }
//     );
//   }, [current, videos]);

//   const goTo = (i) => {
//     setCurrent(i);
//     startRotation();
//   };

//   const active = videos[current] ?? videos[0];

//   if (!active) return null;

//   return (
//     <div
//       ref={heroRef}
//       className="relative h-svh min-h-120 w-full overflow-hidden bg-black"
//     >
//       {loading && (
//         <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
//           <p className="font-body text-xs uppercase tracking-[0.3em] text-white/40">
//             Loading...
//           </p>
//         </div>
//       )}

//       <div className="absolute inset-0 overflow-hidden">
//         {active.type === "local" ? (
//           <video
//             ref={mediaRef}
//             key={active.id}
//             src={active.src}
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none"
//             style={{
//               width: "100vw",
//               height: "56.25vw",
//               minHeight: "100svh",
//               minWidth: "177.78svh",
//               objectFit: "cover",
//             }}
//           />
//         ) : (
//           <iframe
//             ref={mediaRef}
//             key={active.id}
//             src={`https://www.youtube.com/embed/${active.id}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`}
//             allow="autoplay; encrypted-media; picture-in-picture"
//             allowFullScreen
//             title={active.title}
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none scale-[1.18] sm:scale-[1.22] md:scale-[1.25]"
//             style={{
//               width: "100vw",
//               height: "56.25vw",
//               minHeight: "100svh",
//               minWidth: "177.78svh",
//             }}
//           />
//         )}
//       </div>

//       <div className="hero-dot absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex max-w-[90vw] items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar px-2">
//         {videos.map((video, i) => (
//           <button
//             key={video.id}
//             type="button"
//             onClick={() => goTo(i)}
//             aria-label={video.title}
//             className={`hero-dot h-1 shrink-0 rounded-full transition-all duration-500 ${
//               i === current
//                 ? "w-8 sm:w-10 bg-accent"
//                 : "w-3 sm:w-4 bg-white/30 hover:bg-white/60"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoHero;


"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import gsap from "gsap";
import { useMountReveal } from "@/app/hooks/useGsapAnimations";

const LOCAL_VIDEO = { id: "undp-local", title: "UNDP Video", type: "local", src: "/assest/undp-video.mp4" };

const FALLBACK_VIDEOS = [
  { id: "A-T2QYeqy2U", title: "Hero video 1", type: "youtube" },
  { id: "9g36i3bgKZk", title: "Hero video 2", type: "youtube" },
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
      type: "youtube",
    }))
    .filter((v) => v.id);
};

// Load the YouTube IFrame Player API script once and share the promise,
// so remounts / re-renders never re-inject the script or reset the player.
let ytApiPromise = null;
const loadYouTubeApi = () => {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (ytApiPromise) return ytApiPromise;

  ytApiPromise = new Promise((resolve) => {
    const prevCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prevCallback?.();
      resolve(window.YT);
    };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(script);
  });

  return ytApiPromise;
};

// Shared fill style for both the local <video> and the YT player container.
// Uses dvh/dvw (dynamic viewport units) consistently on both axes so the
// cover-fill math doesn't fight itself as mobile browser chrome shows/hides.
const FILL_STYLE = {
  width: "100dvw",
  height: "56.25dvw",
  minHeight: "100dvh",
  minWidth: "177.78dvh",
  objectFit: "cover",
};

const VideoHero = () => {
  const [videos, setVideos] = useState(FALLBACK_VIDEOS);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [playerReady, setPlayerReady] = useState(false);

  const intervalRef = useRef(null);
  const heroRef = useRef(null);
  const localVideoRef = useRef(null);
  const ytContainerRef = useRef(null);
  const ytPlayerRef = useRef(null);

  // Keep refs in sync so callbacks/listeners registered once (onStateChange,
  // visibilitychange) always see the latest values without re-subscribing.
  const videosRef = useRef(videos);
  const currentRef = useRef(current);
  useEffect(() => {
    videosRef.current = videos;
  }, [videos]);
  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  useMountReveal(heroRef, ".hero-dot", { delay: 0.5, stagger: 0.08, y: 12 });

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % videosRef.current.length);
  }, []);

  const startRotation = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(advance, ROTATE_INTERVAL_MS);
  }, [advance]);

  // Resume whatever should currently be playing. Called after unexpected
  // pauses and when the tab regains visibility.
  const resumeActiveMedia = useCallback(() => {
    const active = videosRef.current[currentRef.current];
    if (!active) return;

    if (active.type === "youtube") {
      ytPlayerRef.current?.playVideo?.();
    } else if (localVideoRef.current) {
      localVideoRef.current.play?.().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch("/api/videos");
        if (!res.ok) throw new Error("Failed to load videos");

        const text = await res.text();
        const parsed = parseVideosFromXml(text);

        if (parsed.length > 0) {
          setVideos([...parsed, LOCAL_VIDEO]);
          setCurrent(0);
        }
      } catch (err) {
        console.error(err);
        setVideos([...FALLBACK_VIDEOS, LOCAL_VIDEO]);
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

  // Create ONE persistent YT.Player instance. We never remount the iframe
  // again after this — rotation happens via loadVideoById(), which keeps
  // the browser's autoplay permission intact instead of asking for a fresh
  // (and often blocked) autoplay grant each time.
  useEffect(() => {
    let destroyed = false;

    loadYouTubeApi().then((YT) => {
      if (!YT || destroyed || !ytContainerRef.current) return;

      ytPlayerRef.current = new YT.Player(ytContainerRef.current, {
        // IMPORTANT: without explicit width/height, YouTube defaults the
        // actual iframe to 640x390px and your CSS then stretches that tiny
        // source up to fill the viewport — that's what was causing the
        // blur/pixelation, especially on mobile where the cover-fill math
        // forces a very large min-width. Sizing to 100%/100% here lets the
        // iframe render at the container's real pixel size so YouTube
        // serves an appropriately high-res stream instead.
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          iv_load_policy: 3,
        },
        events: {
          onReady: (e) => {
            e.target.mute();
            // Nudge quality up; YouTube still auto-selects based on
            // connection/iframe size, but this hints it not to downgrade
            // further than necessary on mobile connections.
            e.target.setPlaybackQuality?.("hd1080");
            setPlayerReady(true);
            const active = videosRef.current[currentRef.current];
            if (active?.type === "youtube") {
              e.target.loadVideoById(active.id);
              e.target.playVideo();
            }
          },
          onStateChange: (e) => {
            const state = window.YT?.PlayerState;
            if (!state) return;
            const active = videosRef.current[currentRef.current];
            if (active?.type !== "youtube") return;

            if (e.data === state.ENDED) {
              advance();
            } else if (e.data === state.PAUSED) {
              // Ambient background video — never let it just sit paused.
              e.target.playVideo();
            } else if (e.data === state.PLAYING) {
              e.target.setPlaybackQuality?.("hd1080");
            }
          },
        },
      });
    });

    return () => {
      destroyed = true;
      ytPlayerRef.current?.destroy?.();
      ytPlayerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Switch source when `current` changes.
  useEffect(() => {
    const active = videos[current];
    if (!active) return;

    if (active.type === "youtube" && playerReady && ytPlayerRef.current?.loadVideoById) {
      ytPlayerRef.current.loadVideoById(active.id);
      ytPlayerRef.current.mute();
      ytPlayerRef.current.playVideo();
    } else if (active.type === "local" && localVideoRef.current) {
      localVideoRef.current.currentTime = 0;
      localVideoRef.current.play?.().catch(() => {});
    }

    const target = active.type === "youtube" ? ytContainerRef.current : localVideoRef.current;
    if (target) {
      gsap.fromTo(target, { opacity: 0 }, { opacity: 1, duration: 1.2, ease: "power2.out" });
    }
  }, [current, videos, playerReady]);

  // Browsers routinely pause background-tab / backgrounded-app media and
  // don't resume it automatically. Force a resume on visibility regain.
  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        resumeActiveMedia();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [resumeActiveMedia]);

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
        {/* Local video: always mounted, shown/played only when active */}
        <video
          ref={localVideoRef}
          src={LOCAL_VIDEO.src}
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none"
          style={{
            ...FILL_STYLE,
            opacity: active.type === "local" ? 1 : 0,
            zIndex: active.type === "local" ? 1 : 0,
          }}
        />

        {/* Persistent YT player target: never remounted, only loadVideoById()'d.
            No extra CSS scale on mobile (where the cover-fill math is already
            most extreme); zoom is introduced gradually at larger breakpoints. */}
        <div
          ref={ytContainerRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-100 sm:scale-[1.18] md:scale-[1.22] lg:scale-[1.25]"
          style={{
            ...FILL_STYLE,
            opacity: active.type === "youtube" ? 1 : 0,
            zIndex: active.type === "youtube" ? 1 : 0,
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
    </div>
  );
};

export default VideoHero;