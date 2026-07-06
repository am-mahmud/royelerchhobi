// "use client";

// import Image from "next/image";
// import { useRef, useState } from "react";
// import { useMountReveal } from "@/app/hooks/useGsapAnimations";

// const navData = [
//   { id: 1, title: "Work", link: "#work" },
//   { id: 2, title: "Services", link: "#services" },
//   { id: 3, title: "About", link: "#about" },
//   { id: 4, title: "Contact", link: "#contact" },
// ];

// const Navbar = () => {
//   const headerRef = useRef(null);
//   const [isOpen, setIsOpen] = useState(false);

//   useMountReveal(headerRef, ".nav-item", { delay: 0.2, stagger: 0.08, y: 16 });

//   const toggleMenu = () => setIsOpen((prev) => !prev);
//   const closeMenu = () => setIsOpen(false);

//   return (
//     <header ref={headerRef} className="top-0 left-0 w-full z-50 bg-transparent">
//       <div className="flex justify-between items-center py-4 px-4 sm:px-8 md:px-20">
//         <Image
//           src="/assest/logo.png"
//           alt="Logo"
//           width={60}
//           height={60}
//           className="nav-item object-contain md:w-16 md:h-16 sm:w-10 sm:h-10"
//         />

//         <nav className="hidden md:flex gap-6 lg:gap-10">
//           {navData.map((item) => (
//             <a
//               key={item.id}
//               href={item.link}
//               className="nav-item font-body text-accent hover:opacity-70 transition-opacity text-xs lg:text-sm uppercase tracking-[0.18em]"
//             >
//               {item.title}
//             </a>
//           ))}
//         </nav>

//         <button
//           onClick={toggleMenu}
//           className="nav-item md:hidden flex flex-col gap-1.5 focus:outline-none"
//           aria-label="Toggle menu"
//         >
//           <span
//             className={`w-6 h-0.5 bg-accent transition-transform duration-300 ${
//               isOpen ? "rotate-45 translate-y-2" : ""
//             }`}
//           />
//           <span
//             className={`w-6 h-0.5 bg-accent transition-opacity duration-300 ${
//               isOpen ? "opacity-0" : ""
//             }`}
//           />
//           <span
//             className={`w-6 h-0.5 bg-accent transition-transform duration-300 ${
//               isOpen ? "-rotate-45 -translate-y-2" : ""
//             }`}
//           />
//         </button>
//       </div>

//       {isOpen && (
//         <nav className="md:hidden bg-white/95 backdrop-blur-sm border-b border-black/5">
//           <div className="flex flex-col px-4 py-4 gap-4">
//             {navData.map((item) => (
//               <a
//                 key={item.id}
//                 href={item.link}
//                 onClick={closeMenu}
//                 className="text-accent hover:opacity-70 transition-opacity font-body text-sm uppercase tracking-[0.15em] font-bold py-2"
//               >
//                 {item.title}
//               </a>
//             ))}
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Navbar;

"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useMountReveal } from "@/app/hooks/useGsapAnimations";

const navData = [
  { id: 1, title: "Work", link: "#work" },
  { id: 2, title: "Services", link: "#services" },
  { id: 3, title: "About", link: "#about" },
  { id: 4, title: "Contact", link: "#contact" },
];

const Navbar = () => {
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useMountReveal(headerRef, ".nav-item", { delay: 0.2, stagger: 0.08, y: 16 });

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 bg-yellow-100/10 backdrop-blur-md backdrop-saturate-150"
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
              className="nav-item font-body text-accent hover:opacity-70 transition-opacity text-xs lg:text-sm uppercase tracking-[0.18em]"
            >
              {item.title}
            </a>
          ))}
        </nav>

        <button
          onClick={toggleMenu}
          className="nav-item md:hidden flex flex-col gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-accent transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-accent transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-accent transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
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
                className="text-accent hover:opacity-70 transition-opacity font-body text-sm uppercase tracking-[0.15em] font-bold py-2"
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