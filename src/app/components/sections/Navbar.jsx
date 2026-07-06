"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useMountReveal } from "@/app/hooks/useGsapAnimations";

const navData = [
  { id: 1, title: "Work", link: "#work" },
  { id: 2, title: "Services", link: "#services" },
  { id: 3, title: "About", link: "#about" },
  { id: 4, title: "Contact", link: "#contact" },
];

const SCROLL_THRESHOLD = 40;

const Navbar = () => {
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMountReveal(headerRef, ".nav-item", { delay: 0.2, stagger: 0.08, y: 16 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-yellow-100/10 backdrop-blur-md backdrop-saturate-150"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <div className="flex justify-between items-center py-2 px-4 sm:px-8 md:px-20">
        <Image
          src="/assest/logo.png"
          alt="Logo"
          width={44}
          height={44}
          className="nav-item object-contain md:w-11 md:h-11 sm:w-9 sm:h-9"
        />

        <nav className="hidden md:flex gap-6 lg:gap-10">
          {navData.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="nav-item font-body text-black hover:opacity-70 transition-opacity text-xs lg:text-sm uppercase tracking-[0.18em]"
            >
              {item.title}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="nav-item relative z-50 flex md:hidden h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 opacity-100 focus:outline-none"
        >
          <span
            className={`block h-0.5 w-6 bg-accent transition-transform duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-accent transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-accent transition-transform duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-yellow-50/20 backdrop-blur-md backdrop-saturate-150">
          <div className="flex flex-col px-4 py-4 gap-4">
            {navData.map((item) => (
              <a
                key={item.id}
                href={item.link}
                onClick={closeMenu}
                className="text-black hover:opacity-70 transition-opacity font-body text-sm uppercase tracking-[0.15em] py-2"
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;