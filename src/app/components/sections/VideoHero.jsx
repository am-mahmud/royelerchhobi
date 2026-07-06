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



// Hero Two 

"use client";

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

// // Load the YouTube IFrame Player API script once and share the promise,
// // so remounts / re-renders never re-inject the script or reset the player.
// let ytApiPromise = null;
// const loadYouTubeApi = () => {
//   if (typeof window === "undefined") return Promise.resolve(null);
//   if (window.YT?.Player) return Promise.resolve(window.YT);
//   if (ytApiPromise) return ytApiPromise;

//   ytApiPromise = new Promise((resolve) => {
//     const prevCallback = window.onYouTubeIframeAPIReady;
//     window.onYouTubeIframeAPIReady = () => {
//       prevCallback?.();
//       resolve(window.YT);
//     };
//     const script = document.createElement("script");
//     script.src = "https://www.youtube.com/iframe_api";
//     document.head.appendChild(script);
//   });

//   return ytApiPromise;
// };

// // Shared fill style for both the local <video> and the YT player container.
// // Uses dvh/dvw (dynamic viewport units) consistently on both axes so the
// // cover-fill math doesn't fight itself as mobile browser chrome shows/hides.
// const FILL_STYLE = {
//   width: "100dvw",
//   height: "56.25dvw",
//   minHeight: "100dvh",
//   minWidth: "177.78dvh",
//   objectFit: "cover",
// };

// const VideoHero = () => {
//   const [videos, setVideos] = useState(FALLBACK_VIDEOS);
//   const [loading, setLoading] = useState(true);
//   const [current, setCurrent] = useState(0);
//   const [playerReady, setPlayerReady] = useState(false);

//   const intervalRef = useRef(null);
//   const heroRef = useRef(null);
//   const localVideoRef = useRef(null);
//   const ytContainerRef = useRef(null);
//   const ytPlayerRef = useRef(null);

//   // Keep refs in sync so callbacks/listeners registered once (onStateChange,
//   // visibilitychange) always see the latest values without re-subscribing.
//   const videosRef = useRef(videos);
//   const currentRef = useRef(current);
//   useEffect(() => {
//     videosRef.current = videos;
//   }, [videos]);
//   useEffect(() => {
//     currentRef.current = current;
//   }, [current]);

//   useMountReveal(heroRef, ".hero-dot", { delay: 0.5, stagger: 0.08, y: 12 });

//   const advance = useCallback(() => {
//     setCurrent((prev) => (prev + 1) % videosRef.current.length);
//   }, []);

//   const startRotation = useCallback(() => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(advance, ROTATE_INTERVAL_MS);
//   }, [advance]);

//   // Resume whatever should currently be playing. Called after unexpected
//   // pauses and when the tab regains visibility.
//   const resumeActiveMedia = useCallback(() => {
//     const active = videosRef.current[currentRef.current];
//     if (!active) return;

//     if (active.type === "youtube") {
//       ytPlayerRef.current?.playVideo?.();
//     } else if (localVideoRef.current) {
//       localVideoRef.current.play?.().catch(() => {});
//     }
//   }, []);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const res = await fetch("/api/videos");
//         if (!res.ok) throw new Error("Failed to load videos");

//         const text = await res.text();
//         const parsed = parseVideosFromXml(text);

//         if (parsed.length > 0) {
//           setVideos([...parsed, LOCAL_VIDEO]);
//           setCurrent(0);
//         }
//       } catch (err) {
//         console.error(err);
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

//   // Create ONE persistent YT.Player instance. We never remount the iframe
//   // again after this — rotation happens via loadVideoById(), which keeps
//   // the browser's autoplay permission intact instead of asking for a fresh
//   // (and often blocked) autoplay grant each time.
//   useEffect(() => {
//     let destroyed = false;

//     loadYouTubeApi().then((YT) => {
//       if (!YT || destroyed || !ytContainerRef.current) return;

//       ytPlayerRef.current = new YT.Player(ytContainerRef.current, {
//         // IMPORTANT: without explicit width/height, YouTube defaults the
//         // actual iframe to 640x390px and your CSS then stretches that tiny
//         // source up to fill the viewport — that's what was causing the
//         // blur/pixelation, especially on mobile where the cover-fill math
//         // forces a very large min-width. Sizing to 100%/100% here lets the
//         // iframe render at the container's real pixel size so YouTube
//         // serves an appropriately high-res stream instead.
//         width: "100%",
//         height: "100%",
//         playerVars: {
//           autoplay: 1,
//           mute: 1,
//           controls: 0,
//           showinfo: 0,
//           rel: 0,
//           modestbranding: 1,
//           playsinline: 1,
//           iv_load_policy: 3,
//         },
//         events: {
//           onReady: (e) => {
//             e.target.mute();
//             // Nudge quality up; YouTube still auto-selects based on
//             // connection/iframe size, but this hints it not to downgrade
//             // further than necessary on mobile connections.
//             e.target.setPlaybackQuality?.("hd1080");
//             setPlayerReady(true);
//             const active = videosRef.current[currentRef.current];
//             if (active?.type === "youtube") {
//               e.target.loadVideoById(active.id);
//               e.target.playVideo();
//             }
//           },
//           onStateChange: (e) => {
//             const state = window.YT?.PlayerState;
//             if (!state) return;
//             const active = videosRef.current[currentRef.current];
//             if (active?.type !== "youtube") return;

