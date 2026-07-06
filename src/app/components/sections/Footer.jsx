"use client";

import { useRef } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaBehance  } from "react-icons/fa";
import { useScrollReveal } from "@/app/hooks/useGsapAnimations";

const socialLinks = [
  {
    icon: FaBehance,
    href: "https://www.behance.net/royalerchhobi/moodboards",
    label: "Behance",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/royalscomm",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/royalerchhobi_com",
    label: "Instagram",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/channel/UC_v1UPT8P3y7hXNeXVS17qA",
    label: "YouTube",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/royalerchhobi-communications-1b70492b3",
    label: "LinkedIn",
  },
];

const Footer = () => {
  const footerRef = useRef(null);

  useScrollReveal(footerRef, ".footer-col", {
    mobileY: 24,
    desktopY: 36,
    stagger: 0.12,
    duration: 0.7,
    start: "top 95%",
  });

  return (
    <footer
      ref={footerRef}
      className="bg-black px-4 sm:px-6 py-12 sm:py-16 md:px-20"
    >
      <div className="flex flex-col gap-10 sm:gap-12 md:flex-row md:items-center md:justify-between">
        <div className="footer-col flex flex-col gap-2 text-xs sm:text-sm text-white/60 text-center md:text-left">
          <h3 className="font-display text-base sm:text-lg  tracking-wide text-white mb-1">
            Royalerchhobi Communications
          </h3>
          <p className="leading-relaxed">
            House 5, Road 119
            <br />
            Mohakhali DOHS, Dhaka 1212, Bangladesh
          </p>
        </div>

        <div className="footer-col flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-2 sm:gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-black"
              >
                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
            ))}
          </div>
          <p
            className="text-[10px] sm:text-xs text-white/30 text-center"
            suppressHydrationWarning
          >
            © {new Date().getFullYear()} Royalerchhobi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;