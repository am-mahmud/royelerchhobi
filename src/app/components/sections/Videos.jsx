"use client";

import { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";

const CHANNEL_ID = "UC_v1UPT8P3y7hXNeXVS17qA";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch("/api/videos");
        if (!res.ok) throw new Error("Failed to load videos");

        const text = await res.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "text/xml");
        const entries = Array.from(xml.querySelectorAll("entry"));

        setVideos(
          entries.slice(0, 8).map((entry) => ({
            id: entry.querySelector("videoId")?.textContent,
            title: entry.querySelector("title")?.textContent,
          }))
        );
      } catch (err) {
        console.error(err);
        setError("Could not load videos.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const goTo = (i) => {
    setCurrent(i);
    setPlaying(false);
  };

  const goPrev = () => goTo((current - 1 + videos.length) % videos.length);
  const goNext = () => goTo((current + 1) % videos.length);

  const active = videos[current];

  return (
    <section className="px-6 py-24 md:px-20">
      <div className="mb-10 flex flex-col items-center text-center gap-4">
        <h2 className="font-serif text-4xl font-bold text-black md:text-[6rem]">
          Watch Our Work
        </h2>
        <a
          href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-black/50 transition-colors hover:text-black"
        >
          <FaYoutube className="h-5 w-5 text-red-500" />
          View all on YouTube
        </a>
      </div>

      {loading && (
        <div className="flex h-64 items-center justify-center text-sm text-black/30">
          Loading...
        </div>
      )}

      {error && (
        <div className="flex h-64 items-center justify-center text-sm text-red-400">
          {error}
        </div>
      )}

      {!loading && !error && active && (
        <div className="mx-auto max-w-4xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black/5">
            {playing ? (
              <iframe
                key={active.id}
                src={`https://www.youtube.com/embed/${active.id}?autoplay=1&rel=0`}
                title={active.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="h-full w-full"
              />
            ) : (
              <button
                onClick={() => setPlaying(true)}
                className="group relative h-full w-full"
              >
                <img
                  src={`https://img.youtube.com/vi/${active.id}/maxresdefault.jpg`}
                  alt={active.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 transition-transform duration-300 group-hover:scale-110">
                    <FaYoutube className="h-7 w-7 text-black" />
                  </div>
                </div>
              </button>
            )}
          </div>

          {/* <div className="mt-6 flex items-start justify-between gap-4">
            <div>
              <p className="mb-1 text-xs uppercase tracking-widest text-black/30">
                {current + 1} / {videos.length}
              </p>
              <p className="font-serif italic text-xl text-black md:text-2xl">
                {active.title}
              </p>
            </div>
            <div className="flex flex-shrink-0 gap-2">
              <button
                onClick={goPrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-black transition-all hover:border-yellow-400 hover:bg-yellow-400"
              >
                ←
              </button>
              <button
                onClick={goNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-black transition-all hover:border-yellow-400 hover:bg-yellow-400"
              >
                →
              </button>
            </div>
          </div> */}

          <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
            {videos.map((video, i) => (
              <button
                key={video.id}
                onClick={() => goTo(i)}
                className={`flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                  i === current
                    ? "border-yellow-400 opacity-100"
                    : "border-transparent opacity-30 hover:opacity-60"
                }`}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  className="h-14 w-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Videos;