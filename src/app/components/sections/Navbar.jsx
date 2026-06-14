import Image from "next/image";
import React from "react";

const navData = [
  { id: 1, title: "Work", link: "#work" },
  { id: 2, title: "Services", link: "#services" },
  { id: 3, title: "About", link: "#about" },
  { id: 4, title: "Contact", link: "#contact" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center py-6 px-20">
        <Image src="/assest/logo.png" alt="Logo" width={40} height={40} className="object-contain" />
        <div className="flex gap-8 text-black">
          {navData.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="hover:opacity-70 transition-opacity"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;