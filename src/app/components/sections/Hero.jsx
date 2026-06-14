"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroPhotos from "@/app/lib/heroPhotos";
import Image from "next/image";
import Masonry from "@mui/lab/Masonry";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll(".masonry-item");
    if (!items) return;

    gsap.fromTo(
      items,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="pt-28 px-20">
      <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={2} className="my-10">
        {heroPhotos.map((photo) => (
          <div
            key={photo.id}
            className="masonry-item overflow-hidden rounded-lg"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Hero;