//             if (e.data === state.ENDED) {
//               advance();
//             } else if (e.data === state.PAUSED) {
//               // Ambient background video — never let it just sit paused.
//               e.target.playVideo();
//             } else if (e.data === state.PLAYING) {
//               e.target.setPlaybackQuality?.("hd1080");
//             }
//           },
//         },
//       });
//     });

//     return () => {
//       destroyed = true;
//       ytPlayerRef.current?.destroy?.();
//       ytPlayerRef.current = null;
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // Switch source when `current` changes.
//   useEffect(() => {
//     const active = videos[current];
//     if (!active) return;

//     if (active.type === "youtube" && playerReady && ytPlayerRef.current?.loadVideoById) {
//       ytPlayerRef.current.loadVideoById(active.id);
//       ytPlayerRef.current.mute();
//       ytPlayerRef.current.playVideo();
//     } else if (active.type === "local" && localVideoRef.current) {
//       localVideoRef.current.currentTime = 0;
//       localVideoRef.current.play?.().catch(() => {});
//     }

//     const target = active.type === "youtube" ? ytContainerRef.current : localVideoRef.current;
//     if (target) {
//       gsap.fromTo(target, { opacity: 0 }, { opacity: 1, duration: 1.2, ease: "power2.out" });
//     }
//   }, [current, videos, playerReady]);

//   // Browsers routinely pause background-tab / backgrounded-app media and
//   // don't resume it automatically. Force a resume on visibility regain.
//   useEffect(() => {
//     const onVisibilityChange = () => {
//       if (document.visibilityState === "visible") {
//         resumeActiveMedia();
//       }
//     };
//     document.addEventListener("visibilitychange", onVisibilityChange);
//     return () => document.removeEventListener("visibilitychange", onVisibilityChange);
//   }, [resumeActiveMedia]);

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
//         {/* Local video: always mounted, shown/played only when active */}
//         <video
//           ref={localVideoRef}
//           src={LOCAL_VIDEO.src}
//           muted
//           loop
//           playsInline
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none"
//           style={{
//             ...FILL_STYLE,
//             opacity: active.type === "local" ? 1 : 0,
//             zIndex: active.type === "local" ? 1 : 0,
//           }}
//         />

//         {/* Persistent YT player target: never remounted, only loadVideoById()'d.
//             No extra CSS scale on mobile (where the cover-fill math is already
//             most extreme); zoom is introduced gradually at larger breakpoints. */}
//         <div
//           ref={ytContainerRef}
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-100 sm:scale-[1.18] md:scale-[1.22] lg:scale-[1.25]"
//           style={{
//             ...FILL_STYLE,
//             opacity: active.type === "youtube" ? 1 : 0,
//             zIndex: active.type === "youtube" ? 1 : 0,
//           }}
//         />
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

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useMountReveal } from "@/app/hooks/useGsapAnimations";

const VIDEO_SRC = "/assest/royal-hero-video.mp4";

// Shared fill style — cover the viewport on both axes using dynamic
// viewport units so it doesn't fight mobile browser chrome show/hide.
const FILL_STYLE = {
  width: "100dvw",
  height: "56.25dvw",
  minHeight: "100dvh",
  minWidth: "177.78dvh",
  objectFit: "cover",
};

const VideoHero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useMountReveal(heroRef, ".hero-dot", { delay: 0.5, stagger: 0.08, y: 12 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setLoaded(true);
      gsap.to(video, { opacity: 1, duration: 1, ease: "power2.out" });
      video.play().catch(() => {});
    };

    // If the video is already cached/ready by the time this effect runs
    // (e.g. back-forward navigation), fire immediately instead of waiting
    // for an event that already happened.
    if (video.readyState >= 3) {
      handleCanPlay();
    } else {
      video.addEventListener("canplaythrough", handleCanPlay, { once: true });
    }

    // Force-resume if the browser pauses ambient background video after
    // a backgrounded tab/app regains visibility.
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        video.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      video.removeEventListener("canplaythrough", handleCanPlay);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-[60svh] min-h-80 sm:h-svh sm:min-h-120 w-full overflow-hidden bg-black"
    >
     
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          fetchPriority="high"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none opacity-0"
          style={FILL_STYLE}
        />
      </div>

      <a
        href="https://www.youtube.com/@RoyalerchhobiCommunications"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Watch on YouTube"
        className="hero-dot absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 text-white transition-colors duration-300 hover:bg-white/20"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
        >
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
        </svg>
        <span className="font-body text-[10px] sm:text-xs uppercase tracking-[0.15em] whitespace-nowrap">
          Watch Video
        </span>
      </a>
    </div>
  );
};

export default VideoHero;

