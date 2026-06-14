"use client";

import { useRef } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { useScrollReveal } from "@/app/hooks/useGsapAnimations";

const socialLinks = [
  {
    icon: FaFacebook,
    href: "https://facebook.com/royalerchhobi",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/royalerchhobi",
    label: "Instagram",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/channel/UC_v1UPT8P3y7hXNeXVS17qA",
    label: "YouTube",
  },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
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
      <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3 md:gap-8 items-center">
        <div className="footer-col flex flex-col gap-2 text-xs sm:text-sm text-white/60 text-center md:text-left">
          <h3 className="font-display text-base sm:text-lg uppercase tracking-wide text-white mb-1">
            Royalerchhobi Communications
          </h3>
          <p className="leading-relaxed">
            House 27, Road 2, Block B, Niketan,
            <br />
            Gulshan 01, Dhaka 1212, Bangladesh
          </p>
          <p>+880 1954 468837</p>
          <p className="break-all sm:break-normal">
            royalerchhobicommunications@gmail.com
          </p>
        </div>

        <div className="footer-col flex flex-col items-center gap-4 sm:gap-6">
          <Image
            src="/assest/logo.png"
            alt="Royalerchhobi logo"
            width={80}
            height={80}
            className="object-contain w-16 h-16 sm:w-20 sm:h-20"
          />
          <p className="text-[10px] sm:text-xs text-white/30 text-center" suppressHydrationWarning>
            © {new Date().getFullYear()} Royalerchhobi. All rights reserved.
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
